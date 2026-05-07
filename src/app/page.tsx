import Link from "next/link";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { StickerTitle } from "@/components/StickerTitle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
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

        <section id="project" className={styles.section}>
          <h2 className={styles.h2}>项目</h2>
          <p className={styles.smallLead}>
            我做过的项目通常从问题定义开始：理解场景、梳理任务流、建立原型、设计界面与组件，并准备交付或上线所需的内容。
            这里会放我最能代表当前能力的几个案例。
          </p>
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

        <section id="about" className={styles.section}>
          <h2 className={styles.h2}>关于我</h2>
          <div className={styles.aboutGrid}>
            <div>
              <h3 className={styles.h3}>我是谁</h3>
              <p className={styles.p}>
                我是一个偏产品型的 UI/UX 设计师，也会自己做一些独立开发项目。我喜欢把复杂的事情整理得更清楚，
                让用户不用费力也能理解下一步该做什么。
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>我关注什么</h3>
              <p className={styles.p}>
                我关心“为什么做”和“怎么判断做对了”。相比只做漂亮界面，我更在意问题是否被定义清楚、
                流程是否顺畅、信息层级是否帮助用户做决定。
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>我能交付什么</h3>
              <p className={styles.p}>
                我可以独立推进从问题拆解、关键任务流、原型、视觉设计、组件规范到交付素材的完整流程。
                需要时，我也能用 AI 和开发工具加快探索与实现。
              </p>
            </div>
          </div>
        </section>

        <section id="where" className={styles.section}>
          <h2 className={styles.h2}>联系</h2>
          <div className={styles.whereRow}>
            <a className={styles.quick} href="mailto:you@example.com">
              you@example.com
            </a>
            <a className={styles.quick} href="https://github.com/jaemin17" target="_blank" rel="noreferrer">
              GitHub →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
