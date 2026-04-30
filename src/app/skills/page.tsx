import type { Metadata } from "next";
import { Bot, BrainCircuit, Code2, Eye } from "lucide-react";
import { Tag } from "@/components/Tag";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical toolkit for robotics, reinforcement learning, computer vision, and simulation research.",
};

const PRIMARY_SKILLS = [
  {
    title: "Programming",
    description: "Research prototypes, simulations, model training, and engineering tooling.",
    icon: Code2,
    tags: ["Python", "C++", "MATLAB"],
  },
  {
    title: "Machine Learning & AI",
    description: "Model development across reinforcement learning, vision, and learning-based perception.",
    icon: BrainCircuit,
    tags: ["PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Computer Vision & Data",
    description: "Image, video, numerical, and experimental data workflows for research-grade systems.",
    icon: Eye,
    tags: ["OpenCV", "NumPy", "SciPy", "Pandas"],
  },
  {
    title: "Robotics & Simulation",
    description: "Embodied systems in simulation with reproducible experimentation and control policies.",
    icon: Bot,
    tags: ["MuJoCo", "ROS2", "CoppeliaSim", "Isaac Sim"],
  },
];

const MATRIX = [
  ["Languages", ["Python", "C++", "MATLAB"]],
  ["Frameworks", ["PyTorch", "TensorFlow", "Scikit-learn"]],
  ["Simulation", ["MuJoCo", "ROS2", "CoppeliaSim", "Isaac Sim"]],
  ["Vision", ["OpenCV", "NumPy", "SciPy", "Pandas"]],
  ["Tools", ["Git", "Linux", "LaTeX", "VSCode"]],
];

import { PageTransition } from "@/components/PageTransition";

export default function SkillsPage() {
  return (
    <PageTransition>
      <section className="container page-hero" aria-labelledby="skills-title">
        <h1 className="page-title" id="skills-title">
          Expertise & Stack
        </h1>
        <p className="page-lead">A technical toolkit built for robotics, RL, and vision research.</p>
      </section>

      <section className="container section-compact">
        <div className="skills-grid">
          {PRIMARY_SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <article className="skill-card" key={skill.title}>
                <div className="icon-badge">
                  <Icon size={22} />
                </div>
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
                <div className="tag-row">
                  {skill.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="matrix">
          <h2 className="section-title my-10">Full Stack</h2>
          {MATRIX.map(([label, items]) => (
            <div className="matrix-row" key={label as string}>
              <div className="matrix-label">{label as string}</div>
              <div className="matrix-items">
                {(items as string[]).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
