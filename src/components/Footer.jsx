import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { profile, links, services } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#home" className="logo">
              {profile.initials}
              <span className="dot">.</span>
            </a>
            <p>Crafting clean, fast and reliable web experiences for clients worldwide.</p>
          </div>

          <div className="footer-nav">
            <strong>Navigation</strong>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-nav">
            <strong>Services</strong>
            {services.map((s) => (
              <a key={s.title} href="#services">
                {s.title}
              </a>
            ))}
          </div>

          <div className="footer-social">
            <strong>Connect</strong>
            <div className="footer-social-links">
              {links.github && (
                <a href={links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
              )}
              {links.linkedin && (
                <a href={links.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              )}
              {links.instagram && (
                <a href={links.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                </a>
              )}
              {links.twitter && (
                <a href={links.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>Built with React &amp; Vite.</span>
        </div>
      </div>
    </footer>
  );
}
