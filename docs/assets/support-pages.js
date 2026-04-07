(function () {
  const page = document.body.dataset.page;
  const {
    createPhoneHref,
    getLanguage,
    getOfficeByCode,
    getOfficeNote,
    groupFaqByCategory,
    siteData,
    t
  } = window.SiteApp;

  function createMapHref(address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }

  function getFaqCategoryLabel(category) {
    if (getLanguage() !== "mr") {
      return category;
    }

    const labels = {
      Licence: "लायसन्स",
      "RC & Vehicle": "RC आणि वाहन",
      "Transfer & NOC": "ट्रान्सफर आणि NOC",
      General: "सामान्य"
    };

    return labels[category] || category;
  }

  function renderOfficesPage() {
    const officeGrid = document.getElementById("office-page-grid");
    const guidance = document.getElementById("office-page-guidance");
    const intro = document.getElementById("offices-page-intro");

    if (!officeGrid || !guidance) {
      return;
    }

    if (intro) {
      intro.innerHTML = `
        <p class="eyebrow">${t("pages.offices.eyebrow", "Offices")}</p>
        <h1>${t("pages.offices.title", "Satara district RTO offices")}</h1>
        <p>${t("pages.offices.body", "Check whether your case should start with MH-11 Satara or MH-50 Karad.")}</p>
      `;
    }

    officeGrid.innerHTML = siteData.offices
      .map(
        (office) => `
          <article class="office-page-card">
            <p class="eyebrow">${office.code}</p>
            <h2>${office.name}</h2>
            <p>${office.address}</p>
            <ul class="content-list">
              <li><strong>${getLanguage() === "mr" ? "फोन" : "Phone"}:</strong> <a href="${createPhoneHref(office.phone)}">${office.phone}</a></li>
              <li><strong>${getLanguage() === "mr" ? "ईमेल" : "Email"}:</strong> <a href="mailto:${office.email}">${office.email}</a></li>
              <li>${getOfficeNote(office) || office.note}</li>
            </ul>
            <p><a class="inline-link" href="${createMapHref(office.address)}" target="_blank" rel="noreferrer">${t("guide.labels.mapLink", "Open in Maps")}</a></p>
          </article>
        `
      )
      .join("");

    const satara = getOfficeByCode("MH-11");
    const karad = getOfficeByCode("MH-50");

    guidance.innerHTML = `
      <article class="content-card">
        <h2>${t("guide.labels.chooseRightOffice", "Choosing the right office")}</h2>
        <ul class="content-list">
          <li>${getLanguage() === "mr" ? "तुमच्या विद्यमान DL किंवा RC वरील कार्यालय कोड आधी वापरा." : "Use the office code on your existing DL or RC first."}</li>
          <li>${getLanguage() === "mr" ? `रेकॉर्डवर ${satara.code} असेल तर ${satara.name} येथे सुरू करा.` : `If your record points to ${satara.code}, start with ${satara.name}.`}</li>
          <li>${getLanguage() === "mr" ? `रेकॉर्डवर ${karad.code} असेल तर ${karad.name} येथे सुरू करा.` : `If your record points to ${karad.code}, start with ${karad.name}.`}</li>
          <li>${getLanguage() === "mr" ? "अजूनही खात्री नसेल तर पेमेंटपूर्वी अधिकृत पोर्टलवर कार्यालय तपासा." : "If you are still unsure, confirm the office on the official portal before payment."}</li>
        </ul>
      </article>
      <article class="content-card">
        <h2>${t("guide.labels.officeCodeHint", "Where to find the office code")}</h2>
        <p>${t("guide.labels.officeCodeHintBody", "Check the office code printed on your current DL or RC. Use that code first before starting a new application.")}</p>
      </article>
    `;
  }

  function renderFaqPage() {
    const faqGroups = document.getElementById("faq-page-groups");
    const intro = document.getElementById("faq-page-intro");

    if (!faqGroups) {
      return;
    }

    if (intro) {
      intro.innerHTML = `
        <p class="eyebrow">${t("pages.faq.eyebrow", "FAQ")}</p>
        <h1>${t("pages.faq.title", "Common questions people ask before starting")}</h1>
        <p>${t("pages.faq.body", "Find quick answers to common licence, RC, transfer, and office questions.")}</p>
      `;
    }

    faqGroups.innerHTML = `
      <div class="browse-toolbar faq-toolbar">
        <label class="search-field" for="faq-search">
          <span>${getLanguage() === "mr" ? "प्रश्न शोधा" : "Search questions"}</span>
          <input id="faq-search" type="search" placeholder="${t("guide.labels.faqSearchPlaceholder", "Search common questions...")}" />
        </label>
      </div>
      <div id="faq-groups-list"></div>
    `;

    const list = faqGroups.querySelector("#faq-groups-list");
    const search = faqGroups.querySelector("#faq-search");

    function renderGroups(query = "") {
      const normalizedQuery = query.trim().toLowerCase();
      const groups = groupFaqByCategory()
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => {
            if (!normalizedQuery) {
              return true;
            }

            return `${item.question} ${item.answer}`.toLowerCase().includes(normalizedQuery);
          })
        }))
        .filter((group) => group.items.length);

      if (!groups.length) {
        list.innerHTML = `
          <article class="empty-card">
            <h2>${t("guide.labels.noFaqMatch", "No matching question found")}</h2>
            <p>${t("guide.labels.noFaqHint", "Try words like licence, RC, transfer, address, or office.")}</p>
          </article>
        `;
        return;
      }

      list.innerHTML = groups
        .map(
          (group) => `
            <section class="faq-group">
              <div class="section-head compact">
                <p class="eyebrow">${getFaqCategoryLabel(group.category)}</p>
                <h2>${getLanguage() === "mr" ? `${getFaqCategoryLabel(group.category)} प्रश्न` : `${group.category} questions`}</h2>
              </div>
              <div class="faq-stack">
                ${group.items
                  .map(
                    (item) => `
                      <details class="faq-item">
                        <summary>${item.question}</summary>
                        <div class="faq-answer">${item.answer}</div>
                      </details>
                    `
                  )
                  .join("")}
              </div>
            </section>
          `
        )
        .join("");
    }

    search.addEventListener("input", (event) => {
      renderGroups(event.target.value);
    });

    renderGroups();
  }

  if (page === "offices") {
    renderOfficesPage();
  }

  if (page === "faq") {
    renderFaqPage();
  }
})();
