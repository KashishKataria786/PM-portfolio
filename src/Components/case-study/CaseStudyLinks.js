import React from "react";

function CaseStudyLinks({ prototypeUrl, prdUrl, deckUrl, teardownUrl, additionalLinks }) {
  const links = [
    prototypeUrl && { label: "Interactive Prototype", url: prototypeUrl, tag: "Live Demo" },
    prdUrl && { label: "Product Spec & PRD", url: prdUrl, tag: "Documentation" },
    deckUrl && { label: "Product Strategy Deck", url: deckUrl, tag: "Presentation" },
    teardownUrl && { label: "Full Audit & Teardown", url: teardownUrl, tag: "Research" },
    ...(additionalLinks || []),
  ].filter(Boolean);

  if (links.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
      {links.map((lnk, idx) => (
        <a
          key={idx}
          href={lnk.url}
          target="_blank"
          rel="noreferrer noopener"
          className="p-5 bg-white border border-border-light rounded-sm hover:border-accent/40 transition-all duration-200 group shadow-sm flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-label text-accent">
              {lnk.tag || "External Link"}
            </span>
            <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all">
              ↗
            </span>
          </div>
          <p className="text-sm font-bold text-soft-black group-hover:text-accent transition-colors">
            {lnk.label}
          </p>
        </a>
      ))}
    </div>
  );
}

export default CaseStudyLinks;
