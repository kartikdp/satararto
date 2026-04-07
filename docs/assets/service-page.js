(function () {
  if (document.body.dataset.page !== "service") {
    return;
  }

  const {
    buildServiceSections,
    copyText,
    createServiceHref,
    getCategoryLabel,
    getLanguage,
    getRelatedServices,
    getServiceById,
    getServiceShort,
    getServiceTitle,
    renderBusinessSupportBlock,
    renderHelpfulFeedback,
    renderGuideSections,
    renderServiceSummary,
    siteData,
    t
  } = window.SiteApp;

  const params = new URLSearchParams(window.location.search);
  const service = getServiceById(params.get("service"));

  function renderNotFound() {
    const body = document.getElementById("service-page-body");

    if (!body) {
      return;
    }

    body.innerHTML = `
      <article class="empty-card">
        <h1>${getLanguage() === "mr" ? "सेवा मार्गदर्शिका सापडली नाही" : "Service guide not found"}</h1>
        <p>${getLanguage() === "mr" ? "लिंक अपूर्ण असू शकते किंवा सेवा आयडी चुकीचा असू शकतो." : "The link may be incomplete or the service ID is invalid."}</p>
        <div class="service-card-actions">
          <a class="button button-primary" href="./index.html${getLanguage() === "mr" ? "?lang=mr" : ""}">${t("nav.index", "Get Help")}</a>
          <a class="button button-secondary" href="./services.html${getLanguage() === "mr" ? "?lang=mr" : ""}">${t("nav.services", "Services")}</a>
        </div>
      </article>
    `;
  }

  function render() {
    const elements = {
      body: document.getElementById("service-page-body"),
      intro: document.getElementById("service-page-intro")
    };

    if (!elements.body || !elements.intro) {
      return;
    }

    if (!service) {
      renderNotFound();
      return;
    }

    const sections = buildServiceSections(service, null);
    const related = getRelatedServices(service);
    const category = siteData.categories.find((entry) => entry.id === service.category);

    elements.intro.innerHTML = `
      <p class="eyebrow">${category ? getCategoryLabel(category) : getLanguage() === "mr" ? "सेवा" : "Service"} ${getLanguage() === "mr" ? "मदत" : "Help"}</p>
      <h1>${getServiceTitle(service)}</h1>
      <p>${getServiceShort(service) || service.summary}</p>
    `;

    document.title = getLanguage() === "mr" ? `${getServiceTitle(service)} | ${siteData.business.businessName}` : `${getServiceTitle(service)} | ${siteData.business.businessName}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        getLanguage() === "mr"
          ? `${getServiceTitle(service)} या कामासाठी कागदपत्रे, प्रक्रिया आणि मदत मिळवण्यासाठी ${siteData.business.businessName} चे पान.`
          : `${siteData.business.businessName} helps with ${getServiceTitle(service)}, including process guidance, document readiness, and Satara RTO support.`
      );
    }

    elements.body.innerHTML = `
      <div class="detail-shell">
        <section id="service-summary-anchor">
          ${renderServiceSummary(service, null, { mode: "service" })}
        </section>
        ${renderBusinessSupportBlock(service)}
        <div id="service-guide-anchor">
          <div id="service-page-guide"></div>
        </div>
        <div id="service-page-feedback"></div>
        ${
          related.length
            ? `
              <section class="related-block" id="service-related-anchor">
                <h2>${getLanguage() === "mr" ? "संबंधित सेवा" : "Related services"}</h2>
                <div class="related-links">
                  ${related
                    .map(
                      (entry) => `
                        <a class="related-link-card" href="${createServiceHref(entry.id)}">
                          <strong>${getServiceTitle(entry)}</strong>
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
          <button class="button button-link" type="button" id="service-share-link">${t("guide.labels.copyLink", "Copy link")}</button>
          <button class="button button-link" type="button" id="service-print">${t("guide.labels.printGuide", "Print guide")}</button>
        </div>
      </div>
    `;

    const guide = document.getElementById("service-page-guide");
    const feedback = document.getElementById("service-page-feedback");
    const shareLink = document.getElementById("service-share-link");
    const printButton = document.getElementById("service-print");

    if (guide) {
      renderGuideSections(guide, sections, `service-${service.id}`);
    }

    if (feedback) {
      renderHelpfulFeedback(feedback, `service-${service.id}`);
    }

    if (shareLink) {
      shareLink.addEventListener("click", () => {
        copyText(window.location.href, () => {
          shareLink.textContent = t("guide.labels.linkCopied", "Link copied");
        });
      });
    }

    if (printButton) {
      printButton.addEventListener("click", () => {
        window.print();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }
})();
