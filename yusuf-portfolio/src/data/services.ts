import type { ProcessStep, Service } from "../types";

export const services: Service[] = [
  {
    title: "Full-stack web apps",
    description:
      "Complete web applications from the database to the screen: management systems, dashboards and business tools.",
    tags: ["React", "Angular", "Node.js", "ASP.NET Core"],
  },
  {
    title: "Mobile apps",
    description:
      "Android and iOS apps from a single codebase, with the same login and data as your website.",
    tags: ["Flutter", "React Native"],
  },
  {
    title: "APIs and backend",
    description:
      "Secure, well-organized APIs with login, user roles and permissions, and a database designed for your data.",
    tags: ["NestJS", "ASP.NET Core", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Online shops",
    description:
      "Product listings, cart, checkout, payment flow and inventory management, ready for real customers.",
    tags: ["Angular", ".NET", "MongoDB"],
  },
  {
    title: "Fixes and new features",
    description:
      "Bug fixes, new features and clean-up for a website or app you already have.",
    tags: ["Bug fixes", "New features", "Git & GitHub"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Tell me your idea",
    description: "Send me a message about what you need and when you need it.",
  },
  {
    title: "Plan and quote",
    description: "I reply with a clear plan, a timeline and a price before any work starts.",
  },
  {
    title: "Build and update",
    description: "I build it step by step and show you progress along the way.",
  },
  {
    title: "Deliver and support",
    description: "You get the finished work, the source code and help with questions after.",
  },
];