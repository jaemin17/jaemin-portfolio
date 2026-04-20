export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  timeframe: string;
  role: string;
  tags: string[];
  highlights: string[];
  sections: Array<{
    title: string;
    bullets?: string[];
    paragraphs?: string[];
  }>;
};

export const projects: Project[] = [
  {
    slug: "ai-app-0-to-launch",
    title: "AI 辅助独立完成：APP 从 0 到上架",
    subtitle: "从“想法”到“可下载”：需求、流程、UI、规范、迭代、上架物料一条龙",
    timeframe: "2026",
    role: "独立产品设计师（AI 作为加速器）",
    tags: ["UIUX", "产品策略", "设计系统", "AI 工作流", "上架交付"],
    highlights: [
      "从 0 到 1：把模糊需求拆成可验证目标 + 关键任务流",
      "从乱到稳：用组件/规范把迭代速度拉起来（还不丑）",
      "从设计到上架：截图、文案、描述、交付清单一次配齐",
    ],
    sections: [
      {
        title: "项目概览",
        paragraphs: [
          "这是一个我以“独立交付 + 可上架”为目标的 APP 项目。我把 AI 当作研究、写作、发散与校对的加速器；但关键决策（用户价值、流程取舍、信息层级、视觉一致性）由我主导。",
        ],
      },
      {
        title: "问题与目标",
        bullets: [
          "要解决的核心问题：用一句话写清楚（例如：用户在 ___ 场景下很难 ___）",
          "目标用户：谁、在什么场景、为什么需要它",
          "成功指标：例如激活率、留存、转化、任务完成时间等（没有数据也可用可验证目标替代）",
        ],
      },
      {
        title: "过程（建议按时间线）",
        bullets: [
          "调研：竞品对比、用户访谈/问卷、痛点归纳（AI 用于快速归纳与生成假设）",
          "定义：用户旅程、信息架构、关键任务流",
          "原型：低保真→高保真，关键页面与状态（空态/错误态/加载态）",
          "视觉与规范：字体/色彩/间距/组件（按钮、输入、卡片、列表、弹窗）",
          "可用性验证：走查或小范围测试，记录问题与迭代",
        ],
      },
      {
        title: "结果与交付",
        bullets: [
          "上架交付：应用描述、关键词、截图规范、icon/启动图、隐私说明等",
          "最终产物：Figma 文件结构、组件库、标注/切图规范、交付清单",
          "复盘：哪些决策最有效，哪些假设被证伪，下一步计划是什么",
        ],
      },
    ],
  },
  {
    slug: "project-b",
    title: "项目二（占位）",
    subtitle: "用来展示另一种能力：例如 B 端复杂流程 / 数据可视化 / 设计系统",
    timeframe: "2025",
    role: "产品设计师",
    tags: ["ToB", "信息架构", "复杂流程"],
    highlights: ["一句话成果 1", "一句话成果 2", "一句话成果 3"],
    sections: [
      {
        title: "项目概览",
        paragraphs: ["把这个项目替换成你的真实项目：强调背景、约束与成果。"],
      },
    ],
  },
  {
    slug: "project-c",
    title: "项目三（占位）",
    subtitle: "用来展示审美与表达：品牌/活动页/概念项目也可以",
    timeframe: "2025",
    role: "产品设计师",
    tags: ["视觉表现", "叙事", "动效（可选）"],
    highlights: ["一句话亮点 1", "一句话亮点 2", "一句话亮点 3"],
    sections: [
      {
        title: "项目概览",
        paragraphs: ["把这个项目替换成你的真实项目：保持结构清晰、图文节奏舒服。"],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
