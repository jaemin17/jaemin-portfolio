import Link from "next/link";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { StickerTitle } from "@/components/StickerTitle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <header className={styles.hero}>
          <StickerTitle className={styles.title} text="Jaemin" />
          <p className={styles.subtitle}>
            jaemin is a product designer (UI/UX) based in Seoul — this is an exhibition of my works :DDD
          </p>
          <p className={styles.tagline}>
            AI is smart enough. Let’s just point and talk to it ;) I use it to speed up research, writing, and iteration —
            and I use design to make the experience clearer, kinder, and shippable.
          </p>
          <div className={styles.heroLinks} aria-label="快速入口">
            <Link className={styles.quick} href="#project">
              Exhibition this way →
            </Link>
            <Link className={styles.quick} href="#about">
              Me →
            </Link>
            <a className={styles.quick} href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume →
            </a>
            <Link className={styles.quick} href="#where">
              Where →
            </Link>
          </div>
        </header>

        <section id="project" className={styles.section}>
          <h2 className={styles.h2}>Stuff I’ve done</h2>
          <p className={styles.smallLead}>
            During daylight hours I design products end-to-end: define the problem, map the flows, prototype, ship UI, and
            package launch assets. On the side, I like making interfaces a bit more joyful :D
          </p>
          <ol className={styles.workList}>
            {projects.map((p) => (
              <li key={p.slug} className={styles.workItem}>
                <Link className={styles.workLink} href={`/projects/${p.slug}`}>
                  <span className={styles.workTitle}>{p.title}</span>
                  <span className={styles.workMeta}>
                    {p.subtitle} <span className={styles.dot}>·</span>{" "}
                    {p.tags.slice(0, 3).join(", ")}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className={styles.section}>
          <h2 className={styles.h2}>Me</h2>
          <div className={styles.aboutGrid}>
            <div>
              <h3 className={styles.h3}>Who this</h3>
              <p className={styles.p}>
                Hello people, this is jaemin. I do product + interaction design, and I’m always trying to make complex
                things feel obvious.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>What purpose</h3>
              <p className={styles.p}>
                I care about “why” and “how we know”. I use AI to accelerate exploration — and I use IA, hierarchy, and
                usability to converge on decisions that actually ship.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>How good</h3>
              <p className={styles.p}>
                I can run the whole pipeline solo: problem → key task flows → prototypes → UI & system → handoff →
                launch-ready assets.
              </p>
            </div>
          </div>
        </section>

        <section id="where" className={styles.section}>
          <h2 className={styles.h2}>Where</h2>
          <div className={styles.whereRow}>
            <a className={styles.quick} href="mailto:you@example.com">
              you@example.com
            </a>
            <a className={styles.quick} href="https://github.com/jaemin17" target="_blank" rel="noreferrer">
              GitHub →
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>previous versions</h2>
          <p className={styles.smallLead}>
            This is a new version of my website. Some older experiments live elsewhere on the internet.
          </p>
          <div className={styles.whereRow}>
            <span className={styles.quick} aria-label="old portfolio coming soon">
              OLD PORTFOLIO (coming soon) →
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
