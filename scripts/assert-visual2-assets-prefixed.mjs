import fs from "node:fs";
import path from "node:path";

const pages = [
  path.join("out", "zh", "test", "visual2", "index.html"),
  path.join("out", "zh", "test", "visual2", "animal-vr", "index.html"),
  path.join("out", "zh", "test", "visual2", "smart-manufacturing", "index.html"),
  path.join("out", "zh", "test", "visual2", "cosmic-blaze", "index.html"),
  path.join("out", "zh", "test", "visual2", "automotive-vr", "index.html"),
  path.join("out", "zh", "test", "visual2", "medical-vr", "index.html"),
  path.join("out", "zh", "test", "visual2", "vr-education", "index.html"),
];

const failures = [];

for (const page of pages) {
  const htmlPath = path.join(process.cwd(), page);
  const html = fs.readFileSync(htmlPath, "utf8");
  const unprefixedAssets = [
    ...html.matchAll(/\b(?:src|poster)="\/(?:images|videos)\/visual\/[^"]+"/g),
  ].map((match) => match[0]);

  if (unprefixedAssets.length > 0) {
    failures.push({ page, assets: unprefixedAssets });
  }
}

if (failures.length > 0) {
  console.error("Visual2 static export contains unprefixed GitHub Pages asset URLs:");
  for (const failure of failures) {
    console.error(`\n${failure.page}`);
    for (const asset of failure.assets.slice(0, 20)) {
      console.error(`- ${asset}`);
    }
    if (failure.assets.length > 20) {
      console.error(`...and ${failure.assets.length - 20} more`);
    }
  }
  process.exit(1);
}

console.log("Visual2 static asset URLs are GitHub Pages compatible.");
