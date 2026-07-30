import { mediumsConfig } from '../config';

function splitTools(value: string) {
  return value.split('/').map((tool) => tool.trim()).filter(Boolean);
}

export default function MediumsGlossary() {
  if (mediumsConfig.items.length === 0) {
    return null;
  }

  return (
    <section id="mediums" className="tech-section">
      <div className="tech-heading">
        {mediumsConfig.sectionLabel && <div className="section-kicker">{mediumsConfig.sectionLabel}</div>}
        <h2 className="font-serif-display">Technical Stack</h2>
      </div>

      <div className="tech-grid">
        {mediumsConfig.items.map((item, index) => (
          <article className="tech-card" key={item.cn}>
            <div className="tech-card-index">{String(index + 1).padStart(2, '0')}</div>
            <h3>{item.cn}</h3>
            <p>{item.description}</p>
            <div className="tech-chip-row">
              {splitTools(item.en).map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
