(function () {
  const siteData = window.siteData;
  const plannerFlagIds = siteData.planner.flags.map((flag) => flag.id);
  const supportedLanguages = ["en", "mr"];

  function getLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");

    if (supportedLanguages.includes(fromUrl)) {
      return fromUrl;
    }

    const stored = window.localStorage.getItem("satara-rto-lang");
    if (supportedLanguages.includes(stored)) {
      return stored;
    }

    return "en";
  }

  function setLanguage(lang) {
    const next = supportedLanguages.includes(lang) ? lang : "en";
    window.localStorage.setItem("satara-rto-lang", next);
    document.documentElement.lang = next === "mr" ? "mr" : "en";

    const params = new URLSearchParams(window.location.search);
    if (next === "en") {
      params.delete("lang");
    } else {
      params.set("lang", next);
    }
    const nextUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.replaceState({}, "", nextUrl);
  }

  function t(path, fallback = "") {
    const lang = getLanguage();
    const source = (siteData.i18n && siteData.i18n[lang]) || {};
    const result = path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), source);
    return result == null ? fallback : result;
  }

  function pickLocalized(entry, baseKey) {
    if (!entry) {
      return "";
    }

    const lang = getLanguage();
    if (lang === "mr") {
      const mrKey = `${baseKey}Mr`;
      if (entry[mrKey]) {
        return entry[mrKey];
      }
    }

    return entry[baseKey] || "";
  }

  function getCategoryLabel(category) {
    return pickLocalized(category, "label");
  }

  function getCategoryDescription(category) {
    return pickLocalized(category, "description");
  }

  function getOptionLabel(option) {
    return pickLocalized(option, "label");
  }

  function getOptionDescription(option) {
    return pickLocalized(option, "description");
  }

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

  function getJourneyTitle(journey) {
    return pickLocalized(journey, "title");
  }

  function getJourneyDescription(journey) {
    return pickLocalized(journey, "description");
  }

  function getServiceTitle(service) {
    return pickLocalized(service, "title");
  }

  function getServiceShort(service) {
    return pickLocalized(service, "short") || pickLocalized(service, "summary");
  }

  function getOfficeNote(office) {
    return pickLocalized(office, "note");
  }

  function getBusinessValue(key) {
    return pickLocalized(siteData.business, key) || siteData.business[key] || "";
  }

  function getLocalizedReviewDate() {
    return getLanguage() === "mr" ? siteData.reviewMeta.lastReviewedMr || siteData.reviewMeta.lastReviewed : siteData.reviewMeta.lastReviewed;
  }

  function getLocalizedOfficeName(office) {
    return pickLocalized(office, "name") || office.name;
  }

  function getLocalizedOfficeAddress(office) {
    return pickLocalized(office, "address") || office.address;
  }

  function getLocalizedStatusText(service, key) {
    return pickLocalized(service, key) || service[key] || "";
  }

  function getLocalizedPracticalDocsNote() {
    return getLanguage() === "mr" ? siteData.practicalDocsNoteMr || siteData.practicalDocsNote : siteData.practicalDocsNote;
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

    return [
      {
        id: "journey",
        title: t("wizard.stepMeta.journey.title", siteData.wizardMeta.stepMeta.journey.title),
        help: t("wizard.stepMeta.journey.help", siteData.wizardMeta.stepMeta.journey.help)
      },
      ...(shouldShowLearnerStatusQuestion(normalized)
        ? [
            {
              id: "learnerStatus",
              title: t("wizard.stepMeta.learnerStatus.title", siteData.wizardMeta.stepMeta.learnerStatus.title),
              help: t("wizard.stepMeta.learnerStatus.help", siteData.wizardMeta.stepMeta.learnerStatus.help)
            }
          ]
        : []),
      ...(serviceOptions.length > 1
        ? [
            {
              id: "service",
              title: t("wizard.stepMeta.service.title", siteData.wizardMeta.stepMeta.service.title),
              help: t("wizard.stepMeta.service.help", siteData.wizardMeta.stepMeta.service.help)
            }
          ]
        : []),
      ...(shouldShowOfficeQuestion(service)
        ? [
            {
              id: "office",
              title: t("wizard.stepMeta.office.title", siteData.wizardMeta.stepMeta.office.title),
              help: t("wizard.stepMeta.office.help", siteData.wizardMeta.stepMeta.office.help)
            }
          ]
        : []),
      ...(shouldShowProfileQuestion(service)
        ? [
            {
              id: "profile",
              title: t("wizard.stepMeta.profile.title", siteData.wizardMeta.stepMeta.profile.title),
              help: t("wizard.stepMeta.profile.help", siteData.wizardMeta.stepMeta.profile.help)
            }
          ]
        : []),
      ...(["tax-services", "puc-requirements"].includes(service.id)
        ? [
            {
              id: "vehicleType",
              title: t("wizard.stepMeta.vehicleType.title", siteData.wizardMeta.stepMeta.vehicleType.title),
              help: t("wizard.stepMeta.vehicleType.help", siteData.wizardMeta.stepMeta.vehicleType.help)
            }
          ]
        : []),
      ...(service.id === "puc-requirements"
        ? [
            {
              id: "fuelType",
              title: t("wizard.stepMeta.fuelType.title", siteData.wizardMeta.stepMeta.fuelType.title),
              help: t("wizard.stepMeta.fuelType.help", siteData.wizardMeta.stepMeta.fuelType.help)
            }
          ]
        : []),
      ...(relevantFlags.length
        ? [
            {
              id: "flags",
              title: t("wizard.stepMeta.flags.title", siteData.wizardMeta.stepMeta.flags.title),
              help: t("wizard.stepMeta.flags.help", siteData.wizardMeta.stepMeta.flags.help)
            }
          ]
        : [])
    ];
  }

  function getPortalLabel(service) {
    const labels = service.officialLinks.map((link) => link.label.toLowerCase());

    if (labels.some((label) => label.includes("sarathi"))) {
      return getLanguage() === "mr" ? "सारथी" : "Sarathi";
    }

    if (labels.some((label) => label.includes("vahan"))) {
      return getLanguage() === "mr" ? "वाहन" : "Vahan";
    }

    if (service.id === "permit-services") {
      return getLanguage() === "mr" ? "परमिट पोर्टल / महाराष्ट्र परिवहन" : "Permit portal / Maharashtra Transport";
    }

    if (service.category === "licence") {
      return getLanguage() === "mr" ? "सारथी" : "Sarathi";
    }

    if (service.category === "vehicle") {
      return getLanguage() === "mr" ? "वाहन" : "Vahan";
    }

    return getLanguage() === "mr" ? "अधिकृत पोर्टल" : "Official portal";
  }

  function getPlannerOfficeGuidance(service, state) {
    if (state.officeId === "mh11") {
      return getLanguage() === "mr"
        ? "सुरुवातीसाठी MH-11 सातारा वापरा आणि पेमेंटपूर्वी अधिकृत पोर्टलवर रेकॉर्ड तपासा."
        : "Use MH-11 Satara as the starting office and confirm the record on the official portal before payment.";
    }

    if (state.officeId === "mh50") {
      return getLanguage() === "mr"
        ? "सुरुवातीसाठी MH-50 कराड वापरा आणि पेमेंटपूर्वी अधिकृत पोर्टलवर रेकॉर्ड तपासा."
        : "Use MH-50 Karad as the starting office and confirm the record on the official portal before payment.";
    }

    if (state.officeId === "other-state") {
      return getLanguage() === "mr"
        ? "विद्यमान रेकॉर्ड सातारा जिल्ह्याबाहेर किंवा महाराष्ट्राबाहेर असल्यामुळे अतिरिक्त पडताळणी लागू शकते."
        : "Expect extra verification because the existing record is outside Satara district or outside Maharashtra.";
    }

    if (service.officeVisit.toLowerCase().includes("required")) {
      return getLanguage() === "mr"
        ? "या सेवेत कार्यालय भेटीचा भाग असू शकतो. तुमच्याकडे आधीपासून DL किंवा RC असल्यास त्यावरील कार्यालय कोड आधी वापरा."
        : "An office visit is part of this service. If you already have a DL or RC, use the office code on that record first.";
    }

    return getLanguage() === "mr"
      ? "तुमच्याकडे आधीपासून DL किंवा RC असल्यास त्यावरील कार्यालय कोड आधी वापरा. अन्यथा अधिकृत पोर्टलवर क्षेत्राधिकार तपासा."
      : "If you already have a DL or RC, use the office code on that record first. Otherwise confirm jurisdiction on the official portal.";
  }

  function getGenericOfficeGuidance(service) {
    if (service.officeVisit.toLowerCase().includes("required")) {
      return getLanguage() === "mr"
        ? "ही सेवा सहसा कार्यालय भेट किंवा पडताळणी टप्प्याने संपते. शक्य असल्यास सध्याच्या रेकॉर्डवरील कार्यालय कोड वापरा."
        : "This service usually ends with an office visit or verification step. Use the office code on the current record whenever possible.";
    }

    return getLanguage() === "mr"
      ? "सध्याचा DL किंवा RC असल्यास त्यावरील कार्यालय कोड वापरा. खात्री नसेल तर पेमेंटपूर्वी अधिकृत पोर्टलवर कार्यालय तपासा."
      : "Use the office code on your current DL or RC if you already have a record. If you are unsure, confirm the office on the official portal before payment.";
  }

  function getPlannerReadiness(service) {
    if (service.officeVisit.toLowerCase().includes("required")) {
      return getLanguage() === "mr" ? "कार्यालय भेट अपेक्षित" : "Office visit expected";
    }

    if (service.officeVisit.toLowerCase().includes("possible") || service.appointment.toLowerCase().includes("sometimes")) {
      return getLanguage() === "mr" ? "पडताळणीसाठी वेळ ठेवा" : "Keep room for verification";
    }

    return getLanguage() === "mr" ? "मुख्यतः ऑनलाइन सेवा" : "Online-first service";
  }

  function getStepChannel(step) {
    const text = step.toLowerCase();

    if (/(visit|appear|present|bring|inspection|test appointment|scheduled date|licensing authority|rto)/.test(text)) {
      return getLanguage() === "mr" ? "कार्यालय" : "Office";
    }

    if (/(track|download|save|acknowledgement|dispatch|approval status)/.test(text)) {
      return getLanguage() === "mr" ? "सबमिट केल्यानंतर" : "After submission";
    }

    return getLanguage() === "mr" ? "ऑनलाइन" : "Online";
  }

  function needsOriginals(service) {
    return /required|possible/i.test(service.officeVisit) || /required|yes/i.test(service.appointment);
  }

  function isFinanceSensitive(service) {
    return ["hypothecation-addition", "hypothecation-removal", "transfer-ownership", "new-vehicle-registration"].includes(service.id);
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
    const firstNumber = String(phone).split("/")[0].trim();
    return `tel:${firstNumber.replace(/[^0-9+]/g, "")}`;
  }

  function renderBusinessSupportBlock(service, options = {}) {
    const title = options.title || t("guide.labels.serviceHelpTitle", "Need help with this service?");
    const body = options.body || t("guide.labels.serviceHelpBody", "We can help you understand the process, check what papers are needed, and guide the next step before you visit the office or open the portal.");
    const serviceLine = service
      ? `<p class="inline-note">${getLanguage() === "mr" ? `${getBusinessValue("name")} ${getLanguage() === "mr" ? "यांच्याकडून" : ""}` : `${getBusinessValue("name")} from ${getBusinessValue("businessName")}`} ${getLanguage() === "mr" ? `${getServiceTitle(service)} या कामाबाबत मदत मिळू शकते.` : `can assist with ${getServiceTitle(service)} and related document work.`}</p>`
      : "";

    return `
      <article class="cta-box business-help-box">
        <div class="section-head compact">
          <p class="eyebrow">${getLanguage() === "mr" ? "खासगी सहाय्य सेवा" : "Private assistance service"}</p>
          <h2>${title}</h2>
        </div>
        <p class="cta-note">${body}</p>
        ${serviceLine}
        <div class="section-grid business-help-grid">
          <article class="content-card content-card-soft">
            <h3>${t("guide.labels.availableHelp", "Available help")}</h3>
            <ul class="content-list">
              <li>${t("guide.labels.helpPointDocuments", "Document checklist and paper review before you start")}</li>
              <li>${t("guide.labels.helpPointProcess", "Guidance on the process, office routing, and what to keep ready")}</li>
              <li>${t("guide.labels.helpPointSupport", "Help if you are unsure which service or office applies")}</li>
            </ul>
          </article>
          <article class="content-card content-card-soft">
            <h3>${t("guide.labels.howWeHelpTitle", "How our help works")}</h3>
            <p><strong>${getBusinessValue("businessName")}</strong></p>
            <p>${getBusinessValue("name")}</p>
            <p>${getBusinessValue("address")}</p>
            <p class="inline-note">${getBusinessValue("chargeNote")}</p>
            <p class="inline-note">${t("guide.labels.contactBeforeVisit", "If you are unsure, contact us before visiting the RTO.")}</p>
          </article>
        </div>
        <div class="cta-primary-row">
          <a class="button button-primary" href="${siteData.business.phoneHref}">${t("guide.labels.callNow", "Call now")}</a>
          <a class="button button-secondary" href="${siteData.business.whatsappHref}" target="_blank" rel="noreferrer">${t("guide.labels.chatWhatsapp", "Chat on WhatsApp")}</a>
        </div>
        <p class="inline-note">${getBusinessValue("disclaimer")}</p>
      </article>
    `;
  }

  function getConditionalDocs(service, state) {
    const docs = [...(service.extraDocs || [])];
    const notes = [];
    const reasons = [];

    if (state && state.flags.lost) {
      docs.push(
        getLanguage() === "mr"
          ? "कागदपत्र हरवले असल्यास पोलिस अहवाल, डायरी नोंद किंवा हरवल्याची acknowledgement"
          : "Police report, diary, or loss acknowledgement where the document is lost"
      );
      reasons.push(
        getLanguage() === "mr"
          ? "कागदपत्र हरवले किंवा खराब झाले आहे असे तुम्ही सांगितल्यामुळे हरवलेल्या कागदांबाबतचे मार्गदर्शन जोडले गेले."
          : "Loss-related papers were added because you said the document is lost or damaged."
      );
    }

    if (state && state.flags.addressChanged) {
      docs.push(
        getLanguage() === "mr" ? "नवीन पत्त्याशी जुळणारा सध्याचा पत्ता पुरावा" : "Current address proof matching the new address"
      );
      reasons.push(
        getLanguage() === "mr"
          ? "पत्ता बदलला आहे असे तुम्ही सांगितल्यामुळे पत्ता पुराव्याबाबतचे मार्गदर्शन वाढवले गेले."
          : "Address-proof guidance was expanded because you said the address has changed."
      );
    }

    if (state && state.flags.financed && service.category === "vehicle") {
      docs.push(
        getLanguage() === "mr"
          ? "वाहन रेकॉर्ड कर्जाशी जोडलेले असल्यास फायनान्सरचे NOC किंवा फायनान्स-संबंधित कागदपत्रे"
          : "Financier NOC or finance-related papers if the vehicle record is loan-linked"
      );
      notes.push(
        getLanguage() === "mr"
          ? "फायनान्सशी जोडलेल्या वाहनांमध्ये फायनान्सरकडून अतिरिक्त पडताळणी लागू होऊ शकते."
          : "Finance-linked vehicles can trigger extra financier verification."
      );
      reasons.push(
        getLanguage() === "mr"
          ? "वाहन फायनान्सवर आहे किंवा कर्जाशी जोडलेले आहे असे तुम्ही सांगितल्यामुळे फायनान्सरची कागदपत्रे जोडली गेली."
          : "Financier papers were added because you said the vehicle is financed or loan-linked."
      );
    }

    if (state && state.profileId === "transport") {
      docs.push(
        getLanguage() === "mr"
          ? "लागू असल्यास परमिट, फिटनेस किंवा मार्ग अधिकृतता यांसारखी व्यावसायिक / परिवहन कागदपत्रे"
          : "Commercial or transport papers such as permit, fitness, or route authorisation where applicable"
      );
      notes.push(
        getLanguage() === "mr"
          ? "परिवहन आणि व्यावसायिक प्रकरणांमध्ये खाजगी प्रकरणांपेक्षा अधिक छाननी होण्याची शक्यता असते."
          : "Transport and commercial cases usually face more scrutiny than private cases."
      );
      reasons.push(
        getLanguage() === "mr"
          ? "तुम्ही व्यावसायिक / परिवहन पर्याय निवडल्यामुळे संबंधित कागदपत्रे जोडली गेली."
          : "Commercial and transport papers were added because you selected transport / commercial."
      );
    }

    if (state && state.flags.crossJurisdiction) {
      docs.push(
        getLanguage() === "mr"
          ? "लागू असल्यास क्षेत्राधिकार बदलाचा पुरावा किंवा संबंधित NOC कागदपत्रे"
          : "Cross-jurisdiction proof or linked NOC papers where required"
      );
      notes.push(
        getLanguage() === "mr"
          ? "रेकॉर्ड दुसऱ्या क्षेत्राधिकारात हलवल्यास पडताळणी आणि वेळेत विलंब होऊ शकतो."
          : "Moving records across jurisdiction can add verification and timing delays."
      );
      reasons.push(
        getLanguage() === "mr"
          ? "वाहन किंवा रेकॉर्ड दुसऱ्या क्षेत्रात जात आहे असे तुम्ही सांगितल्यामुळे संबंधित कागदपत्रे जोडली गेली."
          : "Cross-jurisdiction papers were added because you said the vehicle or record is moving across jurisdictions."
      );
    }

    if (state && state.officeId === "other-state" && service.category === "licence") {
      notes.push(
        getLanguage() === "mr"
          ? "दुसऱ्या राज्यातील परवाना रेकॉर्डमध्ये मॅन्युअल पडताळणीमुळे अधिक वेळ लागू शकतो."
          : "Out-of-state licence records can take longer because verification may be manual."
      );
      reasons.push(
        getLanguage() === "mr"
          ? "तुम्ही दुसरे राज्य किंवा बाहेरील रेकॉर्ड निवडल्यामुळे पडताळणीविषयी सूचना जोडली गेली."
          : "Verification warning was added because you selected another state or an outside record."
      );
    }

    if (state && service.id === "tax-services") {
      if (state.vehicleType === "two-wheeler") {
        notes.push(
          getLanguage() === "mr"
            ? "दुचाकी वाहनाचा कर वर्ग, वय आणि राज्यातील नियमांनुसार बदलू शकतो."
            : "Two-wheeler tax can still vary by class, age, and state rule slabs."
        );
        reasons.push(
          getLanguage() === "mr" ? "दुचाकी प्रकरणासाठी कराविषयीच्या टिपा अधिक नेमक्या दाखवण्यात आल्या." : "Tax notes were narrowed for a two-wheeler case."
        );
      }

      if (state.vehicleType === "commercial" || state.profileId === "transport") {
        docs.push(
          getLanguage() === "mr"
            ? "कराची श्रेणी व्यावसायिक वापरावर अवलंबून असल्यास परमिट, फिटनेस किंवा परिवहन वर्गीकरण कागदपत्रे"
            : "Permit, fitness, or transport classification papers where the tax category depends on commercial use"
        );
        notes.push(
          getLanguage() === "mr"
            ? "व्यावसायिक कर प्रकरणांमध्ये परमिट वर्ग, फिटनेस आणि परिवहन वर्गीकरण अधिक महत्त्वाचे असते."
            : "Commercial tax cases depend more heavily on permit class, fitness, and transport categorisation."
        );
        reasons.push(
          getLanguage() === "mr"
            ? "तुम्ही व्यावसायिक / परिवहन प्रकरण निवडल्यामुळे व्यावसायिक कर मार्गदर्शन जोडले गेले."
            : "Commercial tax guidance was added because you selected a transport or commercial case."
        );
      }
    }

    if (state && service.id === "puc-requirements") {
      if (state.vehicleType === "commercial") {
        notes.push(
          getLanguage() === "mr"
            ? "RC-संबंधित प्रक्रियांमध्ये PUC वापरले जात असल्यास व्यावसायिक वाहनांवर अधिक कडक पडताळणी होऊ शकते."
            : "Commercial vehicles may face stricter downstream checks when PUC is used in RC-side workflows."
        );
        reasons.push(
          getLanguage() === "mr"
            ? "तुम्ही व्यावसायिक / परिवहन वाहन निवडल्यामुळे व्यावसायिक PUC मार्गदर्शन जोडले गेले."
            : "Commercial PUC guidance was added because you selected a transport or commercial vehicle."
        );
      }

      if (state.fuelType === "diesel") {
        notes.push(
          getLanguage() === "mr"
            ? "डिझेल वाहनांसाठी PUC केंद्राने योग्य इंधन प्रकार आणि चाचणी मूल्ये नोंदवली आहेत का ते पुन्हा तपासा."
            : "Diesel vehicle owners should double-check that the PUC center enters the correct fuel type and result values."
        );
        reasons.push(
          getLanguage() === "mr"
            ? "तुम्ही डिझेल निवडल्यामुळे डिझेल-विशिष्ट PUC मार्गदर्शन जोडले गेले."
            : "Diesel-specific PUC guidance was added because you selected diesel."
        );
      }

      if (state.fuelType === "ev-other") {
        notes.push(
          getLanguage() === "mr"
            ? "वाहन इलेक्ट्रिक, हायब्रिड किंवा इंधन प्रकार अस्पष्ट असल्यास RTO ला जाण्यापूर्वी पुढील प्रक्रियेला नेमके काय हवे आहे ते तपासा."
            : "If the vehicle is electric, hybrid, or the fuel type is unclear, confirm what downstream service actually needs before visiting the RTO."
        );
        reasons.push(
          getLanguage() === "mr"
            ? "इंधन प्रकार इलेक्ट्रिक, हायब्रिड किंवा अनिश्चित असल्यामुळे विस्तृत PUC टीप जोडली गेली."
            : "A broader PUC note was added because the fuel type is electric, hybrid, or uncertain."
        );
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
    return pickLocalized(form, "lookupHint") || form.lookupHint || (getLanguage() === "mr" ? "अधिकृत फॉर्म पानावर जाऊन फॉर्म क्रमांक शोधा." : "Open the official forms page and search for the form number.");
  }

  function renderFormActions(form) {
    return `
      <div class="inline-actions">
        <a class="button button-secondary" href="${form.url}" target="_blank" rel="noreferrer">${getLanguage() === "mr" ? "अधिकृत पान उघडा" : "Open official page"}</a>
        ${form.downloadUrl ? `<a class="button button-secondary" href="${form.downloadUrl}" target="_blank" rel="noreferrer">${getLanguage() === "mr" ? "थेट PDF" : "Direct PDF"}</a>` : ""}
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
          <h2>${getLanguage() === "mr" ? "थोडक्यात" : "At a glance"}</h2>
        </div>
        <div class="at-glance-grid">
          <article class="at-glance-item">
            <span class="at-glance-label">${t("guide.labels.startOn", "Start on")}</span>
            <strong>${getPortalLabel(service)}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">${t("guide.labels.officeVisit", "Office visit")}</span>
            <strong>${getLocalizedStatusText(service, "officeVisit")}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">${getLanguage() === "mr" ? "अपॉइंटमेंट" : "Appointment"}</span>
            <strong>${getLocalizedStatusText(service, "appointment")}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">${getLanguage() === "mr" ? "तपासणी" : "Inspection"}</span>
            <strong>${getLocalizedStatusText(service, "inspectionSummary")}</strong>
          </article>
          <article class="at-glance-item">
            <span class="at-glance-label">${getLanguage() === "mr" ? "मुख्य फॉर्म" : "Main forms"}</span>
            <strong>${pickLocalized(service, "mainFormsCountLabel") || service.mainFormsCountLabel}</strong>
          </article>
        </div>
      </section>
    `;
  }

  function renderServiceSummary(service, state, options = {}) {
    const officeGuidance = state ? getPlannerOfficeGuidance(service, state) : getGenericOfficeGuidance(service);
    const selectedOffice = state ? getOfficeByPlannerId(state.officeId) : null;
    const purposeText = getServiceShort(service) || pickLocalized(service, "bestFor");
    const summaryNotes = [
      {
        label: t("guide.labels.whoThisIsFor", "Who this is for"),
        text: pickLocalized(service, "bestFor")
      },
      {
        label: t("guide.labels.youReceive", "You receive"),
        text: pickLocalized(service, "outcomeSummary")
      }
    ];

    if (selectedOffice) {
      summaryNotes.push({
        label: t("guide.labels.office", "Office"),
        text: `${getLocalizedOfficeName(selectedOffice)}. ${officeGuidance}`
      });
    } else if (options.mode === "wizard") {
      summaryNotes.push({
        label: t("guide.labels.office", "Office"),
        text: officeGuidance
      });
    }

    return `
      <div class="result-summary">
        <div class="result-summary-main">
          <h2>${getServiceTitle(service)}</h2>
          <p class="result-lead">${purposeText}</p>
        </div>
        <div class="result-summary-meta">
          ${createBadge(pickLocalized(service, "serviceLabel") || service.serviceLabel)}
          ${service.featured ? createBadge(t("guide.labels.mostUsed", "Most used")) : ""}
          ${createBadge(`${t("guide.labels.startOn", "Start on")} ${getPortalLabel(service)}`)}
          ${createBadge(getPlannerReadiness(service), "warning")}
          ${createBadge(`${t("guide.labels.officeVisit", "Office visit")}: ${getLocalizedStatusText(service, "officeVisit")}`, "alert")}
        </div>
        <ul class="summary-note-list">
          ${summaryNotes
            .map(
              (note) => `
                <li>
                  <strong>${note.label}:</strong>
                  <span>${note.text}</span>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    `;
  }

  function getInformationSections(service) {
    if (service.information && service.information.sections && service.information.sections.length) {
      const sections = [...service.information.sections];

      if (service.commonConfusion && sections.length < 3) {
        sections.push({
          title: "What people often confuse",
          body: service.commonConfusion
        });
      }

      return {
        ...service.information,
        sections
      };
    }

    return {
      intro: pickLocalized(service, "summary"),
      sections: [
        {
          title: "What this service is for",
          body: pickLocalized(service, "bestFor")
        },
        {
          title: "What to keep in mind",
          items: dedupeList([...(pickLocalized(service, "eligibility") || []), ...(pickLocalized(service, "notices") || [])])
        },
        {
          title: "What people often confuse",
          body: pickLocalized(service, "commonConfusion") || "The official service name matters, so make sure the task matches before you pay."
        }
      ]
    };
  }

  function renderInformationSection(service) {
    const information = pickLocalized(service, "information") || getInformationSections(service);
    const headings =
      getLanguage() === "mr"
        ? ["ही सेवा काय आहे", "ही सेवा कधी लागते", "लोक सहसा कशात गोंधळतात"]
        : ["What it is", "When you need it", "What people often confuse"];

    return `
      <article class="content-card content-card-highlight">
        <h3>${t("guide.labels.background", "What this process means")}</h3>
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
    const practicalDocs = pickLocalized(service, "practicalDocs") || [];
    const officialRequiredDocs = pickLocalized(service, "officialRequiredDocs") || [];
    const officialAdditionalDocs = dedupeList([...(pickLocalized(service, "officialAdditionalDocs") || []), ...(conditional.docs || [])]);

    return `
      <div class="section-grid">
        <article class="content-card">
          <h3>${t("guide.labels.requiredDocuments", "Required documents")}</h3>
          <p class="muted-copy">${getLanguage() === "mr" ? "या सेवेसाठी बहुतेक अर्जदारांनी तयार ठेवावीत अशी मुख्य अधिकृत कागदपत्रे." : "These are the main official documents that most applicants should keep ready for this service."}</p>
          ${needsOriginals(service) ? `<p class="inline-note"><strong>${t("guide.labels.carryOriginals", "Carry originals")}</strong> ${getLanguage() === "mr" ? "जर पोर्टल किंवा कार्यालय पडताळणीसाठी विचारत असेल तर." : "if the portal or office asks for verification."}</p>` : ""}
          <ul class="content-list">
            ${officialRequiredDocs.map((doc) => `<li>${doc}</li>`).join("")}
          </ul>
        </article>
        <article class="content-card">
          <h3>${t("guide.labels.sometimesNeeded", "Sometimes needed")}</h3>
          <p class="muted-copy">${getLanguage() === "mr" ? "ही कागदपत्रे सहसा पडताळणी, कार्यालय राउटिंग, फायनान्स, पत्ता बदल किंवा इतर केस-विशिष्ट अटींवर अवलंबून असतात." : "These usually depend on verification, office routing, finance status, address change, or other case-specific conditions."}</p>
          ${
            officialAdditionalDocs.length
              ? `<ul class="content-list">${officialAdditionalDocs.map((doc) => `<li>${doc}</li>`).join("")}</ul>`
              : `<p class="muted-copy">${getLanguage() === "mr" ? "या सेवेसाठी वेगळी अतिरिक्त कागदपत्रे दाखवलेली नाहीत." : "No extra supporting documents are highlighted for this service."}</p>`
          }
        </article>
      </div>
      ${
        practicalDocs.length
          ? `
            <article class="content-card content-card-soft">
              <h3>${t("guide.labels.backupPapers", "Backup papers people often carry")}</h3>
              <p class="muted-copy">${getLocalizedPracticalDocsNote()}</p>
              <ul class="content-list">
                ${practicalDocs.map((doc) => `<li>${doc}</li>`).join("")}
              </ul>
            </article>
          `
          : ""
      }
    `;
  }

  function renderStepsSection(service, state) {
    const conditional = getConditionalDocs(service, state);
    const steps = pickLocalized(service, "steps") || [];
    const watchOuts = dedupeList([...(pickLocalized(service, "notices") || []), ...(conditional.notes || [])]);
    const leaveOfficeChecks = pickLocalized(service, "leaveOfficeChecks") || [];
    const outcomeSummary = pickLocalized(service, "outcomeSummary");
    const processingNote = pickLocalized(service, "officialProcessingNote");
    const beforePayingNote = pickLocalized(service, "beforePayingNote");

    return `
      <article class="content-card">
        <h3>${t("guide.labels.stepByStep", "Step-by-step")}</h3>
        <ol class="step-list">
          ${steps
            .map(
              (step, index) => `
                <li>
                  <span class="step-number">${index + 1}</span>
                  <div>
                    <p class="step-channel">${getStepChannel(step)}</p>
                    <div>${step}</div>
                  </div>
                </li>
              `
            )
            .join("")}
        </ol>
      </article>
      <div class="section-grid">
        <article class="content-card">
          <h3>${t("guide.labels.afterSubmit", "After you submit")}</h3>
          <p>${outcomeSummary}</p>
          <p class="muted-copy">${processingNote}</p>
        </article>
        <article class="content-card">
          <h3>${t("guide.labels.beforePay", "Before you pay")}</h3>
          <p>${beforePayingNote}</p>
        </article>
      </div>
      ${
        watchOuts.length
          ? `
            <article class="content-card">
              <h3>${t("guide.labels.watchOutFor", "Watch out for")}</h3>
              <ul class="content-list">
                ${watchOuts.map((note) => `<li>${note}</li>`).join("")}
              </ul>
            </article>
          `
          : ""
      }
      ${
        leaveOfficeChecks.length
          ? `
            <article class="content-card">
              <h3>${t("guide.labels.beforeLeaveOffice", "Before you leave the office")}</h3>
              <ul class="content-list">
                ${leaveOfficeChecks.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          `
          : ""
      }
    `;
  }

  function renderFeesFormsSection(service) {
    const formLinks = service.officialForms || [];

    return `
      <article class="content-card">
        <h3>Fees</h3>
        <p class="muted-copy">Treat the live portal amount as final wherever the system calculates the amount automatically.</p>
        <ul class="content-list">
          ${service.officialFeeNotes.map((fee) => `<li>${fee}</li>`).join("")}
        </ul>
      </article>
      <article class="content-card">
        <h3>Official forms</h3>
        <p class="muted-copy">
          ${
            formLinks.length
              ? `Main official forms commonly used here: ${service.mainFormsSummary}.`
              : "This service is mostly portal-driven. Use the official service page for the latest form and upload instructions."
          }
        </p>
        ${
          formLinks.length
            ? `
              <div class="resource-stack">
                ${formLinks
                  .map(
                    (form) => `
                      <article class="resource-card">
                        <strong>${form.label}</strong>
                        <span>${form.title}</span>
                        <div class="inline-actions">
                          <a class="button button-secondary" href="${form.url}" target="_blank" rel="noreferrer">Open official page</a>
                          ${form.downloadUrl ? `<a class="button button-secondary" href="${form.downloadUrl}" target="_blank" rel="noreferrer">Direct PDF</a>` : ""}
                        </div>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            `
            : ""
        }
      </article>
    `;
  }

  function renderTimingSection(service) {
    const officialTimingWindows = pickLocalized(service, "officialTimingWindows") || [];
    const officialValidity = pickLocalized(service, "officialValidity");
    const officialProcessingNote = pickLocalized(service, "officialProcessingNote");
    return `
      <div class="section-grid">
        <article class="content-card">
          <h3>${t("guide.labels.importantDates", "Important dates")}</h3>
          ${
            officialTimingWindows.length
              ? `<ul class="content-list">${officialTimingWindows.map((item) => `<li>${item}</li>`).join("")}</ul>`
              : `<p class="muted-copy">${getLanguage() === "mr" ? "या सेवेसाठी वापरलेल्या अधिकृत स्रोतांत स्वतंत्र अर्ज विंडो स्पष्ट दिलेली नाही." : "No official filing window was specifically published for this service in the source pages used here."}</p>`
          }
        </article>
        <article class="content-card">
          <h3>${t("guide.labels.validity", "Validity")}</h3>
          <p>${officialValidity}</p>
        </article>
      </div>
      <article class="content-card content-card-highlight">
        <h3>${t("guide.labels.processingTime", "Processing time")}</h3>
        <p>${officialProcessingNote}</p>
      </article>
    `;
  }

  function renderOfficeSection(service, state) {
    const officeGuidance = state ? getPlannerOfficeGuidance(service, state) : getGenericOfficeGuidance(service);
    const selectedOffice = state ? getOfficeByPlannerId(state.officeId) : null;
    const eligibility = pickLocalized(service, "eligibility") || [];
    const officeCards = selectedOffice
      ? `
          <article class="office-mini-card office-mini-card-selected">
            <p class="eyebrow">${selectedOffice.code}</p>
            <h3>${getLocalizedOfficeName(selectedOffice)}</h3>
            <p>${getLocalizedOfficeAddress(selectedOffice)}</p>
            <p class="muted-copy"><strong>${getLanguage() === "mr" ? "फोन" : "Phone"}:</strong> <a href="${createPhoneHref(selectedOffice.phone)}">${selectedOffice.phone}</a></p>
            <p class="muted-copy"><strong>${getLanguage() === "mr" ? "ईमेल" : "Email"}:</strong> <a href="mailto:${selectedOffice.email}">${selectedOffice.email}</a></p>
            <p class="muted-copy">${getOfficeNote(selectedOffice)}</p>
          </article>
        `
      : state && state.officeId === "other-state"
        ? `
            <article class="office-mini-card office-mini-card-selected">
              <p class="eyebrow">${getLanguage() === "mr" ? "साताऱ्याबाहेरील रेकॉर्ड" : "Outside Satara"}</p>
              <h3>${getLanguage() === "mr" ? "दुसऱ्या राज्यातील किंवा अस्पष्ट क्षेत्राधिकारातील रेकॉर्ड" : "Record from another state or unclear jurisdiction"}</h3>
              <p>${getLanguage() === "mr" ? "अधिकृत पोर्टल किंवा कार्यालयाकडून अतिरिक्त पडताळणी, मॅन्युअल तपासणी किंवा पुढील सूचनांची अपेक्षा ठेवा." : "Expect extra verification, possible manual checking, and follow-up instructions from the official portal or office."}</p>
              <p class="muted-copy">${getLanguage() === "mr" ? "पेमेंटपूर्वी सध्याच्या रेकॉर्डचा आधार घेऊन योग्य प्राधिकरण निश्चित करा." : "Use the current record details first and confirm the correct authority before payment."}</p>
            </article>
          `
        : siteData.offices
            .map(
              (office) => `
                <article class="office-mini-card">
                  <p class="eyebrow">${office.code}</p>
                  <h3>${getLocalizedOfficeName(office)}</h3>
                  <p>${getLocalizedOfficeAddress(office)}</p>
                  <p class="muted-copy"><strong>${getLanguage() === "mr" ? "फोन" : "Phone"}:</strong> <a href="${createPhoneHref(office.phone)}">${office.phone}</a></p>
                  <p class="muted-copy"><strong>${getLanguage() === "mr" ? "ईमेल" : "Email"}:</strong> <a href="mailto:${office.email}">${office.email}</a></p>
                </article>
              `
            )
            .join("");

    return `
      <div class="section-grid">
        <article class="content-card">
          <h3>${t("guide.labels.officeGuidance", "Office and appointment guidance")}</h3>
          <ul class="content-list">
            <li><strong>${t("guide.labels.startOn", "Start on")}:</strong> ${getPortalLabel(service)}</li>
            <li><strong>${getLanguage() === "mr" ? "अपॉइंटमेंट" : "Appointment"}:</strong> ${getLocalizedStatusText(service, "appointment")}</li>
            <li><strong>${t("guide.labels.officeVisit", "Office visit")}:</strong> ${getLocalizedStatusText(service, "officeVisit")}</li>
            <li><strong>${getLanguage() === "mr" ? "तपासणी" : "Inspection"}:</strong> ${getLocalizedStatusText(service, "inspection")}</li>
          </ul>
          <p class="muted-copy">${officeGuidance}</p>
          ${needsOriginals(service) ? `<p class="inline-note">${getLanguage() === "mr" ? "पोर्टल किंवा कार्यालय पडताळणी मागत असल्यास मूळ कागदपत्रे बाळगा." : "Carry originals if the portal or office asks for document verification."}</p>` : ""}
          ${isFinanceSensitive(service) ? `<p class="inline-note">${getLanguage() === "mr" ? "बँक किंवा फायनान्सर सहभागी असल्यास ताज्या फायनान्स कागदपत्रांची तयारी ठेवा." : "If a bank or financier is involved, keep the latest finance papers ready."}</p>` : ""}
          <p><a class="inline-link" href="./offices.html${getLanguage() === "mr" ? "?lang=mr" : ""}">${getLanguage() === "mr" ? "कार्यालय तपशील पहा" : "See office details"}</a></p>
        </article>
        <article class="content-card">
          <h3>${t("guide.labels.beforeVisit", "Before you visit")}</h3>
          <ul class="content-list">
            ${eligibility.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
      <div class="section-grid office-mini-grid">
        ${officeCards}
      </div>
    `;
  }

  function buildServiceSections(service, state) {
    return [
      {
        id: "steps",
        label: t("guide.sectionLabels.steps", "Steps"),
        html: renderStepsSection(service, state)
      },
      {
        id: "documents",
        label: t("guide.sectionLabels.documents", "Documents"),
        html: renderDocumentsSection(service, state)
      },
      {
        id: "timeline",
        label: t("guide.sectionLabels.timeline", "Timeline"),
        html: renderTimingSection(service)
      },
      {
        id: "fees",
        label: t("guide.sectionLabels.fees", "Fees"),
        html: `
          <article class="content-card">
            <h3>${t("guide.sectionLabels.fees", "Fees")}</h3>
            <p class="muted-copy">${getLanguage() === "mr" ? "ज्या सेवांमध्ये रक्कम प्रणालीद्वारे मोजली जाते, तिथे पोर्टलवर दिसणारी रक्कम अंतिम माना." : "Treat the live portal amount as final wherever the system calculates the amount automatically."}</p>
            <ul class="content-list">
              ${(pickLocalized(service, "officialFeeNotes") || []).map((fee) => `<li>${fee}</li>`).join("")}
            </ul>
          </article>
        `
      },
      {
        id: "forms",
        label: t("guide.sectionLabels.forms", "Forms"),
        html: `
          <article class="content-card">
            <h3>${t("guide.labels.officialForms", "Official forms")}</h3>
            <p class="muted-copy">
              ${
                (pickLocalized(service, "officialForms") || service.officialForms).length
                  ? getLanguage() === "mr"
                    ? `येथे प्रामुख्याने वापरले जाणारे अधिकृत फॉर्म: ${pickLocalized(service, "mainFormsSummary") || service.mainFormsSummary}.`
                    : `Main official forms commonly used here: ${pickLocalized(service, "mainFormsSummary") || service.mainFormsSummary}.`
                  : getLanguage() === "mr"
                    ? "ही सेवा मुख्यतः पोर्टल-आधारित आहे. ताज्या फॉर्म आणि अपलोड सूचनांसाठी अधिकृत सेवा पान वापरा."
                    : "This service is mostly portal-driven. Use the official service page for the latest form and upload instructions."
              }
            </p>
            ${
              (pickLocalized(service, "officialForms") || service.officialForms).length
                ? `
                  <div class="resource-stack">
                    ${(pickLocalized(service, "officialForms") || service.officialForms)
                      .map(
                        (form) => `
                          <article class="resource-card">
                            <strong>${form.label}</strong>
                            <span>${form.title}</span>
                            <div class="inline-actions">
                              <a class="button button-secondary" href="${form.url}" target="_blank" rel="noreferrer">${getLanguage() === "mr" ? "अधिकृत पान उघडा" : "Open official page"}</a>
                              ${form.downloadUrl ? `<a class="button button-secondary" href="${form.downloadUrl}" target="_blank" rel="noreferrer">${getLanguage() === "mr" ? "थेट PDF" : "Direct PDF"}</a>` : ""}
                            </div>
                          </article>
                        `
                      )
                      .join("")}
                  </div>
                `
                : ""
            }
          </article>
        `
      },
      {
        id: "office",
        label: t("guide.sectionLabels.office", "Office"),
        html: renderOfficeSection(service, state)
      },
      {
        id: "information",
        label: t("guide.sectionLabels.information", "Information"),
        html: renderInformationSection(service)
      },
      {
        id: "sources",
        label: t("guide.sectionLabels.sources", "Sources"),
        html: `
          <article class="content-card">
            <h3>${t("guide.labels.officialSources", "Government source used for this process")}</h3>
            <p class="muted-copy">${getLanguage() === "mr" ? `अधिकृत स्रोतांवरून शेवटचा आढावा: ${getLocalizedReviewDate()}.` : `Last reviewed from official sources: ${getLocalizedReviewDate()}.`}</p>
            <div class="resource-stack">
              ${(pickLocalized(service, "officialSourceRefs") || service.officialSourceRefs)
                .map(
                  (link) => `
                    <a class="resource-card" href="${link.url}" target="_blank" rel="noreferrer">
                      <strong>${link.label}</strong>
                      <span>${getLanguage() === "mr" ? "या प्रक्रियेसाठी वापरलेला सरकारी स्रोत" : "Government source used for this process"}</span>
                    </a>
                  `
                )
                .join("")}
            </div>
          </article>
        `
      }
    ];
  }

  function renderGuideSections(container, sections, scopeId) {
    const anchorNav = `
      <nav class="guide-anchor-nav" aria-label="${getLanguage() === "mr" ? "मार्गदर्शिका विभाग" : "Guide sections"}">
        ${sections
          .map(
            (section) => `
              <a class="guide-anchor-link" href="#${scopeId}-${section.id}">
                ${section.label}
              </a>
            `
          )
          .join("")}
      </nav>
    `;

    const sectionHtml = sections
      .map(
        (section) => `
          <section class="guide-section guide-section-${section.id}" id="${scopeId}-${section.id}" data-guide-section="${section.id}">
            <div class="section-head compact guide-section-head">
              <p class="guide-section-eyebrow">${t(`guide.sectionEyebrows.${section.id}`, getLanguage() === "mr" ? "मार्गदर्शिका विभाग" : "Guide section")}</p>
              <div class="guide-section-head-copy">
                <h2>${section.label}</h2>
                <p class="guide-section-intro">${t(`guide.sectionIntros.${section.id}`, "")}</p>
              </div>
            </div>
            ${section.html}
          </section>
        `
      )
      .join("");

    container.innerHTML = `
      ${anchorNav}
      <div class="guide-stack">
        ${sectionHtml}
      </div>
    `;
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
        <p>${getLanguage() === "mr" ? "ही माहिती उपयोगी पडली का?" : siteData.wizardMeta.helpfulPrompt}</p>
        <div class="feedback-actions">
          <button class="feedback-button" type="button" data-feedback-scope="${scopeId}" data-feedback-value="yes">${getLanguage() === "mr" ? "उपयोगी" : "Helpful"}</button>
          <button class="feedback-button" type="button" data-feedback-scope="${scopeId}" data-feedback-value="no">${getLanguage() === "mr" ? "अजून सुधारणा हवी" : "Needs work"}</button>
        </div>
        <p class="feedback-response" data-feedback-response="${scopeId}" hidden>${getLanguage() === "mr" ? "अभिप्रायाबद्दल धन्यवाद." : "Thanks for the feedback."}</p>
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
            ? (getLanguage() === "mr" ? "धन्यवाद. ही माहिती उपयोगी पडली याचा आनंद आहे." : "Thanks. Glad this was useful.")
            : (getLanguage() === "mr"
              ? "धन्यवाद. यावरून या प्रकारच्या प्रकरणासाठी मार्गदर्शन अजून सुधारण्याची गरज आहे."
              : "Thanks. This tells us the guidance for this kind of case needs improvement.");
      });
    });
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
    const params = new URLSearchParams({
      service: serviceId
    });

    if (getLanguage() === "mr") {
      params.set("lang", "mr");
    }

    return `./service.html?${params.toString()}`;
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

    if (getLanguage() === "mr") {
      params.set("lang", "mr");
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
    createPhoneHref,
    createServiceHref,
    dedupeList,
    getJourneyById,
    getJourneyDescription,
    getJourneyTitle,
    getLanguage,
    getPortalLabel,
    getPlannerServiceOptions,
    getPlannerSteps,
    getRelatedServices,
    getRelevantFlags,
    getOfficeByPlannerId,
    getCategoryDescription,
    getCategoryLabel,
    getServiceById,
    getServiceShort,
    getServiceTitle,
    getServiceResources,
    getToolById,
    getFormById,
    getOfficeByCode,
    getOfficeNote,
    getOptionDescription,
    getOptionLabel,
    groupFaqByCategory,
    normalizePlannerState,
    pickLocalized,
    readPlannerStateFromUrl,
    renderAtGlance,
    renderGuideSections,
    renderHelpfulFeedback,
    renderBusinessSupportBlock,
    renderServiceSummary,
    renderTabs,
    setLanguage,
    shouldShowOfficeQuestion,
    shouldShowProfileQuestion,
    siteData,
    t,
    writePlannerStateToUrl
  };
})();
