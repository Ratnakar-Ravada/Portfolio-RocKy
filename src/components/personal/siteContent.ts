export interface Project {
  id: string;
  title: string;
  category: "personal" | "professional";
  summary: string;
  overview: string;
  implementation: string[];
  images: string[];
  imageKind?: "screenshot" | "diagram";
  imageCaption?: string;
  imageLabel?: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  contributions: { title: string; details: string[] }[];
  technologies: string[];
  practices: string[];
  libraries?: string[];
}

export interface PersonalFacts {
  name: string;
  shortName: string;
  alias: string;
  role: string;
  location: string;
  education: string;
  introduction: string;
  interests: { title: string; description: string }[];
  languages: { name: string; proficiency: string }[];
}

export interface ContactDetails {
  email: string;
  github: string;
  linkedin: string;
}

export interface ToolGroup {
  id: string;
  name: string;
  description: string;
  tools: string[];
}

export interface Certificate {
  id: string;
  title: string;
  domain: "Gen AI" | "Cloud";
  provider: string;
  verificationUrl: string;
  credentialId?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  period: string;
  certificateUrl: string;
}

export const personalFacts: PersonalFacts = {
  name: "Ravada Ratnakar",
  shortName: "Ratnakar",
  alias: "RocKy",
  role: "Software Engineer",
  location: "Hyderabad, India",
  education:
    "Bachelor of Technology, Information Technology | IIIT Bhubaneswar",
  introduction:
    "I am a software engineer at Evernorth Health Services, part of The Cigna Group. I work across interfaces, APIs, AI features, and cloud delivery. This is my space for documenting what I build and the interests that keep me curious beyond the code.",
  interests: [
    {
      title: "Movies",
      description: "A favourite way to switch off and get into another story.",
    },
    {
      title: "Personal builds",
      description:
        "Making apps and websites for myself, experimenting with technology, and exploring what I can build with AI.",
    },
    {
      title: "Gaming",
      description:
        "A favorite way to spend time at a computer beyond the work.",
    },
    {
      title: "Badminton",
      description:
        "I play regularly. A different kind of game, away from the keyboard.",
    },
    {
      title: "Travel and new places",
      description:
        "I love travelling, exploring new places, and finding another reason to get out on the road.",
    },
    {
      title: "Bikes and car journeys",
      description:
        "An interest in bikes, cars, and the journeys they make possible.",
    },
    {
      title: "Food and cooking",
      description:
        "A foodie who loves eating and cooking different cuisines. There is usually something new to try.",
    },
  ],
  languages: [
    {
      name: "Telugu",
      proficiency: "Native",
    },
    {
      name: "Hindi",
      proficiency: "Fluent",
    },
    {
      name: "English",
      proficiency: "Professional",
    },
  ],
};

export const contact: ContactDetails = {
  email: "ratnakarravada11@gmail.com",
  github: "https://github.com/Ratnakar-Ravada",
  linkedin: "https://www.linkedin.com/in/ratnakar-ravada/",
};

export const projects: Project[] = [
  {
    id: "ai-prompt-library",
    title: "AI Prompt Library",
    category: "professional",
    summary:
      "A full stack home for creating, evaluating, discovering, and sharing AI prompts.",
    overview:
      "An enterprise AI platform developed at Evernorth Health Services for reusable prompts and agent instructions. My contributions span product UX, React interfaces, FastAPI services, AI-assisted authoring, safety and evaluation, discovery, collaboration, integration APIs, analytics, and AWS delivery.",
    implementation: [
      "Built across a React and TypeScript frontend with Redux Toolkit, MUI, and SCSS, and a Python FastAPI backend using SQLAlchemy, PostgreSQL, pgvector, and Redis. The work connects the editing experience to data, AI services, access controls, and delivery workflows.",
      "Developed prompt creation and editing, metadata and filters, favorites, version history and restoration, persistent drafts, and shareable links. Extended these workflows to Microsoft Copilot Agent Builder instructions with their connected apps, capabilities, and knowledge settings.",
      "Implemented a multi-pass AI Prompt Builder with refinement instructions, protected text selections, undo, and follow-up suggestions. Model fallback handling, rate limits, and outcome tracking support the refinement experience.",
      "Integrated layered prompt-injection checks using semantic and rule-based screening followed by LLM-as-a-judge evaluation. PII/PHI redaction runs before persistence, and DeepEval GEval quality checks evaluate clarity, completeness, output guidance, and reusability for each version.",
      "Developed weighted lexical and pgvector semantic search, HyDE query expansion, duplicate detection, and search across authorized historical versions. Redis metadata fast paths support qualifying discovery requests.",
      "Built personalized recommendations using prompt content, engagement, team activity, role, and department signals. Candidate refresh jobs and trending rankings support discovery while current access rules are applied when results are served.",
      "Implemented team membership and roles, organization-aware user selection, bulk sharing, and exact-version prompt forks with source attribution. Ownership transfers retain an auditable journey through acceptance, rejection, pass-on actions, and review routing, with reminders and email notifications.",
      "Developed spreadsheet uploads and bulk export, sharing, and deletion with SSE progress. Heartbeats, resumable streams, duplicate-review soft interrupts, and progress docks let longer workflows continue without blocking the editor.",
      "Built personal and team API credentials, token issuance, rotation and revocation, authenticated prompt read/search APIs, and integration documentation. The API reuses current prompt access rules and records the calling user or team consistently.",
      "Built live usage analytics and exports for engagement, users, teams, public API calls, discovery, cache efficiency, and AI acceptance. Token reporting separates in-app and Public API consumption by operation, model, and caller.",
      "Worked on Docker builds, GitHub Actions workflows, AWS service configuration, scheduled jobs, Redis-backed analytics persistence, and verified S3 archival. Automated frontend and backend checks support ongoing changes.",
      "Implemented MCP tool contracts and a local client adapter for prompt reads and standalone analysis through AgentCore Gateway, with Terraform and OIDC-based deployment automation. MCP integration development is part of the project scope.",
      "Contributed product details around featured prompts, announcements, release notes, deep links, API access guidance, and alignment with the wider AI Hub experience.",
    ],
    images: ["/prompt-library-flow.svg"],
    imageKind: "diagram",
    imageCaption:
      "Workflow diagram of the platform: authoring, safety and quality checks, discovery, collaboration, API access, and analytics.",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MUI",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
      "pgvector",
      "Claude",
      "DeepEval",
      "AWS",
      "Docker",
      "GitHub Actions",
      "MCP",
    ],
    features: [
      "Prompt and agent-instruction creation, editing, versioning, restoration, drafts, favorites, and sharing.",
      "AI refinement with protected selections, iterative suggestions, undo, model fallback handling, and outcome tracking.",
      "Layered injection checks, PII/PHI redaction, and per-version prompt quality evaluation.",
      "Lexical and semantic search, HyDE query expansion, duplicate detection, and authorized all-version discovery.",
      "Personalized recommendations, trending candidates, and Redis-backed discovery optimizations.",
      "Teams, organization-aware user selection, bulk sharing, and exact-version forks with attribution.",
      "Auditable ownership transfers with acceptance, rejection, pass-on, review routing, and notifications.",
      "Spreadsheet import and bulk actions with resumable SSE progress, heartbeats, and duplicate review.",
      "Personal/team credentials and authenticated integration APIs with current access checks.",
      "Live analytics, exports, and token usage reporting across in-app and Public API activity.",
      "Featured prompts, targeted announcements, in-app release notes, and deep-link experiences.",
      "Container delivery, CI/CD workflows, scheduled processing, S3 archival, and MCP integration development.",
    ],
  },
  {
    id: "expensia",
    title: "Expensia",
    category: "professional",
    summary:
      "An expense-management application using RAG and Image RAG to support claim validation and review.",
    overview:
      "A full expense-management application developed at Evernorth Health Services, covering receipt intake, validation, approval, and human review. Expensia combines RAG for supporting context, Image RAG for receipt-similarity checks, and AI-assisted assessment. My contributions span product planning, UX and workflow design, frontend and backend engineering, AI integration, testing, and delivery.",
    implementation: [
      "Expensia addresses manual reimbursement processing, delayed compliance and anomaly checks, and fragmented HRMS, ERP, and travel context. It brings claim information and supporting evidence into a connected review experience.",
      "Contributed across product planning, UX and workflow design, application architecture, frontend and backend implementation, AI integration, testing, and delivery.",
      "Connected receipt and document extraction, including OCR, with RAG-based context retrieval so claim assessments can use extracted information and supporting context together.",
      "Image RAG adds receipt-similarity comparison to flag possible duplicate or fabricated claims, bringing visual evidence into the assessment alongside extracted receipt information.",
      "Connected policy checks, cross-source validation, anomaly detection, claim value, and risk with explained decisions and tiered approval paths.",
      "Discrepancies route to managers or administrators with the supporting evidence and reasons. Human reviewers can make contextual decisions and provide feedback.",
      "Built an interactive review experience with stage status, decision traces, claim scenarios, feedback paths, and a navigable process view.",
    ],
    images: ["/expensia-flow.svg"],
    imageKind: "diagram",
    imageLabel: "PRODUCT OVERVIEW",
    imageCaption:
      "Product overview: expense-review challenges, receipt extraction, RAG context retrieval, Image RAG receipt-similarity checks, policy and anomaly assessment, and contextual human review.",
    tags: [
      "RAG",
      "Image RAG",
      "LangGraph",
      "React",
      "TypeScript",
      "OCR",
      "Multimodal AI",
      "Human-in-the-loop",
    ],
    features: [
      "Claim intake with receipt and document extraction, including OCR.",
      "RAG-based retrieval of supporting context for claim assessment.",
      "Image RAG receipt-similarity checks that flag possible duplicates or fabrication.",
      "Policy checks, cross-source validation, anomaly detection, and explained assessments.",
      "Tiered approvals and manager or administrator review based on claim value and risk.",
      "Claim-stage visibility, decision traces, reviewer feedback, and interactive process navigation.",
      "Contributions across product, design, architecture, frontend, backend, AI, testing, and delivery.",
    ],
  },
  {
    id: "meet-scheduler",
    title: "Meet Scheduler",
    category: "personal",
    summary: "A small home for Google Meet calls and Calendar events.",
    overview:
      "A meeting scheduler that brings Google sign-in, instant Meet creation, and Calendar scheduling into one interface. Meetings can also be deleted from the app, removing the corresponding Calendar event.",
    implementation: [
      "Built with React, TypeScript, and the Next.js App Router. NextAuth.js handles Google SSO through an OAuth 2.0 client, while shadcn/ui and Tailwind CSS provide the interface.",
      "Google Meet and Calendar APIs connect meeting actions to the Google account. The frontend and API server are hosted on Vercel.",
    ],
    images: [
      "/Meet-1.png",
      "/Meet-2.png",
      "/Meet-3.png",
      "/Meet-5.png",
      "/Meet-4.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "NextAuth.js",
      "Google OAuth",
      "Google Calendar API",
      "Google Meet API",
      "shadcn/ui",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Sign in with Google through NextAuth.js.",
      "Create and delete instant Google Meet meetings.",
      "Schedule meetings by creating Google Calendar events.",
      "Delete a meeting and its associated Calendar event together.",
      "Frontend and API server deployed on Vercel.",
    ],
    liveUrl: "https://meet-scheduler-mvp.vercel.app/",
    sourceUrl: "https://github.com/Ratnakar-Ravada/Meet-Scheduler",
  },
  {
    id: "realtime-analytics",
    title: "Real-time Analytics Dashboard",
    category: "personal",
    summary: "Streaming data, moving charts, and no refresh button.",
    overview:
      "An analytics dashboard that uses simulated data from a WebSocket server to update charts and activity metrics as new events arrive.",
    implementation: [
      "A React and TypeScript frontend renders Recharts visualizations, metric cards, and a session-duration progress bar. The interface uses shadcn/ui and Tailwind CSS.",
      "A Node.js WebSocket server supplies the simulated stream. The frontend is hosted on Vercel and the WebSocket server on Railway.",
    ],
    images: ["/Analytics Dashboard.png"],
    tags: [
      "React",
      "TypeScript",
      "WebSockets",
      "Node.js",
      "Recharts",
      "shadcn/ui",
      "Tailwind CSS",
      "Vercel",
      "Railway",
    ],
    features: [
      "Track page views over time with a line chart.",
      "Filter by date, sentiment, and platform.",
      "See active users and page views from the last minute.",
      "View average session duration in a progress bar.",
      "Receive WebSocket updates without manually reloading the page.",
      "Frontend on Vercel and WebSocket server on Railway.",
    ],
    liveUrl: "https://realtime-analytics-dashboard.vercel.app/",
    sourceUrl:
      "https://github.com/Ratnakar-Ravada/realtime-analytics-dashboard",
  },
  {
    id: "competitor-analysis",
    title: "Competitor Analysis",
    category: "professional",
    summary: "Comparing brands through what their customers say.",
    overview:
      "An interactive dashboard built at Pivony for comparing customer feedback across brands and product categories. Charts give an overview, with individual reviews available for closer inspection.",
    implementation: [
      "React and Chart.js render bar, doughnut, and line charts grouped by brand, category, and time. A Flask REST API and Amazon DynamoDB support the application.",
      "The comparison includes feedback from sources such as X, Sikayet Var, Google Play, and the App Store. Filters narrow the data by date range, sentiment, and platform, while a side panel exposes the reviews behind a group or category.",
    ],
    images: [
      "/Comp-1.png",
      "/Comp-2.png",
      "/Comp-3.png",
      "/Comp-4.png",
      "/Comp-5.png",
    ],
    tags: ["React", "Chart.js", "Flask", "Amazon DynamoDB", "REST API"],
    features: [
      "Compare brands and competitors using customer-review data.",
      "Filter by date, sentiment, and platform.",
      "Inspect the reviews behind a group or category in a side panel.",
      "Compare groups, categories, and subcategories.",
      "Explore bar, doughnut, and line visualizations.",
    ],
  },
  {
    id: "automated-reports",
    title: "Automated Report Generator",
    category: "professional",
    summary: "Customer insights delivered on a schedule, or on demand.",
    overview:
      "A reporting tool built at Pivony that turns AI-analyzed customer data into scheduled and ad hoc reports. Users can choose the filters that shape the report, then receive it by email.",
    implementation: [
      "The system uses Python, React, Chart.js, Playwright, and cron for report generation and scheduling. Mailchimp handles report email delivery.",
      "Scheduled reports run daily, weekly, or monthly. The in-platform workflow also generates ad hoc reports using custom date ranges, sentiment, intent, and category filters, with a layout consistent with the platform.",
    ],
    images: [
      "/Report-1.png",
      "/Report-2.png",
      "/Report-3.png",
      "/Report-4.jpg",
      "/Report-5.jpg",
      "/Report-6.jpg",
      "/Report-7.jpg",
    ],
    tags: ["Python", "React", "Chart.js", "Playwright", "cron", "Mailchimp"],
    features: [
      "Generate reports daily, weekly, or monthly.",
      "Create ad hoc reports with custom filters.",
      "Choose date ranges, sentiment, intent, and categories.",
      "Keep the report interface consistent with the platform.",
      "Deliver reports through email using Mailchimp.",
    ],
  },
  {
    id: "secure-file-management",
    title: "Secure File Management System",
    category: "professional",
    summary: "File storage with QR sign-in and encryption.",
    overview:
      "A file management web application developed during an internship at Circle Security. It combines credential-free authentication with encrypted file storage and sharing.",
    implementation: [
      "The interface uses HTML, CSS, and vanilla JavaScript, with a Node.js and Express backend backed by MongoDB and Mongoose.",
      "Circle Access supplies QR code-based authentication and Circle Data provides file encryption. The authentication flow also uses OAuth 2.0, JWT, and bearer tokens, with social SSO and role-based access.",
    ],
    images: [
      "/Homepage.png",
      "/Circle QR-Code.png",
      "/Circle Authenticated.jpg",
      "/Dashboard.png",
      "/File manager.png",
    ],
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "OAuth 2.0",
      "JWT",
      "Circle Access",
      "Circle Data",
    ],
    features: [
      "Sign in by scanning a QR code with Circle Access.",
      "Encrypt files with Circle Data.",
      "Use social media single sign-on.",
      "Control access through roles.",
      "Store and share files through a dedicated web interface.",
    ],
  },
  {
    id: "pivot-analysis",
    title: "Pivot Analysis",
    category: "professional",
    summary: "Looking at customer feedback from another angle.",
    overview:
      "An analysis interface for exploring customer feedback with pivot filters and interactive charts. It makes the difference between filtered and unfiltered data distributions visible.",
    implementation: [
      "Built with React, Flask REST APIs, Amazon DynamoDB, and Chart.js. Interactive doughnut charts show the feedback distributions.",
      "A multilevel dropdown selects a key column for pivot filtering. Multiple filters can be combined with union and intersection operations to inspect different slices of reviews.",
    ],
    images: ["/Pivot-1.png", "/Pivot-2.png", "/Pivot-3.png", "/Pivot-4.png"],
    tags: ["React", "Flask", "REST API", "Amazon DynamoDB", "Chart.js"],
    features: [
      "Explore customer-feedback analysis in interactive doughnut charts.",
      "Compare filtered and unfiltered data distributions.",
      "Filter reviews by a pivot column using a multilevel dropdown.",
      "Combine pivot filters with union and intersection operations.",
    ],
  },
];

export const workHistory: WorkExperience[] = [
  {
    id: "evernorth",
    company: "Evernorth Health Services | The Cigna Group",
    role: "Software Engineer",
    location: "",
    period: "May 2025 - Present",
    description:
      "Working across full stack engineering, generative AI features, product experience, integration APIs, and AWS delivery. Key work includes AI Prompt Library and Expensia.",
    contributions: [
      {
        title: "AI Prompt Library: full stack product",
        details: [
          "Developed React and TypeScript interfaces and FastAPI services for reusable prompts and agent instructions.",
          "Built creation, editing, metadata, filtering, favorites, version history and restoration, persistent drafts, sharing, and connected product experiences.",
        ],
      },
      {
        title: "AI Prompt Builder",
        details: [
          "Implemented multi-pass AI refinement with temporary instructions, protected text selections, undo, and follow-up suggestions.",
          "Connected model fallback handling, rate limits, and outcome tracking to the editor and save pipeline.",
        ],
      },
      {
        title: "Prompt safety and evaluation",
        details: [
          "Combined semantic and rule-based injection screening with LLM-as-a-judge evaluation and escalation.",
          "Integrated PII/PHI redaction, DeepEval GEval quality checks, per-version results, and standalone analysis APIs.",
        ],
      },
      {
        title: "Search, discovery, and recommendations",
        details: [
          "Developed lexical and pgvector semantic search, HyDE query expansion, duplicate detection, and authorized historical-version discovery.",
          "Implemented Redis metadata fast paths and personalized recommendations using content, engagement, teams, role, and department signals.",
        ],
      },
      {
        title: "Teams and content governance",
        details: [
          "Built team roles, organization-aware user selection, bulk sharing, and exact-version prompt forks with source attribution.",
          "Implemented auditable ownership-transfer journeys, review routing, accept/reject/pass-on actions, reminders, and notifications.",
        ],
      },
      {
        title: "Reliable editing and bulk workflows",
        details: [
          "Developed spreadsheet upload and bulk export, sharing, and deletion workflows with SSE progress.",
          "Added heartbeats, stream resumption, duplicate-review soft interrupts, and progress docks for longer processing workflows.",
        ],
      },
      {
        title: "Public APIs and application security",
        details: [
          "Built personal/team credentials, token issuance, rotation, revocation, authenticated prompt reads/search, and integration documentation.",
          "Implemented credential protection, JWT verification, live access checks, and rate limiting.",
        ],
      },
      {
        title: "Analytics and operational visibility",
        details: [
          "Built live dashboards and exports covering engagement, users, teams, Public API activity, discovery, cache efficiency, and AI acceptance.",
          "Added model and token usage attribution by operation and caller, separating in-app and Public API reporting.",
        ],
      },
      {
        title: "Cloud delivery and lifecycle operations",
        details: [
          "Worked on Docker builds, GitHub Actions deployment workflows, AWS configuration, and scheduled processing jobs.",
          "Implemented Redis-backed analytics persistence, verified S3 archival, and automated frontend/backend checks.",
        ],
      },
      {
        title: "MCP integration development",
        details: [
          "Implemented AgentCore Gateway tool contracts and a local MCP adapter for prompt reads and standalone analysis.",
          "Developed Terraform and OIDC-based deployment automation while keeping existing prompt identity, access controls, and business logic in the API.",
        ],
      },
      {
        title: "Expensia: full application development",
        details: [
          "Contributed across product planning, UX and workflow design, architecture, frontend and backend engineering, AI integration, testing, and delivery for Expensia, a full expense-management application.",
          "Integrated RAG for supporting context and Image RAG for receipt-similarity checks that flag possible duplicate or fabricated claims.",
          "Connected receipt extraction and OCR, policy validation, cross-source and anomaly checks, explained decisions, and tiered manager or administrator review.",
        ],
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MUI",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
      "pgvector",
      "DeepEval",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "MCP",
    ],
    practices: [
      "Full stack product development",
      "AI prompt engineering and evaluation",
      "Application security",
      "API design",
      "CI/CD",
      "Automated testing",
      "Cloud delivery",
      "Workflow architecture",
    ],
  },
  {
    id: "pivony",
    company: "Pivony",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Oct 2023 - Apr 2025",
    description:
      "An AI-based Voice of Customer platform that analyzes reviews across platforms, helps brands compare customer feedback, and presents insights for improving the customer experience.",
    contributions: [
      {
        title: "Competitor analysis",
        details: [
          "Compared brands across product categories using reviews from X, Sikayet Var, Google Play, and the App Store.",
          "Built bar, doughnut, and line visualizations grouped by brand, category, and time, with date-range, sentiment, and platform filters.",
          "Added a side panel to inspect reviews behind a category or group.",
        ],
      },
      {
        title: "Feedback mechanism",
        details: [
          "Built a workflow for annotators to provide real-time category and decision feedback on AI-analyzed reviews.",
          "Visualized sentiment and decision analytics and used feedback to support prediction-model improvements.",
        ],
      },
      {
        title: "Automated reports",
        details: [
          "Implemented daily, weekly, and monthly reports from AI-analyzed customer data, delivered through Mailchimp.",
          "Added ad hoc report generation with custom date, sentiment, intent, and category filters.",
        ],
      },
    ],
    technologies: [
      "React",
      "Python",
      "Flask",
      "Amazon DynamoDB",
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
    ],
    practices: [
      "Staging and production environments",
      "CI/CD",
      "Nginx",
      "Ubuntu and Linux",
      "Design patterns",
      "Application architecture",
      "Agile development",
    ],
    libraries: [
      "Chart.js",
      "Ant Design",
      "React Redux",
      "React Router",
      "React i18n",
      "Boto3",
      "SQLAlchemy",
      "scikit-learn",
      "Werkzeug",
      "Flask-Pydantic",
      "Gensim",
      "Playwright",
      "pypdf",
      "Pandas",
    ],
  },
  {
    id: "circle-security",
    company: "Circle Security",
    role: "Software Developer Intern",
    location: "Hyderabad, Telangana",
    period: "Jan 2023 - Jul 2023",
    description:
      "Developed a file management web application with encrypted data and credential-free authentication provided by Circle.",
    contributions: [
      {
        title: "Secure file management",
        details: [
          "Built a file management application that combines file encryption with credential-free sign-in.",
          "Implemented OAuth 2.0 authentication using JWT and bearer tokens, with social single sign-on.",
        ],
      },
    ],
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Bearer tokens",
      "OAuth 2.0",
    ],
    practices: [
      "QR code-based authentication",
      "Digital signatures",
      "SHA-256",
      "Cryptographic libraries",
    ],
  },
];

export const toolGroups: ToolGroup[] = [
  {
    id: "gen-ai",
    name: "Gen AI",
    description:
      "Agents, retrieval, evaluation, and safeguards connected into useful workflows.",
    tools: [
      "LangGraph (multi-agent, supervisor, human-in-the-loop)",
      "LangChain",
      "LangSmith",
      "Agentic AI",
      "RAG",
      "Image / Multimodal RAG",
      "HyDE",
      "Embeddings",
      "LLM-as-a-judge",
      "DeepEval",
      "MCP",
      "Prompt Engineering",
      "Guardrails",
      "PII/PHI redaction",
    ],
  },
  {
    id: "llm-platforms",
    name: "LLM Platforms",
    description:
      "The model and gateway layers used to bring AI into an application.",
    tools: [
      "Anthropic Claude",
      "AWS Bedrock",
      "Bedrock AgentCore Gateway",
      "Enterprise AI Gateway",
      "LiteLLM",
    ],
  },
  {
    id: "languages",
    name: "Languages",
    description:
      "The languages behind application interfaces, services, data, and problem solving.",
    tools: [
      "Python (OOP)",
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
      "Data Structures & Algorithms",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description:
      "Async APIs, data models, typed contracts, authentication, and event streams.",
    tools: [
      "FastAPI (async, SSE, batch APIs)",
      "Flask",
      "Django",
      "SQLAlchemy",
      "Pydantic",
      "REST",
      "OAuth 2.0",
      "Okta / Google SSO",
      "JWT",
      "Node.js",
      "Express",
      "WebSockets",
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    description:
      "Interfaces, state management, and visualizations for the people using the system.",
    tools: [
      "React 19",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
      "Material UI",
      "PrimeReact",
      "Ant Design",
      "Shadcn UI",
      "Chart.js",
      "Recharts",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    id: "data",
    name: "Data",
    description:
      "Relational data, vector retrieval, caching, and the analysis behind the interface.",
    tools: [
      "PostgreSQL (pgvector, pg_trgm)",
      "Aurora",
      "SQL Server",
      "MySQL",
      "Redis",
      "MongoDB",
      "DynamoDB",
      "Firebase",
      "Pandas",
      "NumPy",
      "scikit-learn",
    ],
  },
  {
    id: "ci-cd",
    name: "CI/CD",
    description:
      "Changes carried through source control, automated checks, containers, and delivery.",
    tools: [
      "GitHub Actions",
      "Docker",
      "Automated builds",
      "Automated testing",
      "Deployment workflows",
      "Multi-environment delivery",
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    description:
      "Application hosting, managed data, model access, and scheduled workloads on AWS.",
    tools: [
      "AWS ECS Fargate",
      "AWS Lambda",
      "Amazon S3",
      "Amazon RDS / Aurora",
      "AWS Bedrock",
      "AWS Secrets Manager",
      "Amazon CloudWatch",
      "Amazon EventBridge",
      "Amazon API Gateway",
      "Application Load Balancer",
      "Amazon EC2",
      "Auto Scaling",
      "Terraform",
      "OpenShift",
      "Nginx",
      "Linux",
      "AWS KMS",
      "IAM / OIDC",
      "Amazon SES",
      "Vercel",
      "Railway",
    ],
  },
  {
    id: "tools-process",
    name: "Tools & Process",
    description:
      "The development, testing, design, and collaboration tools around the code.",
    tools: [
      "Pytest",
      "Vitest",
      "k6",
      "Playwright",
      "Postman",
      "Git",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Agile / SDLC",
      "Jira",
      "Confluence",
      "Figma",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    domain: "Gen AI",
    provider: "Edureka",
    verificationUrl:
      "https://www.edureka.co/my-certificate/1c6de6eb5998287f8ca5a59f44621642",
  },
  {
    id: "claude-architect",
    title: "Claude Certified Architect - Foundations",
    domain: "Gen AI",
    provider: "Anthropic",
    verificationUrl:
      "https://www.credly.com/badges/a9f44f41-5a1d-4a87-84d4-bc1b13472109",
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect - Associate",
    domain: "Cloud",
    provider: "Amazon Web Services",
    verificationUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/1a2a973bc3cf451f93b177101330b667",
  },
];

export const education: Education = {
  institution: "IIIT Bhubaneswar",
  degree: "Bachelor of Technology",
  field: "Information Technology",
  start: "07/2019",
  end: "07/2023",
  period: "Jul 2019 - Jul 2023",
  certificateUrl:
    "https://drive.google.com/file/d/1i-EgYfcFup69Gt-B72Oxob0Wz0pne3MV/view",
};
