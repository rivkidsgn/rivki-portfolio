import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, PortfolioData } from '../types';

interface PortfolioProps {
  data: PortfolioData;
  lang?: 'id' | 'en';
}

export default function Portfolio({ data, lang = 'id' }: PortfolioProps) {
  const isID = lang === 'id';

  // Default Projects mapping exactly to the 5 uploaded design mockups in /public/Images, plus the Bling T-Shirt Artwork
  const initialProjects: Project[] = [
    {
      id: 'proj-1',
      title: 'Ramada Encore Seminyak Bali',
      category: isID ? 'Promosi Segitiga' : 'Triangle Promotion',
      role: '',
      description: isID
        ? 'Merancang layout tiga panel (tri-fold) berdampak tinggi yang menampilkan paket minuman spesial Happy Hour, koktail beli satu gratis satu, dan paket promo BBQ grilled.'
        : 'Designed a high-impact three-panel/tri-fold layout design featuring Happy Hour drink specials, buy-one-get-one-free cocktails, and BBQ grilled promotion packages.',
      result: '',
      color: 'from-[#10b981] to-[#047857]',
      imageSeed: 'ramada-encore',
      image: '/Images/portfolio design 01.jpg',
    },
    {
      id: 'proj-2',
      title: 'Ramada Sunset Road Kuta',
      category: isID ? 'Branding Perhotelan' : 'Hospitality Branding',
      role: '',
      description: isID
        ? 'Merancang tampilan staycation promosi profesional, menu makanan spesial untuk Sandekala Restaurant, dan tata letak kampanye liburan musiman.'
        : 'Designed professional promotional staycation displays, speciality food menus for Sandekala Restaurant, and seasonal leisure campaign layouts.',
      result: '',
      color: 'from-[#f59e0b] to-[#b45309]',
      imageSeed: 'ramada-sunset',
      image: '/Images/portfolio design 02.png',
    },
    {
      id: 'proj-3',
      title: 'Best Western Premier Sunset Road',
      category: isID ? 'Branding Korporat' : 'Corporate Branding',
      role: '',
      description: isID
        ? 'Merancang materi brand terstruktur termasuk desain kampanye Earth Hour, paket romantis Hari Valentine, dan kartu ucapan General Manager regional.'
        : "Crafted structured brand materials including Earth Hour campaign designs, Valentine's Day romance package displays, and regional General Manager festive cards.",
      result: '',
      color: 'from-[#ec4899] to-[#be185d]',
      imageSeed: 'bw-premier',
      image: '/Images/portfolio design 03.png',
    },
    {
      id: 'proj-4',
      title: 'The Sintesa Jimbaran',
      category: isID ? 'Menu Musiman & Kampanye F&B' : 'F&B & Seasonal Campaigns',
      role: '',
      description: isID
        ? 'Merancang menu estetis premium untuk promosi Wine of the Month di The Barber, paket kamar liburan meriah, dan desain promosi malam tahun baru di rooftop.'
        : 'Designed premium aesthetic menus for Wine of the Month campaigns at The Barber, festive holiday room packages, and year-end rooftop social promotion designs.',
      result: '',
      color: 'from-[#6366f1] to-[#4338ca]',
      imageSeed: 'sintesa-jimbaran',
      image: '/Images/portfolio design 04.jpg',
    },
    {
      id: 'proj-5',
      title: 'Sky Garden 61 Legian',
      category: isID ? 'Desain Acara & Hiburan' : 'Event & Entertainment Design',
      role: '',
      description: isID
        ? 'Merancang poster digital yang dimanis dan enerjik untuk International DJ Series yang menampilkan artis kelas dunia beserta peta lokasi acara khusus.'
        : 'Designed high-energy, vibrant digital posters for the International DJ Series featuring world-class artists alongside custom neighborhood venue maps.',
      result: '',
      color: 'from-[#8b5cf6] to-[#6d28d9]',
      imageSeed: 'skygarden',
      image: '/Images/portfolio design 05.png',
    },
    {
      id: 'proj-6',
      title: 'Bling T-Shirt Artwork',
      category: isID ? 'Desain Pakaian' : 'Apparel Design',
      role: '',
      description: isID
        ? 'Merancang desain grafis t-shirt bergaya bling mewah yang menggabungkan teks bertekstur logam berat dengan pantulan berlian imitasi berkilau dan nuansa retro.'
        : 'Crafted a glamorous bling-style t-shirt print graphic. Merges customized heavy metal metallic-textured text with brilliant faux-diamond reflections and retro glitz details.',
      result: '',
      color: 'from-[#f43f5e] to-[#ec4899]',
      imageSeed: 'bling-tshirt',
      image: '/Images/bling t-shirt.png',
    }
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>(isID ? 'Semua' : 'All');

  // Sync active filter language changes
  useEffect(() => {
    setActiveFilter(isID ? 'Semua' : 'All');
  }, [lang]);

  const categories = isID 
    ? ['Semua', 'Branding', 'Pakaian & Merchandise', 'Hiburan']
    : ['All', 'Branding', 'Apparel & Merch', 'Entertainment'];

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
      case 'proj-6': return 'aspect-[3/4]';
      default: return 'aspect-video';
    }
  };

  const filteredProjects = initialProjects.filter(project => {
    if (activeFilter === 'All' || activeFilter === 'Semua') return true;
    if (activeFilter === 'Branding') {
      return ['proj-1', 'proj-2', 'proj-3', 'proj-4'].includes(project.id);
    }
    if (activeFilter === 'Apparel & Merch' || activeFilter === 'Pakaian & Merchandise') {
      return ['proj-6'].includes(project.id);
    }
    if (activeFilter === 'Entertainment' || activeFilter === 'Hiburan') {
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
            <span className="font-mono text-xs tracking-widest text-white/40 uppercase">
              {isID ? 'Karya Pilihan' : 'Selected Works'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white leading-none">
              {isID ? 'Studi Kasus' : 'Case Studies'}
            </h2>
          </div>
          <p className="text-sm font-mono text-white/55 font-light max-w-sm md:text-right">
            {isID ? 'Klik kartu desain apa saja untuk melihat detail lengkap secara langsung.' : 'Click any card design to view to full details instantly.'}
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
                  <div className="absolute top-3 right-3 bg-slate-900/80 border border-white/10 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" title={isID ? 'Perbesar detal' : 'Zoom in detail'}>
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

                  <p className="text-zinc-400 font-light text-xs leading-relaxed mt-0.5">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

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
                    {isID ? 'TOMBOL PANAH ← → NAVIGASI // ESC KELUAR' : 'ARROW KEYS ← → NAVIGATE // ESC CLOSE'}
                  </span>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="cursor-pointer bg-slate-900/60 hover:bg-slate-900/80 active:bg-slate-950 text-white p-2.5 rounded-full border border-white/10 transition-all flex items-center justify-center shadow-lg"
                    title={isID ? 'Tutup (Esc)' : 'Close (Esc)'}
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
                    {initialProjects[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white drop-shadow-md">
                    {initialProjects[lightboxIndex].title}
                  </h3>
                </div>
                <div className="text-left sm:text-right max-w-md bg-slate-900/35 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                  <p className="text-[10px] font-mono text-pink-400 uppercase tracking-widest mb-1 font-bold">
                    {isID ? 'Detail Proyek' : 'Project Details'}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-normal">
                    {initialProjects[lightboxIndex].description}
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
