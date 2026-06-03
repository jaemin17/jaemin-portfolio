import Image from "next/image";
import styles from "../[slug]/project.module.css";

const tabs = [
  {
    id: "today",
    role: "当下",
    name: "Today",
    goal: "聚焦当下",
    icon: "/images/selfly0/jinri.svg",
    width: 20,
    height: 19,
  },
  {
    id: "explore",
    role: "记录",
    name: "Explore",
    goal: "按内容选容器",
    icon: "/images/selfly0/tansuo.svg",
    width: 23,
    height: 25,
  },
  {
    id: "review",
    role: "回看",
    name: "Review",
    goal: "把旧内容带回",
    icon: "/images/selfly0/huigu.fill.svg",
    width: 23,
    height: 23,
  },
] as const;

function FlowArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="16"
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 8H24M24 8L18 3.5M24 8L18 12.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LoopArc() {
  return (
    <svg
      className={styles.tabStructureLoopArc}
      viewBox="0 0 640 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M48 12C120 44 520 44 592 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 7"
      />
      <path
        d="M584 10L592 12L586 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TabStructureDiagram() {
  return (
    <figure
      className={styles.tabStructureDiagram}
      aria-labelledby="selfly0-tab-structure-label"
      aria-describedby="selfly0-tab-structure-cycle"
    >
      <p id="selfly0-tab-structure-label" className={styles.tabStructureLabel}>
        三个 Tab
      </p>
      <div className={styles.tabStructureTrack}>
        {tabs.map((tab, index) => (
          <div key={tab.id} className={styles.tabStructureStep}>
            <article className={styles.tabStructureNode}>
              <span className={styles.tabStructureRole}>{tab.role}</span>
              <div className={styles.tabStructureIconWrap}>
                <Image
                  src={tab.icon}
                  alt=""
                  width={tab.width}
                  height={tab.height}
                  className={styles.tabStructureIcon}
                />
              </div>
              <h4 className={styles.tabStructureName}>{tab.name}</h4>
              <p className={styles.tabStructureGoal}>{tab.goal}</p>
            </article>
            {index < tabs.length - 1 ? (
              <div className={styles.tabStructureConnector}>
                <FlowArrow className={styles.tabStructureFlowArrow} />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <LoopArc />

      <figcaption className={styles.tabStructureFooter}>
        <p id="selfly0-tab-structure-cycle" className={styles.tabStructureCycle}>
          <span className={styles.tabStructureCycleLabel}>日常循环</span>
          <span className={styles.tabStructureCyclePath}>当下 → 记录 → 回看</span>
        </p>
      </figcaption>
    </figure>
  );
}
