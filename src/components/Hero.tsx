import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
  onScrollToPortfolio: () => void;
}

export default function Hero({ data, onScrollToPortfolio }: HeroProps) {
  const activeColorClass = {
    indigo: 'text-indigo-300 bg-white/5 border-indigo-500/30 hover:bg-white/10',
    amber: 'text-amber-300 bg-white/5 border-amber-500/30 hover:bg-white/10',
    emerald: 'text-emerald-300 bg-white/5 border-emerald-500/30 hover:bg-white/10',
    rose: 'text-rose-300 bg-white/5 border-rose-500/30 hover:bg-white/10',
    slate: 'text-white bg-white/5 border-white/15 hover:bg-white/10',
  }[data.accentColor];

  const dotColorClass = {
    indigo: 'bg-indigo-400',
    amber: 'bg-amber-400',
    emerald: 'bg-emerald-400',
    rose: 'bg-rose-400',
    slate: 'bg-zinc-200',
  }[data.accentColor];

  // Option B is mandatory and hardcoded now as requested ("tampilkan hanya option B")
  const rawHeadlineB = data.optionB.headline.replace('[Your Name]', data.name);
  const rawSubheadlineB = data.optionB.subheadline.replace('[Your Name]', data.name);

  const formatHeadline = (text: string) => {
    if (text.includes('bold')) {
      const parts = text.split('bold');
      return (
        <>
          {parts[0]}
          <span className="text-pink-400 font-extrabold drop-shadow-[0_0_15px_rgba(244,114,182,0.3)]">bold</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section id="hero-section" className="relative min-h-[90vh] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 py-16 overflow-hidden bg-transparent">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] opacity-25 mix-blend-screen pointer-events-none transition-colors duration-1000 animate-pulse"
        style={{
          backgroundColor: data.accentColor === 'indigo' ? '#4f46e5' :
                           data.accentColor === 'amber' ? '#f59e0b' :
                           data.accentColor === 'emerald' ? '#10b981' :
                           data.accentColor === 'rose' ? '#f43f5e' : '#3f3f46'
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Designer Status Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono tracking-wider uppercase mb-8 backdrop-blur-md bg-white/5 transition-all"
        >
          <span className={`w-2 h-2 rounded-full ${dotColorClass} animate-pulse`} />
          <span className="text-zinc-300">Available for visual stories</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-200 font-medium">{data.city}</span>
        </motion.div>

        {/* Headline + Sub-headline Block */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.1]">
            {formatHeadline(rawHeadlineB)}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
            {rawSubheadlineB}
          </p>
        </div>

        {/* Action button triggers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-4 items-center"
        >
          <button
            onClick={onScrollToPortfolio}
            className={`cursor-pointer px-6 py-3.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all duration-300 border border-white/15 shadow-md ${activeColorClass}`}
          >
            Explore Projects
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* Floating abstract decorative shape representing premium Swiss design */}
      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end gap-2 text-right pointer-events-none">
        <div className="w-16 h-[2px] bg-white/10" />
        <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">Swiss Precision Grid System v1.2</span>
      </div>
    </section>
  );
}
