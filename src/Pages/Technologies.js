import React from "react";
import { technologies, tools, operatingSystems } from "../Details";

function Technologies() {
  const SkillGrid = ({ title, items }) => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-soft-black">{title}</h3>
        <div className="h-1 w-12 bg-accent rounded-sm"></div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white border border-border-light rounded-sm hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <img
              src={item}
              alt="tech"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto max-width section space-y-20">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-soft-black">
          My Tech Stack
        </h2>
        <div className="h-1 w-20 bg-accent rounded-sm"></div>
        <p className="text-muted text-lg leading-relaxed pt-2">
          I leverage a diverse set of technologies, tools, and platforms to build robust and scalable applications.
        </p>
      </div>

      <div className="space-y-24">
        <SkillGrid title="Core Technologies" items={technologies} />
        <SkillGrid title="Professional Tools" items={tools} />
        <SkillGrid title="Platforms & OS" items={operatingSystems} />
      </div>
    </div>
  );
}

export default Technologies;
