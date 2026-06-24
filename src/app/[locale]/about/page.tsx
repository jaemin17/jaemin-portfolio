import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { about2Email, about2PdfUrl, getAbout2Copy } from "./content";
import styles from "./about.module.css";

type About2PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function About2Page({ params }: About2PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const about2Copy = getAbout2Copy(locale);

  return (
    <div className={styles.shell} data-page="about">
      <SiteHeader locale={locale} active="about" surface="white" />
      <main className={styles.main}>
          <section className={styles.section} aria-label="About intro">
            <div className={styles.container}>
              <div className={styles.introGrid}>
                <div className={styles.introText}>
                  <h2 className={styles.heroTitle}>{about2Copy.heroTitle}</h2>
                  {locale === "zh" ? (
                    <>
                      <p className={styles.text}>我是一个喜欢<span className={styles.highlight}>从真实问题出发</span>做产品的 UI/UX 设计师。</p>
                      <p className={styles.text}>我喜欢<span className={styles.highlight}>先把东西做出来</span>，<span className={styles.highlight}>在真实体验中寻找答案</span>。我喜欢尝试不同的解决方案。每次设计对我来说，都是一次重新理解用户和产品的过程。</p>
                      <p className={styles.text}>我希望做出的产品<span className={styles.highlight}>让人感到自然和舒服</span>。我喜欢和别人讨论想法，在交流中发现新的可能。</p>
                      <p className={styles.text}>在日常生活中，我喜欢<span className={styles.highlight}>亲手制作喜欢的东西、探索不同材质</span>，把脑海中的想法一点点变成真实的作品。</p>
                    </>
                  ) : (
                    about2Copy.introBio.split("\n\n").map((para, i) => (
                      <p key={i} className={styles.text}>{para}</p>
                    ))
                  )}
                  <p className={`${styles.text} ${styles.textCta}`}>
                    {about2Copy.introCtaPrefix}
                    <br />
                    <Link className={styles.pdfLink} href={about2PdfUrl} target="_blank" rel="noreferrer">
                      {about2Copy.pdfLinkLabel}
                    </Link>
                  </p>
                </div>
                <Image
                  className={styles.illustration}
                  src={assetPath("/images/aboutme.svg")}
                  alt=""
                  width={420}
                  height={420}
                  priority
                />
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.container}>
              <div className={styles.skillsGrid}>
                <div className={styles.sectionTitleCol}>
                  <h3 className={styles.sectionTitle}>{about2Copy.sectionWhatIDo}</h3>
                </div>
                <div className={styles.skillsColumns}>
                  <div className={styles.skillsCol}>
                    {about2Copy.skillsLeft.map((skill) => (
                      <p key={skill} className={styles.skillItem}>
                        {skill}
                      </p>
                    ))}
                  </div>
                  <div className={styles.skillsCol}>
                    {about2Copy.skillsRight.map((skill) => (
                      <p key={skill} className={styles.skillItem}>
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.container}>
              <div className={`${styles.skillsGrid} ${styles.skillsGridReversed}`}>
                <div className={styles.cardStack}>
                  {about2Copy.superpowers.map((item) => (
                    <article key={item.title} className={styles.card}>
                      <div className={styles.cardTitle}>{item.title}</div>
                      <p className={styles.cardText}>{item.description}</p>
                    </article>
                  ))}
                </div>
                <div className={styles.sectionTitleCol}>
                  <h3 className={styles.sectionTitle}>{about2Copy.sectionSuperpower}</h3>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.container}>
              <div className={`${styles.skillsGrid} ${styles.skillsGridReversed}`}>
                <div className={styles.cardStack}>
                  {about2Copy.jobs.map((job) => (
                    <article key={job.company} className={styles.card}>
                      <div className={styles.cardTitle}>{job.company}</div>
                      <p className={styles.cardText}>{job.role} · {job.period}</p>
                    </article>
                  ))}
                </div>
                <div className={styles.sectionTitleCol}>
                  <h3 className={styles.sectionTitle}>{about2Copy.sectionExperience}</h3>
                  <p className={styles.text}>{about2Copy.experienceSummary}</p>
                </div>
              </div>
            </div>

            <div className={styles.divider} />
          </section>

          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <h1 className={styles.footerTitle}>{about2Copy.footerTitle}</h1>
              <p className={styles.footerLinkWrap}>
                <a className={styles.footerLink} href={`mailto:${about2Email}`}>
                  {about2Copy.footerEmailLabel}
                </a>
              </p>
            </div>
          </footer>
      </main>
    </div>
  );
}
