/**
 * Project data and types.
 */
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
    tags: ["RL", "Surgical Robotics", "SOFA", "PPO", "IROS 2026"],
    summary:
      "A phase-aware reinforcement learning framework for autonomous laparoscopic camera control, submitted to IROS 2026. The policy adapts centering, zoom, and motion objectives dynamically across surgical phases, outperforming both analytic heuristics and phase-blind RL baselines.",
    media: {
      type: "video",
      src: "/assets/video/laparoscopic_cam_view.mp4",
      alt: "Looping laparoscopic camera simulation view",
    },
    links: [
      { label: "Details", href: "/projects/phase-aware-laparoscopic-camera-control", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mnm-21/Phase_Aware_ACC", external: true },
      { label: "Report", href: "/project_report.pdf", external: true },
    ],
    detail: {
      overview: [
        "Robotic-assisted laparoscopic surgery still relies on a human assistant (or a static mechanical arm) to operate the endoscopic camera. This introduces latency, fatigue-induced drift, and increased cognitive load on the surgeon. Existing autonomous approaches are reactive: they respond to current error using visual servoing or fixed geometric objectives, with no awareness of what phase the procedure is in.",
        "This project develops the first phase-aware reinforcement learning framework for continuous 4-DOF laparoscopic camera control, submitted as a full paper to IEEE/RSJ IROS 2026. The policy is conditioned on an explicit surgical phase signal and learned inside a custom physics-based SOFA simulation of a laparoscopic cholecystectomy, with deformable tissue, multi-instrument interaction, and stochastic human-like instrument noise.",
      ],
      sections: [
        {
          title: "The Core Insight",
          paragraphs: [
            "A camera policy optimized for the Grasp phase, where all attention belongs on the grasping forceps, is the wrong policy for the Touch phase, where the cautery hook and the dissection target must be jointly framed. Rather than learning one generic tracking policy, this framework conditions the agent on the current procedural phase (Grasp, Lift, Touch), letting it adapt its centering targets, zoom preference, and motion smoothness objectives dynamically.",
          ],
        },
        {
          title: "System Design",
          bullets: [
            "4-DOF pivotized endoscope modeled under the RCM (Remote Center of Motion) kinematic constraint, exactly as in real laparoscopic platforms",
            "Physics-based SOFA simulation extending the LapGym framework with deformable gallbladder, articulated instruments, and FEM-based collision modeling",
            "Observation space: RGB-D visual input, instrument and camera velocity cues, and an explicit one-hot phase signal",
            "Phase-conditioned dense reward combining centering accuracy, zoom quality, motion jitter, and collision penalties, with phase-specific target weights that shift as the procedure progresses",
            "Stochastic human-like noise model (correlated drift + high-frequency tremor) injected into instrument motion during training for robust generalization",
            "PPO (Stable Baselines3) with dual-camera rendering: a fixed overhead view for scripted tool logic, and the pivotized endoscope for the RL agent",
          ],
        },
        {
          title: "Results",
          paragraphs: [
            "Evaluated over 50 stochastic episodes against a phase-blind RL ablation and a weighted analytic heuristic baseline with privileged ground-truth geometric access.",
          ],
          bullets: [
            "Phase-Aware RL: centering 0.59, visibility 0.99, jitter 0.34 (best across all metrics)",
            "40% improvement in centering over the oracle heuristic (0.59 vs. 0.42), despite the heuristic having perfect 3D pose knowledge",
            "67% reduction in motion jitter vs. the phase-blind RL baseline (0.34 vs. 1.02)",
            "In the Touch phase (the hardest), Phase-Aware RL achieves the highest cauter centering (0.584), a multi-target task the reactive heuristic fundamentally cannot handle",
            "Low variance (±0.05) across episodes due to implicit temporal filtering learned from the jitter penalty",
          ],
        },
        {
          title: "Key Takeaways",
          bullets: [
            "Phase context is more valuable than perfect geometric knowledge: the heuristic had ground-truth 3D poses and still lost on every aggregate metric",
            "Dense, cinematographic reward design (centering + zoom + jitter) is essential; binary task-completion rewards cannot capture continuous visual quality",
            "The RCM constraint and deformable tissue simulation are necessary for results that could realistically transfer to a physical platform",
          ],
        },
      ],
      future: [
        "Integrate real surgical video for domain adaptation",
        "Extend to multi-agent coordination between the camera and surgical tools",
        "Incorporate vision-language models for higher-level procedural guidance",
        "Validate on physical robotic platforms",
      ],
      stack: ["Python", "PyTorch", "PPO (Stable Baselines3)", "SOFA Framework", "LapGym", "Gymnasium", "Reinforcement Learning"],
    },
  },
  {
    id: "flaregs-4d-flare-removal",
    cardNumber: 2,
    title: "FlareGS: 4D Flare Removal using Gaussian Splatting for Urban Scenes",
    shortTitle: "FlareGS",
    category: "Computational Imaging",
    tags: ["Gaussian Splatting", "LiDAR", "UFormer", "ICCVW 2025"],
    summary:
      "The first systematic framework for flare removal in autonomous driving video, combining physics-based synthetic data, LiDAR depth priors, and multi-view Gaussian Splatting. Published at ICCV 2025 Workshop (joint first author). Achieves best-in-class Masked PSNR and enables clear gains on downstream segmentation and detection.",
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
        "Autonomous vehicles routinely encounter flare artifacts (halos, ghosting, diffraction spikes, and scattering patterns from rain or condensation) that degrade camera imagery and directly impair object detection, segmentation, and optical flow estimation. Despite their practical severity, these reflective and weather-induced flares are largely ignored by prior restoration literature, which focuses on simpler, spatially bounded single-image cases.",
        "FlareGS is the first framework to address flare removal systematically in multi-camera driving video. It combines a physics-based synthetic data pipeline, LiDAR-derived depth as a flare-invariant structural prior, and multi-view Gaussian Splatting for temporally consistent scene reconstruction. Published at the ICCV 2025 Workshop on Autonomous Driving (2COOOL), joint first author.",
      ],
      sections: [
        {
          title: "The Problem with Prior Work",
          paragraphs: [
            "Single-image restoration models (UFormer, GNFR) process each frame independently, with no temporal or geometric consistency across views. They fail when flare covers a large portion of the image, which is precisely the case that matters most for autonomous perception. No prior method exploits the multi-camera rigs and LiDAR sensors that are standard on platforms like Waymo.",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Physics-based synthetic data pipeline: circular halos modeled via Fraunhofer diffraction, weather-induced scattering via Mie theory with log-normal droplet size distributions, dynamic PSFs, chromatic aberrations via fractional Fourier transforms, and star-shaped diffraction spikes via Bézier-curved aperture blades",
            "LiDAR depth as a flare-invariant prior: sparse LiDAR point clouds are interpolated into dense, camera-aligned depth maps; depth is unaffected by optical distortions and provides reliable structural guidance for localizing and separating flare from scene content",
            "Depth-guided UFormer: a transformer-based encoder-decoder that fuses RGB (flare-corrupted) and depth (clean) inputs to predict flare-free images and flare components, trained with L1, perceptual, adversarial, and feature-matching losses",
            "4D Gaussian Splatting: the cleaned frames are used to reconstruct a dynamic scene representation using anisotropic Gaussians, enabling novel view synthesis at arbitrary viewpoints and timestamps while enforcing multi-view photometric consistency",
            "Evaluation benchmark: 1,000-frame dataset combining real Waymo urban driving videos with synthetic flares stratified across M1 (mild), M2 (moderate), and M3 (severe) intensity levels, augmented with Flare7K++ real flare textures",
          ],
        },
        {
          title: "Results",
          paragraphs: [
            "Compared against UFormer (single-frame), ProPainter (video inpainting), and GNFR (mask-based removal) across all three intensity levels.",
          ],
          bullets: [
            "FlareGS achieves best Masked PSNR across all datasets: 24.86 (M1), 24.83 (M2), 24.46 (M3), consistently outperforming all baselines on structurally degraded regions",
            "On M2 and M3 (high flare intensity), FlareGS outperforms UFormer on Masked PSNR by 1.26 and 1.85 dB respectively, where multi-view synthesis provides the critical advantage",
            "GNFR degrades severely under large or inaccurate flare masks, a practical failure mode FlareGS avoids by design",
            "Downstream segmentation with YOLOv12: flare-corrupted images cause missed vehicle detections and inaccurate masks; FlareGS-restored images recover both detection and segmentation quality",
            "Qualitative results: circular halos, star-shaped diffraction spikes, and raindrop scattering are removed without degrading street lights or fine scene geometry",
          ],
        },
        {
          title: "Key Takeaways",
          bullets: [
            "Multi-view geometry is the critical missing ingredient: single-image methods cannot recover regions that are entirely corrupted in one frame but visible from an adjacent camera",
            "Depth is a uniquely powerful prior because it is optically invariant; flare does not affect LiDAR range measurements, so depth provides a clean structural scaffold regardless of flare severity",
            "Physics-guided synthetic data generation produces training distributions that transfer to real-world Waymo footage without paired ground truth",
          ],
        },
      ],
      future: [
        "Reduce LiDAR dependence by learning monocular depth priors for camera-only platforms",
        "Improve robustness when flare covers more than 90% of the image",
        "Extend to real-time inference for embedded autonomous systems",
        "Generalize beyond flare to other optical artifacts (fog, water droplets, sensor bloom)",
      ],
      stack: ["Python", "PyTorch", "UFormer", "4D Gaussian Splatting", "LiDAR", "Multi-view Geometry", "Fraunhofer Diffraction Modeling"],
      publication: "ICCV 2025 Workshop on Autonomous Driving (2COOOL), joint first author. DOI: 10.1109/ICCVW69036.2025.00092",
    },
  },
  {
    id: "myofootball-musculoskeletal-control",
    cardNumber: 3,
    title: "MyoFootball: Reinforcement Learning for Musculoskeletal Control",
    shortTitle: "MyoFootball",
    category: "Biomechanical RL",
    tags: ["MyoSuite", "MuJoCo", "Reward Shaping", "Motor Control"],
    summary:
      "Trained a biomechanical musculoskeletal leg model to walk, stabilize, and score goals in a custom football task, achieving 80% goal-scoring accuracy across randomized ball placements after 100+ reward design iterations.",
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
        "Most robotic locomotion research uses simplified joint-torque actuators. MyoFootball works in a fundamentally harder setting: a high-dimensional musculoskeletal model where actions are muscle activation signals subject to tendon constraints and non-linear biomechanics. The goal is to train this model to walk toward a ball and kick it into a goal, a sports-inspired task that requires coordinated multi-phase motor control.",
        "Completed independently in under four weeks while managing active research and coursework, inspired by Prof. Vikash Kumar's work at CMU.",
      ],
      sections: [
        {
          title: "Environment Design",
          bullets: [
            "Custom extension of MyoSuite's MyoLeg musculoskeletal model in MuJoCo with ball dynamics, contact mechanics, and goal-scoring logic",
            "Ball position, goal distance, initial pose, and physical properties randomized each episode for robust generalization",
            "Action space: muscle activation signals across the full biomechanical leg model, rather than simplified joint torques",
          ],
        },
        {
          title: "Reward Engineering",
          paragraphs: [
            "Reward design was the central challenge and the majority of the project's effort. Over 100 iterations were required to produce stable, non-exploited behaviors.",
          ],
          bullets: [
            "Multi-stage reward pipeline: gait stability → ball approach → impact precision → post-kick balance",
            "Carefully mitigated failure modes including leg locking, ball dragging, and reward exploitation (e.g. spinning in place near the ball)",
            "Temporal phasing: rewards were gated to activate only when prerequisites were met, preventing the agent from short-circuiting earlier stages",
          ],
        },
        {
          title: "Results",
          bullets: [
            "80% goal-scoring accuracy across randomized ball placements",
            "Emergent coordinated locomotion: the agent developed a distinct approach gait, planting stride, and kicking motion without explicit motion capture supervision",
            "Stable post-kick balance recovery, preventing falls after contact",
            "Robust across varied initial conditions validated through extensive stochastic rollouts",
          ],
        },
      ],
      future: [
        "Extend to full-body humanoid control for two-legged kicking",
        "Multi-agent scenarios: defender vs. attacker",
        "Improve sample efficiency via model-based RL",
        "Transfer insights toward assistive or prosthetic device control",
      ],
      stack: ["Python", "MyoSuite", "MuJoCo", "Reinforcement Learning", "Reward Shaping"],
    },
  },
  {
    id: "smavnet-wind-aware-swarm",
    cardNumber: 4,
    title: "SMAVNET Reproduction and Wind-Aware Swarm Stabilization",
    shortTitle: "SMAVNET Wind-Aware Swarms",
    category: "Swarm Robotics",
    tags: ["Swarm Robotics", "Network Dynamics", "MAVs", "Simulation"],
    summary:
      "Reproduced the ant-inspired SMAVNET positionless MAV swarming algorithm and extended it with a wind-aware replacement mechanism, reducing spatial drift by ~45% while preserving fully decentralized behavior.",
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
        "SMAVNET (Hauert et al.) is a biologically-inspired algorithm where micro air vehicles self-organize into communication relay networks using only local virtual pheromone signals and no positional information, mimicking army ant foraging behavior. This course project (ME5253: Network Dynamics) reproduces the original algorithm in full, then addresses its core failure mode under real-world conditions: wind-induced spatial drift that destabilizes the relay chain.",
      ],
      sections: [
        {
          title: "Algorithm Reproduction",
          bullets: [
            "Implemented ant and node role dynamics: agents probabilistically explore or become stationary communication nodes based on pheromone gradients",
            "Reproduced pheromone update, hop-based routing, and evaporation-driven retraction mechanisms",
            "Validated against the paper's connectivity and coverage metrics across swarm sizes from 5 to 20 MAVs",
          ],
        },
        {
          title: "Wind-Aware Extension",
          paragraphs: [
            "Under simulated wind (sinusoidal variation + stochastic noise), stationary nodes drift from their relay positions, eventually breaking the communication chain. The fix had to preserve the algorithm's key property: fully decentralized, positionless operation.",
          ],
          bullets: [
            "Introduced a local node aging mechanism: nodes track how long they have been stationary and initiate role-swapping when drift thresholds are exceeded",
            "Dynamic local correction: displaced nodes recruit nearby exploring agents to take over the relay role before disconnection occurs",
            "No global position information required; correction is triggered entirely by local pheromone degradation and neighbor count",
          ],
        },
        {
          title: "Results",
          bullets: [
            "~45% reduction in mean spatial drift under continuous wind disturbance",
            "Stable communication structures maintained across all tested swarm sizes",
            "Near-linear scalability: replacement dynamics scale gracefully with swarm size without coordination overhead",
            "Preserved fully decentralized and positionless behavior throughout",
          ],
        },
      ],
      future: [
        "Integrate realistic communication drop and packet loss models",
        "Extend to 3D swarm dynamics for aerial deployment",
        "Validate on hardware or high-fidelity physics simulators",
        "Adaptive replacement rate based on real-time network quality metrics",
      ],
      stack: ["Python", "Simulation", "Swarm Robotics", "Network Dynamics", "Pheromone-based Control"],
    },
  },
  {
    id: "multi-agent-warehouse-automation",
    cardNumber: 5,
    title: "Multi-Agent Warehouse Automation with Reinforcement Learning and Planning",
    shortTitle: "Multi-Agent Warehouse Automation",
    category: "Multi-Agent Systems",
    tags: ["MADDPG", "PPO", "A*", "CTDE"],
    summary:
      "Multi-agent warehouse system combining centralized RL with A* path planning for dynamic task allocation, collision avoidance, and scalable coordination across agents.",
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
        "A multi-agent warehouse automation system where agents must collaboratively pick, transport, and deliver packages in a grid environment with dynamic shelf activations, navigation constraints, and collision penalties, built for ME3302: Automation in Manufacturing at IIT Madras.",
        "The project compares several coordination strategies, from classical A* with proximity-based task assignment to learned CTDE policies, to understand the trade-offs between planning efficiency and adaptive coordination.",
      ],
      sections: [
        {
          title: "System Design",
          bullets: [
            "Custom grid-based multi-agent simulator with dynamic shelf activations and realistic pickup/delivery constraints",
            "Centralized task assignment policy paired with decentralized agents operating on local observations (CTDE paradigm)",
            "Shaped reward optimizing task completion rate, idle time, and collision frequency jointly",
          ],
        },
        {
          title: "Methodology",
          bullets: [
            "Compared proximity-based task assignment (heuristic) with implicit RL-based allocation (learned)",
            "A* path planning with dynamic replanning on collision or shelf state change",
            "Explored MADDPG, centralized PPO, and hierarchical RL architectures",
          ],
        },
        {
          title: "Results",
          bullets: [
            "Learned policies reduced collisions and improved agent utilization vs. the A* baseline",
            "Reduced total distance traveled through better implicit coordination",
            "Identified key trade-off: greedy task assignment is fast but causes traffic congestion; learned allocation is slower to train but scales better with agent count",
          ],
        },
      ],
      future: [
        "Hybrid RL + planning with explicit communication channels between agents",
        "Curriculum learning to stabilize training in larger environments",
        "Benchmark against real warehouse scheduling systems",
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
    tags: ["Transformers", "Mamba", "Video Restoration", "Depth"],
    summary:
      "Spatio-temporal video restoration framework combining transformers, Mamba temporal modules, and depth-guided attention for temporally consistent flare removal, outperforming Restormer and UFormer on PSNR (20.03 vs. 17.89) and downstream detection.",
    media: {
      type: "image",
      src: "/assets/img/vidflarenet.png",
      alt: "VidFlareNet video flare removal comparison",
    },
    links: [{ label: "Details", href: "/projects/vidflarenet-video-flare-removal", kind: "primary" }],
    detail: {
      overview: [
        "VidFlareNet is an early research project at the Computational Imaging Lab, IIT Madras (PI: Prof. Kaushik Mitra) that addressed a fundamental gap in video flare removal: existing methods process frames independently, producing flickering and temporally incoherent results. VidFlareNet treats flare removal as a video inpainting problem with explicit temporal modeling, laying the foundation for what later became FlareGS.",
      ],
      sections: [
        {
          title: "Architecture",
          bullets: [
            "Spatial transformer blocks for long-range spatial dependency modeling within each frame",
            "Mamba temporal modules for efficient sequence-level consistency across frames without the quadratic cost of full attention",
            "Depth-reweighting attention module: depth priors guide the network to focus restoration effort on flare-affected regions, recovering occluded content more accurately than RGB-only approaches",
            "Trained on a 2,600-video dataset built by injecting dynamic Flare-R artifacts into YouTubeVOS for large-scale supervised training",
          ],
        },
        {
          title: "Results",
          bullets: [
            "PSNR 20.03 vs. 17.89 for state-of-the-art Restormer (a 12% improvement)",
            "Short-Term Loss 8.24 vs. 9.12 for UFormer, indicating better temporal consistency",
            "Improved downstream object detection and optical flow quality after flare removal",
            "Significantly reduced inter-frame flickering compared to image-based baselines",
          ],
        },
        {
          title: "Role in the Research Arc",
          paragraphs: [
            "VidFlareNet established the depth-prior and temporal modeling ideas that were later extended in FlareGS with multi-view Gaussian Splatting and a physics-based synthetic data pipeline. The lessons learned here, particularly around the importance of structural priors and the limitations of 2D-only approaches, directly motivated the multi-view architecture of FlareGS.",
          ],
        },
      ],
      future: [
        "Incorporate multi-view consistency (addressed in FlareGS)",
        "Improve robustness to real-world flare distributions beyond Flare-R",
        "Integrate stronger physical priors into the architecture",
      ],
      stack: ["Python", "PyTorch", "Transformers", "Mamba", "Depth Estimation", "Video Processing"],
    },
  },
  {
    id: "maddpg-pytorch-implementation",
    cardNumber: 7,
    title: "MADDPG Implementation in PyTorch",
    shortTitle: "MADDPG PyTorch",
    category: "Reinforcement Learning",
    tags: ["MADDPG", "CTDE", "PyTorch", "Multi-Agent"],
    summary:
      "Clean PyTorch implementation of MADDPG from scratch, with centralized critics, decentralized actors, and a shared replay buffer, for cooperative-competitive multi-agent environments.",
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
        "A from-scratch PyTorch implementation of MADDPG (Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments, Lowe et al. 2017), following the Centralized Training with Decentralized Execution paradigm. Built to develop deep familiarity with multi-agent RL dynamics before applying MADDPG in the warehouse automation project.",
      ],
      sections: [
        {
          title: "Implementation Details",
          bullets: [
            "Independent actor networks per agent conditioned on local observations",
            "Centralized critic networks with access to global state and joint actions during training",
            "Shared multi-agent replay buffer with uniform sampling",
            "Target network synchronization with soft updates for training stability",
            "Adaptive exploration noise for robust policy discovery in partially observable environments",
          ],
        },
        {
          title: "What This Taught",
          paragraphs: [
            "Building MADDPG from scratch clarified the practical challenges of multi-agent RL: non-stationarity from the perspective of each agent, the sensitivity of centralized critics to joint action dimensionality, and the importance of replay buffer design for diverse experience coverage. These insights directly informed the reward design and architecture choices in the warehouse automation project.",
          ],
        },
      ],
      stack: ["Python", "PyTorch", "Reinforcement Learning", "Multi-Agent RL"],
    },
  },
  {
    id: "td3-robotic-arm-manipulation",
    cardNumber: 8,
    title: "TD3 Reinforcement Learning for Robotic Arm Manipulation",
    shortTitle: "TD3 Robotic Arm Manipulation",
    category: "Robotic Manipulation",
    tags: ["TD3", "Robosuite", "Panda Arm", "PyTorch"],
    summary:
      "From-scratch TD3 implementation in PyTorch to control a Panda robotic arm in Robosuite for continuous manipulation tasks including door opening, with full actor-critic architecture, twin critics, and replay buffer.",
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
        "A from-scratch PyTorch implementation of TD3 (Twin Delayed Deep Deterministic Policy Gradient) applied to the Robosuite Panda arm environment. The agent learns continuous control policies for manipulation tasks requiring high precision, with the primary task being door opening, which demands coordinated approach, grasp, and push motions.",
      ],
      sections: [
        {
          title: "Implementation",
          bullets: [
            "Actor and twin critic networks built from scratch with target network copies",
            "Experience replay buffer with uniform sampling",
            "Delayed policy updates and target policy smoothing for training stability",
            "Trained in Robosuite's continuous action space with the Panda arm",
          ],
        },
        {
          title: "Hyperparameter Study",
          paragraphs: [
            "Extensive tuning across learning rates, batch sizes, network layer sizes, and discount factors, informed by TD3's theoretical motivations (overestimation bias reduction, policy update frequency). This systematic study revealed strong sensitivities in the learning rate and update delay ratio that are often underreported in implementations.",
          ],
        },
        {
          title: "Results",
          bullets: [
            "Learned stable door-opening policies with consistent success rates",
            "Demonstrated smooth, coordinated arm motion without oscillation",
            "Improved training stability through careful tuning of twin critic architecture and delayed updates",
          ],
        },
      ],
      stack: ["Python", "PyTorch", "Reinforcement Learning", "Robosuite", "TD3"],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.id === slug);
}