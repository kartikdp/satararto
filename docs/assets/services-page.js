(function () {
  if (document.body.dataset.page !== "services") {
    return;
  }

  const { createServiceHref, getPortalLabel, getServiceById, siteData } = window.SiteApp;

  const elements = {
    search: document.getElementById("services-search"),
    filters: document.getElementById("services-filters"),
    results: document.getElementById("services-results")
  };

  const state = {
    query: "",
    category: "all"
  };

  function getFilteredServices() {
    return siteData.services.filter((service) => {
      const matchesCategory = state.category === "all" || service.category === state.category;
      const haystack = [
        service.title,
        service.short,
        service.summary,
        service.bestFor,
        service.requiredDocs.join(" "),
        service.forms.join(" ")
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
            ${category.label}
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
          <h2>No matching service found</h2>
          <p>Try a simpler word like renewal, transfer, NOC, address change, or permit.</p>
        </article>
      `;
      return;
    }

    elements.results.innerHTML = services
      .map((service) => {
        const matchingJourney = siteData.journeys.find((journey) => journey.serviceIds.includes(service.id));
        const journeyId = matchingJourney ? matchingJourney.id : siteData.journeys[0].id;
        const category = siteData.categories.find((entry) => entry.id === service.category);

        return `
          <article class="service-card">
            <div class="service-card-top">
              <p class="eyebrow">${category.label}</p>
              <h2>${service.title}</h2>
              <p>${service.short || service.summary}</p>
            </div>
            <div class="service-card-meta">
              <span>Start on ${getPortalLabel(service)}</span>
              <span>Office visit: ${service.officeVisit}</span>
              <span>Appointment: ${service.appointment}</span>
            </div>
            <div class="service-card-actions">
              <a class="button button-primary" href="${createServiceHref(service.id)}">Open guide</a>
              <a class="button button-link" href="./index.html?journey=${encodeURIComponent(journeyId)}&service=${encodeURIComponent(
                service.id
              )}">Use Start Here</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function render() {
    renderFilters();
    renderResults();
  }

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderResults();
  });

  render();
})();
