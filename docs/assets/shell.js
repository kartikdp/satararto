(function () {
  const { renderFooterSources, siteData } = window.SiteApp;

  const footerSources = document.getElementById("footer-sources");
  if (footerSources) {
    renderFooterSources(footerSources);
  }

  const footerCopy = document.querySelector(".footer-copy");
  if (footerCopy && siteData.reviewMeta) {
    const meta = document.createElement("p");
    meta.className = "footer-meta";
    meta.innerHTML = `Last reviewed from official sources: ${siteData.reviewMeta.lastReviewed}. <a href="${siteData.reviewMeta.reportUrl}" target="_blank" rel="noreferrer">Report outdated information</a>.`;
    footerCopy.appendChild(meta);
  }

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href");
    const current = window.location.pathname.split("/").pop() || "index.html";
    const target = href.replace("./", "");

    if (
      (current === "" && target === "index.html") ||
      current === target ||
      (current === "service.html" && target === "services.html")
    ) {
      link.classList.add("is-active");
    }
  });
})();
