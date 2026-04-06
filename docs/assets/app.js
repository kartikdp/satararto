const state = {
  activeCategory: "all",
  search: "",
  selectedServiceId: window.siteData.featuredIds[0]
};

const elements = {
  quickActions: document.getElementById("quick-actions"),
  statsGrid: document.getElementById("stats-grid"),
  categoryPills: document.getElementById("category-pills"),
  serviceSearch: document.getElementById("service-search"),
  serviceList: document.getElementById("service-list"),
  serviceDetail: document.getElementById("service-detail"),
  officeGrid: document.getElementById("office-grid"),
  bundleGrid: document.getElementById("bundle-grid"),
  signalList: document.getElementById("signal-list"),
  faqList: document.getElementById("faq-list"),
  sourceGrid: document.getElementById("source-grid")
};

function getFilteredServices() {
  return window.siteData.services.filter((service) => {
    const matchesCategory = state.activeCategory === "all" || service.category === state.activeCategory;
    const query = state.search.trim().toLowerCase();
    const haystack = `${service.title} ${service.short} ${service.summary} ${service.forms.join(" ")}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    return matchesCategory && matchesSearch;
  });
}

function ensureSelectedServiceVisible(filteredServices) {
  if (!filteredServices.some((service) => service.id === state.selectedServiceId)) {
    state.selectedServiceId = filteredServices.length ? filteredServices[0].id : null;
  }
}

function getServiceById(id) {
  return window.siteData.services.find((service) => service.id === id);
}

function createBadge(label, kind = "") {
  return `<span class="badge ${kind}">${label}</span>`;
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
      state.selectedServiceId = button.dataset.serviceId;
      state.activeCategory = "all";
      renderAll();
      document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderStats() {
  const cards = [
    {
      value: window.siteData.services.length,
      label: "reference pages covering licence, vehicle, permit, tax, and PUC journeys"
    },
    {
      value: window.siteData.offices.length,
      label: "official Satara district offices shown with code, contact, and address"
    },
    {
      value: "Docs",
      label: "document bundles designed to help users prepare before opening the official portal"
    },
    {
      value: "Official",
      label: "state and central source links kept separate from public pain-point signals"
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
    });
  });
}

function renderServiceList() {
  const filteredServices = getFilteredServices();
  ensureSelectedServiceVisible(filteredServices);

  if (!filteredServices.length) {
    elements.serviceList.innerHTML = `<div class="empty-state">No services match this search yet. Try a simpler word like <code>renewal</code>, <code>NOC</code>, or <code>licence</code>.</div>`;
    return;
  }

  elements.serviceList.innerHTML = filteredServices
    .map(
      (service) => `
        <button class="service-item ${state.selectedServiceId === service.id ? "is-active" : ""}" data-service-id="${service.id}">
          <small>${window.siteData.categories.find((category) => category.id === service.category).label}</small>
          <strong>${service.title}</strong>
          <span>${service.short}</span>
        </button>
      `
    )
    .join("");

  elements.serviceList.querySelectorAll("[data-service-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedServiceId = button.dataset.serviceId;
      renderServiceDetail();
      renderServiceList();
    });
  });
}

function renderServiceDetail() {
  const service = getServiceById(state.selectedServiceId);

  if (!service) {
    elements.serviceDetail.innerHTML = `<div class="empty-state">Choose a service to read the detailed reference page.</div>`;
    return;
  }

  elements.serviceDetail.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">Service Reference</p>
      <h2>${service.title}</h2>
      <p class="detail-lead">${service.summary}</p>
      <div class="badge-row">
        ${createBadge(`Flow: ${service.mode}`)}
        ${createBadge(`Appointment: ${service.appointment}`, "warning")}
        ${createBadge(`Office visit: ${service.officeVisit}`, "alert")}
        ${createBadge(`Inspection: ${service.inspection}`)}
      </div>
    </div>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>Best used for</h3>
        <p class="detail-meta">${service.bestFor}</p>
      </article>

      <article class="detail-card">
        <h3>Eligibility or timing</h3>
        <ul>
          ${service.eligibility.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </div>

    <div class="detail-grid">
      <article class="detail-card wide">
        <h3>Official step-by-step flow</h3>
        <ol>
          ${service.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </article>
    </div>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>Required documents</h3>
        <ul>
          ${service.requiredDocs.map((doc) => `<li>${doc}</li>`).join("")}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Conditional or supporting documents</h3>
        <ul>
          ${service.extraDocs.length ? service.extraDocs.map((doc) => `<li>${doc}</li>`).join("") : "<li>No extra supporting documents highlighted for this reference page.</li>"}
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

    <div class="detail-card">
      <h3>Reference notes</h3>
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
  `;
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
  renderCategoryPills();
  renderServiceList();
  renderServiceDetail();
}

elements.serviceSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderAll();
});

renderQuickActions();
renderStats();
renderOffices();
renderBundles();
renderSignals();
renderFaq();
renderSources();
renderAll();
