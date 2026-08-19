import React from "react";

function CaseStudyTradeoff({ tradeoffs }) {
  if (!tradeoffs || tradeoffs.length === 0) return null;

  return (
    <div className="space-y-6 pt-2">
      {tradeoffs.map((t, idx) => (
        <div
          key={idx}
          className="bg-white border border-border-light rounded-sm p-6 sm:p-8 space-y-6 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-warm/50 border border-border-warm rounded-sm space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-label text-muted">
                Option A (Alternative)
              </span>
              <p className="text-sm text-muted font-medium">{t.optionA}</p>
            </div>

            <div className="p-4 bg-accent/5 border border-accent/30 rounded-sm space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-label text-accent">
                Option B (Alternative)
              </span>
              <p className="text-sm text-soft-black font-medium">{t.optionB}</p>
            </div>
          </div>

          <div className="border-t border-border-light pt-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">
                Chosen Path:
              </span>
              <span className="text-sm font-bold text-soft-black">
                {t.chosen}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed pl-2 border-l-2 border-accent">
              {t.reasoning}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CaseStudyTradeoff;
