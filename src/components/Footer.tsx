import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, FileText, ArrowUpRight, X, CircleUser, MessageSquare } from 'lucide-react';
import { PortfolioData } from '../types';

interface FooterProps {
  data: PortfolioData;
  lang?: 'id' | 'en';
}

export default function Footer({ data, lang = 'id' }: FooterProps) {
  const isID = lang === 'id';
  const [showResume, setShowResume] = useState(false);

  const mailToUrl = `mailto:rivkidsgn@gmail.com?subject=Exploration for Creative Collaboration&body=Hi Rivki,\n\nI reviewed your designer portfolio and would love to collaborate on a design campaign...`;

  const primaryBtnClass = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20',
    amber: 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20',
    emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20',
    rose: 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20',
    slate: 'bg-white hover:bg-white/90 text-zinc-950 shadow-white/10',
  }[data.accentColor];

  const dotColorClass = {
    indigo: 'bg-indigo-400',
    amber: 'bg-amber-400',
    emerald: 'bg-emerald-400',
    rose: 'bg-rose-400',
    slate: 'bg-zinc-200',
  }[data.accentColor];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact-section" className="bg-transparent border-t border-white/5 pt-24 pb-12 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Decorative Geometric Grid lines */}
      <div className="absolute inset-0 bg-transparent opacity-[0.14] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Call to action text block */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono uppercase tracking-wider text-white/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {isID ? `Menerima Pesanan untuk ${currentYear}` : `Taking Bookings for ${currentYear}`}
          </motion.div>

          {isID ? (
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] drop-shadow-md">
              Punya ide menarik?<br />Mari kita wujudkan bersama.
            </h2>
          ) : (
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] drop-shadow-md">
              Have an exciting idea?<br />Let’s bring it to life together.
            </h2>
          )}
          
          <p className="text-white/65 font-light text-sm sm:text-base max-w-lg mx-auto">
            {isID 
              ? 'Saya selalu terbuka untuk kolaborasi baru, konsultasi kontrak, atau sekadar berbagi cerita kopi tentang desain.'
              : 'I’m always open to new collaborations, contract consultations, or just sharing a coffee story over design.'
            }
          </p>
        </div>

        {/* Buttons Action Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={mailToUrl}
            className={`cursor-pointer px-8 py-3.5 rounded-full font-medium text-sm flex items-center gap-2 justify-center transition-all shadow-md w-full sm:w-auto ${primaryBtnClass}`}
          >
            <Mail className="w-4 h-4" />
            {isID ? 'Kirim Email' : 'Email Me'}
          </a>

          <a
            href="https://wa.me/6285156461121?text=Hi%20Rivki%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4" />
            {isID ? 'Hubungi via WhatsApp' : 'WhatsApp Me'}
          </a>

          <button
            onClick={() => setShowResume(true)}
            className="cursor-pointer px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-xs"
          >
            <FileText className="w-4 h-4 text-white/70" />
            {isID ? 'Lihat Resume (PDF)' : 'View Resume (PDF)'}
          </button>
        </div>



        {/* Dynamic footer imprint and info */}
        <div className="pt-8 text-xs font-mono text-white/40 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>&copy; {currentYear} {data.name}</span>
            <span>&bull;</span>
            <span>{isID ? 'Berbasis di Denpasar, Bali' : 'Based in Denpasar, Bali'}</span>
          </div>
          <span className="font-light hover:text-white/60 transition-colors dropdown-trigger">
            {isID ? 'Desainer Kreatif | Desainer Grafis' : 'Creative Designer | Graphic Designer'}
          </span>
        </div>

      </div>

      {/* Interactive Resume View Dialog */}
      <AnimatePresence>
        {showResume && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            
            <div className="absolute inset-0" onClick={() => setShowResume(false)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative glass w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            >
              
              {/* PDF Preview Frame Header */}
              <div className="px-6 py-4 bg-slate-900/80 text-white flex items-center justify-between z-10 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-white/60" />
                  <span className="font-mono text-xs tracking-wider text-white/80">
                    {isID ? 'PRATINJAU_RESUME_RIVKI_SANDY_DESAIN.pdf' : 'RESUME_PREVIEW_RIVKI_SANDY_DESIGN.pdf'}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden md:inline font-mono text-[10px] text-zinc-400">
                    {isID ? 'Mesin Pengalaman Kreatif' : 'Creative Experience Engine'}
                  </span>
                  <button
                    onClick={() => setShowResume(false)}
                    className="cursor-pointer text-white/60 hover:text-white p-1 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Document Body */}
              <div className="p-8 md:p-12 overflow-y-auto space-y-10 bg-slate-950/45 text-white selection:bg-rose-500/30">
                
                {/* Resume Letterhead */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-white/20 pb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-display font-medium text-white tracking-tight">
                      {data.name}
                    </h3>
                    <p className="font-mono text-xs text-pink-400 mt-1 uppercase tracking-widest">
                      {isID ? 'Desainer Kreatif | Desainer Grafis' : data.major}
                    </p>
                  </div>
                  <div className="text-left md:text-right font-mono text-[11px] text-white/50 space-y-1">
                    <div>{data.city}</div>
                    <div className="text-white/80">rivkidsgn@gmail.com</div>
                    <div>+62 851 5646 1121</div>
                    <a href="https://bit.ly/portfoliorivki" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline inline-flex items-center gap-1">
                      bit.ly/portfoliorivki <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Profile Summary segment */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest text-pink-400">
                    // {isID ? 'Pernyataan Profil' : 'Profile Statement'}
                  </h4>
                  <p className="text-white/80 font-sans font-light leading-relaxed text-sm md:text-base text-justify">
                    {isID ? (
                      'Desainer Kreatif & Desainer Grafis kreatif dengan pengalaman 10+ tahun dalam desain brand, kampanye pemasaran, dan pembuatan konten digital. Ahli merancang materi visual untuk media sosial, kampanye promosi, kolateral media cetak, serta komunikasi merek di seluruh saluran digital & luring. Berpengalaman bekerja sama erat dengan tim pemasaran & penjualan untuk mendukung visibilitas merek, interaksi audiens, dan kegiatan promosi.'
                    ) : (
                      'Creative Designer & Graphic Designer with 10+ years of experience in brand design, marketing campaigns, and digital content creation. Skilled in designing visual materials for social media, promotional campaigns, print collateral, and brand communication across digital and offline platforms. Experienced working closely with marketing and sales teams to support brand visibility, audience engagement, and promotional activities.'
                    )}
                  </p>
                </div>

                {/* Two Column Layout list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                  
                  {/* Left sub-column: Experience */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest pb-2 border-b border-white/10">
                      {isID ? 'Riwayat Pekerjaan' : 'Work Experience'}
                    </h4>

                    <div className="space-y-5">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start text-sm font-semibold text-white">
                          <span className="max-w-[70%]">Graphic Designer</span>
                          <span className="text-[10px] font-mono font-normal text-zinc-400 shrink-0 text-right">04/2023 &mdash; 04/2025</span>
                        </div>
                        <p className="text-xs font-mono text-zinc-300">Ramada Encore Seminyak Bali</p>
                        <p className="text-xs text-white/75 leading-relaxed font-light mt-1 text-justify">
                          {isID 
                            ? 'Memimpin pengembangan identitas visual, materi promosi properti (pamflet, spanduk), dan aset digital. Bekerja erat dengan tim Pemasaran dan Penjualan.'
                            : 'Spearheaded visual identity developments, promotional collateral (flyers, banners), and digital assets. Collaborated closely with Marketing and Sales for targeted online rollouts.'
                          }
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-start text-sm font-semibold text-white">
                          <span className="max-w-[70%]">Graphic Designer</span>
                          <span className="text-[10px] font-mono font-normal text-zinc-400 shrink-0 text-right">04/2017 &mdash; 04/2019</span>
                        </div>
                        <p className="text-xs font-mono text-zinc-300">The Sintesa Jimbaran</p>
                        <p className="text-xs text-white/75 leading-relaxed font-light mt-1 text-justify">
                          {isID 
                            ? 'Mengembangkan materi lengkap untuk promosi Makanan & Minuman (F&B) serta kampanye musiman. Memastikan kepatuhan ketat terhadap panduan merek.'
                            : 'Developed comprehensive collateral for Food & Beverage and seasonal promotions. Ensured solid property guidelines compliance.'
                          }
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-start text-sm font-semibold text-white">
                          <span className="max-w-[70%]">Graphic Designer</span>
                          <span className="text-[10px] font-mono font-normal text-zinc-400 shrink-0 text-right">2015 &mdash; 2016</span>
                        </div>
                        <p className="text-xs font-mono text-zinc-300">Ramada Sunset Road</p>
                        <p className="text-xs text-white/75 leading-relaxed font-light mt-1 text-justify">
                          {isID 
                            ? 'Berperan penting dalam kegiatan rebranding dan perancangan materi promosi hotel.'
                            : 'Key player in rebranding activities and designing hotel collateral.'
                          }
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-start text-sm font-semibold text-white">
                          <span className="max-w-[70%]">Graphic Designer</span>
                          <span className="text-[10px] font-mono font-normal text-zinc-400 shrink-0 text-right">2014 &mdash; 2015</span>
                        </div>
                        <p className="text-xs font-mono text-zinc-300">Best Western Premier Sunset Road</p>
                        <p className="text-xs text-white/75 leading-relaxed font-light mt-1 text-justify">
                          {isID
                            ? 'Merancang elemen digital & cetak pendukung penjualan kamar, acara, serta perayaan musiman.'
                            : 'Designed digital/print materials supporting room sales, events, and seasonal promotional materials.'
                          }
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-start text-sm font-semibold text-white">
                          <span className="max-w-[70%]">Graphic Designer</span>
                          <span className="text-[10px] font-mono font-normal text-zinc-400 shrink-0 text-right">2013 &mdash; 2014</span>
                        </div>
                        <p className="text-xs font-mono text-zinc-300">Sky Garden 61 Legian</p>
                        <p className="text-xs text-white/75 leading-relaxed font-light mt-1 text-justify">
                          {isID
                            ? 'Merancang materi promosi volume besar dan poster acara untuk pusat hiburan utama di Bali.'
                            : 'Designed high-volume promotional materials and event posters for prime Bali entertainment.'
                          }
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-start text-sm font-semibold text-white">
                          <span className="max-w-[70%] text-zinc-400">{isID ? 'Riwayat Kerja Sebelumnya' : 'Earlier Work Background'}</span>
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          {isID ? (
                            <>
                              <strong>Media Kreasi Printing (2011-2013):</strong> Persiapan file prepress offset dan komposisi tata letak cetak.<br/>
                              <strong>Crossline Clothing (2008-2010):</strong> Desain grafis pakaian dan konsep merchandise visual.
                            </>
                          ) : (
                            <>
                              <strong>Media Kreasi Printing (2011-2013):</strong> Prepress offset file preparation and print layout composition. <br/>
                              <strong>Crossline Clothing (2008-2010):</strong> Apparel graphics and merchandise concepts.
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right sub-column: Education & Skills */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest pb-2 border-b border-white/10">
                        {isID ? 'Pendidikan & Sertifikasi' : 'Education & Certification'}
                      </h4>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-sm font-semibold text-white">
                            <span>{isID ? 'Pemasaran Digital Lengkap' : 'Full Stack Digital Marketing'}</span>
                            <span className="text-[10px] font-mono font-normal text-zinc-400">2022</span>
                          </div>
                          <p className="text-xs font-mono text-zinc-300">RevoU Certification</p>
                          <p className="text-xs text-white/70 font-light mt-1 text-justify">
                            {isID 
                              ? 'Pelatihan intensif dalam periklanan, SEO, analitik, dan strategi konten berkonversi tinggi.'
                              : 'Intensive training in advertising, SEO, analytics, and content strategies aligned with performance goals.'
                            }
                          </p>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-sm font-semibold text-white">
                            <span>{isID ? 'Pondok Modern Gontor' : 'Darussalam Boarding School'}</span>
                            <span className="text-[10px] font-mono font-normal text-zinc-400">1999 &mdash; 2005</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-sm font-semibold text-white">
                            <span>SDN Angkasa XII</span>
                            <span className="text-[10px] font-mono font-normal text-zinc-400">1993 &mdash; 1999</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest pb-2 border-b border-white/10">
                        {isID ? 'Kompetensi Inti' : 'Core Expertise'}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[9px]">
                        {(isID ? [
                          'Branding Perhotelan',
                          'Desain Media Sosial',
                          'Kolateral Pemasaran',
                          'Kampanye Digital',
                          'Penyuntingan Video/Foto',
                          'Komunikasi Visual',
                          'Produksi Cetak / Prepress',
                          'Konsistensi Brand',
                          'Sinergi Lintas Departemen'
                        ] : [
                          'Hospitality Branding',
                          'Social Media Design',
                          'Marketing Collateral',
                          'Digital Campaigns',
                          'Photo & Video Editing',
                          'Visual Communication',
                          'Print Production / Prepress',
                          'Brand Consistency',
                          'Cross-functional Synergy'
                        ]).map((skill) => (
                          <span key={skill} className="bg-white/5 text-white/90 border border-white/10 px-2 py-0.5 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest pb-2 border-b border-white/10">
                        {isID ? 'Alat Desain' : 'Design Tools'}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[9px]">
                        {[
                          'Adobe Photoshop',
                          'Adobe Illustrator',
                          'CorelDRAW',
                          'Canva',
                          'Capcut',
                          'AI Design Frameworks'
                        ].map((tool) => (
                          <span key={tool} className="bg-rose-500/10 text-rose-300 border border-rose-500/20 px-2 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Disclaimer / Mock Print advice */}
                <div className="pt-6 border-t-2 border-dashed border-white/10 text-center">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                     <CircleUser className="w-3.5 h-3.5 text-pink-400" />
                    {isID ? 'Kredensial CV Creative Designer | Graphic Designer Terverifikasi' : 'Verified Creative Designer | Graphic Designer CV'}
                  </div>
                </div>

              </div>

              {/* Action bar and Print/Download triggers simulation */}
              <div className="px-6 py-4 bg-slate-900/50 border-t border-white/10 flex justify-between items-center">
                <span className="text-[11px] font-mono text-white/40">
                  {isID ? 'Ukuran Berkas: 1.1 MB' : 'Document Size: 1.1 MB'}
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowResume(false)}
                    className="cursor-pointer px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-xs font-medium text-white transition"
                  >
                    {isID ? 'Tutup' : 'Close'}
                  </button>
                  <a 
                    href="https://bit.ly/portfoliorivki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-pointer px-4 py-2 text-white rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5 transition ${primaryBtnClass}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {isID ? 'Lihat PDF Portofolio' : 'View Live PDF Portfolio'}
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}
