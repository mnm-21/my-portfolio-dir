import { ArrowLeft, ExternalLink, FileText, Github } from 'lucide-react';
import type { ProjectData } from '../config';
import { projectDetailConfig } from '../config';
import ProjectMedia from '../components/ProjectMedia';

interface Props {
  project: ProjectData;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <div className="project-detail-page">
      <div className="project-detail-bar">
        <button onClick={onBack} className="button button-secondary detail-back-button" type="button">
          <ArrowLeft size={14} aria-hidden="true" />
          <span>{projectDetailConfig.backLabel || 'Back'}</span>
        </button>
      </div>

      <main className="project-detail-shell">
        <aside className="project-detail-aside">
          <div className="project-detail-media-frame">
            <ProjectMedia src={project.image} alt={project.media.alt} className="project-media" />
          </div>

          <div className="project-detail-meta">
            {project.meta.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          {project.externalLinks.length > 0 && (
            <div className="detail-links">
              {project.externalLinks.map((link) => {
                const Icon = link.text === 'GitHub' || link.text === 'Repo'
                  ? Github
                  : link.text === 'DOI' || link.text === 'Paper' || link.text === 'Report'
                    ? FileText
                    : ExternalLink;
                const label = link.text === 'GitHub' ? 'Repo' : link.text === 'DOI' ? 'Paper' : link.text;

                return (
                  <a
                    className="button button-secondary"
                    key={link.text}
                    href={link.href}
                    target={link.href?.startsWith('http') ? '_blank' : undefined}
                    rel={link.href?.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span>{label}</span>
                    <Icon size={14} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          )}
        </aside>

        <article className="project-detail-article">
          {project.category && <div className="section-kicker">{project.category}</div>}
          <h1 className="font-serif-display">{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>

          <section className="project-detail-block project-overview-block">
            <h2>Overview</h2>
            {project.detail.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          {project.detail.sections.map((section) => (
            <section className="project-detail-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {project.detail.publication && (
            <section className="project-detail-block">
              <h2>Publication</h2>
              <p>{project.detail.publication}</p>
            </section>
          )}

          {project.detail.future && project.detail.future.length > 0 && (
            <section className="project-detail-block">
              <h2>Future Work</h2>
              <ul>
                {project.detail.future.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="project-detail-block">
            <h2>Stack</h2>
            <div className="project-stack-list">
              {project.detail.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
