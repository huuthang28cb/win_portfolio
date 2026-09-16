export interface ProfileData {
  name: string;
  nativeName?: string;
  avatar: string;
  headline: string;
  bio: string;
  email: string;
  location?: string;
  links: {
    github?: string;
    scholar?: string;
    linkedin?: string;
    resume?: string;
    twitter?: string;
    wechat?: string;
    contact?: string;
  };
}

export interface ExperienceItem {
  id: string;
  organization: string;
  organizationLogo?: string;
  role: string;
  period: string;
  location?: string;
  type: "work" | "education" | "research";
  description: string;
  highlights?: string[];
  techStack?: string[];
  url?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  overview: string;
  highlights: string[];
  techStack: string[];
  url?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge?: string;
  description: string;
  url?: string;
}

// Aliases for compatibility
export type AwardItem = CredentialItem;
export type PublicationItem = SolutionItem;

export interface SkillGroup {
  category: string;
  skills: string[];
  level?: string;
}

export interface ProjectSection {
  type: string;
  [key: string]: any;
}

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectArchitectureLayer {
  layer: string;
  tech: string;
  detail: string;
}

export interface ProjectGalleryItem {
  title: string;
  caption: string;
  image: string;
}

export interface ProjectData {
  title: string;
  slug: string;
  featured: boolean;
  status: string;
  year: number;
  client?: string;
  teamSize?: number;
  role: string;
  duration: string;
  category: string;
  type: string;
  thumbnail: string;
  cover: string;
  shortDescription: string;
  tags: string[];
  links?: {
    website?: string;
    github?: string;
    demo?: string;
    paper?: string;
  };
  overview?: {
    summary: string;
    background: string;
  };
  challenge?: {
    title: string;
    problem: string;
    bottlenecks?: string[];
  };
  solution?: {
    title: string;
    approach: string;
    keyInnovations?: string[];
  };
  architecture?: {
    overview: string;
    layers: ProjectArchitectureLayer[];
  };
  features?: {
    title: string;
    description: string;
    technicalHighlights?: string[];
  }[];
  metrics?: ProjectMetric[];
  gallery?: ProjectGalleryItem[];
  takeaways?: string[];
  sections?: any[];
}

export interface CategoryData {
  name: string;
  slug: string;
  description?: string;
}
