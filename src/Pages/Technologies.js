import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { technologies, tools, operatingSystems, techStackDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Technologies() {
  const SkillGrid = ({ title, items=[] }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
      const items = sectionRef.current.querySelectorAll(".skill-item");
      
      gsap.fromTo(items,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: {
            amount: 0.8,
            grid: "auto",
            from: "start"
          },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );
    }, []);

    return (
      <div ref={sectionRef} className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-soft-black">{title}</h3>
          <div className="h-1 w-12 bg-accent rounded-sm"></div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center justify-center p-4 bg-white border border-border-light rounded-sm hover:shadow-md hover:-translate-y-1 transition-all group"
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
  };

  const headerRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="container mx-auto max-width section space-y-20">
      <div ref={headerRef} className="max-w-3xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-soft-black">
          My Tech Stack
        </h2>
        <div className="h-1 w-20 bg-accent rounded-sm"></div>
        <p className="text-muted text-lg leading-relaxed pt-2">
          I leverage a diverse set of technologies, tools, and platforms to build robust and scalable applications.
        </p>
      </div>

      <div className="space-y-24">
        <SkillGrid title="Tech Stacks" items={techStackDetails} />
        <SkillGrid title="Core Technologies" items={technologies} />
        <SkillGrid title="Professional Tools" items={tools} />
        <SkillGrid title="Platforms & OS" items={operatingSystems} />
      </div>
    </div>
  );
}

export default Technologies;
