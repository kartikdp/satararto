(function () {
  if (document.body.dataset.page !== "wizard") {
    return;
  }

  const {
    buildServiceSections,
    copyText,
    createServiceHref,
    createDefaultPlannerState,
    getPlannerServiceOptions,
    getPlannerSteps,
    getOfficeByPlannerId,
    getRelevantFlags,
    getServiceById,
    normalizePlannerState,
    readPlannerStateFromUrl,
    renderGuideSections,
    renderHelpfulFeedback,
    renderServiceSummary,
    siteData,
    writePlannerStateToUrl
  } = window.SiteApp;

  const hydrated = readPlannerStateFromUrl();
  let plannerState = hydrated.state;
  let viewMode = hydrated.view;
  let currentStepId = getPlannerSteps(plannerState)[0].id;

  const elements = {
    intro: document.getElementById("wizard-intro"),
    progressLabel: document.getElementById("wizard-progress-label"),
    progressBar: document.getElementById("wizard-progress-bar"),
    stage: document.querySelector(".wizard-stage"),
    stepTitle: document.getElementById("wizard-step-title"),
    stepHelp: document.getElementById("wizard-step-help"),
    stepBody: document.getElementById("wizard-step-body"),
    backButton: document.getElementById("wizard-back"),
    resetButton: document.getElementById("wizard-reset"),
    flagsButtonRow: document.getElementById("wizard-flags-actions"),
    flagsContinue: document.getElementById("wizard-flags-continue"),
    previewView: document.getElementById("wizard-preview"),
    previewSummary: document.getElementById("preview-summary"),
    previewCta: document.getElementById("preview-cta"),
    previewGuide: document.getElementById("preview-guide"),
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

    elements.progressLabel.textContent = `${siteData.wizardMeta.progressLabel} ${stepNumber} of ${total}`;
    elements.progressBar.style.width = `${percentage}%`;
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
              <strong>${journey.title}</strong>
              <span>${journey.description}</span>
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
              <strong>${service.title}</strong>
              <span>${service.short}</span>
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
              <strong>${option.label}</strong>
              <span>${option.description}</span>
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
              <strong>${option.label}</strong>
              <span>${option.description}</span>
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
              <strong>${option.label}</strong>
              <span>${option.description}</span>
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
              <strong>${option.label}</strong>
              <span>${option.description}</span>
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
              <strong>${option.label}</strong>
              <span>${option.description}</span>
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
              <strong>${flag.label}</strong>
              <span>${flag.description}</span>
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
    const primaryLink = service.officialLinks[0];
    const selectedOffice = getOfficeByPlannerId(plannerState.officeId);

    elements.resultSummary.innerHTML = `
      ${renderServiceSummary(service, plannerState, { mode: "wizard" })}
    `;
    elements.resultCta.innerHTML = `
      <div class="cta-box">
        <p class="cta-note">${siteData.wizardMeta.resultDisclaimer}</p>
        <div class="cta-primary-row">
          <a class="button button-primary" href="${primaryLink.url}" target="_blank" rel="noreferrer">Open ${primaryLink.label}</a>
        </div>
        <div class="cta-link-row cta-link-row-tertiary">
          <button class="button button-link" type="button" id="result-share-link">Copy link</button>
          <button class="button button-link" type="button" id="result-print">Print guide</button>
          ${
            selectedOffice
              ? `<a class="button button-link" href="tel:${selectedOffice.phone.replace(/[^0-9+]/g, "")}">Call ${selectedOffice.code}</a>`
              : ""
          }
        </div>
      </div>
    `;

    renderGuideSections(elements.resultGuide, sections, `result-${service.id}`);
    renderHelpfulFeedback(elements.resultFeedback, `result-${service.id}`);
    elements.resultRevisit.hidden = false;

    document.getElementById("result-share-link").addEventListener("click", () => {
      copyText(window.location.href, () => {
        const button = document.getElementById("result-share-link");
        button.textContent = "Link copied";
      });
    });

    document.getElementById("result-print").addEventListener("click", () => {
      window.print();
    });
  }

  function renderPreview() {
    const service = getServiceById(plannerState.serviceId);
    const sections = buildServiceSections(service, plannerState);
    const primaryLink = service.officialLinks[0];

    elements.previewSummary.innerHTML = `
      ${renderServiceSummary(service, plannerState, { mode: "wizard" })}
    `;
    elements.previewCta.innerHTML = `
      <div class="cta-box cta-box-preview">
        <div class="cta-primary-row">
          <a class="button button-primary" href="${primaryLink.url}" target="_blank" rel="noreferrer">Open ${primaryLink.label}</a>
        </div>
      </div>
    `;
    renderGuideSections(elements.previewGuide, sections, `preview-${service.id}`);
  }

  function render() {
    plannerState = normalizePlannerState(plannerState);
    writePlannerStateToUrl(plannerState, viewMode);

    const showResult = viewMode === "result";
    elements.intro.hidden = showResult;
    elements.wizardCard.hidden = showResult;
    elements.previewView.hidden = showResult;
    elements.resultView.hidden = !showResult;

    if (showResult) {
      renderResult();
      return;
    }

    const previousStepId = getPreviousStepId();
    elements.backButton.hidden = !previousStepId;
    renderCurrentStep();
    renderPreview();
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
