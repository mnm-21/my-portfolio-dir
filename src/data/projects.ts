export interface ProjectLink {
  label: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  kind?: "primary" | "secondary";
}

export interface Project {
  id: string;
  cardNumber: number;
  title: string;
  shortTitle: string;
  category: string;
  tags: string[];
  summary: string;
  media: {
    type: "image" | "video" | "abstract";
    src?: string;
    alt: string;
  };
  links: ProjectLink[];
  detail: {
    overview: string[];
    sections: Array<{
      title: string;
      paragraphs?: string[];
      bullets?: string[];
    }>;
    future?: string[];
    stack: string[];
    publication?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "phase-aware-laparoscopic-camera-control",
    cardNumber: 1,
    title: "Surgical Phase-Aware RL for Autonomous Laparoscopic Camera Control",
    shortTitle: "Phase-Aware Laparoscopic Camera Control",
    category: "Reinforcement Learning",
    tags: ["RL", "Surgical Robotics", "Simulation"],
    summary:
      "Phase-aware reinforcement learning for autonomous laparoscopic camera control, enabling stable multi-target visibility with context-aware policies.",
    media: {
      type: "video",
      src: "/assets/video/laparoscopic_cam_view.mp4",
      alt: "Looping laparoscopic camera simulation view",
    },
    links: [
      { label: "Details", href: "/projects/phase-aware-laparoscopic-camera-control", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mnm-21/Phase_Aware_ACC", external: true },
      { label: "Report Pending", disabled: true },
    ],
    detail: {
      overview: [
        "This project builds an intelligent system for controlling a laparoscopic camera during minimally invasive surgery. The goal is to assist or replace human camera operators by learning policies that adapt to surgical context, maintain optimal visibility, and reduce cognitive load on surgeons.",
        "Traditional camera-control approaches are reactive. They struggle when surgical priorities shift across procedural phases. This project introduces phase awareness directly into the reinforcement learning pipeline, allowing the system to anticipate and adapt rather than react blindly.",
      ],
      sections: [
        {
          title: "Core Idea",
          paragraphs: [
            "Surgical procedures follow structured phases, and each phase has different visibility requirements. Instead of learning one generic policy, the system conditions decision-making on procedural phase information.",
          ],
          bullets: [
            "Prioritize relevant anatomical regions dynamically",
            "Maintain stable viewpoints across phase transitions",
            "Avoid erratic or oscillatory camera motion",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Phase-aware policy learning using visual input and procedural context",
            "Multi-objective reward design for target visibility, smooth motion, stability, and occlusion avoidance",
            "Temporal consistency modeling to reduce jitter and improve usability",
            "Controlled simulation environment for reproducible evaluation and robust training",
          ],
        },
        {
          title: "Key Results",
          bullets: [
            "Phase-aware policies significantly outperform phase-blind baselines",
            "Improved multi-target visibility across dynamic scenarios",
            "Reduced camera jitter through learned temporal smoothing",
            "Stable performance across varying scene configurations",
          ],
        },
        {
          title: "Challenges",
          bullets: [
            "Reward design was non-trivial because video quality cannot be captured with a simple binary reward",
            "Phase transitions introduced instability in early training",
            "Limited compute required careful optimization and efficient experimentation",
          ],
        },
        {
          title: "Impact and Takeaways",
          paragraphs: [
            "The project shows that structured domain knowledge can substantially improve reinforcement learning performance in real-world robotics problems. Context matters in sequential decision-making, purely reactive policies are insufficient for structured environments, and careful reward design is critical for stable learning.",
          ],
        },
      ],
      future: [
        "Integrate real surgical video data for improved realism",
        "Extend to multi-agent coordination with surgical tools",
        "Incorporate vision-language models for higher-level guidance",
        "Deploy on real robotic platforms for validation",
      ],
      stack: ["Python", "PyTorch", "Reinforcement Learning", "Simulation Environments"],
    },
  },
  {
    id: "flaregs-4d-flare-removal",
    cardNumber: 2,
    title: "FlareGS: 4D Flare Removal using Gaussian Splatting for Urban Scenes",
    shortTitle: "FlareGS",
    category: "Computational Imaging",
    tags: ["Gaussian Splatting", "Depth", "ICCVW 2025"],
    summary:
      "4D flare removal using Gaussian Splatting for multi-view videos, enabling clean reconstruction and improved downstream perception in challenging urban scenes.",
    media: {
      type: "image",
      src: "/assets/img/FlareGS.png",
      alt: "FlareGS visual comparison and results",
    },
    links: [
      { label: "Details", href: "/projects/flaregs-4d-flare-removal", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mnm-21/FlareGS", external: true },
      { label: "Paper", href: "https://www.computer.org/csdl/proceedings-article/iccvw/2025/898800a842/2eld1QK11ss", external: true },
      { label: "DOI", href: "https://doi.org/10.1109/ICCVW69036.2025.00092", external: true },
    ],
    detail: {
      overview: [
        "FlareGS is a framework for removing complex flare artifacts from real-world driving videos using physics-based modeling, depth priors, and multi-view reconstruction. The work addresses a major gap in visual perception systems where halos, ghosting, and scattering can degrade performance.",
        "Developed at the Computational Imaging Lab, IIT Madras under Prof. Kaushik Mitra, this work was published at an ICCV 2025 workshop. I contributed as a joint first author.",
      ],
      sections: [
        {
          title: "Core Idea",
          paragraphs: [
            "FlareGS combines physics-based understanding of flare formation, depth as a flare-invariant structural prior, and multi-view consistency through Gaussian Splatting. Aggregating information across views and time helps reconstruct regions that are completely corrupted in a single frame.",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Built a physics-based synthetic data pipeline using diffraction theory, point spread functions, and chromatic aberrations",
            "Used LiDAR-derived depth maps as structural priors for separating flare from scene content",
            "Applied a UFormer-based decomposition model to predict clean images and flare components",
            "Fused multi-view frames with Gaussian Splatting for temporally consistent 4D reconstruction",
          ],
        },
        {
          title: "Key Results",
          bullets: [
            "Consistent improvements over state-of-the-art methods under heavy flare",
            "Robust reconstruction even when large parts of the image are corrupted",
            "Strong downstream gains for detection and segmentation after flare removal",
            "Qualitative removal of circular halos, diffraction spikes, and weather-induced scattering while preserving scene detail",
          ],
        },
        {
          title: "Impact and Takeaways",
          bullets: [
            "Multi-view geometry is critical for recovering missing information",
            "Depth provides a powerful invariant signal for disentangling optical corruption",
            "Combining learning with physics-based priors leads to more robust restoration models",
          ],
        },
      ],
      future: [
        "Improve robustness under extreme occlusion scenarios",
        "Reduce dependence on LiDAR by learning depth priors",
        "Extend to real-time deployment for autonomous systems",
        "Generalize to other optical artifacts beyond flare",
      ],
      stack: ["Python", "PyTorch", "UFormer", "Gaussian Splatting", "Multi-view Geometry", "LiDAR"],
      publication: "ICCV 2025 Workshop, joint first author. DOI: 10.1109/ICCVW69036.2025.00092",
    },
  },
  {
    id: "myofootball-musculoskeletal-control",
    cardNumber: 3,
    title: "MyoFootball: Reinforcement Learning for Musculoskeletal Control",
    shortTitle: "MyoFootball",
    category: "Biomechanical RL",
    tags: ["MyoSuite", "DePRL", "MuJoCo"],
    summary:
      "Reinforcement learning for musculoskeletal control, training a biomechanical leg model to walk, stabilize, and score goals in a dynamic football task.",
    media: {
      type: "video",
      src: "/assets/video/myosuite_football.mp4",
      alt: "MyoSuite football control demo",
    },
    links: [
      { label: "Details", href: "/projects/myofootball-musculoskeletal-control", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mnm-21/MyoFootball", external: true },
      { label: "Demo Video", href: "https://drive.google.com/file/d/13Cw54GuumlF-idumeGR-hTw_tc2lcLd1/view", external: true },
    ],
    detail: {
      overview: [
        "MyoFootball explores reinforcement learning for controlling a realistic musculoskeletal system in a football-like environment. The goal was to train a simulated human leg model to walk, stabilize, and accurately kick a ball into a goal under varying conditions.",
        "Unlike standard robotics environments, this setup includes muscle actuation, tendon constraints, and non-linear biomechanics. The project focuses on policies that can handle those dynamics while achieving task-level objectives.",
      ],
      sections: [
        {
          title: "Core Idea",
          paragraphs: [
            "The project learns control policies directly over a high-dimensional musculoskeletal system where actions correspond to muscle activations rather than simple joint torques. That makes the problem harder but more biologically realistic.",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Built the environment using MyoSuite and realistic musculoskeletal models",
            "Explored multiple RL approaches, with final training using DePRL for stability and parallelization",
            "Designed a multi-term reward covering locomotion, balance, ball interaction, and goal scoring",
            "Introduced variability in ball position, goal distance, initial pose, and physical properties for robustness",
          ],
        },
        {
          title: "Key Results",
          bullets: [
            "Learned stable walking and kicking behaviors",
            "Achieved consistent goal scoring without falling",
            "Demonstrated adaptability across varied initial conditions",
            "Balanced locomotion and task execution in a high-dimensional control setting",
          ],
        },
        {
          title: "Challenges",
          bullets: [
            "Extremely high-dimensional muscle activation control space",
            "Reward hacking required more than 100 iterations of tuning",
            "Limited compute constrained experimentation",
            "Early training instability required careful stabilization",
          ],
        },
      ],
      future: [
        "Extend to full-body humanoid control",
        "Incorporate multi-agent interactions",
        "Improve sample efficiency",
        "Transfer policies toward real-world assistive or robotic systems",
      ],
      stack: ["Python", "Reinforcement Learning", "MyoSuite", "DePRL", "MuJoCo"],
    },
  },
  {
    id: "smavnet-wind-aware-swarm",
    cardNumber: 4,
    title: "SMAVNET Reproduction and Wind-Aware Swarm Stabilization",
    shortTitle: "SMAVNET Wind-Aware Swarms",
    category: "Swarm Robotics",
    tags: ["Swarm Robotics", "Networks", "Simulation"],
    summary:
      "Ant-inspired decentralized MAV swarming for positionless communication networks, extended with wind-aware mechanisms to improve stability under real-world disturbances.",
    media: {
      type: "video",
      src: "/assets/video/smavnet_wind.mp4",
      alt: "SMAVNET wind-aware swarm simulation",
    },
    links: [
      { label: "Details", href: "/projects/smavnet-wind-aware-swarm", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mnm-21/Network_dynamics_course_project", external: true },
    ],
    detail: {
      overview: [
        "This project reproduces and extends the SMAVNET framework by Hauert et al., where micro air vehicles self-organize into communication networks using only local interactions and no positional information.",
        "The extension introduces a wind-aware replacement mechanism that addresses instability under environmental disturbances while preserving decentralization.",
      ],
      sections: [
        {
          title: "Core Idea",
          paragraphs: [
            "SMAVNET is inspired by ant foraging behavior. Agents form communication chains using virtual pheromone signals, operating as either exploring ants or stationary communication nodes. This project adds a local replacement strategy to reduce wind-induced spatial drift.",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Reproduced ant and node role dynamics from the original SMAVNET algorithm",
            "Modeled wind using sinusoidal variation and stochastic noise",
            "Introduced local node aging and replacement to re-center the network",
            "Evaluated swarm sizes from 5 to 20 MAVs under continuous wind",
          ],
        },
        {
          title: "Key Results",
          bullets: [
            "Reduced average spatial drift by approximately 45 percent under wind disturbances",
            "Maintained stable communication structures across swarm sizes",
            "Preserved decentralized and positionless behavior",
            "Demonstrated near-linear scalability of replacement dynamics",
          ],
        },
      ],
      future: [
        "Integrate realistic communication drop models",
        "Extend to 3D swarm dynamics",
        "Validate on hardware or high-fidelity simulators",
        "Explore adaptive replacement based on network quality",
      ],
      stack: ["Python", "Simulation", "Swarm Robotics", "Network Dynamics"],
    },
  },
  {
    id: "multi-agent-warehouse-automation",
    cardNumber: 5,
    title: "Multi-Agent Warehouse Automation with Reinforcement Learning and Planning",
    shortTitle: "Multi-Agent Warehouse Automation",
    category: "Multi-Agent Systems",
    tags: ["MADDPG", "PPO", "A*"],
    summary:
      "Multi-agent warehouse automation using reinforcement learning and classical planning for efficient task allocation, collision-free navigation, and scalable coordination.",
    media: {
      type: "image",
      src: "/assets/img/warehouse.jpg",
      alt: "Grid-based warehouse automation simulation",
    },
    links: [
      { label: "Details", href: "/projects/multi-agent-warehouse-automation", kind: "primary" },
      { label: "GitHub", href: "https://github.com/jellyfish2004/Multi_Agent_Warehouse_Management_ME3302", external: true },
    ],
    detail: {
      overview: [
        "This project builds an intelligent warehouse automation system where multiple autonomous agents collaborate to pick, transport, and deliver packages in a dynamic environment.",
        "Developed for an Automation in Manufacturing course at IIT Madras, the system models task allocation, path planning, and coordination under limited space, dynamic requests, and collision constraints.",
      ],
      sections: [
        {
          title: "Core Idea",
          bullets: [
            "Navigate efficiently in a shared environment",
            "Avoid collisions and conflicts",
            "Dynamically allocate tasks",
            "Maximize throughput while minimizing travel and delays",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Built a custom grid-based multi-agent warehouse simulator",
            "Compared proximity-based task assignment with implicit RL-based allocation",
            "Integrated A* path planning with dynamic replanning",
            "Explored MADDPG, centralized PPO, and hierarchical RL",
          ],
        },
        {
          title: "Key Results",
          bullets: [
            "Reduced collisions compared to the A* baseline",
            "Improved agent utilization through learned policies",
            "Reduced total distance traveled through better coordination",
            "Identified trade-offs between throughput and coordination efficiency",
          ],
        },
      ],
      future: [
        "Hybrid RL plus planning approaches",
        "Improved reward design for cooperation",
        "Curriculum learning for stable training",
        "Explicit communication between agents",
      ],
      stack: ["Python", "Reinforcement Learning", "MADDPG", "PPO", "A*", "Gymnasium"],
    },
  },
  {
    id: "vidflarenet-video-flare-removal",
    cardNumber: 6,
    title: "VidFlareNet: Deep Learning for Flare Removal in Videos",
    shortTitle: "VidFlareNet",
    category: "Computer Vision",
    tags: ["Transformers", "Mamba", "Video"],
    summary:
      "Spatio-temporal deep learning framework for video flare removal using transformers, Mamba modules, and depth priors for consistent restoration across frames.",
    media: {
      type: "image",
      src: "/assets/img/vidflarenet.png",
      alt: "VidFlareNet video flare removal comparison",
    },
    links: [{ label: "Details", href: "/projects/vidflarenet-video-flare-removal", kind: "primary" }],
    detail: {
      overview: [
        "VidFlareNet is an early research project focused on flare removal in video sequences by explicitly modeling both spatial and temporal consistency. Developed at the Computational Imaging Lab, IIT Madras under Prof. Kaushik Mitra, it laid the foundation for later work that evolved into FlareGS.",
        "The model restores scenes corrupted by strong light sources while maintaining temporal coherence across frames.",
      ],
      sections: [
        {
          title: "Core Idea",
          bullets: [
            "Spatial structure modeled with transformer-based architectures",
            "Temporal consistency modeled with Mamba sequence modules",
            "Scene geometry guided by depth priors",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Used transformer blocks for long-range spatial dependencies",
            "Added temporal synchronization to reduce flickering",
            "Integrated depth-aware vision blocks as structural priors",
            "Framed flare removal as a video inpainting problem",
          ],
        },
        {
          title: "Key Results",
          bullets: [
            "Improved temporal consistency compared to image-based baselines",
            "Improved restoration quality through PSNR and flare-specific PSNR",
            "Reduced flickering across frames",
            "Improved downstream object detection after flare removal",
          ],
        },
      ],
      future: [
        "Improve robustness to real-world flare distributions",
        "Incorporate multi-view consistency",
        "Integrate stronger physical priors",
      ],
      stack: ["Python", "PyTorch", "Transformers", "Mamba", "Video Processing", "Depth Estimation"],
    },
  },
  {
    id: "maddpg-pytorch-implementation",
    cardNumber: 7,
    title: "MADDPG Implementation in PyTorch",
    shortTitle: "MADDPG PyTorch",
    category: "Reinforcement Learning",
    tags: ["MADDPG", "CTDE", "PyTorch"],
    summary:
      "PyTorch implementation of MADDPG for multi-agent reinforcement learning using centralized critics and decentralized actors.",
    media: {
      type: "abstract",
      alt: "Abstract multi-agent reinforcement learning visual",
    },
    links: [
      { label: "Details", href: "/projects/maddpg-pytorch-implementation", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mnm-21/MADDPG-PyTorch-Implementation", external: true },
    ],
    detail: {
      overview: [
        "This project works through a PyTorch implementation of MADDPG based on the paper Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments.",
        "It follows the Centralized Training with Decentralized Execution paradigm, where each agent has its own actor while a centralized critic uses global state and joint actions during training.",
      ],
      sections: [
        {
          title: "Key Concepts",
          bullets: [
            "Multi-agent actor-critic framework",
            "Centralized critic with decentralized actors",
            "Shared replay buffer for joint training",
            "Cooperative and competitive environment support",
          ],
        },
        {
          title: "Role",
          paragraphs: [
            "Explored and worked with the implementation to understand multi-agent reinforcement learning dynamics, training stability, and CTDE design.",
          ],
        },
      ],
      stack: ["Python", "PyTorch", "Reinforcement Learning"],
    },
  },
  {
    id: "td3-robotic-arm-manipulation",
    cardNumber: 8,
    title: "TD3 Reinforcement Learning for Robotic Arm Manipulation",
    shortTitle: "TD3 Robotic Arm Manipulation",
    category: "Robotic Manipulation",
    tags: ["TD3", "Robosuite", "Panda Arm"],
    summary:
      "TD3-based reinforcement learning for robotic manipulation, training a Panda arm in Robosuite to perform precise tasks like door opening.",
    media: {
      type: "image",
      src: "/assets/img/robot_model_Panda_isaac.png",
      alt: "Panda robotic arm simulation environment",
    },
    links: [
      { label: "Details", href: "/projects/td3-robotic-arm-manipulation", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mnm-21/Robotic_Arm_Manipulation_TD3", external: true },
    ],
    detail: {
      overview: [
        "This project implements a TD3 agent from scratch in PyTorch to control a Panda robotic arm in the Robosuite environment.",
        "The agent learns continuous control policies for manipulation tasks such as opening a door, requiring precision, stability, and coordinated motion.",
      ],
      sections: [
        {
          title: "Methodology",
          bullets: [
            "Built TD3 architecture from scratch with actor and twin critic networks",
            "Used target networks and replay buffers for stability",
            "Trained in Robosuite with continuous action spaces",
            "Tuned learning rates, batch sizes, network sizes, and discount factors",
          ],
        },
        {
          title: "Key Results",
          bullets: [
            "Learned stable control policies for robotic manipulation",
            "Executed door opening with consistent performance",
            "Improved training stability through careful tuning",
          ],
        },
      ],
      stack: ["Python", "PyTorch", "Reinforcement Learning", "Robosuite"],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.id === slug);
}
