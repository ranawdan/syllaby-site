import React, { useEffect, useState } from 'react';
import { Sparkles, Play, Volume2, RotateCcw } from 'lucide-react';
import { CTA_AFFILIATE_URL, HERO_CONTENT } from '../data/syllabyContent';
import { getHeroDemoPhase } from '../utils/syllabyLogic';

const SPACE_CAPTIONS = [
  'FACT #1: ONE DAY ON VENUS IS LONGER THAN ITS YEAR',
  'FACT #2: NEUTRON STARS SPIN 600 TIMES PER SECOND',
  'FACT #3: SPACE IS COMPLETELY SILENT WITHOUT AIR',
];

export const HeroSection: React.FC = () => {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isLooping, setIsLooping] = useState(true);

  useEffect(() => {
    if (!isLooping) return;
    const interval = window.setInterval(() => {
      setElapsedMs((prev) => (prev + 120) % 9500);
    }, 120);
    return () => window.clearInterval(interval);
  }, [isLooping]);

  const { typedLength, phase } = getHeroDemoPhase(elapsedMs);
  const fullPrompt = HERO_CONTENT.visualDemo.promptText;
  const visiblePrompt = fullPrompt.slice(0, typedLength);
  const captionIndex = Math.floor((elapsedMs / 2000) % SPACE_CAPTIONS.length);

  const handleGenerateClick = () => {
    setElapsedMs(3400);
    setIsLooping(true);
  };

  const handleReplayClick = () => {
    setElapsedMs(0);
    setIsLooping(true);
  };

  return (
    <section
      id="section_1_hero"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-white/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[44rem] rounded-full opacity-20 blur-3xl accent-gradient-bg"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 60% (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="text-sm sm:text-base font-medium text-[#00F5D4] mb-4 leading-relaxed">
              {HERO_CONTENT.eyebrowCopy}
            </p>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12] mb-5">
              {HERO_CONTENT.h1Headline}
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-[1.7] max-w-[65ch] mb-8">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="w-full sm:w-auto flex flex-col items-start gap-3 mb-8">
              <a
                href={CTA_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-primary w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm sm:text-base font-extrabold tracking-tight text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {HERO_CONTENT.primaryCtaText}
              </a>
              <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">
                {HERO_CONTENT.microCopyUnderneath}
              </p>
            </div>

            <div className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs sm:text-[13px] text-[#F8FAFC]/90 leading-relaxed">
              {HERO_CONTENT.trustBar}
            </div>
          </div>

          {/* Right Column: 40% (5 cols) Interactive Split-Screen Demo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#12141F] p-4 sm:p-5 shadow-2xl">
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
                <span className="text-xs font-medium text-[#94A3B8]">
                  {HERO_CONTENT.visualDemo.uiMotionDirection}
                </span>
                <button
                  type="button"
                  onClick={handleReplayClick}
                  aria-label="Replay split-screen demo"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[#F8FAFC] hover:bg-white/10 transition-colors shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  Replay
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                {/* Split Left: Your Input */}
                <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#090A0F] p-3.5">
                  <div>
                    <div className="text-xs font-bold text-[#00F5D4] mb-1.5">
                      {HERO_CONTENT.visualDemo.leftSideLabel}
                    </div>
                    <div className="rounded-lg border border-white/15 bg-white/[0.04] p-3 mb-3 min-h-[76px]">
                      <div className="text-[11px] text-[#94A3B8] mb-1">Video Topic Prompt</div>
                      <p
                        data-testid="hero-typing-prompt"
                        className="font-mono-tabular text-xs sm:text-sm text-[#F8FAFC] leading-snug"
                      >
                        {visiblePrompt}
                        <span className="inline-block w-0.5 h-4 bg-[#00F5D4] ml-0.5 align-middle animate-pulse" />
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleGenerateClick}
                      className={`w-full inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        phase === 'generating'
                          ? 'accent-gradient-bg text-white scale-[0.98]'
                          : 'bg-[#00F5D4] text-[#090A0F] hover:bg-[#00BBF9]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      {phase === 'generating' ? 'Rendering Scene...' : 'Generate Video'}
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] leading-relaxed text-[#94A3B8]">
                    {HERO_CONTENT.visualDemo.leftSideDescription}
                  </p>
                </div>

                {/* Split Right: Syllaby's Output */}
                <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#090A0F] p-3.5">
                  <div>
                    <div className="text-xs font-bold text-[#A855F7] mb-1.5">
                      {HERO_CONTENT.visualDemo.rightSideLabel}
                    </div>
                    {/* 9:16 Vertical Preview */}
                    <div
                      data-testid="hero-output-preview"
                      className="relative aspect-[9/14] w-full overflow-hidden rounded-xl border border-white/15 bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#090A0F]"
                    >
                      {/* Animated Space Visual Layers */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(99,102,241,0.45),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(236,72,153,0.35),transparent_50%)]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute top-6 right-5 h-14 w-14 rounded-full bg-gradient-to-br from-[#6366F1] via-[#A855F7] to-[#EC4899] opacity-80 blur-[1px] animate-float-bob"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Top Hook Tag */}
                      <div className="relative z-10 flex items-center justify-between px-2.5 pt-2.5">
                        <span className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-[#00F5D4] font-mono-tabular">
                          9:16 SHORT
                        </span>
                        <Volume2 className="w-3.5 h-3.5 text-white/80" aria-hidden="true" />
                      </div>

                      {/* Center Play State or Captions */}
                      <div className="relative z-10 flex h-[calc(100%-30px)] flex-col justify-end p-3">
                        {phase !== 'output' ? (
                          <div className="my-auto flex flex-col items-center text-center">
                            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20">
                              <Play className="w-4 h-4 text-[#00F5D4]" aria-hidden="true" />
                            </div>
                            <span className="text-[11px] font-medium text-[#F8FAFC]">
                              {phase === 'generating'
                                ? 'Building B-Roll & Voiceover...'
                                : 'Waiting for prompt...'}
                            </span>
                          </div>
                        ) : (
                          <div className="space-y-2.5">
                            <div className="rounded-lg bg-black/70 px-2.5 py-2 border border-white/10 text-center">
                              <p className="font-display text-xs font-extrabold tracking-tight text-[#FACC15] leading-snug">
                                {SPACE_CAPTIONS[captionIndex]}
                              </p>
                            </div>
                            {/* AI Voiceover Waveform */}
                            <div
                              aria-label="AI voiceover waveform"
                              className="flex h-5 items-center justify-center gap-1"
                            >
                              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
                                <span
                                  key={bar}
                                  style={{ animationDelay: `${bar * 90}ms` }}
                                  className="w-1 h-4 rounded-full bg-[#00F5D4] animate-wave-bar"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] leading-relaxed text-[#94A3B8]">
                    {HERO_CONTENT.visualDemo.rightSideDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
