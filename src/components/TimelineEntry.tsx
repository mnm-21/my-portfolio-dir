import { MediaBlock } from "@/components/MediaBlock";
import { Tag } from "@/components/Tag";
import type { JourneyEntry } from "@/data/journey";

export function TimelineEntry({ entry, index }: { entry: JourneyEntry; index: number }) {
  return (
    <article className="timeline-entry">
      <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <div className="timeline-meta">
          <span>{entry.date}</span>
          <span>{entry.institution}</span>
        </div>
        <h2>{entry.role}</h2>
        <p>{entry.description}</p>
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
