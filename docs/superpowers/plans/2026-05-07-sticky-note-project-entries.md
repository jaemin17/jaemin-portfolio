# Sticky Note Project Entries Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the homepage's three project entry links into a lightweight pinned sticky-note grid without changing the hero, background, or surrounding page sections.

**Architecture:** Keep the existing homepage data flow: `src/app/page.tsx` maps over `projects` and links each item to `/projects/[slug]`. Add small semantic spans for project index and decorative note content, then use CSS pseudo-elements and custom properties in `src/app/page.module.css` for pins, paper layers, rotations, and responsive layout. No new dependencies or global styles are needed.

**Tech Stack:** Next.js App Router, React, CSS Modules, existing project content module.

---

## File Structure

- Modify `src/app/page.tsx`: adjust only the `workList` item markup so each project entry exposes a note index, title, metadata, and call-to-action inside the existing link.
- Modify `src/app/page.module.css`: replace the current plain `workList` card styles with sticky-note grid styles, CSS-only pins, pastel note panels, rotations, hover states, and responsive rules.
- No test files are needed because this is a small visual CSS-only change in a project with no existing component test setup.

---

### Task 1: Update Project Entry Markup

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Edit the `projects.map` callback**

Replace the current `workList` mapping block:

```tsx
{projects.map((p) => (
  <li key={p.slug} className={styles.workItem}>
    <Link className={styles.workLink} href={`/projects/${p.slug}`}>
      <span className={styles.workTitle}>{p.title}</span>
      <span className={styles.workMeta}>
        {p.subtitle} <span className={styles.dot}>·</span>{" "}
        {p.tags.slice(0, 3).join(", ")}
      </span>
    </Link>
  </li>
))}
```

with:

```tsx
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
        <span className={styles.workMore}>Open case →</span>
      </span>
    </Link>
  </li>
))}
```

- [ ] **Step 2: Confirm the page still compiles syntactically**

Run:

```bash
pnpm lint
```

Expected: command completes without TypeScript/JSX syntax errors. Existing unrelated lint warnings are acceptable only if they predate this change.

---

### Task 2: Replace Plain Cards With Sticky-Note Styling

**Files:**
- Modify: `src/app/page.module.css`

- [ ] **Step 1: Replace the existing work entry CSS block**

Replace the current `.workList`, `.workItem`, `.workLink`, `.workTitle`, `.workMeta`, and `.dot` definitions with:

```css
.workList {
  list-style: none;
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding-left: 0;
  align-items: start;
}

.workItem {
  --note-rotation: -2.2deg;
  --note-offset: 6px;
  --note-accent: #ffe4d5;
  --pin-color: #f6682f;
  transform: translateY(var(--note-offset)) rotate(var(--note-rotation));
}

.workItem:nth-child(2) {
  --note-rotation: 1.7deg;
  --note-offset: 22px;
  --note-accent: #dfe8ff;
  --pin-color: #2f7bff;
}

.workItem:nth-child(3) {
  --note-rotation: -1.1deg;
  --note-offset: 2px;
  --note-accent: #f2dcff;
  --pin-color: #7c5cff;
}

.workLink {
  position: relative;
  display: block;
  min-height: 260px;
  padding: 48px 18px 18px;
  border: 1px solid rgba(17, 18, 23, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow:
    0 18px 34px rgba(17, 18, 23, 0.12),
    0 2px 0 rgba(255, 255, 255, 0.8) inset;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

.workLink:hover {
  transform: translateY(-5px) rotate(calc(var(--note-rotation) * -0.45));
  border-color: rgba(17, 18, 23, 0.18);
  box-shadow:
    0 24px 44px rgba(17, 18, 23, 0.16),
    0 2px 0 rgba(255, 255, 255, 0.82) inset;
}

.workLink:focus-visible {
  outline: 3px solid color-mix(in oklab, var(--pin-color) 70%, white);
  outline-offset: 5px;
}

.pin {
  position: absolute;
  top: 16px;
  left: 50%;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 28%, rgba(255, 255, 255, 0.82), transparent 22%),
    var(--pin-color);
  border: 1px solid rgba(17, 18, 23, 0.16);
  box-shadow:
    0 8px 14px color-mix(in oklab, var(--pin-color) 34%, transparent),
    0 6px 0 color-mix(in oklab, var(--pin-color) 64%, #0b0b0b);
  transform: translateX(-50%);
  z-index: 2;
}

.pin::after {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.44);
}

.workNote {
  display: flex;
  min-height: 194px;
  flex-direction: column;
  padding: 18px;
  border: 1px solid rgba(17, 18, 23, 0.08);
  border-radius: 12px;
  background: var(--note-accent);
}

.workIndex {
  color: color-mix(in oklab, var(--pin-color) 78%, #111217);
  font-size: 24px;
  line-height: 1;
  font-family: var(--font-kalam), var(--font-geist-sans), system-ui, sans-serif;
}

.workTitle {
  display: block;
  margin-top: 18px;
  font-size: clamp(17px, 1.7vw, 22px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 850;
}

.workMeta {
  display: block;
  margin-top: 12px;
  color: rgba(17, 18, 23, 0.68);
  line-height: 1.65;
  font-size: 14px;
}

.workMore {
  display: block;
  margin-top: auto;
  padding-top: 16px;
  font-size: 13px;
  font-weight: 750;
  letter-spacing: -0.01em;
}

.dot {
  opacity: 0.55;
  padding: 0 6px;
}
```

- [ ] **Step 2: Replace the current small-screen work rule**

Replace the existing mobile rule:

```css
@media (max-width: 560px) {
  .workLink {
    padding: 14px 14px 12px;
  }
}
```

with:

```css
@media (max-width: 920px) {
  .aboutGrid {
    grid-template-columns: 1fr;
  }

  .workList {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .workList {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .workItem,
  .workItem:nth-child(2),
  .workItem:nth-child(3) {
    --note-rotation: 0deg;
    --note-offset: 0;
  }

  .workLink {
    min-height: 0;
    padding: 44px 14px 14px;
  }

  .workNote {
    min-height: 0;
    padding: 16px;
  }
}
```

Keep the existing `.aboutGrid` tablet rule by merging it into the updated `@media (max-width: 920px)` block instead of duplicating the media query.

- [ ] **Step 3: Run lint**

Run:

```bash
pnpm lint
```

Expected: lint passes.

---

### Task 3: Visual Verification

**Files:**
- No code changes expected unless verification reveals layout defects.

- [ ] **Step 1: Start the dev server**

Run:

```bash
pnpm dev
```

Expected: Next.js starts and prints a local URL such as `http://localhost:3000`.

- [ ] **Step 2: Check the homepage in a browser**

Open the homepage and verify:

- The hero title sticker remains visually unchanged.
- The page background remains the warm `#fff5e4`.
- The `Stuff I've done` entries look like three pinned paper notes.
- Desktop cards do not overlap and remain easy to scan.
- Mobile width stacks cards in one column with no text overflow.

- [ ] **Step 3: Fix any observed CSS layout defect**

If cards overlap, reduce `--note-offset`, lower rotations, or increase `.workList` gap. If mobile text overflows, lower `.workTitle` max font size or increase `.workNote` padding. Re-run lint after any CSS edits.

---

## Self-Review

- Spec coverage: Task 1 preserves existing project data and link behavior; Task 2 implements sticky-note visuals, pins, pastel panels, rotations, hover states, and mobile rules; Task 3 verifies unchanged hero/background and responsive behavior.
- Placeholder scan: No placeholders, TBDs, or deferred implementation notes remain.
- Type consistency: CSS class names in the JSX snippet match the CSS definitions: `pin`, `workNote`, `workIndex`, `workTitle`, `workMeta`, `workMore`, and `dot`.
