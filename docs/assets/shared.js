(function () {
  const siteData = window.siteData;
  const plannerFlagIds = siteData.planner.flags.map((flag) => flag.id);

  function createEmptyFlags() {
    return Object.fromEntries(plannerFlagIds.map((flagId) => [flagId, false]));
  }

  function createDefaultPlannerState() {
    const firstJourney = siteData.journeys[0];

    return {
      journeyId: firstJourney.id,
      serviceId: firstJourney.serviceIds[0],
      learnerStatus: "no",
      officeId: "unknown",
      profileId: "private",
      vehicleType: "car",
      fuelType: "petrol",
      flags: createEmptyFlags()
    };
  }

  function getJourneyById(id) {
    return siteData.journeys.find((journey) => journey.id === id);
  }

  function getServiceById(id) {
    return siteData.services.find((service) => service.id === id);
  }

  function getToolById(id) {
    return siteData.officialTools.find((tool) => tool.id === id);
  }

  function getFormById(id) {
    return siteData.formLibrary.find((form) => form.id === id);
  }

  function getOfficeByCode(code) {
    return siteData.offices.find((office) => office.code.toLowerCase() === code.toLowerCase());
  }

  function getServiceResources(serviceId) {
    return siteData.serviceResources[serviceId] || { formIds: [], toolIds: [] };
  }

  function dedupeList(items) {
    return [...new Set((items || []).filter(Boolean))];
  }

  function dedupeLinksByUrl(items) {
    const seen = new Set();

    return (items || []).filter((item) => {
      if (!item || !item.url || seen.has(item.url)) {
        return false;
      }

      seen.add(item.url);
      return true;
    });
  }

  function getDefaultServiceForJourney(journeyId, state) {
    if (journeyId === "new-driver") {
      return state.learnerStatus === "yes" ? "permanent-driving-licence" : "learner-licence";
    }

    if (journeyId === "moved-or-shifting-state" && state.flags.crossJurisdiction) {
      return "noc";
    }

    const journey = getJourneyById(journeyId);
    return journey ? journey.serviceIds[0] : siteData.featuredIds[0];
  }

  function getPlannerServiceOptions(state) {
    const journey = getJourneyById(state.journeyId);

    if (!journey) {
      return siteData.services;
    }

    if (state.journeyId === "new-driver") {
      return [getServiceById(getDefaultServiceForJourney(state.journeyId, state))].filter(Boolean);
    }

    return journey.serviceIds.map((serviceId) => getServiceById(serviceId)).filter(Boolean);
  }

  function shouldShowLearnerStatusQuestion(state) {
    return state.journeyId === "new-driver";
  }

  function shouldShowOfficeQuestion(service) {
    if (!service) {
      return false;
    }

    return (
      service.category === "vehicle" ||
      [
        "permanent-driving-licence",
        "dl-renewal",
        "duplicate-dl",
        "dl-address-change",
        "international-driving-permit",
        "permit-services"
      ].includes(service.id)
    );
  }

  function shouldShowProfileQuestion(service) {
    if (!service) {
      return false;
    }

    return (
      service.category === "compliance" ||
      service.category === "vehicle" ||
      ["learner-licence", "permanent-driving-licence"].includes(service.id)
    );
  }

  function getRelevantFlags(service, state) {
    const relevantIds = new Set();

    if (!service) {
      return [];
    }

    if (service.category === "vehicle") {
      relevantIds.add("financed");
    }

    if (["duplicate-dl", "duplicate-rc"].includes(service.id)) {
      relevantIds.add("lost");
    }

    if (["dl-address-change", "rc-address-change"].includes(service.id) || state.journeyId === "moved-or-shifting-state") {
      relevantIds.add("addressChanged");
    }

    if (["transfer-ownership", "noc", "rc-address-change", "rc-renewal"].includes(service.id) || state.journeyId === "moved-or-shifting-state") {
      relevantIds.add("crossJurisdiction");
    }

    return siteData.planner.flags.filter((flag) => relevantIds.has(flag.id));
  }

  function normalizePlannerState(inputState) {
    const state = {
      ...createDefaultPlannerState(),
      ...inputState,
      flags: {
        ...createEmptyFlags(),
        ...(inputState && inputState.flags ? inputState.flags : {})
      }
    };

    if (!siteData.journeys.some((journey) => journey.id === state.journeyId)) {
      state.journeyId = siteData.journeys[0].id;
    }

    const candidateServiceId = getDefaultServiceForJourney(state.journeyId, state);
    const serviceOptions = getPlannerServiceOptions(state).map((service) => service.id);

    if (!serviceOptions.includes(state.serviceId)) {
      state.serviceId = candidateServiceId;
    }

    if (!serviceOptions.includes(state.serviceId)) {
      state.serviceId = serviceOptions[0];
    }

    if (!siteData.planner.officeOptions.some((entry) => entry.id === state.officeId)) {
      state.officeId = "unknown";
    }

    if (!siteData.planner.profileOptions.some((entry) => entry.id === state.profileId)) {
      state.profileId = "private";
    }

    if (!siteData.planner.learnerStatusOptions.some((entry) => entry.id === state.learnerStatus)) {
      state.learnerStatus = "no";
    }

    if (!siteData.planner.vehicleTypeOptions.some((entry) => entry.id === state.vehicleType)) {
      state.vehicleType = "car";
    }

    if (!siteData.planner.fuelTypeOptions.some((entry) => entry.id === state.fuelType)) {
      state.fuelType = "petrol";
    }

    const service = getServiceById(state.serviceId);

    if (!shouldShowOfficeQuestion(service)) {
      state.officeId = "unknown";
    }

    if (!shouldShowProfileQuestion(service)) {
      state.profileId = "private";
    }

    if (!["tax-services", "puc-requirements"].includes(service.id)) {
      state.vehicleType = "car";
    }

    if (service.id !== "puc-requirements") {
      state.fuelType = "petrol";
    }

    const relevantFlagIds = new Set(getRelevantFlags(service, state).map((flag) => flag.id));
    plannerFlagIds.forEach((flagId) => {
      if (!relevantFlagIds.has(flagId)) {
        state.flags[flagId] = false;
      }
    });

    return state;
  }

  function getPlannerSteps(state) {
    const normalized = normalizePlannerState(state);
    const service = getServiceById(normalized.serviceId);
    const serviceOptions = getPlannerServiceOptions(normalized);
    const relevantFlags = getRelevantFlags(service, normalized);
    const stepMeta = siteData.wizardMeta.stepMeta;

    return [
      {
        id: "journey",
        title: stepMeta.journey.title,
        help: stepMeta.journey.help
      },
      ...(shouldShowLearnerStatusQuestion(normalized)
        ? [
            {
              id: "learnerStatus",
              title: stepMeta.learnerStatus.title,
              help: stepMeta.learnerStatus.help
            }
          ]
        : []),
      ...(serviceOptions.length > 1
        ? [
            {
              id: "service",
              title: stepMeta.service.title,
              help: stepMeta.service.help
            }
          ]
        : []),
      ...(shouldShowOfficeQuestion(service)
        ? [
            {
              id: "office",
              title: stepMeta.office.title,
              help: stepMeta.office.help
            }
          ]
        : []),
      ...(shouldShowProfileQuestion(service)
        ? [
            {
              id: "profile",
              title: stepMeta.profile.title,
              help: stepMeta.profile.help
            }
          ]
        : []),
      ...(["tax-services", "puc-requirements"].includes(service.id)
        ? [
            {
              id: "vehicleType",
              title: stepMeta.vehicleType.title,
              help: stepMeta.vehicleType.help
            }
          ]
        : []),
      ...(service.id === "puc-requirements"
        ? [
            {
              id: "fuelType",
              title: stepMeta.fuelType.title,
              help: stepMeta.fuelType.help
            }
          ]
        : []),
      ...(relevantFlags.length
        ? [
            {
              id: "flags",
              title: stepMeta.flags.title,
              help: stepMeta.flags.help
            }
          ]
        : [])
    ];
  }

  function getPortalLabel(service) {
    const labels = service.officialLinks.map((link) => link.label.toLowerCase());

    if (labels.some((label) => label.includes("sarathi"))) {
      return "Sarathi";
    }

    if (labels.some((label) => label.includes("vahan"))) {
      return "Vahan";
    }

    if (service.id === "permit-services") {
      return "Permit portal / Maharashtra Transport";
    }

    if (service.category === "licence") {
      return "Sarathi";
    }

    if (service.category === "vehicle") {
      return "Vahan";
    }

    return "Official portal";
  }

  function getPlannerOfficeGuidance(service, state) {
    if (state.officeId === "mh11") {
      return "Use MH-11 Satara as the starting office and confirm the record on the official portal before payment.";
    }

    if (state.officeId === "mh50") {
      return "Use MH-50 Karad as the starting office and confirm the record on the official portal before payment.";
    }

    if (state.officeId === "other-state") {
      return "Expect extra verification because the existing record is outside Satara district or outside Maharashtra.";
    }

    if (service.officeVisit.toLowerCase().includes("required")) {
      return "An office visit is part of this service. If you already have a DL or RC, use the office code on that record first.";
    }

    return "If you already have a DL or RC, use the office code on that record first. Otherwise confirm jurisdiction on the official portal.";
  }

  function getGenericOfficeGuidance(service) {
    if (service.officeVisit.toLowerCase().includes("required")) {
      return "This service usually ends with an office visit or verification step. Use the office code on the current record whenever possible.";
    }

    return "Use the office code on your current DL or RC if you already have a record. If you are unsure, confirm the office on the official portal before payment.";
  }

  function getPlannerReadiness(service) {
    if (service.officeVisit.toLowerCase().includes("required")) {
      return "Office visit expected";
    }

    if (service.officeVisit.toLowerCase().includes("possible") || service.appointment.toLowerCase().includes("sometimes")) {
      return "Keep room for verification";
    }

    return "Online-first service";
  }

  function getOfficeByPlannerId(officeId) {
    if (officeId === "mh11") {
      return siteData.offices.find((office) => office.code === "MH-11") || null;
    }

    if (officeId === "mh50") {
      return siteData.offices.find((office) => office.code === "MH-50") || null;
    }

    return null;
  }

  function createPhoneHref(phone) {
    return `tel:${phone.replace(/[^0-9+]/g, "")}`;
  }

  function getConditionalDocs(service, state) {
    const docs = [...(service.extraDocs || [])];
    const notes = [];
    const reasons = [];

    if (state && state.flags.lost) {
      docs.push("Police report, diary, or loss acknowledgement where the document is lost");
      reasons.push("Loss-related papers were added because you said the document is lost or damaged.");
    }

    if (state && state.flags.addressChanged) {
      docs.push("Current address proof matching the new address");
      reasons.push("Address-proof guidance was expanded because you said the address has changed.");
    }

    if (state && state.flags.financed && service.category === "vehicle") {
      docs.push("Financier NOC or finance-related papers if the vehicle record is loan-linked");
      notes.push("Finance-linked vehicles can trigger extra financier verification.");
      reasons.push("Financier papers were added because you said the vehicle is financed or loan-linked.");
    }

    if (state && state.profileId === "transport") {
      docs.push("Commercial or transport papers such as permit, fitness, or route authorisation where applicable");
      notes.push("Transport and commercial cases usually face more scrutiny than private cases.");
      reasons.push("Commercial and transport papers were added because you selected transport / commercial.");
    }

    if (state && state.flags.crossJurisdiction) {
      docs.push("Cross-jurisdiction proof or linked NOC papers where required");
      notes.push("Moving records across jurisdiction can add verification and timing delays.");
      reasons.push("Cross-jurisdiction papers were added because you said the vehicle or record is moving across jurisdictions.");
    }

    if (state && state.officeId === "other-state" && service.category === "licence") {
      notes.push("Out-of-state licence records can take longer because verification may be manual.");
      reasons.push("Verification warning was added because you selected another state or an outside record.");
    }

    if (state && service.id === "tax-services") {
      if (state.vehicleType === "two-wheeler") {
        notes.push("Two-wheeler tax can still vary by class, age, and state rule slabs.");
        reasons.push("Tax notes were narrowed for a two-wheeler case.");
      }

      if (state.vehicleType === "commercial" || state.profileId === "transport") {
        docs.push("Permit, fitness, or transport classification papers where the tax category depends on commercial use");
        notes.push("Commercial tax cases depend more heavily on permit class, fitness, and transport categorisation.");
        reasons.push("Commercial tax guidance was added because you selected a transport or commercial case.");
      }
    }

    if (state && service.id === "puc-requirements") {
      if (state.vehicleType === "commercial") {
        notes.push("Commercial vehicles may face stricter downstream checks when PUC is used in RC-side workflows.");
        reasons.push("Commercial PUC guidance was added because you selected a transport or commercial vehicle.");
      }

      if (state.fuelType === "diesel") {
        notes.push("Diesel vehicle owners should double-check that the PUC center enters the correct fuel type and result values.");
        reasons.push("Diesel-specific PUC guidance was added because you selected diesel.");
      }

      if (state.fuelType === "ev-other") {
        notes.push("If the vehicle is electric, hybrid, or the fuel type is unclear, confirm what downstream service actually needs before visiting the RTO.");
        reasons.push("A broader PUC note was added because the fuel type is electric, hybrid, or uncertain.");
      }
    }

    return {
      docs: dedupeList(docs),
      notes: dedupeList(notes),
      reasons: dedupeList(reasons)
    };
  }

  function getServiceSectionCounts(service, state) {
    const conditional = getConditionalDocs(service, state);
    const selectedOffice = state ? getOfficeByPlannerId(state.officeId) : null;
    const informationCount = service.information && service.information.sections ? service.information.sections.length : 0;

    return {
      steps: service.steps.length,
      documents: service.requiredDocs.length + conditional.docs.length,
      information: informationCount,
      "fees-forms": service.forms.length + service.fees.length,
      office: selectedOffice || (state && state.officeId === "other-state") ? 1 : siteData.offices.length
    };
  }

  function getOfficialPageLinks(service) {
    const resources = getServiceResources(service.id);
    const toolLinks = resources.toolIds.map((toolId) => getToolById(toolId)).filter(Boolean);

    return dedupeLinksByUrl([
      ...service.officialLinks.map((link) => ({
        ...link,
        description: "Official service page or rule reference"
      })),
      ...toolLinks
    ]);
  }

  function getFormLookupHint(form) {
    return form.lookupHint || "Open the official forms page and search for the form number.";
  }

  function renderFormActions(form) {
    return `
      <div class="inline-actions">
        <a class="button button-secondary" href="${form.url}" target="_blank" rel="noreferrer">Open official page</a>
        ${form.downloadUrl ? `<a class="button button-secondary" href="${form.downloadUrl}" target="_blank" rel="noreferrer">Direct PDF</a>` : ""}
      </div>
      <p class="inline-note">${getFormLookupHint(form)}</p>
    `;
  }

  function createBadge(label, kind) {
    return `<span class="pill ${kind ? `pill-${kind}` : ""}">${label}</span>`;
  }

  function renderAtGlance(service) {
    return `
      <section class="content-card at-glance-card">
        <div class="section-head compact">
          <h2>At a glance</h2>
          <p class="muted-copy">This quick row shows the main operational details before you open the full sections below.</p>
        </div>
        <div class="at-glance-grid">
          <article class="at-glance-item">
            <span class="at-glance-label">Start on</span>
            <strong>${getPortalLabel(service)}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">Office visit</span>
            <strong>${service.officeVisit}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">Appointment</span>
            <strong>${service.appointment}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">Inspection</span>
            <strong>${service.inspectionSummary}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">Main forms</span>
            <strong>${service.mainFormsCountLabel}</strong>
          </article>
        </div>
      </section>
    `;
  }

  function renderServiceSummary(service, state, options = {}) {
    const officeGuidance = state ? getPlannerOfficeGuidance(service, state) : getGenericOfficeGuidance(service);
    const selectedOffice = state ? getOfficeByPlannerId(state.officeId) : null;
    const guideEyebrow = options.mode === "wizard" ? "Full guide for this service" : "Complete service guide";
    const purposeText = service.short || service.bestFor;

    return `
      <div class="result-summary">
        <div class="result-summary-main">
          <p class="eyebrow">${guideEyebrow}</p>
          <h2>${service.title}</h2>
          <p class="result-lead">${purposeText}</p>
        </div>
        <div class="result-summary-meta">
          ${createBadge(`Start on ${getPortalLabel(service)}`)}
          ${createBadge(getPlannerReadiness(service), "warning")}
          ${createBadge(`Office visit: ${service.officeVisit}`, "alert")}
        </div>
        <div class="summary-grid">
          <article class="summary-card summary-card-primary">
            <h3>Use this when</h3>
            <p>${service.bestFor}</p>
          </article>
          <article class="summary-card">
            <h3>Start with</h3>
            <p>${service.recommendedAction}</p>
          </article>
          <article class="summary-card">
            <h3>Office guidance</h3>
            <p>${officeGuidance}</p>
          </article>
          ${
            selectedOffice
              ? `
                <article class="summary-card summary-card-office">
                  <h3>Selected office</h3>
                  <p><strong>${selectedOffice.name}</strong></p>
                  <p>${selectedOffice.address}</p>
                  <p><a href="${createPhoneHref(selectedOffice.phone)}">${selectedOffice.phone}</a></p>
                  <p><a href="mailto:${selectedOffice.email}">${selectedOffice.email}</a></p>
                </article>
              `
              : ""
          }
        </div>
      </div>
    `;
  }

  function getInformationSections(service) {
    if (service.information && service.information.sections && service.information.sections.length) {
      return service.information;
    }

    return {
      intro: service.summary,
      sections: [
        {
          title: "What this service is for",
          body: service.bestFor
        },
        {
          title: "What to keep in mind",
          items: dedupeList([...(service.eligibility || []), ...(service.notices || [])])
        }
      ]
    };
  }

  function renderInformationSection(service) {
    const information = getInformationSections(service);
    const headings = ["What it is", "When you need it", "What people often confuse"];

    return `
      <article class="content-card content-card-highlight">
        <h3>Background and explanation</h3>
        <p>${information.intro}</p>
      </article>
      <div class="section-grid">
        ${information.sections
          .map(
            (section, index) => `
              <article class="content-card">
                <h3>${headings[index] || section.title}</h3>
                ${section.body ? `<p>${section.body}</p>` : ""}
                ${section.items && section.items.length ? `<ul class="content-list">${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderDocumentsSection(service, state) {
    const conditional = getConditionalDocs(service, state);
    const practicalDocs = service.practicalDocs || [];

    return `
      <div class="section-grid">
        <article class="content-card">
          <h3>Required documents</h3>
          <p class="muted-copy">These are the main official documents that most applicants should keep ready for this service.</p>
          <ul class="content-list">
            ${service.requiredDocs.map((doc) => `<li>${doc}</li>`).join("")}
          </ul>
        </article>
        <article class="content-card">
          <h3>Sometimes needed</h3>
          <p class="muted-copy">These usually depend on verification, office routing, finance status, address change, or other case-specific conditions.</p>
          ${
            conditional.docs.length
              ? `<ul class="content-list">${conditional.docs.map((doc) => `<li>${doc}</li>`).join("")}</ul>`
              : `<p class="muted-copy">No extra supporting documents are highlighted for this service.</p>`
          }
        </article>
      </div>
      <article class="content-card content-card-highlight">
        <h3>Backup papers often asked</h3>
        <p class="muted-copy">${siteData.practicalDocsNote}</p>
        <ul class="content-list">
          ${practicalDocs.map((doc) => `<li>${doc}</li>`).join("")}
        </ul>
      </article>
    `;
  }

  function renderStepsSection(service, state) {
    const conditional = getConditionalDocs(service, state);
    const watchOuts = dedupeList([...(service.notices || []), ...(conditional.notes || [])]);

    return `
      <article class="content-card content-card-highlight">
        <h3>Before you start</h3>
        <p>${service.recommendedAction}</p>
      </article>
      <article class="content-card">
        <h3>Step-by-step</h3>
        <ol class="step-list">
          ${service.steps
            .map(
              (step, index) => `
                <li>
                  <span class="step-number">${index + 1}</span>
                  <div>${step}</div>
                </li>
              `
            )
            .join("")}
        </ol>
      </article>
      ${
        watchOuts.length
          ? `
            <article class="content-card">
              <h3>Watch out for</h3>
              <ul class="content-list">
                ${watchOuts.map((note) => `<li>${note}</li>`).join("")}
              </ul>
            </article>
          `
          : ""
      }
    `;
  }

  function renderFeesFormsSection(service) {
    const resources = getServiceResources(service.id);
    const formLinks = resources.formIds.map((formId) => getFormById(formId)).filter(Boolean);
    const officialPageLinks = getOfficialPageLinks(service);
    const hasNamedForms = !(service.forms.length === 1 && /portal-driven/i.test(service.forms[0]));
    const validityNote = service.timelineSummary === service.validity ? "" : `<p class="muted-copy">${service.validity}</p>`;

    return `
      <div class="section-grid">
        <article class="content-card content-card-highlight">
          <h3>Typical timeline / validity</h3>
          <p>${service.timelineSummary}</p>
          ${validityNote}
        </article>
        <article class="content-card">
          <h3>Fees</h3>
          <p class="muted-copy">Treat the live portal amount as final wherever the system calculates the amount automatically.</p>
          <ul class="content-list">
            ${service.fees.map((fee) => `<li>${fee}</li>`).join("")}
          </ul>
        </article>
        <article class="content-card">
          <h3>Forms users may need</h3>
          <p class="muted-copy">
            ${
              service.mainFormsSummary === "Mostly portal-driven"
                ? "This service is mostly portal-driven. Use the official page below for the latest form and upload instructions."
                : `Main forms commonly used here: ${service.mainFormsSummary}.`
            }
          </p>
          ${
            hasNamedForms
              ? `
                <div class="tag-list">
                  ${service.forms.map((form) => `<span class="tag">${form}</span>`).join("")}
                </div>
              `
              : ""
          }
          ${
            formLinks.length
              ? `
                <div class="resource-stack">
                  ${formLinks
                    .map(
                      (form) => `
                        <article class="resource-card">
                          <strong>${form.formNo}</strong>
                          <span>${form.title}</span>
                          ${renderFormActions(form)}
                        </article>
                      `
                    )
                    .join("")}
                </div>
            `
            : `<p class="muted-copy">This workflow is mostly portal-driven. Use the official service page for the latest form and upload instructions.</p>`
          }
        </article>
      </div>
      <article class="content-card">
        <h3>Official links</h3>
        <div class="resource-stack">
          ${officialPageLinks
            .map(
              (link) => `
                <a class="resource-card" href="${link.url}" target="_blank" rel="noreferrer">
                  <strong>${link.label}</strong>
                  <span>${link.description}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function renderOfficeSection(service, state) {
    const officeGuidance = state ? getPlannerOfficeGuidance(service, state) : getGenericOfficeGuidance(service);
    const selectedOffice = state ? getOfficeByPlannerId(state.officeId) : null;
    const officeCards = selectedOffice
      ? `
          <article class="office-mini-card office-mini-card-selected">
            <p class="eyebrow">${selectedOffice.code}</p>
            <h3>${selectedOffice.name}</h3>
            <p>${selectedOffice.address}</p>
            <p class="muted-copy"><strong>Phone:</strong> <a href="${createPhoneHref(selectedOffice.phone)}">${selectedOffice.phone}</a></p>
            <p class="muted-copy"><strong>Email:</strong> <a href="mailto:${selectedOffice.email}">${selectedOffice.email}</a></p>
            <p class="muted-copy">${selectedOffice.note}</p>
          </article>
        `
      : state && state.officeId === "other-state"
        ? `
            <article class="office-mini-card office-mini-card-selected">
              <p class="eyebrow">Outside Satara</p>
              <h3>Record from another state or unclear jurisdiction</h3>
              <p>Expect extra verification, possible manual checking, and follow-up instructions from the official portal or office.</p>
              <p class="muted-copy">Use the current record details first and confirm the correct authority before payment.</p>
            </article>
          `
        : siteData.offices
            .map(
              (office) => `
                <article class="office-mini-card">
                  <p class="eyebrow">${office.code}</p>
                  <h3>${office.name}</h3>
                  <p>${office.address}</p>
                  <p class="muted-copy"><strong>Phone:</strong> <a href="${createPhoneHref(office.phone)}">${office.phone}</a></p>
                  <p class="muted-copy"><strong>Email:</strong> <a href="mailto:${office.email}">${office.email}</a></p>
                </article>
              `
            )
            .join("");

    return `
      <div class="section-grid">
        <article class="content-card">
          <h3>Office and appointment guidance</h3>
          <ul class="content-list">
            <li><strong>Start on:</strong> ${getPortalLabel(service)}</li>
            <li><strong>Appointment:</strong> ${service.appointment}</li>
            <li><strong>Office visit:</strong> ${service.officeVisit}</li>
            <li><strong>Inspection:</strong> ${service.inspection}</li>
          </ul>
          <p class="muted-copy">${officeGuidance}</p>
          <div class="inline-actions">
            <a class="button button-secondary" href="./offices.html">View office details</a>
          </div>
        </article>
        <article class="content-card">
          <h3>Before you visit</h3>
          <ul class="content-list">
            ${service.eligibility.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
      <div class="section-grid office-mini-grid">
        ${officeCards}
      </div>
    `;
  }

  function buildServiceSections(service, state) {
    const counts = getServiceSectionCounts(service, state);

    return [
      {
        id: "steps",
        label: "Steps",
        count: counts.steps,
        html: renderStepsSection(service, state)
      },
      {
        id: "documents",
        label: "Documents",
        count: counts.documents,
        html: renderDocumentsSection(service, state)
      },
      {
        id: "fees-forms",
        label: "Fees & Forms",
        count: counts["fees-forms"],
        html: renderFeesFormsSection(service)
      },
      {
        id: "office",
        label: "Office",
        count: counts.office,
        html: renderOfficeSection(service, state)
      },
      {
        id: "information",
        label: "Information",
        count: counts.information,
        html: renderInformationSection(service)
      }
    ];
  }

  function renderTabs(container, sections, scopeId, defaultTabId) {
    const initialTabId = sections.some((section) => section.id === defaultTabId) ? defaultTabId : sections[0].id;
    const tabList = `
      <div class="tab-list" role="tablist" aria-label="Service sections">
        ${sections
          .map(
            (section) => `
              <button
                class="tab-button ${section.id === initialTabId ? "is-active" : ""}"
                type="button"
                role="tab"
                aria-selected="${section.id === initialTabId ? "true" : "false"}"
                data-scope-id="${scopeId}"
                data-tab-id="${section.id}"
              >
                ${section.label}${section.count ? ` (${section.count})` : ""}
              </button>
            `
          )
          .join("")}
      </div>
    `;

    const panels = sections
      .map(
        (section) => `
          <section class="tab-panel ${section.id === initialTabId ? "is-active" : ""}" data-panel-scope="${scopeId}" data-panel-id="${section.id}">
            ${section.html}
          </section>
        `
      )
      .join("");

    container.innerHTML = `
      ${tabList}
      <div class="tab-panels">${panels}</div>
    `;

    container.querySelectorAll(`[data-scope-id="${scopeId}"]`).forEach((button) => {
      button.addEventListener("click", () => {
        container.querySelectorAll(`[data-scope-id="${scopeId}"]`).forEach((entry) => {
          entry.classList.toggle("is-active", entry === button);
          entry.setAttribute("aria-selected", entry === button ? "true" : "false");
        });

        container.querySelectorAll(`[data-panel-scope="${scopeId}"]`).forEach((panel) => {
          panel.classList.toggle("is-active", panel.dataset.panelId === button.dataset.tabId);
        });
      });
    });
  }

  function renderHelpfulFeedback(container, scopeId) {
    container.innerHTML = `
      <div class="feedback-card">
        <p>${siteData.wizardMeta.helpfulPrompt}</p>
        <div class="feedback-actions">
          <button class="feedback-button" type="button" data-feedback-scope="${scopeId}" data-feedback-value="yes">Helpful</button>
          <button class="feedback-button" type="button" data-feedback-scope="${scopeId}" data-feedback-value="no">Needs work</button>
        </div>
        <p class="feedback-response" data-feedback-response="${scopeId}" hidden>Thanks for the feedback.</p>
      </div>
    `;

    container.querySelectorAll(`[data-feedback-scope="${scopeId}"]`).forEach((button) => {
      button.addEventListener("click", () => {
        container.querySelectorAll(`[data-feedback-scope="${scopeId}"]`).forEach((entry) => {
          entry.classList.toggle("is-active", entry === button);
        });

        const response = container.querySelector(`[data-feedback-response="${scopeId}"]`);
        response.hidden = false;
        response.textContent =
          button.dataset.feedbackValue === "yes"
            ? "Thanks. Glad this was useful."
            : "Thanks. This tells us the guidance for this kind of case needs improvement.";
      });
    });
  }

  function renderFooterSources(container) {
    const officialGroups = siteData.sourceGroups.filter((group) => !group.title.toLowerCase().includes("public"));

    container.innerHTML = officialGroups
      .map(
        (group) => `
          <div class="footer-source-group">
            <strong>${group.title}</strong>
            <div class="footer-source-links">
              ${group.links
                .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
                .join("")}
            </div>
          </div>
        `
      )
      .join("");
  }

  function getRelatedServices(service) {
    const configured = (service.relatedServices || [])
      .map((item) => {
        const related = getServiceById(item.id);
        return related ? { ...related, reason: item.reason } : null;
      })
      .filter(Boolean);

    if (configured.length) {
      return configured;
    }

    return siteData.services
      .filter((entry) => entry.category === service.category && entry.id !== service.id)
      .slice(0, 3)
      .map((entry) => ({
        ...entry,
        reason: "Another related service in the same category."
      }));
  }

  function createServiceHref(serviceId) {
    return `./service.html?service=${encodeURIComponent(serviceId)}`;
  }

  function copyText(value, onDone) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(onDone);
      return;
    }

    onDone();
  }

  function readPlannerStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const state = createDefaultPlannerState();

    if (params.get("journey") && siteData.journeys.some((journey) => journey.id === params.get("journey"))) {
      state.journeyId = params.get("journey");
    }

    if (params.get("service") && siteData.services.some((service) => service.id === params.get("service"))) {
      state.serviceId = params.get("service");
    }

    if (
      params.get("learnerStatus") &&
      siteData.planner.learnerStatusOptions.some((entry) => entry.id === params.get("learnerStatus"))
    ) {
      state.learnerStatus = params.get("learnerStatus");
    }

    if (params.get("office") && siteData.planner.officeOptions.some((entry) => entry.id === params.get("office"))) {
      state.officeId = params.get("office");
    }

    if (params.get("profile") && siteData.planner.profileOptions.some((entry) => entry.id === params.get("profile"))) {
      state.profileId = params.get("profile");
    }

    if (params.get("vehicleType") && siteData.planner.vehicleTypeOptions.some((entry) => entry.id === params.get("vehicleType"))) {
      state.vehicleType = params.get("vehicleType");
    }

    if (params.get("fuelType") && siteData.planner.fuelTypeOptions.some((entry) => entry.id === params.get("fuelType"))) {
      state.fuelType = params.get("fuelType");
    }

    plannerFlagIds.forEach((flagId) => {
      state.flags[flagId] = params.get(flagId) === "1";
    });

    return {
      state: normalizePlannerState(state),
      view: params.get("view") === "result" ? "result" : "wizard"
    };
  }

  function writePlannerStateToUrl(state, view) {
    const params = new URLSearchParams();
    const normalized = normalizePlannerState(state);

    params.set("journey", normalized.journeyId);
    params.set("service", normalized.serviceId);

    if (normalized.journeyId === "new-driver") {
      params.set("learnerStatus", normalized.learnerStatus);
    }

    if (normalized.officeId !== "unknown") {
      params.set("office", normalized.officeId);
    }

    if (normalized.profileId !== "private") {
      params.set("profile", normalized.profileId);
    }

    if (["tax-services", "puc-requirements"].includes(normalized.serviceId)) {
      params.set("vehicleType", normalized.vehicleType);
    }

    if (normalized.serviceId === "puc-requirements") {
      params.set("fuelType", normalized.fuelType);
    }

    plannerFlagIds.forEach((flagId) => {
      if (normalized.flags[flagId]) {
        params.set(flagId, "1");
      }
    });

    if (view === "result") {
      params.set("view", "result");
    }

    const nextUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.replaceState({}, "", nextUrl);
  }

  function groupFaqByCategory() {
    return siteData.faqCategories
      .map((category) => ({
        category,
        items: siteData.faq.filter((item) => item.category === category)
      }))
      .filter((group) => group.items.length);
  }

  window.SiteApp = {
    buildServiceSections,
    copyText,
    createBadge,
    createDefaultPlannerState,
    createServiceHref,
    dedupeList,
    getJourneyById,
    getPortalLabel,
    getPlannerServiceOptions,
    getPlannerSteps,
    getRelatedServices,
    getRelevantFlags,
    getOfficeByPlannerId,
    getServiceById,
    getServiceResources,
    getToolById,
    getFormById,
    getOfficeByCode,
    groupFaqByCategory,
    normalizePlannerState,
    readPlannerStateFromUrl,
    renderAtGlance,
    renderFooterSources,
    renderHelpfulFeedback,
    renderServiceSummary,
    renderTabs,
    shouldShowOfficeQuestion,
    shouldShowProfileQuestion,
    siteData,
    writePlannerStateToUrl
  };
})();
