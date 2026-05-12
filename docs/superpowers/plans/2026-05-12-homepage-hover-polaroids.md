# Homepage Hover Polaroids Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add hover-revealed placeholder polaroids to homepage labels while preserving existing layout, links, time note, and always-visible photos.

**Architecture:** Keep the change local to the homepage. `src/app/page.tsx` defines a small `HoverPolaroid` wrapper and per-trigger metadata; `src/app/page.module.css` renders the shared floating polaroid style and placement variants.

**Tech Stack:** Next.js App Router, React, CSS Modules, existing CSS-only polaroid styling.

---

### Task 1: Add Hover Polaroid Wrapper

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add local metadata and wrapper component**

Add a `HoverPolaroid` helper that accepts children, caption, placement, and tone. The wrapper should render a decorative floating polaroid after the trigger content.

- [ ] **Step 2: Wrap homepage triggers**

Use the wrapper around `Jiamin`, `Li`, the status tag, the identity sticker, each project note, each info note, and the life note. Do not wrap the time note or the existing bottom polaroids.

- [ ] **Step 3: Preserve links**

When a trigger is a link, keep the link as the outer interactive element and put the hover polaroid inside that link so hover/focus works without changing navigation.

### Task 2: Style Floating Polaroids

**Files:**
- Modify: `src/app/page.module.css`

- [ ] **Step 1: Add shared floating polaroid CSS**

Create `.hoverPhotoAnchor`, `.hoverPolaroid`, `.hoverPolaroidTape`, `.hoverPolaroidImage`, and `.hoverPolaroidCaption`, reusing the existing paper, tape, square image, caption, shadow, transform, and transition language.

- [ ] **Step 2: Add placement variants**

Add placement classes for top-left, top-right, left, right, and bottom-right. Each variant should position the floating photo outside the text area.

- [ ] **Step 3: Add responsive behavior**

Hide floating hover polaroids under `920px` and disable hover transforms under reduced motion.

### Task 3: Verify

**Files:**
- Run: `pnpm lint`
- Browser-check: homepage desktop and mobile

- [ ] **Step 1: Run lint**

Run `pnpm lint`. Expected: no lint errors.

- [ ] **Step 2: Visual check desktop**

Open the homepage. Hover/focus title words, status tag, subtitle sticker, project notes, and info notes. Expected: a placeholder polaroid appears near each trigger and does not cover text.

- [ ] **Step 3: Visual check mobile**

Check a mobile viewport. Expected: existing layout remains clean and hover polaroids are hidden.
