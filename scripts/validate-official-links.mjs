import fs from "node:fs";
import vm from "node:vm";
import { spawnSync } from "node:child_process";

const code = fs.readFileSync(new URL("../docs/assets/data.js", import.meta.url), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const siteData = sandbox.window.SiteData || sandbox.window.siteData || sandbox.siteData;

const officialEntries = [];

function addEntry(kind, label, url) {
  if (!url) {
    return;
  }

  if (!/^https:\/\/(parivahan\.gov\.in|transport\.maharashtra\.gov\.in|sarathi\.parivahan\.gov\.in|vahan\.parivahan\.gov\.in)/.test(url)) {
    return;
  }

  officialEntries.push({ kind, label, url });
}

for (const tool of siteData.tools || []) {
  addEntry("tool", tool.label, tool.url);
}

for (const form of siteData.formLibrary || []) {
  addEntry("form-page", form.formNo || form.label, form.url);
  addEntry("form-download", `${form.formNo || form.label} PDF`, form.downloadUrl);
}

for (const service of siteData.services || []) {
  for (const link of service.officialLinks || []) {
    addEntry(`service:${service.id}`, link.label, link.url);
  }
}

const uniqueEntries = Array.from(new Map(officialEntries.map((entry) => [entry.url, entry])).values());
const failures = [];
const warnings = [];

function validateUrl(entry) {
  const result = spawnSync(
    "curl",
    [
      "-L",
      "--max-time",
      "15",
      "-A",
      "Mozilla/5.0 (compatible; SataraRTOGuideValidator/1.0)",
      "-o",
      "/dev/null",
      "-s",
      "-w",
      "%{http_code}\t%{url_effective}",
      entry.url
    ],
    { encoding: "utf8" }
  );

  if (result.status !== 0 && !result.stdout.trim()) {
    failures.push({ ...entry, status: "ERR", finalUrl: result.stderr.trim() || "curl failed" });
    return;
  }

  const [status, finalUrl] = result.stdout.trim().split("\t");

  if (
    status === "000" &&
    (/^https:\/\/vahan\.parivahan\.gov\.in/.test(entry.url) ||
      /^https:\/\/transport\.maharashtra\.gov\.in\/1117\/Rate-of-Vehicle-Tax/.test(entry.url) ||
      /^https:\/\/parivahan\.gov\.in\/en\/content\/hp-endorsement/.test(entry.url))
  ) {
    warnings.push({ ...entry, status, finalUrl });
    return;
  }

  if (status !== "200") {
    failures.push({ ...entry, status, finalUrl });
    return;
  }

  console.log(`OK\t${status}\t${entry.kind}\t${entry.label}\t${finalUrl}`);
}

for (const entry of uniqueEntries) {
  validateUrl(entry);
}

if (failures.length) {
  console.error("\nBroken or weak official links found:");
  for (const failure of failures) {
    console.error(`${failure.status}\t${failure.kind}\t${failure.label}\t${failure.url}\t${failure.finalUrl}`);
  }
  process.exitCode = 1;
} else {
  console.log(`\nValidated ${uniqueEntries.length} official links successfully.`);
}

if (warnings.length) {
  console.warn("\nWarning-only links:");
  for (const warning of warnings) {
    console.warn(`${warning.status}\t${warning.kind}\t${warning.label}\t${warning.url}\t${warning.finalUrl}`);
  }
}
