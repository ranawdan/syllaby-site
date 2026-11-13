import React, { useState } from 'react';
import {
  CTA_AFFILIATE_URL,
  HOW_IT_WORKS_CONTENT,
  MEDIA_ASSETS,
  SOLUTION_CONTENT,
} from '../data/syllabyContent';
import { getStepProgressPercent } from '../utils/syllabyLogic';
import { RevealSection } from './RevealSection';
import { ResilientImage } from './ResilientImage';

export const SolutionAndWorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const progressPercent = getStepProgressPercent(activeStep, HOW_IT_WORKS_CONTENT.steps.length);

  return (
    <>
      {/* Section 4: The Solution (Introducing Syllaby) */}
      <RevealSection
        id="section_4_solution"
        className="py-16 sm:py-24 bg-[#090A0F] border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs sm:text-sm font-bold tracking-wide text-[#00F5D4] mb-3">
              {SOLUTION_CONTENT.eyebrowCopy}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC] mb-6">
              {SOLUTION_CONTENT.h2Headline}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-[1.7]">
              {SOLUTION_CONTENT.leadInParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Floating UI Badges + Wide Product Reveal Showcase (YouTube Video + Image 1) */}
          <div className="relative rounded-2xl border border-white/10 bg-[#12141F] p-4 sm:p-8 mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {SOLUTION_CONTENT.floatingUiBadges.map((badge, idx) => (
                <span
                  key={badge}
                  style={{ animationDelay: `${idx * 350}ms` }}
                  className="animate-float-bob inline-flex items-center rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#F8FAFC] shadow-lg"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Responsive 16:9 YouTube Player */}
              <div className="lg:col-span-8 overflow-hidden rounded-xl border border-white/15 bg-black aspect-video">
                <iframe
                  className="h-full w-full"
                  src={MEDIA_ASSETS.youtubeEmbedUrl}
                  title="Syllaby Easy AI Video Generator Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Image 1 Dashboard Showcase Card */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-white/10 bg-[#090A0F] p-4">
                <div>
                  <div className="overflow-hidden rounded-lg border border-white/10 mb-4 aspect-[4/3] bg-[#12141F]">
                    <ResilientImage
                      src={MEDIA_ASSETS.image1Url}
                      alt="Syllaby AI video generator dashboard preview"
                      fallbackLabel="Syllaby Studio Preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#F8FAFC] mb-1.5">
                    All-in-One Creator Workspace
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Research viral keywords, generate retention scripts, assemble scenes, and publish across channels from one streamlined studio.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tabular text-[#00F5D4]">
                  <span>9:16 &amp; 16:9 Ready</span>
                  <span>Auto-Captions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTION_CONTENT.keyValuePillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-display text-lg font-bold text-[#F8FAFC] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-[1.65]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Section 5: How It Works (The 4-Step Workflow) */}
      <RevealSection
        id="section_5_how_it_works"
        className="py-16 sm:py-24 bg-[#12141F] border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {HOW_IT_WORKS_CONTENT.h2Headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Interactive 4-Step List with Connected Glowing Vertical Progress Line */}
            <div className="lg:col-span-7 relative pl-8 sm:pl-10">
              {/* Background Vertical Track */}
              <div
                aria-hidden="true"
                className="absolute left-3.5 sm:left-4 top-8 bottom-8 w-0.5 bg-white/10 overflow-hidden"
              >
                {/* Illuminated Active Progress Line */}
                <div
                  className="w-full accent-gradient-bg transition-all duration-300"
                  style={{ height: `${progressPercent}%` }}
                />
              </div>

              <div className="space-y-5">
                {HOW_IT_WORKS_CONTENT.steps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isCompleted = index <= activeStep;
                  return (
                    <div key={step.stepTitle} className="relative">
                      <span
                        aria-hidden="true"
                        className={`absolute -left-8 sm:-left-9 top-6 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold font-mono-tabular border transition-colors ${
                          isCompleted
                            ? 'bg-[#00F5D4] text-[#090A0F] border-[#00F5D4] shadow-[0_0_16px_rgba(0,245,212,0.5)]'
                            : 'bg-[#090A0F] text-[#94A3B8] border-white/20'
                        }`}
                      >
                        {index + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() => setActiveStep(index)}
                        aria-current={isActive ? 'step' : undefined}
                        className={`w-full text-left rounded-2xl border p-5 sm:p-6 transition-colors cursor-pointer ${
                          isActive
                            ? 'border-[#00F5D4]/50 bg-[#090A0F]'
                            : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'
                        }`}
                      >
                        <h3 className="font-display text-lg font-bold text-[#F8FAFC] mb-2">
                          {step.stepTitle}
                        </h3>
                        <p className="text-sm sm:text-base text-[#94A3B8] leading-[1.65]">
                          {step.stepDescription}
                        </p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Interactive Workflow Preview Panel (Image 2 featured in Step 3 + live previews) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div
                data-testid="workflow-preview-panel"
                className="rounded-2xl border border-white/10 bg-[#090A0F] p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
                  <span className="font-mono-tabular text-xs font-semibold text-[#00F5D4]">
                    Step {activeStep + 1} of 4
                  </span>
                  <span className="text-xs text-[#94A3B8]">Interactive Preview</span>
                </div>

                {activeStep === 0 && (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-xs text-[#94A3B8] mb-1">Topic Discovery Search</div>
                      <div className="font-medium text-sm text-[#F8FAFC]">
                        “desert survival plants” · 48,200 monthly searches
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-lg border border-white/10 bg-[#12141F] p-3">
                        <div className="text-[#10B981] font-bold mb-1">High Opportunity</div>
                        <div className="text-[#94A3B8]">Low competition on Shorts</div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-[#12141F] p-3">
                        <div className="text-[#A855F7] font-bold mb-1">Trending Hook</div>
                        <div className="text-[#94A3B8]">+185% 30-day velocity</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 space-y-3">
                    <div className="text-xs font-bold text-[#A855F7]">Generated Viral Script</div>
                    <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
                      “[HOOK 0:00–0:03] Most people think cactuses are just spiky desert plants—until you see how they survive years without a single drop of rain...”
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono-tabular text-[#94A3B8]">
                      <span>Tone: Curious</span>
                      <span>·</span>
                      <span>Length: 52s</span>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-xl border border-white/15 aspect-[4/3] bg-[#12141F]">
                      <ResilientImage
                        src={MEDIA_ASSETS.image2Url}
                        alt="Automated B-roll scene preview of various desert Cactaceae generated in Step 3"
                        fallbackLabel="Faceless B-Roll Scene Preview"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-center">
                        <span className="inline-block rounded-lg bg-black/75 border border-white/15 px-3 py-1.5 font-display text-xs sm:text-sm font-extrabold text-[#FACC15]">
                          HOW DESERT CACTI SURVIVE YEARS WITHOUT RAIN
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Automated scene matching + neural voiceover synced to dynamic captions.
                    </p>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-xs font-bold text-[#10B981] mb-2">
                        Auto-Publish Schedule Active
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono-tabular text-[#F8FAFC]">
                        <div className="rounded bg-[#12141F] p-2 border border-white/10">
                          TikTok · 6:00 PM
                        </div>
                        <div className="rounded bg-[#12141F] p-2 border border-white/10">
                          YT Shorts · 6:15 PM
                        </div>
                        <div className="rounded bg-[#12141F] p-2 border border-white/10">
                          Reels · 7:00 PM
                        </div>
                        <div className="rounded bg-[#12141F] p-2 border border-white/10">
                          YouTube 16:9 · Sun
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Always render Image 2 thumbnail preview cue cleanly if on another step, or keep it visible in Step 3 & below */}
                <div className="mt-5 pt-5 border-t border-white/10">
                  <a
                    href={CTA_AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button-primary w-full inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-extrabold text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {HOW_IT_WORKS_CONTENT.microCtaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
};
