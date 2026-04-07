const fs = require("fs");
const path = require("path");
const { test, expect } = require("@playwright/test");

const screenshotDir = path.join(process.cwd(), "test-results", "screenshots");

const directServiceIds = [
  "learner-licence",
  "permanent-driving-licence",
  "dl-renewal",
  "duplicate-dl",
  "dl-address-change",
  "international-driving-permit",
  "new-vehicle-registration",
  "transfer-ownership",
  "noc",
  "rc-renewal",
  "duplicate-rc",
  "rc-address-change",
  "hypothecation-addition",
  "hypothecation-removal",
  "fitness-certificate",
  "permit-services",
  "tax-services",
  "puc-requirements"
];

const wizardResultCases = [
  {
    slug: "wizard-learner-licence",
    url: "/index.html?journey=new-driver&learnerStatus=no&service=learner-licence&profile=private&view=result"
  },
  {
    slug: "wizard-permanent-driving-licence",
    url: "/index.html?journey=new-driver&learnerStatus=yes&service=permanent-driving-licence&office=mh11&profile=private&view=result"
  },
  {
    slug: "wizard-dl-renewal",
    url: "/index.html?journey=renew-or-correct-licence&service=dl-renewal&office=mh11&profile=private&view=result"
  },
  {
    slug: "wizard-transfer-ownership",
    url: "/index.html?journey=bought-or-sold-vehicle&service=transfer-ownership&office=mh50&profile=private&financed=1&view=result"
  },
  {
    slug: "wizard-noc",
    url: "/index.html?journey=moved-or-shifting-state&service=noc&office=other-state&profile=private&crossJurisdiction=1&view=result"
  },
  {
    slug: "wizard-hypothecation-removal",
    url: "/index.html?journey=loan-or-finance&service=hypothecation-removal&office=mh11&profile=private&financed=1&view=result"
  },
  {
    slug: "wizard-idp",
    url: "/index.html?journey=travel-or-commercial&service=international-driving-permit&office=mh11&profile=private&view=result"
  },
  {
    slug: "wizard-permit-services",
    url: "/index.html?journey=travel-or-commercial&service=permit-services&office=mh50&profile=transport&view=result"
  },
  {
    slug: "wizard-tax-services",
    url: "/index.html?journey=travel-or-commercial&service=tax-services&profile=transport&vehicleType=commercial&view=result"
  },
  {
    slug: "wizard-puc-requirements",
    url: "/index.html?journey=travel-or-commercial&service=puc-requirements&profile=transport&vehicleType=commercial&fuelType=diesel&view=result"
  }
];

function ensureScreenshotDir() {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function captureGuideScreens(page, slug, rootSelector = "body") {
  ensureScreenshotDir();
  await page.screenshot({ path: path.join(screenshotDir, `${slug}-top.png`) });
  const stepsSection = page.locator(rootSelector).locator('[data-guide-section="steps"]').first();
  await stepsSection.scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(screenshotDir, `${slug}-steps.png`) });
  await page.screenshot({ path: path.join(screenshotDir, `${slug}-full.png`), fullPage: true });
}

async function expectFullGuide(page, rootSelector = "body") {
  const root = page.locator(rootSelector);
  const sectionIds = ["steps", "documents", "timeline", "fees", "forms", "office", "information", "sources"];

  for (const sectionId of sectionIds) {
    await expect(root.locator(`[data-guide-section="${sectionId}"]`).first()).toBeVisible();
  }

  await expect(root.locator('[data-guide-section="steps"] .step-list li').first()).toBeVisible();
  await expect(root.locator('[data-guide-section="documents"] h3', { hasText: "Required documents" })).toBeVisible();
  await expect(root.locator('[data-guide-section="timeline"] h3', { hasText: "Processing time" })).toBeVisible();
  await expect(root.locator('[data-guide-section="fees"] .content-list li').first()).toBeVisible();
  await expect(root.locator('[data-guide-section="forms"] article').first()).toBeVisible();
  await expect(root.locator('[data-guide-section="office"] article').first()).toBeVisible();
  await expect(root.locator('[data-guide-section="information"] article').first()).toBeVisible();

  const sourceLinks = root.locator('[data-guide-section="sources"] a[href]');
  await expect(sourceLinks.first()).toBeVisible();
  const hrefs = await sourceLinks.evaluateAll((nodes) => nodes.map((node) => node.href));
  for (const href of hrefs) {
    expect(href).toMatch(/(parivahan\.gov\.in|transport\.maharashtra\.gov\.in)/);
  }

  const stepsBox = await root.locator('[data-guide-section="steps"]').first().boundingBox();
  expect(stepsBox).not.toBeNull();
  expect(stepsBox.y).toBeLessThan(1450);
}

test.describe("direct service pages render the complete guide", () => {
  for (const serviceId of directServiceIds) {
    test(`service page shows full guide for ${serviceId}`, async ({ page }) => {
      await page.goto(`/service.html?service=${serviceId}`);
      await expect(page.locator("#service-page-guide")).toBeVisible();
      await expectFullGuide(page, "#service-page-guide");
      await captureGuideScreens(page, `service-${serviceId}`, "#service-page-guide");
    });
  }
});

test.describe("wizard result pages render the same detailed guide", () => {
  for (const entry of wizardResultCases) {
    test(`wizard result shows full guide for ${entry.slug}`, async ({ page }) => {
      await page.goto(entry.url);
      await expect(page.locator("#wizard-result")).toBeVisible();
      await expect(page.locator("#result-guide")).toBeVisible();
      await expectFullGuide(page, "#result-guide");
      await captureGuideScreens(page, entry.slug, "#result-guide");
    });
  }
});

test.describe("interactive wizard smoke flows", () => {
  test("new driver flow reaches learner licence full guide", async ({ page }) => {
    await page.goto("/index.html");
    await page.getByRole("button", { name: /I am a new driver/i }).click();
    await page.getByRole("button", { name: /No, I need my first learner's licence/i }).click();
    await page.getByRole("button", { name: /Private \/ personal/i }).click();
    await expect(page.locator("#wizard-result")).toBeVisible();
    await expect(page.locator("#result-summary .result-summary-main h2")).toContainText("Learner's Licence");
    await expectFullGuide(page, "#result-guide");
    await captureGuideScreens(page, "interactive-learner", "#result-guide");
  });

  test("new driver with learner licence reaches permanent licence full guide", async ({ page }) => {
    await page.goto("/index.html");
    await page.getByRole("button", { name: /I am a new driver/i }).click();
    await page.getByRole("button", { name: /Yes, I already have a learner's licence/i }).click();
    await page.getByRole("button", { name: /MH-11 Satara/i }).click();
    await page.getByRole("button", { name: /Private \/ personal/i }).click();
    await expect(page.locator("#wizard-result")).toBeVisible();
    await expect(page.locator("#result-summary .result-summary-main h2")).toContainText("Permanent Driving Licence");
    await expectFullGuide(page, "#result-guide");
    await captureGuideScreens(page, "interactive-permanent", "#result-guide");
  });

  test("travel and compliance flow reaches PUC full guide with vehicle and fuel questions", async ({ page }) => {
    await page.goto("/index.html");
    await page.getByRole("button", { name: /I need travel, permit, tax, or compliance help/i }).click();
    await page.getByRole("button", { name: /PUC Requirements/i }).click();
    await page.getByRole("button", { name: /Transport \/ commercial/i }).click();
    await page.getByRole("button", { name: /Commercial \/ transport vehicle/i }).click();
    await page.getByRole("button", { name: /Diesel/i }).click();
    await expect(page.locator("#wizard-result")).toBeVisible();
    await expect(page.locator("#result-summary .result-summary-main h2")).toContainText("PUC Requirements");
    await expectFullGuide(page, "#result-guide");
    await captureGuideScreens(page, "interactive-puc", "#result-guide");
  });
});

test.describe("language switch", () => {
  test("site header can switch to Marathi", async ({ page }) => {
    await page.goto("/index.html");
    await page.getByRole("button", { name: "मराठी" }).click();
    await expect(page).toHaveURL(/lang=mr/);
    await expect(page.locator(".brand-copy strong")).toContainText("श्री स्वामी स्मरथ एंटरप्रायझेस");
    await expect(page.getByRole("link", { name: "मदत मिळवा" })).toBeVisible();
  });

  test("service page respects Marathi route state", async ({ page }) => {
    await page.goto("/service.html?service=learner-licence&lang=mr");
    await expect(page.locator("#service-page-intro h1")).toContainText("शिकाऊ परवाना");
    await expect(page.locator('[data-guide-section="documents"] h2')).toContainText("कागदपत्रे");
    await expect(page.locator('[data-guide-section="steps"]')).toContainText("शिकाऊ परवान्यासाठी अर्ज सुरू करा.");
    await expect(page.locator('[data-guide-section="information"]')).toContainText(
      "शिकाऊ परवाना हा कायम वाहनचालक परवान्यापूर्वीचा पहिला अधिकृत टप्पा आहे."
    );
    await expect(page.locator('[data-guide-section="documents"]')).toContainText("वयाचा पुरावा");
    await expect(page.locator('[data-guide-section="forms"]')).toContainText("येथे प्रामुख्याने वापरले जाणारे अधिकृत फॉर्म");
    await expect(page.locator('[data-guide-section="sources"]')).toContainText("या प्रक्रियेसाठी वापरलेला सरकारी स्रोत");
  });
});

test.describe("agent-first business positioning", () => {
  test("homepage shows business identity and contact actions", async ({ page }) => {
    await page.goto("/index.html");
    await expect(page.locator(".brand-copy strong")).toContainText("Shree Swami Smarath Enterprises");
    await expect(page.locator(".brand-copy small")).toContainText("Suraj Pardeshi");
    await expect(page.getByRole("link", { name: "Call now" }).first()).toHaveAttribute("href", "tel:+918999433180");
    await expect(page.getByRole("link", { name: "Chat on WhatsApp" }).first()).toHaveAttribute("href", /wa\.me\/918999433180/);
    await expect(page.locator("body")).toContainText("Service charges depend on the document or work involved");
    await expect(page.locator("body")).toContainText("Private assistance service");
  });

  test("service page shows help section and contact links", async ({ page }) => {
    await page.goto("/service.html?service=transfer-ownership");
    await expect(page.locator(".business-help-box")).toBeVisible();
    await expect(page.locator(".business-help-box")).toContainText("Need help with this service?");
    await expect(page.locator(".business-help-box")).toContainText("Service charges depend on the document or work involved");
    await expect(page.locator('.business-help-box a[href="tel:+918999433180"]')).toBeVisible();
    await expect(page.locator('.business-help-box a[href*="wa.me/918999433180"]')).toBeVisible();
  });
});
