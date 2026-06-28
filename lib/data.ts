import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Layers,
  ShoppingBag,
  Building2,
  Languages,
  Database,
  BadgeDollarSign,
  Boxes,
  HeartPulse,
  Github,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
} from "lucide-react";

export const profile = {
  name: "Saim Malik",
  title: "Senior Software and AI Engineer",
  tagline:
    "Senior Software Engineer with 6+ years building scalable SaaS platforms, AI-powered applications, and multi-tenant backend systems using Python, Django/FastAPI, React, Next.js, PostgreSQL, AWS, and GCP. Experienced in LLM-powered features, RAG assistants, AI agents, LangChain/LangGraph workflows, semantic search, and production-grade API systems. Built an AI-driven auditing platform that uncovered $40M+ in missed commissions and developed venture products from zero to launch for a European venture builder, including Kilow, a health app that raised $2.5M+. Led 10+ engineers across architecture, delivery, code reviews, CI/CD, and production reliability.",
  shortBio:
    "I'm Saim Malik, a Senior Software and AI Engineer. I partner with startups as a hands-on lead, aligning architecture, velocity, and quality so teams can earn investor confidence and scale after the round. I bring product experience alongside engineering: clarifying outcomes with PMs and stakeholders, shaping roadmaps, partnering on UX iteration, and shipping measurable impact, not just tickets. I ship end-to-end across Django, FastAPI, Laravel, Rails, and React/Next.js, and I put machine learning, LLMs, and deep learning to work where it moves the needle: search, automation, auditing, and intelligent workflows. Performance, reliability, and production discipline are non-negotiable.",
  location: "Lahore, Pakistan",
  yearsOfExperience: 6,
  email: "saimmalik8397@gmail.com",
  phone: "+92 344 4411987",
  resumeUrl: "/SaimMalik(SeniorSoftware&AIEngineer).pdf",
  avatarUrl: "/avatar.jpg",
  socials: {
    github: "https://github.com/saimm97",
    linkedin: "https://www.linkedin.com/in/saimmalik97/",
    email: "mailto:saimmalik8397@gmail.com",
    phone: "tel:+923444411987",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats: { label: string; value: string }[] = [
  { label: "Revenue uncovered", value: "$40M+" },
  { label: "Years of Experience", value: "6+" },
  { label: "Engineers Led", value: "10+" },
  { label: "Projects worked on", value: "12+" },
];

export type Industry = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const industries: Industry[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: Brain,
    description:
      "Shipped LLM-powered features, RAG pipelines, and intelligent search into production SaaS products.",
    highlights: ["LLMs & OpenAI API", "RAG & intelligent search", "AI assistants & automation"],
  },
  {
    id: "multi-tenant-saas",
    name: "Multi-Tenant SaaS",
    icon: Layers,
    description:
      "Architected scalable, multi-tenant SaaS platforms with RBAC, analytics layers, and high-concurrency APIs.",
    highlights: ["Multi-tenant RBAC", "Distributed services", "High-concurrency APIs"],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Marketplaces",
    icon: ShoppingBag,
    description:
      "Built AI-driven marketplaces with ML recommendations, Elasticsearch search, and Stripe-based payments.",
    highlights: ["ML recommendations", "Elasticsearch search", "Stripe payments & fraud detection"],
  },
  {
    id: "proptech",
    name: "Real Estate (PropTech)",
    icon: Building2,
    description:
      "Ingested 100+ MLS feeds and public datasets into a Snowflake warehouse powering real-estate analytics.",
    highlights: ["MLS & public data feeds", "Snowflake warehousing", "ETL at scale"],
  },
  {
    id: "translation-nlp",
    name: "Enterprise Translation & NLP",
    icon: Languages,
    description:
      "Delivered enterprise translation platforms supporting 70+ file formats and 25+ machine translation engines.",
    highlights: ["NLP pipelines", "70+ file formats", "25+ MT engines"],
  },
  {
    id: "data-engineering",
    name: "Data Engineering & Analytics",
    icon: Database,
    description:
      "Designed large-scale ETL, async ingestion, and analytics dashboards on Snowflake, PostgreSQL, and Redis.",
    highlights: ["ETL at scale", "Celery + Redis", "Real-time dashboards"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description:
      "Delivered HIPAA-aware workflows, clinical operations tooling, and analytics layers for providers and health-tech teams — with the same rigor applied to security, auditability, and reliability as high-stakes SaaS.",
    highlights: ["HIPAA-minded design", "Clinical & ops workflows", "Secure analytics & integrations"],
  },
  {
    id: "revenue-audit",
    name: "Revenue & Audit Intelligence",
    icon: BadgeDollarSign,
    description:
      "Built AI auditing engines using fuzzy matching and ML heuristics to recover missed commissions and revenue leakage.",
    highlights: ["$40M+ uncovered", "Fuzzy matching", "Heuristic ML"],
  },
  {
    id: "devops-platform",
    name: "DevOps & Platform",
    icon: Boxes,
    description:
      "Owned CI/CD, containerized services, and AWS infrastructure powering high-concurrency production systems.",
    highlights: ["GitHub Actions / CircleCI / Jenkins", "Docker & Kubernetes", "AWS infrastructure"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  industry: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer → Associate Team Lead",
    company: "Devsinc",
    period: "2023 — Present",
    location: "Lahore, Pakistan",
    industry: "Multi-Tenant SaaS · AI",
    summary:
      "Software and product engineering company delivering enterprise-scale web and mobile solutions. I lead a 10+ engineer team building multi-tenant SaaS platforms and AI-powered features.",
    achievements: [
      "Architected scalable multi-tenant SaaS platforms using Django, Next.js, and PostgreSQL.",
      "Built a data platform integrating 100+ sources, powering large-scale analytics and business insights.",
      "Developed AI-powered features including intelligent search, automation, and conversational assistants.",
      "Led a team of 10+ engineers, reducing production defects by 75% through CI/CD improvements.",
      "Designed microservices architecture, improving system scalability and reliability.",
    ],
    stack: [
      "Python",
      "Django",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "letsremotify (Remote contract via Devsinc)",
    period: "01/2023 — 01/2025",
    location: "Remote",
    industry: "SaaS",
    summary:
      "Remote company providing software solutions. Delivered production features across multiple SaaS applications working with distributed teams.",
    achievements: [
      "Delivered 25+ production features across multiple SaaS applications.",
      "Built full-stack systems using Django (backend) and React.js (frontend).",
      "Improved code maintainability by 50% through structured code reviews and best practices.",
      "Automated CI/CD pipelines, reducing release cycles by 30%.",
      "Collaborated with distributed teams to deliver scalable, production-ready systems.",
    ],
    stack: [
      "Python",
      "Django",
      "React.js",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "JWS Software Group (Remote contract via Devsinc)",
    period: "04/2022 — 01/2024",
    location: "Remote",
    industry: "Enterprise Software",
    summary:
      "U.S.-based remote software company. Directed bi-weekly architecture discussions and delivered scalable backend systems for high-traffic applications.",
    achievements: [
      "Directed bi-weekly architecture discussions, resulting in the design and implementation of 25+ new product features.",
      "Designed and delivered scalable backend systems for high-traffic applications.",
      "Optimized database performance and API response times for large-scale systems.",
      "Improved system reliability and raised testing success rate to 95%.",
      "Introduced development standards reducing defects by 75%.",
    ],
    stack: [
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Devsinc",
    period: "2021 — 2023",
    location: "Lahore, Pakistan",
    industry: "Full-Stack Web · AI",
    summary:
      "Software development company focusing on Ruby on Rails and modern Python backends. Built APIs and integrated AI-powered features into production systems.",
    achievements: [
      "Built scalable REST APIs powering modern React-based applications.",
      "Developed backend systems using Django, FastAPI, and Ruby on Rails.",
      "Integrated AI-powered features for automation and intelligent workflows.",
      "Improved application performance by 20% through caching and query optimization.",
      "Delivered multiple production-grade web applications end-to-end.",
    ],
    stack: [
      "Ruby on Rails",
      "Python",
      "Django",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },
  {
    role: "Software Engineer",
    company: "CCJK Technologies",
    period: "2020 — 2021",
    location: "Lahore, Pakistan",
    industry: "Enterprise & Translation",
    summary:
      "Technology company offering software development services. Contributed to enterprise and translation platforms across the full stack.",
    achievements: [
      "Collaborated with a team of developers to design and implement RESTful APIs using Ruby on Rails.",
      "Developed backend APIs and services using Ruby on Rails and Python.",
      "Built scalable systems for enterprise and translation platforms.",
      "Contributed to full-stack development including API design and database architecture.",
      "Participated in Agile development and code review processes.",
    ],
    stack: ["Ruby on Rails", "Python", "REST APIs", "PostgreSQL", "Agile"],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  impact: string[];
  stack: string[];
  link?: string;
  /** Matches `Industry.id` — a project may span multiple verticals. */
  industryIds: string[];
};

export const projects: Project[] = [
  {
    name: "Kilow — Digital Weight-Loss Platform",
    category: "Healthcare · Mobile · SaaS",
    description:
      "An Arabic-first digital weight-loss platform for Saudi Arabia pairing habit-building, nutrition planning, and doctor-supervised medical care (including GLP-1 programs) with an in-app market for supplements and lab tests. Built zero-to-launch as a senior engineer for a European venture builder — cross-platform React Native apps backed by Python (FastAPI/Flask) APIs on Google Cloud, plus a companion web app owned end-to-end from first commit to production. The product went on to raise $2.5M+.",
    impact: [
      "Built zero-to-launch; raised $2.5M+",
      "React Native apps on Python (FastAPI/Flask) APIs",
      "Doctor-supervised programs incl. GLP-1",
    ],
    stack: [
      "React Native",
      "Python",
      "FastAPI",
      "Flask",
      "Google Cloud",
      "CI/CD",
      "REST APIs",
    ],
    industryIds: ["healthcare", "multi-tenant-saas"],
  },
  {
    name: "AI Powered Career Engine",
    category: "AI / ML · Career Tech · SaaS",
    description:
      "A multi-tenant platform that discovers, scores, and tailors job applications through an LLM-driven pipeline (discover → score → select → tailor → PDF), with per-tenant data isolation. A provider-agnostic LLM layer with retry/fallback and JSON-schema-constrained outputs powers CV tailoring, deep role evaluation, and interview-prep generation — evolving to LangGraph orchestration with Postgres + pgvector for embedding-based candidate↔job matching.",
    impact: [
      "LLM pipeline: discover → score → tailor → PDF",
      "Multi-provider LLM with schema-constrained outputs",
      "pgvector semantic candidate↔job matching",
    ],
    stack: [
      "TypeScript",
      "Node / Express",
      "React",
      "Python",
      "LangChain",
      "LangGraph",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "LLMs (multi-provider)",
    ],
    industryIds: ["ai-ml", "multi-tenant-saas"],
  },
  {
    name: "Lead Management System",
    category: "Sales Ops · Multi-Tenant SaaS · RBAC",
    description:
      "A greenfield FastAPI + Next.js platform for BD/engineer/admin lead tracking with hierarchical role-based access, a configurable Phase→Type→Status pipeline with full audit history, monthly engineer targets, a candidate-profile registry (LinkedIn/GitHub verification), issue logging and triage, and automated weekly/monthly reports delivered via dashboard charts and email — with pluggable LLM agent hooks for lead enrichment, status suggestions, and report narratives.",
    impact: [
      "Hierarchical RBAC across 4 roles + manager tree",
      "Configurable status pipeline with full audit history",
      "Scheduled weekly/monthly reports via Celery + email",
    ],
    stack: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "Next.js",
      "Tailwind",
      "Celery",
      "Redis",
      "Recharts",
      "JWT",
      "Docker",
    ],
    industryIds: ["multi-tenant-saas", "ai-ml", "data-engineering"],
  },
  {
    name: "PayFlow — Payment Application",
    category: "Fintech · Payments · SaaS",
    description:
      "A full-featured web payment app built on Next.js 14 and TypeScript with NextAuth credential auth (bcrypt-hashed passwords, route protection). Supports Stripe Payment Intents with webhooks and refunds — falling back to a demo mode when keys aren't set — plus shareable payment links, payment requests, saved recipients, a transactions ledger with search, date filters, CSV export and printable receipts, notifications, and a stats dashboard. Validated end-to-end with Zod and built accessibility-first.",
    impact: [
      "Stripe Payment Intents, webhooks & refunds",
      "Shareable payment links & request flows",
      "Transactions ledger with CSV export & receipts",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "NextAuth.js",
      "Stripe",
      "Tailwind CSS",
      "Zod",
      "bcryptjs",
    ],
    industryIds: ["ecommerce", "multi-tenant-saas"],
  },
  {
    name: "HealthHub — AI Fitness & Wellness Coach",
    category: "Healthcare · AI / ML · SaaS",
    description:
      "A Django platform for fitness, nutrition and health tracking with an AI wellness coach and a doctor-connection layer. The headline engineering idea is a guardrail-first AI pipeline: every message is screened by a transparent, auditable safety classifier before it can reach an LLM, keeping the coach in the wellness lane and redirecting medical, emergency, or crisis messages to a real consultation. Built as a hybrid backend — a server-rendered Django app and a versioned DRF API over one shared service layer — so an included Next.js frontend consumes the same backend with zero logic duplication.",
    impact: [
      "Guardrail-first AI pipeline with audited blocks",
      "One service layer serves Django + REST API",
      "Race-safe bookings via select_for_update()",
    ],
    stack: [
      "Python",
      "Django 5",
      "Django REST Framework",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Next.js",
      "HTMX",
      "Stripe",
      "Docker",
    ],
    industryIds: ["healthcare", "ai-ml", "multi-tenant-saas"],
  },
  {
    name: "Park Guard — Parking Damage-Protection & Claims Platform",
    category: "InsurTech · Enterprise SaaS · DevOps",
    description:
      "The parking industry's first true damage-protection insurance — a B2B startup built from scratch that went on to raise multiple rounds of investment. It lets parking operators, aggregators, and software providers offer customers embedded coverage (theft, door dings, and more) as a new revenue stream via a secure API, with a multi-tenant RBAC platform, a full claim-lifecycle engine, and a Coverage Hub dashboard for real-time claims and conversion analytics. I led the EKS → ECS migration for zero-downtime CI/CD and shipped the partner-facing React dashboard.",
    impact: [
      "Built from scratch; raised multiple investment rounds",
      "Embedded-insurance API for booking-time coverage",
      "EKS → ECS migration with zero-downtime CI/CD",
    ],
    stack: [
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Elasticsearch",
      "React",
      "AWS (ECS/EKS, S3)",
      "Docker",
      "GitHub Actions",
    ],
    industryIds: ["multi-tenant-saas", "devops-platform", "data-engineering"],
    link: "https://parkguard.com",
  },
  {
    name: "AI-Powered E-Commerce Marketplace",
    category: "E-commerce · AI / ML",
    description:
      "AI-driven marketplace with a TensorFlow recommendation engine, LLM-style NLP for product search and customer interactions, Elasticsearch search, fraud detection, and Stripe-based payments.",
    impact: [
      "ML recommendation engine in production",
      "Elasticsearch-powered intelligent search",
      "Stripe payments with ML fraud detection",
    ],
    stack: [
      "Django",
      "Ruby on Rails",
      "ReactJS",
      "TensorFlow",
      "Elasticsearch",
      "AWS",
      "Redis",
      "Stripe API",
      "Microservices",
    ],
    industryIds: ["ecommerce", "ai-ml", "multi-tenant-saas"],
  },
  {
    name: "Neighborhoods.com",
    category: "Real Estate · Data Engineering · AI Audit",
    description:
      "Distributed microservices platform ingesting 100+ MLS feeds and public datasets into Snowflake, with an AI-driven auditing engine that uncovered $40M+ in missed commissions over 10+ years of transactions.",
    impact: [
      "$40M+ missed commissions uncovered",
      "100+ data feeds ingested into Snowflake",
      "Millions of records processed in ETL",
    ],
    stack: [
      "Python",
      "Django",
      "FastAPI",
      "Snowflake",
      "PostgreSQL",
      "ReactJS",
      "AWS (S3, EC2, RDS)",
      "Redis",
      "Celery",
      "Docker",
      "Microservices",
    ],
    industryIds: [
      "proptech",
      "data-engineering",
      "revenue-audit",
      "ai-ml",
      "multi-tenant-saas",
      "devops-platform",
    ],
    link: "https://neighborhoods.com",
  },
  {
    name: "Marshub — Enterprise Translation & NLP Platform",
    category: "Enterprise · NLP · Localization",
    description:
      "Enterprise-grade translation management platform supporting 70+ file formats and 25+ machine translation engines, with Python NLP microservices, a real-time React UI, and a major Rails 6 → 7 upgrade.",
    impact: [
      "70+ supported file formats",
      "25+ machine translation engines",
      "Rails 6 → 7 upgrade with no downtime",
    ],
    stack: [
      "Ruby on Rails 6/7",
      "Django",
      "Python",
      "ReactJS",
      "NLP Pipelines",
      "GCP",
      "AWS",
      "Microservices",
    ],
    industryIds: ["translation-nlp", "ai-ml", "multi-tenant-saas"],
    link: "https://marshub.com",
  },
  {
    name: "Marstranslation",
    category: "Localization · Translation · SaaS",
    description:
      "Marstranslation is a global localization and translation platform serving 100+ languages — including software localization, website localization, and neural machine translation. Large enterprises rely on it for end-to-end translation workflows, while an open bidding model lets vendors compete on client projects for strong quality and pricing.",
    impact: [
      "100+ languages with software & website localization",
      "25+ machine translation engines integrated",
      "Open bidding marketplace for clients and vendors",
    ],
    stack: [
      "Ruby on Rails 6",
      "React.js",
      "Neural MT",
      "PostgreSQL",
      "REST APIs",
    ],
    industryIds: ["translation-nlp", "multi-tenant-saas", "ai-ml"],
    link: "https://marstranslation.com",
  },
  {
    name: "StackShare",
    category: "Developer Community · Full-Stack",
    description:
      "Community platform where engineers discover, compare, and discuss tech stacks used by companies. Owned backend performance and Rails upgrades, shipped React + Redux front ends for new modules, and ran production deploys through Jenkins and Kubernetes.",
    impact: [
      "Migrated platform to Rails 7 and Ruby 3",
      "Shipped new modules with React and Redux",
      "Jenkins pipelines and Kubernetes deployments",
    ],
    stack: [
      "Ruby on Rails",
      "ReactJS",
      "Redux",
      "PostgreSQL",
      "Jenkins",
      "Kubernetes",
    ],
    industryIds: ["multi-tenant-saas", "devops-platform"],
    link: "https://stackshare.io",
  },
];

export function projectsByIndustry(industryId: string | null): Project[] {
  if (!industryId) return projects;
  return projects.filter((p) => p.industryIds.includes(industryId));
}

export function projectCountForIndustry(industryId: string): number {
  return projects.filter((p) => p.industryIds.includes(industryId)).length;
}

export type Product = {
  name: string;
  category: string;
  /** Short, punchy value proposition. */
  tagline: string;
  description: string;
  /** "Live" = publicly available, "Shipped" = delivered to production, "In Development" = actively building. */
  status: "Live" | "Shipped" | "In Development";
  highlights: string[];
  stack: string[];
  url?: string;
};

export const products: Product[] = [
  {
    name: "Kilow",
    category: "Healthcare · Mobile",
    tagline: "Arabic-first digital weight-loss with real doctor supervision.",
    description:
      "Saudi Arabia's first comprehensive Arabic-first digital weight-loss platform, blending habit-building, flexible nutrition, and licensed medical supervision (including GLP-1 programs) with an in-app market for supplements and lab tests. Built zero-to-launch as a senior engineer for a European venture builder — React Native apps on Python (FastAPI/Flask) APIs and Google Cloud, plus a companion web app — the product went on to raise $2.5M+.",
    status: "Live",
    highlights: [
      "Habit, nutrition & doctor-supervised GLP-1 programs",
      "React Native apps on Python APIs (GCP)",
      "Built zero-to-launch; raised $2.5M+",
    ],
    stack: ["React Native", "Python", "FastAPI", "Flask", "Google Cloud"],
  },
  {
    name: "AI Powered Career Engine",
    category: "AI / ML · Career Tech",
    tagline: "LLM-powered job discovery, scoring, and application tailoring.",
    description:
      "A multi-tenant platform that runs the full job-application loop — discover → score → select → tailor → PDF — on a provider-agnostic LLM layer with JSON-schema-constrained outputs. It tailors CVs, runs CV-to-requirement gap analysis, and generates interview-prep stories, with LangGraph orchestration and pgvector embeddings matching candidates to roles by semantic similarity.",
    status: "In Development",
    highlights: [
      "Pipeline: discover → score → select → tailor → PDF",
      "Multi-provider LLM abstraction with retry/fallback",
      "LangGraph + pgvector semantic matching",
    ],
    stack: ["TypeScript", "Node / Express", "React", "Python", "LangChain", "LangGraph", "pgvector", "Docker"],
  },
  {
    name: "HealthHub — AI Fitness & Wellness Coach",
    category: "Healthcare · AI / ML",
    tagline: "An AI wellness coach with safety guardrails and a doctor layer.",
    description:
      "A Django fitness, nutrition and health-tracking platform with an AI wellness coach and consultation booking. Its guardrail-first pipeline screens every message before it can reach an LLM — refusing medical advice and redirecting to a real doctor — while a single shared service layer powers both the server-rendered Django app and a versioned REST API consumed by an included Next.js frontend.",
    status: "Live",
    highlights: [
      "Guardrail-first AI pipeline with audited blocks",
      "Shared service layer for Django + REST API",
      "Doctor consultations with race-safe booking",
    ],
    stack: ["Python", "Django 5", "DRF", "PostgreSQL", "Celery", "Redis", "Next.js", "Docker"],
  },
  {
    name: "Lead Management System",
    category: "Sales Ops · SaaS",
    tagline: "Hierarchical lead tracking with targets, profiles, and automated reports.",
    description:
      "An internal SaaS for BD, engineer, and admin teams to track leads end-to-end: role-based access down a manager hierarchy, a configurable Phase→Type→Status pipeline with audit history, monthly engineer targets, a candidate-profile registry with LinkedIn/GitHub verification, and issue triage — surfaced through dashboard KPIs and scheduled weekly/monthly email reports, with LLM agent hooks for enrichment and report narratives.",
    status: "Live",
    highlights: [
      "Hierarchical RBAC across BD, engineer, manager & admin",
      "Configurable status pipeline with full audit history",
      "Automated weekly/monthly reports + dashboard charts",
    ],
    stack: ["FastAPI", "Python", "PostgreSQL", "Next.js", "Tailwind", "Celery", "Redis", "Docker"],
  },
  {
    name: "AI-Powered E-Commerce Marketplace",
    category: "E-commerce · AI / ML",
    tagline: "An AI-driven marketplace with ML recommendations and smart search.",
    description:
      "An AI-driven marketplace pairing a TensorFlow recommendation engine with NLP-powered product search and customer interactions, Elasticsearch-backed intelligent search, ML fraud detection, and Stripe payments — delivered on a microservices architecture.",
    status: "Shipped",
    highlights: [
      "ML recommendation engine in production",
      "Elasticsearch-powered intelligent search",
      "Stripe payments with ML fraud detection",
    ],
    stack: ["Django", "Ruby on Rails", "React.js", "TensorFlow", "Elasticsearch", "Stripe", "Redis", "AWS"],
  },
  {
    name: "PayFlow",
    category: "Fintech · Payments",
    tagline: "A professional web payment app with Stripe and demo mode.",
    description:
      "A full-featured payment application on Next.js 14 with NextAuth credential auth, Stripe Payment Intents (webhooks and refunds, with a demo-mode fallback), shareable payment links, payment requests, saved recipients, and a searchable transactions ledger with CSV export and printable receipts — all validated with Zod and built accessibility-first.",
    status: "Shipped",
    highlights: [
      "Stripe Payment Intents with webhooks & refunds",
      "Payment links, requests & saved recipients",
      "Transactions ledger with CSV export & receipts",
    ],
    stack: ["Next.js 14", "TypeScript", "NextAuth.js", "Stripe", "Tailwind CSS", "Zod"],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Ruby"],
  },
  {
    title: "Backend Frameworks",
    items: [
      "Django",
      "FastAPI",
      "Flask",
      "Ruby on Rails",
      "Django REST Framework",
    ],
  },
  {
    title: "Frontend Frameworks",
    items: [
      "ReactJS",
      "Next.js",
      "React Native",
      "Redux",
      "Vue.js",
      "HTML5",
      "Tailwind CSS",
    ],
  },
  {
    title: "Product & experience",
    items: [
      "Discovery, roadmaps & prioritization",
      "PRDs, user stories & acceptance criteria",
      "Stakeholder alignment (PM, design, GTM)",
      "UX collaboration & iterative delivery",
      "Funnels, analytics & outcome metrics",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Large Language Models (LLMs)",
      "OpenAI",
      "LLM Integration",
      "Retrieval-Augmented Generation",
      "LangChain",
      "AI Agents",
      "Prompt Engineering",
      "Token/Context Optimization",
      "Vector Search",
      "Embeddings",
      "Semantic Search",
      "Recommendation Systems",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "S3",
      "EC2",
      "RDS",
      "SQS",
      "IAM",
      "ECS",
      "EKS",
      "AWS Lambda",
      "SageMaker",
      "Vertex AI",
      "Model Deployment & Serving",
      "Auto Scaling",
      "Load Balancing",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD Pipelines",
      "Jenkins",
      "CircleCI",
      "GitHub Actions",
      "CloudWatch",
      "Cloud Deployment",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Microservices",
      "Event-Driven Systems",
      "Distributed Systems",
      "Asynchronous Processing",
      "Message Queues",
      "High-Concurrency Systems",
      "Multi-Tenant Architecture",
      "Scalable Backend Systems",
    ],
  },
  {
    title: "Tools & Collaboration",
    items: [
      "Git",
      "Bitbucket",
      "JIRA",
      "Agile / Scrum",
      "Code Reviews",
      "Technical Documentation",
      "SDLC",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Sciences",
    institution: "University of Central Punjab",
    location: "Lahore",
    period: "2016 — 2020",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "The Concordia Colleges",
    location: "Lahore",
    period: "2014 — 2016",
  },
];

export type Achievement = {
  value: string;
  label: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    value: "$40M+",
    label: "Revenue uncovered",
    description: "Built an AI auditing engine that found $40M+ in missed commissions across 10+ years of MLS transactions.",
  },
  {
    value: "100+",
    label: "Data sources integrated",
    description: "Ingested 100+ MLS feeds and public datasets into a Snowflake warehouse powering enterprise analytics.",
  },
  {
    value: "75%",
    label: "Fewer production defects",
    description: "Drove a 75% reduction in defects through CI/CD pipelines, code review standards, and rigorous testing.",
  },
  {
    value: "95%",
    label: "Testing success rate",
    description: "Raised testing reliability to 95% via structured test strategy and automated quality gates.",
  },
  {
    value: "30%",
    label: "Faster release cycles",
    description: "Cut release cycles by 30% with automated CI/CD pipelines and Dockerized deployments.",
  },
  {
    value: "10+",
    label: "Engineers led",
    description: "Mentored and led teams of 10+ engineers across architecture reviews, hiring, and on-call.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Replace these with real quotes when ready.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Saim is one of the rare engineers who pairs deep technical skill with calm leadership. He architected our SaaS platform from scratch and shipped it on time, on budget, and without surprises.",
    name: "Engineering Director",
    role: "Engineering Leadership",
    company: "Devsinc",
  },
  {
    quote:
      "Working with Saim was a turning point. His AI auditing engine surfaced $40M+ we didn't know we were missing. He doesn't just write code — he uncovers business value.",
    name: "Product Owner",
    role: "Product Leadership",
    company: "JWS Software Group",
  },
  {
    quote:
      "Pragmatic, fast, and a real multiplier on the team. Saim raised our test coverage from 38% to 86% and cut release cycles by 30% — within a single quarter.",
    name: "Engineering Manager",
    role: "Engineering Leadership",
    company: "letsremotify",
  },
];

export const principles: { title: string; description: string }[] = [
  {
    title: "Outcomes over output",
    description:
      "I align engineering work to measurable business outcomes — uncovering $40M+ in revenue, reducing defects by 75%, and shaving release cycles by 30%.",
  },
  {
    title: "Pragmatic architecture",
    description:
      "Multi-tenant SaaS, event-driven services, and async pipelines — but only when they earn their place. Architecture should serve the team, not the trend cycle.",
  },
  {
    title: "Operational excellence",
    description:
      "I treat reliability, observability, and security as first-class features. Robust CI/CD, structured testing, and clean monitoring are non-negotiables.",
  },
  {
    title: "Lift the team",
    description:
      "I invest in mentorship, RFCs, and code review standards. Leading 10+ engineers has taught me that great teams compound — clarity and trust are the multipliers.",
  },
];

export const socialLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Email", href: profile.socials.email, icon: Mail },
  { label: "Phone", href: profile.socials.phone, icon: Phone },
];

export const educationIcon = GraduationCap;
export const industryIcon = Building2;
