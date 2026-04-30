import { AnimatedHero } from "@/components/AnimatedHero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { PROJECTS } from "@/data/projects";

export default function HomePage() {
  const selected = PROJECTS.slice(0, 3);

  return (
    <>
      <AnimatedHero />
      <section className="section">
        <div className="container">
          <SectionLabel title="Featured Projects" href="/projects" linkLabel="View All ->" />
          <div className="projects-grid">
            {selected.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact border-t border-white/5">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionLabel title="Get In Touch" />
            <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
              Have a question or want to discuss robotics, reinforcement learning, or life... Feel free to reach out!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
