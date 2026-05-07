export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  timeframe: string;
  role: string;
  tags: string[];
  highlights: string[];
  featured?: {
    eyebrow: string;
    origin: string;
    problem: string;
    visualLabel: string;
    visualNotes: string[];
    strategy: Array<{
      title: string;
      principle: string;
      description: string;
    }>;
    uxDecisions: string[];
    implementation: string[];
    reflection: string[];
    visualSections: Array<{
      label: string;
      title: string;
      body: string;
      notes: string[];
      visual: "overview" | "structure" | "focus" | "modules" | "review" | "build";
    }>;
  };
  sections: Array<{
    title: string;
    bullets?: string[];
    paragraphs?: string[];
  }>;
};

export const projects: Project[] = [
  {
    slug: "selfly-ios-app",
    title: "Selfly：从 0 到 1 设计并开发一款有温度的自我记录 App",
    subtitle: "一款面向自我观察和每日聚焦的 iOS App，帮助用户记录重要的事、整理关于自己的想法，并在回顾中重新看见自己。",
    timeframe: "2025–2026",
    role: "Solo product designer & iOS developer",
    tags: ["UX Design", "Product Design", "iOS", "SwiftUI", "0→1"],
    highlights: [
      "从个人真实需求出发，把“更温柔地理解自己”转化为 Today / Explore / Review 的产品结构。",
      "设计 Top 3、模块化记录和卡片式回顾，让自我记录不变成另一个待办清单。",
      "独立完成 SwiftUI、SwiftData、iCloud 同步、订阅和多语言等真实 App 落地工作。",
    ],
    featured: {
      eyebrow: "Featured UX case study",
      origin:
        "Selfly 起源于我自己的需求：我想要一个更温柔地理解自己的地方。它可以容纳每天最重要的事、零散的观察、日记、计划和视觉灵感，但不会把自我探索变成又一个冷冰冰的效率清单。",
      problem:
        "我们如何帮助用户持续看见自己在意的事，而不是把自我记录变成另一个待办清单？",
      visualLabel: "App experience map",
      visualNotes: ["Today · Top 3", "Explore · 多种记录模块", "Review · 卡片式回顾"],
      strategy: [
        {
          title: "今日",
          principle: "Focus, but not pressure",
          description:
            "今日页只强调最重要的三件事，而不是无限增长的任务列表。Top 3 的限制让用户更容易聚焦，也减少了被任务压迫的感觉。",
        },
        {
          title: "探索",
          principle: "Record in different forms",
          description:
            "自我记录不只有一种形式。Selfly 用清单、计划、图册和日记承载不同类型的想法，也提供灵感模板帮助用户开始。",
        },
        {
          title: "回顾",
          principle: "Return to yourself",
          description:
            "记录不是结束。回顾页把过去写下的内容重新组织成卡片，让用户可以轻松翻看、重新连接自己的想法和经历。",
        },
      ],
      uxDecisions: [
        "用 Top 3 替代普通待办列表，强调选择和聚焦，而不是堆积任务。",
        "用模块化记录承载不同类型的自我探索，避免把所有内容塞进同一个输入框。",
        "用卡片式回顾让记录重新出现，帮助用户从过去的内容中理解自己。",
        "视觉上使用柔和色彩、轻量反馈和温暖的空状态，让 App 不像工具，更像一个可以长期回来的地方。",
      ],
      implementation: [
        "使用 SwiftUI 完成主要界面和交互。",
        "使用 SwiftData 建立任务、记录模块、日记、图册和归档的数据模型。",
        "加入 iCloud 同步、数据重置、多语言切换和 StoreKit 订阅，让设计成为真实可用的产品。",
      ],
      reflection: [
        "Selfly 让我更明确地意识到，产品的“感觉”不是表层装饰。对于自我记录类产品来说，用户是否愿意回来，取决于产品是否让人感到安全、轻松和被陪伴。",
        "这个项目也训练了我从模糊感受出发，持续拆解问题、做出设计判断，并把想法推进到真实产品的能力。",
      ],
      visualSections: [
        {
          label: "概览",
          title: "一个不把自我记录变成待办清单的产品",
          body: "Selfly 的核心不是让用户完成更多任务，而是帮助用户持续看见自己在意的事。页面节奏围绕“记录、整理、回看”展开，让自我观察变得轻一点。",
          notes: ["个人需求出发", "温柔、安静、有陪伴感", "从想法推进到真实 App"],
          visual: "overview",
        },
        {
          label: "产品结构",
          title: "用 Today / Explore / Review 建立清晰路径",
          body: "我把 Selfly 拆成三个稳定入口：今日负责聚焦，探索负责承载不同形式的记录，回顾负责把过去的内容重新带回用户面前。",
          notes: ["Today: Focus, but not pressure", "Explore: Record in different forms", "Review: Return to yourself"],
          visual: "structure",
        },
        {
          label: "关键决策 01",
          title: "Top 3 限制让今日页更轻，而不是更满",
          body: "我没有把首页设计成无限任务列表，而是让用户只选择三件最重要的事。限制本身就是设计：它减少压力，也让用户更容易判断什么真正重要。",
          notes: ["减少任务堆积", "强调选择", "保留完成反馈"],
          visual: "focus",
        },
        {
          label: "关键决策 02",
          title: "模块化记录让不同类型的想法有不同容器",
          body: "自我记录不只有长文字。Selfly 支持清单、计划、日记和图册，也提供灵感模板，让用户可以用更贴近内容本身的方式开始记录。",
          notes: ["清单 / 计划 / 日记 / 图册", "灵感模板", "自定义模块"],
          visual: "modules",
        },
        {
          label: "关键决策 03",
          title: "回顾不是统计，而是重新看见自己",
          body: "回顾页用卡片把过去写下的内容重新组织出来。它不是一个数据报表，而是让用户在轻松翻看中重新连接自己的想法和经历。",
          notes: ["卡片式浏览", "低压力回看", "记录变成理解自己的材料"],
          visual: "review",
        },
        {
          label: "落地",
          title: "把有温度的体验做成真实可用的 iOS App",
          body: "为了让体验成立，我也完成了 SwiftUI 界面、SwiftData 数据模型、iCloud 同步、StoreKit 订阅、多语言和数据重置等真实产品能力。",
          notes: ["SwiftUI", "SwiftData + iCloud", "StoreKit / 多语言 / 数据迁移"],
          visual: "build",
        },
      ],
    },
    sections: [
      {
        title: "项目简介",
        paragraphs: [
          "Selfly 是一个面向自我观察和个人成长的 iOS App。它不是传统待办工具，而是把每日重点、长期自我记录、愿景板、日记和回顾串成一个连续体验。",
        ],
      },
    ],
  },
  {
    slug: "project-b",
    title: "Project B (placeholder)",
    subtitle: "Use this to show a different strength: complex B2B flows, dashboards, or systems thinking",
    timeframe: "2025",
    role: "Product designer",
    tags: ["B2B", "Information architecture", "Complex flows"],
    highlights: ["One-line outcome 1", "One-line outcome 2", "One-line outcome 3"],
    sections: [
      {
        title: "Overview",
        paragraphs: ["Replace this with a real project. Emphasize context, constraints, and results."],
      },
    ],
  },
  {
    slug: "project-c",
    title: "Project C (placeholder)",
    subtitle: "Show taste & storytelling: brand, campaign, or a concept project is fine",
    timeframe: "2025",
    role: "Product designer",
    tags: ["Visual craft", "Narrative", "Motion (optional)"],
    highlights: ["One-line highlight 1", "One-line highlight 2", "One-line highlight 3"],
    sections: [
      {
        title: "Overview",
        paragraphs: ["Replace this with a real project. Keep structure clear and the pacing crisp."],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
