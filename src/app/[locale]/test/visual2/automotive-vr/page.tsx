import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { assetPath } from "@/i18n/assets";
import { localePath } from "@/i18n/paths";
import styles from "../../test.module.css";
import { automotiveVrShots } from "../automotiveVrData";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AutomotiveVrVisualPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const [heroShot, ...scenarioShots] = automotiveVrShots;

  return (
    <div className={styles.plainWhitePage} data-page="visual-white">
      <SiteHeader locale={locale} surface="white" active="test" />
      <main className={styles.caseStudyPage}>
        <section className={styles.caseIntro}>
          <h1>汽车实训 VR</h1>

          <figure className={styles.caseHeroImage}>
            <Image src={assetPath(heroShot.src)} width={1920} height={1080} alt="汽车实训 VR 首页视觉" priority />
          </figure>

          <div className={styles.caseMetaGrid} aria-label="项目概览">
            <div>
              <h2>Context</h2>
              <p>纯电动汽车实训 VR 软件</p>
            </div>
            <div>
              <h2>Role</h2>
              <p>UI / Visual designer</p>
            </div>
            <div>
              <h2>Timeline</h2>
              <p>2025年</p>
            </div>
            <div>
              <h2>Skills</h2>
              <p>Visual design, 3D UI</p>
            </div>
          </div>
        </section>

        <section className={styles.caseGallery} aria-label="汽车实训 VR 截图">
          <div className={styles.caseGalleryInner}>
            {scenarioShots.map((shot, i) => (
              <article key={shot.src} className={styles.caseScenario}>
                <p className={styles.caseScenarioTitle}>Scenario {i + 1}</p>
                <figure>
                  <div className={styles.caseImageFrame}>
                    <Image src={assetPath(shot.src)} width={1920} height={1080} alt={`汽车实训 VR ${shot.title} ${shot.subtitle}`} />
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.caseContact}>
          <p>想了解更多细节？</p>
          <span>欢迎联系我聊聊这个项目。</span>
          <a href="mailto:lijiaemin1993@gmail.com">lijiaemin1993@gmail.com</a>
          <Link className="buttonSticker buttonStickerPurple" href={localePath(locale, "/test/visual2")}>
            返回视觉作品
          </Link>
        </section>
      </main>
    </div>
  );
}
