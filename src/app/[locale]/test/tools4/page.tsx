import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { Carousel } from "./Carousel";
import styles from "./tools4.module.css";

const projects = [
  {
    title: "3D Model Browser",
    caption: "模型资源浏览与预览",
    video: "/videos/tools/model.mp4",
  },
  {
    title: "XR-PPT Player",
    caption: "3D 内容播放与课件演示",
    video: "/videos/tools/ppt.mp4",
  },
  {
    title: "Model Editor",
    caption: "材质、颜色和模型结构编辑",
    video: "/videos/tools/model-editor.mp4",
  },
  {
    title: "Sync Space",
    caption: "多端课堂协同与设备管理",
    video: "/videos/tools/model.mp4",
  },
];

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Tools4Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={styles.page} data-page="tools4">
      <SiteHeader locale={locale} active="tools4" />
      <main className={styles.main}>
        <div className={styles.headline}>
          <h1>
            Made <strong>with</strong> Tools
          </h1>
          <span className={styles.annotation}>these projects are interactive</span>
        </div>
        <Carousel projects={projects} />
        <div className={styles.footer}>@JIAMIN&apos;S PORTFOLIO</div>
      </main>
    </div>
  );
}
