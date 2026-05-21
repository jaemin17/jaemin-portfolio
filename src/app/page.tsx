import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { StickerTitle } from "@/components/StickerTitle";
import { CursorSparkles } from "./CursorSparkles";
import { TodayStamp } from "./TodayStamp";
import styles from "./page.module.css";

/**
 * Public assets on GitHub Pages project sites live under `/{repo}/…`.
 * `next/image` + static export omits `basePath` on `<img src>`.
 * CI sets `NEXT_PUBLIC_*` in `.github/workflows/deploy-github-pages.yml` so the
 * prefix is inlined into static HTML (see `next.config.ts` `basePath` for the same rules).
 */
function staticExportAssetBase(): string {
  if (process.env.NEXT_PUBLIC_GITHUB_PAGES_BUILD === "true") {
    const repo = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY?.split("/")[1] ?? "";
    if (repo && !repo.endsWith(".github.io")) return `/${repo}`;
  }
  if (process.env.GITHUB_PAGES === "true") {
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
    if (repo && !repo.endsWith(".github.io")) return `/${repo}`;
  }
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

const asset = (path: string) => `${staticExportAssetBase()}${path}`;

const aboutNote = {
  id: "about",
  index: "A1",
  title: "我是谁",
  body: "偏产品型的 UX/UI 设计师，也会自己做独立开发项目。",
} as const;

const contactNote = {
  id: "where",
  index: "A4",
  title: "联系",
  body: "Email: you@example.com · GitHub: jaemin17",
} as const;

const projectPhotoPlacements = ["topLeft", "topRight", "right"] as const;
const projectPhotoTones = ["warm", "sky", "lavender"] as const;
const decorationShapes = [
  "✦",
  "★",
  "✸",
  "✿",
  "✽",
  "✦",
  "★",
  "✸",
  "✿",
  "✽",
  "✦",
  "★",
  "✸",
  "✿",
  "✽",
  "✦",
  "★",
  "✸",
  "✿",
  "✽",
] as const;

const homeEntries = [
  {
    href: "/projects/project-c",
    title: "独立开发 App",
    subtitle: "Selfly：从产品设计、SwiftUI 开发到 App Store 上线的完整 0→1 案例。",
    tags: ["Selfly", "0→1", "iOS"],
  },
  {
    href: "/test/tools",
    title: "工具类产品 UI/UX",
    subtitle: "XR / 3D / 多端协同工具：3D说明书、模型编辑器、Sync Space、VT-PPT 等。",
    tags: ["XR Tools", "3D", "B2B"],
  },
  {
    href: "/test/visual",
    title: "视觉作品",
    subtitle: "VR 教育软件、医学、动物、智能制造、汽车实训等 3D 视觉项目合集。",
    tags: ["VR Education", "Visual", "3D"],
  },
] as const;

function photoClassName(base: string, value: string) {
  return styles[`${base}${value[0].toUpperCase()}${value.slice(1)}`];
}

function ScatterPolaroid({
  className,
  caption,
  src,
  imageClassName,
}: {
  className: string;
  caption: string;
  src: string;
  imageClassName?: string;
}) {
  return (
    <figure className={`${styles.polaroid} ${className}`}>
      <span className={styles.polaroidTape} aria-hidden="true" />
      <span className={[styles.polaroidImage, imageClassName].filter(Boolean).join(" ")}>
        <Image className={styles.polaroidPhoto} src={src} alt="" fill sizes="116px" unoptimized />
      </span>
      <figcaption className={styles.polaroidCaption}>{caption}</figcaption>
    </figure>
  );
}

function HoverPolaroid({
  children,
  caption,
  placement = "right",
  tone = "warm",
  focusable = true,
  block = false,
  photo,
}: {
  children: ReactNode;
  caption: string;
  placement?: "topLeft" | "topRight" | "left" | "right" | "bottomRight";
  tone?: "warm" | "sky" | "mint" | "lavender" | "sun";
  focusable?: boolean;
  block?: boolean;
  photo?: "me" | "cat" | "hangzhou";
}) {
  const Component = block ? "div" : "span";

  if (!photo) return <>{children}</>;

  const imageWrapClass = [
    styles.hoverPolaroidImage,
    photo === "me" && styles.profileImage,
    photo === "cat" && styles.catImage,
    photo === "hangzhou" && styles.hangzhouHoverImage,
    photo && styles.hoverPolaroidImagePhoto,
  ]
    .filter(Boolean)
    .join(" ");

  const titlePhotoOffset = photo === "me" || photo === "cat";

  return (
    <Component className={styles.hoverPhotoAnchor} tabIndex={focusable ? 0 : undefined}>
      {children}
      <span
        className={[
          styles.hoverPolaroid,
          photoClassName("hoverPolaroid", placement),
          photoClassName("hoverPolaroidTone", tone),
          titlePhotoOffset ? styles.hoverPolaroidTitlePhotoPos : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      >
        <span className={styles.hoverPolaroidTape} />
        <span className={imageWrapClass}>
          {photo === "me" ? (
            <Image
              className={styles.polaroidPhoto}
              src={asset("/images/profile-polaroid.jpg")}
              alt=""
              fill
              sizes="96px"
              unoptimized
            />
          ) : photo === "cat" ? (
            <Image
              className={styles.polaroidPhoto}
              src={asset("/images/cat-polaroid.jpg")}
              alt=""
              fill
              sizes="96px"
              unoptimized
            />
          ) : photo === "hangzhou" ? (
            <Image
              className={styles.polaroidPhoto}
              src={asset("/images/hangzhou-hover.png")}
              alt=""
              fill
              sizes="96px"
              unoptimized
            />
          ) : null}
        </span>
        <span className={styles.hoverPolaroidCaption}>{caption}</span>
      </span>
    </Component>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <CursorSparkles />
        <section className={styles.wall} aria-label="首页信息墙">
          <div className={styles.decorations} aria-hidden="true">
            {decorationShapes.map((shape, index) => (
              <span key={index} className={styles.sparkle}>
                {shape}
              </span>
            ))}
          </div>
          <div className={styles.middleZone}>
            <div className={styles.middleScatter} aria-hidden="true">
              <ScatterPolaroid
                className={styles.scatterMe}
                caption="me"
                src={asset("/images/profile-polaroid.jpg")}
                imageClassName={styles.profileImage}
              />
              <ScatterPolaroid
                className={styles.scatterCat}
                caption="my cat"
                src={asset("/images/cat-polaroid.jpg")}
                imageClassName={styles.catImage}
              />
              <ScatterPolaroid
                className={styles.scatterHangzhou}
                caption="hangzhou"
                src={asset("/images/hangzhou-hover.png")}
                imageClassName={styles.hangzhouScatterImage}
              />
            </div>
          <header className={styles.hero}>
            <div className={styles.heroTag} aria-label="status tag">
              <HoverPolaroid caption=":)" placement="left" tone="sun">
                <span className={styles.heroTagIcon} aria-hidden="true">
                  :)
                </span>
              </HoverPolaroid>
              <span className={styles.heroTagPill}>
                <svg className={styles.heroTagPlate} viewBox="0 0 220 52" aria-hidden="true">
                  <rect
                    x="8"
                    y="16"
                    width="206"
                    height="34"
                    rx="17"
                    fill="rgba(0, 0, 0, 0.16)"
                    transform="rotate(-1 110 33)"
                  />
                  <rect
                    x="7"
                    y="8"
                    width="206"
                    height="34"
                    rx="17"
                    fill="#f6682f"
                    stroke="#0b0b0b"
                    strokeWidth="1"
                    transform="rotate(-1 110 25)"
                  />
                </svg>
                <span className={styles.heroTagText}>Hangzhou · Open to work</span>
              </span>
            </div>
            <StickerTitle className={styles.title} text="Jiamin Li" />
            <div className={styles.stickerSubWrap} aria-label="identity stickers">
              <HoverPolaroid caption="0 to 1" placement="bottomRight" tone="sun">
                <span className={styles.stickerSub}>
                  <svg className={styles.stickerSubPlate} viewBox="0 0 382 88" aria-hidden="true">
                    <rect
                      x="12"
                      y="20"
                      width="358"
                      height="58"
                      rx="18"
                      fill="rgba(0, 0, 0, 0.18)"
                      transform="rotate(-2 191 49)"
                    />
                    <rect
                      x="10"
                      y="9"
                      width="358"
                      height="58"
                      rx="18"
                      fill="#ff9e1d"
                      stroke="#0b0b0b"
                      strokeWidth="2"
                      transform="rotate(-2 191 38)"
                    />
                  </svg>
                  <span className={styles.stickerSubText}>产品设计 · 独立开发（0→1）</span>
                </span>
              </HoverPolaroid>
            </div>
            <div className={styles.heroIllustration} aria-hidden="true">
              <Image
                className={styles.heroIllustrationImage}
                src={asset("/images/stormy-illustration.svg")}
                alt=""
                width={390}
                height={390}
                priority
                unoptimized
              />
            </div>
            <section id="project" className={styles.projectWall} aria-labelledby="project-title">
              <h2 id="project-title" className={styles.srOnly}>
                项目
              </h2>
              <ol className={styles.workList}>
                {homeEntries.map((entry, idx) => (
                  <li key={entry.href} className={styles.workItem}>
                    <Link className={styles.workLink} href={entry.href}>
                      <span className={styles.pin} aria-hidden="true" />
                      <HoverPolaroid
                        caption={`case ${String(idx + 1).padStart(2, "0")}`}
                        placement={projectPhotoPlacements[idx] ?? "right"}
                        tone={projectPhotoTones[idx] ?? "warm"}
                        focusable={false}
                      >
                        <span className={styles.workNote}>
                          <span className={styles.workIndex}>{String(idx + 1).padStart(2, "0")}</span>
                          <span className={styles.workTitle}>{entry.title}</span>
                          <span className={styles.workMeta}>
                            <span className={styles.workSubtitle}>{entry.subtitle}</span>
                            <span className={styles.workTags} aria-label="项目标签">
                              {entry.tags.map((tag) => (
                                <span key={tag} className={styles.workTag}>
                                  {tag}
                                </span>
                              ))}
                            </span>
                          </span>
                        </span>
                      </HoverPolaroid>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          </header>
          </div>

          <div className={styles.bottomKeepsakes} aria-label="底部信息">
            <article id={aboutNote.id} className={`${styles.infoItem} ${styles.bottomAboutEntry}`}>
              <span className={styles.pin} aria-hidden="true" />
              <Link className={`${styles.infoNote} ${styles.infoNoteLink}`} href="/about">
                <HoverPolaroid caption={aboutNote.id} placement="left" tone="sun" focusable={false}>
                  <span className={styles.workIndex}>{aboutNote.index}</span>
                  <span className={styles.infoTitle}>{aboutNote.title}</span>
                  <span className={styles.infoBody}>{aboutNote.body}</span>
                </HoverPolaroid>
              </Link>
            </article>
            <article className={`${styles.lifeEntry} ${styles.bottomLifeEntry}`}>
              <span className={styles.pin} aria-hidden="true" />
              <Link className={styles.lifeNote} href="/life">
                <HoverPolaroid caption="life" placement="left" tone="mint" focusable={false}>
                  <span className={styles.workIndex}>B1</span>
                  <span className={styles.infoTitle}>非设计小事</span>
                  <span className={styles.infoBody}>手绳 / 钢琴 / 猫 / 旅行</span>
                </HoverPolaroid>
              </Link>
            </article>
            <article id={contactNote.id} className={`${styles.infoItem} ${styles.bottomContactEntry}`}>
              <span className={styles.pin} aria-hidden="true" />
              <span className={styles.infoNote}>
                <HoverPolaroid caption={contactNote.id} placement="right" tone="warm">
                  <span className={styles.workIndex}>{contactNote.index}</span>
                  <span className={styles.infoTitle}>{contactNote.title}</span>
                  <span className={styles.infoBody}>{contactNote.body}</span>
                </HoverPolaroid>
              </span>
            </article>
            <TodayStamp />
          </div>
        </section>
      </main>
    </>
  );
}
