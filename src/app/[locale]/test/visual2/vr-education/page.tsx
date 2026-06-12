import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import styles from "../../test.module.css";
import { vrEducationShots } from "../vrEducationData";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function VrEducationVisualPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const [heroShot, ...scenarioShots] = vrEducationShots;

  return (
    <div className={styles.plainWhitePage} data-page="visual-white">
      <SiteHeader locale={locale} surface="white" active="test" />
      <main className={styles.caseStudyPage}>
        <section className={styles.caseIntro}>
          <h1>VR 教育软件合集</h1>

          <figure className={styles.caseHeroImage}>
            <Image src={heroShot.src} width={1920} height={1080} alt="VR 教育软件合集首页视觉" priority />
          </figure>

          <div className={styles.caseMetaGrid} aria-label="项目概览">
            <div>
              <h2>Context</h2>
              <p>多套 VR 教育软件视觉集中展示</p>
            </div>
            <div>
              <h2>Role</h2>
              <p>UI / Visual designer</p>
            </div>
            <div>
              <h2>Timeline</h2>
              <p>VR education project</p>
            </div>
            <div>
              <h2>Skills</h2>
              <p>Visual design, 3D UI</p>
            </div>
          </div>
        </section>

        <section className={styles.caseGallery} aria-label="VR 教育软件截图">
          <div className={styles.caseGalleryInner}>
            {scenarioShots.map((shot, i) => (
              <article key={shot.src} className={styles.caseScenario}>
                <p className={styles.caseScenarioTitle}>Scenario {i + 1}</p>
                <figure>
                  <div className={styles.caseImageFrame}>
                    <Image src={shot.src} width={1920} height={1080} alt={`VR 教育 ${shot.title} ${shot.subtitle}`} />
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.caseContact}>
          <p>Curious for more details?</p>
          <span>Reach out and let us chat.</span>
          <a href="mailto:lijiaemin1993@gmail.com">lijiaemin1993@gmail.com</a>
          <Link className="buttonSticker buttonStickerOrange" href={localePath(locale, "/test/visual2")}>
            返回视觉作品
          </Link>
        </section>
      </main>
    </div>
  );
}
