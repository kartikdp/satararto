(function () {
  const { renderFooterSources } = window.SiteApp;

  const footerSources = document.getElementById("footer-sources");
  if (footerSources) {
    renderFooterSources(footerSources);
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
