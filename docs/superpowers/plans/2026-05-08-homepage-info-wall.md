# Homepage Info Wall Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the homepage into a one-screen information wall while preserving the exact existing hero and project sticky-note visual treatment.

**Architecture:** Keep the implementation local to the homepage. `src/app/page.tsx` defines the wall content and preserves the existing project card JSX; `src/app/page.module.css` adds wall positioning plus smaller static note variants that reuse the existing paper, pin, and inner-note CSS language.

**Tech Stack:** Next.js App Router, React Server Components, CSS Modules, existing `projects` content data, existing `StickerTitle` and `SiteHeader` components.

---

### Task 1: Restructure Homepage Markup Into Wall Groups

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add static note data above `Home`**

Insert this after the imports in `src/app/page.tsx`:

```tsx
const infoNotes = [
  {
    id: "about",
    index: "A1",
    title: "我是谁",
    body: "偏产品型的 UI/UX 设计师，也会自己做独立开发项目。",
  },
  {
    id: "focus",
    index: "A2",
    title: "我关注什么",
    body: "问题定义、任务流程、信息层级、可用性和可交付性。",
  },
  {
    id: "delivery",
    index: "A3",
    title: "我能交付什么",
    body: "问题拆解、关键任务流、原型、视觉设计、组件规范和交付素材。",
  },
  {
    id: "where",
    index: "A4",
    title: "联系",
    body: "Email: you@example.com · GitHub: jaemin17",
  },
];
```

- [ ] **Step 2: Replace the returned main content with wall groups**

Inside `Home`, replace the current `main` element with:

```tsx
<main className={styles.main}>
  <section className={styles.wall} aria-label="首页信息墙">
    <header className={styles.hero}>
      <div className={styles.heroTag} aria-label="status tag">
        <span className={styles.heroTagIcon} aria-hidden="true">
          :)
        </span>
        <span className={styles.heroTagPill}>Hangzhou · Open to work</span>
      </div>
      <StickerTitle className={styles.title} text="Jiamin Li" />
      <div className={styles.stickerSubWrap} aria-label="identity stickers">
        <span className={styles.stickerSub}>产品设计 · 独立开发（0→1）</span>
      </div>
      <p className={styles.subtitle}>
        我是一名关注产品体验与交互设计的设计师，擅长把模糊需求拆成清晰的问题、流程和界面。
      </p>
      <p className={styles.tagline}>
        我也在尝试把 AI 融入设计工作流：用它加速调研、整理、写作和迭代，但核心判断仍然来自用户价值、信息结构、可用性和可交付性。
      </p>
    </header>

    <div id="about" className={styles.infoNotes} aria-label="关于我">
      {infoNotes.map((note) => (
        <article key={note.id} id={note.id} className={styles.infoItem}>
          <span className={styles.pin} aria-hidden="true" />
          <span className={styles.infoNote}>
            <span className={styles.workIndex}>{note.index}</span>
            <span className={styles.infoTitle}>{note.title}</span>
            <span className={styles.infoBody}>{note.body}</span>
          </span>
        </article>
      ))}
    </div>

    <section id="project" className={styles.projectWall} aria-labelledby="project-title">
      <h2 id="project-title" className={styles.srOnly}>
        项目
      </h2>
      <ol className={styles.workList}>
        {projects.map((p, idx) => (
          <li key={p.slug} className={styles.workItem}>
            <Link className={styles.workLink} href={`/projects/${p.slug}`}>
              <span className={styles.pin} aria-hidden="true" />
              <span className={styles.workNote}>
                <span className={styles.workIndex}>{String(idx + 1).padStart(2, "0")}</span>
                <span className={styles.workTitle}>{p.title}</span>
                <span className={styles.workMeta}>
                  {p.subtitle} <span className={styles.dot}>·</span>{" "}
                  {p.tags.slice(0, 3).join(", ")}
                </span>
                <span className={styles.workMore}>查看案例 →</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  </section>
</main>
```

- [ ] **Step 3: Run lint to catch markup/type issues**

Run:

```bash
pnpm lint
```

Expected: no ESLint errors. If formatting complaints occur, adjust JSX line breaks without changing content or styles.

- [ ] **Step 4: Commit the markup change**

Run:

```bash
git add src/app/page.tsx
git commit -m "Restructure homepage into info wall groups"
```

### Task 2: Add Desktop Wall Layout Without Changing Existing Hero Details

**Files:**
- Modify: `src/app/page.module.css`

- [ ] **Step 1: Add accessible hidden heading utility and wall shell**

In `src/app/page.module.css`, replace the current `.main` and `.hero` blocks with:

```css
.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 34px 20px 48px;
  width: 100%;
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.wall {
  position: relative;
  min-height: calc(100svh - 118px);
  padding: 18px 0 28px;
}

.hero {
  position: relative;
  z-index: 3;
  max-width: 820px;
  margin: 0 auto;
  padding: 18px 0 40px;
}
```

- [ ] **Step 2: Keep existing hero detail rules unchanged**

Do not edit the existing class bodies for `.heroTag`, `.heroTagIcon`, `.heroTagIcon:hover`, `.heroTagPill`, `.heroTagPill:hover`, `.title`, `.stickerSubWrap`, `.stickerSub`, `.stickerSub:hover`, `.subtitle`, or `.tagline` except if a later visual check proves they overlap cards.

- [ ] **Step 3: Remove unused vertical-section rules after JSX no longer references them**

Delete the full class blocks for `.smallLead`, `.heroLinks`, `.quick`, `.quick:hover`, `.section`, `.section + .section`, `.h2`, `.aboutGrid`, `.h3`, `.p`, and `.whereRow` from `src/app/page.module.css`.

- [ ] **Step 4: Run lint**

Run:

```bash
pnpm lint
```

Expected: no ESLint errors.

- [ ] **Step 5: Commit the wall shell**

Run:

```bash
git add src/app/page.module.css
git commit -m "Add homepage wall layout shell"
```

### Task 3: Preserve Project Card Styling And Place Cards On The Wall

**Files:**
- Modify: `src/app/page.module.css`

- [ ] **Step 1: Replace `.workList` layout with desktop absolute positioning**

Replace the existing `.workList` block with:

```css
.projectWall {
  position: static;
}

.workList {
  list-style: none;
  padding-left: 0;
}
```

- [ ] **Step 2: Extend `.workItem` with wall positioning while keeping its existing visual variables**

Replace the current `.workItem` and nth-child blocks with:

```css
.workItem {
  --note-rotation: -2.2deg;
  --note-offset: 0px;
  --note-accent: #ffe4d5;
  --pin-color: #f6682f;
  position: absolute;
  z-index: 2;
  width: min(27vw, 300px);
  transform: translateY(var(--note-offset)) rotate(var(--note-rotation));
}

.workItem:nth-child(1) {
  left: 0;
  bottom: 24px;
}

.workItem:nth-child(2) {
  --note-rotation: 1.7deg;
  --note-offset: 14px;
  --note-accent: #dfe8ff;
  --pin-color: #2f7bff;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) translateY(var(--note-offset)) rotate(var(--note-rotation));
}

.workItem:nth-child(3) {
  --note-rotation: -1.1deg;
  --note-offset: 0px;
  --note-accent: #f2dcff;
  --pin-color: #7c5cff;
  right: 0;
  bottom: 28px;
}
```

- [ ] **Step 3: Do not change existing project-card visual rules**

Leave the existing class bodies for `.workLink`, `.workLink:hover`, `.workLink:focus-visible`, `.pin`, `.pin::after`, `.workNote`, `.workIndex`, `.workTitle`, `.workMeta`, `.workMore`, and `.dot` unchanged.

- [ ] **Step 4: Run lint**

Run:

```bash
pnpm lint
```

Expected: no ESLint errors.

- [ ] **Step 5: Commit project wall placement**

Run:

```bash
git add src/app/page.module.css
git commit -m "Place project notes on homepage wall"
```

### Task 4: Add Static Notes Using The Same Pin And Paper Language

**Files:**
- Modify: `src/app/page.module.css`

- [ ] **Step 1: Add static note layout and card styles after `.dot`**

Insert this after the `.dot` block:

```css
.infoNotes {
  position: static;
}

.infoItem {
  --note-rotation: -1.6deg;
  --note-accent: #fff1a8;
  --pin-color: #f6682f;
  position: absolute;
  z-index: 1;
  width: min(20vw, 218px);
  padding: 42px 14px 14px;
  border: 1px solid rgba(17, 18, 23, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow:
    0 18px 34px rgba(17, 18, 23, 0.12),
    0 2px 0 rgba(255, 255, 255, 0.8) inset;
  transform: rotate(var(--note-rotation));
}

.infoItem:nth-child(1) {
  top: 124px;
  left: 18px;
}

.infoItem:nth-child(2) {
  --note-rotation: 1.4deg;
  --note-accent: #dff7e8;
  --pin-color: #2f7bff;
  top: 342px;
  left: 72px;
}

.infoItem:nth-child(3) {
  --note-rotation: 1.8deg;
  --note-accent: #fff1a8;
  --pin-color: #7c5cff;
  top: 124px;
  right: 18px;
}

.infoItem:nth-child(4) {
  --note-rotation: -1.4deg;
  --note-accent: #ffe4d5;
  --pin-color: #f6682f;
  top: 348px;
  right: 74px;
}

.infoNote {
  display: flex;
  min-height: 128px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid rgba(17, 18, 23, 0.08);
  border-radius: 12px;
  background: var(--note-accent);
}

.infoTitle {
  display: block;
  margin-top: 14px;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  font-weight: 850;
}

.infoBody {
  display: block;
  margin-top: 10px;
  color: rgba(17, 18, 23, 0.68);
  line-height: 1.62;
  font-size: 13px;
}
```

- [ ] **Step 2: Confirm static notes reuse the existing `.pin`**

Verify each static note in `src/app/page.tsx` contains:

```tsx
<span className={styles.pin} aria-hidden="true" />
```

This is required so the pin details match the project cards.

- [ ] **Step 3: Run lint**

Run:

```bash
pnpm lint
```

Expected: no ESLint errors.

- [ ] **Step 4: Commit static notes**

Run:

```bash
git add src/app/page.module.css src/app/page.tsx
git commit -m "Add static info notes to homepage wall"
```

### Task 5: Add Responsive Layout And Visual Verification

**Files:**
- Modify: `src/app/page.module.css`

- [ ] **Step 1: Replace media queries with tablet and mobile wall behavior**

Replace the existing `@media (max-width: 920px)` and `@media (max-width: 560px)` blocks with:

```css
@media (max-width: 1100px) {
  .wall {
    min-height: 1120px;
  }

  .hero {
    max-width: 760px;
  }

  .workItem {
    width: min(30vw, 286px);
  }

  .infoItem {
    width: min(22vw, 206px);
  }
}

@media (max-width: 920px) {
  .main {
    max-width: 760px;
    padding-bottom: 70px;
  }

  .wall {
    min-height: 0;
    padding-bottom: 0;
  }

  .hero {
    padding-bottom: 34px;
  }

  .infoNotes {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin-top: 10px;
  }

  .infoItem,
  .infoItem:nth-child(1),
  .infoItem:nth-child(2),
  .infoItem:nth-child(3),
  .infoItem:nth-child(4) {
    position: relative;
    inset: auto;
    width: auto;
  }

  .workList {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    align-items: start;
  }

  .workItem,
  .workItem:nth-child(1),
  .workItem:nth-child(2),
  .workItem:nth-child(3) {
    position: relative;
    inset: auto;
    width: auto;
  }

  .workItem:nth-child(2) {
    transform: translateY(var(--note-offset)) rotate(var(--note-rotation));
  }
}

@media (max-width: 560px) {
  .main {
    padding: 34px 20px 70px;
  }

  .subtitle {
    margin-top: 56px;
  }

  .infoNotes,
  .workList {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .infoItem,
  .infoItem:nth-child(1),
  .infoItem:nth-child(2),
  .infoItem:nth-child(3),
  .infoItem:nth-child(4),
  .workItem,
  .workItem:nth-child(1),
  .workItem:nth-child(2),
  .workItem:nth-child(3) {
    --note-rotation: 0deg;
    --note-offset: 0;
    transform: none;
  }

  .workLink {
    min-height: 0;
    padding: 44px 14px 14px;
  }

  .workNote {
    min-height: 0;
    padding: 16px;
  }

  .infoItem {
    padding: 44px 14px 14px;
  }

  .infoNote {
    min-height: 0;
    padding: 16px;
  }
}
```

- [ ] **Step 2: Run lint**

Run:

```bash
pnpm lint
```

Expected: no ESLint errors.

- [ ] **Step 3: Start the dev server**

Run:

```bash
pnpm dev
```

Expected: Next.js starts and prints a local URL, usually `http://localhost:3000`.

- [ ] **Step 4: Visually verify desktop**

Open the local URL and check:

```text
Viewport: 1440 x 900
Expected:
- StickerTitle details match the old homepage.
- Orange subtitle sticker matches the old homepage.
- Project cards retain original paper, pin, inner note, index, title, metadata, and "查看案例 →".
- Static notes use the same pin shape and paper language.
- No card overlaps the title, subtitle sticker, hero paragraphs, or another card.
```

- [ ] **Step 5: Visually verify mobile**

Check:

```text
Viewport: 390 x 844
Expected:
- Hero appears first.
- Static notes and project cards stack in one column.
- Project cards keep their current mobile behavior.
- No horizontal scrolling.
- No text overlaps or spills outside cards.
```

- [ ] **Step 6: Stop the dev server**

Stop the running `pnpm dev` process with `Ctrl-C`.

- [ ] **Step 7: Commit responsive verification changes**

Run:

```bash
git add src/app/page.module.css
git commit -m "Make homepage wall responsive"
```

### Task 6: Final Review

**Files:**
- Review: `src/app/page.tsx`
- Review: `src/app/page.module.css`
- Review: `docs/superpowers/specs/2026-05-08-homepage-info-wall-design.md`

- [ ] **Step 1: Run final lint**

Run:

```bash
pnpm lint
```

Expected: no ESLint errors.

- [ ] **Step 2: Inspect diff against the spec**

Run:

```bash
git diff HEAD~4..HEAD -- src/app/page.tsx src/app/page.module.css
```

Expected:

```text
- Hero JSX and class names are preserved.
- Project card JSX and class names are preserved.
- Static notes reuse styles.pin.
- Desktop wall layout is added.
- Mobile layout avoids absolute positioning.
```

- [ ] **Step 3: Record remaining manual checks in the final response**

Report:

```text
Implemented homepage info wall.
Verified with pnpm lint.
Visually checked desktop and mobile at the local dev URL.
```
