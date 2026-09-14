import { useState, useEffect, useRef } from 'react';

const statsData = [
  { value: 6, suffix: '', label: 'Core capabilities', comma: false },
  { value: 3, suffix: '', label: 'Markets served', comma: false },
  { value: 4, suffix: '', label: 'Step delivery process', comma: false },
  { value: 100, suffix: '%', label: 'Fixed scope before build', comma: false },
];

type CounterItemProps = {
  target: number;
  suffix: string;
  label: string;
  comma: boolean;
};

function CounterItem({ target, suffix, label, comma }: CounterItemProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1600;
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const incrementValue = target / steps;

    const timer = setInterval(() => {
      start += incrementValue;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  const formattedCount = comma ? count.toLocaleString() : count;

  return (
    <div ref={itemRef} className="stat-card">
      <div className="stat-number">
        {formattedCount}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-box">
          {statsData.map((stat) => (
            <CounterItem
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              comma={stat.comma}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
