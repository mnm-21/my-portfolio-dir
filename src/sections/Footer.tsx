import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { footerConfig } from '../config';
import ContactForm from '../components/ContactForm';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(footerConfig.contactEmail);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1400);
    } catch {
      window.location.href = `mailto:${footerConfig.contactEmail}`;
    }
  };

  if (!footerConfig.brandName && !footerConfig.contactEmail && footerConfig.socials.length === 0) {
    return null;
  }

  return (
    <footer id="footer" className="contact-section">
      <div className="contact-shell">
        <div className="contact-copy">
          <h2 className="font-serif-display">Start a conversation.</h2>

          <div className="contact-link-grid">
            <div className="contact-link-group contact-email-card">
              <div className="contact-email-line">
                <Mail className="contact-row-icon" size={24} aria-hidden="true" />
                <a href={`mailto:${footerConfig.contactEmail}`}>{footerConfig.contactEmail}</a>
                <button type="button" onClick={copyEmail} aria-label="Copy email address">
                  {copiedEmail ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                </button>
              </div>
            </div>

            {footerConfig.socials.map((entry) => {
              const Icon = entry.text === 'GitHub' ? Github : entry.text === 'LinkedIn' ? Linkedin : Mail;
              return (
                <a
                  className="contact-link-group contact-social-card"
                  href={entry.href}
                  key={entry.text}
                  target={entry.href?.startsWith('http') ? '_blank' : undefined}
                  rel={entry.href?.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span>
                    <Icon className="contact-row-icon" size={24} aria-hidden="true" />
                    {entry.text}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="contact-footer-line">
        <span>{footerConfig.brandName}</span>
        <span>{footerConfig.copyright}</span>
      </div>
    </footer>
  );
}
