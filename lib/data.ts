import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Layers,
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
  Calendar,
} from "lucide-react";

export const profile = {
  name: "Saim Malik",
  title: "Senior Software Engineer & AI Engineer",
  /** Short hero line — keep the full CV summary in `tagline` for meta/SEO. */
  heroLead:
    "I build AI-powered SaaS and multi-tenant backends — and lead teams that ship investor-ready products.",
  tagline:
    "Senior Software Engineer with 6+ years of experience building scalable SaaS platforms, AI-powered applications, and multi-tenant backend systems using Python, Django/FastAPI, React, Next.js, PostgreSQL, AWS, and GCP. Experienced in LLM-powered features, RAG assistants, AI agents, LangChain/LangGraph workflows, semantic search, and production-grade API systems. Built an AI-driven auditing platform that uncovered $40M+ in missed commissions and developed venture products from zero to launch for a European venture builder, including Kilow, a health app that raised $2.5M+. Led 10+ engineers across architecture, delivery, code reviews, CI/CD, and production reliability.",
  shortBio:
    "I'm Saim Malik, a Senior Software Engineer & AI Engineer based in Lahore (GMT+5), available full-time as a remote contractor with overlap for US/EU hours. I build multi-tenant SaaS, LLM-powered features, and production-grade APIs end-to-end — Django, FastAPI, React/Next.js, React Native — and put RAG, agents, and LangChain/LangGraph workflows to work where they move the needle. I've led 10+ engineers, shipped venture products from zero to launch (including Kilow, which raised $2.5M+), and built an AI auditing platform that uncovered $40M+ in missed commissions.",
  location: "Lahore, Pakistan (GMT+5)",
  availability: "Available full-time as a remote contractor · Overlaps US/EU hours",
  yearsOfExperience: 6,
  email: "saimmalik8397@gmail.com",
  phone: "+92 344 4411987",
  resumeUrl: "/SaimMalik(SeniorSoftware&AIEngineer).pdf",
  calendlyUrl: "https://calendly.com/saimmalik8397/30min",
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
  { label: "Investment raised (Kilow)", value: "$2.5M+" },
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
    id: "proptech",
    name: "Real Estate (PropTech)",
    icon: Building2,
    description:
      "Ingested 100+ MLS feeds and public datasets into a Snowflake warehouse powering real-estate analytics and recommendations.",
    highlights: ["MLS & public data feeds", "Snowflake warehousing", "Collaborative filtering"],
  },
  {
    id: "translation-nlp",
    name: "Enterprise Translation & NLP",
    icon: Languages,
    description:
      "Built backend APIs and scalable systems for enterprise and localization/translation technology platforms.",
    highlights: ["Python & Ruby on Rails APIs", "Enterprise workflows", "Localization platforms"],
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
      "Shipped venture health products from zero to launch — cross-platform mobile and web on Python APIs and GCP.",
    highlights: ["Zero-to-launch products", "React Native + Python APIs", "$2.5M+ raised (Kilow)"],
  },
  {
    id: "revenue-audit",
    name: "Revenue & Audit Intelligence",
    icon: BadgeDollarSign,
    description:
      "Built AI auditing pipelines using record-matching logic to recover missed commissions and revenue leakage.",
    highlights: ["$40M+ recovered", "MLS-to-parcel matching", "Decade of transaction data"],
  },
  {
    id: "devops-platform",
    name: "DevOps & Platform",
    icon: Boxes,
    description:
      "Owned CI/CD, containerized services, and AWS/GCP infrastructure powering high-concurrency production systems.",
    highlights: ["GitHub Actions / CircleCI / Jenkins", "Docker & Kubernetes", "EKS → ECS migrations"],
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
    period: "2021 — Present",
    location: "Lahore, Pakistan",
    industry: "Enterprise Web · SaaS · AI",
    summary:
      "Software and product engineering company delivering enterprise web, SaaS, and AI-enabled solutions for global clients.",
    achievements: [
      "Built and scaled multi-tenant SaaS platforms in Django + PostgreSQL on AWS, designing the API layer and async processing backbone.",
      "Shipped LLM-powered features — RAG assistants, intelligent search, and workflow automation — from prototype to production.",
      "Built AI agent workflows and LLM-driven pipelines using LangChain/LangGraph, powering an AI career platform for job discovery, scoring, resume optimization, application tailoring, and interview-preparation generation across multiple LLM providers with schema-constrained outputs.",
      "Cut production defects 75% by tightening CI/CD, review standards, and test discipline.",
      "Led a team of 10+ engineers across architecture, delivery, code review, and production support.",
      "Client engagement via Stryber (European venture builder) — Remote · (2023–2025)",
      "Built two venture products from zero to launch as senior engineer: Kilow (health app) and Miza (fintech app). Kilow went on to raise over $2.5M in investment for the product.",
      "Developed cross-platform mobile apps in React Native backed by Python APIs (FastAPI, Flask), with CI/CD and deployments on Google Cloud Platform.",
      "Shipped a companion web application end-to-end, owning architecture and delivery from first commit through production.",
      "Client engagement via letsremotify (a Devsinc company) — Remote · (2022–2023)",
      "Delivered 25+ production features across multiple SaaS applications using Django, React, PostgreSQL, and cloud services.",
      "Built full-stack workflows spanning REST APIs, frontend interfaces, background jobs, and integrations.",
      "Improved code maintainability by 50% through structured reviews and modular, reusable architecture.",
      "Automated CI/CD pipelines, cutting deployment cycles by 30%.",
    ],
    stack: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Express.js",
      "Node.js",
      "React",
      "Next.js",
      "React Native",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "AWS",
      "GCP",
      "Docker",
      "CI/CD",
    ],
  },
  {
    role: "Software Engineer",
    company: "CCJK Technologies",
    period: "2020 — 2021",
    location: "Lahore, Pakistan",
    industry: "Enterprise & Translation",
    summary:
      "Technology company providing software development and localization/translation technology services.",
    achievements: [
      "Developed backend APIs and services using Python and Ruby on Rails for enterprise and translation platforms.",
      "Designed and implemented RESTful APIs supporting scalable business workflows.",
      "Built scalable systems for enterprise and translation platforms.",
      "Contributed to full-stack development including API design and database architecture.",
      "Participated in Agile development and code review processes.",
    ],
    stack: ["Python", "Ruby on Rails", "REST APIs", "PostgreSQL", "Agile"],
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
    name: "Neighborhoods.com — Real-Estate Data Platform",
    category: "Real Estate · Data Engineering · AI Audit",
    description:
      "Distributed microservices-based data platform ingesting 100+ MLS feeds and public datasets into a Snowflake data warehouse. Large-scale ETL pipelines process millions of structured and semi-structured records; a property recommendation engine uses Neural Collaborative Filtering and item/user-based k-NN over implicit signals (views, saves, clicks, inquiries), with cold-start via onboarding interest profiles. An agent auditing pipeline analyzes a decade of transaction data using MLS-to-parcel linkage (ID, date-proximity, price-similarity) to detect unreported deal closures and recover $40M+ in unpaid commissions — with Django & FastAPI APIs, Celery + Redis async processing, multi-tenant RBAC, React dashboards, and Dockerized AWS deployments.",
    impact: [
      "$40M+ unpaid commissions recovered",
      "100+ MLS & public feeds into Snowflake",
      "Collaborative filtering recommendation engine",
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
      "Microservices Architecture",
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
    name: "AI Career Ops — LLM-Powered Job Discovery & Application System",
    category: "AI / ML · Career Tech · SaaS",
    description:
      "Building a multi-tenant platform that discovers, scores, and tailors job applications through an LLM-driven pipeline (discover → score → select → tailor → PDF), with per-tenant data isolation. Includes a multi-provider LLM abstraction layer with retry/fallback, credential validation, and JSON-schema-constrained outputs; a pluggable job-extractor system; AI CV-tailoring with SSE streaming; deep role evaluation (CV-to-requirement gap analysis, interview-prep); an extensive automated test suite; Docker Compose deployment; and evolving LangGraph orchestration with Postgres + pgvector for embedding-based candidate↔job matching.",
    impact: [
      "LLM pipeline: discover → score → tailor → PDF",
      "Multi-provider LLM with schema-constrained outputs",
      "LangGraph + pgvector semantic candidate↔job matching",
    ],
    stack: [
      "TypeScript",
      "Node/Express",
      "React",
      "LLM integration (multi-provider)",
      "Docker",
      "Python/LangChain",
    ],
    industryIds: ["ai-ml", "multi-tenant-saas"],
  },
  {
    name: "ParkGuard — Enterprise Parking Protection & Claims Platform",
    category: "InsurTech · Enterprise SaaS · DevOps",
    description:
      "Enterprise multi-tenant claims platform serving parking partners, subsidiaries, and admins with hierarchical partner relationships and strict RBAC data isolation (MFA, API-key auth, IP whitelisting, audit logging). Full claim lifecycle engine (Created → Review → Approved/Rejected → Closed) with S3 evidence uploads, PDF/ZIP claim-record generation, Elasticsearch full-text search with async Celery indexing, Celery Beat BI/KPI reporting with Redis caching, partner-facing React/Tailwind dashboard, and an EKS → ECS migration with zero-downtime CI/CD (GitHub Actions → ECR → rolling deploys).",
    impact: [
      "Multi-tenant RBAC with MFA, API keys & audit logging",
      "Full claim lifecycle with S3 evidence & PDF/ZIP records",
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
];

export function projectsByIndustry(industryId: string | null): Project[] {
  if (!industryId) return projects;
  return projects.filter((p) => p.industryIds.includes(industryId));
}

export function projectCountForIndustry(industryId: string): number {
  return projects.filter((p) => p.industryIds.includes(industryId)).length;
}

/** Industries that have at least one tagged project (proof on the site). */
export function industriesWithProjects(): Industry[] {
  return industries.filter((i) => projectCountForIndustry(i.id) > 0);
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
    tagline: "Digital weight-loss platform built zero-to-launch — raised $2.5M+.",
    description:
      "Venture health product for Stryber (European venture builder): React Native apps on Python (FastAPI/Flask) APIs and Google Cloud, plus a companion web app owned end-to-end. Shipped from first commit to production; the product went on to raise over $2.5M.",
    status: "Live",
    highlights: [
      "Built zero-to-launch for a European venture builder",
      "React Native apps on Python APIs (GCP)",
      "Raised $2.5M+ in investment",
    ],
    stack: ["React Native", "Python", "FastAPI", "Flask", "Google Cloud"],
  },
  {
    name: "Miza",
    category: "Fintech · Mobile",
    tagline: "Fintech venture product built zero-to-launch alongside Kilow.",
    description:
      "Second venture product shipped from zero to launch as senior engineer for Stryber — cross-platform mobile experience backed by Python APIs, with CI/CD and deployments on Google Cloud Platform.",
    status: "Shipped",
    highlights: [
      "Zero-to-launch for a European venture builder",
      "React Native on Python APIs (GCP)",
      "Production CI/CD and cloud deployments",
    ],
    stack: ["React Native", "Python", "FastAPI", "Flask", "Google Cloud"],
  },
  {
    name: "AI Career Ops",
    category: "AI / ML · Career Tech",
    tagline: "LLM-powered job discovery, scoring, and application tailoring.",
    description:
      "A multi-tenant platform that runs the full job-application loop — discover → score → select → tailor → PDF — on a multi-provider LLM layer with JSON-schema-constrained outputs. Evolving to LangGraph orchestration with Postgres + pgvector for semantic candidate↔job matching.",
    status: "In Development",
    highlights: [
      "Pipeline: discover → score → select → tailor → PDF",
      "Multi-provider LLM abstraction with retry/fallback",
      "LangGraph + pgvector semantic matching",
    ],
    stack: [
      "TypeScript",
      "Node / Express",
      "React",
      "Python",
      "LangChain",
      "LangGraph",
      "pgvector",
      "Docker",
    ],
  },
  {
    name: "ParkGuard",
    category: "InsurTech · Enterprise SaaS",
    tagline: "Multi-tenant parking claims platform with zero-downtime CI/CD.",
    description:
      "Enterprise claims platform with hierarchical partner RBAC, full claim lifecycle, Elasticsearch search, Celery Beat BI pipelines, and an EKS → ECS infrastructure migration that cut operational complexity while keeping zero-downtime deploys.",
    status: "Live",
    highlights: [
      "Strict multi-tenant RBAC with MFA & audit logging",
      "Claim lifecycle with S3 evidence & PDF/ZIP records",
      "EKS → ECS migration with GitHub Actions CI/CD",
    ],
    stack: [
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Elasticsearch",
      "React",
      "AWS",
      "Docker",
    ],
    url: "https://parkguard.com",
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
      "Express.js",
      "Ruby on Rails",
      "Django REST Framework",
      "GraphQL API",
    ],
  },
  {
    title: "Frontend Frameworks",
    items: [
      "ReactJS",
      "NextJS",
      "React Native",
      "Redux",
      "VueJS",
      "HTML5",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Large Language Models (LLMs)",
      "OpenAI",
      "Recommendation System",
      "LLM Integration",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Prompt Engineering",
      "Token/Context Optimization",
      "Vector Search",
      "Embeddings",
      "Semantic Search",
      "Neural Networks (ANN)",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN)",
      "Supervised & Unsupervised Learning",
      "Feature Engineering",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "S3",
      "GCP",
      "EC2",
      "RDS",
      "SQS",
      "IAM",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Jenkins",
      "CircleCI",
      "GitHub Actions",
      "Cloud Deployment",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Microservices Architecture",
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
      "Agile/Scrum",
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
    description:
      "Built an AI auditing engine that found $40M+ in unpaid commissions across a decade of MLS transaction data.",
  },
  {
    value: "$2.5M+",
    label: "Investment raised",
    description:
      "Built Kilow zero-to-launch for a European venture builder; the health app went on to raise over $2.5M.",
  },
  {
    value: "100+",
    label: "Data sources integrated",
    description:
      "Ingested 100+ MLS feeds and public datasets into a Snowflake warehouse powering enterprise analytics.",
  },
  {
    value: "75%",
    label: "Fewer production defects",
    description:
      "Drove a 75% reduction in defects through CI/CD pipelines, code review standards, and rigorous testing.",
  },
  {
    value: "30%",
    label: "Faster release cycles",
    description:
      "Cut deployment cycles by 30% with automated CI/CD pipelines and Dockerized deployments.",
  },
  {
    value: "10+",
    label: "Engineers led",
    description:
      "Led 10+ engineers across architecture, delivery, code reviews, CI/CD, and production reliability.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  /** CSS object-position for avatar crop, e.g. "center 30%" */
  avatarPosition?: string;
  /** How the avatar fills the circle. Default cover. */
  avatarFit?: "cover" | "contain";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Saim stands out for deep AI/ML ownership with LLMs, RAG pipelines, and production agent workflows, alongside full-stack delivery on our SaaS platforms. He leads with clarity, ships excellent work, and raises the bar for the whole engineering team.",
    name: "Muneeb Sheikh",
    role: "Engineering Director",
    company: "Devsinc",
    avatarUrl: "/testimonials/muneeb-sheikh.png",
  },
  {
    quote:
      "Working with Saim was a turning point. He took Kilow from zero to launch and the product went on to raise $2.5M+. He doesn't just write code, he ships venture-ready products.",
    name: "Omar Daouk",
    role: "Product Lead",
    company: "Stryber",
    avatarUrl: "/testimonials/omar-daouk.png",
  },
  {
    quote:
      "Saim is a full-stack force multiplier, strong across backend, frontend, and AI-powered features, with real ownership from architecture through production. He led work with clarity, raised the team's bar, and delivered excellent results under pressure. One of the strongest engineers I've worked with.",
    name: "Hamza Tahir",
    role: "CTO",
    company: "Lets Remotify",
    avatarUrl: "/testimonials/hamza-tahir.png",
  },
  {
    quote:
      "Saim has been one of the best finds for our team. He's excellent at full-stack ownership from architecture through delivery, and brings strong AI/ML depth with LLMs and RAG systems. His problem-solving, end-to-end product ownership, and client communication have been consistently impressive.",
    name: "Faizan Azhar",
    role: "Team Lead",
    company: "Devsinc",
    avatarUrl: "/testimonials/faizan-azhar.png",
    avatarPosition: "58% 32%",
    avatarFit: "contain",
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
  { label: "Book a call", href: profile.calendlyUrl, icon: Calendar },
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Email", href: profile.socials.email, icon: Mail },
  { label: "Phone", href: profile.socials.phone, icon: Phone },
];

export const educationIcon = GraduationCap;
export const industryIcon = Building2;
