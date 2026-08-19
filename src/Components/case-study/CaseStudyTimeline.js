import React from "react";

function CaseStudyTimeline({ items, title, subtitle }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-6 pt-2">
      {title && (
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-soft-black">{title}</h3>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="bg-white border border-border-light rounded-sm p-5 space-y-3 relative group hover:border-accent/40 transition-colors shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-accent">
                {it.step || it.phase || `0${idx + 1}`}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-light group-hover:bg-accent transition-colors" />
            </div>

            <p className="text-sm font-medium text-soft-black leading-relaxed">
              {it.action || it.milestone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudyTimeline;
