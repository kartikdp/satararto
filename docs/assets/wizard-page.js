(function () {
  if (document.body.dataset.page !== "wizard") {
    return;
  }

  const {
    buildServiceSections,
    copyText,
    createDefaultPlannerState,
    createServiceHref,
    getJourneyById,
    getPlannerServiceOptions,
    getPlannerSteps,
    getRelevantFlags,
    getServiceById,
    normalizePlannerState,
    readPlannerStateFromUrl,
    renderHelpfulFeedback,
    renderServiceSummary,
    renderTabs,
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
    resultTabs: document.getElementById("result-tabs"),
    resultFeedback: document.getElementById("result-feedback"),
    resultRevisit: document.getElementById("result-revisit"),
    resultChange: document.getElementById("result-change"),
    resultStartOver: document.getElementById("result-start-over")
  };

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
      officeId: "unknown",
      profileId: "private",
      flags: defaultState.flags
    });

    const next = getNextStepId();
    currentStepId = next || "journey";
    render();
  }

  function applyServiceSelection(serviceId) {
    plannerState = normalizePlannerState({
      ...plannerState,
      serviceId
    });

    const next = getNextStepId();
    currentStepId = next || "service";
    render();
  }

  function applyOfficeSelection(officeId) {
    plannerState = normalizePlannerState({
      ...plannerState,
      officeId
    });

    const next = getNextStepId();
    currentStepId = next || "office";
    render();
  }

  function applyProfileSelection(profileId) {
    plannerState = normalizePlannerState({
      ...plannerState,
      profileId
    });

    const next = getNextStepId();
    currentStepId = next || "profile";
    render();
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

        if (flagId === "alreadyHasLearner" && plannerState.journeyId === "new-driver") {
          plannerState = normalizePlannerState({
            ...plannerState,
            serviceId: ""
          });
        } else if (flagId === "crossJurisdiction" && plannerState.journeyId === "moved-or-shifting-state") {
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
      return;
    }

    if (currentStep.id === "service") {
      renderServiceStep();
      return;
    }

    if (currentStep.id === "office") {
      renderOfficeStep();
      return;
    }

    if (currentStep.id === "profile") {
      renderProfileStep();
      return;
    }

    renderFlagsStep();
  }

  function renderResult() {
    const service = getServiceById(plannerState.serviceId);
    const sections = buildServiceSections(service, plannerState);
    const primaryLink = service.officialLinks[0];

    elements.resultSummary.innerHTML = renderServiceSummary(service, plannerState);
    elements.resultCta.innerHTML = `
      <div class="cta-box">
        <p class="cta-note">${siteData.wizardMeta.resultDisclaimer}</p>
        <div class="cta-actions">
          <a class="button button-primary" href="${primaryLink.url}" target="_blank" rel="noreferrer">Open ${primaryLink.label}</a>
          <a class="button button-secondary" href="${createServiceHref(service.id)}">View detailed guide</a>
          <button class="button button-secondary" type="button" id="result-share-link">Copy share link</button>
        </div>
      </div>
    `;

    renderTabs(elements.resultTabs, sections, `result-${service.id}`);
    renderHelpfulFeedback(elements.resultFeedback, `result-${service.id}`);
    elements.resultRevisit.hidden = false;

    document.getElementById("result-share-link").addEventListener("click", () => {
      copyText(window.location.href, () => {
        const button = document.getElementById("result-share-link");
        button.textContent = "Link copied";
      });
    });
  }

  function render() {
    plannerState = normalizePlannerState(plannerState);
    writePlannerStateToUrl(plannerState, viewMode);

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
