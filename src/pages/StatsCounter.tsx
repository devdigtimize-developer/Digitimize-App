import { useState, useEffect, useRef } from 'react';

const statsData = [
  { value: 5, suffix: '+', unit: 'Years', label: 'Experience & Credibility', comma: false },
  { value: 150, suffix: '+', label: 'Projects Completed', comma: false },
  { value: 100, suffix: '%', label: "Client's Satisfaction", comma: false },
  { value: 25, suffix: '+', label: 'Active Clients', comma: false },
];

type CounterItemProps = {
  target: number;
  suffix: string;
  unit?: string;
  label: string;
  comma: boolean;
};

function CounterItem({ target, suffix, unit, label, comma }: CounterItemProps) {
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
        {unit ? <span className="stat-unit"> {unit}</span> : null}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="section stats-section">
      <div className="container stats-layout">
        <div className="stats-copy">
          <h2>Partnering in your <span>automation-first</span> transformation</h2>
          <p>Automation is not another tool on the stack. It is a new way of operating. Digtimize helps businesses modernize their websites, unify lead flow, automate follow-up, and ship the systems that keep growth moving.</p>
        </div>
        <div className="stats-box">
          {statsData.map((stat) => (
            <CounterItem
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              unit={stat.unit}
              label={stat.label}
              comma={stat.comma}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
