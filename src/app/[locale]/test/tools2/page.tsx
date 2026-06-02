import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import styles from "../test.module.css";

const screenProjects = [
  {
    title: "3D Model Browser",
    caption: "模型资源浏览与预览",
    video: "/videos/tools/model.mp4",
    className: styles.screenTiltLeft,
  },
  {
    title: "XR-PPT Player",
    caption: "3D 内容播放与课件演示",
    video: "/videos/tools/ppt.mp4",
    className: styles.screenTiltCenter,
    path: "/projects/vr-lesson-creator",
  },
  {
    title: "Model Editor",
    caption: "材质、颜色和模型结构编辑",
    video: "/videos/tools/model-editor.mp4",
    className: styles.screenTiltRight,
  },
  {
    title: "Sync Space",
    caption: "多端课堂协同与设备管理",
    video: "/videos/tools/model.mp4",
    className: styles.screenTiltFar,
  },
];

type ToolsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Tools2Page({ params }: ToolsPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <>
      <SiteHeader locale={locale} active="tools2" />
      <main className={`${styles.main} ${styles.toolsMain} ${styles.screenToolsMain}`}>
        <section className={styles.screenToolsHero}>
          <p className={styles.screenEyebrow}>UI/UX Collection / Layout Test 02</p>
          <h1>
            工具类产品，
            <span>像屏幕一样预览</span>
          </h1>
          <p className={styles.screenLead}>
            用一组像设备屏幕一样的黑色容器承载项目视频，把工具类产品从文字列表转成可浏览的动态封面墙。
          </p>
          <div className={styles.screenChips} aria-label="项目关键词">
            <span>XR workflow</span>
            <span>3D editor</span>
            <span>content player</span>
            <span>classroom tools</span>
          </div>

          <div className={styles.screenDeck} aria-label="工具类产品视频预览">
            {screenProjects.map((project) => {
              const card = (
                <>
                  <div className={styles.screenMedia}>
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <div className={styles.screenCaption}>
                    <strong>{project.title}</strong>
                    <span>{project.caption}</span>
                  </div>
                </>
              );

              if (project.path) {
                return (
                  <Link
                    key={project.title}
                    className={`${styles.screenCard} ${project.className}`}
                    href={localePath(locale, project.path)}
                  >
                    {card}
                  </Link>
                );
              }

              return (
                <article key={project.title} className={`${styles.screenCard} ${project.className}`}>
                  {card}
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
