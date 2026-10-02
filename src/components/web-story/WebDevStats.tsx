import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 5, suffix: '+', unit: 'Years', label: 'Experience & Credibility' },
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: "Client's Satisfaction" },
  { value: 25, suffix: '+', label: 'Active Clients' },
];

function Stat({ value, suffix, unit, label }: { value: number; suffix: string; unit?: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }

    let current = 0;
    const duration = 1100;
    const stepMs = 24;
    const steps = duration / stepMs;
    const increment = value / steps;
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepMs);

    return () => window.clearInterval(timer);
  }, [started, value]);

  return (
    <div className="webdev-stat" ref={ref}>
      <strong>
        {count}
        {suffix}
        {unit ? <span className="webdev-stat-unit"> {unit}</span> : null}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function WebDevStats() {
  return (
    <section className="webdev-stats-wrap" aria-label="Digtimize delivery figures">
      <div className="container">
        <div className="webdev-stats">
          <div className="webdev-stats-row">
            {stats.map((item) => (
              <Stat key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
