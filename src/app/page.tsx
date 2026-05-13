import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { projects } from "@/content/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { StickerTitle } from "@/components/StickerTitle";
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

const infoNotes = [
  {
    id: "about",
    index: "A1",
    title: "我是谁",
    body: "偏产品型的 UX/UI 设计师，也会自己做独立开发项目。",
  },
  {
    id: "focus",
    index: "A2",
    title: "我关注什么",
    body: "问题定义、任务流程、信息层级、可用性和可交付性。",
  },
  {
    id: "delivery",
    index: "A3",
    title: "我能交付什么",
    body: "问题拆解、关键任务流、原型、视觉设计、组件规范和交付素材。",
  },
  {
    id: "where",
    index: "A4",
    title: "联系",
    body: "Email: you@example.com · GitHub: jaemin17",
  },
];

const projectPhotoPlacements = ["topLeft", "topRight", "right"] as const;
const projectPhotoTones = ["warm", "sky", "lavender"] as const;
const infoPhotoPlacements = ["right", "left", "left", "topLeft"] as const;
const infoPhotoTones = ["sun", "mint", "lavender", "warm"] as const;

function photoClassName(base: string, value: string) {
  return styles[`${base}${value[0].toUpperCase()}${value.slice(1)}`];
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
  photo?: "me" | "cat" | "hangzhou" | "smile" | "project01";
}) {
  const Component = block ? "div" : "span";

  const imageWrapClass = [
    styles.hoverPolaroidImage,
    photo === "me" && styles.profileImage,
    photo === "cat" && styles.catImage,
    photo === "hangzhou" && styles.hangzhouHoverImage,
    photo === "smile" && styles.smileHoverImage,
    photo === "project01" && styles.project01HoverImage,
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
          ) : photo === "smile" ? (
            <Image
              className={styles.polaroidPhoto}
              src={asset("/images/smile-hover.jpg")}
              alt=""
              fill
              sizes="96px"
              unoptimized
            />
          ) : photo === "project01" ? (
            <Image
              className={styles.polaroidPhoto}
              src={asset("/images/project-01-hover.png")}
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
        <section className={styles.wall} aria-label="首页信息墙">
          <header className={styles.hero}>
            <div className={styles.heroTag} aria-label="status tag">
              <HoverPolaroid caption=":)" placement="left" tone="sun" photo="smile">
                <span className={styles.heroTagIcon} aria-hidden="true">
                  :)
                </span>
              </HoverPolaroid>
              <HoverPolaroid caption="hangzhou" placement="topRight" tone="mint" photo="hangzhou">
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
              </HoverPolaroid>
            </div>
            <StickerTitle
              className={styles.title}
              text="Jiamin Li"
              renderWord={(word, index, wordNode) => (
                <HoverPolaroid
                  caption={index === 0 ? "me" : "my cat"}
                  placement={index === 0 ? "topLeft" : "topRight"}
                  tone={index === 0 ? "warm" : "sky"}
                  photo={index === 0 ? "me" : "cat"}
                >
                  {wordNode}
                </HoverPolaroid>
              )}
            />
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
            <section id="project" className={styles.projectWall} aria-labelledby="project-title">
              <h2 id="project-title" className={styles.srOnly}>
                项目
              </h2>
              <ol className={styles.workList}>
                {projects.map((p, idx) => (
                  <li key={p.slug} className={styles.workItem}>
                    <Link className={styles.workLink} href={`/projects/${p.slug}`}>
                      <span className={styles.pin} aria-hidden="true" />
                      <HoverPolaroid
                        caption={`case ${String(idx + 1).padStart(2, "0")}`}
                        placement={projectPhotoPlacements[idx] ?? "right"}
                        tone={projectPhotoTones[idx] ?? "warm"}
                        focusable={false}
                        photo={idx === 0 ? "project01" : undefined}
                      >
                        <span className={styles.workNote}>
                          <span className={styles.workIndex}>{String(idx + 1).padStart(2, "0")}</span>
                          <span className={styles.workTitle}>{p.title}</span>
                          <span className={styles.workMeta}>
                            <span className={styles.workSubtitle}>{p.subtitle}</span>
                            <span className={styles.workTags} aria-label="项目标签">
                              {p.tags.slice(0, 3).map((tag) => (
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

          <div id="about" className={styles.infoNotes} aria-label="关于我">
            {infoNotes.map((note) => (
              <Fragment key={note.id}>
                {note.id === "where" ? (
                  <article className={styles.lifeEntry}>
                    <span className={styles.pin} aria-hidden="true" />
                    <Link className={styles.lifeNote} href="/life">
                      <HoverPolaroid caption="life" placement="left" tone="mint" focusable={false}>
                        <span className={styles.workIndex}>B1</span>
                        <span className={styles.infoTitle}>非设计小事</span>
                        <span className={styles.infoBody}>手绳 / 钢琴 / 猫 / 旅行</span>
                      </HoverPolaroid>
                    </Link>
                  </article>
                ) : null}
                <article id={note.id} className={styles.infoItem}>
                  <span className={styles.pin} aria-hidden="true" />
                  {note.id === "about" ? (
                    <Link className={`${styles.infoNote} ${styles.infoNoteLink}`} href="/about">
                      <HoverPolaroid
                        caption={note.id}
                        placement={infoPhotoPlacements[0]}
                        tone={infoPhotoTones[0]}
                        focusable={false}
                      >
                        <span className={styles.workIndex}>{note.index}</span>
                        <span className={styles.infoTitle}>{note.title}</span>
                        <span className={styles.infoBody}>{note.body}</span>
                      </HoverPolaroid>
                    </Link>
                  ) : (
                    <span className={styles.infoNote}>
                      <HoverPolaroid
                        caption={note.id}
                        placement={infoPhotoPlacements[Math.max(0, Number(note.index.slice(1)) - 1)] ?? "right"}
                        tone={infoPhotoTones[Math.max(0, Number(note.index.slice(1)) - 1)] ?? "warm"}
                      >
                        <span className={styles.workIndex}>{note.index}</span>
                        <span className={styles.infoTitle}>{note.title}</span>
                        <span className={styles.infoBody}>{note.body}</span>
                      </HoverPolaroid>
                    </span>
                  )}
                </article>
              </Fragment>
            ))}
          </div>

          <div className={styles.bottomKeepsakes} aria-label="底部时间">
            <TodayStamp />
          </div>
        </section>
      </main>
    </>
  );
}
