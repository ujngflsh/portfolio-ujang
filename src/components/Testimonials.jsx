import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data.js';
import Reveal from './Reveal.jsx';

function perView() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

export default function Testimonials() {
  const [spv, setSpv] = useState(perView());
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(testimonials.length / spv));

  useEffect(() => {
    const onResize = () => {
      setSpv(perView());
      setPage(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (pages <= 1) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 6000);
    return () => clearInterval(id);
  }, [pages, page]);

  // Tanpa testimoni asli, section tidak ditampilkan.
  if (testimonials.length === 0) return null;

  const go = (i) => setPage(Math.max(0, Math.min(i, pages - 1)));

  return (
    <section className="testimonials section">
      <div className="container">
        <Reveal className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">
            What clients <em>say</em>
          </h2>
        </Reveal>

        <div className="testimonials-track">
          <div
            className="testimonials-inner"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="testimonial-card"
                style={{ flex: `0 0 calc(${100 / spv}% - ${(24 * (spv - 1)) / spv}px)` }}
              >
                <div className="testimonial-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  {t.avatar && <img src={t.avatar} alt={t.name} />}
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {pages > 1 && (
            <div className="testimonial-nav">
              <button className="t-btn" aria-label="Previous" onClick={() => go(page - 1)}>
                <ChevronLeft size={18} />
              </button>
              <div className="t-dots">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    className={`t-dot ${i === page ? 'active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
              <button className="t-btn" aria-label="Next" onClick={() => go(page + 1)}>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
