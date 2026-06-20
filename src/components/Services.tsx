import { motion } from 'motion/react';
import { Fingerprint, MonitorSmartphone, BookOpen, Compass, ChevronRight } from 'lucide-react';
import { PortfolioData, Service } from '../types';

interface ServicesProps {
  data: PortfolioData;
  lang?: 'id' | 'en';
}

export default function Services({ data, lang = 'id' }: ServicesProps) {
  const isID = lang === 'id';

  const services: Service[] = isID ? [
    {
      id: 'srv-1',
      title: 'Desain Brand & Strategi',
      description: 'Dari sistem identitas visual berkonsep tinggi dan tata letak perhotelan premium hingga panduan komprehensif dan aset fisik yang konsisten.',
      details: ['Sistem Identitas Visual', 'Panduan Brand Premium', 'Aset Pemasaran Korporat']
    },
    {
      id: 'srv-2',
      title: 'Kampanye Digital',
      description: 'Desain konten dinamis untuk saluran sosial, peningkatan interaksi aset Instagram, dan dukungan pemasaran digital yang terperinci.',
      details: ['Tata Letak Instagram', 'Aset Promosi Digital', 'Halaman Arahan Target']
    },
    {
      id: 'srv-3',
      title: 'Tata Letak Cetak & Prepress',
      description: 'Persiapan file prepress offset komersial, komposisi matematis presisi, dan tata letak cetak offline untuk brosur dan baliho.',
      details: ['Penyelarasan Prepress', 'Spesifikasi Offset Percetakan', 'Aset Papan Penanda Khusus']
    },
    {
      id: 'srv-4',
      title: 'Pembuatan Konten Kreatif',
      description: 'Penyuntingan video multi-platform artistik, produksi video reels promosi, serta dokumentasi visual yang mendukung tujuan penjualan.',
      details: ['Penyuntingan Video', 'Dokumentasi Acara', 'Sinergi Lintas Departemen']
    }
  ] : [
    {
      id: 'srv-1',
      title: 'Brand Design & Strategy',
      description: 'From high-concept visual identity systems and premium layouts to comprehensive guidelines and cohesive physical assets.',
      details: ['Visual Identity Systems', 'Premium Brand Guidelines', 'Corporate Assets']
    },
    {
      id: 'srv-2',
      title: 'Digital Campaigns',
      description: 'Dynamic content design for social channels, highly engaging Instagram assets, and target digital marketing support.',
      details: ['Instagram Layouts', 'Digital Marketing Assets', 'Targeted Web Campaigns']
    },
    {
      id: 'srv-3',
      title: 'Print & Prepress Layout',
      description: 'Prepress file preparations, precise mathematical compositions, and offline offset print layouts for magazines and banners.',
      details: ['Prepress Alignment', 'Offset Printing Specs', 'Bespoke Physical Signages']
    },
    {
      id: 'srv-4',
      title: 'Creative Content Creation',
      description: 'Artistic multi-platform video editing, promotional reels, and event documentation matching sales and marketing goals.',
      details: ['Video Editing', 'Event Documentation', 'Cross-functional Synergy']
    }
  ];

  const serviceIcons = {
    'srv-1': Fingerprint,
    'srv-2': MonitorSmartphone,
    'srv-3': BookOpen,
    'srv-4': Compass
  };

  const accentColorBorder = {
    indigo: 'hover:border-indigo-400/45 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]',
    amber: 'hover:border-amber-400/45 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    emerald: 'hover:border-emerald-400/45 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    rose: 'hover:border-rose-400/45 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]',
    slate: 'hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]',
  }[data.accentColor];

  const accentColorText = {
    indigo: 'text-indigo-400',
    amber: 'text-amber-400',
    emerald: 'text-emerald-400',
    rose: 'text-rose-400',
    slate: 'text-white',
  }[data.accentColor];

  return (
    <section id="services-section" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/4 w-[25vw] h-[25vw] bg-white/5 rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-4 max-w-xl">
          <span className="font-mono text-xs tracking-widest text-white/40 uppercase">
            {isID ? 'Kemampuan' : 'Capabilities'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white animate-fade-in">
            {isID ? 'Layanan & Keahlian Utama' : 'What I Bring to the Table'}
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
            {isID
              ? 'Saya membantu bisnis berkembang dan menceritakan narasi melalui strategi yang bersih, pemikiran taktis, warna-warna berani, dan eksekusi modern yang disiplin.'
              : 'I help companies grow and tell narratives through clean strategy, strategic thinking, bold colors, and disciplined modern execution.'
            }
          </p>
        </div>

        {/* Services Cards Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`glass p-8 rounded-2xl transition-all duration-300 relative overflow-hidden group shadow-sm ${accentColorBorder}`}
              >
                {/* Accent Background Highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8 group-hover:scale-125 transition-transform" />

                {/* Counter label */}
                <div className="text-xs font-mono text-white/40 font-medium mb-8 flex justify-between items-center">
                  <span>0{idx + 1} // SERVICES</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-white/60" />
                </div>

                {/* Icon display */}
                <div className="mb-6 flex">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 shadow-xs text-white/80 transition-all group-hover:bg-white group-hover:text-zinc-950`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Content text */}
                <div className="space-y-3">
                  <h3 className="font-display font-medium text-white text-xl tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-sans text-white/70 font-light leading-relaxed min-h-[50px]">
                    {service.description}
                  </p>
                </div>

                {/* Mini features checklist */}
                <ul className="mt-8 pt-6 border-t border-white/10 space-y-2">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-[11px] font-mono text-white/50 font-light flex items-center gap-1.5">
                      <span className={`w-1 h-1 rounded-full ${accentColorText}`} />
                      {detail}
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
