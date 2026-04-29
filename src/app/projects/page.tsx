import type { Metadata } from "next";
import { ProjectsClient } from "@/components/ProjectsClient";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected works by Mayank Chandak across robotics, reinforcement learning, computer vision, and multi-agent systems.",
};

export default function ProjectsPage() {
  return (
    <div className="container">
      <section className="page-hero" aria-labelledby="projects-title">
        <div className="page-index">02 /</div>
        <h1 className="page-title" id="projects-title">
          Selected Works
        </h1>
        <p className="page-lead">
          Research and engineering across reinforcement learning, robotics, computational imaging, and multi-agent systems.
        </p>
        <ProjectsClient projects={PROJECTS} />
      </section>
    </div>
  );
}
