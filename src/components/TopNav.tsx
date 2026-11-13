import React from 'react';
import { CTA_AFFILIATE_URL } from '../data/syllabyContent';

export const TopNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-white/10 bg-[#090A0F]/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-xl font-extrabold tracking-tight text-[#F8FAFC] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5D4] rounded"
        >
          Syllaby
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]"
        >
          <a
            href="#section_4_solution"
            className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
          >
            Platform
          </a>
          <a
            href="#section_5_how_it_works"
            className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="#section_6_deep_dive_features"
            className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
          >
            Features
          </a>
          <a
            href="#section_8_social_proof"
            className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
          >
            Examples
          </a>
          <a
            href="#section_9_faq"
            className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href={CTA_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-primary inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Try Syllaby Free
          </a>
        </div>
      </div>
    </header>
  );
};
