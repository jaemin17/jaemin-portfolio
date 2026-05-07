# Selfly Featured Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Selfly as the portfolio's featured UX case study with a warmer, more visual detail page while preserving the existing project list and generic project detail behavior.

**Architecture:** Extend the existing `Project` content model with optional featured-case-study fields, then make `/projects/[slug]` render a richer layout only when those fields exist. Keep all project data in `src/content/projects.ts`; keep presentational logic in the dynamic project page and its CSS module.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS Modules, existing static content array.

---

## Files

- Modify: `/Users/jaemin/Documents/portfolio/portfolio/src/content/projects.ts`
  - Add optional fields for featured case study content.
  - Replace the first placeholder project with Selfly Chinese content.
- Modify: `/Users/jaemin/Documents/portfolio/portfolio/src/app/projects/[slug]/page.tsx`
  - Render Selfly's featured hero, strategy cards, UX decisions, implementation credibility, and reflection when optional fields are present.
  - Keep the existing generic rendering for projects without featured fields.
- Modify: `/Users/jaemin/Documents/portfolio/portfolio/src/app/projects/[slug]/project.module.css`
  - Add responsive styles for the featured case study layout.
- Verification only: `/Users/jaemin/Documents/portfolio/portfolio/package.json`
  - Use existing `pnpm build` and `pnpm lint`.

## Task 1: Extend Project Content Model and Add Selfly Content

**Files:**
- Modify: `/Users/jaemin/Documents/portfolio/portfolio/src/content/projects.ts`

- [ ] **Step 1: Run the current build as a baseline**

Run:

```bash
pnpm build
```

Expected: the current project either builds successfully, or any existing failure is recorded before editing.

- [ ] **Step 2: Extend the `Project` type**

Update the `Project` type to include optional featured fields:

```ts
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
  };
  sections: Array<{
    title: string;
    bullets?: string[];
    paragraphs?: string[];
  }>;
};
```

- [ ] **Step 3: Replace the first project with Selfly**

Replace the current first object (`slug: "ai-app-0-to-launch"`) with:

```ts
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
  },
  sections: [
    {
      title: "项目简介",
      paragraphs: [
        "Selfly 是一个面向自我观察和个人成长的 iOS App。它不是传统待办工具，而是把每日重点、长期自我记录、愿景板、日记和回顾串成一个连续体验。",
      ],
    },
  ],
}
```

- [ ] **Step 4: Run TypeScript/Next build**

Run:

```bash
pnpm build
```

Expected: FAIL if the page does not yet understand the `featured` fields, or PASS if the type extension is fully compatible. Record the result before Task 2.

## Task 2: Render Featured Case Study Layout

**Files:**
- Modify: `/Users/jaemin/Documents/portfolio/portfolio/src/app/projects/[slug]/page.tsx`

- [ ] **Step 1: Add featured rendering branch after the project guard**

After:

```tsx
if (!project) notFound();
```

Add:

```tsx
const featured = project.featured;
```

- [ ] **Step 2: Replace the existing header and body area with conditional featured sections**

Inside `<main className={styles.main}>`, keep the back link, then render:

```tsx
<header className={featured ? styles.featuredHero : styles.header}>
  {featured ? <p className={styles.eyebrow}>{featured.eyebrow}</p> : null}
  <h1 className={styles.title}>{project.title}</h1>
  <p className={styles.subtitle}>{project.subtitle}</p>
  <div className={styles.meta}>
    <span className={styles.metaItem}>{project.timeframe}</span>
    <span className={styles.metaDot} aria-hidden="true">
      ·
    </span>
    <span className={styles.metaItem}>{project.role}</span>
  </div>
  <div className={styles.tags} aria-label="标签">
    {project.tags.map((t) => (
      <span key={t} className="chip">
        {t}
      </span>
    ))}
  </div>
</header>
```

Then, before the existing generic sections map, add:

```tsx
{featured ? (
  <>
    <section className={styles.featuredIntro}>
      <div>
        <h2 className={styles.h2}>起点</h2>
        <p className={styles.p}>{featured.origin}</p>
        <h2 className={styles.h2}>设计问题</h2>
        <p className={styles.problem}>{featured.problem}</p>
      </div>
      <aside className={styles.phonePanel} aria-label={featured.visualLabel}>
        <div className={styles.phoneFrame}>
          {featured.visualNotes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </aside>
    </section>

    <section className={styles.section}>
      <h2 className={styles.h2}>产品策略</h2>
      <div className={styles.strategyGrid}>
        {featured.strategy.map((item) => (
          <article key={item.title} className={styles.strategyCard}>
            <span className={styles.strategyTitle}>{item.title}</span>
            <h3>{item.principle}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className={styles.featuredSplit}>
      <div>
        <h2 className={styles.h2}>关键 UX 决策</h2>
        <ul className={styles.list}>
          {featured.uxDecisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={styles.h2}>落地实现</h2>
        <ul className={styles.list}>
          {featured.implementation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.h2}>项目反思</h2>
      {featured.reflection.map((item) => (
        <p key={item} className={styles.p}>
          {item}
        </p>
      ))}
    </section>
  </>
) : null}
```

- [ ] **Step 3: Keep generic sections as supporting content**

Change:

```tsx
{project.sections.map((s) => (
```

to:

```tsx
{(!featured ? project.sections : project.sections.slice(0, 1)).map((s) => (
```

This keeps Selfly from repeating too much text while preserving generic project behavior.

- [ ] **Step 4: Run build**

Run:

```bash
pnpm build
```

Expected: FAIL until the CSS module exports referenced class names, or PASS if CSS is already added.

## Task 3: Style Featured Case Study Layout

**Files:**
- Modify: `/Users/jaemin/Documents/portfolio/portfolio/src/app/projects/[slug]/project.module.css`

- [ ] **Step 1: Add featured layout styles**

Append:

```css
.featuredHero {
  position: relative;
  overflow: hidden;
  padding: 22px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 246, 230, 0.72));
  box-shadow: var(--shadow);
}

.eyebrow {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.featuredIntro {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
  gap: 18px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.problem {
  margin-top: 10px;
  max-width: 70ch;
  color: var(--fg);
  font-size: 20px;
  line-height: 1.55;
  letter-spacing: -0.02em;
}

.phonePanel {
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.58);
}

.phoneFrame {
  width: min(220px, 70%);
  min-height: 280px;
  padding: 22px 16px;
  border: 2px solid rgba(17, 18, 23, 0.18);
  border-radius: 34px;
  background: linear-gradient(180deg, #fff0cc, #fffaf2);
  box-shadow: 0 18px 34px rgba(17, 18, 23, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.phoneFrame span {
  display: block;
  padding: 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(17, 18, 23, 0.08);
  color: var(--fg);
  font-size: 13px;
  line-height: 1.45;
}

.strategyGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.strategyCard {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.64);
  box-shadow: var(--shadow);
}

.strategyTitle {
  display: inline-flex;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 12px;
}

.strategyCard h3 {
  font-size: 18px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
}

.strategyCard p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

.featuredSplit {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}

@media (max-width: 760px) {
  .featuredIntro,
  .featuredSplit {
    grid-template-columns: 1fr;
  }

  .strategyGrid {
    grid-template-columns: 1fr;
  }

  .phonePanel {
    min-height: 260px;
  }

  .problem {
    font-size: 18px;
  }
}
```

- [ ] **Step 2: Run build and lint**

Run:

```bash
pnpm build
pnpm lint
```

Expected: both commands pass.

## Task 4: Visual Verification

**Files:**
- No code edits unless verification reveals layout issues.

- [ ] **Step 1: Start local dev server**

Run:

```bash
pnpm dev
```

Expected: Next dev server starts and prints a localhost URL.

- [ ] **Step 2: Open these routes**

Open:

```text
http://localhost:3000/
http://localhost:3000/projects/selfly-ios-app
http://localhost:3000/projects/project-b
```

Expected:

- Home page lists Selfly first.
- Selfly detail uses the featured case study layout.
- Project B still uses the generic layout and is not broken.

- [ ] **Step 3: Check mobile width**

Use a narrow viewport around 390px wide.

Expected:

- Selfly title wraps cleanly.
- Strategy cards stack vertically.
- The phone placeholder does not overlap text.
- Footer buttons remain usable.

## Self-Review

- Spec coverage: This plan covers the approved B direction, the Chinese content pass, the Today/Explore/Review strategy, key UX decisions, implementation credibility, and reflection.
- Placeholder scan: The plan does not require incomplete content. The phone visual is intentionally a styled placeholder because screenshots will be added later after assets are available.
- Type consistency: The `featured` shape is defined once in `Project` and consumed with matching property names in the detail page.
