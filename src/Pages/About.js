import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <div className="container mx-auto max-width section space-y-24">
      {/* Introduction */}
      <section className="animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-soft-black">
            About Me
          </h2>
          <div className="h-1 w-20 bg-accent rounded-sm"></div>
          <p className="text-muted text-lg leading-relaxed pt-2">
            {personalDetails.summary}
          </p>
          <p className="text-muted text-lg leading-relaxed">
            {personalDetails.about}
          </p>
        </div>
      </section>

      {/* Experience & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Work Experience */}
        <section className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-soft-black flex items-center gap-3">
              Work Experience
            </h2>
            <div className="space-y-2">
              {workDetails.map((work, index) => (
                <Work
                  key={index}
                  position={work.Position}
                  company={work.Company}
                  location={work.Location}
                  duration={work.Duration}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="animate-in fade-in slide-in-from-right duration-1000">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-soft-black flex items-center gap-3">
              Education
            </h2>
            <div className="space-y-2">
              {eduDetails.map((edu, index) => (
                <Work
                  key={index}
                  position={edu.Position}
                  company={edu.Company}
                  location={edu.Location}
                  duration={edu.Duration}
                  grade={edu.Grade}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
