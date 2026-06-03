import Image from "next/image";
import styles from "../[slug]/project.module.css";
import { Selfly0ImageSlot } from "./Selfly0ImageSlot";

const sources = [
  { id: "list", label: "清单", tone: "#fff4d6" },
  { id: "plan", label: "计划", tone: "#e8f4ff" },
  { id: "journal", label: "日记", tone: "#ffe8dc" },
  { id: "board", label: "图册", tone: "#f3ecff" },
] as const;

const scopes = ["全部", "指定模块", "指定分类"] as const;

const avoided = ["连续打卡", "趋势统计", "完成率 KPI"] as const;

function ConvergeArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 6L10 12M4 14L10 8M10 10H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReviewRedistribution() {
  return (
    <figure
      className={styles.selfly0EvidenceCard}
      aria-label="Review 低压力回顾：跨模块再分发机制与每日卡片"
    >
      <p className={styles.selfly0EvidenceTitle}>跨模块再分发</p>

      <div className={styles.reviewRedistributionDiagram}>
        <div className={styles.reviewRedistributionSources}>
          {sources.map((item) => (
            <div
              key={item.id}
              className={styles.reviewRedistributionSource}
              style={{ background: item.tone }}
            >
              <span>{item.label}</span>
              <ConvergeArrow />
            </div>
          ))}
        </div>

        <div className={styles.reviewRedistributionHub}>
          <div className={styles.reviewRedistributionHubIcon}>
            <Image
              src="/images/selfly0/huigu.fill.svg"
              alt=""
              width={23}
              height={23}
              className={styles.reviewRedistributionHubIconImg}
            />
          </div>
          <div>
            <strong>Review · 每日卡片</strong>
            <p>从真实记录中抽取，轻量带回旧内容</p>
          </div>
        </div>

        <div className={styles.reviewRedistributionScopes} aria-label="回顾范围">
          {scopes.map((scope) => (
            <span key={scope} className={styles.reviewRedistributionScopePill}>
              {scope}
            </span>
          ))}
        </div>

        <p className={styles.reviewRedistributionAvoided}>
          <span className={styles.reviewRedistributionAvoidedLabel}>刻意弱化</span>
          {avoided.map((item) => (
            <span key={item} className={styles.reviewRedistributionAvoidedItem}>
              {item}
            </span>
          ))}
        </p>
      </div>

      <Selfly0ImageSlot
        src="/images/selfly0/review-daily-cards.png"
        alt="Review 每日卡片流与回顾范围筛选"
        brief="Review 页：每日卡片流，可见筛选（全部 / 模块 / 分类）"
      />

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>低压力回顾</span>
        <span>像翻阅旧笔记，而非数据中心</span>
      </figcaption>
    </figure>
  );
}
