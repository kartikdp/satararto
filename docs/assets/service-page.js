(function () {
  if (document.body.dataset.page !== "service") {
    return;
  }

  const {
    buildServiceSections,
    copyText,
    createServiceHref,
    getRelatedServices,
    getServiceById,
    renderHelpfulFeedback,
    renderServiceSummary,
    renderTabs,
    siteData
  } = window.SiteApp;

  const params = new URLSearchParams(window.location.search);
  const service = getServiceById(params.get("service"));

  const elements = {
    body: document.getElementById("service-page-body"),
    floatingStart: document.getElementById("service-page-start")
  };

  function renderNotFound() {
    elements.body.innerHTML = `
      <article class="empty-card">
        <h1>Service guide not found</h1>
        <p>The link may be incomplete or the service ID is invalid.</p>
        <div class="service-card-actions">
          <a class="button button-primary" href="./index.html">Go to Start Here</a>
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

    elements.body.innerHTML = `
      <div class="detail-shell">
        ${renderServiceSummary(service, null)}
        <div class="cta-box">
          <p class="cta-note">${siteData.wizardMeta.resultDisclaimer}</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${service.officialLinks[0].url}" target="_blank" rel="noreferrer">Open ${service.officialLinks[0].label}</a>
            <a class="button button-secondary" href="./index.html?journey=${encodeURIComponent(journeyId)}&service=${encodeURIComponent(
              service.id
            )}">Use Start Here</a>
            <button class="button button-secondary" type="button" id="service-share-link">Copy guide link</button>
            <button class="button button-secondary" type="button" id="service-print">Print guide</button>
          </div>
        </div>
        <div id="service-page-tabs"></div>
        <div id="service-page-feedback"></div>
        ${
          related.length
            ? `
              <section class="related-block">
                <h2>Related services</h2>
                <div class="related-links">
                  ${related
                    .map((entry) => `<a class="tag tag-link" href="${createServiceHref(entry.id)}">${entry.title}</a>`)
                    .join("")}
                </div>
              </section>
            `
            : ""
        }
      </div>
    `;

    renderTabs(document.getElementById("service-page-tabs"), sections, `service-${service.id}`, "steps");
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
