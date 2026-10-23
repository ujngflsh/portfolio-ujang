import { Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';
import { about, links, profile } from '../data.js';
import { useReveal } from '../hooks.js';
import Reveal from './Reveal.jsx';
import ProfilePhoto from './ProfilePhoto.jsx';

function SkillBar({ name, level, start }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: start ? `${level}%` : 0 }} />
      </div>
    </div>
  );
}

export default function About() {
  const [ref, visible] = useReveal({ threshold: 0.3 });

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-image-col" variant="right">
            <div className="about-img-wrap">
              {about.image ? (
                <img src={about.image} alt="Working" className="about-img" />
              ) : (
                <ProfilePhoto className="about-img" />
              )}
              {about.badgeNumber && (
                <div className="about-exp-badge">
                  <strong>{about.badgeNumber}</strong>
                  <span>{about.badgeLabel}</span>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal className="about-content" variant="left">
            <div ref={ref}>
              <div className="section-tag">About Me</div>
              <h2 className="section-title">
                {about.title} <em>{about.titleEm}</em>
              </h2>
              {about.paragraphs.map((p) => (
                <p key={p} className="about-text">
                  {p}
                </p>
              ))}

              {about.skills.length > 0 && (
                <div className="skills-grid">
                  {about.skills.map((s) => (
                    <SkillBar key={s.name} {...s} start={visible} />
                  ))}
                </div>
              )}

              <div className="chips">
                {about.tools.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="about-actions">
                {profile.cvUrl && (
                  <a href={profile.cvUrl} className="btn-primary" download>
                    Download CV
                  </a>
                )}
                <a
                  href={links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Upwork Profile <ExternalLink size={14} />
                </a>
                <div className="social-links">
                  {links.github && (
                    <a href={links.github} className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                    </a>
                  )}
                  {links.linkedin && (
                    <a href={links.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {links.instagram && (
                    <a href={links.instagram} className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <Instagram size={18} />
                    </a>
                  )}
                  {links.twitter && (
                    <a href={links.twitter} className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
