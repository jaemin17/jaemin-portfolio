import Link from "next/link";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./page.module.css";

export default function Home() {
  const primary = projects[0];
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <p className={styles.kicker}>产品设计师 · UIUX</p>
            <h1 className={styles.h1}>
              我用 AI 工具辅助独立交付产品，从 0 到上架。
            </h1>
            <p className={styles.lede}>
              聚焦端到端体验：问题定义、信息架构、关键流程、可用性与视觉一致性。
            </p>

            <div className={styles.heroCtas}>
              <Link className="buttonPrimary" href="/#projects">
                查看项目
              </Link>
              <Link className="buttonGhost" href={`/projects/${primary.slug}`}>
                先看主项目
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
            <Link className="buttonPrimary" href={`/projects/${primary.slug}`}>
              阅读完整案例
            </Link>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>项目</h2>
            <p className={styles.muted}>
              先展示 3 个项目：1 个主打 + 2 个互补（你之后只改内容文件即可替换）。
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((p) => (
              <Link key={p.slug} className={styles.card} href={`/projects/${p.slug}`}>
                <div className={styles.cardHead}>
                  <h3 className={styles.h3}>{p.title}</h3>
                  <span className="chip">{p.timeframe}</span>
                </div>
                <p className={styles.cardDesc}>{p.subtitle}</p>
                <div className={styles.cardTags} aria-label="标签">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <p className={styles.cardLink}>查看详情 →</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>联系方式</h2>
            <p className={styles.muted}>把下面占位替换成你的邮箱/微信/LinkedIn。</p>
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
