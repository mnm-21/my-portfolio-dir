"use client";

import { AnimatePresence, motion } from "framer-motion";
// import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
// import { cn } from "@/lib/utils";

// const FILTERS = ["All", "Robotics", "Reinforcement Learning", "Computer Vision", "Multi-Agent"];

// function matches(project: Project, filter: string) {
//   if (filter === "All") return true;
//   const text = [project.category, project.title, project.shortTitle, ...project.tags].join(" ").toLowerCase();
//   if (filter === "Robotics") return /robot|surgical|swarm|manipulation|mujoco|myosuite/.test(text);
//   if (filter === "Multi-Agent") return /multi-agent|swarm|maddpg|warehouse/.test(text);
//   return text.includes(filter.toLowerCase());
// }

export function ProjectsClient({ projects }: { projects: Project[] }) {
  // const [filter, setFilter] = useState("All");
  // const filtered = useMemo(() => projects.filter((project) => matches(project, filter)), [projects, filter]);
  const filtered = projects;

  return (
    <>
      {/* <div className="filter-bar-container">
        <div className="filter-bar" aria-label="Project filters">
          {FILTERS.map((item) => (
            <button
              className={cn("filter-chip", item === filter && "active")}
              key={item}
              type="button"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div> */}
      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <ProjectCard project={project} variant="selected" index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
