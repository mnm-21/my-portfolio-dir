import { GraduationCap } from 'lucide-react';
import { educationConfig } from '../config';

export default function EducationSection() {
  if (!educationConfig.title && educationConfig.entries.length === 0) {
    return null;
  }

  return (
    <section className="education-section">
      <div className="education-heading">
        {educationConfig.sectionLabel && <div className="section-kicker">{educationConfig.sectionLabel}</div>}
        <h2 className="font-serif-display">{educationConfig.title}</h2>
      </div>

      <div className="education-grid">
        {educationConfig.entries.map((entry) => (
          <article className="education-card" key={entry.title}>
            <div className="education-icon" aria-hidden="true">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3>{entry.title}</h3>
              {entry.minor && <p className="education-minor">{entry.minor}</p>}
              <p>{entry.institution}</p>
              {entry.detail && <span>{entry.detail}</span>}
              {entry.cgpa && <span>{entry.cgpa}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
