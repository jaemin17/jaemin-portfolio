import { SiteHeader } from "@/components/SiteHeader";
import styles from "./about.module.css";

const noteGroups = [
  {
    title: "设计立场",
    tone: "yellow",
    notes: ["减少使用压力", "让流程更自然", "不为设计而设计", "关注长期使用", "尊重用户状态", "让产品有温度"],
  },
  {
    title: "UX 能力",
    tone: "green",
    notes: ["问题定义", "任务流梳理", "信息层级", "内容阅读节奏", "关键交互", "可用性优化"],
  },
  {
    title: "交付内容",
    tone: "blue",
    notes: ["产品定位", "用户路径", "线框图", "交互原型", "高保真 UI", "组件规范", "开发交付素材"],
  },
  {
    title: "工具与方法",
    tone: "purple",
    notes: ["Figma", "FigJam", "SwiftUI", "Next.js", "AI 辅助设计", "竞品分析", "可用性测试"],
  },
  {
    title: "工作方式",
    tone: "orange",
    notes: ["先验证方向", "快速推进 0→1", "自己动手实现", "持续观察反馈", "反复迭代细节", "打磨到可交付"],
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
                偏产品型的 UX/UI 设计师，擅长把模糊需求拆成清晰任务流、界面结构和可落地的产品体验。
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
