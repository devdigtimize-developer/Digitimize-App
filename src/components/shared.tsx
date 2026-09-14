import { Link } from 'react-router-dom';
import logoImage from '@/assets/Digtimizelogo.jpeg';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Digtimize home">
      <span className="logo-image-wrap">
        <img className="logo-image" src={logoImage} alt="Digtimize" />
      </span>
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
