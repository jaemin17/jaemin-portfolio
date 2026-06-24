import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { assetPath } from "@/i18n/assets";
import { localePath } from "@/i18n/paths";
import styles from "../../test.module.css";
import { arAirbnbWireframes, arAirbnbScenes } from "../arAirbnbData";
import { HoverSwapImage } from "../smart-manufacturing/HoverImage";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ArAirbnbVisualPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={styles.plainWhitePage} data-page="visual-white">
      <SiteHeader locale={locale} surface="white" active="test" />
      <main className={styles.caseStudyPage}>
        <section className={styles.caseIntro}>
          <h1>AR-Enhanced Airbnb Experience</h1>

          <figure className={styles.caseHeroImage}>
            <Image
              src={assetPath(arAirbnbScenes[0].src)}
              width={1920}
              height={1074}
              alt="AR-Enhanced Airbnb Experience 首页视觉"
              priority
            />
          </figure>

          <div className={styles.caseMetaGrid} aria-label="项目概览">
            <div>
              <h2>Context</h2>
              <p>AR 增强现实 Airbnb 体验设计</p>
            </div>
            <div>
              <h2>Role</h2>
              <p>UI / Visual designer</p>
            </div>
            <div>
              <h2>Timeline</h2>
              <p>2023年</p>
            </div>
            <div>
              <h2>Skills</h2>
              <p>Visual design, AR/XR</p>
            </div>
          </div>
        </section>

        <section className={styles.caseGallery} aria-label="界面设计截图">
          <div className={styles.caseGalleryInner}>
            {arAirbnbWireframes.map((shot, i) => (
              <article key={shot.src} className={styles.caseScenario}>
                <p className={styles.caseScenarioTitle}>Screen {i + 2} — {shot.subtitle}</p>
                <figure>
                  <div className={styles.caseImageFrame}>
                    <Image
                      src={assetPath(shot.src)}
                      width={shot.width}
                      height={shot.height}
                      alt={`AR Airbnb ${shot.subtitle}`}
                    />
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.caseGallery} aria-label="AR 场景截图">
          <div className={styles.caseGalleryInner}>
            {arAirbnbScenes.slice(1).map((scene, i) => (
              <article key={scene.src} className={styles.caseScenario}>
                <p className={styles.caseScenarioTitle}>Scenario {i + 2} — {scene.subtitle}</p>
                <figure>
                  <div className={styles.caseImageFrame}>
                    <HoverSwapImage
                      src={scene.src}
                      hoverSrc={scene.hoverSrc}
                      width={scene.width}
                      height={scene.height}
                      alt={`AR Airbnb ${scene.subtitle}`}
                    />
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.caseContact}>
          <p>想了解更多细节？</p>
          <span>欢迎联系我聊聊这个项目。</span>
          <a href="mailto:lijaemin1993@gmail.com">lijaemin1993@gmail.com</a>
          <Link className="buttonSticker buttonStickerPurple" href={localePath(locale, "/test/visual2")}>
            返回视觉作品
          </Link>
        </section>
      </main>
    </div>
  );
}
