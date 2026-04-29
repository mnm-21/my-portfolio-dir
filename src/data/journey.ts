export interface JourneyEntry {
  role: string;
  institution: string;
  date: string;
  description: string;
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
    date: "May 2025 - Apr 2026",
    description:
      "Working on reinforcement learning for autonomous laparoscopic camera control under Dr. Nirav Patel, with focus on phase-aware policies, multi-objective optimization, and temporal stability.",
    tags: ["RL", "Surgical Robotics", "Temporal Stability"],
    media: {
      type: "video",
      src: "/assets/video/laparoscopic_cam_view.mp4",
      alt: "Laparoscopic camera control simulation",
    },
  },
  {
    role: "Young Research Fellow",
    institution: "FlareGS, Computational Imaging Lab",
    date: "Dec 2024 - Mar 2025",
    description:
      "Joint first author on an ICCV 2025 workshop paper. Developed a multi-view, depth-guided framework for robust flare removal in urban scenes under Prof. Kaushik Mitra.",
    tags: ["Gaussian Splatting", "Depth", "ICCVW 2025"],
    media: {
      type: "image",
      src: "/assets/img/FlareGS.png",
      alt: "FlareGS computational imaging visual",
    },
  },
  {
    role: "Young Research Fellow",
    institution: "VidFlareNet, Computational Imaging Lab",
    date: "Jul - Sep 2024",
    description:
      "Built a spatio-temporal model combining transformers, Mamba blocks, and depth priors for temporally consistent video flare removal.",
    tags: ["Transformers", "Mamba", "Video Restoration"],
    media: {
      type: "image",
      src: "/assets/img/vidflarenet.png",
      alt: "VidFlareNet visual comparison",
    },
  },
  {
    role: "ML Engineering Intern",
    institution: "Quantiphi Analytics, Mumbai",
    date: "Jun - Jul 2024",
    description:
      "Developed LLM-based solutions for document parsing and structured data extraction. Researched OCR techniques for tabular data, including Sparrow Parse, and contributed to scalable AI pipelines.",
    tags: ["GenAI", "OCR", "Document AI"],
    media: {
      type: "image",
      src: "/assets/img/warehouse.jpg",
      alt: "Structured automation visual for internship entry",
    },
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
    institution: "Khar Education Society",
    metric: "95.0%",
    metricLabel: "Rank 3",
    date: "2022",
    detail: "95.0%, Rank 3",
  },
  {
    title: "Matriculation ICSE",
    institution: "Arya Vidya Mandir",
    metric: "98.33%",
    metricLabel: "Rank 2",
    date: "2020",
    detail: "98.33%, Rank 2",
  },
];
