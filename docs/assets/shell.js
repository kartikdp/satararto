(function () {
  const { getLanguage, setLanguage, siteData, t } = window.SiteApp;
  const page = document.body.dataset.page;

  function renderLanguageSwitch() {
    const header = document.querySelector(".site-header");
    if (!header || header.querySelector(".language-switch")) {
      return;
    }

    const currentLang = getLanguage();
    const switcher = document.createElement("div");
    switcher.className = "language-switch";
    switcher.setAttribute("aria-label", t("language.label", "Language"));
    switcher.innerHTML = `
      <button class="language-pill ${currentLang === "en" ? "is-active" : ""}" type="button" data-lang="en">${t("language.english", "English")}</button>
      <button class="language-pill ${currentLang === "mr" ? "is-active" : ""}" type="button" data-lang="mr">${t("language.marathi", "मराठी")}</button>
    `;

    header.appendChild(switcher);
    switcher.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.lang === getLanguage()) {
          return;
        }

        setLanguage(button.dataset.lang);
        window.location.reload();
      });
    });
  }

  function localizeHeader() {
    document.documentElement.lang = getLanguage() === "mr" ? "mr" : "en";
    const langSuffix = getLanguage() === "mr" ? "?lang=mr" : "";

    const brand = document.querySelector(".brand");
    const brandStrong = document.querySelector(".brand-copy strong");
    const brandSmall = document.querySelector(".brand-copy small");
    if (brand) {
      brand.setAttribute("href", `./index.html${langSuffix}`);
    }
    if (brandStrong) {
      brandStrong.textContent = getLanguage() === "mr" ? "सातारा आरटीओ मार्गदर्शिका" : "Satara RTO Guide";
    }
    if (brandSmall) {
      brandSmall.textContent = getLanguage() === "mr" ? "सातारा जिल्हा, महाराष्ट्र" : "Satara district, Maharashtra";
    }

    const navLabels = {
      "index.html": t("nav.index", "Find My Service"),
      "services.html": t("nav.services", "Services"),
      "offices.html": t("nav.offices", "Offices"),
      "faq.html": t("nav.faq", "FAQ")
    };

    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("href").replace("./", "").split("?")[0];
      if (navLabels[href]) {
        link.textContent = navLabels[href];
        link.setAttribute("href", `./${href}${langSuffix}`);
      }
    });
  }

  function localizeFooter() {
    const footerCopy = document.querySelector(".footer-copy");
    if (!footerCopy) {
      return;
    }

    const footerKey = siteData.i18n[getLanguage()].footer[page] ? page : "default";
    footerCopy.innerHTML = `<p>${siteData.i18n[getLanguage()].footer[footerKey]}</p>`;

    if (siteData.reviewMeta) {
      const meta = document.createElement("p");
      meta.className = "footer-meta";
      meta.innerHTML =
        getLanguage() === "mr"
          ? `अधिकृत स्रोतांवरून शेवटचा आढावा: ${siteData.reviewMeta.lastReviewed}. <a href="${siteData.reviewMeta.reportUrl}" target="_blank" rel="noreferrer">${t("guide.labels.reportOutdated", "Report outdated information")}</a>.`
          : `Last reviewed from official sources: ${siteData.reviewMeta.lastReviewed}. <a href="${siteData.reviewMeta.reportUrl}" target="_blank" rel="noreferrer">${t("guide.labels.reportOutdated", "Report outdated information")}</a>.`;
      footerCopy.appendChild(meta);
    }
  }

  function markActiveNav() {
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("href");
      const current = window.location.pathname.split("/").pop() || "index.html";
      const target = href.replace("./", "").split("?")[0];

      if (
        (current === "" && target === "index.html") ||
        current === target ||
        (current === "service.html" && target === "services.html")
      ) {
        link.classList.add("is-active");
      }
    });
  }

  localizeHeader();
  renderLanguageSwitch();
  localizeFooter();
  markActiveNav();
})();
