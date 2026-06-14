function staticExportAssetBase(): string {
  if (process.env.NEXT_PUBLIC_GITHUB_PAGES_BUILD === "true") {
    const repo = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY?.split("/")[1] ?? "";
    if (repo && !repo.endsWith(".github.io")) return `/${repo}`;
  }
  if (process.env.GITHUB_PAGES === "true") {
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
    if (repo && !repo.endsWith(".github.io")) return `/${repo}`;
  }
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = staticExportAssetBase();
  if (base && path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
