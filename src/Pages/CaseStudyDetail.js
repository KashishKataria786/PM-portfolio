import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCaseStudyBySlug, getAdjacentCaseStudies } from "../data/caseStudies";

import CaseStudyHero from "../Components/case-study/CaseStudyHero";
import CaseStudyOverview from "../Components/case-study/CaseStudyOverview";
import CaseStudySection from "../Components/case-study/CaseStudySection";
import CaseStudyMetrics from "../Components/case-study/CaseStudyMetrics";
import CaseStudyDecision from "../Components/case-study/CaseStudyDecision";
import CaseStudyTradeoff from "../Components/case-study/CaseStudyTradeoff";
import CaseStudyTimeline from "../Components/case-study/CaseStudyTimeline";
import CaseStudyGallery from "../Components/case-study/CaseStudyGallery";
import CaseStudyLinks from "../Components/case-study/CaseStudyLinks";
import CaseStudyNavigation from "../Components/case-study/CaseStudyNavigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);
  const { prev, next } = getAdjacentCaseStudies(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-soft-white flex flex-col justify-between">
        <Header />
        <div className="container mx-auto max-width py-32 text-center space-y-6">
          <p className="text-4xl font-extrabold text-soft-black">
            Case Study Not Found
          </p>
          <p className="text-muted text-lg">
            The requested product case study could not be found.
          </p>
          <div>
            <Link to="/#work" className="button-primary inline-block">
              ← Return to All Work
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const {
    summary,
    context,
    problem,
    research,
    insights,
    personas,
    jobsToBeDone,
    goals,
    nonGoals,
    productApproach,
    userJourney,
    solution,
    gallery,
    productDecisions,
    tradeoffs,
    architecture,
    MVP,
    roadmap,
    metrics,
    impact,
    learnings,
    prototypeUrl,
    prdUrl,
    deckUrl,
    teardownUrl,
    additionalLinks,
  } = caseStudy;

  return (
    <div className="bg-soft-white min-h-screen text-soft-black font-primary selection:bg-accent selection:text-white">
      <Header />

      <main>
        {/* 1. Back to Work & Hero Section */}
        <CaseStudyHero caseStudy={caseStudy} />

        {/* 2. Executive Summary */}
        {summary && <CaseStudyOverview summary={summary} />}

        {/* 3. Context */}
        {context && (
          <CaseStudySection overline="Background" title="Context & Ecosystem">
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
              {context}
            </p>
          </CaseStudySection>
        )}

        {/* 4. Problem Deep Dive */}
        {problem && (
          <CaseStudySection
            overline="The Friction"
            title="Problem Breakdown"
            intro={problem.statement}
          >
            {problem.points && problem.points.length > 0 && (
              <div className="space-y-3 pt-2 max-w-3xl">
                {problem.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-border-light rounded-sm flex items-start gap-3 shadow-sm"
                  >
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <p className="text-sm text-soft-black leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            )}
          </CaseStudySection>
        )}

        {/* 5. User Research & Key Insights */}
        {(research || (insights && insights.length > 0)) && (
          <CaseStudySection
            overline="Discovery"
            title="User Research & Key Insights"
            intro={research?.methodology}
          >
            {/* Research Key Takeaways */}
            {research?.keyTakeaways && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {research.keyTakeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-warm border border-border-light rounded-sm space-y-2"
                  >
                    <span className="text-xs font-mono font-bold text-accent">
                      FINDING 0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-soft-black/90 font-medium leading-relaxed">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Highlighted Insight Statements */}
            {insights && insights.length > 0 && (
              <div className="space-y-4 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-label text-muted">
                  Core Behavioral Insights
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {insights.map((ins, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-border-light rounded-sm space-y-3 hover:border-accent/40 transition-colors shadow-sm"
                    >
                      <h4 className="text-base font-bold text-soft-black">
                        {ins.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {ins.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CaseStudySection>
        )}

        {/* 6. Personas (if provided) */}
        {personas && personas.length > 0 && (
          <CaseStudySection
            overline="Audience"
            title="Target User Personas"
            intro="Key customer archetypes evaluated during discovery and workflow mapping."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personas.map((persona, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-border-light rounded-sm space-y-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-soft-black">
                      {persona.name}
                    </h4>
                    <span className="text-xs text-muted font-medium">
                      {persona.role}
                    </span>
                  </div>
                  {persona.bio && (
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {persona.bio}
                    </p>
                  )}
                  {persona.painPoints && (
                    <div className="pt-2 border-t border-border-light/70 space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-label text-muted">
                        Primary Pain Points
                      </p>
                      <p className="text-xs text-soft-black font-medium">
                        {persona.painPoints}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CaseStudySection>
        )}

        {/* 7. Jobs To Be Done */}
        {jobsToBeDone && jobsToBeDone.length > 0 && (
          <CaseStudySection
            overline="Framework"
            title="Jobs To Be Done (JTBD)"
            intro="Framing user motivations through situational triggers, desired actions, and ultimate emotional/functional outcomes."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobsToBeDone.map((j, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-border-light rounded-sm space-y-4 shadow-sm"
                >
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-warm text-soft-black border border-border-light rounded-sm">
                    JTBD 0{idx + 1}
                  </span>
                  <div className="space-y-2.5 text-sm">
                    <p>
                      <span className="font-bold text-soft-black">When:</span>{" "}
                      <span className="text-muted">{j.when}</span>
                    </p>
                    <p>
                      <span className="font-bold text-soft-black">I Want:</span>{" "}
                      <span className="text-muted">{j.want}</span>
                    </p>
                    <p>
                      <span className="font-bold text-accent">So That:</span>{" "}
                      <span className="text-soft-black font-semibold">{j.soThat}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySection>
        )}

        {/* 8. Goals vs Non-Goals */}
        {(goals || nonGoals) && (
          <CaseStudySection
            overline="Scoping"
            title="Product Scope: Goals & Non-Goals"
            intro="Establishing explicit guardrails to avoid scope creep and preserve release velocity."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goals && (
                <div className="p-6 bg-white border border-border-light rounded-sm space-y-4 shadow-sm border-t-4 border-t-accent">
                  <h4 className="text-base font-bold text-accent uppercase tracking-wide text-xs">
                    Primary Goals
                  </h4>
                  <ul className="space-y-2.5 text-sm text-soft-black">
                    {goals.map((g, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-bold">✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {nonGoals && (
                <div className="p-6 bg-white border border-border-light rounded-sm space-y-4 shadow-sm border-t-4 border-t-slate-400">
                  <h4 className="text-base font-bold text-slate-600 uppercase tracking-wide text-xs">
                    Explicit Non-Goals
                  </h4>
                  <ul className="space-y-2.5 text-sm text-soft-black">
                    {nonGoals.map((ng, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">✕</span>
                        <span className="text-muted">{ng}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CaseStudySection>
        )}

        {/* 9. Product Strategy & User Journey */}
        {(productApproach || (userJourney && userJourney.length > 0)) && (
          <CaseStudySection
            overline="Strategy"
            title="Product Strategy & Target Journey"
            intro={productApproach}
          >
            {userJourney && (
              <CaseStudyTimeline
                title="Target User Journey Flow"
                subtitle="Mapping the friction-free end-to-end workflow from intent to fulfillment."
                items={userJourney}
              />
            )}
          </CaseStudySection>
        )}

        {/* 10. Solution Overview */}
        {solution && (
          <CaseStudySection
            overline="The Product"
            title={solution.headline || "The Solution"}
            intro={solution.description}
          >
            {solution.features && solution.features.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {solution.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-border-light rounded-sm space-y-2.5 shadow-sm"
                  >
                    <span className="text-xs font-mono font-bold text-accent">
                      FEATURE 0{idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-soft-black leading-snug">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CaseStudySection>
        )}

        {/* 11. Visual Gallery (if provided) */}
        {gallery && gallery.length > 0 && (
          <CaseStudySection
            overline="Visual Walkthrough"
            title="Product Interface & Diagrams"
          >
            <CaseStudyGallery images={gallery} />
          </CaseStudySection>
        )}

        {/* 12. Product Decisions */}
        {productDecisions && productDecisions.length > 0 && (
          <CaseStudySection
            overline="Trade-off & Execution"
            title="Key Product Decisions"
            intro="Tough architectural and UX calls made during development to balance user value and technical complexity."
          >
            <CaseStudyDecision decisions={productDecisions} />
          </CaseStudySection>
        )}

        {/* 13. Tradeoffs */}
        {tradeoffs && tradeoffs.length > 0 && (
          <CaseStudySection
            overline="Evaluation"
            title="Strategic Trade-off Analysis"
            intro="Evaluating alternative execution pathways and rationale behind the chosen solution."
          >
            <CaseStudyTradeoff tradeoffs={tradeoffs} />
          </CaseStudySection>
        )}

        {/* 14. Technical & Product Architecture */}
        {architecture && (
          <CaseStudySection
            overline="System Design"
            title="Technical & Product Architecture"
            intro={architecture.overview}
          >
            {architecture.layers && architecture.layers.length > 0 && (
              <div className="space-y-3 pt-2">
                {architecture.layers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-border-light rounded-sm flex items-start gap-3 shadow-sm"
                  >
                    <span className="text-xs font-mono font-bold text-accent mt-0.5">
                      L{idx + 1}
                    </span>
                    <p className="text-sm text-soft-black leading-relaxed font-medium">
                      {layer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CaseStudySection>
        )}

        {/* 15. MVP Scope & Roadmap */}
        {(MVP || (roadmap && roadmap.length > 0)) && (
          <CaseStudySection
            overline="Delivery"
            title="MVP Scope & Future Roadmap"
            intro={MVP?.scope ? `MVP Scope: ${MVP.scope} (${MVP.timeline || ""})` : ""}
          >
            {roadmap && (
              <CaseStudyTimeline
                title="Product Roadmap"
                subtitle="Phased feature rollout and evolution plan."
                items={roadmap}
              />
            )}
          </CaseStudySection>
        )}

        {/* 16. Success Metrics & Measured Impact */}
        {(metrics || impact) && (
          <CaseStudySection
            overline="Results"
            title="Success Metrics & Impact"
            intro={impact}
          >
            {metrics && <CaseStudyMetrics metrics={metrics} />}
          </CaseStudySection>
        )}

        {/* 17. Key Learnings */}
        {learnings && learnings.length > 0 && (
          <CaseStudySection
            overline="Retrospective"
            title="Key Learnings & Takeaways"
          >
            <div className="space-y-4 max-w-3xl">
              {learnings.map((learn, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-warm border-l-4 border-accent rounded-sm space-y-1"
                >
                  <p className="text-xs font-bold uppercase tracking-label text-muted">
                    Takeaway 0{idx + 1}
                  </p>
                  <p className="text-sm sm:text-base text-soft-black font-medium leading-relaxed">
                    "{learn}"
                  </p>
                </div>
              ))}
            </div>
          </CaseStudySection>
        )}

        {/* 18. External Artifacts & Links */}
        {(prototypeUrl || prdUrl || deckUrl || teardownUrl || additionalLinks) && (
          <CaseStudySection
            overline="Artifacts"
            title="Project Resources & External Links"
            intro="Explore the interactive live demos, product specifications, and documentation."
          >
            <CaseStudyLinks
              prototypeUrl={prototypeUrl}
              prdUrl={prdUrl}
              deckUrl={deckUrl}
              teardownUrl={teardownUrl}
              additionalLinks={additionalLinks}
            />
          </CaseStudySection>
        )}

        {/* 19. Navigation Between Case Studies */}
        <CaseStudyNavigation prev={prev} next={next} />
      </main>

      <Footer />
    </div>
  );
}

export default CaseStudyDetail;
