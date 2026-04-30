import { ArrowLeft, ArrowRight, Code, ExternalLink, FileText, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { MediaBlock } from "@/components/MediaBlock";
import { Tag } from "@/components/Tag";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "selected" | "hero" | "compact";
  index?: number;
}

export function ProjectCard({ project, variant = "selected", index = 0 }: ProjectCardProps) {
  if (variant === "compact") {
    return (
      <Link className="compact-card" href={`/projects/${project.id}`}>
        <MediaBlock {...project.media} />
        <div>
          <Tag size="sm" variant="teal">
            {project.category}
          </Tag>
          <h3 className="mt-3 font-display text-lg font-bold" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{project.shortTitle}</h3>
        </div>
      </Link>
    );
  }

  if (variant === "hero") {
    const flipped = index % 2 === 1;
    return (
      <article className={cn("project-row", flipped && "flipped")}>
        <Link className="card-hit-area" href={`/projects/${project.id}`} aria-label={`View ${project.shortTitle} details`} />
        <MediaBlock {...project.media} className="project-media" />
        <div className="project-row-content">
          <Tag variant="teal">{project.category}</Tag>
          <h2 className="project-title">{project.shortTitle}</h2>
          <p className="project-summary">{project.summary}</p>
          <div className="tag-row mt-5">
            {project.tags.map((tag) => (
              <Tag key={tag} size="sm">
                {tag}
              </Tag>
            ))}
          </div>
          <div className="project-actions">
            {project.links.map((link) => (
              <Button
                key={link.label}
                href={link.disabled ? undefined : link.href}
                external={link.external}
                disabled={link.disabled}
                variant={link.kind === "primary" ? "primary" : "secondary"}
                icon={link.disabled ? Lock : link.external ? ExternalLink : ArrowRight}
                size="sm"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </article>
    );
  }

  const displayLinks = project.links
    .filter((l) => !(l.label === "Paper" && project.links.some((ll) => ll.label === "DOI")))
    .map((l) => {
      if (l.label === "GitHub") return { ...l, label: "Repo", icon: Code };
      if (l.label === "DOI") return { ...l, label: "Paper", icon: FileText };
      return { ...l, icon: undefined };
    });

  return (
    <article className="project-card">
      <Link className="card-hit-area" href={`/projects/${project.id}`} aria-label={`View ${project.shortTitle} details`} />
      <div className="media-shell">
        <MediaBlock {...project.media} priority={index < 3} />
      </div>
      <div className="project-info">
        <Tag variant="teal" size="sm" className="mb-4">
          {project.category}
        </Tag>
        <h3 className="project-title">{project.shortTitle}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {displayLinks.map((link) => (
            <Button
              key={link.label}
              href={link.disabled ? undefined : link.href}
              external={link.external}
              variant={link.kind === "primary" ? "primary" : "secondary"}
              size="sm"
              disabled={link.disabled}
              className="px-3"
              icon={(link as any).icon || (link.external ? ExternalLink : ArrowRight)}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}
