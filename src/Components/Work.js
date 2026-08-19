import React from "react";

function Work({ position, company, location, duration, impact, grade }) {
  return (
    <article className="py-7 border-b border-border-light last:border-0 group">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
        {/* Left — role details */}
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-soft-black leading-snug group-hover:text-accent transition-colors duration-200">
            {position}
          </h3>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="font-medium">{company}</span>
            {location && (
              <>
                <span className="text-border-light select-none">·</span>
                <span>{location}</span>
              </>
            )}
            {grade && (
              <>
                <span className="text-border-light select-none">·</span>
                <span className="font-semibold text-soft-black">{grade}</span>
              </>
            )}
          </div>

          {/* Impact statement */}
          {impact && (
            <p className="text-sm text-muted leading-relaxed pt-1 max-w-reading">
              {impact}
            </p>
          )}
        </div>

        {/* Right — duration badge */}
        <span className="shrink-0 text-[11px] font-medium text-muted bg-warm px-3 py-1 rounded-sm border border-border-warm whitespace-nowrap self-start">
          {duration}
        </span>
      </div>
    </article>
  );
}

export default Work;
