"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { switchLocaleInPathname } from "@/i18n/paths";
import styles from "./LocaleSwitcher.module.css";

type LocaleSwitcherProps = {
  current: Locale;
};

export function LocaleSwitcher({ current }: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className={styles.switcher} role="group" aria-label="语言">
      {locales.map((locale) => {
        const href = switchLocaleInPathname(pathname, locale);
        const isActive = locale === current;
        return (
          <Link
            key={locale}
            href={href}
            className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
            aria-current={isActive ? "page" : undefined}
            lang={locale}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
