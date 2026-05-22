import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { about2Copy, about2Email, about2PdfUrl } from "./content";
import styles from "./about.module.css";

type About2PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function About2Page({ params }: About2PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={styles.shell} data-page="about2">
      <SiteHeader locale={locale} active="about2" surface="white" />
      <main className={styles.main}>
          <section className={styles.section} aria-label="About intro">
            <div className={styles.container}>
              <div className={styles.introGrid}>
                <div className={styles.introText}>
                  <p className={styles.label}>{about2Copy.label}</p>
                  <h2 className={styles.heroTitle}>{about2Copy.heroTitle}</h2>
                  <p className={styles.text}>
                    {about2Copy.introBio}
                    <br />
                    <br />
                    {about2Copy.introCtaPrefix}
                    <br />
                    <Link className={styles.pdfLink} href={about2PdfUrl} target="_blank" rel="noreferrer">
                      {about2Copy.pdfLinkLabel}
                    </Link>
                  </p>
                </div>
                <Image
                  className={styles.illustration}
                  src="/images/aboutme.svg"
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
                      <p className={styles.cardText}>{job.role}</p>
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
