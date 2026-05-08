# Homepage Info Wall Design

## Goal

Turn the homepage into a one-screen information wall while preserving the existing visual language. This is a layout and content-organization change, not a visual redesign.

The homepage should feel like a wall with information pinned onto it: the existing center hero stays dominant, existing project cards keep their current sticky-note details, and the former about/contact text becomes smaller static note cards around the hero.

## Non-Negotiable Visual Constraints

The center title area must keep the current homepage treatment:

- `StickerTitle` remains unchanged.
- The smile status dot remains unchanged.
- `Hangzhou · Open to work` remains the same pill style.
- The orange subtitle sticker remains unchanged.
- The two hero paragraphs keep the same text style as much as the new layout allows.

The project cards must keep the current homepage treatment:

- The outer white paper card remains.
- The circular pin stays at the top center and uses the same CSS structure.
- The inner colored `workNote` panel remains.
- Existing per-card rotations, vertical offsets, shadows, hover lift, focus styles, title, metadata, and `查看案例 →` remain.
- Project cards stay clickable links to their existing project detail pages.

New static information cards should derive from the project card style instead of introducing a new component language. They can be smaller, but they should still read as the same family: paper surface, top pin, inner colored note, light rotation, and soft shadow.

## Content Model

The homepage contains three content groups:

1. **Hero**
   - Status tag.
   - `Jiamin Li` sticker title.
   - Orange identity sticker.
   - Existing short intro paragraph.
   - Existing AI workflow paragraph.

2. **Projects**
   - Render the existing `projects` data.
   - Keep all three current project cards and their existing internal details.
   - These are the main interactive notes on the wall.

3. **Static Notes**
   - `我是谁`: product-oriented UI/UX designer and independent builder.
   - `我关注什么`: user value, information structure, usability, and deliverability.
   - `我能交付什么`: problem framing, task flows, prototypes, visual design, components, and handoff assets.
   - `联系`: email and GitHub as visible contact information. If keeping links does not visually imply all notes are buttons, email/GitHub may remain clickable inside the note; otherwise keep the note static and rely on header navigation/resume links.

If the one-screen wall becomes crowded, reduce static note copy first. Do not remove project card details or alter the title treatment to make room.

## Desktop Layout

Use a single first-viewport wall section on desktop.

- The hero stays centered and remains the visual anchor.
- Project cards are placed around the lower and side areas of the wall while keeping their current size and note styling.
- Static notes are smaller and occupy secondary positions around the left and right sides.
- Cards may use absolute positioning or a controlled CSS grid, but they must not overlap the hero text or each other.
- The wall should fit within one viewport on common desktop sizes. It can still allow a small amount of vertical scroll if needed for browser chrome and responsive safety, but the design intent is one screen.

The layout should preserve the handmade feeling from the existing project cards through rotation and offsets, while still being readable and scan-friendly.

## Mobile Layout

Mobile should not force an absolute-positioned wall.

- The hero remains first.
- Project cards stack using the existing mobile behavior: one column, no exaggerated rotation/offset.
- Static information notes stack after or between project cards using a compact single-column layout.
- Text must not overlap or overflow.

## Navigation And Anchors

The current header can stay visually unchanged.

- `/#project` should still take users to the project cards or the wall area containing the project cards.
- `/#about` can target the static information notes area within the wall.
- `/#where` can target the contact note.

If the one-screen structure makes separate sections unnecessary, use semantic IDs on the relevant cards or card groups instead of keeping full vertical sections.

## Implementation Notes

Prefer a small amount of duplication only where it keeps the homepage simple. If the project card markup needs to be reused for static notes, create a focused helper component or local data structure only if it reduces repeated JSX without changing the rendered styles.

Likely CSS direction:

- Keep the existing `.hero`, `.title`, `.heroTag`, `.stickerSub`, `.subtitle`, `.tagline`, `.workList`, `.workItem`, `.workLink`, `.pin`, and `.workNote` visual rules.
- Add a wall layout wrapper for desktop positioning.
- Add static note variants that reuse the paper/pin/inner-note structure at a smaller size.
- Keep the existing mobile project card reset and extend it to static notes.

## Accessibility

- Project cards remain semantic links.
- Decorative pins remain `aria-hidden`.
- Static notes should not look like buttons unless they contain real links.
- Focus styles for project cards and any contact links must remain visible.
- Reading order should remain sensible in DOM order even when desktop CSS positions cards visually around the hero.

## Verification

Run lint after implementation.

Visually verify the homepage at desktop and mobile widths:

- Center title details match the current homepage.
- Project card details match the current homepage.
- Pins on project cards and static notes match the existing pin language.
- The page reads as a one-screen information wall on desktop.
- Text does not overlap the hero, cards, or navigation.
- Mobile stacks cleanly without horizontal scroll.
