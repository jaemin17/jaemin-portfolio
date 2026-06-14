import fs from "node:fs";
import path from "node:path";

const htmlPath = path.join(process.cwd(), "out", "zh", "test", "tools4", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const unprefixedAssets = [
  ...html.matchAll(/\b(?:src|poster)="\/videos\/tools\/[^"]+"/g),
].map((match) => match[0]);

if (unprefixedAssets.length > 0) {
  console.error("Tools4 static export contains unprefixed GitHub Pages asset URLs:");
  for (const asset of unprefixedAssets) {
    console.error(`- ${asset}`);
  }
  process.exit(1);
}

console.log("Tools4 static asset URLs are GitHub Pages compatible.");
