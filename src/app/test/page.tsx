import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { testProjects } from "@/content/projects";
import styles from "./test.module.css";

const draftDirections = [
  {
    title: "XR 内容创作与协同平台",
    body: "把 3D说明书、模型编辑器、VT-PPT、XR资源库和课件工厂收进同一条产品主线。",
    tags: ["XR Platform", "3D Tools", "B2B"],
  },
  {
    title: "Sync Space 多人协同培训平台",
    body: "围绕老师在平板端管理 VR 学生的课堂场景，测试多端协同案例结构。",
    tags: ["Multi-device", "Education", "VR"],
  },
  {
    title: "VR 教育软件视觉合集",
    body: "集中展示医学、动物、智能制造和汽车方向的 VR 教育画面，作为视觉亮点测试。",
    tags: ["Visual", "VR Education", "3D"],
  },
];

export default function TestPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Portfolio Lab</p>
          <h1>测试区</h1>
          <p>
            这里专门放还没决定是否进入正式首页的版本和新项目组织方式。正式首页保持克制，新的 XR /
            3D 内容先在这里试。
          </p>
        </section>

        <section className={styles.section} aria-labelledby="selfly-test-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Current project variants</p>
            <h2 id="selfly-test-title">Selfly 测试版本</h2>
            <p>首页只保留一个正式版本，另外两个候选版本先留在这里，后续可以继续比较文案和叙事结构。</p>
          </div>
          <div className={styles.grid}>
            {testProjects.map((project) => (
              <Link key={project.slug} className={styles.card} href={`/projects/${project.slug}`}>
                <span className={styles.cardLabel}>{project.timeframe}</span>
                <h3>{project.cardTitle ?? project.title}</h3>
                <p>{project.cardSubtitle ?? project.subtitle}</p>
                <div className={styles.tags}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="xr-draft-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Next experiments</p>
            <h2 id="xr-draft-title">XR / 3D 项目尝试方向</h2>
            <p>这些先作为内容架构草稿，不影响正式首页。等方向确定后，再补截图、案例页和真实文案。</p>
          </div>
          <div className={styles.grid}>
            {draftDirections.map((item) => (
              <article key={item.title} className={styles.card}>
                <span className={styles.cardLabel}>Draft</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
