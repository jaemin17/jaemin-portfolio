import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { VineGrowDemo } from "./VineGrowDemo";
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

      <VineGrowDemo />
    </main>
  );
}
