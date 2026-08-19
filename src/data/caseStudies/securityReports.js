import scanner from "../../assets/projects/scanner.png";

export const securityReportsCaseStudy = {
  slug: "automating-security-reports",
  title: "Automating Security Reports, Not Security Audits",
  subtitle:
    "A product case study on eliminating repetitive documentation without compromising human expertise.",
  category: "AI / Cybersecurity / DevTools",
  year: "2025", // Not specified in source material
  role: "Product Manager & Full-Stack Developer", // Self-described role in the source, not "Lead PM & Product Architect"
  duration: "3 weeks", // Not specified in source material
  type: "Product Case Study & Prototype",
  heroImage: scanner,

  summary: {
    problem:
      "Security audits are optimized for finding vulnerabilities, not documenting them — auditors spend hours rewriting the same recurring content or adapting responses from previous reports and AI tools like ChatGPT instead of investigating findings.",
    opportunity:
      "Use security scanner outputs together with Generative AI to automate stakeholder-specific report generation — without automating the audit itself — so analysts spend less time documenting and more time validating and fixing vulnerabilities.",
    solution:
      "A workflow that imports results from a vulnerability scanner (e.g. Burp Suite, Nuclei), lets the analyst pick a report type (Developer Report, Executive Summary, Client Audit Report, Compliance Report), and uses GenAI (ChatGPT, Gemini, Claude) to draft a structured report the analyst then reviews, edits, and exports as PDF, DOCX, or HTML.",
    impact:
      "Reported time-to-first-draft dropped from ~8 hours to 30 minutes (↓94%), overall reporting effort fell ~85%, report consistency rose ~90%, and analyst productivity rose ~60% (more audits completed in the same time).",
  },

  context:
    "Security audits are designed to uncover vulnerabilities, but a surprising amount of the work happens after testing is over — the challenge isn't finding security issues, it's documenting them. Most vulnerabilities repeat across applications, along with their remediation steps, recommendations, and risk descriptions, yet auditors still spend hours rewriting the same content or adapting responses from previous reports and AI tools. Every engagement requires multiple versions of the same findings — technical reports for developers, executive summaries for stakeholders, and compliance documentation — and because these reports directly influence remediation and business decisions, they can't be treated as fully autonomous AI output; every finding must stay accurate, traceable, and reviewable.",

  problem: {
    statement:
      "Reporting had become a manual bottleneck that slowed down audits, reduced productivity, and shifted valuable engineering time away from solving security problems.",
    points: [
      "Report writing often took longer than expected because every finding had to be rewritten into stakeholder-friendly language.",
      "Common vulnerabilities appeared across multiple assessments, yet analysts repeatedly rewrote the same descriptions, remediation steps, and recommendations.",
      "Developers, managers, and clients all required different levels of technical detail, forcing analysts to create multiple versions of the same findings.",
      "The final output depended heavily on the individual analyst's writing style and experience, making standardization difficult.",
      "Analysts constantly moved between security scanners, previous reports, documentation, and AI tools like ChatGPT, breaking their focus and slowing the workflow.",
    ],
  },

  research: {
    methodology:
      "Research started with the my own security team while actively performing web application security audits, then extended to conversations with security analysts, penetration testers, and consultants, along with discussions within the cybersecurity community. ",
    keyTakeaways: [
      "Regardless of the tools or scanners used, the post-assessment workflow looked almost identical across analysts: copying content from previous reports or AI tools, rewriting the same remediation guidance, and manually tailoring reports for developers, managers, and clients.",
      "The users most affected — Security Analysts, Security Engineers, and Cybersecurity Researchers — consistently described report writing as repetitive, time-consuming, and difficult to standardize across engagements.",
      "Secondary users (security consultants, engineering managers, developers, and cybersecurity students) struggled with interpreting raw scanner output and producing professional, client-ready reports.",
    ],
  },

  insights: [
    {
      title: "The Bottleneck Is Documentation, Not Discovery",
      description:
        "Security experts wanted to spend their time validating and fixing vulnerabilities — not repeatedly documenting them.",
    },
    {
      title: "It's a Trust Problem, Not a Text-Generation Problem",
      description:
        "Analysts didn't mind AI writing reports — they minded AI writing incorrect reports. That reframed the product from an autonomous generator into a human-in-the-loop reporting assistant.",
    },
  ],

  jobsToBeDone: [
    {
      when: "I've completed a security assessment",
      want: "to transform validated findings into stakeholder-specific, review-ready reports without rewriting recurring information",
      soThat: "I can spend more time on security analysis and remediation.",
    },
  ],

  goals: [
    "Reduce the manual bottleneck of writing security audit reports, so testers spend less time documenting recurring vulnerabilities and more time solving real security problems.",
    "Keep every AI-generated report transparent, editable, and easy for auditors to review before sharing with clients.",
    "Reduce reporting effort and accelerate remediation by enabling fast, consistent report generation after scans.",
  ],

  nonGoals: [
    "Automating security testing itself — finding, validating, and assessing vulnerabilities stays in the hands of the human security auditor.",
  ],

  productApproach:
    "Started from a simple bet: security auditors were spending more time writing reports than analyzing vulnerabilities, and automating repetitive reporting could give that time back. Conversations with security testers, plus the author's own audit experience, confirmed the pattern — most reports were built by copying content from previous audits or AI tools because the same vulnerabilities, recommendations, and remediation steps kept reappearing. Report generation was treated as the biggest bottleneck, since the investigation itself was largely complete by the time documentation began. Scope was deliberately limited to automating report generation, not security auditing — vulnerability discovery and validation stayed with the auditor. The resulting direction: combine automated security-scanner outputs with GenAI to generate structured, stakeholder-tailored reports, accelerating the reporting process while keeping the human in control.",

  userJourney: [
    {
      step: "01. Start Assessment",
      action:
        "Analyst creates a new assessment and provides basic engagement details.",
    },
    {
      step: "02. Run Security Scanner",
      action:
        "Analyst runs a preferred scanner (e.g. Burp Suite, Nuclei) and imports the results.",
    },
    {
      step: "03. Select Report Type",
      action:
        "Analyst chooses a Developer Report, Executive Summary, Client Audit Report, or Compliance Report.",
    },
    {
      step: "04. Generate AI Report",
      action:
        "AI analyzes the findings and drafts a structured report tailored to the selected audience.",
    },
    {
      step: "05. Export Report",
      action:
        "Report is exported in the preferred format — PDF, DOCX, or HTML.",
    },
    {
      step: "06. Review and Edit",
      action:
        "Analyst reviews the AI-generated content, makes necessary edits, and validates recommendations.",
    },
    {
      step: "07. Share",
      action:
        "Finalized report is shared with stakeholders — developers, managers, or clients.",
    },
  ],

  solution: {
    headline: "AI-Assisted Security Reporting Workflow",
    description:
      "A workflow, not an autonomous tool: security-scanner outputs feed into Generative AI / LLMs (ChatGPT, Gemini, Claude), which draft the content for each vulnerability found during scanning and turn it into an editable, ready-to-use report — with the analyst reviewing and validating every step before it reaches a stakeholder.",
    features: [
      "Scanner Import: Import results from a preferred vulnerability scanner (e.g. Burp Suite, Nuclei) directly into a new assessment.",
      "Stakeholder-Specific Report Types: Generate a Developer Report, Executive Summary, Client Audit Report, or Compliance Report from the same underlying findings.",
      "Multi-Format Export: Export the finished report as PDF, DOCX, or HTML.",
      "Human-in-the-Loop Review: Every AI-generated draft is reviewed and edited by the analyst before export and sharing.",
    ],
  },

  productDecisions: [
    {
      decision: "Automate report generation only — not vulnerability discovery",
      rationale:
        "Vulnerability discovery and validation remained with the auditor; only the repetitive documentation workflow was automated, because human judgment is essential for validating findings, assessing business impact, and eliminating false positives.",
      impact:
        "Kept the tool positioned as a documentation accelerator rather than an autonomous security tool — the framing behind the 'trust problem' insight that shaped the rest of the product.",
    },
    {
      decision:
        "Generate multiple stakeholder-specific report types from one set of findings",
      rationale:
        "Developers, managers, and clients require different levels of technical detail, and a single report rarely serves everyone, so the same findings can be rendered as a Developer Report, Executive Summary, Client Audit Report, or Compliance Report.",
      impact:
        "Reported effort for stakeholder-specific reports dropped from being created manually to one-click generation, a ~80% reduction in effort.",
    },
    {
      decision: "Require human review and edit before export",
      rationale:
        "Every report needed to remain transparent, editable, and easy for auditors to review before sharing with clients — reports can't be treated as fully autonomous AI output since they directly influence remediation and business decisions.",
      impact:
        "Reframed the product from an autonomous generator into a human-in-the-loop reporting assistant, which is what earned analyst adoption.",
    },
  ],

  tradeoffs: [
    {
      optionA: "Fully autonomous AI-generated reports",
      optionB:
        "AI-drafted reports with mandatory human review and edit before export or sharing",
      chosen: "Option B",
      reasoning:
        "Analysts didn't mind AI writing reports — they minded AI writing incorrect reports. Keeping every report transparent and editable before it reaches a client was a non-negotiable boundary.",
    },
    {
      optionA: "Extend automation to vulnerability discovery and validation",
      optionB:
        "Automate only the reporting/documentation layer, leaving discovery and validation to the auditor",
      chosen: "Option B",
      reasoning:
        "Human judgment is essential for validating findings, assessing business impact, and eliminating false positives — automating security testing itself was an explicit non-goal.",
    },
  ],

  architecture: {
    overview:
      "The source material describes a workflow rather than a detailed technical stack: security-scanner output is imported, a report type is selected, Generative AI / LLMs (ChatGPT, Gemini, Claude) draft the content for each finding, and the analyst reviews and edits the draft before exporting to PDF, DOCX, or HTML and sharing it with stakeholders. No frontend/backend architecture, hosting, or specific LLM-provider integration is specified in the source.",
    layers: [
      "Assessment Setup: Analyst creates a new assessment with basic engagement details.",
      "Scanner Integration: Results are imported from a preferred vulnerability scanner (e.g. Burp Suite, Nuclei).",
      "Report-Type Selection: Analyst selects the target audience/format (Developer, Executive, Client Audit, Compliance).",
      "AI Draft Generation: Generative AI drafts a structured report tailored to the selected audience.",
      "Human Review & Edit: Analyst validates content accuracy and edits before export.",
      "Export & Share: Report is exported (PDF/DOCX/HTML) and shared with stakeholders.",
    ],
  },

  MVP: {
    scope:
      "A working prototype — described in the source as a 'Web Vulnerability Scanner' — implementing the core flow: create an assessment, run/import a scanner, select a report type, generate an AI draft, review and edit, then export and share.",
    timeline: null, // Not specified in source material
  },

  roadmap: [
    {
      phase: "Phase 1",
      milestone:
        "Generating the effecient data for a each vulnerability found",
    },
    {
      phase: "Phase 2",
      milestone:
        "Expanding the MVP to generate data simultaneously for different stakeholders",
    },
    {
      phase: "Phase 3",
      milestone:
        "Compliance-framework-aware reporting (e.g. SOC 2, ISO 27001 mappings) and collaborative review workflows for multi-analyst engagements.",
    },
  ], // No phased roadmap (v1.0/v1.5/v2.0, Jira sync, etc.) is defined in the source material — the described "Follow-Up" step (re-scan to verify fixes and regenerate updated reports) is part of the core loop, not a separate roadmap phase.

  metrics: [
    {
      label: "Time to Generate First Draft",
      value: "↓94%",
      detail: "~8 hours before, 30 minutes after",
    },
    {
      label: "Overall Reporting Effort",
      value: "↓85%",
      detail: "Manual end-to-end before, AI-assisted with human review after",
    },
    {
      label: "Security Analyst Productivity",
      value: "↑60%",
      detail: "More audits completed in the same time",
    },
    {
      label: "Report Consistency",
      value: "↑90%",
      detail:
        "From dependent on the individual analyst to standardized AI-generated templates",
    },
    {
      label: "Stakeholder-Specific Reports",
      value: "↓80% effort",
      detail: "From created manually to one-click generation",
    },
    {
      label: "Context Switching",
      value: "↓70%",
      detail: "From Scanner → Docs → ChatGPT → Word to a unified workflow",
    },
    {
      label: "Client Delivery Time",
      value: "Faster turnaround",
      detail: "From next-day/several hours to within the same working session",
    },
  ],

  impact:
    "Reduced repetitive documentation, letting security analysts spend more time identifying and validating vulnerabilities; standardized report quality across auditors and client engagements; accelerated report delivery so clients and development teams could begin remediation sooner; and improved the professionalism and consistency of stakeholder-facing security reports.",

  learnings: [
    "Report generation initially looked like a text-generation problem. User research showed it was actually a trust problem — analysts didn't mind AI writing reports, they minded AI writing incorrect reports. That insight changed the product from an autonomous generator into a human-in-the-loop reporting assistant.",
  ],

  prototypeUrl: "https://scan-it-report-generation.vercel.app",
  prdUrl: null, // Not referenced in source material
  deckUrl:
    "https://docs.google.com/presentation/d/1DiSbpU2rxvuyspLiWozgSsKcoVXFIPy4/edit?usp=sharing&ouid=114027340303708524803&rtpof=true&sd=true",
  teardownUrl: null, // Not referenced in source material
};
