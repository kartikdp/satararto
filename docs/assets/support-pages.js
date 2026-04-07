(function () {
  const page = document.body.dataset.page;
  const { getOfficeByCode, groupFaqByCategory, siteData } = window.SiteApp;

  if (page === "offices") {
    const officeGrid = document.getElementById("office-page-grid");
    const guidance = document.getElementById("office-page-guidance");

    officeGrid.innerHTML = siteData.offices
      .map(
        (office) => `
          <article class="office-page-card">
            <p class="eyebrow">${office.code}</p>
            <h2>${office.name}</h2>
            <p>${office.address}</p>
            <ul class="content-list">
              <li><strong>Phone:</strong> <a href="tel:${office.phone.replace(/[^0-9+]/g, "")}">${office.phone}</a></li>
              <li><strong>Email:</strong> <a href="mailto:${office.email}">${office.email}</a></li>
              <li>${office.note}</li>
            </ul>
          </article>
        `
      )
      .join("");

    const satara = getOfficeByCode("MH-11");
    const karad = getOfficeByCode("MH-50");

    guidance.innerHTML = `
      <article class="content-card">
        <h2>Choosing the right office</h2>
        <ul class="content-list">
          <li>Use the office code on your existing DL or RC first.</li>
          <li>If your record points to ${satara.code}, start with ${satara.name}.</li>
          <li>If your record points to ${karad.code}, start with ${karad.name}.</li>
          <li>If you are still unsure, confirm the office on the official portal before payment.</li>
        </ul>
      </article>
    `;
  }

  if (page === "faq") {
    const faqGroups = document.getElementById("faq-page-groups");

    faqGroups.innerHTML = groupFaqByCategory()
      .map(
        (group) => `
          <section class="faq-group">
            <div class="section-head compact">
              <p class="eyebrow">${group.category}</p>
              <h2>${group.category} questions</h2>
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
})();
