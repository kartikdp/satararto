const plannerFlagIds = window.siteData.planner.flags.map((flag) => flag.id);

function createDefaultPlannerState() {
  const firstJourney = window.siteData.journeys[0];
  const flags = Object.fromEntries(plannerFlagIds.map((flagId) => [flagId, false]));

  return {
    journeyId: firstJourney.id,
    serviceId: firstJourney.serviceIds[0],
    officeId: "unknown",
    profileId: "private",
    flags
  };
}

const state = {
  activeCategory: "all",
  search: "",
  selectedServiceId: window.siteData.featuredIds[0],
  planner: createDefaultPlannerState()
};

const elements = {
  quickActions: document.getElementById("quick-actions"),
  statsGrid: document.getElementById("stats-grid"),
  journeyGrid: document.getElementById("journey-grid"),
  preflightGrid: document.getElementById("preflight-grid"),
  plannerForm: document.getElementById("planner-form"),
  plannerJourneyOptions: document.getElementById("planner-journey-options"),
  plannerServiceSelect: document.getElementById("planner-service-select"),
  plannerOfficeSelect: document.getElementById("planner-office-select"),
  plannerProfileOptions: document.getElementById("planner-profile-options"),
  plannerFlagOptions: document.getElementById("planner-flag-options"),
  plannerReset: document.getElementById("planner-reset"),
  plannerOutput: document.getElementById("planner-output"),
  categoryPills: document.getElementById("category-pills"),
  serviceSearch: document.getElementById("service-search"),
  serviceList: document.getElementById("service-list"),
  serviceDetail: document.getElementById("service-detail"),
  toolGroupGrid: document.getElementById("tool-group-grid"),
  downloadGroupGrid: document.getElementById("download-group-grid"),
  officeGrid: document.getElementById("office-grid"),
  bundleGrid: document.getElementById("bundle-grid"),
  signalList: document.getElementById("signal-list"),
  faqList: document.getElementById("faq-list"),
  sourceGrid: document.getElementById("source-grid"),
  siteToast: document.getElementById("site-toast")
};

let toastTimer = null;

function getServiceById(id) {
  return window.siteData.services.find((service) => service.id === id);
}

function getJourneyById(id) {
  return window.siteData.journeys.find((journey) => journey.id === id);
}

function getJourneyForService(serviceId) {
  return window.siteData.journeys.find((journey) => journey.serviceIds.includes(serviceId));
}

function getCategoryById(id) {
  return window.siteData.categories.find((category) => category.id === id);
}

function getToolById(id) {
  return window.siteData.officialTools.find((tool) => tool.id === id);
}

function getFormById(id) {
  return window.siteData.formLibrary.find((form) => form.id === id);
}

function getServiceResources(serviceId) {
  return window.siteData.serviceResources[serviceId] || { formIds: [], toolIds: [] };
}

function dedupeList(items) {
  return [...new Set(items.filter(Boolean))];
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

function getFilteredServices() {
  return window.siteData.services.filter((service) => {
    const matchesCategory = state.activeCategory === "all" || service.category === state.activeCategory;
    const query = state.search.trim().toLowerCase();
    const haystack = [
      service.title,
      service.short,
      service.summary,
      service.bestFor,
      service.forms.join(" "),
      service.requiredDocs.join(" "),
      service.extraDocs.join(" "),
      (service.practicalDocs || []).join(" ")
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || haystack.includes(query));
  });
}

function ensureSelectedServiceVisible(filteredServices) {
  if (!filteredServices.some((service) => service.id === state.selectedServiceId)) {
    state.selectedServiceId = filteredServices.length ? filteredServices[0].id : null;
  }
}

function getPlannerServiceOptions() {
  const journey = getJourneyById(state.planner.journeyId);

  if (!journey) {
    return window.siteData.services;
  }

  return journey.serviceIds.map((serviceId) => getServiceById(serviceId)).filter(Boolean);
}

function getDefaultServiceForJourney(journeyId) {
  if (journeyId === "new-driver" && state.planner.flags.alreadyHasLearner) {
    return "permanent-driving-licence";
  }

  if (journeyId === "moved-or-shifting-state" && state.planner.flags.crossJurisdiction) {
    return "noc";
  }

  const journey = getJourneyById(journeyId);
  return journey ? journey.serviceIds[0] : window.siteData.featuredIds[0];
}

function syncPlannerServiceSelection() {
  const options = getPlannerServiceOptions().map((service) => service.id);

  if (!options.includes(state.planner.serviceId)) {
    state.planner.serviceId = getDefaultServiceForJourney(state.planner.journeyId);
  }

  if (!options.includes(state.planner.serviceId)) {
    state.planner.serviceId = options[0];
  }

  if (state.planner.serviceId) {
    state.selectedServiceId = state.planner.serviceId;
  }
}

function syncPlannerFromService(serviceId) {
  const journey = getJourneyForService(serviceId);

  if (journey) {
    state.planner.journeyId = journey.id;
  }

  state.planner.serviceId = serviceId;
}

function scrollToServices() {
  const target = document.getElementById("services");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function focusDetailOnSmallScreens() {
  if (window.innerWidth <= 1080) {
    const detailPanel = document.querySelector(".detail-panel");
    if (detailPanel) {
      detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function buildShareUrl({ includePlanner = false } = {}) {
  const url = new URL(window.location.href);
  url.search = "";

  if (state.selectedServiceId) {
    url.searchParams.set("service", state.selectedServiceId);
  }

  if (includePlanner) {
    url.searchParams.set("journey", state.planner.journeyId);
    url.searchParams.set("office", state.planner.officeId);
    url.searchParams.set("profile", state.planner.profileId);

    plannerFlagIds.forEach((flagId) => {
      if (state.planner.flags[flagId]) {
        url.searchParams.set(flagId, "1");
      }
    });
  }

  return url.toString();
}

function updateUrlState() {
  window.history.replaceState({}, "", buildShareUrl({ includePlanner: true }));
}

function hydrateStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");
  const journeyParam = params.get("journey");
  const officeParam = params.get("office");
  const profileParam = params.get("profile");

  if (journeyParam && getJourneyById(journeyParam)) {
    state.planner.journeyId = journeyParam;
  }

  if (officeParam && window.siteData.planner.officeOptions.some((entry) => entry.id === officeParam)) {
    state.planner.officeId = officeParam;
  }

  if (profileParam && window.siteData.planner.profileOptions.some((entry) => entry.id === profileParam)) {
    state.planner.profileId = profileParam;
  }

  plannerFlagIds.forEach((flagId) => {
    state.planner.flags[flagId] = params.get(flagId) === "1";
  });

  syncPlannerServiceSelection();

  if (serviceParam && getServiceById(serviceParam)) {
    state.selectedServiceId = serviceParam;
    syncPlannerFromService(serviceParam);
  } else {
    state.selectedServiceId = state.planner.serviceId;
  }

  syncPlannerServiceSelection();
}

function showToast(message) {
  elements.siteToast.textContent = message;
  elements.siteToast.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    elements.siteToast.classList.remove("is-visible");
  }, 2200);
}

async function copyToClipboard(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch (error) {
    showToast("Copy failed. You can copy the link from the address bar.");
  }
}

function setPrintMode(mode) {
  document.body.dataset.printMode = mode;
  window.print();
}

window.addEventListener("afterprint", () => {
  delete document.body.dataset.printMode;
});

function activateService(serviceId, options = {}) {
  const service = getServiceById(serviceId);
  if (!service) {
    return;
  }

  state.selectedServiceId = serviceId;

  if (!options.preservePlanner) {
    syncPlannerFromService(serviceId);
    syncPlannerServiceSelection();
  }

  if (options.category) {
    state.activeCategory = options.category;
  } else if (state.activeCategory !== "all" && state.activeCategory !== service.category) {
    state.activeCategory = service.category;
  }

  if (options.clearSearch) {
    state.search = "";
    elements.serviceSearch.value = "";
  }

  renderAll();
  updateUrlState();

  if (options.scrollToServices) {
    scrollToServices();
  }

  if (options.focusDetail) {
    focusDetailOnSmallScreens();
  }
}

function createBadge(label, kind = "") {
  return `<span class="badge ${kind}">${label}</span>`;
}

function createServiceLinkChip(service) {
  return `<button class="mini-chip" data-service-id="${service.id}">${service.title}</button>`;
}

function renderQuickActions() {
  elements.quickActions.innerHTML = window.siteData.featuredIds
    .map((id) => {
      const service = getServiceById(id);
      return `<button class="action-chip" data-service-id="${service.id}">${service.title}</button>`;
    })
    .join("");

  elements.quickActions.querySelectorAll("[data-service-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activateService(button.dataset.serviceId, {
        clearSearch: true,
        scrollToServices: true,
        focusDetail: true
      });
    });
  });
}

function renderStats() {
  const cards = [
    {
      value: window.siteData.services.length,
      label: "guided service pages with official links and document references"
    },
    {
      value: window.siteData.journeys.length,
      label: "start-here paths based on what the client is actually trying to do"
    },
    {
      value: window.siteData.formLibrary.length,
      label: "official forms linked from the built-in download center"
    },
    {
      value: "Planner",
      label: "interactive checklist builder for shareable client guidance"
    }
  ];

  elements.statsGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-card">
          <strong>${card.value}</strong>
          <span>${card.label}</span>
        </article>
      `
    )
    .join("");
}

function renderJourneys() {
  elements.journeyGrid.innerHTML = window.siteData.journeys
    .map((journey) => {
      const linkedServices = journey.serviceIds.map((serviceId) => getServiceById(serviceId)).filter(Boolean);
      const isActive = state.planner.journeyId === journey.id;

      return `
        <article class="journey-card ${isActive ? "is-active" : ""}">
          <p class="eyebrow">${getCategoryById(journey.category).label}</p>
          <h3>${journey.title}</h3>
          <p>${journey.description}</p>
          <div class="mini-chip-row">
            ${linkedServices.map((service) => createServiceLinkChip(service)).join("")}
          </div>
          <button class="journey-cta" data-journey-id="${journey.id}">Use this path</button>
        </article>
      `;
    })
    .join("");

  elements.journeyGrid.querySelectorAll("[data-service-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const service = getServiceById(button.dataset.serviceId);
      activateService(service.id, {
        category: service.category,
        clearSearch: true,
        scrollToServices: true,
        focusDetail: true
      });
    });
  });

  elements.journeyGrid.querySelectorAll("[data-journey-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.planner.journeyId = button.dataset.journeyId;
      state.planner.serviceId = getDefaultServiceForJourney(state.planner.journeyId);
      syncPlannerServiceSelection();
      renderAll();
      updateUrlState();
      document.getElementById("planner").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderPreflight() {
  elements.preflightGrid.innerHTML = window.siteData.preflight
    .map(
      (item) => `
        <article class="preflight-card">
          <span class="step-badge">${item.step}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderPlannerJourneyOptions() {
  elements.plannerJourneyOptions.innerHTML = window.siteData.journeys
    .map(
      (journey) => `
        <button
          class="planner-chip ${state.planner.journeyId === journey.id ? "is-active" : ""}"
          type="button"
          data-journey-id="${journey.id}"
        >
          <strong>${journey.title}</strong>
          <span>${journey.description}</span>
        </button>
      `
    )
    .join("");

  elements.plannerJourneyOptions.querySelectorAll("[data-journey-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.planner.journeyId = button.dataset.journeyId;
      state.planner.serviceId = getDefaultServiceForJourney(state.planner.journeyId);
      syncPlannerServiceSelection();
      renderAll();
      updateUrlState();
    });
  });
}

function renderPlannerServiceSelect() {
  const options = getPlannerServiceOptions();
  syncPlannerServiceSelection();

  elements.plannerServiceSelect.innerHTML = options
    .map((service) => `<option value="${service.id}">${service.title}</option>`)
    .join("");

  elements.plannerServiceSelect.value = state.planner.serviceId;
}

function renderPlannerOfficeSelect() {
  elements.plannerOfficeSelect.innerHTML = window.siteData.planner.officeOptions
    .map((option) => `<option value="${option.id}">${option.label}</option>`)
    .join("");

  elements.plannerOfficeSelect.value = state.planner.officeId;
}

function renderPlannerProfileOptions() {
  elements.plannerProfileOptions.innerHTML = window.siteData.planner.profileOptions
    .map(
      (option) => `
        <button
          class="planner-chip planner-chip--compact ${state.planner.profileId === option.id ? "is-active" : ""}"
          type="button"
          data-profile-id="${option.id}"
        >
          <strong>${option.label}</strong>
          <span>${option.description}</span>
        </button>
      `
    )
    .join("");

  elements.plannerProfileOptions.querySelectorAll("[data-profile-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.planner.profileId = button.dataset.profileId;
      renderAll();
      updateUrlState();
    });
  });
}

function renderPlannerFlagOptions() {
  elements.plannerFlagOptions.innerHTML = window.siteData.planner.flags
    .map(
      (flag) => `
        <label class="planner-flag ${state.planner.flags[flag.id] ? "is-active" : ""}">
          <input type="checkbox" data-flag-id="${flag.id}" ${state.planner.flags[flag.id] ? "checked" : ""} />
          <span>
            <strong>${flag.label}</strong>
            <small>${flag.description}</small>
          </span>
        </label>
      `
    )
    .join("");

  elements.plannerFlagOptions.querySelectorAll("[data-flag-id]").forEach((input) => {
    input.addEventListener("change", () => {
      state.planner.flags[input.dataset.flagId] = input.checked;

      if (input.dataset.flagId === "alreadyHasLearner" && state.planner.journeyId === "new-driver") {
        state.planner.serviceId = getDefaultServiceForJourney(state.planner.journeyId);
      }

      if (input.dataset.flagId === "crossJurisdiction" && state.planner.journeyId === "moved-or-shifting-state") {
        state.planner.serviceId = getDefaultServiceForJourney(state.planner.journeyId);
      }

      syncPlannerServiceSelection();
      renderAll();
      updateUrlState();
    });
  });
}

function getPlannerOfficeGuidance(service) {
  if (state.planner.officeId === "mh11") {
    return "Use MH-11 Satara as the starting office reference and confirm the record on the official portal.";
  }

  if (state.planner.officeId === "mh50") {
    return "Use MH-50 Karad as the starting office reference and confirm the record on the official portal.";
  }

  if (state.planner.officeId === "other-state") {
    if (service.category === "licence") {
      return "Expect verification, NOC, or record confirmation from the original licensing authority before the case completes.";
    }

    return "Expect cross-jurisdiction verification, NOC, or record confirmation before the case completes.";
  }

  return "If the current DL or RC already exists, use the office code on that record first. If not, confirm jurisdiction on the official portal before paying.";
}

function getPlannerConditionalDocs(service) {
  const docs = [...service.extraDocs];
  const notes = [];

  if (state.planner.profileId === "transport") {
    docs.push("Permit copy or permit status, if applicable");
    docs.push("Fitness certificate, if applicable");
    docs.push("Current tax receipt or tax clearance");
    notes.push("Transport and commercial cases usually need more office-side scrutiny than private cases.");
  }

  if (state.planner.flags.financed && service.category === "vehicle") {
    docs.push("Financier NOC or due-clearance, if the record still shows finance");
    docs.push("Signed finance form such as Form 34 or Form 35, where applicable");
    notes.push("Finance-linked RC cases often stall until bank paperwork is complete.");
  }

  if (state.planner.flags.lost) {
    docs.push("Police report or FIR for the lost or damaged document, if the service requires it");
    docs.push("Any old photocopy or acknowledgement of the missing document, if available");
    notes.push("Lost-document cases often need an affidavit or police acknowledgement before approval.");
  }

  if (state.planner.flags.addressChanged) {
    docs.push("Fresh address proof matching the new residence");
    notes.push("Address-change cases are easier if the proof already matches the current spelling and format.");
  }

  if (state.planner.flags.crossJurisdiction) {
    docs.push("Cross-jurisdiction support papers such as NOC, Form 28, or authority verification, where applicable");
    notes.push("Cross-jurisdiction cases usually take longer because another authority may be involved.");
  }

  if (state.planner.officeId === "other-state" && service.category === "licence") {
    docs.push("Verification document or NOC from the original licensing authority, if requested");
  }

  return {
    docs: dedupeList(docs),
    notes: dedupeList(notes)
  };
}

function getServicePracticalDocs(service) {
  const docs = [...(service.practicalDocs || [])];

  if (service.appointment.toLowerCase().includes("required")) {
    docs.push("Printed appointment slip or acknowledgement");
  }

  if (service.officeVisit.toLowerCase().includes("required")) {
    docs.push("Original documents plus a spare photocopy set for the counter");
  }

  return dedupeList(docs);
}

function getPlannerPracticalDocs(service) {
  const docs = [...getServicePracticalDocs(service)];

  if (state.planner.flags.lost) {
    docs.push("Any old scan, phone photo, DigiLocker view, or xerox of the missing document");
  }

  if (state.planner.flags.addressChanged) {
    docs.push("Original address proof plus one self-attested photocopy set");
  }

  if (state.planner.flags.financed && service.category === "vehicle") {
    docs.push("Bank-stamped NOC, sanction letter, or loan-closure letter in original plus copies");
  }

  if (state.planner.profileId === "transport") {
    docs.push("Hard-copy set of permit, tax, fitness, insurance, and PUC papers");
  }

  return dedupeList(docs);
}

function getPlannerTodaySteps(service) {
  const steps = [
    `Confirm that ${service.title} is the correct service for this case.`,
    "Collect the required documents and any conditional papers before opening the portal.",
    `Use ${getPortalLabel(service)} only after the checklist is complete.`
  ];

  if (service.appointment.toLowerCase().includes("required")) {
    steps.push("Keep time for appointment booking because this service does not finish fully online.");
  } else if (service.officeVisit.toLowerCase().includes("required")) {
    steps.push("Prepare for an office visit with originals even if the application starts online.");
  }

  return steps.slice(0, 3);
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

function renderPlannerOutput() {
  const service = getServiceById(state.planner.serviceId);

  if (!service) {
    elements.plannerOutput.innerHTML = `<div class="empty-state">Choose a journey and service to build a plan.</div>`;
    return;
  }

  const resources = getServiceResources(service.id);
  const formLinks = resources.formIds.map((formId) => getFormById(formId)).filter(Boolean);
  const toolLinks = resources.toolIds.map((toolId) => getToolById(toolId)).filter(Boolean);
  const conditional = getPlannerConditionalDocs(service);
  const officeGuidance = getPlannerOfficeGuidance(service);
  const todaySteps = getPlannerTodaySteps(service);
  const readiness = getPlannerReadiness(service);
  const primaryLink = service.officialLinks[0];
  const practicalDocs = getPlannerPracticalDocs(service);

  elements.plannerOutput.innerHTML = `
    <div class="planner-output-header">
      <p class="eyebrow">Personalized Plan</p>
      <h3>${service.title}</h3>
      <p>This checklist is based on the current planner selections and is designed to help a client prepare before using the official portal.</p>
      <div class="badge-row">
        ${createBadge(`Start on ${getPortalLabel(service)}`)}
        ${createBadge(readiness, "warning")}
        ${createBadge(state.planner.profileId === "transport" ? "Transport / commercial case" : "Private / personal case", "alert")}
      </div>
      <div class="planner-output-actions">
        <a class="planner-primary" href="${primaryLink.url}" target="_blank" rel="noreferrer">Open ${primaryLink.label}</a>
        <button class="planner-secondary" type="button" data-copy-planner-link>Copy share link</button>
        <button class="planner-secondary" type="button" data-print-planner>Print this plan</button>
      </div>
    </div>

    <div class="planner-summary-grid">
      <article class="planner-summary-card">
        <h4>Recommended office guidance</h4>
        <p>${officeGuidance}</p>
      </article>
      <article class="planner-summary-card">
        <h4>Best used for</h4>
        <p>${service.bestFor}</p>
      </article>
      <article class="planner-summary-card">
        <h4>Today's action list</h4>
        <ol>
          ${todaySteps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </article>
    </div>

    <div class="planner-detail-grid">
      <article class="planner-panel">
        <h4>Official must keep ready</h4>
        <ul>
          ${dedupeList(service.requiredDocs).map((doc) => `<li>${doc}</li>`).join("")}
        </ul>
      </article>

      <article class="planner-panel">
        <h4>Official conditional documents</h4>
        ${
          conditional.docs.length
            ? `<ul>${conditional.docs.map((doc) => `<li>${doc}</li>`).join("")}</ul>`
            : `<p>No extra conditional documents are highlighted for the current selections.</p>`
        }
      </article>
    </div>

    <div class="planner-panel planner-panel--practical">
      <h4>Often asked in practice</h4>
      <p class="planner-note">${window.siteData.practicalDocsNote}</p>
      <ul>
        ${practicalDocs.map((doc) => `<li>${doc}</li>`).join("")}
      </ul>
    </div>

    <div class="planner-detail-grid">
      <article class="planner-panel">
        <h4>Official forms to download</h4>
        ${
          formLinks.length
            ? `
              <div class="planner-link-stack">
                ${formLinks
                  .map(
                    (form) => `
                      <a class="planner-resource-link" href="${form.url}" target="_blank" rel="noreferrer">
                        <strong>${form.formNo}</strong>
                        <span>${form.title}</span>
                      </a>
                    `
                  )
                  .join("")}
              </div>
            `
            : `<p>There is no highlighted standalone form here. Use the official service flow or the full download center.</p>`
        }
      </article>

      <article class="planner-panel">
        <h4>Useful official links</h4>
        <div class="planner-link-stack">
          ${toolLinks
            .map(
              (tool) => `
                <a class="planner-resource-link" href="${tool.url}" target="_blank" rel="noreferrer">
                  <strong>${tool.label}</strong>
                  <span>${tool.description}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </article>
    </div>

    <div class="planner-panel planner-panel--warning">
      <h4>Watch out for</h4>
      <ul>
        ${dedupeList([...service.notices, ...conditional.notes]).map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </div>
  `;

  const copyButton = elements.plannerOutput.querySelector("[data-copy-planner-link]");
  const printButton = elements.plannerOutput.querySelector("[data-print-planner]");

  copyButton.addEventListener("click", () => {
    copyToClipboard(buildShareUrl({ includePlanner: true }), "Planner link copied");
  });

  printButton.addEventListener("click", () => {
    setPrintMode("planner");
  });
}

function renderPlanner() {
  renderPlannerJourneyOptions();
  renderPlannerServiceSelect();
  renderPlannerOfficeSelect();
  renderPlannerProfileOptions();
  renderPlannerFlagOptions();
  renderPlannerOutput();
}

function renderToolGroups() {
  elements.toolGroupGrid.innerHTML = window.siteData.toolGroups
    .map((group) => {
      const tools = group.toolIds.map((toolId) => getToolById(toolId)).filter(Boolean);

      return `
        <article class="tool-group-card">
          <h3>${group.title}</h3>
          <p>${group.intro}</p>
          <div class="tool-list">
            ${tools
              .map(
                (tool) => `
                  <article class="tool-card">
                    <strong>${tool.label}</strong>
                    <p>${tool.description}</p>
                    <a href="${tool.url}" target="_blank" rel="noreferrer">Open official page</a>
                  </article>
                `
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDownloadGroups() {
  elements.downloadGroupGrid.innerHTML = window.siteData.downloadGroups
    .map((group) => {
      const forms = group.formIds.map((formId) => getFormById(formId)).filter(Boolean);

      return `
        <article class="download-group-card">
          <h3>${group.title}</h3>
          <p>${group.intro}</p>
          <div class="download-list">
            ${forms
              .map(
                (form) => `
                  <article class="download-card">
                    <div class="download-copy">
                      <span>${form.formNo}</span>
                      <strong>${form.title}</strong>
                      <p>${form.usedFor}</p>
                    </div>
                    <a href="${form.url}" target="_blank" rel="noreferrer">Download PDF</a>
                  </article>
                `
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCategoryPills() {
  elements.categoryPills.innerHTML = window.siteData.categories
    .map(
      (category) => `
        <button class="category-pill ${state.activeCategory === category.id ? "is-active" : ""}" data-category-id="${category.id}">
          ${category.label}
        </button>
      `
    )
    .join("");

  elements.categoryPills.querySelectorAll("[data-category-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCategory = button.dataset.categoryId;
      renderAll();
      updateUrlState();
    });
  });
}

function renderServiceList() {
  const filteredServices = getFilteredServices();
  ensureSelectedServiceVisible(filteredServices);

  if (!filteredServices.length) {
    elements.serviceList.innerHTML = `
      <div class="empty-state">
        No services match this search yet. Try a simpler word like <code>renewal</code>, <code>NOC</code>,
        <code>licence</code>, or start from one of the situation cards above.
      </div>
    `;
    return;
  }

  elements.serviceList.innerHTML = filteredServices
    .map(
      (service) => `
        <button class="service-item ${state.selectedServiceId === service.id ? "is-active" : ""}" data-service-id="${service.id}">
          <small>${getCategoryById(service.category).label}</small>
          <strong>${service.title}</strong>
          <span>${service.short}</span>
          <div class="service-meta">
            <span>${getPortalLabel(service)}</span>
            <span>${service.officeVisit}</span>
          </div>
        </button>
      `
    )
    .join("");

  elements.serviceList.querySelectorAll("[data-service-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activateService(button.dataset.serviceId, {
        focusDetail: true
      });
    });
  });
}

function getRelatedServices(service) {
  return window.siteData.services
    .filter((entry) => entry.category === service.category && entry.id !== service.id)
    .slice(0, 4);
}

function renderServiceDetail() {
  const service = getServiceById(state.selectedServiceId);

  if (!service) {
    elements.serviceDetail.innerHTML = `<div class="empty-state">Choose a service to read the detailed reference page.</div>`;
    return;
  }

  const primaryLink = service.officialLinks[0];
  const relatedServices = getRelatedServices(service);
  const resources = getServiceResources(service.id);
  const formLinks = resources.formIds.map((formId) => getFormById(formId)).filter(Boolean);
  const toolLinks = resources.toolIds.map((toolId) => getToolById(toolId)).filter(Boolean);
  const practicalDocs = getServicePracticalDocs(service);

  elements.serviceDetail.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">Service Reference</p>
      <h2>${service.title}</h2>
      <p class="detail-lead">${service.summary}</p>
      <div class="badge-row">
        ${createBadge(`Starts on ${getPortalLabel(service)}`)}
        ${createBadge(`Appointment: ${service.appointment}`, "warning")}
        ${createBadge(`Office visit: ${service.officeVisit}`, "alert")}
        ${createBadge(`Inspection: ${service.inspection}`)}
      </div>
      <div class="detail-actions">
        <a class="primary-link" href="${primaryLink.url}" target="_blank" rel="noreferrer">Open ${primaryLink.label}</a>
        <a class="secondary-link" href="#downloads">Go to Download Center</a>
        <button class="secondary-link secondary-button" type="button" data-copy-service-link>Copy service link</button>
        <button class="secondary-link secondary-button" type="button" data-print-service>Print guide</button>
      </div>
    </div>

    <div class="detail-grid glance-grid">
      <article class="detail-card">
        <h3>Use this when</h3>
        <p class="detail-meta">${service.bestFor}</p>
      </article>
      <article class="detail-card">
        <h3>Start on</h3>
        <p class="detail-meta">${getPortalLabel(service)}</p>
      </article>
      <article class="detail-card">
        <h3>Office visit</h3>
        <p class="detail-meta">${service.officeVisit}</p>
      </article>
      <article class="detail-card">
        <h3>Keep ready first</h3>
        <ul>
          ${service.requiredDocs.slice(0, 4).map((doc) => `<li>${doc}</li>`).join("")}
        </ul>
      </article>
    </div>

    <div class="detail-grid">
      <article class="detail-card wide">
        <h3>Eligibility or timing</h3>
        <ul>
          ${service.eligibility.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </div>

    <div class="detail-grid">
      <article class="detail-card wide">
        <h3>Official step-by-step flow</h3>
        <ol class="step-list">
          ${service.steps
            .map(
              (step, index) => `
                <li>
                  <span class="step-index">${index + 1}</span>
                  <div>${step}</div>
                </li>
              `
            )
            .join("")}
        </ol>
      </article>
    </div>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>Official required documents</h3>
        <ul>
          ${service.requiredDocs.map((doc) => `<li>${doc}</li>`).join("")}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Official conditional or supporting documents</h3>
        <ul>
          ${
            service.extraDocs.length
              ? service.extraDocs.map((doc) => `<li>${doc}</li>`).join("")
              : "<li>No extra supporting documents highlighted for this reference page.</li>"
          }
        </ul>
      </article>
    </div>

    <div class="detail-grid">
      <article class="detail-card detail-card--practical wide">
        <h3>Often asked in practice</h3>
        <p class="panel-note">${window.siteData.practicalDocsNote}</p>
        <ul>
          ${practicalDocs.map((doc) => `<li>${doc}</li>`).join("")}
        </ul>
      </article>
    </div>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>Fees</h3>
        <ul>
          ${service.fees.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Validity or timing note</h3>
        <p class="detail-meta">${service.validity}</p>
      </article>
    </div>

    <div class="detail-card">
      <h3>Forms users will see</h3>
      <div class="tag-row">
        ${service.forms.map((form) => `<span class="tag">${form}</span>`).join("")}
      </div>
    </div>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>Download official forms</h3>
        ${
          formLinks.length
            ? `
              <div class="inline-link-grid">
                ${formLinks
                  .map(
                    (form) => `
                      <a class="inline-link-card" href="${form.url}" target="_blank" rel="noreferrer">
                        <strong>${form.formNo}</strong>
                        <span>${form.title}</span>
                        <small>Download official PDF</small>
                      </a>
                    `
                  )
                  .join("")}
              </div>
            `
            : `<p class="detail-meta">No standalone PDF form is highlighted here. Use the official service page or the full download center for this workflow.</p>`
        }
      </article>

      <article class="detail-card">
        <h3>Useful official links</h3>
        <div class="inline-link-grid">
          ${toolLinks
            .map(
              (tool) => `
                <a class="inline-link-card" href="${tool.url}" target="_blank" rel="noreferrer">
                  <strong>${tool.label}</strong>
                  <span>${tool.description}</span>
                  <small>Open official page</small>
                </a>
              `
            )
            .join("")}
        </div>
      </article>
    </div>

    <div class="detail-card">
      <h3>Watch out for</h3>
      <ul>
        ${service.notices.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </div>

    <div class="detail-card">
      <h3>Official links</h3>
      <div class="source-links">
        ${service.officialLinks
          .map(
            (link) => `
              <a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
            `
          )
          .join("")}
      </div>
    </div>

    ${
      relatedServices.length
        ? `
          <div class="detail-card">
            <h3>Related services</h3>
            <div class="mini-chip-row">
              ${relatedServices.map((entry) => createServiceLinkChip(entry)).join("")}
            </div>
          </div>
        `
        : ""
    }
  `;

  elements.serviceDetail.querySelectorAll("[data-service-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activateService(button.dataset.serviceId, {
        focusDetail: true
      });
    });
  });

  const copyButton = elements.serviceDetail.querySelector("[data-copy-service-link]");
  const printButton = elements.serviceDetail.querySelector("[data-print-service]");

  copyButton.addEventListener("click", () => {
    copyToClipboard(buildShareUrl({ includePlanner: false }), "Service link copied");
  });

  printButton.addEventListener("click", () => {
    setPrintMode("service");
  });
}

function renderOffices() {
  elements.officeGrid.innerHTML = window.siteData.offices
    .map(
      (office) => `
        <article class="office-card">
          <p class="eyebrow">${office.code}</p>
          <h3>${office.name}</h3>
          <p>${office.address}</p>
          <div class="office-meta">
            <span><strong>Phone:</strong> ${office.phone}</span>
            <span><strong>Email:</strong> <a href="mailto:${office.email}">${office.email}</a></span>
          </div>
          <p>${office.note}</p>
        </article>
      `
    )
    .join("");
}

function renderBundles() {
  elements.bundleGrid.innerHTML = window.siteData.bundles
    .map(
      (bundle) => `
        <article class="bundle-card">
          <h3>${bundle.title}</h3>
          <p>${bundle.intro}</p>
          <ul>
            ${bundle.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderSignals() {
  elements.signalList.innerHTML = window.siteData.signals
    .map(
      (signal) => `
        <article class="signal-item">
          <strong>${signal.title}</strong>
          <p>${signal.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderFaq() {
  elements.faqList.innerHTML = window.siteData.faq
    .map(
      (item) => `
        <details class="faq-item">
          <summary>${item.question}</summary>
          <div class="faq-answer">${item.answer}</div>
        </details>
      `
    )
    .join("");
}

function renderSources() {
  elements.sourceGrid.innerHTML = window.siteData.sourceGroups
    .map(
      (group) => `
        <article class="source-group">
          <h3>${group.title}</h3>
          <p>${group.intro}</p>
          <div class="source-links">
            ${group.links
              .map(
                (link) => `
                  <a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderJourneys();
  renderPlanner();
  renderCategoryPills();
  renderServiceList();
  renderServiceDetail();
}

elements.serviceSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderAll();
  updateUrlState();
});

elements.plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  activateService(state.planner.serviceId, { preservePlanner: true });
  document.getElementById("planner-output").scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.plannerServiceSelect.addEventListener("change", (event) => {
  state.planner.serviceId = event.target.value;
  activateService(state.planner.serviceId, { preservePlanner: true });
});

elements.plannerOfficeSelect.addEventListener("change", (event) => {
  state.planner.officeId = event.target.value;
  renderAll();
  updateUrlState();
});

elements.plannerReset.addEventListener("click", () => {
  state.planner = createDefaultPlannerState();
  state.selectedServiceId = state.planner.serviceId;
  state.activeCategory = "all";
  state.search = "";
  elements.serviceSearch.value = "";
  renderAll();
  updateUrlState();
  showToast("Planner reset");
});

hydrateStateFromUrl();

renderQuickActions();
renderStats();
renderPreflight();
renderToolGroups();
renderDownloadGroups();
renderOffices();
renderBundles();
renderSignals();
renderFaq();
renderSources();
renderAll();
