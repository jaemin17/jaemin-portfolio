export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cardTitle?: string;
  cardSubtitle?: string;
  timeframe: string;
  role: string;
  tags: string[];
  highlights: string[];
  featured?: {
    eyebrow: string;
    origin: string;
    problem: string;
    visualLabel: string;
    visualNotes: string[];
    strategy: Array<{
      title: string;
      principle: string;
      description: string;
    }>;
    uxDecisions: string[];
    implementation: string[];
    reflection: string[];
    appDownloadUrl?: string;
    visualSections: Array<{
      label: string;
      title: string;
      body: string;
      notes: string[];
      visual:
        | "overview"
        | "structure"
        | "focus"
        | "modules"
        | "review"
        | "build"
        | "completion"
        | "challenge"
        | "consolidation"
        | "templates"
        | "rhythm"
        | "shiftCards"
        | "shiftCompact";
      before?: string;
      after?: string;
      capability?: string;
    }>;
  };
  sections: Array<{
    title: string;
    bullets?: string[];
    paragraphs?: string[];
  }>;
};
