import fs from "node:fs";
import path from "node:path";

const htmlPath = path.join(process.cwd(), "out", "zh", "projects", "selfly0", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const unprefixedAssets = [
  ...html.matchAll(/\b(?:src|poster)="\/(?:images|videos)\/selfly0\/[^"]+"/g),
].map((match) => match[0]);

if (unprefixedAssets.length > 0) {
  console.error("Selfly0 static export contains unprefixed GitHub Pages asset URLs:");
  for (const asset of unprefixedAssets.slice(0, 20)) {
    console.error(`- ${asset}`);
  }
  if (unprefixedAssets.length > 20) {
    console.error(`...and ${unprefixedAssets.length - 20} more`);
  }
  process.exit(1);
}

console.log("Selfly0 static asset URLs are GitHub Pages compatible.");
