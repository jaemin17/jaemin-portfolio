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
  const isProjectOne = slug === "selfly-ios-app";
  const isEvidenceCase = slug === "project-c";

  if (!project) notFound();
  const featured = project.featured;
  const [titleLead, titleTail] = project.title.split("：");
  const hasBilingualTitle = Boolean(titleTail);
  const stressWord = "压力";
  const titleTailParts = hasBilingualTitle ? titleTail.split(stressWord) : [];

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
            <div className={styles.visualCaption}>每日聚焦、记录与回顾的轻量系统</div>
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
      case "challenge":
        return (
          <div className={styles.visualChallenge}>
            {["入口太多", "开始太重", "难以持续"].map((item, index) => (
              <div key={item} className={styles.challengeNode}>
                <span>0{index + 1}</span>
                <b>{item}</b>
              </div>
            ))}
          </div>
        );
      case "consolidation":
        return (
          <div className={styles.visualConsolidation}>
            <div className={styles.beforeCluster}>
              {["愿景板", "成功日记", "感恩", "我喜欢", "目标", "灵感"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className={styles.flowArrow} aria-hidden="true">
              →
            </div>
            <div className={styles.afterCluster}>
              {["清单", "计划", "日记", "图册"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
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
      case "templates":
        return (
          <div className={styles.visualTemplates}>
            <div className={styles.blankForm}>
              <span>空白配置</span>
              <i />
              <i />
              <i />
            </div>
            <div className={styles.templateShelf}>
              {["情绪日记", "年度目标", "理想自我", "我的边界"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        );
      case "rhythm":
        return (
          <div className={styles.visualRhythm}>
            {["今日 Top 3", "明日草稿", "Backlog"].map((item, index) => (
              <div key={item} className={styles.rhythmColumn}>
                <span>{item}</span>
                {Array.from({ length: index === 0 ? 3 : 2 }).map((_, itemIndex) => (
                  <i key={itemIndex} />
                ))}
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
      case "completion":
        return (
          <div className={styles.visualCompletion}>
            {["未完成", "完成态", "可恢复"].map((item, index) => (
              <div key={item} className={styles.completionStep}>
                <span>0{index + 1}</span>
                <b>{item}</b>
                <i />
              </div>
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
        <header
          className={[
            featured ? styles.featuredHero : styles.header,
            isProjectOne ? styles.projectOneHero : "",
            isEvidenceCase ? styles.evidenceHero : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <h1 className={styles.title}>
            {hasBilingualTitle ? (
              <>
                <span className={styles.titleEn}>{titleLead}</span>：
                <span className={styles.titleZh}>
                  {titleTailParts.length > 1 ? (
                    <>
                      {titleTailParts[0]}
                      <span className={styles.strikeWord}>{stressWord}</span>
                      {titleTailParts.slice(1).join(stressWord)}
                    </>
                  ) : (
                    titleTail
                  )}
                </span>
              </>
            ) : (
              project.title
            )}
          </h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          {featured?.appDownloadUrl ? (
            <div className={styles.headerCta}>
              {isEvidenceCase ? (
                <div className={styles.evidenceHeroVisual} aria-hidden="true">
                  {[
                    ["Today", "Top 3", "Tomorrow"],
                    ["Explore", "List", "Journal"],
                    ["Review", "Cards", "Reflect"],
                  ].map(([label, first, second]) => (
                    <div key={label} className={styles.evidencePhone}>
                      <span>{label}</span>
                      <i />
                      <b>{first}</b>
                      <b>{second}</b>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.appPreviewPlaceholder} aria-hidden="true" />
              )}
              <div className={styles.meta}>
                <span className={styles.metaItem}>{project.timeframe}</span>
                <span className={styles.metaDot} aria-hidden="true">
                  ·
                </span>
                <span className={styles.metaItem}>{project.role}</span>
              </div>
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
              <section
                key={section.title}
                className={[styles.caseSection, isEvidenceCase ? styles.evidenceSection : ""]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.visualPlate} aria-label={section.title}>
                  {visualPlate(section.visual)}
                </div>
                <div className={styles.caseText}>
                  <h2>{section.label}</h2>
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                    {section.before && section.after ? (
                      <div className={styles.beforeAfterGrid} aria-label="改造前后对比">
                        <div className={styles.beforeAfterCard}>
                          <span>改造前</span>
                          <p>{section.before}</p>
                        </div>
                        <div className={styles.beforeAfterCard}>
                          <span>改造后</span>
                          <p>{section.after}</p>
                        </div>
                      </div>
                    ) : null}
                    <div className={styles.designPoints}>
                      <h4>设计要点</h4>
                      <ul>
                        {section.capability ? (
                          <li>
                            <strong>{section.capability}</strong>
                          </li>
                        ) : null}
                        {section.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {isEvidenceCase ? (
              <section className={styles.detailWall}>
                <div>
                  <h2>细节治理</h2>
                  <p>
                    除了核心结构，我也持续处理高频使用里的小摩擦。它们单独看是细节，合在一起决定产品是否像一个真实、稳定、可以长期使用的 App。
                  </p>
                </div>
                <div className={styles.detailGrid}>
                  {[
                    "长文本适配",
                    "滑动操作不裁剪",
                    "底部模糊更轻",
                    "图册缩略图更清晰",
                    "英文标签换行",
                    "二级页导航状态",
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>
            ) : null}

            <section className={styles.caseReflection}>
              <h2>项目反思</h2>
              <div>
                {featured.reflection.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
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
