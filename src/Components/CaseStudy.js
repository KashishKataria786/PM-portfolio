import React from "react";

/**
 * CaseStudy — Editorial numbered list row
 * Used in CaseStudies.js to display PM work in a clean, outcome-first format.
 */
function CaseStudy({ id, title, company, role, timeframe, outcome, tags, link }) {
  const index = String(id).padStart(2, "0");

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group block py-8 border-b border-border-light last:border-0 transition-colors duration-200 hover:bg-warm -mx-6 px-6 rounded-sm"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        {/* Index number */}
        <span className="text-[13px] font-bold text-muted-light shrink-0 pt-0.5 font-tabular-nums w-6">
          {index}
        </span>

        {/* Main content */}
        <div className="flex-grow space-y-3">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg md:text-xl font-bold text-soft-black leading-snug group-hover:text-accent transition-colors duration-200">
              {title}
            </h3>
            {/* Arrow — shifts right on hover */}
            <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1 text-lg">
              →
            </span>
          </div>

          {/* Meta — role · year · company */}
          <p className="text-[12px] text-muted font-medium tracking-wide">
            {role}&nbsp;&nbsp;·&nbsp;&nbsp;{timeframe}&nbsp;&nbsp;·&nbsp;&nbsp;{company}
          </p>

          {/* Outcome */}
          <p className="text-sm text-muted leading-relaxed max-w-reading">
            {outcome}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-label text-muted border border-border-light px-2.5 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default CaseStudy;
