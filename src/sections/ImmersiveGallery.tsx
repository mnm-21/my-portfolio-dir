import type { CSSProperties } from 'react';
import { galleryConfig } from '../config';
import ProjectMedia from '../components/ProjectMedia';
import TiltCard from '../components/TiltCard';

interface Props {
  onSelect: (id: string) => void;
}

export default function ImmersiveGallery({ onSelect }: Props) {
  const projects = galleryConfig.projects;

  if (projects.length === 0 && !galleryConfig.title) {
    return null;
  }

  return (
    <section className="projects-section">
      <div className="gallery-heading">
        {galleryConfig.sectionLabel && <div className="section-kicker">{galleryConfig.sectionLabel}</div>}
        <h2 className="font-serif-display">{galleryConfig.title}</h2>
      </div>

      <div className="projects-card-grid">
        {projects.map((project, index) => (
          <TiltCard
            key={project.id}
            className="project-card"
            style={{ '--card-index': index } as CSSProperties}
          >
            <article className="project-card-surface tilt-card-surface">
              <button
                className="card-hit-area"
                type="button"
                onClick={() => onSelect(project.id)}
                aria-label={`View ${project.title}`}
              />

              <div className="project-card-media">
                <ProjectMedia
                  src={project.image}
                  alt={project.media.alt}
                  className="project-media"
                />
              </div>

              <div className="project-card-body">
                <h3 className="font-serif-display">{project.shortTitle}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
