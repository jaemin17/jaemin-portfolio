import type { Locale } from "@/i18n/config";

/**
 * Selfly0 UI screenshot inventory.
 * - Legacy filenames (e.g. explore-modules-after.png) are kept for backward compatibility.
 * - Prefer locale-suffixed files (-zh / -en) when wiring locale switching.
 * - `null` means not yet provided; components may fall back to the other locale or legacy path.
 */
export const selfly0Screenshots = {
  exploreCreate: {
    before: {
      zh: "/images/selfly0/explore-create-before-zh.png",
      en: null,
      legacy: "/images/selfly0/explore-create-before.png",
    },
    after: {
      zh: "/images/selfly0/explore-create-after-zh.png",
      en: "/images/selfly0/explore-create-after-en.png",
      legacy: "/images/selfly0/explore-modules-after.png",
    },
  },
  exploreModules: {
    before: {
      zh: "/images/selfly0/explore-modules-before-zh.png",
      en: null,
      legacy: "/images/selfly0/positioning-phone-1.png",
    },
    after: {
      zh: "/images/selfly0/explore-modules-after-zh.png",
      en: "/images/selfly0/explore-modules-after-en.png",
      legacy: "/images/selfly0/explore-modules-after.png",
    },
  },
  reviewSettings: {
    module: { zh: "/images/selfly0/review-settings-module-zh.png", en: null },
    category: { zh: "/images/selfly0/review-settings-category-zh.png", en: null },
  },
  exploreTemplatesTabs: {
    list: { zh: null, en: "/images/selfly0/explore-templates-list-en.png", legacy: "/images/selfly0/explore-templates-list.png" },
    plan: { zh: null, en: "/images/selfly0/explore-templates-plan-en.png", legacy: "/images/selfly0/explore-templates-plan.png" },
    journal: { zh: null, en: "/images/selfly0/explore-templates-journal-en.png", legacy: "/images/selfly0/explore-templates-journal.png" },
    board: { zh: null, en: "/images/selfly0/explore-templates-board-en.png", legacy: "/images/selfly0/explore-templates-board.png" },
  },
} as const;

type LocaleScreenshot = {
  zh: string | null;
  en: string | null;
  legacy: string;
};

export function resolveSelfly0Screenshot(
  entry: LocaleScreenshot,
  locale: Locale = "zh",
): string {
  const preferred = locale === "zh" ? entry.zh : entry.en;
  const alternate = locale === "zh" ? entry.en : entry.zh;
  return preferred ?? alternate ?? entry.legacy;
}
