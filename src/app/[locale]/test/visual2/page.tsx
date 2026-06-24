import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { VisualCarousel } from "./VisualCarousel";
import styles from "./visual.module.css";

const visualProjects = [
  {
    title: "生物医疗VR",
    body: "动物模型、解剖训练、手术步骤和课程资源相关的 VR 教育软件界面。",
    tags: ["Animal", "Surgery", "3D"],
    path: "/test/visual2/animal-vr",
    video: "/videos/visual/highmodes.mp4",
    accentColor: "#60a5fa",
  },
  {
    title: "智能制造 VR",
    body: "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。",
    tags: ["Manufacturing", "Industry", "Simulation"],
    path: "/test/visual2/smart-manufacturing",
    video: "/videos/visual/immersive.mp4",
    accentColor: "#a855f7",
  },
  {
    title: "DESAY SV",
    body: "车载娱乐与控制系统界面，包含驾驶、音乐、收音机和车辆设置等功能模块。",
    tags: ["Automotive", "HMI", "Visual"],
    path: "/test/visual2/desay-sv",
    image: "/images/visual/desay-sv/hero.png",
    accentColor: "#60a5fa",
  },
  {
    title: "VR游戏",
    body: "VR/AR 桌面设备体验游戏的 UI 视觉设计。",
    tags: ["VR/AR", "Game", "Visual"],
    path: "/test/visual2/cosmic-blaze",
    image: "/images/visual/cosmic-blaze/hero.png",
    accentColor: "#a855f7",
  },
  {
    title: "AR Airbnb",
    body: "AR 增强现实 Airbnb 体验设计，将数字信息融入真实住宿场景。",
    tags: ["AR", "UX", "Visual"],
    path: "/test/visual2/ar-airbnb",
    image: "/images/visual/ar-airbnb/scene-1.png",
    accentColor: "#facc15",
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
