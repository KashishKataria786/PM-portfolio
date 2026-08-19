import React from "react";

function CaseStudyMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="bg-white border border-border-light rounded-sm p-6 sm:p-7 space-y-2 shadow-sm hover:border-accent/30 transition-colors"
        >
          <p className="text-xl sm:text-4xl font-extrabold text-accent font-mono tracking-tight">
            {m.value}
          </p>
          <p className="text-xs font-bold text-soft-black uppercase tracking-label">
            {m.label}
          </p>
          {m.detail && (
            <p className="text-xs text-muted leading-relaxed">
              {m.detail}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CaseStudyMetrics;
