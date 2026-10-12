import React, { useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useActiveSection } from './hooks/useActiveSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';

export default function App() {
  const sectionIds = useMemo(() => ['home', 'about', 'projects', 'services'], []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header 
          activeSection={activeSection} 
          onOpenContact={() => alert("Contact modal coming up in the next step!")} 
        />
        <main className="flex-grow">
          <Hero onOpenContact={() => alert("Contact modal coming up in the next step!")} />
          <About />
          <Projects />
          <Services />
        </main>
      </div>
    </ThemeProvider>
  );
}