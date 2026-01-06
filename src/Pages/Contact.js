import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;

  return (
    <main className="min-h-screen flex items-center justify-center  px-6">
      <div className="max-w-3xl w-full text-center">
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Let’s Connect ✨
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Have a question or want to work together? Reach out anytime.
        </p>

        <div className="mt-10 bg-white/70 dark:bg-gray-900/60  shadow-xl border border-white/40 dark:border-gray-800 rounded-2xl p-8 md:p-12 space-y-6">
          
          <a
            href={`mailto:${email}`}
            className="block text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 hover:scale-105 transition-transform hover:underline"
          >
            {email}
          </a>

          <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide">
            or
          </div>

          <a
            href={`tel:${phone}`}
            className="block text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-400 hover:scale-105 transition-transform hover:underline"
          >
            {phone}
          </a>

        </div>
      </div>
    </main>
  );
}

export default Contact;
  