import React, { useState } from 'react';
import { Calendar, Maximize2, Mic, Subtitles, Wand2 } from 'lucide-react';
import { COMPARISON_CONTENT, FEATURES_CONTENT } from '../data/syllabyContent';
import { AspectRatioMode, toggleAspectRatio } from '../utils/syllabyLogic';
import { RevealSection } from './RevealSection';

export const FeaturesAndComparisonSection: React.FC = () => {
  const [ratioMode, setRatioMode] = useState<AspectRatioMode>('9:16');

  return (
    <>
      {/* Section 6: Deep-Dive Features & Creator Benefits */}
      <RevealSection
        id="section_6_deep_dive_features"
        className="py-16 sm:py-24 bg-[#090A0F] border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {FEATURES_CONTENT.h2Headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {FEATURES_CONTENT.featureBlocks.map((feature, idx) => {
              const spanClass = idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2';
              return (
                <article
                  key={feature.title}
                  className={`${spanClass} flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6`}
                >
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8FAFC] mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#94A3B8] leading-[1.65] mb-6">
                      {feature.description}
                    </p>
                  </div>

                  {/* Interactive / Animated Micro-Preview inside each Bento Card */}
                  <div className="rounded-xl border border-white/10 bg-[#12141F] p-4">
                    {idx === 0 && (
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <Wand2 className="w-4 h-4 text-[#00F5D4]" aria-hidden="true" />
                          <span className="text-xs font-medium text-[#F8FAFC]">
                            Scene 01–04 Matched
                          </span>
                        </div>
                        <span className="font-mono-tabular text-xs text-[#10B981]">
                          4K B-Roll + Neural Voice
                        </span>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <Mic className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                          <span className="text-xs font-medium text-[#F8FAFC]">
                            Digital Twin Voice Sync
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[0, 1, 2, 3, 4].map((b) => (
                            <span
                              key={b}
                              style={{ animationDelay: `${b * 120}ms` }}
                              className="w-1 h-3.5 rounded-full bg-[#A855F7] animate-wave-bar"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Subtitles className="w-4 h-4 text-[#00F5D4]" aria-hidden="true" />
                          <span className="text-xs font-bold text-[#FACC15]">
                            STOP SCROLLING
                          </span>
                        </div>
                        <span className="text-xs text-[#94A3B8]">Word-by-word sync</span>
                      </div>
                    )}

                    {idx === 3 && (
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-4 h-4 text-[#00F5D4]" aria-hidden="true" />
                          <span
                            data-testid="aspect-ratio-readout"
                            className="font-mono-tabular text-xs font-semibold text-[#F8FAFC]"
                          >
                            Active Frame: {ratioMode}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setRatioMode((prev) => toggleAspectRatio(prev))}
                          className="rounded-lg border border-white/15 bg-white/[0.06] px-2.5 py-1 text-xs font-semibold text-[#00F5D4] hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          Switch to {ratioMode === '9:16' ? '16:9' : '9:16'}
                        </button>
                      </div>
                    )}

                    {idx === 4 && (
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
                          <span className="text-xs font-medium text-[#F8FAFC]">
                            30-Day Queue Scheduled
                          </span>
                        </div>
                        <span className="font-mono-tabular text-xs text-[#10B981]">
                          Auto-Post On
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* Section 7: "The Old Way vs. The Syllaby Way" Comparison */}
      <RevealSection
        id="section_7_comparison_table"
        className="py-16 sm:py-24 bg-[#12141F] border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {COMPARISON_CONTENT.h2Headline}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#090A0F]">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 sm:p-6 font-display text-sm sm:text-base font-bold text-[#F8FAFC] w-1/4">
                    {COMPARISON_CONTENT.tableHeaders[0]}
                  </th>
                  <th className="p-4 sm:p-6 font-display text-sm sm:text-base font-bold text-[#94A3B8] w-[37.5%] bg-white/[0.02]">
                    {COMPARISON_CONTENT.tableHeaders[1]}
                  </th>
                  <th className="p-4 sm:p-6 font-display text-sm sm:text-base font-bold text-[#10B981] w-[37.5%] bg-[#10B981]/[0.07] border-l border-[#10B981]/30">
                    {COMPARISON_CONTENT.tableHeaders[2]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm sm:text-base">
                {COMPARISON_CONTENT.tableRows.map((row) => (
                  <tr key={row.productionStage} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-[#F8FAFC]">
                      {row.productionStage}
                    </td>
                    <td className="p-4 sm:p-6 text-[#94A3B8] bg-white/[0.01]">
                      <span className="inline-flex items-start gap-2">
                        <span aria-hidden="true" className="text-[#EF4444] font-bold">
                          ❌
                        </span>
                        <span>{row.oldWay}</span>
                      </span>
                    </td>
                    <td className="p-4 sm:p-6 text-[#F8FAFC] font-medium bg-[#10B981]/[0.05] border-l border-[#10B981]/30">
                      <span className="inline-flex items-start gap-2">
                        <span aria-hidden="true" className="text-[#10B981] font-bold">
                          ✅
                        </span>
                        <span>{row.syllabyWay}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </RevealSection>
    </>
  );
};
