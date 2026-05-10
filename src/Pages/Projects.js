import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      }
    );

    // Staggered cards animation
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <div className="container mx-auto max-width section space-y-16">
      <div ref={headerRef} className="max-w-3xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-soft-black">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-accent rounded-sm"></div>
        <p className="text-muted text-lg leading-relaxed pt-2">
          A collection of projects where I've applied my skills in full-stack development, AI integration, and user-centric design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectDetails.map((project, index) => (
          <div key={index} ref={addToCardsRef}>
            <Project
              title={project.title}
              image={project.image}
              description={project.description}
              techstack={project.techstack}
              previewLink={project.previewLink}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
