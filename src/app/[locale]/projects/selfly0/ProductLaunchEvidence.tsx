import styles from "../[slug]/project.module.css";
import { Selfly0ImageSlot } from "./Selfly0ImageSlot";

const capabilities = [
  {
    id: "swiftui",
    title: "SwiftUI 界面",
    detail: "设计稿到可交互界面",
  },
  {
    id: "swiftdata",
    title: "SwiftData",
    detail: "本地数据模型与关系",
  },
  {
    id: "icloud",
    title: "iCloud 同步",
    detail: "多设备记录一致",
  },
  {
    id: "storekit",
    title: "StoreKit 订阅",
    detail: "付费与恢复购买",
  },
  {
    id: "i18n",
    title: "多语言",
    detail: "界面与内容承载",
  },
  {
    id: "polish",
    title: "体验边界校准",
    detail: "长文本、状态与反馈",
  },
] as const;

export function ProductLaunchEvidence() {
  return (
    <figure
      className={styles.selfly0EvidenceCard}
      aria-label="Selfly iOS 产品化落地能力"
    >
      <p className={styles.selfly0EvidenceTitle}>从设计到可运行产品</p>

      <ul className={styles.productLaunchGrid}>
        {capabilities.map((item) => (
          <li key={item.id} className={styles.productLaunchCard}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>

      <Selfly0ImageSlot
        src="/images/selfly0/launch-implementation.png"
        alt="Selfly iOS 实现界面：复杂交互或数据能力示例"
        brief="任选一张能体现「真实可用」的界面：长文编辑、同步/订阅、或多语言"
      />

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>产品化落地</span>
        <span>设计方案在 SwiftUI 与系统能力中验证</span>
      </figcaption>
    </figure>
  );
}
