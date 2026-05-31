import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowDown, Edit2, Check } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
  isEditMode: boolean;
  onUpdate: (updated: Partial<PortfolioData>) => void;
  onScrollToPortfolio: () => void;
}

export default function Hero({ data, isEditMode, onUpdate, onScrollToPortfolio }: HeroProps) {
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

  // Build dynamic text with current inputs
  const rawHeadlineA = data.optionA.headline.replace('[Your Name]', data.name);
  const rawSubheadlineA = data.optionA.subheadline.replace('[Your City]', data.city);

  const rawHeadlineB = data.optionB.headline.replace('[Your Name]', data.name);
  const rawSubheadlineB = data.optionB.subheadline.replace('[Your Name]', data.name);

  // Parse headline to add the bold tag accent similar to the design theme if the word "bold" exists
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

  const currentHeadline = data.heroOption === 'A' ? rawHeadlineA : rawHeadlineB;
  const currentSubheadline = data.heroOption === 'A' ? rawSubheadlineA : rawSubheadlineB;

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

        {/* Headline + Sub-headline Block with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data.heroOption}
            initial={{ opacity: 0, x: data.heroOption === 'A' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: data.heroOption === 'A' ? 20 : -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="space-y-6"
          >
            {isEditMode ? (
              <div className="space-y-4 w-full glass p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-xs font-mono uppercase text-zinc-300 flex items-center gap-1.5 mb-1">
                  <Edit2 className="w-3 h-3 text-pink-400" />
                  Edit Headline (Option {data.heroOption})
                </div>
                {data.heroOption === 'A' ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      className="w-full text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white border-b border-white/20 focus:border-pink-400 outline-none pb-1 bg-transparent"
                      value={data.optionA.headline}
                      onChange={(e) => onUpdate({
                        optionA: { ...data.optionA, headline: e.target.value }
                      })}
                      placeholder="Hero headline"
                    />
                    <textarea
                      rows={2}
                      className="w-full text-base sm:text-lg text-white/70 border-b border-white/15 focus:border-pink-400/50 outline-none pb-1 bg-transparent resize-none"
                      value={data.optionA.subheadline}
                      onChange={(e) => onUpdate({
                        optionA: { ...data.optionA, subheadline: e.target.value }
                      })}
                      placeholder="Hero description"
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="text"
                      className="w-full text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white border-b border-white/20 focus:border-pink-400 outline-none pb-1 bg-transparent"
                      value={data.optionB.headline}
                      onChange={(e) => onUpdate({
                        optionB: { ...data.optionB, headline: e.target.value }
                      })}
                      placeholder="Hero headline"
                    />
                    <textarea
                      rows={2}
                      className="w-full text-base sm:text-lg text-white/70 border-b border-white/15 focus:border-pink-400/50 outline-none pb-1 bg-transparent resize-none"
                      value={data.optionB.subheadline}
                      onChange={(e) => onUpdate({
                        optionB: { ...data.optionB, subheadline: e.target.value }
                      })}
                      placeholder="Hero description"
                    />
                  </div>
                )}
                <p className="text-[11px] text-pink-400 font-mono italic">
                  Note: You can write [Your Name] and [Your City] to have them bind dynamically!
                </p>
              </div>
            ) : (
              <>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.1]">
                  {formatHeadline(currentHeadline)}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                  {currentSubheadline}
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action button triggers & options preview tool */}
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

          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 shadow-inner">
            <button
              onClick={() => onUpdate({ heroOption: 'A' })}
              className={`px-4 py-2 rounded-full cursor-pointer text-xs font-mono transition-all uppercase ${
                data.heroOption === 'A'
                  ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Option A
            </button>
            <button
              onClick={() => onUpdate({ heroOption: 'B' })}
              className={`px-4 py-2 rounded-full cursor-pointer text-xs font-mono transition-all uppercase ${
                data.heroOption === 'B'
                  ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Option B
            </button>
          </div>
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
