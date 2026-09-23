import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ChevronDown, Workflow, Globe, Smartphone, ShoppingBag, Store } from 'lucide-react';
import { Logo } from './shared';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Process', path: '/process' },
  { label: 'FAQ', path: '/faq' },
];

const serviceItems = [
  { label: 'Leadflow Systems', path: '/services/gohighlevel-automation', icon: <Workflow size={16} /> },
  { label: 'Web Experience Studio', path: '/services/web-development', icon: <Globe size={16} /> },
  { label: 'Mobile Product Lab', path: '/services/mobile-app-development', icon: <Smartphone size={16} /> },
  { label: 'Commerce Architecture', path: '/services/ecommerce-development', icon: <ShoppingBag size={16} /> },
  { label: 'Shopify Scale', path: '/services/shopify-development', icon: <Store size={16} /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      setServicesOpen(false);
      return;
    }

    const y = window.scrollY;
    const { style } = document.body;
    const prev = {
      overflow: style.overflow,
      position: style.position,
      top: style.top,
      width: style.width,
    };

    style.overflow = 'hidden';
    style.position = 'fixed';
    style.top = `-${y}px`;
    style.width = '100%';
    document.body.classList.add('nav-menu-open');

    return () => {
      style.overflow = prev.overflow;
      style.position = prev.position;
      style.top = prev.top;
      style.width = prev.width;
      document.body.classList.remove('nav-menu-open');
      window.scrollTo(0, y);
    };
  }, [menuOpen]);

  const solid =
    scrolled ||
    location.pathname === '/' ||
    location.pathname.startsWith('/services/') ||
    location.pathname.startsWith('/case-studies') ||
    location.pathname === '/contact' ||
    location.pathname === '/founder';

  const closeMenu = () => setMenuOpen(false);

  const mobileMenu =
    menuOpen &&
    createPortal(
      <div className="mobile-nav-root" role="dialog" aria-modal="true" aria-label="Site menu">
        <button type="button" className="mobile-nav-backdrop" aria-label="Close menu" onClick={closeMenu} />
        <div className="mobile-nav-panel">
          <div className="mobile-nav-list">
            {navItems.map((item) =>
              item.label === 'Services' ? (
                <div key={item.path} className={`mobile-nav-services${servicesOpen ? ' is-open' : ''}`}>
                  <div className="mobile-nav-services-row">
                    <Link to={item.path} className="mobile-nav-link" onClick={closeMenu}>
                      Services
                    </Link>
                    <button
                      type="button"
                      className="mobile-nav-services-toggle"
                      aria-expanded={servicesOpen}
                      aria-label={servicesOpen ? 'Hide services' : 'Show services'}
                      onClick={() => setServicesOpen((open) => !open)}
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                  {servicesOpen ? (
                    <div className="mobile-nav-services-list">
                      {serviceItems.map((service) => (
                        <Link key={service.path} to={service.path} className="mobile-nav-service-link" onClick={closeMenu}>
                          <span className="mobile-nav-service-icon">{service.icon}</span>
                          <span>{service.label}</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link${location.pathname === item.path ? ' is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <Link className="mobile-nav-cta" to="/contact" onClick={closeMenu}>
            Get a free quote <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <nav className={`nav ${solid ? 'nav-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
        <div className="container nav-inner">
          <Logo />
          <div className="nav-links">
            {navItems.map((item) =>
              item.label === 'Services' ? (
                <div className="nav-services-menu group" key={item.path}>
                  <div className="nav-services-row">
                    <Link
                      to={item.path}
                      className={`nav-services-link ${location.pathname.startsWith('/services') ? 'nav-active' : ''}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="nav-services-chevron" />
                    </Link>
                  </div>
                  <div className="services-dropdown">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={location.pathname === service.path ? 'dropdown-active' : ''}
                      >
                        <div className="flex items-center gap-3">
                          <span className="service-drop-icon">{service.icon}</span>
                          <span>{service.label}</span>
                        </div>
                        <ArrowUpRight size={15} />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={location.pathname === item.path ? 'nav-active' : ''}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <Link className="nav-cta desktop-cta" to="/contact">
            Get a free quote <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {mobileMenu}
    </>
  );
}
