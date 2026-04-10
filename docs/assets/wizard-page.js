(function () {
  if (document.body.dataset.page !== "wizard") {
    return;
  }

  const {
    buildServiceSections,
    copyText,
    createServiceHref,
    createDefaultPlannerState,
    getJourneyDescription,
    getJourneyTitle,
    getLanguage,
    getOptionDescription,
    getOptionLabel,
    getPlannerServiceOptions,
    getPlannerSteps,
    getOfficeByPlannerId,
    getRelevantFlags,
    getServiceById,
    getServiceShort,
    getServiceTitle,
    normalizePlannerState,
    readPlannerStateFromUrl,
    renderBusinessSupportBlock,
    renderGuideSections,
    renderHelpfulFeedback,
    renderServiceSummary,
    siteData,
    t,
    writePlannerStateToUrl
  } = window.SiteApp;

  const hydrated = readPlannerStateFromUrl();
  let plannerState = hydrated.state;
  let viewMode = hydrated.view;
  let currentStepId = getPlannerSteps(plannerState)[0].id;

  const elements = {
    intro: document.getElementById("wizard-intro"),
    progressLabel: document.getElementById("wizard-progress-label"),
    progressService: document.getElementById("wizard-progress-service"),
    progressBar: document.getElementById("wizard-progress-bar"),
    stage: document.querySelector(".wizard-stage"),
    stepTitle: document.getElementById("wizard-step-title"),
    stepHelp: document.getElementById("wizard-step-help"),
    stepBody: document.getElementById("wizard-step-body"),
    backButton: document.getElementById("wizard-back"),
    resetButton: document.getElementById("wizard-reset"),
    flagsButtonRow: document.getElementById("wizard-flags-actions"),
    flagsContinue: document.getElementById("wizard-flags-continue"),
    resultView: document.getElementById("wizard-result"),
    wizardCard: document.getElementById("wizard-card"),
    resultSummary: document.getElementById("result-summary"),
    resultCta: document.getElementById("result-cta"),
    resultGuide: document.getElementById("result-guide"),
    resultFeedback: document.getElementById("result-feedback"),
    resultRevisit: document.getElementById("result-revisit"),
    resultChange: document.getElementById("result-change"),
    resultStartOver: document.getElementById("result-start-over")
  };

  function getShareableServiceHref(service) {
    if (typeof createServiceHref === "function") {
      return createServiceHref(service.id);
    }

    return `./service.html?service=${encodeURIComponent(service.id)}`;
  }

  function restartStepAnimation() {
    elements.stage.classList.remove("is-transitioning");
    void elements.stage.offsetWidth;
    elements.stage.classList.add("is-transitioning");
  }

  function resetPlanner() {
    plannerState = createDefaultPlannerState();
    plannerState = normalizePlannerState(plannerState);
    currentStepId = getPlannerSteps(plannerState)[0].id;
    viewMode = "wizard";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function syncStepId() {
    const steps = getPlannerSteps(plannerState);

    if (!steps.some((step) => step.id === currentStepId)) {
      currentStepId = steps[0].id;
    }

    return steps;
  }

  function getNextStepId() {
    const steps = syncStepId();
    const index = steps.findIndex((step) => step.id === currentStepId);

    if (index === -1 || index === steps.length - 1) {
      return null;
    }

    return steps[index + 1].id;
  }

  function getPreviousStepId() {
    const steps = syncStepId();
    const index = steps.findIndex((step) => step.id === currentStepId);

    if (index <= 0) {
      return null;
    }

    return steps[index - 1].id;
  }

  function updateProgress(steps) {
    const currentIndex = steps.findIndex((step) => step.id === currentStepId);
    const stepNumber = currentIndex + 1;
    const total = steps.length;
    const percentage = total ? Math.round((stepNumber / total) * 100) : 0;
    const service = getServiceById(plannerState.serviceId);

    elements.progressLabel.textContent = `${t("wizard.progressLabel", siteData.wizardMeta.progressLabel)} ${stepNumber} ${getLanguage() === "mr" ? "पैकी" : "of"} ${total}`;
    elements.progressBar.style.width = `${percentage}%`;

    if (service && currentStepId !== "journey") {
      elements.progressService.hidden = false;
      elements.progressService.textContent =
        getLanguage() === "mr" ? `संभाव्य सेवा: ${getServiceTitle(service)}` : `Likely service: ${getServiceTitle(service)}`;
    } else {
      elements.progressService.hidden = true;
      elements.progressService.textContent = "";
    }
  }

  function applyJourneySelection(journeyId) {
    const defaultState = createDefaultPlannerState();

    plannerState = normalizePlannerState({
      ...plannerState,
      journeyId,
      serviceId: "",
      learnerStatus: "no",
      officeId: "unknown",
      profileId: "private",
      vehicleType: "car",
      fuelType: "petrol",
      flags: defaultState.flags
    });

    const next = getNextStepId();
    if (next) {
      currentStepId = next;
      render();
      return;
    }

    showResult();
  }

  function applyServiceSelection(serviceId) {
    plannerState = normalizePlannerState({
      ...plannerState,
      serviceId
    });

    const next = getNextStepId();
    if (next) {
      currentStepId = next;
      render();
      return;
    }

    showResult();
  }

  function applyLearnerStatusSelection(learnerStatus) {
    plannerState = normalizePlannerState({
      ...plannerState,
      learnerStatus,
      serviceId: ""
    });

    const next = getNextStepId();
    if (next) {
      currentStepId = next;
      render();
      return;
    }

    showResult();
  }

  function applyOfficeSelection(officeId) {
    plannerState = normalizePlannerState({
      ...plannerState,
      officeId
    });

    const next = getNextStepId();
    if (next) {
      currentStepId = next;
      render();
      return;
    }

    showResult();
  }

  function applyProfileSelection(profileId) {
    plannerState = normalizePlannerState({
      ...plannerState,
      profileId
    });

    const next = getNextStepId();
    if (next) {
      currentStepId = next;
      render();
      return;
    }

    showResult();
  }

  function applyVehicleTypeSelection(vehicleType) {
    plannerState = normalizePlannerState({
      ...plannerState,
      vehicleType
    });

    const next = getNextStepId();
    if (next) {
      currentStepId = next;
      render();
      return;
    }

    showResult();
  }

  function applyFuelTypeSelection(fuelType) {
    plannerState = normalizePlannerState({
      ...plannerState,
      fuelType
    });

    const next = getNextStepId();
    if (next) {
      currentStepId = next;
      render();
      return;
    }

    showResult();
  }

  function showResult() {
    plannerState = normalizePlannerState(plannerState);
    viewMode = "result";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderChoiceCards(items, renderer) {
    return items.map(renderer).join("");
  }

  function renderJourneyStep() {
    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid wizard-choice-grid-featured">
        ${renderChoiceCards(siteData.journeys, (journey) => {
          const isActive = plannerState.journeyId === journey.id;

          return `
            <button class="wizard-choice ${isActive ? "is-active" : ""}" type="button" data-journey-id="${journey.id}">
              <span class="wizard-choice-icon">${journey.iconLabel}</span>
              <strong>${getJourneyTitle(journey)}</strong>
              <span>${getJourneyDescription(journey)}</span>
              <small>${journey.helperLabel}</small>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-journey-id]").forEach((button) => {
      button.addEventListener("click", () => {
        applyJourneySelection(button.dataset.journeyId);
      });
    });
  }

  function renderServiceStep() {
    const options = getPlannerServiceOptions(plannerState);

    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid">
        ${renderChoiceCards(options, (service) => {
          const isActive = plannerState.serviceId === service.id;

          return `
            <button class="wizard-choice ${isActive ? "is-active" : ""}" type="button" data-service-id="${service.id}">
              <strong>${getServiceTitle(service)}</strong>
              <span>${getServiceShort(service)}</span>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-service-id]").forEach((button) => {
      button.addEventListener("click", () => {
        applyServiceSelection(button.dataset.serviceId);
      });
    });
  }

  function renderLearnerStatusStep() {
    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid">
        ${renderChoiceCards(siteData.planner.learnerStatusOptions, (option) => {
          const isActive = plannerState.learnerStatus === option.id;

          return `
            <button class="wizard-choice ${isActive ? "is-active" : ""}" type="button" data-learner-status-id="${option.id}">
              <strong>${getOptionLabel(option)}</strong>
              <span>${getOptionDescription(option)}</span>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-learner-status-id]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLearnerStatusSelection(button.dataset.learnerStatusId);
      });
    });
  }

  function renderOfficeStep() {
    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid">
        ${renderChoiceCards(siteData.planner.officeOptions, (option) => {
          const isActive = plannerState.officeId === option.id;

          return `
            <button class="wizard-choice ${isActive ? "is-active" : ""}" type="button" data-office-id="${option.id}">
              <strong>${getOptionLabel(option)}</strong>
              <span>${getOptionDescription(option)}</span>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-office-id]").forEach((button) => {
      button.addEventListener("click", () => {
        applyOfficeSelection(button.dataset.officeId);
      });
    });
  }

  function renderProfileStep() {
    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid">
        ${renderChoiceCards(siteData.planner.profileOptions, (option) => {
          const isActive = plannerState.profileId === option.id;

          return `
            <button class="wizard-choice ${isActive ? "is-active" : ""}" type="button" data-profile-id="${option.id}">
              <strong>${getOptionLabel(option)}</strong>
              <span>${getOptionDescription(option)}</span>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-profile-id]").forEach((button) => {
      button.addEventListener("click", () => {
        applyProfileSelection(button.dataset.profileId);
      });
    });
  }

  function renderVehicleTypeStep() {
    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid">
        ${renderChoiceCards(siteData.planner.vehicleTypeOptions, (option) => {
          const isActive = plannerState.vehicleType === option.id;

          return `
            <button class="wizard-choice ${isActive ? "is-active" : ""}" type="button" data-vehicle-type-id="${option.id}">
              <strong>${getOptionLabel(option)}</strong>
              <span>${getOptionDescription(option)}</span>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-vehicle-type-id]").forEach((button) => {
      button.addEventListener("click", () => {
        applyVehicleTypeSelection(button.dataset.vehicleTypeId);
      });
    });
  }

  function renderFuelTypeStep() {
    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid">
        ${renderChoiceCards(siteData.planner.fuelTypeOptions, (option) => {
          const isActive = plannerState.fuelType === option.id;

          return `
            <button class="wizard-choice ${isActive ? "is-active" : ""}" type="button" data-fuel-type-id="${option.id}">
              <strong>${getOptionLabel(option)}</strong>
              <span>${getOptionDescription(option)}</span>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-fuel-type-id]").forEach((button) => {
      button.addEventListener("click", () => {
        applyFuelTypeSelection(button.dataset.fuelTypeId);
      });
    });
  }

  function renderFlagsStep() {
    const service = getServiceById(plannerState.serviceId);
    const relevantFlags = getRelevantFlags(service, plannerState);

    elements.stepBody.innerHTML = `
      <div class="wizard-choice-grid">
        ${renderChoiceCards(relevantFlags, (flag) => {
          const isActive = plannerState.flags[flag.id];

          return `
            <button class="wizard-choice wizard-choice-multi ${isActive ? "is-active" : ""}" type="button" data-flag-id="${flag.id}">
              <strong>${getOptionLabel(flag)}</strong>
              <span>${getOptionDescription(flag)}</span>
            </button>
          `;
        })}
      </div>
    `;

    elements.stepBody.querySelectorAll("[data-flag-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const flagId = button.dataset.flagId;
        plannerState.flags[flagId] = !plannerState.flags[flagId];

        if (flagId === "crossJurisdiction" && plannerState.journeyId === "moved-or-shifting-state") {
          plannerState = normalizePlannerState({
            ...plannerState,
            serviceId: ""
          });
        } else {
          plannerState = normalizePlannerState(plannerState);
        }

        render();
      });
    });
  }

  function renderCurrentStep() {
    const steps = syncStepId();
    const currentStep = steps.find((step) => step.id === currentStepId);

    updateProgress(steps);
    elements.stepTitle.textContent = currentStep.title;
    elements.stepHelp.textContent = currentStep.help;
    elements.flagsButtonRow.hidden = currentStep.id !== "flags";

    if (currentStep.id === "journey") {
      renderJourneyStep();
      restartStepAnimation();
      return;
    }

    if (currentStep.id === "learnerStatus") {
      renderLearnerStatusStep();
      restartStepAnimation();
      return;
    }

    if (currentStep.id === "service") {
      renderServiceStep();
      restartStepAnimation();
      return;
    }

    if (currentStep.id === "office") {
      renderOfficeStep();
      restartStepAnimation();
      return;
    }

    if (currentStep.id === "profile") {
      renderProfileStep();
      restartStepAnimation();
      return;
    }

    if (currentStep.id === "vehicleType") {
      renderVehicleTypeStep();
      restartStepAnimation();
      return;
    }

    if (currentStep.id === "fuelType") {
      renderFuelTypeStep();
      restartStepAnimation();
      return;
    }

    renderFlagsStep();
    restartStepAnimation();
  }

  function renderResult() {
    const service = getServiceById(plannerState.serviceId);
    const sections = buildServiceSections(service, plannerState);

    elements.resultSummary.innerHTML = `
      ${renderServiceSummary(service, plannerState, { mode: "wizard" })}
      ${renderBusinessSupportBlock(service, {
        title: t("guide.labels.serviceHelpTitle", "Need help with this service?"),
        body:
          getLanguage() === "mr"
            ? "ही प्रक्रिया, कागदपत्रे आणि पुढची पायरी समजून घेण्यासाठी आमच्याशी संपर्क करू शकता."
            : "Contact us if you want help with the process, the document list, or the next step for this service."
      })}
    `;
    elements.resultCta.innerHTML = `
      <div class="guide-utility-row">
        <button class="button button-link" type="button" id="result-share-link">${t("guide.labels.copyLink", "Copy link")}</button>
        <button class="button button-link" type="button" id="result-print">${t("guide.labels.printGuide", "Print guide")}</button>
      </div>
    `;

    renderGuideSections(elements.resultGuide, sections, `result-${service.id}`);
    renderHelpfulFeedback(elements.resultFeedback, `result-${service.id}`);
    elements.resultRevisit.hidden = false;

    document.getElementById("result-share-link").addEventListener("click", () => {
      copyText(window.location.href, () => {
        const button = document.getElementById("result-share-link");
        button.textContent = t("guide.labels.linkCopied", "Link copied");
      });
    });

    document.getElementById("result-print").addEventListener("click", () => {
      window.print();
    });
  }

  function render() {
    plannerState = normalizePlannerState(plannerState);
    writePlannerStateToUrl(plannerState, viewMode);

    elements.intro.innerHTML = `
      <p class="eyebrow">${t("wizard.introEyebrow", "Suraj Pardeshi • Satara")}</p>
      <h1>${t("wizard.introTitle", "Get help with licences, RC work, NOC, permits, tax, and other RTO documents")}</h1>
      <p>${t("wizard.introText", "Tell us what you need. We help identify the right service, explain the process, and tell you what papers to keep ready.")}</p>
      <p class="intro-inline-link">${t("wizard.introLinkPrefix", "Already know the work?")} <a href="./services.html${getLanguage() === "mr" ? "?lang=mr" : ""}">${t("wizard.introLinkLabel", "See all services")}</a>.</p>
      ${renderBusinessSupportBlock(null, {
        title: getLanguage() === "mr" ? "कागदपत्र, लायसन्स किंवा RTO कामासाठी मदत हवी आहे का?" : "Need help with licence, RC, NOC, permit, or other document work?",
        body:
          getLanguage() === "mr"
            ? "काही प्रश्नांची उत्तरे द्या. योग्य सेवा समजल्यानंतर आम्ही प्रक्रिया समजावून सांगू आणि गरज असल्यास पुढे मदत करू."
            : "Answer a few questions first. Once the right service is clear, you can use the guide and contact us for paid help if needed."
      })}
    `;
    elements.resetButton.textContent = t("wizard.buttons.startOver", "Start over");
    elements.backButton.textContent = t("wizard.buttons.back", "Back");
    elements.flagsContinue.textContent = t("wizard.buttons.showResult", "Show my result");
    elements.resultChange.textContent = t("wizard.buttons.changeAnswers", "Change my answers");
    elements.resultStartOver.textContent = t("wizard.buttons.startOver", "Start over");

    const showResult = viewMode === "result";
    elements.intro.hidden = showResult;
    elements.wizardCard.hidden = showResult;
    elements.resultView.hidden = !showResult;

    if (showResult) {
      renderResult();
      return;
    }

    const previousStepId = getPreviousStepId();
    elements.backButton.hidden = !previousStepId;
    renderCurrentStep();
  }

  elements.backButton.addEventListener("click", () => {
    const previousStepId = getPreviousStepId();

    if (previousStepId) {
      currentStepId = previousStepId;
      render();
    }
  });

  elements.resetButton.addEventListener("click", () => {
    resetPlanner();
  });

  elements.flagsContinue.addEventListener("click", () => {
    showResult();
  });

  elements.resultChange.addEventListener("click", () => {
    viewMode = "wizard";
    currentStepId = "journey";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.resultStartOver.addEventListener("click", () => {
    resetPlanner();
  });

  render();
})();
