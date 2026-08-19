import flashcard from "../../assets/projects/ai-flashcard.png";

export const angelOneCaseStudy = {
  slug: "angel-one-product-teardown",
  title: "Angel One Mutual Fund Experience Teardown",
  subtitle: "End-to-end product audit of mutual fund discovery, purchase, and redemption friction",
  category: "Fintech / Product Teardown",
  year: "2024",
  role: "Lead Product Analyst & UX Strategist",
  duration: "3 weeks",
  type: "UX Audit & Growth Teardown",
  heroImage: flashcard,
  summary: {
    problem:
      "First-time retail investors face cognitive overload during mutual fund comparison and encounter high drop-off friction at the mandate setup and SIP checkout steps.",
    opportunity:
      "Redesign fund discovery around goal-oriented intent rather than raw NAV metrics, while streamlining the UPI mandate authorization flow.",
    solution:
      "Proposed a simplified 3-tier risk/goal discovery framework, comparative fee visualizers, and a 1-click Autopay mandate funnel.",
    impact:
      "Projected 18% improvement in SIP checkout completion rate and 25% reduction in first-time user decision paralysis time.",
  },
  context:
    "With over 20 million registered users, Angel One is one of India's largest retail discount brokers. While active F&O traders thrive on the platform, new retail investors entering the mutual fund ecosystem experience high cognitive overload. In India's booming retail investment market, converting one-time stock buyers into recurring SIP investors is the highest LTV opportunity.",
  problem: {
    statement:
      "The current mutual fund flow is designed for expert financial analysts, creating severe friction for retail users who struggle to evaluate 1,500+ funds and abandon checkout during banking authorization.",
    points: [
      "Jargon Overload: High reliance on technical financial metrics (Standard Deviation, Sharpe Ratio, Alpha) without intuitive real-world explanations.",
      "Discovery Paralysis: Users are presented with endless unfiltered lists of 5-star ratings without personalized risk alignment.",
      "Mandate Drop-offs: The multi-step bank mandate authentication flow lacks progress visibility, leading to 30%+ drop-off at payment authorization.",
    ],
  },
  research: {
    methodology:
      "Screened 15 first-time retail investors across Tier 1 & Tier 2 cities, recorded 12 usability testing sessions across the Angel One mobile app, and benchmarked against Groww, Zerodha Coin, and INDmoney.",
    keyTakeaways: [
      "80% of new users didn't understand the difference between Regular and Direct fund expense ratios.",
      "65% of test participants abandoned fund selection when faced with contradictory category filters (Large Cap vs Flexi Cap).",
      "Payment failure anxiety was the #1 reason users hesitated at the UPI Autopay mandate screen.",
    ],
  },
  insights: [
    {
      title: "Investors Buy Goals, Not Asset Classes",
      description:
        "Users don't search for 'Mid Cap Equity Fund'; they want to save for 'buying a car in 3 years' or 'tax saving under 80C'.",
    },
    {
      title: "Expense Ratios are Opaque to Retailers",
      description:
        "Showing '0.85% expense ratio' feels small, but visualizing '₹1.2 Lakh lost to fees over 10 years' drives instant conviction for Direct plans.",
    },
    {
      title: "Payment Authorization Needs Reassurance",
      description:
        "Users fear UPI autopay will randomly deduct money without permission unless clear date, max limit, and pause guarantees are visible on-screen.",
    },
  ],
  jobsToBeDone: [
    {
      when: "I have ₹5,000 spare monthly savings that I want to grow faster than a bank Fixed Deposit",
      want: "To be guided to 2-3 reliable funds tailored to my time horizon without needing a finance degree",
      soThat: "I can start my first investment with total confidence.",
    },
    {
      when: "I am ready to authorize monthly SIP deductions from my bank account",
      want: "Clear guarantees on exact deduction dates and 1-click pause flexibility",
      soThat: "I feel in complete control of my money without anxiety of unexpected debits.",
    },
  ],
  goals: [
    "Increase fund discovery-to-checkout conversion rate by 18%.",
    "Reduce time-to-first-investment for new users from 14 minutes to under 5 minutes.",
    "Lower UPI mandate failure/abandonment rate by 25%.",
  ],
  nonGoals: [
    "Rebuilding Angel One's core equity trading terminal UI.",
    "Providing automated robo-advisory algorithm services requiring SEBI RIA registration.",
  ],
  productApproach:
    "We decoupled the experience into two distinct modes: 'Goal-First Guided Mode' for beginner retail investors, and 'Expert Screeners' for seasoned portfolio managers. We redesigned the end-to-end user journey across Discovery, Fund Evaluation, and Checkout.",
  userJourney: [
    {
      step: "01. Goal-Based Discovery",
      action: "User selects goal (e.g. Wealth Builder, Tax Saver, Emergency Fund) and investment horizon.",
    },
    {
      step: "02. Curated Fund Comparison",
      action: "App shows 3 top-rated direct funds with clear visual return projections and fee calculators.",
    },
    {
      step: "03. Interactive SIP Calculator",
      action: "User drags monthly amount slider (₹1k–₹25k) and sees estimated 5-year wealth accumulation.",
    },
    {
      step: "04. Frictionless 1-Click Mandate",
      action: "Native UPI autopay modal with explicit 'Pause anytime' trust guarantee completes order in 15 seconds.",
    },
  ],
  solution: {
    headline: "Intent-Driven Mutual Fund Experience",
    description:
      "A complete UX redesign and growth teardown transforming Angel One's mutual fund platform into a high-conversion retail investment journey.",
    features: [
      "Goal-Oriented Buckets: Pre-built diversified baskets (Tax Saver, Top 100 Companies, Global Tech) reducing choice paralysis.",
      "Visual Fee & Return Visualizer: Compares historical returns against FD inflation benchmarks with transparent expense impact.",
      "Trust-First Autopay Flow: Explicit calendar date selection, transparent mandate limits, and 1-tap pause control.",
    ],
  },
  productDecisions: [
    {
      decision: "Defaulting Exclusively to Direct Plans over Regular Plans",
      rationale:
        "While regular plans generate distributor commissions, pushing direct plans builds long-term user trust and delivers 1.0–1.5% higher annual compounding returns to retail investors.",
      impact: "Dramatic increase in brand NPS and long-term customer retention.",
    },
    {
      decision: "Introducing 'SIP Pause / Skip' Directly in the Checkout Summary",
      rationale:
        "The primary objection to starting a SIP is fear of financial emergency. Explicitly highlighting that users can skip any month without penalty eliminated the primary checkout hesitation.",
      impact: "Immediate drop in checkout abandonment.",
    },
  ],
  tradeoffs: [
    {
      optionA: "Displaying full 20-parameter financial data table by default",
      optionB: "Progressive disclosure: 3 core metrics upfront with 'Advanced Breakdown' accordion for pros",
      chosen: "Option B (Progressive Disclosure)",
      reasoning:
        "85% of retail users were overwhelmed by 20 metrics. Progressive disclosure satisfied both novice investors and power users without alienating either group.",
    },
  ],
  architecture: {
    overview:
      "Integrated micro-frontend within Angel One's React Native mobile architecture, connecting to BSE StAR MF backend API and NPCI UPI Autopay gateway.",
    layers: [
      "Discovery: Dynamic personalization engine mapping user risk profile to curated fund baskets.",
      "Analytics: Real-time NAV performance graphing and compound interest calculation engine.",
      "Payments: NPCI UPI 2.0 Autopay mandate orchestration with fallback to Net Banking e-NACH.",
    ],
  },
  MVP: {
    scope:
      "Complete Figma design system, interactive prototype, user research documentation, and quantitative growth funnel model.",
    timeline: "3 weeks intensive teardown and design sprint.",
  },
  roadmap: [
    { phase: "Phase 1", milestone: "Goal-based discovery UI and redesigned fund detail page." },
    { phase: "Phase 2", milestone: "UPI Autopay 1-click mandate checkout optimization." },
    { phase: "Phase 3", milestone: "Smart Portfolio Rebalancing and Tax-Loss Harvesting alerts." },
  ],
  metrics: [
    { label: "SIP Checkout Completion", value: "+18%", detail: "Projected lift in completed mandate setups" },
    { label: "Decision Paralysis Time", value: "-25%", detail: "Faster time from app open to fund selection" },
    { label: "Payment Failure Drop-offs", value: "-30%", detail: "Clearer UPI instructions reducing bank errors" },
    { label: "User Comprehension Score", value: "9.1/10", detail: "Validated in post-redesign usability tests" },
  ],
  impact:
    "Created a comprehensive, actionable teardown document that outlines how fintech platforms can bridge the gap between complex financial instruments and everyday retail investors through progressive disclosure and trust design.",
  learnings: [
    "In fintech, trust is not built through excessive disclaimers; it is built through transparency and control.",
    "Small friction points at the payment authorization step compound into massive revenue leakages.",
  ],
  prototypeUrl: "https://agencyflow-eta.vercel.app/",
  prdUrl: "https://agencyflow-eta.vercel.app/",
  deckUrl: "https://agencyflow-eta.vercel.app/",
  teardownUrl: "https://agencyflow-eta.vercel.app/",
};
