import type { IconType } from "react-icons";

export interface NavLinkItem {
  label: string;
  to: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  links?: ProjectLink[];
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type SocialName = "GitHub" | "LinkedIn";

export interface SocialLink {
  name: SocialName;
  href: string;
}

export type TechCategory =
  | "Frontend"
  | "Mobile"
  | "Backend & API"
  | "Database & Tools";

export interface TechItem {
  name: string;
  level: number;
  category: TechCategory;
  icon: IconType;
  color: string;
}