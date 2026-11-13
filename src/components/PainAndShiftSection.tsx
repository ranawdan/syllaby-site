import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Clock, Zap } from 'lucide-react';
import { PAIN_POINTS_CONTENT, PARADIGM_SHIFT_CONTENT } from '../data/syllabyContent';
import { RevealSection } from './RevealSection';

export const PainAndShiftSection: React.FC = () => {
  const [animateBars, setAnimateBars] = useState(false);
  const barsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setAnimateBars(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setAnimateBars(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Section 2: The Agitation & Pain Points */}
      <RevealSection
        id="section_2_pain_points"
        className="py-16 sm:py-24 bg-[#090A0F] border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC] mb-6">
              {PAIN_POINTS_CONTENT.h2Headline}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-[1.7]">
              {PAIN_POINTS_CONTENT.leadInParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 mb-12">
            {PAIN_POINTS_CONTENT.creatorRoadblocks.map((item, idx) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#EF4444]/40 ${
                  idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-bold text-[#F8FAFC] leading-snug">
                    {item.title}
                  </h3>
                  <AlertTriangle
                    className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-[1.65]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#12141F] p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg font-medium text-[#F8FAFC] leading-[1.7]">
              {PAIN_POINTS_CONTENT.transitionBridge}
            </p>
          </div>
        </div>
      </RevealSection>

      {/* Section 3: The Paradigm Shift & FOMO */}
      <RevealSection
        id="section_3_paradigm_shift_fomo"
        className="py-16 sm:py-24 bg-[#12141F] border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC] mb-6">
              {PARADIGM_SHIFT_CONTENT.h2Headline}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-[1.7]">
              {PARADIGM_SHIFT_CONTENT.leadInParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Animated Progress Bar Comparison */}
          <div
            ref={barsRef}
            className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#090A0F] p-6 sm:p-8 mb-12"
          >
            <div className="space-y-6">
              {/* Traditional Bar */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#94A3B8]">
                    <Clock className="w-4 h-4 text-[#EF4444]" aria-hidden="true" />
                    {PARADIGM_SHIFT_CONTENT.visualTimelineComparison.traditional}
                  </span>
                  <span className="font-mono-tabular text-xs sm:text-sm font-semibold text-[#EF4444]">
                    480 min / 1 video
                  </span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-white/[0.06] border border-white/10">
                  <div
                    className="h-full rounded-full bg-[#EF4444]/80 transition-transform duration-700 ease-out origin-left"
                    style={{ transform: animateBars ? 'scaleX(0.95)' : 'scaleX(0.08)' }}
                  />
                </div>
              </div>

              {/* Syllaby Bar */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#F8FAFC]">
                    <Zap className="w-4 h-4 text-[#00F5D4]" aria-hidden="true" />
                    {PARADIGM_SHIFT_CONTENT.visualTimelineComparison.syllaby}
                  </span>
                  <span className="font-mono-tabular text-xs sm:text-sm font-semibold text-[#10B981]">
                    20 min / 7 videos
                  </span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-white/[0.06] border border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00F5D4] to-[#10B981] transition-transform duration-700 ease-out origin-left"
                    style={{ transform: animateBars ? 'scaleX(0.18)' : 'scaleX(0.04)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3 FOMO Callout Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARADIGM_SHIFT_CONTENT.fomoCalloutBoxes.map((box) => (
              <article
                key={box.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-display text-lg font-bold text-[#F8FAFC] mb-3">
                  {box.title}
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-[1.65]">
                  {box.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
};
