export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  organization?: string;
  results?: { value: string; label: string }[];
  resultsNote?: string;
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
  instagram: string;
  playo: string;
  letterboxd: string;
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
  instagram: "https://www.instagram.com/ratnakar_rocky_11/",
  playo: "https://playo.co/profile/a52db980-c3e9-49d0-9e53-4bfa0ac8d763",
  letterboxd: "https://boxd.it/f8Tql",
};

export const projects: Project[] = [
  {
    id: "ai-prompt-library",
    title: "Prompt Library",
    subtitle: "Enterprise Prompt Management Platform",
    organization: "Evernorth",
    category: "professional",
    summary:
      "A secure workspace for creating, improving, discovering, and sharing prompts across users, teams, editors, and AI agents.",
    overview:
      "Built a full-stack enterprise platform at Evernorth for the complete prompt lifecycle: creation, editing, versioning, management, sharing, and collaboration. The platform connects secure user and team access with AI-assisted authoring, hybrid retrieval, quality and safety checks, analytics, and permission-aware integration tools.",
    implementation: [
      "Built the application with Python, FastAPI, React, TypeScript, and PostgreSQL/Aurora. Okta SSO, OAuth 2.0, and JWT secure authentication, while user- and team-level authorization controls access to prompts and collaboration.",
      "Engineered Redis fast-path lookup and hybrid search combining weighted lexical matching, pgvector semantic similarity, and HyDE (Hypothetical Document Embeddings) for fast, relevant retrieval.",
      "Developed AI Prompt Builder, intelligent tag and metadata suggestions, and prompt quality analysis with actionable improvement feedback.",
      "Implemented DeepEval/GEval LLM-as-a-judge checks for prompt injection, jailbreak attempts, adversarial inputs, and toxic content.",
      "Added sentence-level semantic duplicate detection across all prompt versions and PII/PHI redaction aligned with Cigna policies.",
      "Optimized page and API latency through WebP assets, lazy loading, tree shaking, compressed builds, caching, fewer database calls, and background job processing. Iterative load and stress testing guided the performance work.",
      "Delivered granular usage and LLM consumption analytics with detailed filters. Backend-enforced authorization restricts these analytics to advanced users.",
      "Built SSE streaming with incremental progress and heartbeats for long-running workflows and bulk operations handling 500 items per request.",
      "Deployed containerized services on AWS ECS with an Application Load Balancer, autoscaling, Aurora, and GitHub Actions CI/CD.",
      "Exposed public APIs as MCP server tools behind AWS AgentCore Gateway. User and team identities and permissions carry through to authorized prompt retrieval from codebases, editors, and AI agents.",
    ],
    images: ["/prompt-library-flow.svg"],
    imageKind: "diagram",
    imageLabel: "PRODUCT OVERVIEW",
    imageCaption:
      "Prompt Library product overview: authoring and collaboration, secure access, hybrid retrieval, safety and quality checks, analytics, 500-item streamed bulk operations, cloud delivery, and authorized MCP tools.",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL / Aurora",
      "Redis",
      "pgvector",
      "HyDE",
      "DeepEval / GEval",
      "Okta SSO",
      "OAuth 2.0 / JWT",
      "SSE",
      "AWS ECS",
      "GitHub Actions",
      "MCP",
      "AWS AgentCore Gateway",
    ],
    features: [
      "Create, edit, version, manage, share, and collaborate on prompts with user- and team-level authorization.",
      "Redis-assisted hybrid search with weighted lexical matching, pgvector semantic similarity, and HyDE.",
      "AI Prompt Builder, intelligent metadata suggestions, and actionable prompt quality feedback.",
      "DeepEval/GEval checks for injection, jailbreaks, adversarial inputs, and toxic content.",
      "Sentence-level semantic duplicate detection across all versions and Cigna-aligned PII/PHI redaction.",
      "Performance tuning informed by iterative load and stress testing.",
      "Detailed usage and LLM consumption analytics with backend-enforced advanced-user access.",
      "Bulk operations handling 500 items per request with SSE progress and heartbeats.",
      "Container delivery through ECS, ALB, autoscaling, Aurora, and GitHub Actions CI/CD.",
      "Permission-aware MCP tools behind AgentCore Gateway for prompt retrieval from editors, codebases, and AI agents.",
    ],
  },
  {
    id: "expensia",
    title: "Expensia",
    subtitle: "Agentic Expense Claims Automation",
    organization: "Evernorth",
    category: "professional",
    summary:
      "Agent-led expense validation, fraud checks, and approval routing, grounded in policy context and receipt evidence.",
    overview:
      "Built Expensia end to end to automate expense-claim validation, fraud detection, and approval routing. This full application brings together AI agents, policy retrieval, receipt-image analysis, external verification, and contextual human review. My contributions span product, design, architecture, frontend, backend, AI integration, testing, and delivery.",
    implementation: [
      "Implemented LangGraph supervisor-led multi-agent orchestration across receipt extraction, policy validation, anomaly detection, and claim decisions.",
      "Developed RAG for policy retrieval and Image RAG for receipt-similarity analysis, giving agents grounded evidence and detailed fraud assessments.",
      "Achieved 90% automated claims processing, with the remaining 10% routed through human-in-the-loop review with detailed reasoning and risk flags. Fraudulent-claim detection reached 94%.",
      "Integrated third-party vendor APIs and public forums to corroborate claim details and strengthen fraud checks.",
      "Built a RAG-powered policy and compliance chatbot that provides grounded guidance on claim submission, eligibility, and resolution.",
      "Integrated LangSmith tracing for agent observability, automated risk flagging, and handling suspicious workflow executions.",
      "Contributed across product, design, architecture, frontend, backend, AI integration, testing, and delivery.",
    ],
    results: [
      {
        value: "90%",
        label: "Automated claims processing",
      },
      {
        value: "10%",
        label: "Human-in-the-loop review",
      },
      {
        value: "94%",
        label: "Fraudulent-claim detection",
      },
    ],
    resultsNote:
      "Claims routed for human review include detailed reasoning and risk flags.",
    images: ["/expensia-flow.svg"],
    imageKind: "diagram",
    imageLabel: "PRODUCT OVERVIEW",
    imageCaption:
      "Expensia product overview: claim and receipt intake, RAG policy retrieval, Image RAG receipt-similarity analysis, external corroboration, risk-aware decisions, human review, a policy chatbot, and LangSmith tracing.",
    tags: [
      "LangGraph",
      "RAG",
      "Image RAG",
      "LangSmith",
      "Multi-agent orchestration",
      "Human-in-the-loop",
      "Vendor APIs",
      "Fraud detection",
      "React",
      "TypeScript",
    ],
    features: [
      "Supervisor-led receipt extraction, policy validation, anomaly detection, and claim decisions.",
      "Policy retrieval with RAG and receipt-similarity assessment with Image RAG.",
      "Claim corroboration through third-party vendor APIs and public forums.",
      "Risk-aware approval routing with detailed reasoning and contextual human review.",
      "A RAG-powered policy and compliance chatbot for submission, eligibility, and resolution guidance.",
      "LangSmith traces, automated risk flags, and handling of suspicious workflow executions.",
      "End-to-end contribution across product, design, frontend, backend, AI, testing, and delivery.",
    ],
  },
  {
    id: "llm-evaluation-governance",
    title: "Enterprise LLM Evaluation and Governance",
    organization: "Evernorth",
    category: "professional",
    summary:
      "Shared gateway-level evaluations, drift monitoring, and team alerts for enterprise AI quality and governance.",
    overview:
      "Contributed to a shared platform that centralizes LLM evaluation and governance for Cigna’s Enablement Office. The work supports broader AI adoption through consistent monitoring, risk investigation, and controls over AI consumption.",
    implementation: [
      "Contributed to gateway-level LLM evaluation using DeepEval/GEval LLM-as-a-judge checks covering bias, toxicity, jailbreak, PII/PHI exposure, correctness, and hallucination.",
      "Developed drift monitoring and configurable team alerts to identify quality degradation, support risk investigation, and govern AI consumption.",
      "Supported Cigna’s Enablement Office by centralizing evaluation and governance into a shared platform, enabling broader AI adoption with consistent monitoring and controls.",
    ],
    images: ["/llm-governance-overview.svg"],
    imageKind: "diagram",
    imageLabel: "PRODUCT OVERVIEW",
    imageCaption:
      "Enterprise LLM evaluation and governance: shared gateway-level quality and safety checks, drift monitoring, configurable team alerts, risk investigation, and consistent controls for Cigna’s Enablement Office.",
    tags: [
      "DeepEval",
      "GEval",
      "LLM-as-a-judge",
      "LLM Gateway",
      "Drift monitoring",
      "AI governance",
      "Configurable alerts",
      "PII / PHI controls",
    ],
    features: [
      "Gateway-level LLM quality and risk evaluations using DeepEval/GEval.",
      "Checks for bias, toxicity, jailbreak, PII/PHI exposure, correctness, and hallucination.",
      "Drift monitoring and configurable team alerts for quality degradation and risk investigation.",
      "Centralized evaluation and governance supporting Cigna’s Enablement Office.",
      "Consistent monitoring and controls for broader enterprise AI adoption and consumption.",
    ],
  },
  {
    id: "prompt-compression-playground",
    title: "Intelligent Prompt Compression Playground",
    organization: "Evernorth",
    category: "professional",
    summary:
      "A research-to-product playground for comparing prompt compression, responses, token consumption, and estimated costs.",
    overview:
      "Collaborated with R&D to turn prompt-compression research into a React/FastAPI playground integrating LLMLingua-2. The interface lets users tune compression and inspect how the compressed prompt affects model responses, token consumption, and estimated costs.",
    implementation: [
      "Collaborated with R&D to translate compression research into an interactive React/FastAPI playground integrating LLMLingua-2.",
      "Implemented configurable compression ratios, force-kept tokens, and automatic prompt-complexity detection to tailor compression while preserving essential context.",
      "Built custom diff viewers and original-versus-compressed response comparisons, alongside token and estimated cost savings metrics.",
      "Achieved 30–50% lower prompt-token consumption with 75–90% response accuracy in original-versus-compressed prompt comparisons, depending on prompt complexity.",
    ],
    results: [
      {
        value: "30–50%",
        label: "Lower prompt-token consumption",
      },
      {
        value: "75–90%",
        label: "Response accuracy",
      },
    ],
    resultsNote:
      "Results reflect original-versus-compressed prompt comparisons and depend on prompt complexity.",
    images: ["/prompt-compression-overview.svg"],
    imageKind: "diagram",
    imageLabel: "PRODUCT OVERVIEW",
    imageCaption:
      "Prompt compression playground: LLMLingua-2 with configurable ratios, force-kept tokens, complexity detection, custom diffs, original-versus-compressed response comparisons, token consumption, and estimated cost savings.",
    tags: [
      "LLMLingua-2",
      "React",
      "FastAPI",
      "Prompt compression",
      "Diff viewers",
      "Token metrics",
      "Response comparison",
    ],
    features: [
      "Configurable compression ratios and force-kept tokens.",
      "Automatic prompt-complexity detection to preserve essential context.",
      "Custom diff viewers and original-versus-compressed response comparisons.",
      "Token consumption and estimated cost savings metrics.",
      "30–50% lower prompt-token consumption with 75–90% response accuracy, depending on prompt complexity.",
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
      "/Meet-1.webp",
      "/Meet-2.webp",
      "/Meet-3.webp",
      "/Meet-5.webp",
      "/Meet-4.webp",
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
    images: ["/Analytics Dashboard.webp"],
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
      "/Comp-1.webp",
      "/Comp-2.webp",
      "/Comp-3.webp",
      "/Comp-4.webp",
      "/Comp-5.webp",
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
      "/Report-1.webp",
      "/Report-2.webp",
      "/Report-3.webp",
      "/Report-4.webp",
      "/Report-5.webp",
      "/Report-6.webp",
      "/Report-7.webp",
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
      "/Homepage.webp",
      "/Circle QR-Code.webp",
      "/Circle Authenticated.webp",
      "/Dashboard.webp",
      "/File manager.webp",
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
    images: ["/Pivot-1.webp", "/Pivot-2.webp", "/Pivot-3.webp", "/Pivot-4.webp"],
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
      "Building full-stack AI products, shared evaluation and governance capabilities, and research-driven tools at Evernorth Health Services. My work spans Prompt Library, Expensia, Enterprise LLM Evaluation and Governance, and the Intelligent Prompt Compression Playground.",
    contributions: [
      {
        title: "Prompt Library | Enterprise Prompt Management Platform",
        details: [
          "Built the application with Python, FastAPI, React, TypeScript, and PostgreSQL/Aurora. Okta SSO, OAuth 2.0, and JWT secure authentication, while user- and team-level authorization controls access to prompts and collaboration.",
          "Engineered Redis fast-path lookup and hybrid search combining weighted lexical matching, pgvector semantic similarity, and HyDE (Hypothetical Document Embeddings) for fast, relevant retrieval.",
          "Developed AI Prompt Builder, intelligent tag and metadata suggestions, and prompt quality analysis with actionable improvement feedback.",
          "Implemented DeepEval/GEval LLM-as-a-judge checks for prompt injection, jailbreak attempts, adversarial inputs, and toxic content.",
          "Added sentence-level semantic duplicate detection across all prompt versions and PII/PHI redaction aligned with Cigna policies.",
          "Optimized page and API latency through WebP assets, lazy loading, tree shaking, compressed builds, caching, fewer database calls, and background job processing. Iterative load and stress testing guided the performance work.",
          "Delivered granular usage and LLM consumption analytics with detailed filters. Backend-enforced authorization restricts these analytics to advanced users.",
          "Built SSE streaming with incremental progress and heartbeats for long-running workflows and bulk operations handling 500 items per request.",
          "Deployed containerized services on AWS ECS with an Application Load Balancer, autoscaling, Aurora, and GitHub Actions CI/CD.",
          "Exposed public APIs as MCP server tools behind AWS AgentCore Gateway. User and team identities and permissions carry through to authorized prompt retrieval from codebases, editors, and AI agents.",
        ],
      },
      {
        title: "Expensia | Agentic Expense Claims Automation",
        details: [
          "Implemented LangGraph supervisor-led multi-agent orchestration across receipt extraction, policy validation, anomaly detection, and claim decisions.",
          "Developed RAG for policy retrieval and Image RAG for receipt-similarity analysis, giving agents grounded evidence and detailed fraud assessments.",
          "Achieved 90% automated claims processing, with the remaining 10% routed through human-in-the-loop review with detailed reasoning and risk flags. Fraudulent-claim detection reached 94%.",
          "Integrated third-party vendor APIs and public forums to corroborate claim details and strengthen fraud checks.",
          "Built a RAG-powered policy and compliance chatbot that provides grounded guidance on claim submission, eligibility, and resolution.",
          "Integrated LangSmith tracing for agent observability, automated risk flagging, and handling suspicious workflow executions.",
          "Contributed across product, design, architecture, frontend, backend, AI integration, testing, and delivery.",
        ],
      },
      {
        title: "Enterprise LLM Evaluation and Governance",
        details: [
          "Contributed to gateway-level LLM evaluation using DeepEval/GEval LLM-as-a-judge checks covering bias, toxicity, jailbreak, PII/PHI exposure, correctness, and hallucination.",
          "Developed drift monitoring and configurable team alerts to identify quality degradation, support risk investigation, and govern AI consumption.",
          "Supported Cigna’s Enablement Office by centralizing evaluation and governance into a shared platform, enabling broader AI adoption with consistent monitoring and controls.",
        ],
      },
      {
        title: "Intelligent Prompt Compression Playground",
        details: [
          "Collaborated with R&D to translate compression research into an interactive React/FastAPI playground integrating LLMLingua-2.",
          "Implemented configurable compression ratios, force-kept tokens, and automatic prompt-complexity detection to tailor compression while preserving essential context.",
          "Built custom diff viewers and original-versus-compressed response comparisons, alongside token and estimated cost savings metrics.",
          "Achieved 30–50% lower prompt-token consumption with 75–90% response accuracy in original-versus-compressed prompt comparisons, depending on prompt complexity.",
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
      "Aurora",
      "Okta SSO",
      "OAuth 2.0",
      "JWT",
      "HyDE",
      "GEval",
      "LangGraph",
      "RAG",
      "Image RAG",
      "LangSmith",
      "LLMLingua-2",
      "AWS ECS",
      "AWS AgentCore Gateway",
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
