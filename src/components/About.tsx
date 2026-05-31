import { motion } from 'motion/react';
import { Sparkles, Edit2, Coffee, Command, MapPin, Eye } from 'lucide-react';
import { PortfolioData } from '../types';

interface AboutProps {
  data: PortfolioData;
  isEditMode: boolean;
  onUpdate: (updated: Partial<PortfolioData>) => void;
}

export default function About({ data, isEditMode, onUpdate }: AboutProps) {
  const accentThemeClass = {
    indigo: 'text-indigo-300 bg-white/5 border-indigo-500/20',
    amber: 'text-amber-300 bg-white/5 border-amber-500/20',
    emerald: 'text-emerald-300 bg-white/5 border-emerald-500/20',
    rose: 'text-rose-300 bg-white/5 border-rose-500/20',
    slate: 'text-white bg-white/5 border-white/10',
  }[data.accentColor];

  const highlightBorderColor = {
    indigo: 'focus-within:border-indigo-400 border-white/10 bg-indigo-950/20',
    amber: 'focus-within:border-amber-400 border-white/10 bg-amber-950/20',
    emerald: 'focus-within:border-emerald-400 border-white/10 bg-emerald-950/20',
    rose: 'focus-within:border-rose-400 border-white/10 bg-rose-950/20',
    slate: 'focus-within:border-white border-white/10 bg-white/5',
  }[data.accentColor];

  return (
    <section id="about-section" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Structural Minimalist Grid Pattern */}
      <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] border-r border-b border-white/5 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[25%] h-[25%] border-l border-t border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Big Statement & Custom Decorative Interactive Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-widest text-white/40 uppercase">My Philosophy</span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white leading-[1.15] drop-shadow-sm">
                Design with heart, strategy with soul.
              </h2>
            </div>

            {/* Profile/Studio Abstract Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass p-6 rounded-2xl relative shadow-md overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-white/10 to-transparent blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-white text-zinc-950 flex items-center justify-center font-display font-medium text-lg">
                  {data.name.substring(0, 2).toUpperCase() || 'DS'}
                </div>
                <div>
                  <div className="font-medium text-white text-base">{data.name}</div>
                  <div className="text-xs font-mono text-white/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    {data.city}
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-mono">Specialization:</span>
                  <span className="font-medium text-white/80">{data.major}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-mono">Approach:</span>
                  <span className="font-medium text-white/80">Human-Centric & Interactive</span>
                </div>
                <div className="flex justify-between items-start text-xs">
                  <span className="text-white/40 font-mono shrink-0">Inspiration source:</span>
                  <span className="font-medium text-white/85 text-right pl-4 line-clamp-1">{data.hobbies}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Body Text & Direct Editorial Narrative */}
          <div className="lg:col-span-7 space-y-10 leading-relaxed text-white/85 text-base sm:text-lg">
            
            {isEditMode ? (
              <div className={`space-y-6 p-6 rounded-2xl border transition-all ${highlightBorderColor}`}>
                <div className="text-xs font-mono uppercase text-zinc-300 flex items-center gap-1.5 pb-2 border-b border-white/10">
                  <Edit2 className="w-3.5 h-3.5 text-pink-400" />
                  Customize Biography Assets
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-white/50">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/15 font-sans text-sm focus:border-white outline-none text-white" 
                      value={data.name} 
                      onChange={(e) => onUpdate({ name: e.target.value })}
                      placeholder="e.g. Rifki Sandy"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-white/50">Location / City</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/15 font-sans text-sm focus:border-white outline-none text-white" 
                      value={data.city} 
                      onChange={(e) => onUpdate({ city: e.target.value })}
                      placeholder="e.g. Jakarta, Indonesia"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-white/50">Major / Professional Discipline</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/15 font-sans text-sm focus:border-white outline-none text-white" 
                    value={data.major} 
                    onChange={(e) => onUpdate({ major: e.target.value })}
                    placeholder="e.g. Visual Communication Design"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-white/50">Creative Inspirations / Hobbies</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/15 font-sans text-sm focus:border-white outline-none text-white" 
                    value={data.hobbies} 
                    onChange={(e) => onUpdate({ hobbies: e.target.value })}
                    placeholder="e.g. hunting for good coffee or exploring art exhibitions"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-white/80 font-light text-justify">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Hello! I am a creative designer who believes that design is not just about aesthetics, but about <span className="font-medium text-white underline decoration-white/30 decoration-2 underline-offset-4">solving systems and problems</span>. 
                  With a background in <span className="font-semibold text-white bg-white/10 border border-white/10 px-1.5 py-0.5 rounded">{data.major}</span>, I focus on creating a fine balance between high functional clarity and rewarding visual surprises.
                </p>
                <p className="leading-relaxed">
                  I love immaculate clean typography, fresh unexpected color palettes, and the micro-details that so often go unnoticed. To me, every project is a playground of possibilities to formulate and tell a unique, deep brand narrative.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-5 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-start gap-3.5">
                    <Sparkles className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono uppercase text-pink-300 font-bold tracking-wider">Strategic Marketing Edge</p>
                      <p className="text-sm font-sans text-white/70 leading-relaxed font-light">
                        Certified in <span className="text-white font-medium">Digital Marketing at RevoU (2022)</span>. I combine visual aesthetics with user behaviors and conversion analytics to design assets that perform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl flex items-start gap-3.5">
                    <Coffee className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider">Inspiration & Fuel</p>
                      <p className="text-sm font-sans text-white/70 leading-relaxed font-light">
                        When I'm not carefully matching type layouts or tuning geometric proportions, you can probably find me <span className="text-white font-medium">{data.hobbies}</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Signature Metrics or Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-1 text-left">
                <div className="text-2xl sm:text-3xl font-display font-medium text-white">10+ Yrs</div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest">Design Experience</div>
              </div>
              <div className="space-y-1 text-left">
                <div className="text-2xl sm:text-3xl font-display font-medium text-white">7+ Prime</div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest">Hotels & Venues</div>
              </div>
              <div className="space-y-1 text-left">
                <div className="text-2xl sm:text-3xl font-display font-medium text-white">100%</div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest">Brand Alignment</div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
