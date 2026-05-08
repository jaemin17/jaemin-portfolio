import Link from "next/link";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.menuLeft} aria-label="menu bar">
          <Link className={styles.brand} href="/">
            <span className={styles.brandText}>design.cc</span>
          </Link>
        </div>

        <nav className={styles.nav} aria-label="主导航">
          <a className={styles.link} href="/resume.pdf" target="_blank" rel="noreferrer">
            下载简历
          </a>
        </nav>
      </div>
    </header>
  );
}
