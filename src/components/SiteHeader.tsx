import Link from "next/link";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark} aria-hidden="true">
            ◆
          </span>
          <span className={styles.brandText}>作品集</span>
        </Link>

        <nav className={styles.nav} aria-label="主导航">
          <Link className={styles.link} href="/#projects">
            项目
          </Link>
          <Link className={styles.link} href="/about">
            关于我
          </Link>
          <a className={styles.link} href="#contact">
            联系方式
          </a>
        </nav>
      </div>
    </header>
  );
}
