import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./project.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();
  const featured = project.featured;

  function visualPlate(visual: NonNullable<typeof featured>["visualSections"][number]["visual"]) {
    switch (visual) {
      case "overview":
        return (
          <div className={styles.visualOverview}>
            <div className={styles.mockPhoneTall}>
              <span>Today</span>
              <i />
              <i />
              <i />
            </div>
            <div className={styles.mockPhoneTilt}>
              <span>Review</span>
              <i />
              <i />
            </div>
            <div className={styles.visualCaption}>A gentle system for daily focus and self-reflection</div>
          </div>
        );
      case "structure":
        return (
          <div className={styles.visualFlow}>
            {["Today", "Explore", "Review"].map((item) => (
              <div key={item} className={styles.flowNode}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
      case "focus":
        return (
          <div className={styles.visualTopThree}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.topCard}>
                <span>0{item}</span>
                <i />
                <i />
              </div>
            ))}
          </div>
        );
      case "modules":
        return (
          <div className={styles.visualModules}>
            {["清单", "计划", "日记", "图册"].map((item) => (
              <div key={item} className={styles.moduleTile}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
      case "review":
        return (
          <div className={styles.visualReview}>
            {[0, 1, 2].map((item) => (
              <div key={item} className={styles.reviewCard} />
            ))}
          </div>
        );
      case "build":
        return (
          <div className={styles.visualBuild}>
            {["SwiftUI", "SwiftData", "iCloud", "StoreKit"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        );
    }
  }

  return (
    <div className={styles.pagePlain}>
      <SiteHeader />
      <main className={styles.main}>
        <header className={featured ? styles.featuredHero : styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>{project.timeframe}</span>
            <span className={styles.metaDot} aria-hidden="true">
              ·
            </span>
            <span className={styles.metaItem}>{project.role}</span>
          </div>
          {featured?.appDownloadUrl ? (
            <div className={styles.headerCta}>
              <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
              <a
                className="buttonSticker buttonStickerOrange"
                href={featured.appDownloadUrl}
                target="_blank"
                rel="noreferrer"
              >
                下载体验 App
              </a>
            </div>
          ) : null}
        </header>

        {featured ? (
          <>
            <section className={styles.caseLead}>
              <p>{featured.origin}</p>
              <blockquote>{featured.problem}</blockquote>
            </section>

            {featured.visualSections.map((section) => (
              <section key={section.title} className={styles.caseSection}>
                <div className={styles.visualPlate} aria-label={section.title}>
                  {visualPlate(section.visual)}
                </div>
                <div className={styles.caseText}>
                  <h2>{section.label}</h2>
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                    <ul>
                      {section.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}

            <section className={styles.caseReflection}>
              <h2>项目反思</h2>
              {featured.reflection.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </section>
          </>
        ) : null}

        {!featured ? (
          <section className={styles.section}>
            <h2 className={styles.h2}>亮点</h2>
            <ul className={styles.list}>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {(!featured ? project.sections : []).map((s) => (
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
          <Link className="buttonSticker buttonStickerBlue" href="/#where">
            联系我
          </Link>
          <Link className="buttonGhost" href="/">
            回到首页
          </Link>
        </footer>
      </main>
    </div>
  );
}
