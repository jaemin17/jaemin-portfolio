import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { assetPath } from "@/i18n/assets";
import { localePath } from "@/i18n/paths";
import styles from "../../test.module.css";
import { desaySvShots } from "../desaySvData";
import { HoverSwapImage } from "../smart-manufacturing/HoverImage";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function DesaySvVisualPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const [heroShot, ...scenarioShots] = desaySvShots;

  return (
    <div className={styles.plainWhitePage} data-page="visual-white">
      <SiteHeader locale={locale} surface="white" active="test" />
      <main className={styles.caseStudyPage}>
        <section className={styles.caseIntro}>
          <h1>DESAY SV Automotive</h1>

          <figure className={styles.caseHeroImage}>
            <Image src={assetPath(heroShot.src)} width={1920} height={720} alt="DESAY SV Automotive 首页视觉" priority />
          </figure>

          <div className={styles.caseMetaGrid} aria-label="项目概览">
            <div>
              <h2>Context</h2>
              <p>车载娱乐与控制系统界面设计</p>
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
              <p>Visual design, HMI</p>
            </div>
          </div>
        </section>

        <section className={styles.caseGallery} aria-label="DESAY SV Automotive 界面截图">
          <div className={styles.caseGalleryInner}>
            {scenarioShots.map((shot, i) => (
              <article key={shot.src} className={styles.caseScenario}>
                <p className={styles.caseScenarioTitle}>Scenario {i + 1} — {shot.subtitle}</p>
                <figure>
                  <div className={styles.caseImageFrame}>
                    {"hoverSrc" in shot ? (
                      <HoverSwapImage
                        src={shot.src}
                        hoverSrc={shot.hoverSrc}
                        width={"width" in shot ? shot.width : 1920}
                        height={"height" in shot ? shot.height : 720}
                        alt={`DESAY SV ${shot.subtitle}`}
                      />
                    ) : (
                      <Image
                        src={assetPath(shot.src)}
                        width={1920}
                        height={720}
                        alt={`DESAY SV ${shot.subtitle}`}
                      />
                    )}
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
