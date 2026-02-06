import React from "react";

function Work({ position, company, location, duration, grade }) {
  return (
    <article className="py-8 border-b border-border-light last:border-0 group">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-soft-black group-hover:text-accent transition-colors">
              {position}
            </h3>
            {grade && (
              <span className="px-2 py-0.5 bg-gray-100 text-muted text-[10px] font-bold uppercase tracking-widest rounded-sm">
                {grade}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>{company}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-medium text-soft-black/60 bg-soft-white px-3 py-1 rounded-sm border border-border-light">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {duration}
        </div>
      </div>
    </article>
  );
}

export default Work;
