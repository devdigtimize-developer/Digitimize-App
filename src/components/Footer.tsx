import { Link } from 'react-router-dom';
import { Logo } from './shared';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>Web development, automation, AI, and custom digital solutions for growing businesses.</p>
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
              <Link to="/services">GoHighLevel</Link>
              <Link to="/services">WordPress</Link>
              <Link to="/services">Shopify</Link>
              <Link to="/services">AI development</Link>
              <Link to="/services">Custom coding</Link>
              <Link to="/services">Digital marketing</Link>
            </div>
            <div>
              <b>Contact</b>
              <a href="mailto:info@digtimize.com">info@digtimize.com</a>
              <span>+92 322 0739653</span>
              <span>+92 309 8180851</span>
              <span>Pakistan</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Digtimize. Built with intention.</span>
          <span>Websites · Automations · AI</span>
        </div>
      </div>
    </footer>
  );
}
