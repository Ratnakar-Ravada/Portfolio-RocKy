export interface ExperienceStory {
  chapter: string;
  companyLabel: string;
  years: string;
  title: string;
  paragraphs: string[];
  projectIds: string[];
}

export const experienceStories: Record<string, ExperienceStory> = {
  evernorth: {
    chapter: "The current chapter",
    companyLabel: "Evernorth",
    years: "2025 to now",
    title: "Building AI products, and the systems around them.",
    paragraphs: [
      "At Evernorth, I build products that bring AI into everyday work. Prompt Library connects prompt creation, discovery, collaboration, and secure integrations. Expensia brings agents, policy retrieval, receipt evidence, external verification, and human review into expense-claim processing.",
      "I also contribute to the systems around those products: shared LLM evaluation and governance for Cigna’s Enablement Office, and an LLMLingua-2 compression playground developed with R&D. Together, these projects span application engineering, AI quality, experimentation, and cloud delivery.",
    ],
    projectIds: [
      "ai-prompt-library",
      "expensia",
      "llm-evaluation-governance",
      "prompt-compression-playground",
    ],
  },
  pivony: {
    chapter: "Before that",
    companyLabel: "Pivony",
    years: "2023 to 2025",
    title: "Making customer feedback easier to explore.",
    paragraphs: [
      "At Pivony, I worked on a Voice of Customer platform that analyzes customer reviews across platforms. My work connected brand comparisons and interactive charts with the reviews behind them, so people could move from an overview into the detail.",
      "I also built feedback workflows for annotators and reporting tools, including scheduled deliveries and reports shaped around a specific date range, sentiment, intent, or category.",
    ],
    projectIds: ["competitor-analysis", "automated-reports"],
  },
  "circle-security": {
    chapter: "The internship chapter",
    companyLabel: "Circle Security",
    years: "2023",
    title: "Where files meet identity.",
    paragraphs: [
      "My internship at Circle Security centered on a file management application with encrypted data and credential-free authentication.",
      "I worked on the application and its sign-in flows, including OAuth 2.0, JWT and bearer tokens, and social single sign-on.",
    ],
    projectIds: ["secure-file-management"],
  },
};
