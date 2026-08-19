import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productTeardownsAndDecks } from "../Details";

function TeardownsAndDecks() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? productTeardownsAndDecks
      : productTeardownsAndDecks.filter(
          (item) => item.type.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="container mx-auto max-width section border-t border-border-light pt-24 pb-28">
      {/* Section Header */}
      <div className="space-y-4 mb-12 max-w-3xl">
        <p className="section-label flex items-center gap-2">
          <span className="w-6 h-px bg-accent" />
          Teardowns & Decks
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-tight">
          Product Teardowns & Strategy Decks
        </h2>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Deep-dive UX audits, growth analyses, and strategy presentations exploring product mechanics, conversion funnels, and market positioning across consumer and B2B products.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-light">
        <button
          onClick={() => setFilter("all")}
          className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
            filter === "all"
              ? "bg-soft-black text-white"
              : "bg-warm text-muted hover:text-soft-black"
          }`}
        >
          All ({productTeardownsAndDecks.length})
        </button>
        <button
          onClick={() => setFilter("teardown")}
          className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
            filter === "teardown"
              ? "bg-soft-black text-white"
              : "bg-warm text-muted hover:text-soft-black"
          }`}
        >
          Product Teardowns
        </button>
        <button
          onClick={() => setFilter("deck")}
          className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
            filter === "deck"
              ? "bg-soft-black text-white"
              : "bg-warm text-muted hover:text-soft-black"
          }`}
        >
          Strategy Decks
        </button>
      </div>

      {/* List of Teardowns and Decks */}
      <div className="space-y-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-border-light rounded-sm p-6 sm:p-8 md:p-10 space-y-6 hover:border-accent/40 transition-all duration-300 shadow-sm"
          >
            {/* Top Meta Line */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-light pb-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2.5 py-1 bg-warm border border-border-warm text-soft-black text-[11px] font-bold uppercase tracking-wider rounded-sm">
                  {item.category}
                </span>
                <span className="text-xs text-muted">·</span>
                <span className="text-xs font-semibold text-muted">{item.date}</span>
                {item.readTime && (
                  <>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-muted font-medium">{item.readTime}</span>
                  </>
                )}
              </div>

              <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 bg-accent-subtle rounded-sm">
                {item.format}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-bold text-soft-black tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-muted tracking-wide">
                {item.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {item.description}
            </p>

            {/* Key Insight Callout */}
            {item.keyInsight && (
              <div className="p-4 bg-warm border-l-4 border-accent rounded-sm space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-label text-muted">
                  Core Finding / Thesis
                </p>
                <p className="text-xs sm:text-sm text-soft-black font-semibold leading-relaxed">
                  "{item.keyInsight}"
                </p>
              </div>
            )}

            {/* Core Focus Tags */}
            {item.coreFocus && item.coreFocus.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.coreFocus.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 bg-soft-white border border-border-light text-soft-black/80 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Direct Links (Google Docs, Google Slides, PDF, Interactive Case Study) */}
            <div className="pt-4 border-t border-border-light flex flex-wrap items-center gap-3">
              {item.docLink && (
                <a
                  href={item.docLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-4 py-2 bg-soft-white border border-border-light text-xs font-bold text-soft-black rounded-sm hover:border-accent hover:text-accent transition-all inline-flex items-center gap-1.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Google Doc ↗</span>
                </a>
              )}

              {item.slidesLink && (
                <a
                  href={item.slidesLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-4 py-2 bg-soft-white border border-border-light text-xs font-bold text-soft-black rounded-sm hover:border-accent hover:text-accent transition-all inline-flex items-center gap-1.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Google Slides ↗</span>
                </a>
              )}

              {item.pdfLink && (
                <a
                  href={item.pdfLink}
                  download="teardown.pdf"
                  className="px-4 py-2 bg-soft-white border border-border-light text-xs font-bold text-soft-black rounded-sm hover:border-accent hover:text-accent transition-all inline-flex items-center gap-1.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>PDF Document ↗</span>
                </a>
              )}

              {item.internalLink && (
                <Link
                  to={item.internalLink}
                  className="ml-auto text-xs font-bold text-accent hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>View Case Study Breakdown</span>
                  <span>→</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default TeardownsAndDecks;
