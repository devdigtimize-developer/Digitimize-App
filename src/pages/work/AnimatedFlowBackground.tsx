export default function AnimatedFlowBackground({ variant = 'light' }: { variant?: 'light' | 'soft' }) {
  const prefix = variant === 'soft' ? 'work-flow-soft' : 'work-flow';

  return (
    <svg className={`work-flow-svg is-${variant}`} viewBox="0 0 1440 720" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${prefix}-stroke`} x1="0" y1="40" x2="1440" y2="680" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c4b0f4" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#9b7ae8" stopOpacity="0.28" />
          <stop offset="1" stopColor="#7a5cf0" stopOpacity="0.16" />
        </linearGradient>
      </defs>
      <path className="work-flow-path" d="M -40 160 C 220 90, 360 240, 620 180 C 880 120, 980 280, 1280 200 C 1400 160, 1480 240, 1560 210" />
      <path className="work-flow-path work-flow-pulse" d="M -20 360 C 180 300, 340 440, 640 380 C 920 320, 1080 460, 1480 390" />
      <path className="work-flow-path" d="M 80 560 C 300 500, 420 640, 720 560 C 980 490, 1140 640, 1500 560" />
      <path className="work-flow-path work-flow-pulse is-slow" d="M 200 80 C 380 160, 520 40, 780 120 C 1020 190, 1180 60, 1460 140" />
      <circle r="2.5" className="work-flow-spark">
        <animateMotion dur="18s" repeatCount="indefinite" path="M -20 360 C 180 300, 340 440, 640 380 C 920 320, 1080 460, 1480 390" />
      </circle>
      <circle r="2" className="work-flow-spark">
        <animateMotion dur="24s" repeatCount="indefinite" path="M 200 80 C 380 160, 520 40, 780 120 C 1020 190, 1180 60, 1460 140" />
      </circle>
    </svg>
  );
}
