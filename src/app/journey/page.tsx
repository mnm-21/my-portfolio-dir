import type { Metadata } from "next";
import { TimelineEntry } from "@/components/TimelineEntry";
import { EDUCATION, JOURNEY } from "@/data/journey";

export const metadata: Metadata = {
  title: "Journey",
  description: "Research experience, internships, and education for Mayank Chandak.",
};

export default function JourneyPage() {
  return (
    <>
      <section className="container page-hero" aria-labelledby="journey-title">
        <div className="page-index">04 /</div>
        <h1 className="page-title" id="journey-title">
          A Journey of Research and Engineering
        </h1>
        <p className="page-lead mono">Reinforcement Learning / Computational Imaging / Manufacturing Automation / Mechanical Engineering</p>
      </section>

      <section className="container timeline" aria-label="Research and professional timeline">
        {JOURNEY.map((entry, index) => (
          <TimelineEntry entry={entry} index={index} key={`${entry.role}-${entry.date}`} />
        ))}
      </section>

      <section className="container section-compact">
        <h2 className="section-title mb-8">Education</h2>
        <div className="education-grid">
          {EDUCATION.map((entry) => (
            <article className="education-card" key={entry.title}>
              <h3>{entry.title}</h3>
              <p>{entry.institution}</p>
              <strong>{entry.metric}</strong>
              <p className="mono muted">{entry.metricLabel}</p>
              <p className="mono mt-8">{entry.date}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
