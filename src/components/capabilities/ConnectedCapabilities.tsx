import { useEffect, useState } from 'react';
import { SectionLabel } from '@/components/shared';
import CapabilityDetails from './CapabilityDetails';
import CapabilityNetwork from './CapabilityNetwork';
import { CAPABILITY_BRANCHES } from './capabilityData';

export default function ConnectedCapabilities() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => {
      setReduceMotion(motion.matches);
      setHoverCapable(hover.matches);
    };
    sync();
    motion.addEventListener('change', sync);
    hover.addEventListener('change', sync);
    return () => {
      motion.removeEventListener('change', sync);
      hover.removeEventListener('change', sync);
    };
  }, []);

  const branch = CAPABILITY_BRANCHES.find((item) => item.id === activeId) ?? null;

  const activate = (id: string | null) => setActiveId(id);
  const clear = () => setActiveId(null);

  return (
    <section className="section cap-section" id="connected-capabilities">
      <div className="container">
        <div className="cap-mobile-head">
          <SectionLabel>Connected capabilities</SectionLabel>
          <h2>How Digtimize connects the stack.</h2>
        </div>
        <div className="cap-layout">
          <CapabilityDetails branch={branch} showHeading />
          <CapabilityNetwork
            activeId={activeId}
            reduceMotion={reduceMotion}
            hoverCapable={hoverCapable}
            onActivate={activate}
            onClear={clear}
          />
        </div>
      </div>
    </section>
  );
}
