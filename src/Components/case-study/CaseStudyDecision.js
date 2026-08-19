import React from "react";

function CaseStudyDecision({ decisions }) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <div className="space-y-6 pt-2">
      {decisions.map((d, idx) => (
        <div
          key={idx}
          className="bg-white border border-border-light rounded-sm p-6 sm:p-8 space-y-4 hover:border-accent/30 transition-colors shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-accent/10 text-accent rounded-sm">
              DECISION 0{idx + 1}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-soft-black">
              {d.decision}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border-light/70 text-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-label text-muted">
                Rationale & Constraint
              </span>
              <p className="text-muted leading-relaxed">{d.rationale}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-label text-accent">
                Resulting Product Impact
              </span>
              <p className="text-soft-black font-semibold leading-relaxed">
                {d.impact}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CaseStudyDecision;
