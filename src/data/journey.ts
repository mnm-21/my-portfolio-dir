export interface JourneyEntry {
  role: string;
  institution: string;
  date: string;
  description: string;
  bullets?: string[];
  tags: string[];
  media?: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
}

export interface EducationEntry {
  title: string;
  institution: string;
  metric: string;
  metricLabel: string;
  date: string;
  detail: string;
}

export const JOURNEY: JourneyEntry[] = [
  {
    role: "Undergraduate Researcher",
    institution: "INSPIRE Lab, IIT Madras",
    date: "May 2025 - Present",
    description: "Developing a phase-aware RL framework for autonomous laparoscopic camera control under Dr. Nirav Patel. Submitted as a full paper to IEEE/RSJ IROS 2026.",
    bullets: [
      "Built a 4-DOF pivotized camera model with RCM constraints inside a custom physics-based SOFA simulation of laparoscopic cholecystectomy",
      "Designed a phase-conditioned dense reward covering centering, zoom, jitter, and collision, adapting dynamically across the Grasp, Lift, and Touch phases",
      "Policy achieves 40% better centering than an oracle analytic heuristic with privileged geometric access, and 67% lower jitter than a phase-blind RL baseline, evaluated over 50 stochastic episodes",
      "Modeled stochastic human-like instrument noise (correlated drift and high-frequency tremor) for robust generalization during training",
    ],
    tags: ["RL", "Surgical Robotics", "SOFA", "PPO", "IROS 2026"],
    media: {
      type: "video",
      src: "/assets/video/laparoscopic_cam_view.mp4",
      alt: "Laparoscopic camera control simulation",
    },
  },
  {
    role: "Young Research Fellow (FlareGS)",
    institution: "Computational Imaging Lab, IIT Madras",
    date: "Dec 2024 - Mar 2025",
    description: "Joint first author on FlareGS, published at the ICCV 2025 Workshop on Autonomous Driving (2COOOL). One of 17 students selected for the Young Research Fellow award from a pool of 300+.",
    bullets: [
      "Built a physics-based synthetic flare generation pipeline using Fraunhofer diffraction and Mie scattering theory, with dynamic PSFs and chromatic aberrations",
      "Developed a depth-guided UFormer restoration module that fuses flare-corrupted RGB with LiDAR-derived depth as a flare-invariant structural prior",
      "Integrated 4D Gaussian Splatting for multi-view consistent scene reconstruction, enabling novel view synthesis at arbitrary viewpoints and timestamps",
      "Achieved best-in-class Masked PSNR across M1, M2, and M3 intensity levels, with clear downstream gains on YOLOv12 segmentation and object detection",
    ],
    tags: ["Gaussian Splatting", "LiDAR", "UFormer", "ICCVW 2025"],
    media: {
      type: "image",
      src: "/assets/img/FlareGS.png",
      alt: "FlareGS computational imaging visual",
    },
  },
  {
    role: "Young Research Fellow (VidFlareNet)",
    institution: "Computational Imaging Lab, IIT Madras",
    date: "Jul 2024 - Sep 2024",
    description: "Developed VidFlareNet, a spatio-temporal video restoration framework for flare removal under Prof. Kaushik Mitra. This work laid the foundation for the multi-view architecture later developed in FlareGS.",
    bullets: [
      "Combined spatial transformer blocks with Mamba temporal modules and a depth-reweighting attention mechanism to enforce inter-frame consistency",
      "Built a 2,600-video training dataset by injecting dynamic Flare-R artifacts into YouTubeVOS for large-scale supervised training",
      "Outperformed Restormer and UFormer on PSNR (20.03 vs. 17.89) and Short-Term Loss (8.24 vs. 9.12), with improved downstream optical flow and detection",
    ],
    tags: ["Transformers", "Mamba", "Video Restoration", "Depth Priors"],
    media: {
      type: "image",
      src: "/assets/img/vidflarenet.png",
      alt: "VidFlareNet visual comparison",
    },
  },
  {
    role: "ML Engineering Intern",
    institution: "Quantiphi Analytics, Mumbai",
    date: "Jun 2024 - Jul 2024",
    description: "Worked on GenAI and OCR solutions for enterprise document parsing at one of India's leading AI-first companies.",
    bullets: [
      "Developed customized LLM-based pipelines for structured data extraction from complex client documents",
      "Researched advanced OCR techniques for tabular data extraction, including in-depth analysis of Sparrow Parse",
      "Collaborated with cross-functional teams to integrate AI strategies into production pipelines, improving scalability and efficiency",
    ],
    tags: ["GenAI", "LLMs", "OCR", "Document AI"],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    title: "B.Tech Mechanical Engineering",
    institution: "IIT Madras",
    metric: "9.43",
    metricLabel: "GPA / 10",
    date: "2022 - 2026",
    detail: "CGPA 9.43/10",
  },
  {
    title: "Senior Secondary HSC",
    institution: "Khar Education Society, Mumbai",
    metric: "95.0%",
    metricLabel: "Rank 3",
    date: "2022",
    detail: "95.0%, Rank 3",
  },
  {
    title: "Matriculation ICSE",
    institution: "Arya Vidya Mandir, Mumbai",
    metric: "98.33%",
    metricLabel: "Rank 2",
    date: "2020",
    detail: "98.33%, Rank 2",
  },
];