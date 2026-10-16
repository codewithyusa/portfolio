import { GITHUB_URL } from "./socials";
import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "tms",
    label: "TMS",
    title: "Training Management System",
    description:
      "Manages training schedules, participants and progress tracking, with JWT login, role-based access and a REST API.",
    tags: ["Angular", "ASP.NET Core", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #1b2a6b, #1a0f3d)",
    github: GITHUB_URL,
  },
  {
    id: "shop-dotnet",
    label: "SHOP",
    title: "E-Commerce Platform (.NET)",
    description:
      "Product listings, cart, checkout and payment flow, with inventory management and user accounts.",
    tags: ["Angular", "ASP.NET Core", "MongoDB"],
    gradient: "linear-gradient(135deg, #3aa876, #1f4e79)",
    github: GITHUB_URL,
  },
  {
    id: "shop-mern",
    label: "MERN",
    title: "E-Commerce Platform (MERN)",
    description:
      "A full-stack clothing store with role-based access (customer, manager, admin), cart, favorites, orders, local payments, an admin dashboard and Redis caching.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "linear-gradient(135deg, #c026d3, #4338ca)",
    image: "/projects/mern-shop.png",
    live: "https://ecommerce-ebon-one-21.vercel.app",
    // add github: "https://github.com/codewithyusa/ecommerce" once the repo is public
  },
  {
    id: "rail",
    label: "RAIL",
    title: "Railway Tracker",
    description: "A real-time app to monitor train locations and schedules.",
    tags: ["Real-time", "Full-stack"],
    gradient: "linear-gradient(135deg, #a85a28, #66701f)",
    github: GITHUB_URL,
  },
  {
    id: "odin",
    label: "ODIN",
    title: "The Odin Project Apps",
    description:
      "A collection of apps and exercises built while completing The Odin Project curriculum.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #a88a22, #4f7a1f)",
    github: GITHUB_URL,
  },
];