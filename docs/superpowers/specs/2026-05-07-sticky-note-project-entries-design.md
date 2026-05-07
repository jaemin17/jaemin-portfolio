# Sticky Note Project Entries Design

## Goal

Change the three homepage project entries into lightweight sticky-note style cards while preserving the current background, hero title treatment, subtitle sticker, hero tags, small links, and surrounding copy.

## Scope

Only the `Stuff I've done` project entry area changes. The implementation should not alter global background variables, `StickerTitle`, hero copy, navigation/header styling, about section, where section, previous versions section, or project detail pages.

## Visual Direction

Use the first proposed direction: a lightweight sticky-note grid. Each project entry remains an obvious clickable route to its project detail page, but the visual shape should feel like a pinned paper note:

- A white paper surface with a soft shadow and modest rounded corners.
- A small circular pin centered near the top edge.
- A pastel inner note panel behind the title and metadata.
- Slight per-card rotation so the three entries feel placed by hand.
- Clear hover feedback through a small lift and reduced rotation.

The page background remains `--bg: #fff5e4`. The design should complement the existing hand-made sticker title instead of replacing it.

## Content

Each card should continue to show the project title and a concise description/tag line using the existing `projects` data. The existing text hierarchy should remain readable:

- Project title is the main label.
- Subtitle and first three tags are supporting metadata.
- The whole card is the link target.

No new project content is required.

## Layout

Desktop should show the three entries as a compact grid with three columns. Cards can have minor vertical offsets and rotations for the sticky-note feeling, but the layout must remain scan-friendly and not overlap.

Tablet should use two columns. Mobile should use one column, reduce or remove exaggerated offsets, and keep text contained within cards.

## Accessibility

The entries remain semantic links inside the existing ordered list. Decorative pins and paper effects should be CSS-only and should not add extra readable text. Focus styles must remain visible through the browser default or explicit CSS.

## Verification

Run lint after implementation. If a dev server is available, visually check the homepage at desktop and mobile widths to verify:

- The hero/title area is unchanged.
- The background color is unchanged.
- The three project entries read as pinned sticky notes.
- Text does not overlap or overflow on mobile.
