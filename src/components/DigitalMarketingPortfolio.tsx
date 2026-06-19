import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Target, 
  Search, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Percent, 
  Zap, 
  Flame, 
  LineChart, 
  ChevronUp, 
  ChevronDown, 
  PieChart, 
  TrendingDown, 
  DollarSign, 
  Bookmark,
  Sparkles
} from 'lucide-react';

export default function DigitalMarketingPortfolio() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const cases = [
    {
      id: 1,
      tag: 'Performance Marketing',
      title: 'Facebook Ads Campaign Report',
      subtitle: 'RapiRapi Team Deck',
      client: {
        name: 'RapiRapi',
        category: 'House Cleaning Service (Jabodetabek)',
        valueProp: 'Eco-friendly, Hygienic, and On Time Service'
      },
      team: [
        { role: 'Project Manager', name: 'Rivki Sandy' },
        { role: 'Performance', name: 'Letario Prodeo' },
        { role: 'Design & Copy', name: 'Priky, Adi, Yanita' },
        { role: 'Technical', name: 'Rara Ulandari' }
      ],
      contributions: [
        'Formulated full-funnel marketing campaigns across Meta Ads platforms.',
        'Determined granular audience targeting models, budget allocation blueprints, and campaign ad frameworks.',
        'Monitored daily ad sets, performance optimization tweaks, and strategic placement delivery.',
        'Analyzed core campaign diagnostics and drafted scaling reports for business development.'
      ],
      funnel: [
        {
          step: '1. Propsecting (Traffic)',
          desc: 'Broad outreach targeting males & females of mature age with strong household sanitation interests in Jabodetabek area.'
        },
        {
          step: '2. Re-engagement',
          desc: 'Page interaction growth. Leveraged angle-driven copy evoking healthcare awareness & concern (e.g. Dengue Fever awareness).'
        },
        {
          step: '3. Remarketing (Leads)',
          desc: 'High-intent recapture pointing existing landing page dropouts to responsive web booking forms.'
        }
      ],
      metrics: [
        { label: 'Total Impressions', value: '41,803', text: 'Total ad exposures across Meta networks' },
        { label: 'Total Reach', value: '38,326', text: 'Unique accounts exposed to materials' },
        { label: 'Link Clicks', value: '423', text: 'Active users landing on promotional page' },
        { label: 'CTR (All)', value: '1.01%', text: 'Robust design attraction threshold' },
        { label: 'CPC Average', value: 'Rp 952', text: 'Extremely cost-efficient clicks model' },
        { label: 'Total Leads', value: '35', text: 'Highly pre-qualified conversion entries' }
      ],
      insights: [
        'Meta Ads performed exactly inside client parameters delivering top-tier lead scores.',
        'Problem-aware, solution-oriented copy (preventing illnesses like DBD) secured maximum click interest.',
        'Remarketing campaigns generated the absolute lowest acquisition cost structure with outstanding visual quality.'
      ],
      impact: {
        percentage: '32%',
        metricLabel: 'Cost per Lead reduction',
        summaryText: 'Increased validated direct leads for sales execution while establishing powerful localized brand recall.'
      },
      gradient: 'from-blue-600 via-indigo-600 to-indigo-800',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
    },
    {
      id: 2,
      tag: 'SEO Specialist',
      title: 'SEO Report Optimization Deck',
      subtitle: 'oshop.co.id Diagnostic Audit',
      client: {
        name: 'Oshop.co.id',
        category: 'Famous E-Commerce Home Shopping Platform',
        valueProp: 'Aesthetic kitchen appliances, health, and fitness gear distribution'
      },
      audit: [
        {
          issue: 'Internal Redirections',
          location: 'Home Page',
          instances: 79,
          damage: 'Depletes precious Googlebot crawl search budgets.'
        },
        {
          issue: 'Missing H1 Tags',
          location: 'Blog Content Pages',
          instances: 24,
          damage: 'Blocks optimal spider hierarchy content scanning.'
        },
        {
          issue: 'Duplicate Meta Descriptions',
          location: 'Home Page & Blogs',
          instances: '36/70 Pages',
          damage: 'Dilutes search result page distinction & branding.'
        }
      ],
      contributions: [
        'Executed end-to-end technical crawler checks and index audits utilizing professional tools.',
        'Translated raw platform data flaws into prioritizable business solutions.',
        'Mapped structured hierarchy changes and technical fixes for clean developer handover.',
        'Designed search-friendly on-page outlines to guide subsequent content writing workflows.'
      ],
      keywordData: {
        keyword: 'Rice Cooker Low Carbo',
        notes: 'Targeting low-competitive queries with extreme buyer commercial intent.',
        volume: '4,760 searches/month',
        ctr: '17.10%',
        projection: '+814 organic visits/month'
      },
      expectedOutcomes: [
        'Optimized core document structures yielding superior platform crawl ease.',
        'Enhanced search visibility rating on authoritative keywords.',
        'Elevated organic customer footfall with high immediate conversion chances.'
      ],
      insights: [
        'Crawler search budget efficiency is dramatically restored by optimizing loop links and redirects.',
        'Proper H1 heading configurations provide immediate rank boosts on target category landing pages.',
        'Unique metadata descriptions elevate natural click-through ratios (CTR) from Google search result lists.'
      ],
      gradient: 'from-emerald-600 via-teal-600 to-emerald-800',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    {
      id: 3,
      tag: 'Performance Analysis',
      title: 'Low CTR Ads Diagnosis',
      subtitle: 'Shopee Food & Traveloka Optimization Case',
      client: {
        name: 'Shopee Food & Traveloka Ad Sets',
        category: 'Food Delivery & Online Travel Booking Platforms',
        valueProp: 'Rapid on-demand service and instant holiday convenience'
      },
      diagnostics: [
        {
          problem: 'Saturated Small Audience Size',
          finding: 'Ad sets were locked inside overly restrictive circles, capping potential clicks & impressions.'
        },
        {
          problem: 'Sub-Optimal placements',
          finding: 'Ads were displayed in low-traffic or inappropriate segments wasting precious marketing capital.'
        },
        {
          problem: 'Low Copy Relevance',
          finding: 'Design visuals and slogans lacked immediate emotional spark or connection to target desires.'
        }
      ],
      contributions: [
        'Reviewed historic logs to filter out patterns of budget wastage.',
        'Defined actionable target adjustments and visual copy recommendations.',
        'Designed strict A/B test creatives and audience segments for fast feedback confirmation.'
      ],
      optimizationGrowth: [
        { label: 'CTR (All)', before: '0.37%', after: '1.17%', change: '+216%', type: 'up' },
        { label: 'Link Clicks', before: '19', after: '113', change: '+495%', type: 'up' },
        { label: 'CPC average', before: 'Rp 3.648', beforeNum: 3648, afterNum: 883, after: 'Rp 883', change: '-75.8%', type: 'down' }
      ],
      insights: [
        'Systematic asset updates and placement optimization yielded instant ROI boosts.',
        'Increased CTR rates drove dynamic organic amplification score adjustments by social algorithms.',
        'Slashing CPC expenditure margins preserved client capital to pursue scale.'
      ],
      gradient: 'from-rose-600 via-pink-600 to-rose-800',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
    }
  ];

  return (
    <section id="marketing-section" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs tracking-widest text-pink-400 uppercase">Growth & Analytics</span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white leading-none">
              Digital Marketing Portfolio
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-sm md:text-right font-light">
            Data-backed campaigns, core technical SEO audits, and conversion funnel optimization.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`cursor-pointer px-5 py-3 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                activeTab === c.id 
                  ? 'bg-white text-zinc-950 border-white font-medium shadow-lg shadow-white/5' 
                  : 'bg-white/5 hover:bg-white/10 text-zinc-400 border-white/5'
              }`}
            >
              {c.id === 1 && <BarChart3 className="w-4 h-4 text-indigo-400" />}
              {c.id === 2 && <Search className="w-4 h-4 text-emerald-400" />}
              {c.id === 3 && <TrendingUp className="w-4 h-4 text-rose-400" />}
              0{c.id}. {c.tag}
            </button>
          ))}
        </div>

        {/* Active Content Window */}
        <AnimatePresence mode="wait">
          {cases.map((c) => {
            if (c.id !== activeTab) return null;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* LEFT BLOCK: Case Background & Strategy Description (7 columns) */}
                <div className="lg:col-span-7 space-y-8">
                  
                  {/* Case Lead Card */}
                  <div className={`p-8 rounded-3xl bg-gradient-to-br ${c.gradient} text-white shadow-xl relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12" />
                    
                    <div className="space-y-4 relative z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block font-semibold">
                        {c.tag}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-display font-medium tracking-tight">
                          {c.title}
                        </h3>
                        <p className="text-white/70 text-sm font-mono mt-1">
                          {c.subtitle}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
                        <div>
                          <span className="text-white/50 block font-mono text-[9px] uppercase tracking-wider">Client Context</span>
                          <span className="font-medium text-white block mt-1">{c.client.name}</span>
                          <span className="text-white/70 mt-0.5 block">{c.client.category}</span>
                        </div>
                        <div>
                          <span className="text-white/50 block font-mono text-[9px] uppercase tracking-wider">Primary Value Proposition</span>
                          <span className="block mt-1 font-light italic text-white/90">"{c.client.valueProp}"</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contributions Block */}
                  <div className="glass p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4">
                    <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      My Roles & Essential Contributions
                    </h4>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">PERAN DAN KONTRIBUSI SAYA</p>
                    <ul className="space-y-3 pt-2">
                      {c.contributions.map((contribution, idx) => (
                        <li key={idx} className="text-zinc-300 text-sm font-light leading-relaxed flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 mt-2" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Specific Strategic Visuals */}
                  {c.id === 1 && c.funnel && (
                    <div className="glass p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-display font-medium text-white">
                          Meta Campaign Funnel Blueprint
                        </h4>
                        <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono px-2.5 py-1 rounded-md uppercase">
                          3-Stage Format
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                        {c.funnel.map((step, idx) => (
                          <div key={idx} className="relative bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col justify-between space-y-3 group hover:border-indigo-500/30 transition-all">
                            <span className="text-xs font-mono text-indigo-400 font-bold">{step.step}</span>
                            <p className="text-zinc-400 text-xs font-light leading-relaxed">{step.desc}</p>
                            {idx < 2 && (
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 hidden md:block">
                                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {c.id === 2 && c.audit && (
                    <div className="glass p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-display font-medium text-white">
                          Technical Audit Findings
                        </h4>
                        <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono px-2.5 py-1 rounded-md uppercase">
                          Technical SEO
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        {c.audit.map((item, idx) => (
                          <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-1">
                              <span className="text-xs font-mono text-zinc-400 font-bold">{item.issue}</span>
                              <div className="text-zinc-500 text-xs">
                                Location Constraints: <span className="text-zinc-300 font-mono">{item.location}</span>
                              </div>
                              <p className="text-xs text-zinc-400 font-light italic mt-1">Impact: "{item.damage}"</p>
                            </div>
                            <div className="shrink-0 text-right">
                              <span className="text-xl font-display font-medium text-emerald-400 block">{item.instances}</span>
                              <span className="text-[9px] font-mono text-red-400/80 bg-red-500/10 px-2 py-0.5 rounded-full uppercase border border-red-500/15">Crawled Issues</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {c.id === 3 && c.diagnostics && (
                    <div className="glass p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-display font-medium text-white">
                          Identified Leak Causes
                        </h4>
                        <span className="text-[10px] bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono px-2.5 py-1 rounded-md uppercase">
                          Diagnosis Results
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        {c.diagnostics.map((item, idx) => (
                          <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex gap-4">
                            <div className="mt-1">
                              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                            </div>
                            <div className="space-y-1">
                              <span className="text-xs font-mono text-white font-bold">{item.problem}</span>
                              <p className="text-zinc-400 text-xs font-light leading-relaxed">{item.finding}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT BLOCK: High Visual Performance Panel, Key Metrics, Insights (5 columns) */}
                <div className="lg:col-span-5 space-y-8">
                  
                  {/* Case metrics show */}
                  {c.id === 1 && c.metrics && (
                    <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                      <h4 className="text-sm font-mono tracking-widest text-zinc-400 uppercase">
                        REALISASI PERFORMA & DATA FINALS
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {c.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col justify-between space-y-2">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{metric.label}</span>
                            <span className="text-xl sm:text-2xl font-display font-medium text-white">{metric.value}</span>
                            <span className="text-[9px] text-zinc-500 font-light leading-tight">{metric.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Outstanding Impact highlights block */}
                      <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 shrink-0 text-emerald-400">
                          <TrendingDown className="w-6 h-6 animate-pulse" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-xl font-display font-bold text-emerald-400">-{c.impact.percentage}</span>
                          <p className="text-xs font-mono text-emerald-300 tracking-wide">{c.impact.metricLabel}</p>
                          <p className="text-[10px] text-zinc-400 font-light leading-tight">{c.impact.summaryText}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SEO Strategy & Projections */}
                  {c.id === 2 && c.keywordData && (
                    <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                      <h4 className="text-sm font-mono tracking-widest text-zinc-400 uppercase">
                        STRATEGI KONTEN ON-PAGE & METRICS
                      </h4>
                      
                      <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-4">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Target Buyer Intent Keyword</span>
                          <span className="text-base font-display font-semibold text-emerald-400 mt-1 block">
                            "{c.keywordData.keyword}"
                          </span>
                          <span className="text-[10px] text-zinc-400 mt-1 block italic">{c.keywordData.notes}</span>
                        </div>

                        <div className="pt-4 border-t border-white/10 space-y-3 text-xs font-mono">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">POTENTIAL VOL/MONTH:</span>
                            <span className="text-white font-bold">{c.keywordData.volume}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">EST. INDUSTRY CTR:</span>
                            <span className="text-white font-bold">{c.keywordData.ctr}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-dashed border-white/10">
                            <span className="text-emerald-400 font-semibold">PROJECTED VISITS BOOST:</span>
                            <span className="text-emerald-400 font-bold">{c.keywordData.projection}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expected Outcomes Area */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">EXPECTED OUTCOMES</span>
                        {c.expectedOutcomes.map((outcome, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start text-xs text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTR Performance Boost Comparison meter */}
                  {c.id === 3 && c.optimizationGrowth && (
                    <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-mono tracking-widest text-zinc-400 uppercase">
                          PERFORMANCE OPTIMIZATION (BEFORE vs AFTER)
                        </h4>
                        <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/20 uppercase font-semibold">
                          Optimized
                        </span>
                      </div>

                      <div className="space-y-4">
                        {c.optimizationGrowth.map((metric, idx) => (
                          <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-3">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-mono text-zinc-400">{metric.label}</span>
                              <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                                metric.type === 'up' ? 'text-emerald-400 bg-emerald-500/10' : 'text-emerald-300 bg-emerald-500/5'
                              }`}>
                                {metric.change}
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 pt-1">
                              <div>
                                <span className="text-[10px] font-mono text-zinc-500 block">BEFORE</span>
                                <span className="text-sm font-semibold text-zinc-400 line-through font-mono mt-0.5 block">{metric.before}</span>
                              </div>
                              <div className="border-l border-white/10 pl-4">
                                <span className="text-[10px] font-mono text-zinc-500 block">AFTER</span>
                                <span className={`text-base font-bold font-mono mt-0.5 block ${
                                  metric.type === 'up' ? 'text-emerald-400' : 'text-emerald-400'
                                }`}>
                                  {metric.after}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Team Grid (for RapiRapi) or General Insights Block */}
                  {c.id === 1 && c.team && (
                    <div className="glass p-5 rounded-2xl border border-white/5 space-y-3.5">
                      <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                        TEAM PLAYERS STRUCTURE
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        {c.team.map((t, tIdx) => (
                          <div key={tIdx} className="bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                            <span className="text-[9px] text-zinc-500 block uppercase tracking-wider">{t.role}</span>
                            <span className="text-zinc-200 mt-0.5 block font-medium truncate">{t.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Common Case Insights Card */}
                  <div className="glass p-6 rounded-3xl border border-white/5 space-y-4">
                    <h5 className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                      Campaign Insights & Learnings
                    </h5>
                    <ul className="space-y-2">
                      {c.insights && c.insights.map((insight, insIdx) => (
                        <li key={insIdx} className="text-zinc-400 text-xs font-light leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-pink-500 shrink-0" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}
