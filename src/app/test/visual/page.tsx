import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "../test.module.css";

const visualProjects = [
  {
    title: "VR 教育软件合集",
    body: "把多套 VR 教育软件作为视觉亮点集中展示，突出 3D 场景、模型和沉浸式教学界面。",
    tags: ["VR", "Education", "Gallery"],
  },
  {
    title: "医学 VR",
    body: "老年医学基础、人体模型、生理病理原理、手术操作等医学教学软件视觉。",
    tags: ["Medical", "Anatomy", "Training"],
  },
  {
    title: "动物 / 解剖 VR",
    body: "动物模型、解剖训练、手术步骤和课程资源相关的 VR 教育软件界面。",
    tags: ["Animal", "Surgery", "3D"],
  },
  {
    title: "智能制造 VR",
    body: "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。",
    tags: ["Manufacturing", "Industry", "Simulation"],
    href: "/test/visual/smart-manufacturing",
  },
  {
    title: "汽车实训 VR",
    body: "纯电动汽车拆装、动力总成、电池相关训练软件和产品物料视觉。",
    tags: ["Automotive", "Training", "Visual"],
  },
];

export default function VisualPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Visual Collection</p>
          <h1>视觉作品</h1>
          <p>这里先作为 VR 教育视觉合集入口，后续每一个具体教育软件再进入独立详情页。</p>
        </section>

        <section className={styles.section} aria-label="视觉作品列表">
          <div className={styles.grid}>
            {visualProjects.map((project) => {
              const cardContent = (
                <>
                  <span className={styles.cardLabel}>Visual</span>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.href ? <span className={styles.cardAction}>查看详情</span> : null}
                </>
              );

              return project.href ? (
                <Link key={project.title} className={styles.card} href={project.href}>
                  {cardContent}
                </Link>
              ) : (
                <article key={project.title} className={styles.card}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </section>

        <Link className="buttonSticker buttonStickerOrange" href="/">
          返回首页
        </Link>
      </main>
    </>
  );
}
