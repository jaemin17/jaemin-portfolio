import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "../[slug]/project.module.css";

const appDownloadUrl = "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235";

type Selfly0PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Selfly0Page({ params }: Selfly0PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={styles.pagePlain}>
      <SiteHeader locale={locale} />
      <main className={styles.main}>
        <header className={`${styles.featuredHero} ${styles.projectOneHero}`}>
          <h1 className={styles.title}>
            <span className={styles.titleEn}>Selfly</span>：
            <span className={styles.titleZh}>
              让记录不再变成
              <span className={styles.strikeWord}>压力</span>
            </span>
          </h1>
          <p className={styles.subtitle}>从 0 到 1 设计并开发一款有温度的自我记录 App</p>
          <div className={styles.headerCta}>
            <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
            <div className={styles.meta}>
              <span className={styles.metaItem}>2025–2026</span>
              <span className={styles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={styles.metaItem}>Solo Product Designer & iOS Developer</span>
            </div>
            <a
              className="buttonSticker buttonStickerOrange"
              href={appDownloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              下载体验 App
            </a>
          </div>
        </header>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.caseText}>
            <h2>项目背景</h2>
            <div className={styles.selfly0Body}>
              <h3>从一次性探索，到持续理解自己</h3>
              <p className={styles.p}>
                Selfly 最初是一个帮助用户进行「自我探索」的工具，通过价值观、优势等练习，让人更清晰地认识自己。
                它来源于我的
                <strong className={styles.selfly0Emphasis}>个人真实需求</strong>。
              </p>
              <p className={styles.p}>
                <strong className={styles.selfly0Label}>• 发现:</strong>&nbsp;在迭代过程中，我逐渐意识到，自我探索并不会在一次测试后结束，它更像一个持续发生的过程。人在不同阶段，会不断重新理解自己，
                而真正重要的是
                <strong className={styles.selfly0Emphasis}>长期记录、回看与反思</strong>。
              </p>
              <p className={styles.p}>
                <strong className={styles.selfly0Label}>• 转变:</strong>&nbsp;Selfly 的定位
                从一次性的自我探索工具，逐渐转向
                <strong className={styles.selfly0Emphasis}>更长期的个人记录空间</strong>。
                希望通过记录，帮助用户持续探索、观察自己，并在生活里重新连接真正重要的东西。
              </p>
              <p className={styles.p}>
                <strong className={styles.selfly0DecisionLabel}>关键决策</strong>&nbsp;&nbsp;&nbsp;我将产品
                从预设练习调整为
                <strong className={styles.selfly0Emphasis}>更自由的记录方式</strong>，并通过
                <strong className={styles.selfly0Emphasis}>每日聚焦</strong>与
                <strong className={styles.selfly0Emphasis}>回顾机制</strong>，让记录真正进入日常。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
