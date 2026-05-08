import Link from "next/link";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { StickerTitle } from "@/components/StickerTitle";
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
              <span className={styles.heroTagPill}>Hangzhou · Open to work</span>
            </div>
            <StickerTitle className={styles.title} text="Jiamin Li" />
            <div className={styles.stickerSubWrap} aria-label="identity stickers">
              <span className={styles.stickerSub}>产品设计 · 独立开发（0→1）</span>
            </div>
            <p className={styles.subtitle}>
              我是一名关注产品体验与交互设计的设计师，擅长把模糊需求拆成清晰的问题、流程和界面。
            </p>
            <p className={styles.tagline}>
              我也在尝试把 AI 融入设计工作流：用它加速调研、整理、写作和迭代，但核心判断仍然来自用户价值、信息结构、可用性和可交付性。
            </p>
          </header>

          <div id="about" className={styles.infoNotes} aria-label="关于我">
            {infoNotes.map((note) => (
              <article key={note.id} id={note.id} className={styles.infoItem}>
                <span className={styles.pin} aria-hidden="true" />
                <span className={styles.infoNote}>
                  <span className={styles.workIndex}>{note.index}</span>
                  <span className={styles.infoTitle}>{note.title}</span>
                  <span className={styles.infoBody}>{note.body}</span>
                </span>
              </article>
            ))}
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
                        {p.subtitle} <span className={styles.dot}>·</span>{" "}
                        {p.tags.slice(0, 3).join(", ")}
                      </span>
                      <span className={styles.workMore}>查看案例 →</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </main>
    </>
  );
}
