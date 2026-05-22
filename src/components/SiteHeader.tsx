import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { LocaleSwitcher } from "./LocaleSwitcher";
import styles from "./SiteHeader.module.css";

const portfolioDownloadUrl =
  "https://drive.google.com/file/d/1ixfK3WGaswqJQ_xjclbjdxqZvugWPGaf/view?usp=drive_link";

type SiteHeaderProps = {
  locale: Locale;
  surface?: "default" | "white";
  active?: "home" | "about" | "about2" | "test";
};

export function SiteHeader({ locale, surface = "default", active }: SiteHeaderProps) {
  const homeHref = localePath(locale, "/");
  const aboutHref = localePath(locale, "/about");
  const about2Href = localePath(locale, "/about2");
  const testHref = localePath(locale, "/test");

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
            className={`${styles.navLink} ${active === "about" ? styles.navLinkActive : ""}`}
            href={aboutHref}
          >
            About
          </Link>
          <Link
            className={`${styles.navLink} ${active === "about2" ? styles.navLinkActive : ""}`}
            href={about2Href}
          >
            About2
          </Link>
          <Link
            className={`${styles.navLink} ${active === "test" ? styles.navLinkActive : ""}`}
            href={testHref}
          >
            Test
          </Link>
          <a className={styles.navLink} href={portfolioDownloadUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
          <LocaleSwitcher current={locale} />
        </nav>
      </div>
    </header>
  );
}
