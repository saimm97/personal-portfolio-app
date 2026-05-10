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
  title: "Senior Full Stack Engineer",
  tagline:
    "Senior Full Stack Engineer with 6+ years shipping investor-ready SaaS and AI products across Python (Django/FastAPI), React/Next.js, Ruby on Rails, and Laravel — from classical ML to LLM- and deep learning-powered models in production. Trusted technical lead for multiple startups through launch and successful fundraising; flagship build: an auditing platform that uncovered $40M+ in revenue leakage.",
  shortBio:
    "I'm Saim Malik, a Senior Full Stack Engineer based in Lahore, Pakistan. I partner with startups as a hands-on lead — aligning architecture, velocity, and quality so teams can earn investor confidence and scale after the round. I ship end-to-end across Django, FastAPI, Laravel, Rails, and React/Next.js, and I put machine learning, LLMs, and deep learning to work where it moves the needle: search, automation, auditing, and intelligent workflows. Performance, reliability, and production discipline are non-negotiable.",
  location: "Lahore, Pakistan",
  yearsOfExperience: 6,
  email: "saimmalik8397@gmail.com",
  phone: "+92 344 4411987",
  resumeUrl: "/resume.pdf",
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
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats: { label: string; value: string }[] = [
  { label: "Years of Experience", value: "6+" },
  { label: "Engineers Led", value: "15+" },
  { label: "Data Sources Integrated", value: "100+" },
  { label: "Revenue Uncovered", value: "$40M+" },
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
    role: "Senior Full Stack Engineer / Team Lead",
    company: "Devsinc",
    period: "2023 — Present",
    location: "Lahore, Pakistan",
    industry: "Multi-Tenant SaaS · AI",
    summary:
      "Software and product engineering company delivering enterprise-scale web and mobile solutions. I lead a 15+ engineer team building multi-tenant SaaS platforms and AI-powered features.",
    achievements: [
      "Architected scalable multi-tenant SaaS platforms using Django, Next.js, and PostgreSQL.",
      "Built a data platform integrating 100+ sources, powering large-scale analytics and business insights.",
      "Developed AI-powered features including intelligent search, automation, and conversational assistants.",
      "Led a team of 15+ engineers, reducing production defects by 75% through CI/CD improvements.",
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
    role: "Senior Full Stack Engineer",
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
    name: "MLSIngestion Pro",
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
  },
  {
    name: "BlueCollor Portal",
    category: "HR Tech · Localization · ML",
    description:
      "Web platform for global localization and translation services combining a job marketplace for seekers and employers with real-time messaging, dashboards, and optional premium listings. Rails and PostgreSQL core on Heroku, with Django and Celery pipelines for profile enrichment, ML matching, and spam detection.",
    impact: [
      "Real-time messaging and personalized dashboards",
      "ML job–candidate matching and resume parsing",
      "Secure auth with Devise and JWT",
    ],
    stack: [
      "Ruby on Rails",
      "React.js",
      "PostgreSQL",
      "Django",
      "Python",
      "Celery",
      "Redis",
      "Heroku",
      "Devise",
      "JWT",
    ],
    industryIds: ["translation-nlp", "multi-tenant-saas", "ai-ml"],
  },
  {
    name: "Clinical Operations & Care Pathway Platform",
    category: "Healthcare · Multi-Tenant SaaS · AI",
    description:
      "Multi-tenant SaaS for clinics and regional health networks: referral intake, care-pathway tracking, and operations analytics — with HIPAA-minded access control, audit trails, and ML-assisted prioritization so teams spend time on patients, not spreadsheets. Built in the same full-stack pattern as other investor-grade products: Python (Django/FastAPI), React/Next.js, PostgreSQL, and production-hardened APIs.",
    impact: [
      "Role-based access and audit-friendly event history",
      "ML-assisted queue prioritization and SLA visibility",
      "End-to-end Django/FastAPI + React/Next.js delivery",
    ],
    stack: [
      "Python",
      "Django",
      "FastAPI",
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
    ],
    industryIds: ["healthcare", "multi-tenant-saas", "ai-ml", "data-engineering"],
  },
];

export function projectsByIndustry(industryId: string | null): Project[] {
  if (!industryId) return projects;
  return projects.filter((p) => p.industryIds.includes(industryId));
}

export function projectCountForIndustry(industryId: string): number {
  return projects.filter((p) => p.industryIds.includes(industryId)).length;
}

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
      "GraphQL",
    ],
  },
  {
    title: "Frontend Frameworks",
    items: ["ReactJS", "Next.js", "Redux", "Vue.js", "HTML5", "Tailwind CSS"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Large Language Models (LLMs)",
      "OpenAI API",
      "Prompt Engineering",
      "AI Assistants",
      "Retrieval-Augmented Generation",
      "Intelligent Search",
      "NLP",
      "Recommendation Systems",
      "ML Pipelines",
      "Model Deployment",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "S3",
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
    value: "15+",
    label: "Engineers led",
    description: "Mentored and led teams of 15+ engineers across architecture reviews, hiring, and on-call.",
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
      "I invest in mentorship, RFCs, and code review standards. Leading 15+ engineers has taught me that great teams compound — clarity and trust are the multipliers.",
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
