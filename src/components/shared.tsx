import { Link } from 'react-router-dom';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Digitimize home">
      <span className="logo-mark" aria-hidden="true"><span /><i /><b /></span>
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
