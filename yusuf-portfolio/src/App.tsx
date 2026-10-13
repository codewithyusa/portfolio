import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-muted">Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
