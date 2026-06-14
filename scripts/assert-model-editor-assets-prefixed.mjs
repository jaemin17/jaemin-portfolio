import fs from "node:fs";
import path from "node:path";

const htmlPath = path.join(process.cwd(), "out", "zh", "projects", "model-editor", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const unprefixedAssets = [
  ...html.matchAll(/\b(?:src|poster)="\/(?:images|videos)\/model-editor\/[^"]+"/g),
].map((match) => match[0]);

if (unprefixedAssets.length > 0) {
  console.error("Model Editor static export contains unprefixed GitHub Pages asset URLs:");
  for (const asset of unprefixedAssets.slice(0, 30)) {
    console.error(`- ${asset}`);
  }
  if (unprefixedAssets.length > 30) {
    console.error(`...and ${unprefixedAssets.length - 30} more`);
  }
  process.exit(1);
}

console.log("Model Editor static asset URLs are GitHub Pages compatible.");
