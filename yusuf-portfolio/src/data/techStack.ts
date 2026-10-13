import {
  SiAngular,
  SiDotnet,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { TechItem } from "../types";

export const techStack: TechItem[] = [
  { name: "Angular", level: 85, category: "Frontend", icon: SiAngular, color: "#dd0031" },
  { name: "React", level: 80, category: "Frontend", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", level: 80, category: "Frontend", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", level: 85, category: "Frontend", icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind CSS", level: 80, category: "Frontend", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "HTML5 & CSS3", level: 90, category: "Frontend", icon: SiHtml5, color: "#e34f26" },

  { name: "Flutter", level: 75, category: "Mobile", icon: SiFlutter, color: "#54c5f8" },
  { name: "React Native", level: 70, category: "Mobile", icon: SiReact, color: "#61dafb" },

  { name: "ASP.NET Core & C#", level: 80, category: "Backend & API", icon: SiDotnet, color: "#7a5af8" },
  { name: "Node.js & NestJS", level: 78, category: "Backend & API", icon: SiNestjs, color: "#e0234e" },
  { name: "REST APIs & JWT", level: 85, category: "Backend & API", icon: SiJsonwebtokens, color: "#d63aff" },

  { name: "PostgreSQL & SQL", level: 80, category: "Database & Tools", icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", level: 75, category: "Database & Tools", icon: SiMongodb, color: "#47a248" },
  { name: "Git & GitHub", level: 85, category: "Database & Tools", icon: SiGit, color: "#f05032" },
  { name: "Postman", level: 80, category: "Database & Tools", icon: SiPostman, color: "#ff6c37" },
];