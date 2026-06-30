import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PortfolioData } from './types';

// Import our modular subcomponents
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Footer from './components/Footer';
import DigitalMarketingPortfolio from './components/DigitalMarketingPortfolio';

const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  name: 'Rivki Sandy',
  city: 'Denpasar, Bali',
  major: 'Creative Designer | Graphic Designer',
  hobbies: 'conceptualizing premium brand identities, documenting visual stories, or exploring raw geometric proportions',
  heroOption: 'B',
  accentColor: 'indigo',
  optionA: {
    headline: 'Hi, I’m Rivki Sandy. I turn complex concepts into bold visual experiences.',
    subheadline: 'Creative Designer | Graphic Designer based in Denpasar, Bali, specializing in premium branding, promotional campaigns, and digital content creation for 10+ years.'
  },
  optionB: {
    headline: 'Making premium brands look as remarkable as they feel.',
    subheadline: 'I\'m Rivki Sandy. I help brands, venues, and growing businesses stand out through high-impact visual design, premium marketing layouts, and disciplined aesthetics.'
  }
};

export default function App() {
  const [data] = useState<PortfolioData>(DEFAULT_PORTFOLIO_DATA);
  const [lang, setLang] = useState<'id' | 'en'>('en');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor grid scroll position to reveal "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen glass-ambient-bg text-white selection:bg-white selection:text-zinc-950 font-sans antialiased pb-16 font-sans">
      
      {/* Top scroll safety bar (Micro-Indicator) */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left ${activeScrollProgressBg}`}
        style={{ scaleX }}
      />

      {/* Styled sticky glass layout navigation header */}
      <header className="sticky top-0 z-30 glass-nav px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Brand Title */}
          <button 
            onClick={() => scrollToSection('hero-section')}
            className="cursor-pointer flex items-center gap-2 group text-left shrink-0"
          >
            <div className={`w-8 h-8 rounded-lg ${activeAccentBg} flex items-center justify-center text-white font-display font-bold text-sm tracking-tight transition-transform group-hover:scale-105 shadow-inner`}>
              {data.name.substring(0, 1).toUpperCase() || 'S'}
            </div>
            <div>
              <span className="font-display font-semibold text-white text-sm tracking-tight group-hover:text-white/80 transition-colors">
                {data.name}
              </span>
              <p className="text-[10px] font-mono text-zinc-400 -mt-0.5 tracking-wider uppercase">
                {lang === 'id' ? 'Portofolio Kreatif' : 'Creative Portfolio'}
              </p>
            </div>
          </button>

          {/* Nav Jumps & Language Toggles wrapper */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
            <nav className="flex items-center gap-3 sm:gap-5 text-[9px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest shrink-0">
              <button onClick={() => scrollToSection('portfolio-section')} className="cursor-pointer hover:text-white transition-colors">
                {lang === 'id' ? 'Desain' : 'Creative'}
              </button>
              <button onClick={() => scrollToSection('marketing-section')} className="cursor-pointer hover:text-white transition-colors">
                Marketing
              </button>
              <button onClick={() => scrollToSection('about-section')} className="cursor-pointer hover:text-white transition-colors">
                {lang === 'id' ? 'Kisah' : 'Story'}
              </button>
              <button onClick={() => scrollToSection('services-section')} className="cursor-pointer hover:text-white transition-colors">
                {lang === 'id' ? 'Layanan' : 'Services'}
              </button>
              <button onClick={() => scrollToSection('contact-section')} className="cursor-pointer hover:text-white transition-colors">
                {lang === 'id' ? 'Hubungi' : 'Connect'}
              </button>
            </nav>

            {/* Premium Top Section Language Selector */}
            <div className="inline-flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1 text-[9px] font-semibold font-mono shrink-0">
              <button
                onClick={() => setLang('en')}
                className={`cursor-pointer px-2 py-0.5 rounded-full transition-all uppercase ${
                  lang === 'en'
                    ? 'bg-white text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('id')}
                className={`cursor-pointer px-2 py-0.5 rounded-full transition-all uppercase ${
                  lang === 'id'
                    ? 'bg-white text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                ID
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Main content body flow */}
      <main>
        
        {/* HERO */}
        <Hero
          data={data}
          lang={lang}
          onScrollToPortfolio={() => scrollToSection('portfolio-section')}
        />

        {/* PORTFOLIO GRID */}
        <Portfolio data={data} lang={lang} />

        {/* DIGITAL MARKETING PORTFOLIO */}
        <DigitalMarketingPortfolio lang={lang} />

        {/* ABOUT ME STORY */}
        <About data={data} lang={lang} />

        {/* SERVICES OFFERED */}
        <Services data={data} lang={lang} />

        {/* FOOTER & CALL TO ACTION */}
        <Footer data={data} lang={lang} />

      </main>

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

      {/* Premium Floating Bottom Language Selector */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        <div className="inline-flex items-center gap-1 bg-zinc-900/80 backdrop-blur-md border border-white/15 rounded-full p-1 text-[10px] font-bold font-mono shadow-2xl">
          <button
            onClick={() => setLang('id')}
            className={`cursor-pointer px-3 py-1 rounded-full transition-all uppercase ${
              lang === 'id'
                ? 'bg-white text-zinc-950 font-extrabold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLang('en')}
            className={`cursor-pointer px-3 py-1 rounded-full transition-all uppercase ${
              lang === 'en'
                ? 'bg-white text-zinc-950 font-extrabold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>

    </div>
  );
}
