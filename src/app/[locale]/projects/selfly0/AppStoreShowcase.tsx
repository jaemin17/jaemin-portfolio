import styles from "../[slug]/project.module.css";
import { Selfly0ImageSlot } from "./Selfly0ImageSlot";

const steps = [
  { id: "connect", label: "App Store Connect", detail: "应用信息、版本与构建" },
  { id: "review", label: "审核材料", detail: "描述、截图与演示账号" },
  { id: "privacy", label: "隐私与订阅", detail: "权限说明、订阅条款" },
  { id: "release", label: "提审与发布", detail: "反馈处理与版本上线" },
] as const;

export function AppStoreShowcase() {
  return (
    <figure className={styles.selfly0EvidenceCard} aria-label="Selfly App Store 上线流程">
      <p className={styles.selfly0EvidenceTitle}>上架路径</p>

      <ol className={styles.appStorePipeline}>
        {steps.map((step, index) => (
          <li key={step.id} className={styles.appStorePipelineStep}>
            <span className={styles.appStorePipelineIndex} aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <strong>{step.label}</strong>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <Selfly0ImageSlot
        src="/images/selfly0/app-store-listing.png"
        alt="Selfly 在 App Store 的产品页"
        brief="App Store 产品页截图（手机端或网页端均可，建议含名称与下载按钮）"
        variant="wide"
      />

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>App Store 上线</span>
        <span>从内部版本到可公开下载</span>
      </figcaption>
    </figure>
  );
}
