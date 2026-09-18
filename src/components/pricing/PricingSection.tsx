import { useEffect, useRef, useState } from 'react';
import PricingCard from './PricingCard';
import PricingCTA from './PricingCTA';
import PricingHeader from './PricingHeader';
import { PRICING_PACKAGES } from './packages';

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section engage-section${inView ? ' is-inview' : ''}`}
      id="pricing"
    >
      <div className="container">
        <PricingHeader />
        <div className="engage-grid">
          {PRICING_PACKAGES.map((item, index) => (
            <PricingCard key={item.id} item={item} index={index} />
          ))}
        </div>
        <PricingCTA />
      </div>
    </section>
  );
}
