import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const introRef = useRef(null);
  const workRef = useRef(null);
  const eduRef = useRef(null);

  useEffect(() => {
    // Intro animation
    gsap.fromTo(introRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
        }
      }
    );

    // Work experience slide-in from left
    gsap.fromTo(workRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 85%",
        }
      }
    );

    // Education slide-in from right
    gsap.fromTo(eduRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: eduRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <div className="container mx-auto max-width section space-y-24">
      {/* Introduction */}
      <section ref={introRef}>
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
        <section ref={workRef}>
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
        <section ref={eduRef}>
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
