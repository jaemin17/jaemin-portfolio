import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { VineGrowDemo } from "./VineGrowDemo";
import { VineGrowDemoV1 } from "./VineGrowDemoV1";
import { VineGrowDemoUniform } from "./VineGrowDemoUniform";
import styles from "./vine.module.css";

type VinePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function VinePage({ params }: VinePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <p className={styles.kicker}>Prototype</p>
        <h1 className={styles.title}>藤蔓生长动画 · 小样</h1>
        <p className={styles.lead}>
          手绘描边路径 + <code>stroke-dashoffset</code> 实现「从根部生长」，叶子和花随枝条到位依次冒出。
          这是占位草图，用来确认节奏和感觉，之后照你重绘的 SVG 替换即可。
        </p>
        <Link className={styles.back} href={localePath(locale, "/")}>
          ← 返回首页
        </Link>
      </header>

      <div className={styles.compare}>
        <section className={styles.compareItem}>
          <h2 className={styles.compareLabel}>版本一 · 占位线条（提供 SVG 之前）</h2>
          <p className={styles.compareSub}>
            手绘的匀宽描边藤蔓，纯 <code>stroke-dashoffset</code> 生长。用来先验证"生长"的节奏。
          </p>
          <VineGrowDemoV1 />
        </section>

        <section className={styles.compareItem}>
          <h2 className={styles.compareLabel}>版本二 · 你的 SVG（变粗细遮罩）</h2>
          <p className={styles.compareSub}>
            真实手绘轮廓 + 中轴线遮罩，枝干有粗细变化，叶子随生长依次冒出。
          </p>
          <VineGrowDemo />
        </section>

        <section className={styles.compareItem}>
          <h2 className={styles.compareLabel}>版本三 · 由中轴线生成匀宽枝干</h2>
          <p className={styles.compareSub}>
            只用你的中轴线"描粗"成枝身 + 深色描边轮廓，不需要填充轮廓和遮罩。代价是粗细恒定。
          </p>
          <VineGrowDemoUniform />
        </section>
      </div>
    </main>
  );
}
