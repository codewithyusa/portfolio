import React, { useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  activeSection: string;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenContact }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'contact') {
      onOpenContact();
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 dark:bg-[#0f172a]/85 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <a href="#home" className="text-2xl font-black tracking-tighter hover:opacity-80 transition">
          YU<span className="text-blue-600">.</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`transition-colors cursor-pointer ${
                activeSection === item.id 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition cursor-pointer"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a]">
          <div className="flex flex-col space-y-4 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};