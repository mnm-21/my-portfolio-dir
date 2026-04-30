import type { Metadata } from "next";
import { ProjectsClient } from "@/components/ProjectsClient";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected works by Mayank Chandak across robotics, reinforcement learning, computer vision, and multi-agent systems.",
};

import { PageTransition } from "@/components/PageTransition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container">
        <section className="page-hero" aria-labelledby="projects-title">
          <h1 className="page-title" id="projects-title">
            Projects
          </h1>
          <p className="page-lead">
            Research and engineering across reinforcement learning, robotics, computational imaging, and multi-agent systems.
          </p>
          <ProjectsClient projects={PROJECTS} />
        </section>
      </div>
    </PageTransition>
  );
}
