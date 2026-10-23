import { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check, MessageCircle } from 'lucide-react';
import { contact, profile, links } from '../data.js';
import Reveal from './Reveal.jsx';

const EMPTY = { name: '', email: '', subject: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Please add a subject.';
  if (v.message.trim().length < 10) e.message = 'Please write at least 10 characters.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (!contact.formEndpoint) {
      // Tanpa backend: buka aplikasi email dengan isi terisi.
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      setValues(EMPTY);
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const field = (name, label, props = {}) => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {props.textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={props.placeholder}
          value={values[name]}
          onChange={onChange}
          className={errors[name] ? 'error' : ''}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={props.type || 'text'}
          placeholder={props.placeholder}
          value={values[name]}
          onChange={onChange}
          className={errors[name] ? 'error' : ''}
        />
      )}
      {errors[name] && <span className="field-error show">{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-info" variant="right">
            <div className="section-tag">Contact</div>
            <h2 className="section-title">
              {contact.heading} <em>{contact.headingEm}</em>
            </h2>
            <p className="contact-desc">{contact.description}</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
              {profile.whatsapp && (
                <div className="contact-item">
                  <div className="contact-icon">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="contact-label">WhatsApp</span>
                    <a href={profile.whatsappLink} target="_blank" rel="noopener noreferrer">
                      {profile.whatsapp}
                    </a>
                  </div>
                </div>
              )}
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span>
                    {profile.location} · {profile.timezone}
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="contact-label">Availability</span>
                  {profile.available ? (
                    <span className="available-badge">{profile.availableText}</span>
                  ) : (
                    <span>Currently booked</span>
                  )}
                </div>
              </div>
            </div>

            <a
              href={links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary upwork-cta"
            >
              Invite me on Upwork
            </a>
          </Reveal>

          <Reveal className="contact-form-wrap" variant="left">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                {field('name', 'Your Name', { placeholder: 'John Smith' })}
                {field('email', 'Email Address', { type: 'email', placeholder: 'john@example.com' })}
              </div>
              {field('subject', 'Subject', { placeholder: 'Project inquiry' })}
              {field('message', 'Message', { textarea: true, placeholder: 'Tell me about your project...' })}

              <button
                type="submit"
                className="btn-primary btn-submit"
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
                <Send size={16} />
              </button>

              {status === 'sent' && (
                <div className="form-success show" role="status">
                  <Check size={18} />
                  <span>
                    {contact.formEndpoint
                      ? "Message sent! I'll get back to you within 24 hours."
                      : 'Your email app should open with the message ready to send.'}
                  </span>
                </div>
              )}
              {status === 'error' && (
                <div className="form-error show" role="alert">
                  Something went wrong. Please email me directly at {profile.email}.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
