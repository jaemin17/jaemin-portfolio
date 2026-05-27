import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import styles from "../test.module.css";

const toolProjects = [
  {
    title: "XR 内容创作与协同平台",
    body: "平台级项目，适合整合 XR资源库、XR课件工厂、3D设计工坊和交互流程设计引擎。",
    tags: ["Platform", "XR", "Workflow"],
  },
  {
    title: "3D说明书",
    body: "平板端、编辑器和头盔端组成的 3D 指导手册工具，用来把模型、步骤和动作组织成可体验内容。",
    tags: ["3D Manual", "Editor", "XR"],
  },
  {
    title: "模型编辑器",
    body: "面向 3D 模型的编辑工具，重点是材质、颜色、结构和模型资源管理。",
    tags: ["3D Editor", "Material", "Tools"],
  },
  {
    title: "Sync Space",
    body: "老师在平板端管理正在使用 VR 软件的学生，多端协同课堂和实训空间管理。",
    tags: ["Multi-device", "Classroom", "VR"],
  },
  {
    title: "VT-PPT / XR-PPT player",
    body: "PPT 和 XR 内容播放相关工具，支持 3D 模型、资源库和 3D PPT 内容浏览。",
    tags: ["PPT", "3D Assets", "PICO"],
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
      <SiteHeader locale={locale} active="test" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>UI/UX Collection</p>
          <h1>工具类产品</h1>
          <p>这里先测试工具类项目的集合入口。后续可以选 1-2 个做深度案例，其余保留为项目卡片。</p>
        </section>

        <section className={styles.section} aria-label="工具类产品列表">
          <div className={styles.grid}>
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
                    className={styles.card}
                    href={localePath(locale, project.path)}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article key={project.title} className={styles.card}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </section>

        <Link className="buttonSticker buttonStickerOrange" href={localePath(locale, "/")}>
          返回首页
        </Link>
      </main>
    </>
  );
}
