import { useCallback, useEffect, useRef, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return reduced;
}

/** Lightweight step playback with pause-on-hover support. */
export function useHeroPlayback(stepCount: number, durations: number[], pauseBetween = 1400) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (paused || stepCount < 1) {
      clear();
      return;
    }
    const base = durations[step] ?? 1200;
    const ms = reduced ? Math.min(base, 700) : base;
    clear();
    timerRef.current = window.setTimeout(() => {
      if (step < stepCount - 1) {
        setStep((s) => s + 1);
      } else {
        timerRef.current = window.setTimeout(() => setStep(0), pauseBetween);
      }
    }, ms);
    return clear;
  }, [step, stepCount, paused, durations, reduced, pauseBetween, clear]);

  return { step, paused, setPaused, reduced, progress: ((step + 1) / stepCount) * 100 };
}
