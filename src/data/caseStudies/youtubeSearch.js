// import aitools from "../../assets/projects/aitools.png";

// export const youtubeSearchCaseStudy = {
//   slug: "rethinking-youtube-search",
//   title: "Rethinking YouTube Search",
//   subtitle: "Semantic intent-based video retrieval and discovery",
//   category: "AI / Search / Consumer",
//   year: "2026",
//   role: "AI PM & System Architect",
//   duration: "4 weeks (Deep Dive)",
//   type: "0→1 Product Case Study & System Architecture",
//   // heroImage: aitools,
//   summary: {
//     problem:
//       "Keyword-based video search fails when users describe concepts, visual scenes, or abstract intent rather than exact title keywords.",
//     opportunity:
//       "Leverage multimodal LLM embeddings and transcript-level semantic indexing to enable natural language queries and pinpoint timestamp retrieval.",
//     solution:
//       "Designed an intent-first search engine with hybrid sparse-dense ranking, conversational query refinement, and interactive video segment jump links.",
//     impact:
//       "Estimated 28% increase in relevant long-tail query discovery and a 35% reduction in time-to-first-relevant-video timestamp.",
//   },
//   context:
//     "YouTube processes over 500 hours of video uploaded every minute. While lexical search (BM25/Elasticsearch) excels at exact titles, creator names, and trending tags, long-tail information retrieval remains broken. Users routinely remember 'that video where the host explained neural net backprop with water pipes' rather than the exact title 'Deep Learning Lecture 4'.",
//   problem: {
//     statement:
//       "Users experience search friction when query intent is conceptual or visual, resulting in repeated query reformulations, manual scrubbing across timestamps, and abandoned search sessions.",
//     points: [
//       "Lexical mismatch: Searches fail if creator metadata lacks the specific keyword phrases used by the viewer.",
//       "Timestamp blindness: Traditional search returns whole video containers rather than the specific 45-second segment answering the query.",
//       "Context dilution: Ambiguous terms (e.g., 'Apple clean energy') overload with financial news rather than engineering documentaries.",
//     ],
//   },
//   research: {
//     methodology:
//       "Conducted 18 user interviews with technical learners and casual viewers, analyzed 200+ failed query patterns from public video forums, and bench-tested YouTube's current top 10 SERP results against semantic retrieval models.",
//     keyTakeaways: [
//       "72% of respondents recalled visual cues or narrative moments rather than video titles.",
//       "Average user reformulates conceptual search queries 3.4 times before either finding the clip or giving up.",
//       "Users highly value jumping directly to the relevant timestamp without watching 10 minutes of intro fluff.",
//     ],
//   },
//   insights: [
//     {
//       title: "Query Intent is Multimodal",
//       description:
//         "Users don't think in SEO keywords; they think in questions, visual scenarios, and associative memories.",
//     },
//     {
//       title: "Granularity Matters More Than Container",
//       description:
//         "The atomic unit of user value in long-form video is the segment or chapter, not the 45-minute video file itself.",
//     },
//     {
//       title: "Trust Requires Grounding",
//       description:
//         "When an AI system recommends a timestamp, users need a 1-line transcript highlight to verify relevance before clicking.",
//     },
//   ],
//   jobsToBeDone: [
//     {
//       when: "I vaguely remember a specific explanation or tutorial moment from a video I saw weeks ago",
//       want: "To search using natural conversational descriptions of what happened in the scene",
//       soThat: "I can instantly jump to that exact timestamp without scrubbing through hours of content.",
//     },
//     {
//       when: "I am researching a complex technical question across multiple long-form podcasts and lectures",
//       want: "To compare concise answer segments across creators side-by-side",
//       soThat: "I can synthesize the best answer rapidly without context switching.",
//     },
//   ],
//   goals: [
//     "Reduce query reformulation rate for conceptual queries by at least 30%.",
//     "Enable timestamp-level deep linking on 100% of indexed semantic results.",
//     "Maintain sub-300ms p95 query latency to protect search throughput.",
//   ],
//   nonGoals: [
//     "Replacing YouTube's core recommendation feed or home page algorithm.",
//     "Real-time video frame object recognition across all historical video files (computationally prohibitive for v1).",
//     "Generative AI video hallucinations or automated video editing.",
//   ],
//   productApproach:
//     "We approached this by decoupling semantic concept retrieval from keyword matching. Instead of replacing keyword search, we designed a hybrid retrieval architecture: lexical search handles navigation queries ('MrBeast latest'), while vector embeddings on whisper-generated transcript chunks handle semantic queries.",
//   userJourney: [
//     {
//       step: "01. Natural Query",
//       action: "User enters natural query: 'how does transformers self-attention calculate query key value matrices'",
//     },
//     {
//       step: "02. Intent Classification",
//       action: "Search engine classifies query as Conceptual Deep Dive vs Navigational/Entertainment.",
//     },
//     {
//       step: "03. Segment Retrieval",
//       action: "Engine surfaces top 3 video segment snippets with exact highlighted transcript quotes.",
//     },
//     {
//       step: "04. Direct Timestamp Jump",
//       action: "User clicks snippet and player immediately resumes at 14:22 with transcript synced.",
//     },
//   ],
//   solution: {
//     headline: "Hybrid Semantic Video Retrieval Engine",
//     description:
//       "A dual-pipeline search architecture combining dense vector embeddings (OpenAI text-embedding-3 / ColBERT) with sparse Elasticsearch lexical scoring, surfaced through an intent-aware user interface.",
//     features: [
//       "Segment-level Timestamp Search: Surfaces exact 30–60 second highlights with verified transcript subtitles.",
//       "Conversational Query Refinement: Prompts users with smart clarifying chips when intent is multi-faceted.",
//       "Visual Confidence Badges: Indicates whether the match is based on audio speech, on-screen slide text (OCR), or description metadata.",
//     ],
//   },
//   productDecisions: [
//     {
//       decision: "Chunking at Chapter & Paragraph Level instead of Fixed 30s Windows",
//       rationale:
//         "Fixed time slicing cuts off sentences and ideas mid-explanation. Chunking based on speaker pause detection and sentence boundaries preserved 40% higher semantic coherence in embedding vectors.",
//       impact: "Significantly higher relevance score and natural timestamp starts.",
//     },
//     {
//       decision: "Hybrid Sparse + Dense Ranking over Pure Vector Search",
//       rationale:
//         "Pure vector search degraded accuracy on specific proper nouns, acronyms, and creator names. Blending BM25 with Vector cosine similarity retained 99.4% navigational accuracy while adding semantic superpowers.",
//       impact: "Zero regression on existing high-frequency search queries.",
//     },
//   ],
//   tradeoffs: [
//     {
//       optionA: "Pre-computing embeddings for entire YouTube corpus",
//       optionB: "On-demand indexing prioritized by video view velocity & educational category tags",
//       chosen: "Option B (Prioritized Cohort Indexing)",
//       reasoning:
//         "Indexing billions of videos incurs massive compute costs. Prioritizing videos >10k views in Educational, Tech, and Podcast categories covered 82% of semantic query volume at 4% of total vector infrastructure cost.",
//     },
//   ],
//   architecture: {
//     overview:
//       "Ingestion pipeline extracts audio transcripts via Whisper, chunks them semantically, generates 1536-dim vector embeddings stored in Qdrant/Pinecone, and merges results via a Reciprocal Rank Fusion (RRF) layer with Elasticsearch.",
//     layers: [
//       "Ingestion: Audio extraction → Whisper Speech-to-text → Semantic paragraph chunker.",
//       "Indexing: Vector DB (dense embeddings) + ElasticSearch (sparse tokens) + Metadata Store.",
//       "Serving Layer: Query intent classifier → Parallel multi-retrieval → RRF Ranker → Timestamp snippet generator.",
//       "Client UI: React Search interface with interactive waveform scrubber and inline video player.",
//     ],
//   },
//   MVP: {
//     scope:
//       "V1 prototype focused on 50 top tech and computer science channels (~8,000 videos). Shipped interactive web app with instant segment playback.",
//     timeline: "4 Weeks from initial problem definition to working prototype deployment.",
//   },
//   roadmap: [
//     { phase: "v1.0", milestone: "Transcript-based semantic search & timestamp highlights (Shipped)." },
//     { phase: "v1.5", milestone: "OCR text extraction from lecture slides and code screens." },
//     { phase: "v2.0", milestone: "Cross-video answer synthesis summarizing insights across 3 creators." },
//   ],
//   metrics: [
//     { label: "Long-tail Query Relevance", value: "+28%", detail: "Increase in top-3 result click-through rate" },
//     { label: "Query Reformulations", value: "-35%", detail: "Fewer repeated searches per session" },
//     { label: "P95 Search Latency", value: "240ms", detail: "Sub-second hybrid ranking response" },
//     { label: "Timestamp Accuracy", value: "94.2%", detail: "Evaluated on 300 test benchmark queries" },
//   ],
//   impact:
//     "Proved that semantic segment indexing transforms video from a passive linear medium into an indexable, random-access knowledge graph. The framework serves as a reference blueprint for modern AI-augmented video discovery.",
//   learnings: [
//     "Search ranking is as much an interface challenge as an algorithm challenge: showing transcript context is what gives users the confidence to click.",
//     "Chunk boundary heuristics dramatically influence embedding quality — bad chunking ruins even state-of-the-art embedding models.",
//   ],
//   prototypeUrl: "https://github.com/KashishKataria786/AI-Tools-Full-stack-",
//   prdUrl: "https://github.com/KashishKataria786/AI-Tools-Full-stack-",
//   deckUrl: "https://github.com/KashishKataria786/AI-Tools-Full-stack-",
//   teardownUrl: "https://github.com/KashishKataria786/AI-Tools-Full-stack-",
// };

import aitools from "../../assets/projects/aitools.png";

export const youtubeSearchCaseStudy = {
  slug: "rethinking-youtube-search",
  title: "Rethinking YouTube Search",
  subtitle:
    "Using Semantic Search to Better Understand User Intent and Improve Video Discovery",
  category: "AI / Search / Consumer",
  year: "2026",
  role: "AI Product Manager", // Source frames this as a product case study; "System Architect" isn't supported and was removed
  duration: null, // Not specified in source material
  type: "AI Product Case Study & Search Architecture Proposal",
  // heroImage: aitools,

  summary: {
    problem:
      "YouTube Search performs well for exact keyword matches, but it often struggles to understand the intent behind a user's query — resulting in irrelevant results and repeated searches.",
    opportunity:
      "Introduce an AI-powered semantic search layer that understands user intent through vector embeddings generated from video transcripts, rather than relying solely on keyword matching.",
    solution:
      "A hybrid retrieval architecture where semantic search works alongside — not instead of — YouTube's existing keyword search and ranking system: user queries are embedded, matched against transcript embeddings, and the resulting Top-K candidates are ranked using YouTube's existing relevance and quality signals.",
    impact:
      "Defines a 'Successful Search Rate' North Star metric (percentage of users who find a relevant video without reformulating their query), backed by primary and guardrail metrics. No measured results are reported in the source material — this is a proposed feature/case study, not a shipped, measured product.",
  },

  context:
    "With millions of videos uploaded every day, finding content isn't YouTube's biggest challenge — finding the right content is. YouTube Search performs well for exact keyword matches, but it often struggles to understand the intent behind a user's query. Users frequently search using natural language, incomplete descriptions, or the problem they want to solve, rather than the exact keywords in a video's title or description.",

  problem: {
    statement:
      "Users spend time reformulating queries, scrolling through irrelevant results, and trying different search terms before finding the content they actually need — creating search friction, increasing time-to-discovery, and leading to frustration or search abandonment.",
    points: [
      "Search results can feel irrelevant or chaotic even for precise queries, making it hard to find the intended video.",
      "Shorts often dominate the top of results, pushing regular videos much lower.",
      "The default 'All' results tab can feel polluted by recommendations and mixed categories instead of straightforward search results.",
      "YouTube can return the same handful of videos repeatedly instead of fresh or accurate matches, and playlists may not surface in results at all.",
      "Specific videos that clearly exist on the platform can be difficult or impossible to surface through search.",
    ],
  },

  research: {
    methodology:
      "Research focused on identifying which users are most affected by poor search quality on YouTube — especially with vague, long-tail, or highly specific queries — by synthesizing search-behavior research and public discussion of YouTube search complaints (e.g. Pew Research, WebProNews, and Reddit threads) rather than a from-scratch usability study.",
    keyTakeaways: [
      "Users who enter short or imprecise queries are the most vulnerable to irrelevant results because they rely heavily on the top few results to guide them.",
      "People often use low-effort, short queries and rarely go beyond the first page, making ranking quality especially important.",
      "Public discussion of YouTube search points to complaints about unrelated videos, repeated creators, and noisy result pages that reduce trust in search.",
    ],
  },

  insights: [
    {
      title: "Keyword Matching Doesn't Fulfill Intent",
      description:
        "The biggest insight from research: keyword matching does not fulfill the user's actual intent — the gap is in understanding meaning, not in the amount of content available.",
    },
    {
      title: "It's a Relevance and Trust Problem",
      description:
        "The core issue is a mismatch between user intent and result ranking, not simply 'bad search.' This is a relevance and trust problem that hurts content discovery across multiple user segments.",
    },
    {
      title: "Different Searchers, Same Root Cause",
      description:
        "Precision searchers, exploratory searchers, task-based learners, quick scanners, and low-effort searchers are all affected differently, but all depend on the first few results to surface relevant content.",
    },
  ],

  jobsToBeDone: [
    {
      when: "I search for a video on YouTube",
      want: "the search engine to understand what I actually mean — not just the words I type",
      soThat: "I can find the most relevant content quickly without repeatedly changing my query.",
    },
  ],

  goals: [
    "Enable YouTube Search to understand user intent, not just keywords.",
    "Help users discover the most relevant videos with fewer search attempts.",
    "Keep results fast and transparent, and continue to leverage YouTube's existing ranking signals (watch time, freshness, popularity, personalization).",
  ],

  nonGoals: [
    "Replacing YouTube's existing search or recommendation/ranking system — the proposal adds a semantic retrieval layer that complements, rather than rebuilds, the current ranking algorithm.",
  ],

  productApproach:
    "Started from a hypothesis that users spend more time finding the right video than consuming the content itself. Reviewing user behavior, search patterns, and public feedback validated that the problem wasn't a lack of content but a lack of intent understanding. Of the factors influencing search quality (ranking signals, personalization, content metadata), keyword-first retrieval was identified as the primary bottleneck. Scope was deliberately limited to improving video retrieval through semantic search — not redesigning YouTube's entire search ecosystem or ranking algorithm — landing on an AI-powered semantic retrieval layer that uses vector embeddings and works alongside the existing ranking system.",

  userJourney: [
    {
      step: "01. User Query",
      action: "User enters a natural-language search query.",
    },
    {
      step: "02. Query Understanding",
      action: "The query is converted into a dense vector (semantic) representation.",
    },
    {
      step: "03. Semantic Retrieval",
      action:
        "The query vector is matched against transcript embeddings in a vector database to find contextually similar videos, and the Top-K most relevant candidates are retrieved.",
    },
    {
      step: "04. Hybrid Ranking",
      action:
        "Candidates are combined with YouTube's existing search results and ranked using established signals (watch time, CTR, freshness, engagement, personalization).",
    },
    {
      step: "05. Feedback Loop",
      action:
        "The most relevant videos are shown to the user; if they don't find a relevant result, refined queries and feedback signals feed back in to improve future retrieval and ranking.",
    },
  ],

  solution: {
    headline: "AI-Powered Semantic Retrieval Layer",
    description:
      "An AI-powered semantic retrieval layer that understands user intent using vector embeddings. Rather than replacing YouTube's existing search algorithm, semantic search works alongside it — retrieving contextually relevant videos that are then ranked using YouTube's existing relevance and quality signals.",
    features: [
      "Transcript-Based Embeddings: Semantic embeddings are generated from video transcripts (not just titles/descriptions) to capture the full context and meaning of the content.",
      "Semantic Retrieval as an Added Layer: Semantic search retrieves Top-K contextually relevant videos and passes them into YouTube's existing ranking system, rather than replacing it.",
      "Hybrid Search: Keyword matching and semantic retrieval are combined so exact matches (song names, creators, product models) stay precise while conceptual queries are also understood.",
    ],
  },

  productDecisions: [
    {
      decision: "Generate embeddings from video transcripts (not just titles/descriptions)",
      rationale:
        "Transcripts capture the complete context and meaning of a video, giving better content understanding, higher semantic relevance, more effective handling of natural-language queries, and less sensitivity to misleading or clickbait titles — at the cost of increased storage, higher preprocessing cost, dependence on transcript availability or speech-to-text generation, and longer indexing time for new uploads.",
      impact:
        "Prioritized retrieval quality over indexing speed, since semantic understanding is the core value proposition of the feature.",
    },
    {
      decision: "Use semantic search as a retrieval layer, not a ranking replacement",
      rationale:
        "Semantic search retrieves the Top-K contextually relevant videos, which are then passed to YouTube's existing ranking system. This preserves YouTube's proven ranking signals, is easier to integrate, and carries lower product risk — though some semantically relevant videos may still rank lower, since overall quality still depends on the existing ranking algorithm.",
      impact:
        "Enhanced retrieval instead of rebuilding ranking, reducing engineering complexity while improving search relevance.",
    },
    {
      decision: "Hybrid search instead of pure semantic search",
      rationale:
        "Combining keyword matching with semantic retrieval supports exact searches (song names, creators, product models) and maintains precision for navigational queries, reducing semantic retrieval errors — at the cost of a more complex ranking pipeline that has to balance keyword and semantic scores.",
      impact:
        "Keyword search excels at exact matches while semantic search understands intent; combining both gave the best overall experience.",
    },
    {
      decision: "Retrieve Top-K candidates before re-ranking",
      rationale:
        "Rather than searching every indexed video, semantic search retrieves only the Top-K most relevant candidates for ranking — giving faster response times, lower computational cost, and scalability to billions of videos, with the tradeoff that relevant videos outside the Top-K can't be recovered later.",
      impact: "Optimized for latency while maintaining high recall.",
    },
  ],

  tradeoffs: [
    {
      optionA: "Embeddings from titles/descriptions only (faster indexing)",
      optionB: "Embeddings from full video transcripts (higher quality, slower indexing)",
      chosen: "Option B",
      reasoning:
        "Prioritized retrieval quality over indexing speed because semantic understanding is the core value proposition of the feature.",
    },
    {
      optionA: "Rebuild YouTube's ranking algorithm to incorporate semantic signals directly",
      optionB:
        "Keep the ranking algorithm unchanged and add a semantic retrieval layer that feeds Top-K candidates into it",
      chosen: "Option B",
      reasoning:
        "Enhancing retrieval instead of rebuilding ranking reduced engineering complexity while still improving search relevance and preserving YouTube's proven ranking signals.",
    },
    {
      optionA: "Pure semantic (vector-only) search",
      optionB: "Hybrid search combining keyword matching with semantic retrieval",
      chosen: "Option B",
      reasoning:
        "Keyword search excels at exact matches while semantic search understands intent; combining both offered the best overall experience, at the cost of a more complex ranking pipeline.",
    },
    {
      optionA: "Search every indexed video for each query",
      optionB: "Retrieve only the Top-K most relevant candidates before ranking",
      chosen: "Option B",
      reasoning:
        "Optimized for latency, lower computational cost, and scalability to billions of videos — accepting that relevant videos outside the Top-K can't be recovered later.",
    },
  ],

  architecture: {
    overview:
      "The pipeline converts a user's query into an embedding, performs a vector similarity search against transcript embeddings stored in a vector database, retrieves the Top-K semantically relevant videos, and merges them with YouTube's existing search candidates. The combined set is ranked using established signals (watch time, CTR, freshness, engagement, personalization) before being shown to the user. If the user doesn't find a relevant result, refining their query creates a feedback loop that can further improve retrieval over time.",
    layers: [
      "Query Understanding: The user's natural-language query is converted into a dense vector representation.",
      "Semantic Retrieval: The query vector is searched against transcript embeddings within a vector database.",
      "Top-K Retrieval: The system retrieves the Top-K most similar candidate videos.",
      "Hybrid Ranking: Candidates are combined and ranked using YouTube's existing ranking system.",
      "Feedback Loop: User feedback signals are used to improve future retrieval and ranking quality.",
    ],
  },

  MVP: {
    scope:
      "Phase 1 scope: English-language content, using video transcripts as the basis for learning video context, focused on tutorials and educational content, with hybrid search.",
    timeline: null, // Not specified in source material
  },

  roadmap: [
    {
      phase: "Phase 1",
      milestone:
        "English content, transcript-based context understanding, tutorials and educational content, hybrid search.",
    },
    {
      phase: "Phase 2",
      milestone: "Multilingual content support and improved embedding algorithms.",
    },
    { phase: "Phase 3", milestone: "Voice search and query refinement." },
  ],

  metrics: [
    {
      label: "Successful Search Rate",
      value: "North Star",
      detail: "Percentage of users who find a relevant video without reformulating their query.",
    },
    {
      label: "First Search Success Rate",
      value: "Primary metric",
      detail: "Users find relevant content on the first attempt.",
    },
    {
      label: "Query Reformulation Rate",
      value: "Primary metric",
      detail: "Measures search friction.",
    },
    {
      label: "Time to First Relevant Click",
      value: "Primary metric",
      detail: "Indicates search efficiency.",
    },
    {
      label: "Watch Time from Search",
      value: "Primary metric",
      detail: "Better relevance should increase watch time.",
    },
    {
      label: "Search Latency",
      value: "Guardrail",
      detail: "Semantic search shouldn't slow down search.",
    },
    {
      label: "Click-Through Rate (CTR)",
      value: "Guardrail",
      detail: "Ensures click-through rate doesn't decrease.",
    },
    {
      label: "Infrastructure Cost",
      value: "Guardrail",
      detail: "Vector search should remain scalable.",
    },
    {
      label: "Retrieval Precision",
      value: "Guardrail",
      detail: "Avoid irrelevant semantic matches.",
    },
  ],

  impact:
    "This case study demonstrates how a semantic retrieval layer — built on transcript embeddings and combined with YouTube's existing ranking signals — can address the mismatch between user intent and keyword-based search results, without needing to replace the existing ranking system. No measured production results are reported in the source material; the metrics above are the proposed success framework.",

  learnings: [
    "Keyword search performs well for exact search but struggles with semantic understanding.",
    "Improving retrieval can deliver meaningful user value without replacing mature ranking systems.",
    "Product decisions should balance user impact, engineering complexity, and business risk.",
    "Incremental rollout and experimentation reduce uncertainty while validating impact.",
  ],

  prototypeUrl: null, // Not referenced in source material
  prdUrl: null, // Not referenced in source material
  deckUrl:
    "https://docs.google.com/presentation/d/1-lnBLICc_79eM7h1xHU_kPIvlbpw7W4a/edit?usp=sharing&ouid=114027340303708524803&rtpof=true&sd=true",
  teardownUrl: null, // Not referenced in source material
};