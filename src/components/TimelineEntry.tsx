import { MediaBlock } from "@/components/MediaBlock";
import { Tag } from "@/components/Tag";
import type { JourneyEntry } from "@/data/journey";

export function TimelineEntry({ entry }: { entry: JourneyEntry }) {
  return (
    <article className="timeline-entry">
      <div>
        <header className="timeline-header">
          <h2>{entry.role}</h2>
          <div className="timeline-meta">
            <span>{entry.date}</span>
            <span>{entry.institution}</span>
          </div>
        </header>
        <p>{entry.description}</p>
        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="timeline-bullets">
            {entry.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
        <div className="tag-row">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      {entry.media ? <MediaBlock {...entry.media} className="timeline-thumb" /> : null}
    </article>
  );
}