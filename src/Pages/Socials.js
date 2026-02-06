import React from "react";
import { socialMediaUrl } from "../Details";

function Socials() {
  const { linkdein, github, leetcode, tryhackme, twitter, youtube } = socialMediaUrl;

  const socials = [
    {
      name: "LinkedIn",
      url: linkdein,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      color: "hover:text-[#0077B5]",
      bgColor: "bg-[#0077B5]/10",
    },
    {
      name: "GitHub",
      url: github,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      color: "hover:text-black",
      bgColor: "bg-black/10",
    },
    {
      name: "YouTube",
      url: youtube,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
      color: "hover:text-[#FF0000]",
      bgColor: "bg-[#FF0000]/10",
    },
    {
      name: "LeetCode",
      url: leetcode,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.32 4.32a1.09 1.09 0 0 0 0 1.54 1.09 1.09 0 0 0 1.54 0l4.289-4.289a.257.257 0 0 1 .363 0l6.747 6.747a.257.257 0 0 1 0 .363L14.448 15.8a.257.257 0 0 1-.363 0L9.24 10.954a1.39 1.39 0 0 0-1.962 0l-3.774 3.774a1.39 1.39 0 0 0 0 1.962l4.848 4.848a1.39 1.39 0 0 0 1.962 0L23.586 8.281a1.374 1.374 0 0 0 0-1.934L14.443.414A1.374 1.374 0 0 0 13.483 0zm-8.85 9.99a1.39 1.39 0 0 0-1.962 0l-2.257 2.257a1.39 1.39 0 0 0 0 1.962l4.848 4.848a1.39 1.39 0 0 0 1.962 0l2.257-2.257a1.39 1.39 0 0 0 0-1.962l-4.848-4.848z" />
        </svg>
      ),
      color: "hover:text-[#FFA116]",
      bgColor: "bg-[#FFA116]/10",
    },
    {
      name: "TryHackMe",
      url: tryhackme,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L3 5v8c0 5.52 4.48 10 9 10s9-4.48 9-10V5l-9-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1 4h2v2h-2v-2z" />
        </svg>
      ),
      color: "hover:text-[#C72121]",
      bgColor: "bg-[#C72121]/10",
    },
    {
      name: "Twitter",
      url: twitter,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ),
      color: "hover:text-[#1DA1F2]",
      bgColor: "bg-[#1DA1F2]/10",
    },
  ];

  return (
    <div className="container mx-auto max-width section">
      <div className="space-y-4 mb-20 text-center md:text-left">
        <p className="text-accent font-medium tracking-wider uppercase text-xs">Digital Presence</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-soft-black">Connect with <span className="text-accent">Me</span>.</h2>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          I'm active across various platforms, from professional networking to competitive programming and cybersecurity labs.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer noopener"
            className={`card group flex flex-col items-center justify-center space-y-3 p-4 md:p-8 transition-all hover:-translate-y-2 border-transparent hover:border-gray-200 shadow-none hover:shadow-xl bg-gray-50/50`}
          >
            <div className={`w-12 h-12 md:w-16 md:h-16 ${social.bgColor} rounded-xl md:rounded-2xl flex items-center justify-center text-muted transition-all group-hover:scale-110 group-hover:rotate-6 ${social.color}`}>
              {/* Scale icon for mobile */}
              <div className="scale-75 md:scale-100">
                {social.icon}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-sm md:text-lg font-bold text-soft-black mb-0.5 md:mb-1 group-hover:text-accent transition-colors">{social.name}</h3>
              <p className="text-[8px] md:text-[10px] text-muted font-medium uppercase tracking-[0.2em]">View Profile</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
