import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { value: 3000, suffix: '+', label: 'Successful Projects', comma: true },
  { value: 1200, suffix: '+', label: 'Global Experts', comma: true },
  { value: 15, suffix: '+', label: 'Years of Excellence', comma: false },
  { value: 250, suffix: '+', label: 'Happy Clients', comma: false },
  { value: 23, suffix: '+', label: 'Countries', comma: false },
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
  const itemRef = useRef(null);

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
    const duration = 2000; // Animation duration in milliseconds (2 seconds)
    const incrementTime = 30; // Update interval
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

  const formattedCount = comma 
    ? count.toLocaleString() 
    : count;

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
          {statsData.map((stat, index) => (
            <CounterItem 
              key={index} 
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