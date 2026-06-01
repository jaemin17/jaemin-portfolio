import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import styles from "../test.module.css";

const toolProjects = [
  {
    title: "XR 内容创作与协同平台",
    shortTitle: "XR Platform",
    body: "平台级项目，适合整合 XR资源库、XR课件工厂、3D设计工坊和交互流程设计引擎。",
    tags: ["Platform", "XR", "Workflow"],
    tone: "pink",
    preview: "platform",
    video: "/videos/tools/model.mp4",
  },
  {
    title: "3D说明书",
    shortTitle: "3D Manual",
    body: "平板端、编辑器和头盔端组成的 3D 指导手册工具，用来把模型、步骤和动作组织成可体验内容。",
    tags: ["3D Manual", "Editor", "XR"],
    tone: "orange",
    preview: "manual",
    video: "/videos/tools/ppt.mp4",
  },
  {
    title: "模型编辑器",
    shortTitle: "Model Editor",
    body: "面向 3D 模型的编辑工具，重点是材质、颜色、结构和模型资源管理。",
    tags: ["3D Editor", "Material", "Tools"],
    tone: "yellow",
    preview: "editor",
    video: "/videos/tools/model-editor.mp4",
  },
  {
    title: "Sync Space",
    shortTitle: "Sync Space",
    body: "老师在平板端管理正在使用 VR 软件的学生，多端协同课堂和实训空间管理。",
    tags: ["Multi-device", "Classroom", "VR"],
    tone: "coral",
    preview: "sync",
    video: "/videos/tools/model.mp4",
  },
  {
    title: "VT-PPT / XR-PPT player",
    shortTitle: "XR-PPT Player",
    body: "PPT 和 XR 内容播放相关工具，支持 3D 模型、资源库和 3D PPT 内容浏览。",
    tags: ["PPT", "3D Assets", "PICO"],
    tone: "blue",
    preview: "ppt",
    video: "/videos/tools/ppt.mp4",
    path: "/projects/selfly-style",
  },
];

type ToolsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ToolsPage({ params }: ToolsPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <>
      <SiteHeader locale={locale} active="tools1" />
      <main className={`${styles.main} ${styles.toolsMain}`}>
        <section className={styles.toolsHero}>
          <div className={styles.toolsHeroCopy}>
            <p className={styles.eyebrow}>UI/UX Collection</p>
            <h1>
              工具类产品，
              <span className={styles.toolsHeroHighlightSmall}>从复杂流程到可操作界面</span>
            </h1>
            <p>
              把 XR 资源、3D 编辑、课堂协同和内容播放整理成一组可浏览的产品入口。
              每个项目先用预览图建立识别度，再进入更完整的案例说明。
            </p>
            <Link className={styles.heroCta} href={localePath(locale, "/")}>
              返回首页
            </Link>
          </div>

          <div className={styles.previewWall} aria-label="工具类产品预览">
            {toolProjects.map((project) => {
              const previewCard = (
                <>
                  <div
                    className={`${styles.previewVisual} ${
                      styles[`tone${project.tone[0].toUpperCase()}${project.tone.slice(1)}`]
                    }`}
                  >
                    <video
                      className={styles.previewVideo}
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <span className={styles.previewName}>{project.shortTitle}</span>
                </>
              );

              if (project.path) {
                return (
                  <Link
                    key={project.title}
                    className={styles.previewCard}
                    href={localePath(locale, project.path)}
                    aria-label={`查看${project.title}`}
                  >
                    {previewCard}
                  </Link>
                );
              }

              return (
                <article key={project.title} className={styles.previewCard}>
                  {previewCard}
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.toolsListSection} aria-label="工具类产品列表">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Project Notes</p>
            <h2>每个入口都可以继续展开成案例</h2>
            <p>预览墙负责快速识别项目，下面保留项目定位、关键词和可点击入口。</p>
          </div>

          <div className={styles.toolsList}>
            {toolProjects.map((project) => {
              const cardContent = (
                <>
                  <span className={styles.cardLabel}>Tool</span>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </>
              );

              if (project.path) {
                return (
                  <Link
                    key={project.title}
                    className={styles.toolRow}
                    href={localePath(locale, project.path)}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article key={project.title} className={styles.toolRow}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
