import { motion } from 'motion/react';
import { Sparkles, Coffee, MapPin } from 'lucide-react';
import { PortfolioData } from '../types';

interface AboutProps {
  data: PortfolioData;
  lang?: 'id' | 'en';
}

export default function About({ data, lang = 'id' }: AboutProps) {
  const isID = lang === 'id';

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
              <span className="font-mono text-xs tracking-widest text-white/40 uppercase">
                {isID ? 'Filosofi Saya' : 'My Philosophy'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white leading-[1.15] drop-shadow-sm">
                {isID ? 'Desain dengan hati, strategi dengan jiwa.' : 'Design with heart, strategy with soul.'}
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
                  <span className="text-white/40 font-mono">{isID ? 'Spesialisasi:' : 'Specialization:'}</span>
                  <span className="font-medium text-white/80">{data.major}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-mono">{isID ? 'Pendekatan:' : 'Approach:'}</span>
                  <span className="font-medium text-white/80">{isID ? 'Berorientasi Manusia & Interaktif' : 'Human-Centric & Interactive'}</span>
                </div>
                <div className="flex justify-between items-start text-xs">
                  <span className="text-white/40 font-mono shrink-0">{isID ? 'Sumber inspirasi:' : 'Inspiration source:'}</span>
                  <span className="font-medium text-white/85 text-right pl-4 line-clamp-1">{isID ? 'merumuskan identitas brand premium, mengabadikan visual kisah nyata, serta mengeksplorasi proporsi geometri murni' : data.hobbies}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Body Text & Direct Editorial Narrative */}
          <div className="lg:col-span-7 space-y-10 leading-relaxed text-white/85 text-base sm:text-lg">
            <div className="space-y-6 text-white/80 font-light text-justify">
              <p className="text-lg sm:text-xl leading-relaxed">
                {isID ? (
                  <>
                    Halo! Saya seorang desainer kreatif yang percaya bahwa desain bukan sekadar tentang estetika rupa, namun perihal <span className="font-medium text-white underline decoration-white/30 decoration-2 underline-offset-4">memecahkan sistem dan problematik</span>. Berperan penuh sebagai <span className="font-semibold text-white bg-white/10 border border-white/10 px-1.5 py-0.5 rounded">{data.major}</span>, saya berfokus tinggi melahirkan titik timbang sempurna antara kejelasan fungsi yang mutlak serta kejutan visual yang memuaskan.
                  </>
                ) : (
                  <>
                    Hello! I am a creative designer who believes that design is not just about aesthetics, but about <span className="font-medium text-white underline decoration-white/30 decoration-2 underline-offset-4">solving systems and problems</span>. Working dynamically as a <span className="font-semibold text-white bg-white/10 border border-white/10 px-1.5 py-0.5 rounded">{data.major}</span>, I focus on creating a fine balance between high functional clarity and rewarding visual surprises.
                  </>
                )}
              </p>
              <p className="leading-relaxed">
                {isID ? (
                  <>
                    Saya menyukai penataan huruf tipografi bersih murni, paduan palet warna segar yang tak terduga, serta keunikan detail mikro yang sering kali luput ditangkap mata biasa. Bagi saya, setiap proyek adalah lapangan bernilai tinggi untuk memetakan serta menyuarakan narasi brand tersendiri secara otentik dan mendalam.
                  </>
                ) : (
                  <>
                    I love immaculate clean typography, fresh unexpected color palettes, and the micro-details that so often go unnoticed. To me, every project is a playground of possibilities to formulate and tell a unique, deep brand narrative.
                  </>
                )}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-start gap-3.5">
                  <Sparkles className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase text-pink-300 font-bold tracking-wider">
                      {isID ? 'Ketajaman Pemasaran Strategis' : 'Strategic Marketing Edge'}
                    </p>
                    <p className="text-sm font-sans text-white/70 leading-relaxed font-light">
                      {isID ? (
                        <>
                          Tersertifikasi dalam <span className="text-white font-medium">Digital Marketing di RevoU (2022)</span>. Saya menyelaraskan estetika visual dengan psikologi pengguna serta analitik konversi untuk merancang aset digital yang bernilai bisnis optimal.
                        </>
                      ) : (
                        <>
                          Certified in <span className="text-white font-medium">Digital Marketing at RevoU (2022)</span>. I combine visual aesthetics with user behaviors and conversion analytics to design assets that perform.
                        </>
                      )}
                    </p>
                  </div>
                </div>
                
                <div className="p-5 bg-white/5 border border-white/10 rounded-xl flex items-start gap-3.5">
                  <Coffee className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider">
                      {isID ? 'Bahan Bakar & Inspirasi' : 'Inspiration & Fuel'}
                    </p>
                    <p className="text-sm font-sans text-white/70 leading-relaxed font-light">
                      {isID ? (
                        <>
                          Di luar aktivitas merancang susunan tata huruf yang presisi atau menala proporsi geometris geometris, Anda biasanya akan menemukan saya sedang <span className="text-white font-medium">berdiskusi ide identitas brand premium, merekam kisah visual lewat dokumentasi lensa, atau menelusuri seni rupa minimalis</span>.
                        </>
                      ) : (
                        <>
                          When I'm not carefully matching type layouts or tuning geometric proportions, you can probably find me <span className="text-white font-medium">{data.hobbies}</span>.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Metrics or Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-1 text-left">
                <div className="text-2xl sm:text-3xl font-display font-medium text-white">10+ Yrs</div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {isID ? 'Pengalaman Desain' : 'Design Experience'}
                </div>
              </div>
              <div className="space-y-1 text-left">
                <div className="text-2xl sm:text-3xl font-display font-medium text-white">7+ Prime</div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {isID ? 'Klien & Brand Utama' : 'Clients & Brands'}
                </div>
              </div>
              <div className="space-y-1 text-left">
                <div className="text-2xl sm:text-3xl font-display font-medium text-white">100%</div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {isID ? 'Keselarasan Brand' : 'Brand Alignment'}
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
