import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <article className="card flex flex-col h-full group">
      <div className="relative overflow-hidden rounded-sm aspect-video mb-6">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="flex flex-col flex-grow space-y-4">
        <h3 className="text-xl font-bold text-soft-black leading-tight">
          {title}
        </h3>

        <p className="text-muted text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="pt-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techstack.split(',').map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-soft-white border border-border-light rounded-sm text-[11px] font-medium text-soft-black">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between gap-4 border-t border-border-light">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-bold text-soft-black hover:text-accent transition-colors underline decoration-2 underline-offset-4"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Preview
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-bold text-soft-black hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
