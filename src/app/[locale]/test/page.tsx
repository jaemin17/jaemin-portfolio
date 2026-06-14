import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import styles from "./test.module.css";

type TestPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function TestPage({ params }: TestPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  return (
    <>
      <SiteHeader locale={locale} active="test" />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.grid}>
            <Link className={styles.card} href={localePath(locale, "/about")}>
              <span className={styles.cardLabel}>Archive</span>
              <h3>旧 About 页面</h3>
              <p>原导航栏 About 版本，当前作为备份入口保留。</p>
              <div className={styles.tags}>
                <span>About backup</span>
                <span>Archived page</span>
              </div>
            </Link>
            <Link className={styles.card} href={localePath(locale, "/test/visual3")}>
              <span className={styles.cardLabel}>Archive</span>
              <h3>视觉3</h3>
              <p>从导航栏移除的视觉合集版本，当前作为测试备份入口保留。</p>
              <div className={styles.tags}>
                <span>Visual backup</span>
                <span>VR Education</span>
              </div>
            </Link>
            <Link className={styles.card} href={localePath(locale, "/test/tools")}>
              <span className={styles.cardLabel}>Archive</span>
              <h3>工具1</h3>
              <p>从导航栏移除的工具类页面版本，当前作为测试备份入口保留。</p>
              <div className={styles.tags}>
                <span>Tools backup</span>
                <span>Layout 01</span>
              </div>
            </Link>
            <Link className={styles.card} href={localePath(locale, "/test/model-editor-backup")}>
              <span className={styles.cardLabel}>Archive</span>
              <h3>模型编辑器（备份）</h3>
              <p>模型编辑器项目详情页的当前版本备份，修改前保留。</p>
              <div className={styles.tags}>
                <span>Model Editor backup</span>
                <span>Project detail</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
