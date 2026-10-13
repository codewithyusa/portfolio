import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "tms",
    label: "TMS",
    title: "Training Management System",
    description:
      "Manages training schedules, participants and progress tracking, with JWT login, role-based access and a REST API.",
    tags: ["React", "NestJS", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #1b2a6b, #1a0f3d)",
    github: "https://github.com/your-username/tms",
  },
  {
    id: "shop",
    label: "SHOP",
    title: "E-Commerce Platform",
    description:
      "Product listings, cart, checkout and payment flow, with inventory management and user accounts.",
    tags: ["Angular", "ASP.NET Core", "MongoDB"],
    gradient: "linear-gradient(135deg, #3aa876, #1f4e79)",
    github: "https://github.com/your-username/shop",
  },
  {
    id: "rail",
    label: "RAIL",
    title: "Railway Tracker",
    description: "A real-time app to monitor train locations and schedules.",
    tags: ["Real-time", "Full-stack"],
    gradient: "linear-gradient(135deg, #a85a28, #66701f)",
    github: "https://github.com/your-username/rail",
  },
  {
    id: "capstone",
    label: "A+.N",
    title: "Angular and .NET Capstone",
    description:
      "Capstone project built with an Angular front end and an ASP.NET Core API.",
    tags: ["Angular", ".NET", "SQL"],
    gradient: "linear-gradient(135deg, #7b1fa2, #6a1b5a)",
    github: "https://github.com/your-username/capstone",
  },
  {
    id: "odin",
    label: "ODIN",
    title: "The Odin Project Apps",
    description:
      "A collection of apps and exercises built while completing The Odin Project curriculum.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #a88a22, #4f7a1f)",
    github: "https://github.com/your-username/odin",
  },
];