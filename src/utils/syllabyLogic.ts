export type AspectRatioMode = '9:16' | '16:9';

export function nextSlide(currentIndex: number, totalItems: number): number {
  if (totalItems <= 0) return 0;
  return (currentIndex + 1) % totalItems;
}

export function prevSlide(currentIndex: number, totalItems: number): number {
  if (totalItems <= 0) return 0;
  return (currentIndex - 1 + totalItems) % totalItems;
}

export function toggleFaqIndex(activeIndex: number | null, clickedIndex: number): number | null {
  return activeIndex === clickedIndex ? null : clickedIndex;
}

export function getStepProgressPercent(activeStep: number, totalSteps: number): number {
  if (totalSteps <= 1) return 100;
  const clamped = Math.max(0, Math.min(activeStep, totalSteps - 1));
  return Math.round((clamped / (totalSteps - 1)) * 100);
}

export function toggleAspectRatio(current: AspectRatioMode): AspectRatioMode {
  return current === '9:16' ? '16:9' : '9:16';
}

export function getHeroDemoPhase(elapsedMs: number): {
  typedLength: number;
  phase: 'typing' | 'generating' | 'output';
} {
  const loopMs = elapsedMs % 9500;
  if (loopMs < 2400) {
    return {
      typedLength: Math.min(31, Math.floor((loopMs / 2400) * 31) + 1),
      phase: 'typing',
    };
  }
  if (loopMs < 3200) {
    return {
      typedLength: 31,
      phase: 'generating',
    };
  }
  return {
    typedLength: 31,
    phase: 'output',
  };
}
