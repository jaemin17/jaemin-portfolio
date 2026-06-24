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
            <Link className={styles.card} href={localePath(locale, "/test/about2-v2")}>
              <span className={styles.cardLabel}>WIP</span>
              <h3>About2 改版测试</h3>
              <p>About 页面的测试副本，用于改版实验。</p>
              <div className={styles.tags}>
                <span>About2 v2</span>
                <span>In progress</span>
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
<Link className={styles.card} href={localePath(locale, "/projects/sync-space")}>
              <span className={styles.cardLabel}>WIP</span>
              <h3>Sync Space</h3>
              <p>多端课堂协同与设备管理项目详情页，正在完善中，主页入口暂不开放。</p>
              <div className={styles.tags}>
                <span>Sync Space</span>
                <span>In progress</span>
              </div>
            </Link>
            <Link className={styles.card} href={localePath(locale, "/projects/3d-model-browser")}>
              <span className={styles.cardLabel}>WIP</span>
              <h3>XR交互剧本设计引擎</h3>
              <p>XR 剧本设计引擎项目详情页，正在完善中，主页入口暂不开放。</p>
              <div className={styles.tags}>
                <span>XR Script Engine</span>
                <span>In progress</span>
              </div>
            </Link>
            <Link className={styles.card} href={localePath(locale, "/projects/vr-lesson-creator")}>
              <span className={styles.cardLabel}>WIP</span>
              <h3>XR课件</h3>
              <p>XR 课件项目详情页，正在完善中，主页入口暂不开放。</p>
              <div className={styles.tags}>
                <span>VR Lesson Creator</span>
                <span>In progress</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
