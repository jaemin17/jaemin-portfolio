import Link from "next/link";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectsSection } from "@/components/ProjectsSection";
import styles from "./page.module.css";

export default function Home() {
  const primary = projects[0];
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <p className={styles.kicker}>
              产品设计师 · UIUX <span className={styles.kickerDot}>·</span> AI 不是替代，是加速器
            </p>
            <h1 className={styles.h1}>
              做产品设计也可以很有<span className={styles.spark}>节奏</span>。
            </h1>
            <p className={styles.lede}>
              我把 AI 当成搭档：更快研究、更快发散、更快迭代；但关键取舍永远围绕用户价值、可用性与落地。
            </p>

            <div className={styles.heroCtas}>
              <Link className="buttonPrimary" href="/#projects">
                直接开看
              </Link>
              <Link className="buttonGhost" href={`/projects/${primary.slug}`}>
                看我从 0 到上架
              </Link>
            </div>
          </div>

          <div className={styles.heroCard} aria-label="主项目摘要">
            <div className={styles.heroCardTop}>
              <div>
                <p className={styles.cardTitle}>{primary.title}</p>
                <p className={styles.cardSubtitle}>{primary.subtitle}</p>
              </div>
              <span className="chip">{primary.timeframe}</span>
            </div>
            <ul className={styles.cardList}>
              {primary.highlights.slice(0, 3).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className={styles.heroCardCtas}>
              <Link className="buttonPrimary" href={`/projects/${primary.slug}`}>
                阅读完整案例
              </Link>
              <a className="buttonGhost" href="#contact">
                约聊 15 分钟
              </a>
            </div>
          </div>
        </section>

        <ProjectsSection
          projects={projects}
          subtitle="3 个项目，先放最能打的：你可以点 Shuffle 随机换个观看顺序。"
        />

        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>联系方式</h2>
            <p className={styles.muted}>
              发我一句“想聊聊”，我会把作品集原始稿（Figma/流程/交付清单）也整理给你。
            </p>
          </div>
          <div className={styles.contactRow}>
            <a className="buttonGhost" href="mailto:you@example.com">
              you@example.com
            </a>
            <Link className="buttonGhost" href="/about">
              查看关于我
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
