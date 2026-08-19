// ============================================================
//  PORTFOLIO CONTENT — Kashish Kataria, Product Manager / AI PM
// ============================================================

import profile from "./assets/profile.png";

// Project visuals
import scanner from "./assets/projects/scanner.png";
import youtube from "./assets/projects/youtube.png";
// import nobroker from './assets/projects/nobroker.jpg'
// import filo from './assets/projects/Filo.png'
// import angelone from './assets/projects/angelone.jpg'

// ─── Personal Details ───────────────────────────────────────
export const personalDetails = {
  name: "Kashish Kataria",
  role: "Product Manager · AI Products",
  headline: "Building products that solve the right problem.",
  subheading:
    "I'm an AI Product Manager bridging deep technical engineering with product discovery, user psychology, and strategic execution. I specialize in turning complex AI capabilities and ambiguous problem spaces into focused, high-impact products.",
  coreAreas: [
    "Product Discovery",
    "User Research",
    "Product Strategy",
    "AI/ML Products",
    "Prototyping",
    "Product Experimentation",
    "Technical Execution",
  ],
  about: {
    lead: "Product thinker with strong technical roots in software engineering, security, and AI systems.",
    paragraphs: [
      "I operate at the intersection of customer empathy, technical feasibility, and business outcomes. Having built and shipped full-stack software and AI applications myself, I bring a unique advantage to product teams: the ability to understand engineering trade-offs deeply while ruthlessly prioritizing user value.",
      "My background spans AI product development (LLMs, embeddings, RAG architectures), cybersecurity principles (vulnerability analysis, secure-by-design thinking), and rapid high-fidelity prototyping. This allows me to collaborate effortlessly across engineering, design, and executive stakeholders to drive conviction and velocity.",
    ],
  },
  img: profile,
};

// ─── Product Thinking Principles ─────────────────────────────
export const productPrinciples = [
  {
    number: "01",
    title: "Start with the problem",
    description:
      "Understand the user, context, and pain before designing the solution. Solutions built without a razor-sharp problem definition optimize for the wrong outcome.",
  },
  {
    number: "02",
    title: "Validate before scaling",
    description:
      "Use qualitative research, rapid prototypes, and targeted experiments to reduce uncertainty early before committing expensive engineering cycles.",
  },
  {
    number: "03",
    title: "Balance user value and feasibility",
    description:
      "Great product decisions live at the confluence of genuine customer value, technical viability, security considerations, and viable business economics.",
  },
  {
    number: "04",
    title: "Measure outcomes, not outputs",
    description:
      "Features are not successful because they ship on time. They are successful when they tangibly move adoption, engagement, retention, or operational efficiency.",
  },
];

// ─── Selected Work / Flagship Case Studies ───────────────────
export const selectedProjects = [
  {
    id: "01",
    slug: "rethinking-youtube-search",
    title: "Rethinking YouTube Search",
    subtitle: "Semantic intent-based video retrieval and discovery",
    problem:
      "Keyword-based video search fails when users describe concepts, moods, or visual timestamps rather than exact matching titles.",
    category: "AI / Search / Consumer",
    role: "Product Concept & AI Architecture",
    type: "0→1 Product Case Study ",
    year: "2026",
    outcome:
      "Designed semantic embeddings & natural query pipeline; mapped out ranking trade-offs to increase relevant discovery by estimated ~28%.",
    image: youtube,
    tags: ["Semantic Search", "LLM Embeddings", "Consumer AI", "Information Retrieval"],
    link: "/case-studies/rethinking-youtube-search",
    ctaText: "Read Full Case Study →",
  },
  {
    id: "02",
    slug: "automating-security-reports",
    title: "Automating Security Reports, Not Security Audits",
    subtitle: "AI-assisted penetration testing documentation engine",
    problem:
      "Security analysts spend 40%+ of billable hours writing repetitive vulnerability writeups instead of performing critical threat analysis.",
    category: "AI / Cybersecurity / B2B",
    role: "Lead PM & Product Architect",
    type: "B2B SaaS Workflow Product Casestudy - Prototype",
    year: "2025",
    outcome:
      "Built structured vulnerability templating with LLM drafting; kept analysts in human-in-the-loop control while cutting report draft time by 65%.",
    image: scanner,
    tags: ["Cybersecurity", "Human-in-the-loop AI", "B2B Workflow", "OWASP"],
    link: "/case-studies/automating-security-reports",
    ctaText: "Read Full Case Study →",
  },
];
//- Product Teardowns ---------------
export const selectedTeardowns = [
  {
    id: "01",
    title: "Angel One - Buying and selling mutual funds",
    image:"angelone",
    link: "https://file.notion.com/f/f/67625c95-3b1b-47bc-93f9-82432c871b9d/1fe28f78-a4e6-42e2-8435-a9d72c4ad432/Angelone_teardown_.pdf?table=block&id=38e57b0e-ac2f-8016-8525-e9b59bba1f66&spaceId=67625c95-3b1b-47bc-93f9-82432c871b9d&expirationTimestamp=1787148000000&signature=6ko-QmrFn4ww4PDAiEZkVuDbLrsKppOSocm_419TIFA&downloadName=Buying+and+Selling+of+Mutual+Funds+-+Angelone+teardown+.pdf",
    ctaText: "Read Full Deck →",
  },
  {
    id: "02",
    title: "NoBroker- Booking A Home Service",
    image:"nobroker",
    link: "https://file.notion.com/f/f/67625c95-3b1b-47bc-93f9-82432c871b9d/3945581a-5aad-46ac-8240-f026292dd884/NoBroker-BookingaHomeService-ProductTeardown.pdf?table=block&id=38b57b0e-ac2f-8045-a1a9-ecfead16cde6&spaceId=67625c95-3b1b-47bc-93f9-82432c871b9d&expirationTimestamp=1787148000000&signature=IfWPYukQ_1JPjsVaMX9ZEdehs0MjZEL-VsG7eb8SFek&downloadName=Booking+a+Home+Service-NoBroker+ProductTeardown.pdf",
    ctaText: "Read Full Deck →",
  },
  {
    id: "03",
    title: "Filo - onBoarding and Booking live session",
    image:"filo",
    link: "https://file.notion.com/f/f/67625c95-3b1b-47bc-93f9-82432c871b9d/78dc4301-74ec-427d-9241-abe047efe84e/Filoteardown-3c5a76a2-b652-41fb-8705-72b7fe06adba.pdf?table=block&id=39057b0e-ac2f-8012-83cb-c84bfb406c78&spaceId=67625c95-3b1b-47bc-93f9-82432c871b9d&expirationTimestamp=1787148000000&signature=Q5QGntTLUG22nqKa98DCHtO5jtvrNIN4iR0PFDImbHo&downloadName=onboarding+and+booking+a+live+session+-+Filo+Product+Teardown.pdf",
    ctaText: "Read Full Deck →",
  },
 
];
// ─── Work / Experience (Product-Impact Stories) ───────────────
export const workExperience = [
  {
    position: "Junior Software Engineer → Product & Tech Contributor",
    company: "Tietoevry",
    location: "Chandigarh, India",
    duration: "Aug 2024 – Jun 2025",
    problem:
      "Legacy enterprise workflows suffered from fragmented internal tooling and unclear operational requirement definitions across teams.",
    action:
      "Partnered with cross-functional leads to translate ambiguous client requirements into clear technical scopes, automated feedback workflows, and sprint goals.",
    productContribution:
      "Bridged engineering constraints with business stakeholders to reprioritize high-friction modules and establish clean regression feedback loops.",
    outcome:
      "Helped reduce internal triage cycles and post-release support incidents by ~20% while improving sprint velocity predictability.",
  },
  {
    position: "Associate Consultant – Product & Engineering",
    company: "Dec6 Consulting Private Limited",
    location: "Gurugram, India",
    duration: "Nov 2023 – Jan 2024",
    problem:
      "Client needed a rapid-turnaround custom delivery portal with tight deadline constraints and changing client feature requests.",
    action:
      "Conducted rapid stakeholder discovery, defined MVP scope, created interactive mockups, and coordinated implementation in tight 2-week iterations.",
    productContribution:
      "Authored product specs, managed the backlog, and aligned engineering on critical path user journeys versus 'nice-to-have' scope creep.",
    outcome:
      "Successfully delivered the MVP on an aggressive 6-week schedule with 100% acceptance on core milestone criteria.",
  },
  {
    position: "Software Engineer – Product Execution",
    company: "Origin Softwares",
    location: "Remote",
    duration: "Feb 2023 – Jul 2023",
    problem:
      "User-facing interface components lacked consistent interaction guidelines and real-time validation, leading to user input errors.",
    action:
      "Spearheaded user flow refactoring and implemented modular UI state management directly tied to customer feedback.",
    productContribution:
      "Advocated for customer-first design patterns within sprint planning and contributed to core product usability testing.",
    outcome:
      "Decreased form submission bounce rates and accelerated front-end release cadences by over 30%.",
  },
];

// ─── Education ───────────────────────────────────────────────
export const educationDetails = [
  {
    degree: "M.Tech — Computer Science Engineering",
    institution: "Chandigarh Engineering College",
    location: "Chandigarh",
    duration: "2024 – 2026",
    grade: "80.3%",
  },
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "Chandigarh Engineering College",
    location: "Chandigarh",
    duration: "2019 – 2023",
    grade: "78.3%",
  },
];

// ─── PM & AI Toolkit (Categorized) ───────────────────────────
export const toolkitCategories = [
  {
    category: "Product Management",
    description: "Framing problems, driving discovery, and measuring value.",
    items: [
      "Product Discovery",
      "PRDs & User Stories",
      "Roadmapping & Prioritization",
      "Product Metrics & KPIs",
      "Experimentation & A/B Testing",
      "User Journey Mapping",
    ],
  },
  {
    category: "AI & Emerging Tech",
    description: "Harnessing modern AI architectures into real products.",
    items: [
      "LLMs & Prompt Engineering",
      "RAG Architectures",
      "Embeddings & Vector Search",
      "Semantic Search Systems",
      "AI Evaluation & Guardrails",
      "Human-in-the-Loop Workflows",
    ],
  },
  {
    category: "Technical Stack",
    description: "Deep fluency with technical constraints and systems.",
    items: [
      "React" , "Next.js",
      "Node.js","Express",
      "REST & GraphQL APIs",
      "MongoDB","SQL",
      "Python","Javascript",
      "System Architecture",
    ],
  },
  {
    category: "Design & Collaboration",
    description: "Rapidly visualizing solutions and testing usability.",
    items: [
      "Figma",
      "High-Fidelity Prototyping",
      "Wireframing & User Flows",
      "Vibe Coding",
      "Miro",
      "Jira","Slack","Trello","Notion"
    ],
  },
  {
    category: "Security & Trust",
    description: "Building resilient, privacy-first product foundations.",
    items: [
      "OWASP Top 10",
      "Web Security Principles",
      "Vulnerability Assessment",
      "Threat Modeling",
      "Privacy-by-Design",
    ],
  },
  {
    category: "Analytics and Product Tools",
    description: "Rapidly visualizing solutions and testing usability.",
    items: [
      "Mixpanel", "Amplitude","Google Analytics 4",  "Power BI" ,"Microsoft Excel","Google Sheets" 
      ,"SQL"
    ],
  },
];

// ─── Written PRDs ─────────────────────────────────────────────
export const productPRDs = [
  {
    id: "01",
    title: "PRD v1.0.1 — Automated Report Generation in Web Vulnerability Scanner",
    subtitle: "B2B SaaS · Security",
    description:
      "Full product requirements document covering the 0→1 build of an automated PDF/HTML report engine inside a web vulnerability scanner. Defines problem framing, user stories, acceptance criteria, edge cases, and API contracts.",
    tags: ["Security", "B2B SaaS", "0→1", "Automation"],
    date: "2024",
    link: "https://app.notion.com/p/PRD-v1-0-1-Automated-Report-Generation-in-Web-Vulnerability-Scanner-37c57b0eac2f80649414e205e461252e",
  },
  {
    id: "02",
    title: "PRD v1.1.0 — CueMath FlashCard Generation",
    subtitle: "EdTech · AI Feature",
    description:
      "Feature PRD for an AI-powered flashcard generation system within the CueMath learning platform. Covers discovery, personas, jobs-to-be-done, prioritisation, and a phased rollout plan with success metrics.",
    tags: ["EdTech", "AI", "Personalization", "Feature PRD"],
    date: "2024",
    link: "https://app.notion.com/p/PRD-v1-1-0-CueMath-FlashCard-Generation-37c57b0eac2f804e8454fe4a6245108b",
  },
];

// ─── Contact & Socials ───────────────────────────────────────
export const contactDetails = {
  email: "kkofficio@gmail.com",
  linkedin: "https://www.linkedin.com/in/kashishkatariaofficial",
  github: "https://github.com/kashishkataria786",
  twitter: "https://x.com/kkataria786",
  medium:"https://medium.com/@kkofficio"
};

// ─── Compatibility Aliases ──────────────────────────────────
export const caseStudies = selectedProjects;
export const capabilities = toolkitCategories;
export const socialMediaUrl = contactDetails;
export const workDetails = workExperience;
export const eduDetails = educationDetails;

