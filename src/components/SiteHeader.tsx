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
          <span className={styles.menuSep} aria-hidden="true">
            ·
          </span>
          <Link className={styles.menuItem} href="/#project">
            file
          </Link>
          <Link className={styles.menuItem} href="/#about">
            edit
          </Link>
          <Link className={styles.menuItem} href="/#where">
            view
          </Link>
        </div>

        <nav className={styles.nav} aria-label="主导航">
          <Link className={styles.link} href="/#project">
            Stuff I’ve done
          </Link>
          <a className={styles.link} href="/resume.pdf" target="_blank" rel="noreferrer">
            not designresume
          </a>
        </nav>
      </div>
    </header>
  );
}
