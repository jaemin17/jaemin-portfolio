export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cardTitle?: string;
  cardSubtitle?: string;
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
    appDownloadUrl?: string;
    visualSections: Array<{
      label: string;
      title: string;
      body: string;
      notes: string[];
      visual:
        | "overview"
        | "structure"
        | "focus"
        | "modules"
        | "review"
        | "build"
        | "completion"
        | "challenge"
        | "consolidation"
        | "templates"
        | "rhythm"
        | "shiftCards"
        | "shiftCompact";
      before?: string;
      after?: string;
      capability?: string;
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
    title: "Selfly：让记录不再变成压力",
    subtitle: "从 0 到 1 设计并开发一款有温度的自我记录 App",
    timeframe: "2025–2026",
    role: "Solo Product Designer & iOS Developer",
    tags: ["UX Design", "Product Design", "iOS", "SwiftUI", "0→1"],
    highlights: [
      "负责从产品定位、体验设计到 SwiftUI 开发与 App Store 上线的完整过程。",
      "用 Today / Explore / Review 三个入口建立“当下-记录-回看”的清晰节奏。",
      "通过 Top 3、模块化记录与低压力回顾，降低自我记录的使用负担。",
    ],
    featured: {
      eyebrow: "Featured UX Case Study",
      origin:
        "Selfly 起源于我自己的需求。我尝试过很多待办、笔记和日记产品，但它们大多围绕“完成更多事情”展开，记录久而久之也会变成压力。我想做的不是另一个效率工具，而是一个更轻、更安静、更像陪伴的记录产品：帮助用户整理状态、看见真正重要的事、留下零散但真实的想法，并在混乱生活里重新连接自己。",
      problem:
        "我们如何帮助用户持续看见自己真正关心的东西，而不是被“效率系统”进一步推着走？",
      visualLabel: "App experience map",
      visualNotes: ["Today · Focus", "Explore · Record", "Review · Return"],
      strategy: [
        {
          title: "今日",
          principle: "Focus, but not pressure",
          description:
            "Today 页负责帮助用户聚焦真正重要的事情。这里不是无限任务列表，而是一个更克制、低压力的每日入口。",
        },
        {
          title: "探索",
          principle: "Record in different forms",
          description:
            "Explore 承载不同形式的表达：清单、日记、计划、图册与灵感记录。记录方式应贴近内容本身，而不是强迫所有内容进入同一种结构。",
        },
        {
          title: "回顾",
          principle: "Return to yourself",
          description:
            "Review 不是统计中心，而是重新回到过去的入口。用户可以轻松翻看记录内容，重新连接自己的状态、情绪与想法。",
        },
      ],
      uxDecisions: [
        "Today 页最终只保留 Top 3、完成反馈和最轻量的任务结构，弱化无限待办和复杂计划系统。",
        "模块化记录不是追求“无限自由”，而是为不同内容提供“刚刚好的容器”，兼顾自由表达与可持续记录。",
        "Review 刻意弱化 KPI 感与连续性焦虑，采用卡片式结构和更轻的浏览节奏，避免回顾再次变成压力。",
        "“温柔感”来自系统设计：更低信息密度、更克制结构、更安静节奏、更轻反馈与更多留白。",
      ],
      implementation: [
        "独立完成 SwiftUI 界面实现，确保设计体验在真实交互中成立。",
        "基于 SwiftData 建立记录与回顾相关的数据模型，并实现数据迁移与重置。",
        "完成 iCloud 同步、StoreKit 订阅、多语言支持，以及 App Store 提交与审核处理。",
      ],
      reflection: [
        "Selfly 让我重新理解了“产品感觉”：它不是某一个功能，而是大量细微判断的累积。",
        "对于自我记录类产品，用户是否愿意长期回来，不取决于功能数量，而取决于是否感到安全、放松、被理解并愿意停留。",
        "这个项目也训练了我从模糊感受出发，逐步拆解问题、建立产品判断、完成设计取舍，并最终把它推进成真实可上线的产品。",
      ],
      appDownloadUrl: "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235",
      visualSections: [
        {
          label: "项目背景",
          title: "我想做的，不是另一个效率工具",
          body: "我希望 Selfly 帮助用户整理状态、看见真正重要的事，并保留那些零散但真实的想法。它不以“完成更多”为目标，而是让用户在生活里重新找到和自己的连接。",
          notes: ["从个人真实需求出发", "反对记录被效率化", "更轻、更安静、更像陪伴"],
          visual: "overview",
        },
        {
          label: "产品定位与结构",
          title: "Selfly 不想管理用户，而是陪伴用户",
          body: "我把产品拆成 Today / Explore / Review 三个长期稳定入口，分别对应当下、记录、回看。它们不是复杂信息层级，而是帮助用户持续看见自己关心事物的清晰节奏。",
          notes: ["Today: Focus, but not pressure", "Explore: Record in different forms", "Review: Return to yourself"],
          visual: "structure",
        },
        {
          label: "关键决策 01",
          title: "为什么 Today 页只保留 Top 3",
          body: "首页如果同时容纳更多待办、计划与快速记录，很快就会回到传统任务管理器。最终我只保留 Top 3、完成反馈和最轻任务结构，用克制换取聚焦与低压力体验。",
          notes: ["弱化无限待办", "弱化高密度信息", "限制本身就是设计"],
          visual: "focus",
        },
        {
          label: "关键决策 02",
          title: "为什么记录需要不同容器",
          body: "真实生活中的内容形态不同：有些是一句话，有些需要长文整理，有些更偏视觉表达。Selfly 通过清单、计划、日记、图册、灵感模板和自定义模块，让用户按内容本身选择记录方式。",
          notes: ["自由记录但不失序", "给内容匹配容器", "支持长期坚持"],
          visual: "modules",
        },
        {
          label: "关键决策 03",
          title: "为什么 Review 不做成数据中心",
          body: "我刻意弱化连续打卡、完成统计和趋势分析带来的焦虑，让回顾更像翻旧笔记：轻松浏览过去的自己，并重新理解曾经在意的事。",
          notes: ["弱化 KPI 感", "卡片式结构", "低压力回看节奏"],
          visual: "review",
        },
        {
          label: "从设计到真实产品",
          title: "把体验真正做成可上线的 App",
          body: "除了产品设计，我也独立完成 iOS 开发与上线过程，包括 SwiftUI、SwiftData、iCloud 同步、StoreKit、多语言、数据迁移与重置，以及 App Store 提交流程。",
          notes: ["温柔感是系统设计", "真实环境细节决定体验", "设计与工程一体化落地"],
          visual: "build",
        },
      ],
    },
    sections: [
      {
        title: "项目说明",
        paragraphs: [
          "Selfly 是一个帮助用户每日聚焦、自我记录与长期回看的 iOS 产品。",
          "我负责了从产品定位、体验设计到 SwiftUI 开发与 App Store 上线的完整过程。",
        ],
      },
    ],
  },
  {
    slug: "project-b",
    title: "Project B (placeholder)",
    subtitle: "复杂流程、B2B 工具或仪表盘方向的项目占位。",
    timeframe: "2025",
    role: "Product designer",
    tags: ["B2B", "Information architecture", "Complex flows"],
    highlights: ["One-line outcome 1", "One-line outcome 2", "One-line outcome 3"],
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
      appDownloadUrl: "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235",
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
    slug: "project-c",
    title: "Selfly：从独立功能集合，到可持续自我记录系统",
    subtitle:
      "我把 Selfly 从一组独立的自我探索工具，重构成一个由四类记录容器、灵感模板、每日节奏和回顾机制组成的长期记录系统。",
    cardTitle: "Selfly：记录系统重构",
    cardSubtitle: "从独立功能集合，重构为可持续的自我记录系统。",
    timeframe: "2025–2026",
    role: "Solo Product Designer & iOS Developer",
    tags: ["UX Strategy", "Product Design", "Interaction Design", "0→1"],
    highlights: [
      "从零完成产品定位、信息架构、核心体验、SwiftUI 开发和 App Store 上线。",
      "把价值观、愿景板、成功日记、优势测试等独立入口，重构成清单、计划、日记、图册四类记录容器。",
      "通过灵感模板、Today / Tomorrow / Backlog 每日节奏、延迟完成和跨模块回顾，让记录更容易长期回来。",
    ],
    featured: {
      eyebrow: "UX Evidence Case Study",
      origin:
        "Selfly 是我独立设计并上线的自我记录 App。项目早期更像一组自我探索工具：价值观、愿景板、成功日记、优势测试等功能各自独立。随着迭代推进，我发现问题不在于功能不够，而在于用户需要理解太多入口和规则，记录也容易停留在一次性测试或单点功能里。因此我把产品重构为四类可复用记录容器，并围绕 Today / Explore / Review 建立长期使用节奏。",
      problem:
        "如何把分散的自我探索功能，重构成一个低压力、可持续的记录与回顾系统？",
      visualLabel: "Before / After experience evidence",
      visualNotes: ["重构产品架构", "降低开始成本", "建立长期节奏"],
      strategy: [
        {
          title: "架构",
          principle: "Less features, clearer system",
          description:
            "把独立功能抽象成清单、计划、日记、图册四类容器，让用户理解的是记录方式，而不是一组彼此割裂的工具。",
        },
        {
          title: "启动",
          principle: "Start from inspiration",
          description:
            "用灵感模板替代空白配置，让用户先进入真实场景，再逐步理解产品结构。",
        },
        {
          title: "持续",
          principle: "Daily rhythm over task pressure",
          description:
            "用 Today / Tomorrow / Backlog、延迟完成和跨模块回顾，让记录形成可返回的日常节奏，而不是效率压力。",
        },
      ],
      uxDecisions: [
        "从固定功能集合转向四类可复用记录容器，降低信息架构复杂度。",
        "从空白创建转向灵感模板，一键创建并直接进入模块。",
        "从普通待办转向 Today / Tomorrow / Backlog 的每日节奏。",
        "从内容沉淀在各模块里，转向跨模块每日抽样回顾。",
        "从立刻消失的完成动作转向延迟提交与可恢复反馈。",
      ],
      implementation: [
        "独立完成 SwiftUI 界面和关键交互实现。",
        "使用 SwiftData 和 iCloud 支撑真实记录、同步与迁移。",
        "处理多语言、StoreKit、隐私、订阅和 App Store 发布细节。",
      ],
      reflection: [
        "这个项目让我意识到，0 到 1 不只是把功能做出来，而是不断把模糊需求翻译成更清晰的体验结构。",
        "Selfly 后期变得更好，不是因为功能更多，而是因为它从一组工具变成了一个更轻、更聚焦、更容易返回的记录系统。",
        "我希望这个案例呈现的是一组具体的产品判断：信息架构如何抽象，首次使用如何降低空白压力，日常行为如何形成节奏，回顾机制如何让旧内容重新出现，以及这些判断如何落到真实可上线的产品里。",
      ],
      appDownloadUrl: "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235",
      visualSections: [
        {
          label: "项目转变 · 版本 A",
          title: "从一次性探索，到持续理解自己",
          body: "早期 Selfly 更像结构化自我探索工具。迭代中我发现，固定模块无法覆盖每个人想记录的内容，单纯记录也容易被遗忘。因此我将产品从预设练习调整为可配置的个人记录空间，并用每日聚焦和回顾让记录进入日常循环。",
          notes: ["发现：固定模块太窄，单纯记录会沉底", "改变：从预设练习转向可配置记录空间", "机制：每日聚焦 + 回顾，形成日常循环"],
          visual: "shiftCards",
        },
        {
          label: "项目转变 · 版本 B",
          title: "Selfly 的核心转变不是增加更多功能",
          body: "我重新定义用户如何长期记录、提问和回看自己：从固定的自我探索练习，到清单、计划、日记、图册组成的可配置记录空间，再到围绕每日聚焦和回顾运转的使用节奏。",
          notes: ["Before：价值观 / 目标 / 习惯等固定练习", "After：清单 / 计划 / 日记 / 图册 + 每日聚焦 + 回顾", "核心：记录、提问、回看"],
          visual: "shiftCompact",
        },
        {
          label: "设计挑战",
          title: "从独立功能，到一个可以长期回来的系统",
          body: "Selfly 早期并不缺功能。真正的问题是：每个入口都有自己的规则，用户每开始一次记录，都要重新理解“我该进哪里、用什么方式写、写完之后还会不会再看到”。我把后续迭代的重点，从增加功能转向重构使用节奏。",
          notes: ["从真实需求出发", "独立设计与上线", "用迭代验证体验判断"],
          visual: "challenge",
        },
        {
          label: "改造 01",
          title: "架构收敛：从功能名称到记录方式",
          body: "我没有继续堆叠更多自我探索功能，而是把价值观、愿景板、成功日记、优势测试等独立入口，重新抽象成清单、计划、日记和图册四类记录容器。这样用户理解的是记录方式，而不是一组彼此割裂的工具。",
          notes: ["抽象内容模型", "减少入口规则", "让结构更容易扩展"],
          visual: "consolidation",
          before: "用户看到的是一组功能名称，需要分别理解每个入口的用途和规则。",
          after: "用户看到的是四种记录方式，再用模板进入具体场景。",
          capability: "产品架构抽象",
        },
        {
          label: "改造 02",
          title: "创建体验：从空白配置到场景模板",
          body: "我发现高度自定义并不等于容易开始。新用户如果先面对类型、名称、图标和设置，其实是在被要求先设计自己的系统。因此我把创建模块改成两条路径：熟悉产品的人可以自定义，新用户可以从情绪日记、年度目标、我的边界、理想自我等模板直接开始。",
          notes: ["降低空白页压力", "用场景解释模块", "创建后直接进入记录"],
          visual: "templates",
          before: "用户先面对配置项，再决定自己要记录什么。",
          after: "用户先看到真实场景，再一键创建对应模块。",
          capability: "首次使用路径优化",
        },
        {
          label: "改造 03",
          title: "每日节奏：从任务列表到 Today / Tomorrow / Backlog",
          body: "如果首页只是普通待办，任务会不断累积，Selfly 也会变成另一个效率工具。我把今日页拆成三层：今天只聚焦 Top 3，暂时不处理的进入 Backlog，晚上可以提前写下明日三件事，并在跨日后自动成为新的今日重点。",
          notes: ["用限制帮助选择", "降低第二天启动成本", "让待办服务于记录节奏"],
          visual: "rhythm",
          before: "待办不断增加，首页容易变成压力来源。",
          after: "Top 3、明日草稿和 Backlog 形成更轻的每日节奏。",
          capability: "日常使用行为模型",
        },
        {
          label: "改造 04",
          title: "回顾机制：把沉淀内容重新分发给用户",
          body: "如果记录只停留在各个模块里，用户很难主动回看。我把回顾设计成一个跨模块的内容再分发机制：清单、计划、日记、图册里的内容都可以进入每日卡片流，用户也可以选择全部、指定模块或指定分类。这样回顾不再依赖用户主动寻找，而是让过去的记录自然重新出现。",
          notes: ["跨模块收集内容", "每日稳定抽样", "支持自选范围"],
          visual: "review",
          before: "内容分散在不同模块中，回顾依赖用户主动进入。",
          after: "系统每天从真实记录中抽取卡片，让旧内容重新出现。",
          capability: "回顾机制设计",
        },
        {
          label: "改造 05",
          title: "完成反馈：让高频操作保留恢复空间",
          body: "完成任务是高频操作，也很容易误触。我没有让任务立刻消失，而是设计了短暂的恢复窗口：反馈先出现，状态稍后提交，用户在几秒内可以撤回。",
          notes: ["反馈立即出现", "误触可以撤回", "完成后不突然消失"],
          visual: "completion",
          before: "点击完成后，任务马上消失，用户难以确认或撤回。",
          after: "任务先保留完成态和恢复机会，再真正进入完成状态。",
          capability: "交互安全与反馈节奏",
        },
      ],
    },
    sections: [
      {
        title: "项目说明",
        paragraphs: [
          "这个项目三版本更强调 Selfly 的产品系统演进：我把分散的自我探索入口收敛成四类记录容器，并通过模板、每日节奏和回顾机制，让记录从一次性使用变成可以长期回来的系统。",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
