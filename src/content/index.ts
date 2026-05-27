import type { Locale } from "@/i18n/config";
import type { Project } from "./types";
import * as zh from "./zh/projects";
import * as en from "./en/projects";

const catalogs = { zh, en } as const;

export type { Project } from "./types";

export function getProjects(locale: Locale): Project[] {
  return catalogs[locale].projects;
}

export function getTestProjects(locale: Locale): Project[] {
  return catalogs[locale].testProjects;
}

export function getProjectArchive(locale: Locale): Project[] {
  return catalogs[locale].projectArchive;
}

export function getMergedSelflyProjects(locale: Locale): Project[] {
  return catalogs[locale].mergedSelflyProjects;
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return catalogs[locale].getProjectBySlug(slug);
}
