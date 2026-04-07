(function () {
  if (document.body.dataset.page !== "service") {
    return;
  }

  const {
    buildServiceSections,
    copyText,
    createServiceHref,
    getRelatedServices,
    renderGuideSections,
    getServiceById,
    renderHelpfulFeedback,
    renderServiceSummary,
    siteData
  } = window.SiteApp;

  const params = new URLSearchParams(window.location.search);
  const service = getServiceById(params.get("service"));

  const elements = {
    body: document.getElementById("service-page-body"),
    intro: document.getElementById("service-page-intro"),
    floatingStart: document.getElementById("service-page-start")
  };

  function renderNotFound() {
    elements.body.innerHTML = `
      <article class="empty-card">
        <h1>Service guide not found</h1>
        <p>The link may be incomplete or the service ID is invalid.</p>
        <div class="service-card-actions">
          <a class="button button-primary" href="./index.html">Find My Service</a>
          <a class="button button-secondary" href="./services.html">Browse services</a>
        </div>
      </article>
    `;
  }

  function render() {
    if (!service) {
      renderNotFound();
      return;
    }

    const sections = buildServiceSections(service, null);
    const related = getRelatedServices(service);
    const matchingJourney = siteData.journeys.find((journey) => journey.serviceIds.includes(service.id));
    const journeyId = matchingJourney ? matchingJourney.id : siteData.journeys[0].id;
    const category = siteData.categories.find((entry) => entry.id === service.category);

    elements.intro.innerHTML = `
      <p class="eyebrow">${category ? category.label : "Service"} guide</p>
      <h1>${service.title}</h1>
      <p>${service.short || service.summary}</p>
    `;

    elements.floatingStart.innerHTML = `
      <a class="button button-secondary" href="./index.html">Find My Service</a>
      <a class="button button-secondary" href="./services.html">Services</a>
      <a class="button button-secondary" href="#service-summary-anchor">Summary</a>
      <a class="button button-secondary" href="#service-guide-anchor">Guide</a>
      ${related.length ? `<a class="button button-secondary" href="#service-related-anchor">Related</a>` : ""}
    `;

    elements.body.innerHTML = `
      <div class="detail-shell">
        <section id="service-summary-anchor">
          ${renderServiceSummary(service, null, { mode: "service" })}
        </section>
        <div id="service-guide-anchor">
          <div id="service-page-guide"></div>
        </div>
        <div id="service-page-feedback"></div>
        ${
          related.length
            ? `
              <section class="related-block" id="service-related-anchor">
                <h2>Related services</h2>
                <div class="related-links">
                  ${related
                    .map(
                      (entry) => `
                        <a class="related-link-card" href="${createServiceHref(entry.id)}">
                          <strong>${entry.title}</strong>
                          <span>${entry.reason}</span>
                        </a>
                      `
                    )
                    .join("")}
                </div>
              </section>
            `
            : ""
        }
        <div class="guide-utility-row guide-utility-row-end">
          <button class="button button-link" type="button" id="service-share-link">Copy link</button>
          <button class="button button-link" type="button" id="service-print">Print guide</button>
          <a class="button button-link" href="./index.html?journey=${encodeURIComponent(journeyId)}&service=${encodeURIComponent(
            service.id
          )}">Let the wizard choose</a>
        </div>
      </div>
    `;

    renderGuideSections(document.getElementById("service-page-guide"), sections, `service-${service.id}`);
    renderHelpfulFeedback(document.getElementById("service-page-feedback"), `service-${service.id}`);
    elements.floatingStart.hidden = false;

    document.getElementById("service-share-link").addEventListener("click", () => {
      copyText(window.location.href, () => {
        document.getElementById("service-share-link").textContent = "Link copied";
      });
    });

    document.getElementById("service-print").addEventListener("click", () => {
      window.print();
    });
  }

  render();
})();
