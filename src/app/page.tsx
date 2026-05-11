import Link from "next/link";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { StickerTitle } from "@/components/StickerTitle";
import { TodayStamp } from "./TodayStamp";
import styles from "./page.module.css";

const infoNotes = [
  {
    id: "about",
    index: "A1",
    title: "我是谁",
    body: "偏产品型的 UI/UX 设计师，也会自己做独立开发项目。",
  },
  {
    id: "focus",
    index: "A2",
    title: "我关注什么",
    body: "问题定义、任务流程、信息层级、可用性和可交付性。",
  },
  {
    id: "delivery",
    index: "A3",
    title: "我能交付什么",
    body: "问题拆解、关键任务流、原型、视觉设计、组件规范和交付素材。",
  },
  {
    id: "where",
    index: "A4",
    title: "联系",
    body: "Email: you@example.com · GitHub: jaemin17",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.wall} aria-label="首页信息墙">
          <header className={styles.hero}>
            <div className={styles.heroTag} aria-label="status tag">
              <span className={styles.heroTagIcon} aria-hidden="true">
                :)
              </span>
              <span className={styles.heroTagPill}>
                <svg className={styles.heroTagPlate} viewBox="0 0 220 52" aria-hidden="true">
                  <rect
                    x="8"
                    y="16"
                    width="206"
                    height="34"
                    rx="17"
                    fill="rgba(0, 0, 0, 0.16)"
                    transform="rotate(-1 110 33)"
                  />
                  <rect
                    x="7"
                    y="8"
                    width="206"
                    height="34"
                    rx="17"
                    fill="#f6682f"
                    stroke="#0b0b0b"
                    strokeWidth="1"
                    transform="rotate(-1 110 25)"
                  />
                </svg>
                <span className={styles.heroTagText}>Hangzhou · Open to work</span>
              </span>
            </div>
            <StickerTitle className={styles.title} text="Jiamin Li" />
            <div className={styles.stickerSubWrap} aria-label="identity stickers">
              <span className={styles.stickerSub}>
                <svg className={styles.stickerSubPlate} viewBox="0 0 382 88" aria-hidden="true">
                  <rect
                    x="12"
                    y="20"
                    width="358"
                    height="58"
                    rx="18"
                    fill="rgba(0, 0, 0, 0.18)"
                    transform="rotate(-2 191 49)"
                  />
                  <rect
                    x="10"
                    y="9"
                    width="358"
                    height="58"
                    rx="18"
                    fill="#ff9e1d"
                    stroke="#0b0b0b"
                    strokeWidth="2"
                    transform="rotate(-2 191 38)"
                  />
                </svg>
                <span className={styles.stickerSubText}>产品设计 · 独立开发（0→1）</span>
              </span>
            </div>
            <section id="project" className={styles.projectWall} aria-labelledby="project-title">
              <h2 id="project-title" className={styles.srOnly}>
                项目
              </h2>
              <ol className={styles.workList}>
                {projects.map((p, idx) => (
                  <li key={p.slug} className={styles.workItem}>
                    <Link className={styles.workLink} href={`/projects/${p.slug}`}>
                      <span className={styles.pin} aria-hidden="true" />
                      <span className={styles.workNote}>
                        <span className={styles.workIndex}>{String(idx + 1).padStart(2, "0")}</span>
                        <span className={styles.workTitle}>{p.title}</span>
                        <span className={styles.workMeta}>
                          <span className={styles.workSubtitle}>{p.subtitle}</span>
                          <span className={styles.workTags} aria-label="项目标签">
                            {p.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className={styles.workTag}>
                                {tag}
                              </span>
                            ))}
                          </span>
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          </header>

          <TodayStamp />

          <div id="about" className={styles.infoNotes} aria-label="关于我">
            {infoNotes.map((note) => (
              <article key={note.id} id={note.id} className={styles.infoItem}>
                <span className={styles.pin} aria-hidden="true" />
                {note.id === "about" ? (
                  <Link className={`${styles.infoNote} ${styles.infoNoteLink}`} href="/about">
                    <span className={styles.workIndex}>{note.index}</span>
                    <span className={styles.infoTitle}>{note.title}</span>
                    <span className={styles.infoBody}>{note.body}</span>
                  </Link>
                ) : (
                  <span className={styles.infoNote}>
                    <span className={styles.workIndex}>{note.index}</span>
                    <span className={styles.infoTitle}>{note.title}</span>
                    <span className={styles.infoBody}>{note.body}</span>
                  </span>
                )}
              </article>
            ))}
          </div>

        </section>
      </main>
    </>
  );
}
