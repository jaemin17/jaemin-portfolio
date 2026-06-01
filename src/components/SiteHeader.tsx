import Link from "next/link";
import { resumeDownloadUrl } from "@/content/resume";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { LocaleSwitcher } from "./LocaleSwitcher";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  locale: Locale;
  surface?: "default" | "white";
  active?: "home" | "about" | "about2" | "test" | "visual1" | "visual2" | "visual3" | "tools1" | "tools2" | "tools3" | "tools4";
};

export function SiteHeader({ locale, surface = "default", active }: SiteHeaderProps) {
  const homeHref = localePath(locale, "/");
  const about2Href = localePath(locale, "/about2");
  const testHref = localePath(locale, "/test");
  const visual2Href = localePath(locale, "/test/visual2");
  const visual3Href = localePath(locale, "/test/visual3");
  const tools4Href = localePath(locale, "/test/tools4");
  return (
    <header
      className={`${styles.header} ${surface === "white" ? styles.headerWhite : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.menuLeft} aria-label="menu bar">
          <Link className={styles.brand} href={homeHref}>
            <span className={styles.brandText}>Jiamin’s Board</span>
          </Link>
        </div>

        <nav className={styles.nav} aria-label="主导航">
          <Link
            className={`${styles.navLink} ${active === "home" ? styles.navLinkActive : ""}`}
            href={homeHref}
          >
            Home
          </Link>
          <Link
            className={`${styles.navLink} ${active === "about2" ? styles.navLinkActive : ""}`}
            href={about2Href}
          >
            About
          </Link>
          <Link
            className={`${styles.navLink} ${active === "test" ? styles.navLinkActive : ""}`}
            href={testHref}
          >
            Test
          </Link>
          <Link
            className={`${styles.navLink} ${active === "visual2" ? styles.navLinkActive : ""}`}
            href={visual2Href}
          >
            视觉2
          </Link>
          <Link
            className={`${styles.navLink} ${active === "tools4" ? styles.navLinkActive : ""}`}
            href={tools4Href}
          >
            工具4
          </Link>
          <a className={styles.navLink} href={resumeDownloadUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
          <LocaleSwitcher current={locale} />
        </nav>
      </div>
    </header>
  );
}
