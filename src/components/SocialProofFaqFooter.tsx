import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import {
  CTA_AFFILIATE_URL,
  FAQ_CONTENT,
  FINAL_CTA_CONTENT,
  MEDIA_ASSETS,
  SOCIAL_PROOF_CONTENT,
} from '../data/syllabyContent';
import { nextSlide, prevSlide, toggleFaqIndex } from '../utils/syllabyLogic';
import { RevealSection } from './RevealSection';
import { ResilientImage } from './ResilientImage';

export const SocialProofFaqFooter: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const carouselItems = SOCIAL_PROOF_CONTENT.carouselItems;
  const currentItem = carouselItems[activeSlide];

  return (
    <>
      {/* Section 8: Social Proof, Use Cases & Success Stories */}
      <RevealSection
        id="section_8_social_proof"
        className="py-16 sm:py-24 bg-[#090A0F] border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {SOCIAL_PROOF_CONTENT.h2Headline}
            </h2>
          </div>

          {/* 3 Creator Personas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {SOCIAL_PROOF_CONTENT.creatorPersonas.map((persona) => (
              <article
                key={persona.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-display text-lg font-bold text-[#F8FAFC] mb-3">
                  {persona.title}
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-[1.65]">
                  {persona.description}
                </p>
              </article>
            ))}
          </div>

          {/* Interactive Video Samples Carousel */}
          <div className="rounded-2xl border border-white/10 bg-[#12141F] p-5 sm:p-8 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                {SOCIAL_PROOF_CONTENT.carouselSubhead}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  aria-label="Previous video sample"
                  onClick={() => setActiveSlide((prev) => prevSlide(prev, carouselItems.length))}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] text-[#F8FAFC] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <span className="font-mono-tabular text-xs font-semibold text-[#94A3B8] px-2">
                  {activeSlide + 1} / {carouselItems.length}
                </span>
                <button
                  type="button"
                  aria-label="Next video sample"
                  onClick={() => setActiveSlide((prev) => nextSlide(prev, carouselItems.length))}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] text-[#F8FAFC] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Visual Preview Stage */}
              <div className="lg:col-span-5">
                <div
                  className={`relative mx-auto overflow-hidden rounded-2xl border border-white/15 bg-[#090A0F] ${
                    currentItem.format === '16:9' ? 'aspect-video w-full' : 'aspect-[4/3] w-full'
                  }`}
                >
                  <ResilientImage
                    src={activeSlide % 2 === 0 ? MEDIA_ASSETS.image2Url : MEDIA_ASSETS.image1Url}
                    alt={currentItem.text}
                    fallbackLabel={currentItem.captionHighlight}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded bg-black/75 px-2.5 py-1 font-mono-tabular text-[11px] font-semibold text-[#00F5D4] border border-white/15">
                      {currentItem.format} AI RENDER
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/20">
                      <Play className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="rounded-lg bg-black/75 border border-white/15 px-3 py-2 text-center">
                      <p className="font-display text-xs sm:text-sm font-extrabold text-[#FACC15]">
                        {currentItem.captionHighlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Selector List (all 5 verbatim items selectable) */}
              <div className="lg:col-span-7 space-y-2.5">
                {carouselItems.map((item, idx) => {
                  const isSelected = idx === activeSlide;
                  return (
                    <button
                      key={item.text}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-current={isSelected ? 'true' : undefined}
                      className={`w-full text-left rounded-xl border p-4 transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-[#00F5D4]/60 bg-[#090A0F] text-[#F8FAFC]'
                          : 'border-white/10 bg-white/[0.03] text-[#94A3B8] hover:bg-white/[0.06] hover:text-[#F8FAFC]'
                      }`}
                    >
                      <p className="text-sm sm:text-base font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3 Verified Creator Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_PROOF_CONTENT.userTestimonials.map((t) => (
              <article
                key={t.author}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#F8FAFC] mb-3 leading-snug">
                    {t.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-[1.65] mb-5">
                    {t.quote}
                  </p>
                </div>
                <p className="text-sm font-semibold text-[#00F5D4]">{t.author}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Section 9: SEO-Optimized FAQ Section */}
      <RevealSection
        id="section_9_faq"
        className="py-16 sm:py-24 bg-[#12141F] border-b border-white/10"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {FAQ_CONTENT.h2Headline}
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_CONTENT.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-[#090A0F] overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq((prev) => toggleFaqIndex(prev, idx))}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.03] transition-colors cursor-pointer"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#F8FAFC] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-5 h-5 text-[#00F5D4] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/10">
                      <p className="pt-4 text-sm sm:text-base text-[#94A3B8] leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* Section 10: Final High-Urgency Call to Action */}
      <RevealSection id="section_10_final_cta" className="relative overflow-hidden py-16 sm:py-24 bg-[#090A0F]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 accent-gradient-bg blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-white/15 bg-[#12141F]/90 p-8 sm:p-12 shadow-2xl">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC] mb-5">
              {FINAL_CTA_CONTENT.h2Headline}
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-[1.7] max-w-[65ch] mx-auto mb-8">
              {FINAL_CTA_CONTENT.subheadline}
            </p>

            <ul className="mx-auto max-w-xl space-y-3 text-left text-sm sm:text-base text-[#F8FAFC] mb-9">
              {FINAL_CTA_CONTENT.riskReversalBullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href={CTA_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-primary w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-4 text-base sm:text-lg font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {FINAL_CTA_CONTENT.finalCtaText}
            </a>
          </div>
        </div>
      </RevealSection>

      <footer className="border-t border-white/10 bg-[#090A0F] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#94A3B8]">
          <span className="font-display font-bold text-[#F8FAFC]">Syllaby</span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#section_4_solution" className="hover:text-[#F8FAFC] transition-colors">
              Platform
            </a>
            <a href="#section_5_how_it_works" className="hover:text-[#F8FAFC] transition-colors">
              How It Works
            </a>
            <a href="#section_8_social_proof" className="hover:text-[#F8FAFC] transition-colors">
              Examples
            </a>
            <a href="#section_9_faq" className="hover:text-[#F8FAFC] transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
