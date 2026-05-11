import { SiteHeader } from "@/components/SiteHeader";
import styles from "./about.module.css";

const notes = [
  "把模糊问题拆成可执行的路径",
  "喜欢从真实任务流里找答案",
  "产品思维和界面细节都在意",
  "会自己动手把想法做出来",
  "重视信息层级和阅读节奏",
  "习惯先验证，再放大投入",
  "对 AI 工具有持续好奇心",
  "偏爱清晰、轻快、有温度的体验",
  "能在 0 到 1 阶段快速推进",
  "关注交付质量，也关注使用感受",
  "愿意反复打磨关键交互",
  "相信设计应该能解决具体问题",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.wall} aria-labelledby="about-title">
          <header className={styles.topBar}>
            <div className={styles.titleBlock}>
              <h1 id="about-title" className={styles.title}>
                我是谁
              </h1>
            </div>
          </header>

          <div className={styles.noteGrid} aria-label="关于我的便利贴">
            {notes.map((note, index) => (
              <article key={note} className={styles.noteItem}>
                <span className={styles.note}>
                  <span className={styles.noteIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.noteText}>{note}</span>
                </span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
