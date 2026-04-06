const state = {
  activeCategory: "all",
  search: "",
  selectedServiceId: window.siteData.featuredIds[0]
};

const elements = {
  quickActions: document.getElementById("quick-actions"),
  statsGrid: document.getElementById("stats-grid"),
  journeyGrid: document.getElementById("journey-grid"),
  preflightGrid: document.getElementById("preflight-grid"),
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
  sourceGrid: document.getElementById("source-grid")
};

function getServiceById(id) {
  return window.siteData.services.find((service) => service.id === id);
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
      service.extraDocs.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = !query || haystack.includes(query);
    return matchesCategory && matchesSearch;
  });
}

function ensureSelectedServiceVisible(filteredServices) {
  if (!filteredServices.some((service) => service.id === state.selectedServiceId)) {
    state.selectedServiceId = filteredServices.length ? filteredServices[0].id : null;
  }
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

function activateService(serviceId, options = {}) {
  const service = getServiceById(serviceId);
  if (!service) {
    return;
  }

  state.selectedServiceId = serviceId;

  if (options.category) {
    state.activeCategory = options.category;
  }

  if (options.clearSearch) {
    state.search = "";
    elements.serviceSearch.value = "";
  }

  renderAll();

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
      label: "guided reference pages for Satara RTO services"
    },
    {
      value: window.siteData.journeys.length,
      label: "start-here paths based on the user's real situation"
    },
    {
      value: window.siteData.offices.length,
      label: "official Satara district offices shown with contact details"
    },
    {
      value: "Official",
      label: "process guidance separated from final government submission"
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
      const linkedServices = journey.serviceIds
        .map((serviceId) => getServiceById(serviceId))
        .filter(Boolean);

      return `
        <article class="journey-card">
          <p class="eyebrow">${getCategoryById(journey.category).label}</p>
          <h3>${journey.title}</h3>
          <p>${journey.description}</p>
          <div class="mini-chip-row">
            ${linkedServices.map((service) => createServiceLinkChip(service)).join("")}
          </div>
          <button class="journey-cta" data-journey-id="${journey.id}">Show the best starting point</button>
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
      const journey = window.siteData.journeys.find((entry) => entry.id === button.dataset.journeyId);
      if (!journey || !journey.serviceIds.length) {
        return;
      }

      activateService(journey.serviceIds[0], {
        category: journey.category,
        clearSearch: true,
        scrollToServices: true,
        focusDetail: true
      });
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
    .map((service) => `
      <button class="service-item ${state.selectedServiceId === service.id ? "is-active" : ""}" data-service-id="${service.id}">
        <small>${getCategoryById(service.category).label}</small>
        <strong>${service.title}</strong>
        <span>${service.short}</span>
        <div class="service-meta">
          <span>${getPortalLabel(service)}</span>
          <span>${service.officeVisit}</span>
        </div>
      </button>
    `)
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
        <h3>Required documents</h3>
        <ul>
          ${service.requiredDocs.map((doc) => `<li>${doc}</li>`).join("")}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Conditional or supporting documents</h3>
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
renderJourneys();
renderPreflight();
renderToolGroups();
renderDownloadGroups();
renderOffices();
renderBundles();
renderSignals();
renderFaq();
renderSources();
renderAll();
