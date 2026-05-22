import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(rootDir, "out");

function basePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  const repository =
    process.env.GITHUB_REPOSITORY ?? process.env.NEXT_PUBLIC_GITHUB_REPOSITORY ?? "";
  const repositoryName = repository.split("/")[1] ?? "";
  const isGitHubPages =
    process.env.GITHUB_PAGES === "true" || process.env.NEXT_PUBLIC_GITHUB_PAGES_BUILD === "true";
  const isUserOrOrgPagesSite = repositoryName.endsWith(".github.io");

  if (isGitHubPages && repositoryName && !isUserOrOrgPagesSite) {
    return `/${repositoryName}`;
  }

  return "";
}

function redirectHtml(target) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=${target}">
  <link rel="canonical" href="${target}">
  <title>Redirecting…</title>
  <script>location.replace(${JSON.stringify(target)});</script>
</head>
<body>
  <p><a href="${target}">进入作品集</a></p>
</body>
</html>
`;
}

function writeRedirect(relativePath, target) {
  const filePath = path.join(outDir, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, redirectHtml(target));
}

if (!fs.existsSync(outDir)) {
  console.warn("fix-static-redirects: out/ not found, skipping");
  process.exit(0);
}

const base = basePath();
const zhHome = `${base}/zh/`;

writeRedirect("index.html", zhHome);

const legacyPaths = [
  "about",
  "about2",
  "life",
  "test",
  "test/tools",
  "test/visual",
  "test/visual/smart-manufacturing",
];

for (const segment of legacyPaths) {
  writeRedirect(path.join(segment, "index.html"), `${base}/zh/${segment}/`);
}

const projectSlugs = ["selfly-ios-app", "project-b", "project-c"];
for (const slug of projectSlugs) {
  writeRedirect(path.join("projects", slug, "index.html"), `${base}/zh/projects/${slug}/`);
}

console.log(`Static redirects written (home → ${zhHome})`);
