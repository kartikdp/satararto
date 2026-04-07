(function () {
  if (document.body.dataset.page !== "services") {
    return;
  }

  const {
    createServiceHref,
    getCategoryDescription,
    getCategoryLabel,
    getLanguage,
    getPortalLabel,
    getServiceShort,
    getServiceTitle,
    pickLocalized,
    siteData,
    t
  } = window.SiteApp;

  const elements = {
    search: document.getElementById("services-search"),
    filters: document.getElementById("services-filters"),
    results: document.getElementById("services-results")
  };

  const state = {
    query: "",
    category: "all"
  };

  if (!elements.search || !elements.filters || !elements.results) {
    return;
  }

  function updateIntro() {
    const intro = document.getElementById("services-page-intro");
    if (!intro) {
      return;
    }

    intro.innerHTML = `
      <p class="eyebrow">${t("pages.services.eyebrow", "Service help")}</p>
      <h1>${t("pages.services.title", "Choose the work you need help with")}</h1>
      <p>${t("pages.services.body", "Open the service page directly if you already know the document or RTO work involved.")}</p>
    `;
  }

  function getFilteredServices() {
    return siteData.services.filter((service) => {
      const matchesCategory = state.category === "all" || service.category === state.category;
      const haystack = [
        getServiceTitle(service),
        getServiceShort(service),
        service.title,
        service.short,
        service.summary,
        service.bestFor,
        ...(service.officialRequiredDocs || []),
        ...(service.officialAdditionalDocs || []),
        ...(service.officialFeeNotes || []),
        ...(service.officialTimingWindows || []),
        ...(service.officialForms || []).flatMap((form) => [form.label, form.title]),
        ...(service.officialSourceRefs || []).map((source) => source.label)
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !state.query || haystack.includes(state.query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }

  function renderFilters() {
    elements.filters.innerHTML = siteData.categories
      .map(
        (category) => `
          <button class="filter-pill ${state.category === category.id ? "is-active" : ""}" type="button" data-category-id="${category.id}">
            ${getCategoryLabel(category)}
          </button>
        `
      )
      .join("");

    elements.filters.querySelectorAll("[data-category-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.category = button.dataset.categoryId;
        render();
      });
    });
  }

  function renderResults() {
    const services = getFilteredServices();

    if (!services.length) {
      elements.results.innerHTML = `
        <article class="empty-card">
          <h2>${t("guide.labels.noMatchingService", "No matching service found")}</h2>
          <p>${t("guide.labels.noMatchingHint", "Try a simpler word like renewal, transfer, NOC, address change, or permit.")}</p>
          <p><a class="inline-link" href="./index.html${getLanguage() === "mr" ? "?lang=mr" : ""}">${t("guide.labels.useWizard", "Not sure? Use Get Help")}</a></p>
        </article>
      `;
      return;
    }

    elements.results.innerHTML = services
      .map((service) => {
        const matchingJourney = siteData.journeys.find((journey) => journey.serviceIds.includes(service.id));
        const journeyId = matchingJourney ? matchingJourney.id : siteData.journeys[0].id;
        const category = siteData.categories.find((entry) => entry.id === service.category);
        const wizardParams = new URLSearchParams({
          journey: journeyId,
          service: service.id
        });

        if (getLanguage() === "mr") {
          wizardParams.set("lang", "mr");
        }

        return `
          <article class="service-card">
            <div class="service-card-top">
              <div class="service-card-topline">
                <p class="eyebrow">${category ? getCategoryLabel(category) : t("pages.services.eyebrow", "Service")}</p>
                ${service.featured ? `<span class="mini-tag">${t("guide.labels.mostUsed", "Most used")}</span>` : ""}
              </div>
              <h2>${getServiceTitle(service)}</h2>
              <p>${getServiceShort(service) || service.summary}</p>
            </div>
            <div class="service-card-meta">
              <span>${pickLocalized(service, "serviceLabel") || service.serviceLabel}</span>
              <span>${t("guide.labels.startOn", "Start on")} ${getPortalLabel(service)}</span>
              <span>${t("guide.labels.officeVisit", "Office visit")}: ${service.officeVisit}</span>
            </div>
            ${service.commonConfusion ? `<p class="service-card-note">${service.commonConfusion}</p>` : ""}
            <div class="service-card-actions">
              <a class="button button-primary" href="${createServiceHref(service.id)}">${getLanguage() === "mr" ? "सेवा पान उघडा" : "Open service page"}</a>
              <a class="button button-link" href="./index.html?${wizardParams.toString()}">${t("guide.labels.useWizard", "Not sure? Use Get Help")}</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function render() {
    updateIntro();
    const searchLabel = elements.search.closest(".search-field");
    if (searchLabel) {
      const labelText = searchLabel.querySelector("span");
      if (labelText) {
        labelText.textContent = t("guide.labels.searchServices", "Search services");
      }
    }
    elements.search.setAttribute("placeholder", t("guide.labels.searchPlaceholder", "Search learner's licence, RC transfer, NOC, permit..."));
    renderFilters();
    renderResults();
  }

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderResults();
  });

  render();
})();
