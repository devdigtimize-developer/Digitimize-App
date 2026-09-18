export default function AnimatedAboutBackground() {
  return (
    <svg className="about-flow" viewBox="0 0 1440 640" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="about-flow-stroke" x1="0" y1="40" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c4b0f4" stopOpacity="0.5" />
          <stop offset="1" stopColor="#7a5cf0" stopOpacity="0.16" />
        </linearGradient>
      </defs>
      <path className="about-flow-path" d="M -40 140 C 220 80, 380 220, 640 160 C 900 100, 1080 240, 1480 170" />
      <path className="about-flow-path about-flow-pulse" d="M -20 340 C 200 280, 420 420, 720 340 C 980 270, 1180 400, 1500 330" />
      <path className="about-flow-path" d="M 80 520 C 340 460, 500 580, 820 500 C 1080 430, 1240 560, 1520 490" />
    </svg>
  );
}
