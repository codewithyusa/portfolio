import { Code, Smartphone, Server, LucideIcon } from 'lucide-react';

export interface PersonalInfo {
  name: string;
  fullName: string;
  tagline: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  status: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Yusuf Umer",
    fullName: "Yusuf Umer Abduljewad",
    tagline: "FULL-STACK | MOBILE | .NET",
    role: "Full-Stack & Mobile Developer",
    location: "Addis Ababa, Ethiopia",
    email: "yusufumer26@gmail.com",
    bio: "A full-stack and mobile developer from Addis Ababa. I build secure, fast web and mobile apps with Angular, ASP.NET Core, React, NestJS and Flutter.",
    status: "Available for remote and freelance work",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  } as PersonalInfo,
  services: [
    {
      id: "web-dev",
      icon: Code,
      title: "Web Development",
      description: "Custom web applications using React, Angular, and ASP.NET Core built with security, high performance, and accessibility."
    },
    {
      id: "mobile-dev",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform iOS & Android mobile solutions with Flutter and React Native, giving smooth native performance."
    },
    {
      id: "backend-dev",
      icon: Server,
      title: "Backend Architecture",
      description: "Scalable REST APIs, GraphQL, and microservices architecture crafted with C# .NET, NestJS, and clean database structures."
    }
  ] as Service[],
  projects: [
    {
      id: 1,
      title: "E-Commerce Management System",
      category: "Full-Stack",
      tech: ["ASP.NET Core", "React", "PostgreSQL", "Tailwind CSS"],
      description: "Complete module structure for dynamic shopping cart, online payment, and analytics dashboard."
    },
    {
      id: 2,
      title: "Cross-Platform Health Tracker",
      category: "Mobile",
      tech: ["Flutter", "NestJS", "MongoDB"],
      description: "Secure mobile platform monitoring fitness indicators and patient consultation scheduling."
    },
    {
      id: 3,
      title: "Recruitment Identity Portal",
      category: "Frontend",
      tech: ["React", "TypeScript", "Tailwind"],
      description: "High-performance brand portal featuring automated workflows and candidate management."
    }
  ] as Project[]
};