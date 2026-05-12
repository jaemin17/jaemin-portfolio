import { SiteHeader } from "@/components/SiteHeader";
import styles from "./life.module.css";

const lifeSections = [
  {
    id: "handmade",
    title: "手作",
    description: "编织手绳、穿珠子、自己缝衣服。手上慢慢做出来的东西，会让我更留意材料、颜色和细节。",
    accent: "orange",
    items: ["编织手绳", "穿珠子", "缝衣服", "配色小样"],
  },
  {
    id: "learning",
    title: "正在学",
    description: "最近在慢慢学钢琴。它很考验耐心，也让我习惯接受一点点变好的过程。",
    accent: "green",
    items: ["钢琴练习", "谱子", "节奏", "片段记录"],
  },
  {
    id: "cat",
    title: "一起生活",
    description: "养了一只猫。很多日常的小观察，都是从和它一起生活开始的。",
    accent: "blue",
    items: ["猫", "晒太阳", "日常角落", "陪伴"],
  },
  {
    id: "outside",
    title: "到处看看",
    description: "旅行、看书，还有一些路上看到的小东西。它们和设计没有直接关系，但会影响我怎么看世界。",
    accent: "purple",
    items: ["旅行", "看书", "城市", "路上的颜色"],
  },
];

export default function LifePage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.wall} aria-labelledby="life-title">
          <header className={styles.intro}>
            <p className={styles.kicker}>不是设计方面的东西</p>
            <h1 id="life-title" className={styles.title}>
              非设计小事
            </h1>
            <p className={styles.lede}>这些不是作品项目，但它们也在塑造我看东西和动手做事的方式。</p>
          </header>

          <div className={styles.windowStack}>
            {lifeSections.map((section, sectionIndex) => (
              <section
                key={section.id}
                className={`${styles.window} ${styles[section.accent]}`}
                aria-labelledby={`${section.id}-title`}
              >
                <div className={styles.windowBar} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.windowBody}>
                  <div className={styles.sectionCopy}>
                    <span className={styles.sectionIndex}>{String(sectionIndex + 1).padStart(2, "0")}</span>
                    <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                      {section.title}
                    </h2>
                    <p className={styles.sectionDescription}>{section.description}</p>
                  </div>
                  <div className={styles.photoRail} aria-label={`${section.title}照片占位`}>
                    {section.items.map((item, itemIndex) => (
                      <article key={item} className={styles.photoCard}>
                        <div className={styles.photoPlaceholder} aria-hidden="true">
                          <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                        </div>
                        <p>{item}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
