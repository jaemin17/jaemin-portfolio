import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { VisualCarousel } from "./VisualCarousel";
import styles from "./visual.module.css";

const visualProjects = [
  {
    title: "智能制造 VR",
    body: "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。",
    tags: ["Manufacturing", "Industry", "Simulation"],
    path: "/test/visual2/smart-manufacturing",
    video: "/videos/visual/immersive.mp4",
  },
  {
    title: "生物医疗VR",
    body: "动物模型、解剖训练、手术步骤和课程资源相关的 VR 教育软件界面。",
    tags: ["Animal", "Surgery", "3D"],
    path: "/test/visual2/animal-vr",
    video: "/videos/visual/highmodes.mp4",
  },
  {
    title: "Cosmic Blaze",
    body: "VR/AR 桌面设备体验游戏的 UI 视觉设计。",
    tags: ["VR/AR", "Game", "Visual"],
    path: "/test/visual2/cosmic-blaze",
    image: "/images/visual/cosmic-blaze/hero.png",
  },
  {
    title: "医学 VR",
    body: "老年医学基础、人体模型、生理病理原理、手术操作等医学教学软件视觉。",
    tags: ["Medical", "Anatomy", "Training"],
    path: "/test/visual2/medical-vr",
    video: "/videos/visual/highmodes.mp4",
  },
  {
    title: "汽车实训 VR",
    body: "纯电动汽车拆装、动力总成、电池相关训练软件和产品物料视觉。",
    tags: ["Automotive", "Training", "Visual"],
    path: "/test/visual2/automotive-vr",
    video: "/videos/visual/highmodes.mp4",
  },
];

type VisualPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function VisualPage({ params }: VisualPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={styles.page} data-page="visual2">
      <SiteHeader locale={locale} active="visual2" />
      <main className={styles.main}>
        <div className={styles.headline}>
          <h1>
            Visual <strong>Works</strong>
          </h1>
          <span className={styles.annotation}>every detail, intentional</span>
        </div>
        <VisualCarousel projects={visualProjects} locale={locale} />
        <div className={styles.footer}>@JIAMIN&apos;S PORTFOLIO</div>
      </main>
    </div>
  );
}
