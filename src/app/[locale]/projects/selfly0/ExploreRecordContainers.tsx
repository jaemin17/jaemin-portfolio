import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import styles from "./selfly0.module.css";

const containers = [
  {
    name: "清单",
    description: "适合归纳和持续补充",
    image: "/images/selfly0/record-container-list.webp",
    alt: "Selfly 清单容器界面，展示我的喜好列表",
  },
  {
    name: "日记",
    description: "适合记录感受和反思",
    image: "/images/selfly0/record-container-journal.webp",
    alt: "Selfly 日记容器界面，展示成功日记记录",
  },
  {
    name: "计划",
    description: "适合承接目标与行动",
    image: "/images/selfly0/record-container-plan.webp",
    alt: "Selfly 计划容器界面，展示年度目标列表",
  },
  {
    name: "图册",
    description: "适合表达愿景与想象",
    image: "/images/selfly0/record-container-board.webp",
    alt: "Selfly 图册容器界面，展示愿景板图片拼贴",
  },
] as const;

export function ExploreRecordContainers() {
  return (
    <figure className={styles.exploreRecordContainers} aria-label="Selfly Explore 四种记录容器界面占位">
      <div className={styles.exploreRecordContainersHeader}>
<h4 className={styles.exploreRecordContainersTitle}>四种容器，承接四种自我发现方式</h4>
      </div>
      <div className={styles.exploreRecordContainersGrid}>
        {containers.map((container) => (
          <div className={styles.exploreRecordContainerItem} key={container.name}>
            <div className={styles.exploreRecordContainerCopy}>
              <span className={styles.exploreRecordContainerName}>{container.name}</span>
              <span className={styles.exploreRecordContainerDescription}>{container.description}</span>
            </div>
            <div className={styles.exploreRecordContainerPhone} aria-label={`${container.name}界面占位`}>
              <Image
                src={assetPath(container.image)}
                alt={container.alt}
                width={600}
                height={1299}
                className={styles.exploreRecordContainerImage}
              />
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
