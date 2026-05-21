import Link from "next/link";
import styles from "./SiteHeader.module.css";

const portfolioDownloadUrl =
  "https://drive.google.com/file/d/1ixfK3WGaswqJQ_xjclbjdxqZvugWPGaf/view?usp=drive_link";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.menuLeft} aria-label="menu bar">
          <Link className={styles.brand} href="/">
            <span className={styles.brandText}>Jiamin’s Board</span>
          </Link>
        </div>

        <nav className={styles.nav} aria-label="主导航">
          <Link className={`${styles.navLink} ${styles.navLinkActive}`} href="/">
            Home
          </Link>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
          <Link className={styles.navLink} href="/test">
            Test
          </Link>
          <a className={styles.navLink} href={portfolioDownloadUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
