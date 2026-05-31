import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { VisualCarousel } from "./VisualCarousel";
import styles from "./visual.module.css";

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
    path: "/test/visual/smart-manufacturing",
  },
  {
    title: "汽车实训 VR",
    body: "纯电动汽车拆装、动力总成、电池相关训练软件和产品物料视觉。",
    tags: ["Automotive", "Training", "Visual"],
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
    <div className={styles.page}>
      <SiteHeader locale={locale} active="test" />
      <main className={styles.main}>
        <div className={styles.headline}>
          <h1>
            Visual <strong>Works</strong>
          </h1>
          <span className={styles.annotation}>VR education showcase</span>
        </div>
        <VisualCarousel projects={visualProjects} locale={locale} />
        <div className={styles.footer}>@JIAMIN&apos;S PORTFOLIO</div>
      </main>
    </div>
  );
}
