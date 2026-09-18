import { Link } from 'react-router-dom';
import navLogo from '@/assets/Logo2.png';
import footerLogo from '@/assets/Logo2-light.png';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Digtimize home">
      <span className="logo-image-wrap">
        <img className="logo-image" src={light ? footerLogo : navLogo} alt="Digtimize" />
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

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopInner() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
