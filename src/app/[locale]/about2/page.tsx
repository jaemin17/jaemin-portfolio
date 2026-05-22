import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import styles from "./about.module.css";

const pdfUrl =
  "https://drive.google.com/file/d/1QowvXwQdM2GcpHMw60DGumxEhw75aBfT/view?usp=sharing";
const email = "lijaemin1993@gmail.com";

const skillsLeft = [
  "User Experience",
  "UI Design",
  "Graphic Design",
  "Prototyping",
];

const skillsRight = [
  "Systems Thinking",
  "Creative Thinking",
  "Design System Development",
];

const superpowers = [
  {
    title: "Take initiative",
    description:
      "I love taking the lead, sharing well-prepared proposals to inspire and get everyone on board with exciting ideas.",
    period: "Apr 2016 — Mar 2017",
  },
  {
    title: "Navigate ambiguity",
    description:
      "I enjoy bringing people together by using clear communication to find common goals, especially when things are a bit uncertain.",
    period: "Apr 2016 — Mar 2017",
  },
  {
    title: "Exhibit adaptability",
    description:
      "I get a kick out of exploring different sides of myself when tackling various challenges and adapting to new environments.",
    period: "Apr 2016 — Mar 2017",
  },
];

const jobs = [
  {
    company: "KMAX-ShenZhen",
    role: "UI/UX Designer",
    period: "Apr 2016 — Mar 2017",
  },
  {
    company: "VIA-Guangzhou",
    role: "UI Designer",
    period: "Apr 2016 — Mar 2017",
  },
  {
    company: "ISAR-Beijing",
    role: "Visual and UX Designer",
    period: "Apr 2016 — Mar 2017",
  },
];

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
                  <p className={styles.label}>Hey there!</p>
                  <h2 className={styles.heroTitle}>Who am I？</h2>
                  <p className={styles.text}>
                    I&apos;m a User Experience Product Designer based in Hangzhou. I
                    focus on blending technology and aesthetics to create intuitive
                    and appealing user interfaces. In this dynamic city, I draw
                    constant inspiration, eager to bring unique design solutions to
                    your projects, I like to build for the web and make things
                    pretty.
                    <br />
                    <br />
                    Looking for a more detailed self intro?{" "}
                    <Link className={styles.pdfLink} href={pdfUrl} target="_blank" rel="noreferrer">
                      Maybe this PDF will do ✰
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
                  <h3 className={styles.sectionTitle}>What I do</h3>
                </div>
                <div className={styles.skillsColumns}>
                  <div className={styles.skillsCol}>
                    {skillsLeft.map((skill) => (
                      <p key={skill} className={styles.skillItem}>
                        {skill}
                      </p>
                    ))}
                  </div>
                  <div className={styles.skillsCol}>
                    {skillsRight.map((skill) => (
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
                  {superpowers.map((item) => (
                    <article key={item.title} className={styles.card}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardText}>{item.description}</p>
                      <p className={styles.cardMeta}>{item.period}</p>
                    </article>
                  ))}
                </div>
                <div className={styles.sectionTitleCol}>
                  <h3 className={styles.sectionTitle}>Superpower</h3>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.container}>
              <div className={`${styles.skillsGrid} ${styles.skillsGridReversed}`}>
                <div className={styles.cardStack}>
                  {jobs.map((job) => (
                    <article key={job.company} className={styles.card}>
                      <h3 className={styles.cardTitle}>{job.company}</h3>
                      <p className={styles.cardText}>{job.role}</p>
                      <p className={styles.cardMeta}>{job.period}</p>
                    </article>
                  ))}
                </div>
                <div className={styles.sectionTitleCol}>
                  <h3 className={styles.sectionTitle}>My experience</h3>
                  <p className={styles.text}>
                    I&apos;ve designed products for China Mobile, Haier, Desay SV
                    Automotive, and General Electric Appliances. I also led VR
                    education platform and software design.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.divider} />
          </section>

          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <h1 className={styles.footerTitle}>
                I&apos;d love to meet you :) ✰.
              </h1>
              <p className={styles.footerLinkWrap}>
                <a className={styles.footerLink} href={`mailto:${email}`}>
                  → Email
                </a>
              </p>
            </div>
          </footer>
      </main>
    </div>
  );
}
