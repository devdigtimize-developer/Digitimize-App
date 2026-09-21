import { useEffect, useState } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // The home hero is a dark photo slider, so the bar cannot go transparent
  // there: the logo is an opaque JPEG and the nav links are near-black.
  const solid = scrolled || location.pathname === '/' || location.pathname.startsWith('/services/') || location.pathname.startsWith('/case-studies') || location.pathname === '/contact' || location.pathname === '/founder';

  return (
    <nav className={`nav ${solid ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {navItems.map((item) => item.label === 'Services' ? (
            <div className="nav-services-menu group" key={item.path}>
              <Link 
                to={item.path} 
                className={`flex items-center gap-1.5 group ${location.pathname.startsWith('/services') ? 'nav-active' : ''}`}
              >
                <span>{item.label}</span>
                <ChevronDown size={14} className="text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#ab8df0]" />
              </Link>
              <div className="services-dropdown">
                {serviceItems.map((service) => (
                  <Link 
                    key={service.path} 
                    to={service.path} 
                    className={location.pathname === service.path ? 'dropdown-active' : ''}
                  >
                    <div className="flex items-center gap-3">
                      <span className="service-drop-icon">
                        {service.icon}
                      </span>
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
          ))}
          <Link className="nav-cta mobile-cta" to="/contact"><span>Get a free quote</span><ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <Link className="nav-cta desktop-cta" to="/contact"><span>Get a free quote</span><ArrowUpRight size={15} aria-hidden="true" /></Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>
  );
}