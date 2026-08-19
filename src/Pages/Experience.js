import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workExperience, educationDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".exp-card");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto max-width section border-t border-border-light py-24 md:py-32">
      {/* Section Header */}
      <div className="space-y-4 mb-16 max-w-2xl">
        <p className="section-label flex items-center gap-2">
          <span className="w-6 h-px bg-accent" />
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-tight">
          Product Impact & Career History
        </h2>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Framing roles as structured product impact stories: identifying core friction, taking decisive action, and driving measurable outcomes.
        </p>
      </div>

      {/* Experience Stories */}
      <div className="space-y-10">
        {workExperience.map((exp, idx) => (
          <article
            key={idx}
            className="exp-card bg-white border border-border-light rounded-sm p-6 sm:p-8 md:p-10 space-y-6 hover:border-accent/30 transition-all duration-300 shadow-sm"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-border-light pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-soft-black">
                  {exp.position}
                </h3>
                <p className="text-sm font-semibold text-muted">
                  {exp.company} <span className="text-border-light">·</span> {exp.location}
                </p>
              </div>

              <span className="self-start md:self-auto text-xs font-semibold px-3 py-1 bg-warm border border-border-warm text-soft-black rounded-sm">
                {exp.duration}
              </span>
            </div>

            {/* Problem → Action → Contribution → Outcome Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Problem */}
              <div className="space-y-1.5 p-4 bg-warm/50 border-l-2 border-muted/50 rounded-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-label text-muted">
                  Problem
                </span>
                <p className="text-sm text-soft-black/90 leading-relaxed font-normal">
                  {exp.problem}
                </p>
              </div>

              {/* Action */}
              <div className="space-y-1.5 p-4 bg-warm/50 border-l-2 border-accent rounded-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-label text-accent">
                  Action Taken
                </span>
                <p className="text-sm text-soft-black/90 leading-relaxed font-normal">
                  {exp.action}
                </p>
              </div>

              {/* Product Contribution */}
              <div className="space-y-1.5 p-4 bg-warm/50 border-l-2 border-soft-black rounded-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-label text-soft-black">
                  Product Contribution
                </span>
                <p className="text-sm text-soft-black/90 leading-relaxed font-normal">
                  {exp.productContribution}
                </p>
              </div>

              {/* Outcome */}
              <div className="space-y-1.5 p-4 bg-warm/50 border-l-2 border-emerald-600 rounded-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-label text-emerald-700">
                  Measurable Outcome
                </span>
                <p className="text-sm text-soft-black font-semibold leading-relaxed">
                  {exp.outcome}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Academic Background */}
      <div className="mt-16 pt-8 border-t border-border-light space-y-6">
        <p className="text-[11px] font-bold uppercase tracking-label text-muted">
          Academic Background
        </p>

        <div className="space-y-4">
          {educationDetails.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white border border-border-light rounded-sm"
            >
              <div>
                <p className="text-sm font-bold text-soft-black">
                  {edu.degree}
                </p>
                <p className="text-xs text-muted font-medium mt-0.5">
                  {edu.institution} {edu.location && `· ${edu.location}`}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs font-semibold text-muted bg-warm px-3 py-1 border border-border-warm rounded-sm">
                  {edu.duration} {edu.grade && `(${edu.grade})`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
