import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./project.module.css";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();
  const featured = project.featured;

  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className={styles.top}>
          <Link className="buttonGhost" href="/#project">
            ← 返回项目列表
          </Link>
        </div>

        <header className={featured ? styles.featuredHero : styles.header}>
          {featured ? <p className={styles.eyebrow}>{featured.eyebrow}</p> : null}
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>{project.timeframe}</span>
            <span className={styles.metaDot} aria-hidden="true">
              ·
            </span>
            <span className={styles.metaItem}>{project.role}</span>
          </div>
          <div className={styles.tags} aria-label="标签">
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </header>

        {featured ? (
          <>
            <section className={styles.featuredIntro}>
              <div>
                <h2 className={styles.h2}>起点</h2>
                <p className={styles.p}>{featured.origin}</p>
                <h2 className={styles.h2}>设计问题</h2>
                <p className={styles.problem}>{featured.problem}</p>
              </div>
              <aside className={styles.phonePanel} aria-label={featured.visualLabel}>
                <div className={styles.phoneFrame}>
                  {featured.visualNotes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
              </aside>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>产品策略</h2>
              <div className={styles.strategyGrid}>
                {featured.strategy.map((item) => (
                  <article key={item.title} className={styles.strategyCard}>
                    <span className={styles.strategyTitle}>{item.title}</span>
                    <h3>{item.principle}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.featuredSplit}>
              <div>
                <h2 className={styles.h2}>关键 UX 决策</h2>
                <ul className={styles.list}>
                  {featured.uxDecisions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={styles.h2}>落地实现</h2>
                <ul className={styles.list}>
                  {featured.implementation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>项目反思</h2>
              {featured.reflection.map((item) => (
                <p key={item} className={styles.p}>
                  {item}
                </p>
              ))}
            </section>
          </>
        ) : null}

        <section className={styles.section}>
          <h2 className={styles.h2}>亮点</h2>
          <ul className={styles.list}>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        {(!featured ? project.sections : project.sections.slice(0, 1)).map((s) => (
          <section key={s.title} className={styles.section}>
            <h2 className={styles.h2}>{s.title}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className={styles.p}>
                {p}
              </p>
            ))}
            {s.bullets?.length ? (
              <ul className={styles.list}>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <footer className={styles.footer}>
          <Link className="buttonPrimary" href="/#where">
            联系我
          </Link>
          <Link className="buttonGhost" href="/">
            回到首页
          </Link>
        </footer>
      </main>
    </>
  );
}
