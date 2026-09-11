import { Link } from 'react-router-dom';
import logoImage from '@/assets/WhatsApp Image 2026-09-10 at 2.45.51 AM.jpeg';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Digitimize home">
      <span className="logo-image-wrap" aria-hidden="true"><img className="logo-image" src={logoImage} alt="" /></span>
      <span className="logo-word">digitimize</span>
    </Link>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>;
}

export function ScrollToTop() {
  return <ScrollToTopInner />;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopInner() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
