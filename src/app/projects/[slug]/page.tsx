import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Code, ExternalLink, FileText, Lock, type LucideIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { MediaBlock } from "@/components/MediaBlock";
import { ProjectCard } from "@/components/ProjectCard";
import { Tag } from "@/components/Tag";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { PageTransition } from "@/components/PageTransition";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.shortTitle,
    description: project.summary,
    openGraph: {
      title: `${project.shortTitle} - Mayank Chandak`,
      description: project.summary,
      images: [`/projects/${project.id}/opengraph-image`],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const related = PROJECTS.filter((item) => item.id !== project.id).slice(0, 3);

  const displayLinks = project.links
    .filter((l) => l.label !== "Details")
    .filter((l) => !(l.label === "Paper" && project.links.some((ll) => ll.label === "DOI")))
    .map((l) => {
      if (l.label === "GitHub") return { ...l, label: "Repo", icon: Code };
      if (l.label === "DOI") return { ...l, label: "Paper", icon: FileText };
      return { ...l, icon: undefined };
    });

  return (
    <PageTransition>
      <section className="container detail-hero">
        <div>
          <div className="breadcrumb">Projects / {project.shortTitle}</div>
          <Tag variant="teal">{project.category}</Tag>
          <h1 className="detail-title">{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <div className="tag-row mt-6">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="button-row justify-start">
            <Button href="/projects" variant="secondary" icon={ArrowLeft}>
              Projects
            </Button>
            {displayLinks.map((link) => (
              <Button
                disabled={link.disabled}
                external={link.external}
                href={link.disabled ? undefined : link.href}
                icon={link.disabled ? Lock : (link as import("@/data/projects").ProjectLink & { icon?: LucideIcon }).icon || ExternalLink}
                key={link.label}
                variant={link.kind === "primary" ? "primary" : "secondary"}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="detail-media-shell">
          <MediaBlock {...project.media} priority />
        </div>
      </section>

      <section className="container detail-body">
        <article className="detail-main">
          <section>
            <h2>01 Overview</h2>
            {project.detail.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          {project.detail.sections.map((section, index) => (
            <section key={section.title}>
              <h2>
                {String(index + 2).padStart(2, "0")} {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
        <aside className="detail-side">
          <div className="side-card">
            <h2>Tech Stack</h2>
            <div className="terminal-stack">
              <span className="prompt">$ stack.json</span>
              <span>------------</span>
              {project.detail.stack.map((item) => (
                <span key={item}>
                  <span className="line">&gt;</span> {item}
                </span>
              ))}
            </div>
          </div>
          {project.detail.publication ? (
            <div className="side-card">
              <h2>Publication</h2>
              <p className="m-0 text-[var(--text-secondary)]">{project.detail.publication}</p>
            </div>
          ) : null}
          {project.detail.future ? (
            <div className="side-card">
              <h2>Future Work</h2>
              <ul>
                {project.detail.future.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </section>

      <section className="container section-compact">
        <h2 className="section-title mb-6">More Projects</h2>
        <div className="related-row">
          {related.map((item) => (
            <ProjectCard project={item} variant="compact" key={item.id} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
