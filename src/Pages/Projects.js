import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <div className="container mx-auto max-width section space-y-16">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-soft-black">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-accent rounded-sm"></div>
        <p className="text-muted text-lg leading-relaxed pt-2">
          A collection of projects where I've applied my skills in full-stack development, AI integration, and user-centric design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-1000">
        {projectDetails.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            techstack={project.techstack}
            previewLink={project.previewLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
