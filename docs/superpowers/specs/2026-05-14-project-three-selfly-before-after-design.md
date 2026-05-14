# Project Three Selfly Before / After Case Study Design

## Goal

Turn project three into a Selfly UX/product design case study that uses the previous conversation's findings as the page structure. The page should show that Selfly was a 0-to-1 app, but the main evidence should be product experience judgment: what changed, why it changed, and what design capability each change demonstrates.

## Recommended Direction

Use a Before / After evidence-led layout with a narrative wrapper.

- Open with 0-to-1 context: Selfly was independently designed and built from product positioning through App Store release.
- Structure the body around concrete transformations: "I changed X into Y."
- End with reflection: the project became stronger by becoming lighter, clearer, and more sustainable.

This is stronger than a generic 0-to-1 story because it proves design judgment through iteration evidence.

## Page Narrative

Main title:

> Selfly：把自我探索从一次性测试，设计成每日可持续的记录与回顾系统

Supporting framing:

> 从 0 到 1 设计并上线 Selfly 的过程中，我没有把重点放在堆功能，而是持续判断什么应该保留、合并、删除，以及如何让用户更容易长期回来。

## Layout

1. Hero
   - Large title and short 0-to-1 framing.
   - Three visual placeholders for Today, Explore, and Review.
   - Metadata: solo product designer, iOS developer, timeframe, App Store availability.

2. Design Challenge
   - Explain the central UX tension: self-reflection apps can easily become pressure, complexity, or one-time use.
   - Present the case question: how might Selfly help users continue reflecting without becoming another productivity system?

3. Before / After Sections
   - Product structure: many independent features to four reusable record modules.
   - Creation: blank configuration to inspiration templates.
   - Daily focus: ordinary todo list to Today / Tomorrow / Backlog rhythm.
   - Completion interaction: immediate disappearance to delayed, recoverable completion.
   - Review: interruptive completion page to continuous card-based review.

4. Detail Wall
   - Show smaller polish decisions as a compact grid.
   - Examples: long text, swipe clipping, bottom blur, thumbnail clarity, English wrapping, secondary-page tab behavior.

5. Result and Reflection
   - Summarize the shift from "feature-rich" to "clear, light, and sustainable."
   - Emphasize design capability: product architecture, behavior model design, interaction safety, feedback rhythm, and implementation follow-through.

## Visual Style

Reuse the existing portfolio's sticker-like visual language, but make project three more evidence-based:

- Before / After blocks should be visually scannable.
- Use diagram-like placeholders instead of relying on final screenshots only.
- Keep colors varied but consistent with the existing warm portfolio system.
- Avoid dense text walls; each section should have one core claim, one short body paragraph, and three evidence notes.

## Implementation Scope

- Update `src/content/projects.ts` to replace `project-c` with the Selfly project three content.
- Extend the existing featured project model only if needed; prefer reusing `featured.visualSections` and current visual types where possible.
- Update `src/app/projects/[slug]/page.tsx` only for rendering labels/content needed by the Before / After layout.
- Update `src/app/projects/[slug]/project.module.css` for the new evidence-led layout.
- Do not modify the Selfly app code.

## Acceptance Criteria

- Project three is no longer a placeholder.
- The page clearly reads as a UX/product design case study, not just an app showcase.
- Each major section states what changed from before to after.
- The page still communicates that Selfly is a 0-to-1 real shipped product.
- Desktop and mobile layouts are readable, with no overlapping text or unstable cards.
