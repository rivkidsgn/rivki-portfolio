import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Zap, TrendingUp, ZoomIn, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { Project, PortfolioData } from '../types';

interface PortfolioProps {
  data: PortfolioData;
}

export default function Portfolio({ data }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Default Projects mapping exactly to the 5 uploaded design mockups in /public/Images
  const initialProjects: Project[] = [
    {
      id: 'proj-1',
      title: 'Ramada Encore Seminyak Bali',
      category: 'Hospitality Branding',
      role: 'Graphic Designer',
      description: 'Spearheaded the development of the hotel’s visual identity by designing high-quality promotional materials, including happy hour flyer panels, cocktail menus, and digital BBQ event designs.',
      result: 'Maintained full compliance with corporate brand guidelines and produced engaging visual content for Instagram to improve digital audience engagement.',
      color: 'from-[#10b981] to-[#047857]',
      imageSeed: 'ramada-encore',
      image: '/Images/portfolio design 01.jpg',
    },
    {
      id: 'proj-2',
      title: 'Ramada Sunset Road Kuta',
      category: 'Corporate Rebranding',
      role: 'Graphic Designer',
      description: 'Played a key role in the execution of the corporate rebranding initiative, creating promotional room stays, holiday campaign spreads, and Sandekala Restaurant speciality menu layouts.',
      result: 'Redesigned high-impact signage and print guidelines, aligning the physical property aesthetic with new modern parent corporate templates.',
      color: 'from-[#f59e0b] to-[#b45309]',
      imageSeed: 'ramada-sunset',
      image: '/Images/portfolio design 02.png',
    },
    {
      id: 'proj-3',
      title: 'Best Western Premier Sunset Road',
      category: 'Hospitality Campaigns',
      role: 'Graphic Designer',
      description: 'Created high-impact holiday seasonal campaigns, Valentine\'s Day romance packages, and Best Western Bali Cluster General Manager greeting materials.',
      result: 'Provided consistent marketing materials that boosted group bookings and room occupancy across targeted festive quarters.',
      color: 'from-[#ec4899] to-[#be185d]',
      imageSeed: 'bw-premier',
      image: '/Images/portfolio design 03.png',
    },
    {
      id: 'proj-4',
      title: 'The Sintesa Jimbaran',
      category: 'F&B & Seasonal Campaigns',
      role: 'Graphic Designer',
      description: 'Developed comprehensive marketing collateral and visual assets for seasonal promotions, Sintesa\'s Getaway stay packages, and Wine of the Month campaigns at The Barber venue.',
      result: 'Ensured consistent brand identity across both print and digital media, reinforcing the property’s premium positioning and luxury visual standards.',
      color: 'from-[#6366f1] to-[#4338ca]',
      imageSeed: 'sintesa-jimbaran',
      image: '/Images/portfolio design 04.jpg',
    },
    {
      id: 'proj-5',
      title: 'Sky Garden 61 Legian',
      category: 'Event & Entertainment Design',
      role: 'Graphic Designer',
      description: 'Designed high-volume promotional materials, international DJ series event posters, and digital social media maps in a fast-paced environment for one of Bali’s leading entertainment venues.',
      result: 'Increased weekly foot traffic and social media visibility via bold, high-contrast digital illustrations and typography suites.',
      color: 'from-[#8b5cf6] to-[#6d28d9]',
      imageSeed: 'skygarden',
      image: '/Images/portfolio design 05.png',
    }
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Hospitality', 'Branding', 'Entertainment'];

  // Keyboard navigation for full detail project lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + initialProjects.length) % initialProjects.length : null));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % initialProjects.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, initialProjects.length]);

  const getAspectClass = (id: string) => {
    switch (id) {
      case 'proj-1': return 'aspect-[3/4.2]';
      case 'proj-2': return 'aspect-[4/3]';
      case 'proj-3': return 'aspect-video';
      case 'proj-4': return 'aspect-[4/3]';
      case 'proj-5': return 'aspect-square';
      default: return 'aspect-video';
    }
  };

  const filteredProjects = initialProjects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Hospitality') {
      return ['proj-1', 'proj-2', 'proj-3', 'proj-4'].includes(project.id);
    }
    if (activeFilter === 'Branding') {
      return ['proj-1', 'proj-2'].includes(project.id);
    }
    if (activeFilter === 'Entertainment') {
      return ['proj-5'].includes(project.id);
    }
    return true;
  });

  const badgeColorClass = {
    indigo: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    rose: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    slate: 'bg-white/10 text-white border-white/25',
  }[data.accentColor];

  const primaryBtnClass = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    amber: 'bg-amber-500 hover:bg-amber-600 text-white',
    emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    rose: 'bg-rose-500 hover:bg-rose-600 text-white',
    slate: 'bg-white text-zinc-950 hover:bg-white/95',
  }[data.accentColor];

  return (
    <section id="portfolio-section" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs tracking-widest text-white/40 uppercase">Selected Works</span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white leading-none">
              Case Studies
            </h2>
          </div>
          <p className="text-sm font-mono text-white/55 font-light max-w-sm md:text-right">
            Click any card design to view to full details instantly.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center pb-4 select-none">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-full sm:gap-3 bg-zinc-950/45 p-1.5 rounded-2xl border border-white/5 animate-fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`cursor-pointer px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 capitalize ${
                  activeFilter === cat
                    ? 'bg-[#1a1a1a] text-pink-400 border border-pink-500/30 shadow-md shadow-pink-500/5'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid - Masonry Staggered columns exactly like the attachment */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredProjects.map((project) => {
            const originalIdx = initialProjects.findIndex((p) => p.id === project.id);
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                onClick={() => setLightboxIndex(originalIdx)}
                className="break-inside-avoid shadow-xl block mb-6 bg-[#121214] border border-zinc-800/80 hover:border-zinc-700/80 rounded-2xl p-4 flex flex-col gap-3.5 group cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/5"
              >
                {/* Image Frame with Framed padding inside the card */}
                <div className="relative overflow-hidden rounded-xl bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${getAspectClass(project.id)} object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Indicator Badge on hover */}
                  <div className="absolute top-3 right-3 bg-slate-900/80 border border-white/10 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" title="Zoom in detail">
                    <ZoomIn className="w-3.5 h-3.5 text-pink-400" />
                  </div>
                </div>

                {/* Content detail - titles and descriptions always readable */}
                <div className="flex flex-col gap-1.5 px-1 pb-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase text-pink-400 font-semibold tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      0{originalIdx + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-medium text-base sm:text-lg group-hover:text-pink-400 transition-colors tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 font-light text-xs leading-relaxed mt-0.5 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-zinc-800/60">
                    <span className="text-[10px] font-mono text-zinc-500 italic truncate max-w-[120px]">
                      {project.role}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="cursor-pointer bg-zinc-800 hover:bg-pink-600 px-3 py-1.5 rounded-lg text-[10px] font-mono text-zinc-300 hover:text-white border border-zinc-800 transition-all flex items-center gap-1 shrink-0"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Metrics
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Modal Case Study Section */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              
              {/* Overlay background close click */}
              <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative glass w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl border border-white/10"
              >
                {/* Header visual block with image - clicking zooms in */}
                <div 
                  onClick={() => {
                    const idx = initialProjects.findIndex(p => p.id === selectedProject.id);
                    if (idx !== -1) setLightboxIndex(idx);
                  }}
                  className="relative aspect-16/9 w-full bg-slate-950 overflow-hidden border-b border-white/10 cursor-zoom-in group/img"
                  title="Click to view full screen"
                >
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-75 group-hover/img:scale-[1.03] group-hover/img:opacity-85 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />
                  
                  {/* Inline indicator badge */}
                  <div className="absolute top-6 left-6 cursor-pointer bg-slate-950/70 hover:bg-slate-900/80 text-white px-3 py-1.5 text-[10px] font-mono rounded-full transition-all border border-white/10 flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                    Expand Design Detail
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className="absolute top-6 right-6 cursor-pointer bg-slate-950/70 hover:bg-slate-900/80 text-white p-2 rounded-full transition-all border border-white/10 focus:outline-none z-10"
                    aria-label="Close Case Study"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-6 left-8 right-8 space-y-1.5">
                    <span className="font-mono text-xs tracking-widest text-pink-400 uppercase font-semibold">
                      Case Study
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white drop-shadow-md">
                      {selectedProject.title} — {selectedProject.category}
                    </h3>
                  </div>
                </div>

                {/* Details Narrative contents */}
                <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto font-sans bg-slate-900/45">
                  
                  {/* Scope Details using active design verbs */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-white/55 tracking-wider flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-pink-400" />
                      Role & Execution
                    </h4>
                    <p className="text-white/85 leading-relaxed font-light text-base">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Positive Client Outcomes and Results Section matching guideline instructions */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3.5">
                    <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      Result & Impact Analysis
                    </h4>
                    <p className="text-white/80 leading-relaxed font-light text-sm italic">
                      "{selectedProject.result}"
                    </p>
                  </div>

                  {/* Highlights section to add strategic polish */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                      <div className="text-xs font-mono text-white/40 uppercase">Process</div>
                      <div className="font-display font-medium text-white/90 text-sm mt-1">Research-Led Strategy</div>
                    </div>
                    <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                      <div className="text-xs font-mono text-white/40 uppercase">Execution</div>
                      <div className="font-display font-medium text-white/90 text-sm mt-1">Immaculate Geometric Grid</div>
                    </div>
                  </div>

                  {/* Closing buttons */}
                  <div className="pt-6 border-t border-white/10 flex justify-end">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className={`cursor-pointer px-5 py-2.5 rounded-full font-medium text-xs transition-colors focus:ring-2 focus:ring-offset-2 ${primaryBtnClass}`}
                    >
                      Done Reading
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Full-fidelity Interactive Lightbox Gallery Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/98 backdrop-blur-xl select-none">
              
              {/* Overlay background black space double clicks or clicks to close */}
              <div 
                className="absolute inset-0 cursor-zoom-out" 
                onClick={() => setLightboxIndex(null)} 
              />

              {/* Navigation Top Banner (Actions and Indexes indicator) */}
              <div className="absolute top-0 inset-x-0 h-20 px-6 sm:px-12 flex items-center justify-between z-10 bg-gradient-to-b from-slate-950/80 to-transparent">
                <div className="font-mono text-xs text-white/50 bg-slate-900/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                  <span className="text-pink-400 font-semibold">{lightboxIndex + 1}</span>
                  <span className="opacity-40"> / </span>
                  <span>{initialProjects.length}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="hidden md:inline font-mono text-[10px] text-zinc-500 tracking-wider">
                    ARROW KEYS &larr; &rarr; NAVIGATE // ESC CLOSE
                  </span>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="cursor-pointer bg-slate-900/60 hover:bg-slate-900/80 active:bg-slate-950 text-white p-2.5 rounded-full border border-white/10 transition-all flex items-center justify-center shadow-lg"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Lightbox Canvas with Slides */}
              <div className="relative w-full max-w-6xl px-4 sm:px-12 flex items-center justify-between gap-4 z-10">
                
                {/* Previous Button */}
                <button
                  onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + initialProjects.length) % initialProjects.length : null))}
                  className="cursor-pointer p-3 rounded-full bg-slate-900/60 hover:bg-pink-600 border border-white/10 text-white/80 hover:text-white transition-all shrink-0 backdrop-blur-md"
                  aria-label="Previous Design"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Mockup Container */}
                <div className="relative flex-1 flex flex-col items-center justify-center max-h-[75vh]">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className="relative max-h-[70vh] w-auto max-w-full flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img
                      src={initialProjects[lightboxIndex].image}
                      alt={initialProjects[lightboxIndex].title}
                      className="max-h-[70vh] w-auto max-w-full object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % initialProjects.length : null))}
                  className="cursor-pointer p-3 rounded-full bg-slate-900/60 hover:bg-pink-600 border border-white/10 text-white/80 hover:text-white transition-all shrink-0 backdrop-blur-md"
                  aria-label="Next Design"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </div>

              {/* Elegant Bottom description strip */}
              <div className="absolute bottom-0 inset-x-0 py-8 px-6 sm:px-12 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 z-10 text-white">
                <div className="space-y-1">
                  <span className="font-mono text-pink-400 text-xs tracking-widest uppercase font-semibold">
                    {initialProjects[lightboxIndex].role} &bull; {initialProjects[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white drop-shadow-md">
                    {initialProjects[lightboxIndex].title}
                  </h3>
                </div>
                <div className="text-left sm:text-right max-w-md bg-slate-900/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                  <p className="text-[10px] font-mono text-pink-400 uppercase tracking-widest mb-1 font-bold">Key Performance Outcome</p>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light italic leading-normal">
                    "{initialProjects[lightboxIndex].result}"
                  </p>
                </div>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
