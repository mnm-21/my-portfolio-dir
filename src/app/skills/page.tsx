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
    description: "Fluent in Python for research and ML, C++ for performance-critical systems, MATLAB for control and signal processing, and Bash for automation and tooling.",
    icon: Code2,
    tags: ["Python", "C++", "MATLAB", "Bash"],
  },
  {
    title: "Machine Learning & AI",
    description: "End-to-end model development across reinforcement learning, computer vision, and generative AI, from research prototyping to training at scale.",
    icon: BrainCircuit,
    tags: ["PyTorch", "TensorFlow", "Stable Baselines3", "HuggingFace", "LangChain"],
  },
  {
    title: "Computer Vision & Imaging",
    description: "Image and video restoration, multi-view geometry, depth-guided architectures, and downstream perception pipelines for autonomous systems.",
    icon: Eye,
    tags: ["OpenCV", "Pillow", "NumPy", "SciPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Robotics & Simulation",
    description: "Physics-based simulation, embodied RL, surgical robotics, and multi-agent systems, from task design to policy deployment.",
    icon: Bot,
    tags: ["MuJoCo", "SOFA", "ROS", "CoppeliaSim", "MyoSuite", "Robosuite"],
  },
];

const MATRIX: [string, string[]][] = [
  ["Languages", ["Python", "C++", "MATLAB", "Java", "Bash / zsh"]],
  ["ML Frameworks", ["PyTorch", "PyTorch Lightning", "TensorFlow", "Keras", "Scikit-learn"]],
  ["Vision & Data", ["OpenCV", "Pillow", "NumPy", "SciPy", "Pandas", "Matplotlib", "Seaborn"]],
  ["GenAI & NLP", ["HuggingFace", "LangChain", "Streamlit"]],
  ["Simulation", ["MuJoCo", "SOFA Framework", "MyoSuite", "Robosuite", "CoppeliaSim", "ROS"]],
  ["CAD & Design", ["SolidWorks", "AutoCAD", "Fusion 360", "Creo"]],
  ["Tools", ["Git", "Linux (Ubuntu)", "VSCode", "LaTeX", "Overleaf", "Canva"]],
];

import { PageTransition } from "@/components/PageTransition";

export default function SkillsPage() {
  return (
    <PageTransition>
      <section className="container page-hero" aria-labelledby="skills-title">
        <h1 className="page-title" id="skills-title">
          Expertise & Stack
        </h1>
        <p className="page-lead">
          A technical toolkit built across robotics, reinforcement learning, computer vision, and computational imaging research.
        </p>
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
            <div className="matrix-row" key={label}>
              <div className="matrix-label">{label}</div>
              <div className="matrix-items">
                {items.map((item) => (
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