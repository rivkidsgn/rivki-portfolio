import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Wrench, Globe, Mail, Phone, MapPin, Laptop, Flame, FileText, CheckCircle2 } from 'lucide-react';
import { PortfolioData } from '../types';

interface ResumeProps {
  data: PortfolioData;
}

export default function Resume({ data }: ResumeProps) {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills_education'>('experience');

  const experiences = [
    {
      role: 'Graphic Designer',
      company: 'Ramada Encore Seminyak Bali',
      period: 'April 2023 - April 2025',
      highlights: [
        'Designed all digital and print promotional assets for hotel campaigns including Instagram content, website banners, email visuals, and in-property collateral ensuring brand alignment.',
        'Partnered with Marketing & Sales teams to plan and execute seasonal promotions, translating campaign objectives into engaging visual content for digital and offline channels.',
        'Created high-converting social media content strategies, advising on content formats, visual hooks, and posting cadence to maximize organic reach.',
        'Produced and edited promotional video content for multi-platform distribution, adapting formats for each platform\'s audience behavior.',
        'Managed and organized the hotel\'s digital asset library ensuring fast turnaround and absolute brand consistency across all departments.',
        'Coordinated effectively with printing vendors and internal departments to ensure timely and high-quality production of marketing materials.'
      ]
    },
    {
      role: 'Graphic Designer',
      company: 'The Sintesa Jimbaran',
      period: 'April 2017 - April 2019',
      highlights: [
        'Developed visual campaigns for seasonal hotel promotions and F&B marketing from concept through final production across digital and print.',
        'Produced brand-aligned social media content supporting audience engagement and the property\'s premium positioning.'
      ]
    },
    {
      role: 'Graphic Designer',
      company: 'Ramada Sunset Road',
      period: '2015 - 2016',
      highlights: [
        'Led visual execution of a corporate rebranding initiative, refreshing brand identity, promotional materials, and on-site signage under tight deadlines.',
        'Designed room promotion and F&B campaign materials across digital and print channels.'
      ]
    },
    {
      role: 'Graphic Designer',
      company: 'Best Western Premier Sunset Road',
      period: '2014 - 2015',
      highlights: [
        'Created high-impact marketing materials for room sales, events, and seasonal campaigns including Earth Hour and seasonal greeting initiatives.'
      ]
    },
    {
      role: 'Graphic Designer',
      company: 'Sky Garden 61 Legian',
      period: '2013 - 2014',
      highlights: [
        'Produced high-volume event posters, flyers, and social media content for one of Bali\'s top entertainment venues under fast-paced deadlines.'
      ]
    },
    {
      role: 'Graphic Designer',
      company: 'Media Kreasi Printing (Offset)',
      period: '2011 - 2013',
      highlights: [
        'Managed prepress production, layout design, and quality control for commercial offset printing.'
      ]
    },
    {
      role: 'Junior Graphic Designer',
      company: 'Crossline Clothing & Merchandise',
      period: '2008 - 2010',
      highlights: [
        'Designed apparel graphics, merchandise concepts, and retail promotional materials.'
      ]
    }
  ];

  const designSkills = [
    'Hospitality Branding & Promotion',
    'Social Media Content Design',
    'Digital Campaign Support',
    'Marketing Collateral Design',
    'Photo & Video Editing',
    'Visual Communication',
    'Print Production',
    'Brand Consistency',
    'Cross-functional Collaboration'
  ];

  const digitalMarketingLiteracy = [
    'Product Marketing',
    'Landing Page',
    'Marketing Analytics',
    'Social Media Ads',
    'SEM & SEO',
    'Google Ads',
    'Content Marketing',
    'Social Media Organic',
    'CRM'
  ];

  const designTools = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'CorelDRAW',
    'Canva',
    'Capcut',
    'AI Design Tools'
  ];

  const educationList = [
    {
      title: 'Full Stack Digital Marketing',
      institution: 'RevoU',
      period: 'August - October 2022',
      details: 'Intensive industry program: Product Marketing, Landing Page, Marketing Analytics, Social Media Ads, SEM & SEO, Google Ads, Content Marketing, Social Media Organic and CRM.'
    },
    {
      title: 'Darussalam Boarding School',
      institution: 'Secondary Education',
      period: '1999 - 2005',
      details: 'Creative fundamentals, academic study & leadership.'
    },
    {
      title: 'SDN Angkasa XII',
      institution: 'Primary Education',
      period: '1993 - 1999',
      details: 'Early primary education and foundations.'
    }
  ];

  return (
    <section id="cv-section" className="py-24 px-6 sm:px-12 lg:px-24 bg-zinc-950/40 relative overflow-hidden border-t border-white/5">
      
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white animate-fade-in">
              Professional CV
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl">
              A timeline of over 10 years crafting high-impact designs, blending marketing conversion analytics with visual perfection.
            </p>
          </div>

          {/* Quick Contact & Info Card */}
          <div className="glass p-5 rounded-2xl border border-white/10 md:max-w-xs w-full space-y-3.5 text-xs text-zinc-300">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-mono text-zinc-500 uppercase tracking-wider">Location Status</span>
              <span className="text-pink-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                Denpasar, Bali
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Denpasar, Bali, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="mailto:rivkidsgn@gmail.com" className="hover:text-pink-400 transition-colors">rivkidsgn@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="tel:+6285156461121" className="hover:text-pink-400 transition-colors">+62 851 5646 1121</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="https://rivki-sandy.netlify.app" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">rivki-sandy.netlify.app</a>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Interactive Switchers */}
        <div className="flex justify-start border-b border-white/10 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`cursor-pointer pb-4 text-sm font-mono tracking-widest uppercase transition-all relative px-1 ${
              activeTab === 'experience' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Work History
            </span>
            {activeTab === 'experience' && (
              <motion.div layoutId="activeCVTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('skills_education')}
            className={`cursor-pointer ml-8 pb-4 text-sm font-mono tracking-widest uppercase transition-all relative px-1 ${
              activeTab === 'skills_education' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Skills & Education
            </span>
            {activeTab === 'skills_education' && (
              <motion.div layoutId="activeCVTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500" />
            )}
          </button>
        </div>

        {/* Dynamic Area with Animations */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10 before:hidden md:before:block"
            >
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:pl-12 group">
                  
                  {/* Timeline bullet dot */}
                  <div className="absolute left-3.5 top-2.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-pink-500 hidden md:block group-hover:bg-pink-500 transition-colors duration-300" />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    
                    {/* Period Left-side on desktop */}
                    <div className="md:col-span-3 space-y-1">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description & role details on right-side */}
                    <div className="md:col-span-9 space-y-4">
                      <div>
                        <h3 className="text-xl font-display font-medium text-white group-hover:text-pink-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-mono text-zinc-400">
                          {exp.company}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-zinc-400 text-sm font-light leading-relaxed flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500/60 shrink-0 mt-2" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="skills_education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Skills Grid Columns */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Design Skills */}
                <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2.5">
                    <Flame className="w-5 h-5 text-pink-500" />
                    Design Skills & Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {designSkills.map((skill, sIdx) => (
                      <span key={sIdx} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Digital Marketing Literacy */}
                <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-pink-500" />
                    Digital Marketing Literacy
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {digitalMarketingLiteracy.map((mSkill, mIdx) => (
                      <span key={mIdx} className="bg-pink-500/10 border border-pink-500/20 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300">
                        {mSkill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Design Tools */}
                <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2.5">
                    <Wrench className="w-5 h-5 text-pink-500" />
                    Professional Tools
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {designTools.map((tool, tIdx) => (
                      <span key={tIdx} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 hover:border-pink-500/40 transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Education Grid Columns */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-xl font-display font-medium text-white flex items-center gap-2.5 mb-6">
                  <GraduationCap className="w-6 h-6 text-pink-400" />
                  Education & Certifications
                </h3>

                <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  {educationList.map((edu, eIdx) => (
                    <div key={eIdx} className="relative pl-8 group">
                      
                      {/* Timeline Bullet */}
                      <div className="absolute left-3 top-2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-950 border-2 border-pink-500 group-hover:bg-pink-500 transition-colors" />

                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-zinc-500 font-semibold block uppercase">
                          {edu.period}
                        </span>
                        <h4 className="font-display font-medium text-white group-hover:text-pink-400 transition-colors">
                          {edu.title}
                        </h4>
                        <p className="text-xs font-mono text-zinc-400">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light pt-1">
                          {edu.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Offline PDF & Callout Alert block */}
        <div className="mt-16 p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h4 className="font-display font-medium text-white text-base">Looking for a print-ready CV or offline PDF?</h4>
            <p className="text-zinc-400 text-xs font-light">
              You can instantly view my hand-crafted layout design portfolio and detailed printable resume directly online on my Netlify build.
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://bit.ly/portfoliorivki" 
              target="_blank" 
              rel="noreferrer"
              className="cursor-pointer bg-white text-zinc-950 hover:bg-zinc-200 px-5  py-2.5 rounded-full font-medium text-xs font-sans tracking-wide transition-all inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View PDF Portfolio
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
