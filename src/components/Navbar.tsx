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
  { label: 'GoHighLevel Automation', path: '/services/gohighlevel-automation', icon: <Workflow size={16} /> },
  { label: 'Web Development', path: '/services/web-development', icon: <Globe size={16} /> },
  { label: 'Mobile App Development', path: '/services/mobile-app-development', icon: <Smartphone size={16} /> },
  { label: 'Ecommerce Development', path: '/services/ecommerce-development', icon: <ShoppingBag size={16} /> },
  { label: 'Shopify Development', path: '/services/shopify-development', icon: <Store size={16} /> },
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

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
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
                <ChevronDown size={14} className="text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-slate-950" />
              </Link>
              <div className="services-dropdown">
                {serviceItems.map((service) => (
                  <Link 
                    key={service.path} 
                    to={service.path} 
                    className={`flex items-center justify-between group/item p-2 rounded-lg hover:bg-slate-100 transition-colors ${location.pathname === service.path ? 'dropdown-active bg-slate-100' : ''}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="p-1.5 rounded-md bg-indigo-50 text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                        {service.icon}
                      </span>
                      <span className="font-medium">{service.label}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover/item:text-indigo-600 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
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
          <Link className="nav-cta mobile-cta" to="/contact">Get a free quote <ArrowUpRight size={15} /></Link>
        </div>
        <Link className="nav-cta desktop-cta" to="/contact">Get a free quote <ArrowUpRight size={15} /></Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>
  );
}