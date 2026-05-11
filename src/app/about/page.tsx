import { SiteHeader } from "@/components/SiteHeader";
import styles from "./about.module.css";

const noteGroups = [
  {
    title: "设计立场",
    tone: "yellow",
    notes: ["让人感觉舒服", "对自然感敏感", "不强行设计", "低压力体验", "长期使用感", "产品和人的关系"],
  },
  {
    title: "UX 能力",
    tone: "green",
    notes: ["问题定义", "真实任务流", "信息层级", "阅读节奏", "关键交互", "可用性优化"],
  },
  {
    title: "交付内容",
    tone: "blue",
    notes: ["产品定位", "用户路径", "Wireframe", "Prototype", "高保真 UI", "组件规范", "开发交付素材"],
  },
  {
    title: "工具方法",
    tone: "purple",
    notes: ["Figma", "FigJam", "SwiftUI", "Next.js", "AI tools", "竞品分析", "可用性测试"],
  },
  {
    title: "工作方式",
    tone: "orange",
    notes: ["先验证方向", "0 到 1 推进", "自己动手做", "持续观察", "反复迭代", "打磨到顺"],
  },
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
              <p className={styles.intro}>
                偏产品型的 UX/UI 设计师，擅长把模糊需求拆成清晰流程，并推进到可交付的真实产品。
              </p>
            </div>
          </header>

          <div className={styles.map} aria-label="关于我的能力地图">
            {noteGroups.map((group, groupIndex) => (
              <section
                key={group.title}
                className={`${styles.group} ${styles[group.tone]}`}
                aria-labelledby={`group-${groupIndex}`}
              >
                <h2 id={`group-${groupIndex}`} className={styles.groupTitle}>
                  {group.title}
                </h2>
                <div className={styles.noteGrid}>
                  {group.notes.map((note, noteIndex) => (
                    <article key={note} className={styles.noteItem}>
                      <span className={styles.note}>
                        <span className={styles.noteIndex}>
                          {String(groupIndex + 1)}
                          {String(noteIndex + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.noteText}>{note}</span>
                      </span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
