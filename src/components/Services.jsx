import { Monitor, Layers, Database, Wrench } from 'lucide-react';
import { services } from '../data.js';
import Reveal from './Reveal.jsx';

const ICONS = { monitor: Monitor, layers: Layers, database: Database, wrench: Wrench };

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-tag">What I Do</div>
          <h2 className="section-title">
            Services I <em>offer</em>
          </h2>
          <p className="section-subtitle">
            From concept to deployment, I build complete digital products that deliver real value.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || Monitor;
            return (
              <Reveal
                key={s.title}
                className={`service-card ${s.featured ? 'featured' : ''}`}
                delay={i * 100}
              >
                <div className="service-icon">
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul className="service-list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {s.featured && <div className="service-popular">Most Popular</div>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
