import { useState } from 'react';
import { Check, Github } from 'lucide-react';
import { profile, links, stats } from '../data.js';
import { useReveal, useCountUp } from '../hooks.js';
import ProfilePhoto from './ProfilePhoto.jsx';
import Reveal from './Reveal.jsx';

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="stat">
      <span className="stat-num">{n}</span>
      <span className="stat-unit">{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}



/* ---------- Jendela VS Code (gaya macOS) ---------- */
const codeLines = [
  [['c', '// portfolio.jsx']],
  [['k', 'const'], ['v', ' developer'], ['p', ' = {']],
  [['i', '  name'], ['p', ': '], ['s', `'${profile.name ?? 'Your Name'}'`], ['p', ',']],
  [['i', '  role'], ['p', ': '], ['s', "'Web Developer'"], ['p', ',']],
  [['i', '  stack'], ['p', ': ['], ['s', "'React'"], ['p', ', '], ['s', "'Vite'"], ['p', ', '], ['s', "'Tailwind'"], ['p', '],']],
  [['i', '  available'], ['p', ': '], ['k', 'true'], ['p', ',']],
  [['p', '};']],
  [],
  [['k', 'export default'], ['v', ' developer'], ['p', ';']],
];

function VSCodeWindow() {
  return (
    <div className="vscode-window" aria-hidden="true">
      <div className="vscode-titlebar">
        <span className="mac-dot mac-red" />
        <span className="mac-dot mac-yellow" />
        <span className="mac-dot mac-green" />
        <span className="vscode-title">portfolio.jsx — Visual Studio Code</span>
      </div>
      <div className="vscode-tabs">
        <span className="vscode-tab active">portfolio.jsx</span>
        <span className="vscode-tab">App.jsx</span>
      </div>
      <div className="vscode-body">
        {codeLines.map((line, i) => (
          <div className="code-line" key={i}>
            <span className="code-num">{i + 1}</span>
            <span className="code-text">
              {line.map(([cls, text], j) => (
                <span className={`tk-${cls}`} key={j}>
                  {text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Ikon bahasa pemrograman & framework ---------- */
function TechIcons() {
  return (
    <ul className="hero-tech" aria-label="Teknologi yang saya gunakan">
      <li title="HTML5">
        <svg viewBox="0 0 32 32" role="img" aria-label="HTML5">
          <path fill="#e44d26" d="M5 3l2 22.5L16 29l9-3.5L27 3z" />
          <path fill="#f16529" d="M16 5.5v21.9l7.3-2.7L25 5.5z" />
          <path fill="#fff" d="M10 10h12l-.3 3h-8.5l.3 3h7.9l-.6 6.5-4.8 1.6-4.8-1.6-.3-3.5h3l.2 1.7 1.9.6 1.9-.6.2-2.7H10z" />
        </svg>
      </li>
      <li title="CSS3">
        <svg viewBox="0 0 32 32" role="img" aria-label="CSS3">
          <path fill="#1572b6" d="M5 3l2 22.5L16 29l9-3.5L27 3z" />
          <path fill="#33a9dc" d="M16 5.5v21.9l7.3-2.7L25 5.5z" />
          <path fill="#fff" d="M10 10h12l-.3 3h-8.2l.3 3h7.6l-.6 6.5-4.8 1.6-4.8-1.6-.3-3.5h3l.2 1.7 1.9.6 1.9-.6.2-2.7H10z" />
        </svg>
      </li>
      <li title="JavaScript">
        <svg viewBox="0 0 32 32" role="img" aria-label="JavaScript">
          <rect width="32" height="32" rx="3" fill="#f7df1e" />
          <text x="17" y="28" textAnchor="middle" fontSize="15" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">
            JS
          </text>
        </svg>
      </li>
      <li title="React">
        <svg viewBox="-12 -12 24 24" role="img" aria-label="React">
          <g fill="none" stroke="#61dafb" strokeWidth="1.1">
            <ellipse rx="10" ry="4" />
            <ellipse rx="10" ry="4" transform="rotate(60)" />
            <ellipse rx="10" ry="4" transform="rotate(120)" />
          </g>
          <circle r="1.8" fill="#61dafb" />
        </svg>
      </li>
      <li title="Tailwind CSS">
        <svg viewBox="0 0 24 24" role="img" aria-label="Tailwind CSS">
          <path
            fill="#38bdf8"
            d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.7 10.6 15 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z"
          />
        </svg>
      </li>
      <li title="GitHub">
        <Github size={26} color="#fff" aria-label="GitHub" />
      </li>
    </ul>
  );
}

function DevIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M10 8L7.5 10.5 10 13M14 8l2.5 2.5L14 13" />
    </svg>
  );
}

/* ---------- Hero Utama ---------- */
export default function Hero() {
  const [statsRef, statsVisible] = useReveal({ threshold: 0.5 });

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        {profile.available && (
          <Reveal className="hero-tag">{profile.availableText}</Reveal>
        )}
        
        {/* 1. JUDUL BESAR */}
        <Reveal as="h1" className="hero-title" delay={100}>
          {profile.headline}
        </Reveal>

        {/* 2. TEKS KECIL (SUBHEADLINE) */}
        <Reveal as="h2" className="hero-subline" delay={200}>
          {profile.subheadline}
        </Reveal>

        {/* 3. TEKS BAWAH + IKON */}
        <Reveal className="hero-intro" delay={300}>
          <span className="hero-intro-icon">
            <DevIcon />
          </span>
          <p className="hero-subtitle">{profile.subtitle}</p>
        </Reveal>

        {/* TOMBOL CTA */}
        <Reveal className="hero-cta" delay={400}>
          <a
            href={links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Hire Me on Upwork
          </a>
          <a href="#work" className="btn-ghost">
            View My Work
          </a>
        </Reveal>

        {stats.length > 0 && (
          <div ref={statsRef}>
            <Reveal className="hero-stats" delay={500}>
              {stats.map((s, i) => (
                <div key={s.label} className="stat-wrap">
                  {i > 0 && <div className="stat-divider" />}
                  <Stat {...s} start={statsVisible} />
                </div>
              ))}
            </Reveal>
          </div>
        )}

        <Reveal delay={600}>
          <TechIcons />
        </Reveal>
      </div>

      <Reveal className="hero-visual" variant="left" delay={200}>
        <div className="hero-image-wrap">
          <VSCodeWindow />
          <ProfilePhoto className="hero-photo" />

          {profile.available && (
            <div className="hero-badge">
              <Check size={18} />
              <span>Available Now</span>
            </div>
          )}
          <div className="floating-card card-react">
            <span className="fc-dot fc-blue" />
            React
          </div>
          <div className="floating-card card-node">
            <span className="fc-dot fc-green" />
            Node.js
          </div>
        </div>
      </Reveal>
    </section>
  );
}