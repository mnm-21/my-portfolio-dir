import { PROJECTS as SOURCE_PROJECTS } from './data/projects'
import type { Project } from './data/projects'

export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavLink {
  label: string
  targetId: string
}

export interface NavigationConfig {
  brandMark: string
  cvHref: string
  links: NavLink[]
}

export interface HeroConfig {
  wordmarkText: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  descriptionLine1: string
  descriptionLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface PhilosophyConfig {
  eyebrow: string
  title: string
  body: string
  rollingWords: string[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface FooterEntry {
  text: string
  href?: string
}

export interface ProjectData extends Project {
  location: string
  year: string
  image: string
  subtitle: string
  meta: ProjectMeta[]
  paragraphs: string[]
  externalLinks: FooterEntry[]
}

export interface GalleryConfig {
  sectionLabel: string
  title: string
  projects: ProjectData[]
}

export interface MediumItem {
  cn: string
  en: string
  description: string
}

export interface MediumsConfig {
  sectionLabel: string
  items: MediumItem[]
}

export interface EducationEntry {
  title: string
  institution: string
  detail: string
  minor?: string
  cgpa?: string
}

export interface EducationConfig {
  sectionLabel: string
  title: string
  entries: EducationEntry[]
}

export interface FooterConfig {
  brandName: string
  contactEmail: string
  socials: FooterEntry[]
  copyright: string
}

export interface ProjectDetailConfig {
  backLabel: string
}

const PROJECT_YEARS: Record<string, string> = {
  'phase-aware-laparoscopic-camera-control': '2025-2026',
  'flaregs-4d-flare-removal': '2024-2025',
  'myofootball-musculoskeletal-control': '2024',
  'smavnet-wind-aware-swarm': '2024',
  'multi-agent-warehouse-automation': '2024',
  'vidflarenet-video-flare-removal': '2024',
  'maddpg-pytorch-implementation': '2024',
  'td3-robotic-arm-manipulation': '2024',
}

const ABSTRACT_PROJECT_MEDIA: Record<string, string> = {
  'maddpg-pytorch-implementation': '',
}

function linkToFooterEntry(link: Project['links'][number]): FooterEntry | null {
  if (!link.href || link.label === 'Details') return null
  return { text: link.label, href: link.href }
}

function mapProject(project: Project): ProjectData {
  const stackPreview = project.detail.stack.slice(0, 3).join(', ')

  return {
    ...project,
    location: project.category,
    year: PROJECT_YEARS[project.id] ?? '',
    image: project.media.src ?? ABSTRACT_PROJECT_MEDIA[project.id] ?? '',
    subtitle: project.summary,
    meta: [
      { label: 'Domain', value: project.category },
      { label: 'Stack', value: stackPreview },
    ],
    paragraphs: project.detail.overview,
    externalLinks: project.links.map(linkToFooterEntry).filter((link): link is FooterEntry => Boolean(link)),
  }
}

export const siteConfig: SiteConfig = {
  language: 'en',
  siteTitle: 'Mayank Chandak | Portfolio',
  siteDescription: 'Portfolio for Mayank Chandak.',
}

export const navigationConfig: NavigationConfig = {
  brandMark: 'MC',
  cvHref: '/CMU_Resume.pdf',
  links: [
    { label: 'Work', targetId: 'gallery' },
    { label: 'Method', targetId: 'philosophy' },
    { label: 'Stack', targetId: 'mediums' },
    { label: 'Education', targetId: 'education' },
    { label: 'Contact', targetId: 'footer' },
  ],
}

export const heroConfig: HeroConfig = {
  wordmarkText: 'MAYANK\nCHANDAK',
  eyebrow: '',
  titleLine1: 'Building Intelligent Systems',
  titleLine2: 'for Physical Worlds',
  descriptionLine1: '',
  descriptionLine2: '',
  ctaText: '',
  ctaTargetId: 'gallery',
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: '',
  title: 'Treat autonomy as an interface between physics, uncertainty, and intent.',
  body: '',
  rollingWords: ['policy', 'vision', 'control', 'geometry', 'simulation', 'stability'],
}

export const galleryConfig: GalleryConfig = {
  sectionLabel: '',
  title: 'Featured Projects',
  projects: SOURCE_PROJECTS.map(mapProject),
}

export const mediumsConfig: MediumsConfig = {
  sectionLabel: '',
  items: [
    {
      cn: 'Reinforcement Learning',
      en: 'PPO / TD3 / MADDPG / reward design',
      description: 'Policy learning for surgical camera control, biomechanical motor control, robotic manipulation, and multi-agent coordination.',
    },
    {
      cn: 'Robotics Simulation',
      en: 'SOFA / MuJoCo / MyoSuite / Robosuite / ROS2',
      description: 'Physics-aware environments with constraints, contacts, randomized rollouts, and task-specific evaluation metrics.',
    },
    {
      cn: 'Computer Vision',
      en: 'Depth priors / restoration / multi-view geometry',
      description: 'Flare removal, temporally consistent video restoration, LiDAR-guided reconstruction, and downstream perception evaluation.',
    },
    {
      cn: 'Engineering',
      en: 'Python / PyTorch / C++ / Linux / LaTeX',
      description: 'Research code, training loops, simulation pipelines, reproducible reports, and practical tooling for fast iteration.',
    },
  ],
}

export const educationConfig: EducationConfig = {
  sectionLabel: '',
  title: 'Academic path',
  entries: [
    {
      title: "CMU MRSD '28",
      institution: 'Carnegie Mellon University',
      detail: 'Master of Science in Robotic Systems Development',
    },
    {
      title: 'B.Tech Mechanical Engineering',
      institution: 'Indian Institute of Technology Madras',
      minor: 'Minor in Artificial Intelligence and Machine Learning',
      detail: '',
      cgpa: 'CGPA 9.38 / 10',
    },
  ],
}

export const footerConfig: FooterConfig = {
  brandName: 'Mayank Chandak',
  contactEmail: 'mayank.chandak21@gmail.com',
  socials: [
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/mayank-chandak-8abb382ab/' },
    { text: 'GitHub', href: 'https://github.com/mnm-21' },
  ],
  copyright: '© 2026 Mayank Chandak. All rights reserved.',
}

export const projectDetailConfig: ProjectDetailConfig = {
  backLabel: 'Back',
}

export function getProjectById(id: string): ProjectData | undefined {
  return galleryConfig.projects.find((p) => p.id === id)
}
