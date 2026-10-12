import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <section id="home" className="pt-12 pb-24 md:pt-20 md:pb-32 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            {personalInfo.tagline}
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm <br />
            <span>{personalInfo.name}.</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800/80 px-4 py-2 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{personalInfo.status}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#resume"
              className="inline-flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition duration-200 shadow-sm"
            >
              <span>View Resume</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-full text-sm font-semibold border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800/60 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] transition-all duration-500 shadow-2xl flex items-center justify-center overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-full h-full relative flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Yusuf Umer"
                  className="w-full h-full object-cover rounded-3xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};