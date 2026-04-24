export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  timeframe: string;
  role: string;
  tags: string[];
  highlights: string[];
  sections: Array<{
    title: string;
    bullets?: string[];
    paragraphs?: string[];
  }>;
};

export const projects: Project[] = [
  {
    slug: "ai-app-0-to-launch",
    title: "AI-assisted solo build: an app from 0 → launch",
    subtitle: "From an idea to something downloadable — flows, UI, system, iteration, and launch assets",
    timeframe: "2026",
    role: "Solo product designer (AI as a collaborator)",
    tags: ["UI/UX", "Product thinking", "Design system", "AI workflow", "Launch"],
    highlights: [
      "From 0→1: turned vague needs into testable goals + key task flows",
      "From messy→solid: built a reusable system to iterate fast (without looking cheap)",
      "From design→store: screenshots, copy, description, and a launch checklist",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A solo end-to-end app project with a simple goal: make it real and make it launchable. AI helped me explore and iterate faster — but key product decisions stayed grounded in user value, hierarchy, usability, and feasibility.",
        ],
      },
      {
        title: "Problem & goals",
        bullets: [
          "Core problem: one sentence (e.g. users struggle to ___ in ___ scenario)",
          "Target users: who, when, and why this matters",
          "Success signals: activation, retention, conversion, or a concrete validation plan",
        ],
      },
      {
        title: "Process (timeline)",
        bullets: [
          "Research: competitor scan, lightweight user input, synthesizing pain points (AI for faster synthesis)",
          "Define: journey, IA, and the key task flow",
          "Prototype: low → high fidelity, with real states (empty/error/loading)",
          "System: typography, color, spacing, components (buttons/inputs/cards/lists/modals)",
          "Validation: walkthroughs / small tests, then iterate",
        ],
      },
      {
        title: "Outcome & deliverables",
        bullets: [
          "Launch assets: store copy, keywords, screenshots, icons, privacy notes",
          "Design handoff: clean Figma structure, components, specs, and a checklist",
          "Reflection: what worked, what didn’t, and what I’d do next",
        ],
      },
    ],
  },
  {
    slug: "project-b",
    title: "Project B (placeholder)",
    subtitle: "Use this to show a different strength: complex B2B flows, dashboards, or systems thinking",
    timeframe: "2025",
    role: "Product designer",
    tags: ["B2B", "Information architecture", "Complex flows"],
    highlights: ["One-line outcome 1", "One-line outcome 2", "One-line outcome 3"],
    sections: [
      {
        title: "Overview",
        paragraphs: ["Replace this with a real project. Emphasize context, constraints, and results."],
      },
    ],
  },
  {
    slug: "project-c",
    title: "Project C (placeholder)",
    subtitle: "Show taste & storytelling: brand, campaign, or a concept project is fine",
    timeframe: "2025",
    role: "Product designer",
    tags: ["Visual craft", "Narrative", "Motion (optional)"],
    highlights: ["One-line highlight 1", "One-line highlight 2", "One-line highlight 3"],
    sections: [
      {
        title: "Overview",
        paragraphs: ["Replace this with a real project. Keep structure clear and the pacing crisp."],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
