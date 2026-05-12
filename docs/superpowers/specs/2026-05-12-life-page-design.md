# Life Page Design

## Goal

Add a low-priority personal-interest entry to the homepage and a dedicated `/life` page for non-design content.

The feature should lightly show that Jiamin is a person with a lived, tactile, and curious life outside design. It is for interviewers and for Jiamin herself, but it must not compete with the portfolio's primary design-work narrative.

## Positioning

This is not a main portfolio section and not a resume conversion action. It should feel like a small personal note on the board.

The homepage should communicate:

- Design work remains the main reason to stay.
- Personal interests add warmth and memorability.
- The content is optional and discoverable, not required reading.

## Homepage Entry

Add one small side sticky note on the homepage that links to `/life`.

Recommended text:

- Title: `非设计小事`
- Body: `手绳 / 钢琴 / 猫 / 旅行`

The note should sit in a secondary position near the edge of the existing information wall. It should not be placed in the top navigation because that would give it the same weight as the resume link. It should not be placed among the project cards because that would make it look like a case study.

Visual treatment should reuse the homepage note language:

- Paper or inner-note surface.
- Top pin.
- Slight rotation.
- Soft shadow.
- Hover lift.
- Visible focus state.

The note can use a distinct accent color, but it should still feel like part of the current homepage system.

## `/life` Page

Create a dedicated page for non-design life content. The page should be easy to update later with real photos.

Use the reference image as inspiration for the page structure: browser-window-like sections with horizontal photo strips. Do not copy it directly or make the page overly dense. The portfolio already has a sticky-note board language, so the page should combine that system with a lighter album/window feel.

Recommended sections:

1. `手作`
   - 编织手绳
   - 穿珠子
   - 自己缝衣服
2. `正在学`
   - 钢琴
3. `一起生活`
   - 猫
4. `到处看看`
   - 旅行
   - 看书

Each section should support a horizontal row of photos. Until final photos are available, the implementation may use styled placeholders, but the content model should make replacing them straightforward.

## Content Tone

The copy should be casual but restrained. It should sound personal, not like a marketing pitch.

Good direction:

- `这些不是作品项目，但它们也在塑造我看东西和动手做事的方式。`
- `最近在慢慢学钢琴，也会做一些手作。`
- `这里放一些和设计没有直接关系的小事。`

Avoid:

- Long autobiographical paragraphs.
- Overexplaining why every hobby relates to design.
- Making the page feel like a social feed.

## Information Architecture

Routes:

- `/` keeps the main portfolio wall.
- `/life` holds the personal-interest content.

Navigation:

- Homepage side note links to `/life`.
- `/life` should include normal site header navigation back to the board through the existing brand link.
- No extra top-nav item is required.

## Visual Constraints

Homepage entry:

- Must stay visually smaller and lower-priority than project cards.
- Must not overlap hero text, project cards, existing static notes, or the sticky header.
- Must work on desktop and mobile.

Life page:

- Should use visual assets or photo placeholders from the start.
- Should be photo-forward once real images are added.
- Should not use a marketing-style hero section.
- Should not use nested cards.
- Should keep rounded corners modest and consistent with the current site.
- Should preserve readable text and avoid overlap on mobile.

## Data Shape

Use a simple local data structure for the `/life` page. A suggested shape:

```ts
const lifeSections = [
  {
    id: "handmade",
    title: "手作",
    description: "编织手绳、穿珠子、自己缝衣服。",
    items: [
      { label: "手绳", image: null },
      { label: "穿珠子", image: null },
      { label: "缝衣服", image: null },
    ],
  },
];
```

This keeps the first implementation simple while making future photo replacement direct.

## Accessibility

- The homepage note must be a real link with visible keyboard focus.
- Decorative pins and browser-window dots should be `aria-hidden`.
- Photo items need meaningful `alt` text once real photos are added.
- Placeholder items should not pretend to be real images.
- The `/life` page should have one clear `h1` and section headings.

## Mobile Behavior

On mobile, the homepage note should join the stacked note flow instead of using fragile absolute positioning.

The `/life` page should stack sections vertically. Photo rows can remain horizontally scrollable if the scroll affordance is clear and no text is hidden.

## Verification

After implementation:

- Run lint.
- Verify homepage desktop and mobile layout.
- Verify the side note does not draw more attention than project cards.
- Verify `/life` renders at desktop and mobile widths.
- Verify keyboard focus reaches the homepage note and any interactive content.
- Verify there is no horizontal page overflow except intentional photo-row scrolling.
