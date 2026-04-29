import { ArrowRight, ExternalLink, Lock } from "lucide-react";
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
          <h3 className="mt-3 font-display text-lg font-bold">{project.shortTitle}</h3>
        </div>
      </Link>
    );
  }

  if (variant === "hero") {
    const flipped = index % 2 === 1;
    return (
      <article className={cn("project-row", flipped && "flipped")}>
        <MediaBlock {...project.media} className="project-media" />
        <div className="project-row-content">
          <span className="project-row-number">{String(project.cardNumber).padStart(2, "0")}</span>
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

  return (
    <article className={cn("project-card", index === 0 ? "featured" : "selected")}>
      <MediaBlock {...project.media} priority={index === 0} />
      <div className="project-shade" />
      <span className="project-index">{String(project.cardNumber).padStart(2, "0")}</span>
      <div className="project-content">
        <Tag variant="teal">{project.category}</Tag>
        <h3 className="project-title">{project.shortTitle}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-actions">
          {project.links.slice(0, 3).map((link) => (
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
