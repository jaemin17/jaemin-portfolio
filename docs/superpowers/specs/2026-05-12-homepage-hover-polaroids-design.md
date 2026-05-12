# Homepage Hover Polaroids Design

## Goal

Add hidden polaroid photos to the homepage so most visible labels reveal a small photo on hover, while the existing bottom photos and time note stay unchanged.

## Scope

The homepage should show a hover polaroid for:

- The two title words, `Jiamin` and `Li`.
- The `Hangzhou · Open to work` status tag.
- The orange identity sticker below the title.
- The three project sticky notes.
- The static info notes: about, focus, delivery, contact, and the life note.

The time note and the two always-visible polaroids remain as they are. Mobile touch layouts should not show hover-only photos, because there is no reliable hover interaction and the screen is tight.

## Interaction

Each trigger keeps its current behavior. If it is already a link, it stays clickable. Hovering or keyboard-focusing a trigger reveals a decorative polaroid near the trigger, positioned outside the text area so it does not block reading.

The revealed polaroid uses the same visual language as the existing `me` and `my cat` photos: off-white paper, thin border, tape, square image area, subtle shadow, small handwritten caption, and a slight rotation/lift.

## Image Strategy

Use CSS placeholder photo panels for now. Each trigger gets a distinct caption and color wash so the hidden photos feel intentional before real images are available. The structure should be easy to update later by replacing a placeholder with a real image source.

## Implementation Shape

Add a small local wrapper component in `src/app/page.tsx` that renders:

- The existing trigger content.
- A decorative hover polaroid sibling.

The component accepts placement and caption metadata. Styling stays in `src/app/page.module.css`, reusing existing polaroid dimensions, shadows, tape, caption, transition, and responsive rules.

## Verification

Run lint and visually check the homepage in a browser at desktop and mobile widths:

- Desktop hover/focus reveals polaroids.
- Floating polaroids do not cover the trigger text.
- Links still work.
- Existing bottom polaroids and time note are unchanged.
- Mobile does not add clutter from hover-only photos.
