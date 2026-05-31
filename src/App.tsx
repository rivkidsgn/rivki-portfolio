import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Sparkles, Edit3, Eye, Check, ExternalLink, ArrowUp } from 'lucide-react';
import { PortfolioData } from './types';

// Import our modular subcomponents
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Footer from './components/Footer';
import ControlPanel from './components/ControlPanel';

const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  name: 'Rivki Sandy',
  city: 'Denpasar, Bali',
  major: 'Creative Designer',
  hobbies: 'conceptualizing premium hospitality brands, documenting travel stories, or exploring artisan coffee',
  heroOption: 'A',
  accentColor: 'indigo',
  optionA: {
    headline: 'Hi, I’m [Your Name]. I turn hospitality concepts into bold visual experiences.',
    subheadline: 'Creative Designer based in [Your City], specializing in premium branding, promotional campaigns, and digital content creation for 10+ years.'
  },
  optionB: {
    headline: 'Making hospitality brands look as premium as they feel.',
    subheadline: 'I\'m [Your Name]. I help hotels, resorts, and entertainment venues thrive through high-impact design and disciplined visuals.'
  }
};

export default function App() {
  // Read state from localStorage to ensure durability across edits, falling back to default
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const stored = localStorage.getItem('rifki_portfolio_data_v3');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read portfolio state from localStorage', e);
    }
    return DEFAULT_PORTFOLIO_DATA;
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize state changes with localStorage
  useEffect(() => {
    localStorage.setItem('rifki_portfolio_data_v3', JSON.stringify(data));
  }, [data]);

  // Monitor grid scroll position to reveal "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUpdate = (updatedFields: Partial<PortfolioData>) => {
    setData((prev) => ({ ...prev, ...updatedFields }));
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all customized values to original template structures?')) {
      setData(DEFAULT_PORTFOLIO_DATA);
      setIsEditMode(false);
    }
  };

  // Modern scroll progress indicator for premium readers
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Navigation anchoring
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeAccentText = {
    indigo: 'text-indigo-600',
    amber: 'text-amber-500',
    emerald: 'text-emerald-500',
    rose: 'text-rose-500',
    slate: 'text-zinc-950',
  }[data.accentColor];

  const activeAccentBg = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    amber: 'bg-amber-500 hover:bg-amber-600 focus:ring-amber-500',
    emerald: 'bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500',
    rose: 'bg-rose-500 hover:bg-rose-600 focus:ring-rose-500',
    slate: 'bg-zinc-900 hover:bg-zinc-800 focus:ring-zinc-950',
  }[data.accentColor];

  const activeScrollProgressBg = {
    indigo: 'bg-indigo-600',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    rose: 'bg-rose-500',
    slate: 'bg-zinc-900',
  }[data.accentColor];

  return (
    <div className="min-h-screen glass-ambient-bg text-white selection:bg-white selection:text-zinc-950 font-sans antialiased pb-16">
      
      {/* Top scroll safety bar (Micro-Indicator) */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left ${activeScrollProgressBg}`}
        style={{ scaleX }}
      />

      {/* Styled sticky glass layout navigation header */}
      <header className="sticky top-0 z-30 glass-nav px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <button 
            onClick={() => scrollToSection('hero-section')}
            className="cursor-pointer flex items-center gap-2 group text-left"
          >
            <div className={`w-8 h-8 rounded-lg ${activeAccentBg} flex items-center justify-center text-white font-display font-bold text-sm tracking-tight transition-transform group-hover:scale-105 shadow-inner`}>
              {data.name.substring(0, 1).toUpperCase() || 'S'}
            </div>
            <div>
              <span className="font-display font-semibold text-white text-sm tracking-tight group-hover:text-white/80 transition-colors">
                {data.name}
              </span>
              <p className="text-[10px] font-mono text-zinc-400 -mt-0.5 tracking-wider uppercase">
                Creative Portfolio
              </p>
            </div>
          </button>

          {/* Nav Jumps */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <button onClick={() => scrollToSection('portfolio-section')} className="cursor-pointer hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('about-section')} className="cursor-pointer hover:text-white transition-colors">
              Story
            </button>
            <button onClick={() => scrollToSection('services-section')} className="cursor-pointer hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact-section')} className="cursor-pointer hover:text-white transition-colors">
              Connect
            </button>
          </nav>

          {/* Navigation Action controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono border tracking-wider transition-all shadow-xs ${
                isEditMode
                  ? 'bg-white text-zinc-950 border-white'
                  : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
              }`}
            >
              {isEditMode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600 font-bold" />
                  <span className="hidden sm:inline">Editing Active</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5 text-white/70" />
                  <span className="hidden sm:inline">Edit Content</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Main content body flow */}
      <main>
        
        {/* HERO */}
        <Hero
          data={data}
          isEditMode={isEditMode}
          onUpdate={handleUpdate}
          onScrollToPortfolio={() => scrollToSection('portfolio-section')}
        />

        {/* PORTFOLIO GRID */}
        <Portfolio data={data} />

        {/* ABOUT ME STORY */}
        <About
          data={data}
          isEditMode={isEditMode}
          onUpdate={handleUpdate}
        />

        {/* SERVICES OFFERED */}
        <Services data={data} />

        {/* FOOTER & CALL TO ACTION */}
        <Footer data={data} />

      </main>

      {/* Floating Toolbar control unit */}
      <ControlPanel
        data={data}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
        onUpdate={handleUpdate}
        onReset={handleReset}
      />

      {/* Mini Back to Top anchor link */}
      {showScrollTop && (
        <button
          onClick={() => scrollToSection('hero-section')}
          className="cursor-pointer fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full glass text-white/80 shadow-md flex items-center justify-center hover:bg-white/10 hover:text-white transition-all border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
