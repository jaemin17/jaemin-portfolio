import Link from "next/link";
import styles from "./SiteHeader.module.css";

const portfolioDownloadUrl = "https://drive.google.com/file/d/1QowvXwQdM2GcpHMw60DGumxEhw75aBfT/view";

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
          <a className={styles.link} href={portfolioDownloadUrl} target="_blank" rel="noreferrer">
            下载简历
          </a>
        </nav>
      </div>
    </header>
  );
}
