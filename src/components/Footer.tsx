import { Link } from 'react-router-dom';
import { Logo } from './shared';
import { CONTACT } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>Web development, automation, AI helpers, and custom digital solutions for growing businesses.</p>
          </div>
          <div className="footer-links">
            <div>
              <b>Explore</b>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/work">Work</Link>
              <Link to="/about">About</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <b>Services</b>
              <Link to="/services/gohighlevel-automation">GoHighLevel</Link>
              <Link to="/services/web-development">Web development</Link>
              <Link to="/services/shopify-development">Shopify</Link>
              <Link to="/services/mobile-app-development">Mobile apps</Link>
              <Link to="/services/custom-software">Custom software</Link>
              <Link to="/services">All services</Link>
            </div>
            <div>
              <b>Contact</b>
              {CONTACT.emails.map((email) => (
                <a key={email} href={`mailto:${email}`}>
                  {email}
                </a>
              ))}
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
              <span>{CONTACT.location}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Digtimize. Built with intention.</span>
          <span>Websites · Automation · Growth</span>
        </div>
      </div>
    </footer>
  );
}
