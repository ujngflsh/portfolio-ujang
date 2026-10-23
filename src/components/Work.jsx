import { useState } from 'react';
import { Github } from 'lucide-react';
import { projects, projectFilters } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Work() {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter((p) => filter === 'all' || p.category === filter);
  // Hanya tampilkan kategori yang punya project; sembunyikan tab kalau cuma 1 kategori.
  const usedCategories = new Set(projects.map((p) => p.category));
  const filters = projectFilters.filter((f) => f.id === 'all' || usedCategories.has(f.id));
  const showFilters = usedCategories.size > 1;

  return (
    <section id="work" className="work section">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">
            Featured <em>Work</em>
          </h2>
          <p className="section-subtitle">
            A selection of projects I&apos;m proud of — each one a story of challenges solved and ideas brought to life.
          </p>
        </Reveal>

        {showFilters && (
          <Reveal className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        )}

        <div className="projects-grid">
          {visible.map((p) => (
            <article
              key={p.title}
              className={`project-card ${p.large && filter === 'all' ? 'large' : ''}`}
            >
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
                {(p.link || p.repo) && (
                  <div className="project-overlay">
                    {p.link && (
                      <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} className="project-link alt" target="_blank" rel="noopener noreferrer" aria-label="Source code">
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </article>
          ))}
          {visible.length === 0 && <p className="empty">No projects in this category yet.</p>}
        </div>
      </div>
    </section>
  );
}
