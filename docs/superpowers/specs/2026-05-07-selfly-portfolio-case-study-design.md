# Selfly Portfolio Case Study Design

## Goal

Add Selfly to the portfolio as the primary 0-to-1 UX case study. The page should present Selfly as a warm self-reflection iOS app designed and built from a personal need, while keeping the emphasis on product design and UX decisions.

## Positioning

Selfly is not a generic productivity app. It is a self-reflection tool that helps users stay connected with what matters to them through daily focus, modular self-recording, and reflective review.

Core framing:

> Selfly started from my own need for a gentler way to understand myself. I wanted a place that could hold daily priorities, small observations, journals, plans, and visual inspiration without turning self-reflection into another productivity checklist.

## Target Audience

The case study is aimed at product design and UX readers. Engineering details should support credibility, but should not become the main story.

## UX Problem

How might we help people stay connected with what matters to them, without turning self-reflection into another task manager?

## Narrative Tone

Use a hybrid tone:

- Personal and warm at the beginning, so the reader understands why the product exists.
- Clear and professional in the body, so the reader can evaluate UX thinking, structure, and decisions.
- Reflective at the end, focused on what the project taught about feeling, retention, and completing a real product.

## Recommended Page Structure

1. Hero
   - Title: Selfly: from 0 to 1, a warm self-reflection app
   - Subtitle: An iOS app for daily focus, modular self-recording, and reflective review.

2. Origin
   - Explain the personal need behind the app.
   - Emphasize that the goal was not to create another task manager.

3. UX Problem
   - Present the central HMW question.
   - Name the tension between productivity and self-understanding.

4. Product Strategy
   - Today: focus, but not pressure.
   - Explore: record in different forms.
   - Review: return to yourself.

5. Key UX Decisions
   - Top 3 instead of an endless task list.
   - Modular record types: lists, plans, journals, and galleries.
   - Card-based review experience.
   - Warm visual language with soft colors, gentle feedback, and empty states.
   - Complete functionality behind simple paths.

6. Making It Real
   - Briefly mention SwiftUI, SwiftData, iCloud sync, StoreKit subscriptions, localization, and data reset/migration work.
   - Frame implementation as the work required to make the designed experience stable and usable.

7. Reflection
   - Feeling is not decoration; it shapes whether people want to come back.
   - The project demonstrates the ability to move from a vague emotional need to a complete product.

## Portfolio Data Changes

Replace the existing placeholder-style first project in `src/content/projects.ts` with a Selfly case study entry. Keep the current content model for now: `title`, `subtitle`, `timeframe`, `role`, `tags`, `highlights`, and `sections`.

Use Chinese content first. English translation can follow after the structure feels right.

## Screenshot Needs

Best screenshots to add later:

- Today page with Top 3.
- Explore page with modules or templates.
- Create module sheet.
- Journal or gallery detail page.
- Review card page.

Screenshots are not required for the first text-only pass, because the current portfolio project model does not include image fields.

## Acceptance Criteria

- Selfly appears as a real project instead of a placeholder case study.
- The writing emphasizes UX/product design over implementation.
- The content clearly explains origin, problem, strategy, UX decisions, implementation credibility, and reflection.
- The page should read as personal but professional.
