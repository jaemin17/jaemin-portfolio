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

  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className={styles.top}>
          <Link className="buttonGhost" href="/#projects">
            ← 返回项目列表
          </Link>
        </div>

        <header className={styles.header}>
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

        <section className={styles.section}>
          <h2 className={styles.h2}>亮点</h2>
          <ul className={styles.list}>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        {project.sections.map((s) => (
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
          <Link className="buttonPrimary" href="/#contact">
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

