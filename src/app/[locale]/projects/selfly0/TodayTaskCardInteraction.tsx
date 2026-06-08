import styles from "../[slug]/project.module.css";

const arrow = (
  <svg width="101" height="24" viewBox="0 0 101 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 8.83373C2.57145 8.83373 2.64291 8.83373 18.6572 8.86261C34.6715 8.89149 66.6266 8.94925 82.8399 8.92303C99.0533 8.89681 98.5567 8.78487 94.2751 7.46963C89.9935 6.15438 81.9419 3.63923 79.0663 2.52903C78.3106 2.23727 87.2513 4.13874 95.8585 7.27645C98.634 8.28827 97.9217 8.763 94.7819 10.3823C91.6421 12.0016 86.0312 14.9151 82.3691 16.9772C78.707 19.0393 77.1636 20.1618 75.3912 21.4138"
      stroke="#FFA84A"
      strokeLinecap="round"
      strokeWidth="5"
    />
  </svg>
);

function OldTaskCard() {
  return (
    <div className={styles.todayTaskSemanticPhone}>
      <p className={styles.todayTaskSemanticPhoneTitle}>Today</p>
      <div className={styles.todayTaskSemanticOldCard}>
        <span className={styles.todayTaskSemanticCheckbox} aria-hidden="true" />
        <span className={styles.todayTaskSemanticTaskText}>写作品集结构</span>
      </div>
      <p className={styles.todayTaskSemanticIssue}>想修改文字时，也可能触发完成</p>
    </div>
  );
}

function NewTaskCard() {
  return (
    <div className={styles.todayTaskSemanticPhone}>
      <p className={styles.todayTaskSemanticPhoneTitle}>Today</p>
      <div className={styles.todayTaskSemanticNewCard}>
        <span className={styles.todayTaskSemanticContentZone}>
          <span className={styles.todayTaskSemanticTaskText}>写作品集结构</span>
          <span className={styles.todayTaskSemanticZoneLabel}>内容区：进入编辑</span>
        </span>
        <span className={styles.todayTaskSemanticCompleteZone}>
          <span className={styles.todayTaskSemanticCheckbox} aria-hidden="true" />
          <span className={styles.todayTaskSemanticZoneLabel}>完成</span>
        </span>
      </div>
    </div>
  );
}

export function TodayTaskCardInteraction() {
  return (
    <figure
      className={`${styles.positioningDiagram} ${styles.todayTaskSemanticFigure}`}
      aria-label="Selfly Today 任务卡片交互：从整卡完成到内容与状态分区"
    >
      <div className={styles.positioningDiagramFlow}>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造前</span>
          <div className={styles.positioningDiagramCopy}>
            <p className={styles.positioningDiagramCaption}>整卡点击 = 完成</p>
            <p className={styles.positioningDiagramDescription}>一个卡片同时承载编辑和完成意图</p>
          </div>
          <OldTaskCard />
        </div>

        <div className={styles.positioningDiagramArrow} aria-hidden="true">
          {arrow}
        </div>

        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造后</span>
          <div className={styles.positioningDiagramCopy}>
            <p className={styles.positioningDiagramCaption}>主体编辑 / 方块完成</p>
            <p className={styles.positioningDiagramDescription}>内容入口与状态操作拆成两个区域</p>
          </div>
          <NewTaskCard />
        </div>
      </div>
    </figure>
  );
}
