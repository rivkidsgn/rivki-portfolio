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
  TrendingDown, 
  DollarSign, 
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp as TrendingUpIcon,
  HelpCircle,
  Award,
  Calendar,
  Grid,
  FileText,
  BadgeAlert,
  Sliders,
  Flag,
  UserCheck,
  CheckCircle,
  HelpCircle as HelpIcon,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';

interface DigitalMarketingPortfolioProps {
  lang?: 'id' | 'en';
}

export default function DigitalMarketingPortfolio({ lang = 'id' }: DigitalMarketingPortfolioProps) {
  const isID = lang === 'id';
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = [
    { 
      id: 1, 
      label: isID ? 'Kinerja Brand Meta Ads' : 'Meta Ads Brand Performance', 
      category: isID ? 'Studi Kasus' : 'Case Study', 
      Icon: BarChart3, 
      color: 'text-indigo-400' 
    },
    { 
      id: 2, 
      label: isID ? 'SEO Teknis & Trafik Organik' : 'Technical SEO & Organic Traffic', 
      category: isID ? 'Diagnostik & Riset' : 'Diagnostic & Research', 
      Icon: Search, 
      color: 'text-emerald-400' 
    },
    { 
      id: 3, 
      label: isID ? 'Cetak Biru Pertumbuhan RapiRapi' : 'RapiRapi Growth Blueprint', 
      category: isID ? 'Strategi Corong-Penuh' : 'Full-Funnel Strategy', 
      Icon: Sliders, 
      color: 'text-pink-400' 
    }
  ];

  // Tab 1 Data Setup
  const brandPerformanceCase = {
    title: isID ? 'Brand Awareness Jasa Kebersihan' : 'Full-Funnel Facebook Ads Strategy for Home Cleaning Service (RapiRapi Jabodetabek)',
    description: isID 
      ? 'Membangun awareness dan minat calon pelanggan terhadap layanan kebersihan rumah (RapiRapi Jabodetabek) melalui strategi Full Funnel Facebook Ads.'
      : 'This project focused on building a full-funnel Facebook Ads strategy to increase brand awareness, engagement, and lead generation for RapiRapi, a home cleaning service causing positive impacts in the Greater Jakarta area (Jabodetabek).',
    totalSpend: isID ? 'Rp 400.709' : 'IDR 400,709',
    overallCPC: isID ? 'Rp 952' : 'IDR 952',
    overallCTR: '1.01%'
  };

  const challenges = isID ? [
    { title: 'Awareness Rendah', desc: 'Kurangnya paparan merek secara terstruktur di wilayah demografis target.' },
    { title: 'No Social Proof Yet', desc: 'Belum memiliki review, portofolio, atau kredibilitas lokal yang kuat.' },
    { title: 'No Hot Database', desc: 'Memulai kampanye tanpa list pixel data audiens hangat atau kontak customer.' },
    { title: 'Lokal Competitor', desc: 'Dikelilingi kompetitor cleaning service lokal berskala mapan & perang harga.' }
  ] : [
    { title: 'Low Brand Awareness', desc: 'Lack of structured brand exposure and familiarity across targeted demographic sectors.' },
    { title: 'No Social Proof Yet', desc: 'Fresh local market entrant with no prior reviews, testimonials, or local brand trust.' },
    { title: 'No Hot Database', desc: 'Initiating Facebook pixel targeting without any prior warm audiences or client files.' },
    { title: 'Local Competitors', desc: 'Surrounded by well-established cleaning service platforms and aggressive discount wars.' }
  ];

  const rerunRecommendations = isID ? [
    { step: '1. Fokus Organik 30 Hari', desc: 'Kumpulkan aset video pembersihan riil, dokumentasi tim, testimonial pelanggan, dan edukasi kebersihan untuk memperkuat trust dasar sebelum menyalakan ads.' },
    { step: '2. Perbaikan Target Audience', desc: 'Selain Daddy & Mommy standar, perluas ke profesional sibuk berpenghasilan tinggi, manajer/eksekutif, dan pemilik apartemen yang memiliki waktu luang amat terbatas.' },
    { step: '3. Perubahan Corong Funnel', desc: 'Alihkan konversi akhir dari Landing Page (karena friksi pendaftaran tinggi) ke kampanye pesan WhatsApp langsung untuk memudahkan nego personal.' },
    { step: '4. Perpanjang Durasi Testing', desc: 'Sebelumnya durasi hanya 4 hari. Disarankan minimal running 30 hari penuh supaya algoritma Facebook Ads keluar dari Learning Phase secara konsisten.' }
  ] : [
    { step: '1. Build Organic Awareness First', desc: 'Publish organic content (authentic cleaning videos, staff documentation, testimonials) for at least 30 days beforehand to build baseline trust.' },
    { step: '2. Target Audience Expansion', desc: 'Go beyond stay-at-home parents. Target high-income busy professionals, startup executives, and apartment dwellers with limited time for chores.' },
    { step: '3. Improve Funnel Structure', desc: 'Reroute visitors from slow, high-friction landing page forms immediately into interactive WhatsApp chat prompts to simplify direct personal booking.' },
    { step: '4. Increase Campaign Duration', desc: 'Extend campaign from 4 days to a minimum of 30 days, allowing Metas learning algorithms to fully optimize and deliver stable, reliable performance data.' }
  ];

  const campaignMetrics = isID ? [
    { label: 'Impressions', value: '41.803', desc: 'Total iklan ditampilkan' },
    { label: 'Reach', value: '38.326', desc: 'Jangkauan audiens unik' },
    { label: 'Link Clicks', value: '421', desc: 'Total klik tombol pranala' },
    { label: 'Form Leads', value: '0', desc: 'Leads terdaftar di web', highlight: true }
  ] : [
    { label: 'Impressions', value: '41,803', desc: 'Total cumulative ad views delivered' },
    { label: 'Reach', value: '38,326', desc: 'Unique viewers reached across demographic segments' },
    { label: 'Link Clicks', value: '421', desc: 'Total direct website link interactions recorded' },
    { label: 'Form Leads', value: '0', desc: 'Form submissions received via landing page', highlight: true }
  ];

  // Tab 2 Data Setup
  const seoAuditDetails = {
    title: isID ? 'Audit Teknis On-Page & Proyeksi Trafik' : 'Technical On-Page Audit & Organic Traffic Projection for Oshop.co.id',
    description: isID 
      ? 'Audit menyuluruh performa SEO teknis, konten, dan UX pada website e-commerce oshop.co.id untuk mengidentifikasi hambatan pertumbuhan trafik organik.'
      : 'This project focused on conducting a comprehensive SEO audit of Oshop.co.id to identify technical issues, content opportunities, and organic growth potential. The objective was to improve website visibility, user experience, and search engine performance through technical optimization and content strategy.',
    topIssuePages: '127 Pages',
    targetRank: 'Top 3 Google',
    estOrganicTraffic: isID ? '+814 / Bulan' : '+814 / Month'
  };

  const seoMainFindings = isID ? [
    { label: 'Thin Content Pages', val: '127 Halaman' },
    { label: 'Duplicate Meta Descriptions', val: '36 Halaman' },
    { label: 'Internal Redirects (3XX)', val: '79 Url Chains' },
    { label: 'Images Size Over 100KB', val: '30 Gambar' },
    { label: 'Mobile LCP Speed', val: '12.1 Detik (Slow)' }
  ] : [
    { label: 'Thin Content Pages', val: '127 pages with thin content' },
    { label: 'Duplicate Meta Descriptions', val: '36 duplicate meta descriptions' },
    { label: 'Internal Redirects (3XX)', val: '79 internal redirects' },
    { label: 'Images Size Over 100KB', val: '30 images larger than 100 KB' },
    { label: 'Mobile LCP Speed', val: '12.1 seconds (Mobile LCP)' }
  ];

  const seoBlogFindings = isID ? [
    { label: 'Duplicate Meta Descriptions', val: '70 Halaman' },
    { label: 'Missing H1 Heading Tags', val: '24 Artikel' },
    { label: 'Images Size Over 100KB', val: '83 Gambar' },
    { label: 'Images Missing Alt Attributes', val: '72 Gambar' },
    { label: 'Mobile LCP Speed', val: '6.0 Detik' }
  ] : [
    { label: 'Duplicate Meta Descriptions', val: '70 duplicate meta descriptions' },
    { label: 'Missing H1 Heading Tags', val: '24 missing H1 tags' },
    { label: 'Images Size Over 100KB', val: '83 oversized images' },
    { label: 'Images Missing Alt Attributes', val: '72 missing alt texts' },
    { label: 'Mobile LCP Speed', val: '6 seconds (LCP)' }
  ];

  const prioritySeoIssues = isID ? [
    {
      num: 1,
      title: 'Thin Content Optimization',
      desc: '127 halaman memiliki konten yang amat minim (thin content). Berpotensi besar menurunkan topical authority dan sulit bersaing di SERP Google.',
      impact: 'Impact: Sangat Tinggi (5/5)',
      stars: '★★★★★',
      color: 'text-red-400'
    },
    {
      num: 2,
      title: 'Core Web Vitals Improvement',
      desc: 'Waktu Mobile LCP tercatat mencapai 12.1 detik pada halaman utama. Menghambat bot crawling, memicu bounce rate tinggi dari calon pembeli mobile.',
      impact: 'Impact: Sangat Tinggi (5/5)',
      stars: '★★★★★',
      color: 'text-red-400'
    },
    {
      num: 3,
      title: 'Duplicate Metadata Cleanup',
      desc: 'Total 106 halaman blog & e-commerce terdeteksi menggunakan meta deskripsi yang sama persis. Menyulitkan search snippet CTR organik optimal.',
      impact: 'Impact: Tinggi (4/5)',
      stars: '★★★★☆',
      color: 'text-orange-400'
    }
  ] : [
    {
      num: 1,
      title: 'Thin Content Optimization',
      desc: 'More than 100 pages contained extremely limited physical content, severely constraining search engine rank competitiveness and the ability to build robust topical authority.',
      impact: 'Impact: Critical (5/5)',
      stars: '★★★★★',
      color: 'text-red-400'
    },
    {
      num: 2,
      title: 'Core Web Vitals Improvement',
      desc: 'Slow mobile loading performance (LCP at 12.1 seconds) heavily damages user experience, session bounce rates, crawler budget efficiency, and active mobile search engine rankings.',
      impact: 'Impact: Critical (5/5)',
      stars: '★★★★★',
      color: 'text-red-400'
    },
    {
      num: 3,
      title: 'Duplicate Metadata Cleanup',
      desc: 'Duplicate meta descriptions across 106 catalog and blog templates harm organic search snippet visibility, restricting opportunities for optimized organic CTR.',
      impact: 'Impact: High (4/5)',
      stars: '★★★★☆',
      color: 'text-orange-400'
    }
  ];

  const competitorGapRows = isID ? [
    { local: 'Tidak ada rubrik FAQ tersemat', comp: 'Comprehensive Buying Guide terstruktur' },
    { local: 'Tidak ada tabel komparasi parameter produk', comp: 'Product Comparison Table visual interaktif' },
    { local: 'Blogger menulis tanpa Expert Review', comp: 'Detailed Feature Analysis dari expert terpilih' },
    { local: 'Konten minim video / media pendukung', comp: 'Category Recommendation & cross-link map optimal' }
  ] : [
    { local: 'Missing FAQ sections across main catalogs', comp: 'In-depth structured FAQs addressing immediate search intent' },
    { local: 'No product parameter comparison tools', comp: 'Interactive, responsive product comparison tables' },
    { local: 'Blog templates missing expert credentials', comp: 'E-E-A-T verified expert reviews and analytical guides' },
    { local: 'Scarce video reviews or supporting rich media assets', comp: 'Excellent category recommendation flow and organic video demos' }
  ];

  const businessImpactProj = {
    conversionTitle: isID ? 'Conversion Rate' : 'Est. Conversion Rate',
    conversionDesc: isID ? 'E-Commerce Average' : 'E-Commerce Average',
    newConversionsTitle: isID ? 'New Conversions' : 'Potential Monthly Conversions',
    newConversionsValue: isID ? '±19 Sales / Mo' : '±19 transactions',
    newConversionsDesc: isID ? 'Direct Transaction Boost' : 'Sustainable direct revenue conversion growth'
  };

  const seoRoadmapData = {
    techTitle: isID ? 'TECHNICAL SEO CHECKS' : 'RECOMMENDED TECHNICAL SEO',
    techBullets: isID ? [
      'Kompres & Konversi semua aset visual ke format WebP',
      'Audit & bersihkan rute Internal Redirect Chains redundant',
      'Buat penataan Meta Description unik di seluruh 106 halaman',
      'Sematkan Structured Schema markup guna rich snippets'
    ] : [
      'Compress and convert images to lightweight WebP formats',
      'Optimize mobile loading performance to bring LCP below 2.5 seconds',
      'Fix internal redirect chains and 3XX redundant loops',
      'Create custom, compelling metadata layouts to capture CTR highlights'
    ],
    contentTitle: isID ? 'CONTENT & E-E-A-T OPTIMIZATION' : 'RECOMMENDED CONTENT & E-E-A-T',
    contentBullets: isID ? [
      'Ekspansi konten tipis (thin pages) menjadi deep guide',
      'Petakan kluster topik komprehensif bagi keyword utama',
      'Tambahkan FAQ accordion markup serta tabel review ahli',
      'Pasang profil autorisator mumpuni guna skor kredibilitas'
    ] : [
      'Expand thin-content pages to improve density and authority',
      'Architect solid topic cluster pillars for key high-volume terms',
      'Integrate schema-validated FAQ boxes and detailed purchase calculators',
      'Insert trusted author bio fields and citation links to boost trust'
    ]
  };

  // Tab 3 Data Setup
  const growthBlueprintDetails = {
    title: isID ? 'RapiRapi Growth Plan' : 'Full-Funnel Facebook Ads Strategy for Brand Awareness Campaign',
    subtitle: isID ? 'RapiRapi Home Cleaning Service – Greater Jakarta Area' : 'RapiRapi Home Cleaning Service – Greater Jakarta Area',
    description: isID 
      ? 'Strategi iklan Facebook Ads yang lebih terstruktur, relevan, dan berbasis data ilmiah untuk akselerasi awareness, engagement, dan leads conversion berkualitas tinggi.'
      : 'Developed a robust full-funnel Facebook Ads blueprint designed to build organic presence, optimize budgets, and capture high-converting leads through structured audience tracks.',
    pspend: isID ? 'Total Budget: Rp 400.709' : 'Total Budget: IDR 400,709',
    pdates: isID ? 'October 11–14, 2022' : 'October 11–14, 2022'
  };

  const strategicOverview = isID ? [
    { title: 'KPI Selaras', desc: 'Gunakan metrik penelaahan KPI yang presisi sesuai obyek corong supaya analisis data evaluasi performa mutlak akurat.' },
    { title: 'Audience Lebih Luas', desc: 'Perluas jangkauan ke berbagai personifikasi modern baru potensial tinggi, menyeimbangkan peran ibu rumah tangga biasa.' },
    { title: 'Creative Lebih Kuat', desc: 'Angkat muatan visual & slogan yang menyentuh pain point riil, penonjolan benefit maksimal, dan jargon trust terstandarisasi.' },
    { title: 'Analisis Lebih Dalam', desc: 'Sematkan penelaahan data performa logaritmik secara runtun untuk melandasi keputusan scaling anggaran dan manajemen budget.' }
  ] : [
    { title: 'KPI Alignment', desc: 'Align target performance metrics sequentially matching each funnel stage (TOFU: Reach, MOFU: CPE, BOFU: CPL/Conv).' },
    { title: 'Audience Expansion', desc: 'Expand past standard homemakers to high-income busy professionals, startup founders, and commercial Airbnb hosts.' },
    { title: 'Creative Optimization', desc: 'Implement organic-style video tests, before-and-after structures, clear service guarantees, and visual proof tags.' },
    { title: 'Data-Driven Choices', desc: 'Track performance logs logically (which demographics or placements yield lowest CPL and highest CTR) to scale budgets.' }
  ];

  const targetPersonas = isID ? [
    {
      title: 'Persona 1 — Ibu Rumah Tangga (IRT) / Mommy',
      demographics: 'Wanita, 25-45 Tahun • Menikah / IRT • Jabodetabek Area',
      pains: 'Sibuk mengurus tumbuh kembang anak, kelelahan fisik, butuh bantuan praktis menyapu dan menata rumah.',
      interests: 'Parenting, Home Organization, Healthy Lifestyle, Interior Design.'
    },
    {
      title: 'Persona 2 — Busy Professionals / Daddy',
      demographics: 'Pria / Wanita, 25-55 Tahun • Pekerja Full-time, Keluarga Mapan • Menyewa Apartemen / Tinggal di Urban',
      pains: 'Hampir tidak memiliki sisa waktu luang untuk membereskan rumah tinggal, memprioritaskan kenyamanan batin keluarga.',
      interests: 'Work-Life Balance, Apartment Living, Productivity Apps, Home Improvement.'
    },
    {
      title: 'Persona 3 — Property Owner / Airbnb Host',
      demographics: 'Pria / Wanita, 25-50 Tahun • Pengusaha Rumah Kost / Penginapan • Jabodetabek',
      pains: 'Memerlukan standardisasi kebersihan bintang lima bagi penyewa unit agar rating properti tetap impresif.',
      interests: 'Airbnb Hosting, Real Estate Investment, Property Management.'
    }
  ] : [
    {
      title: 'Persona 1 — Mommy (Busy Mothers)',
      demographics: 'Female, 25-45 years old • Homemaker or working mother • Jakarta Metro Area (Jabodetabek)',
      pains: 'Caring for family, busy with children, struggles to balance tasks, needs practical automated cleaning solutions.',
      interests: 'Parenting Guides, Home Organization, Healthy Living, Child Wellness, Interior Design'
    },
    {
      title: 'Persona 2 — Daddy (Busy Professionals)',
      demographics: 'Male, 25-55 years old • Family provider & working professional • Middle-to-upper income bracket',
      pains: 'Extremely limited free time, demanding job hours, wants a clean and hygienic home environment for family health.',
      interests: 'Work-Life Balance, Family Comfort, Executive Productivity, Apartment Living, Gadgets'
    },
    {
      title: 'Persona 3 — Property Owner / Airbnb Host',
      demographics: 'Male / Female, 25-50 years old • Commercial host, boarding house owner • Greater Jakarta Area',
      pains: 'Requires certified 5-star cleaning standards to secure outstanding guest reviews and protect real estate assets.',
      interests: 'Airbnb Hosting, Real Estate Investment, Property Management, Short-Term Rental Tips'
    }
  ];

  const creativeStrategyGrid = isID ? [
    {
      step: 'TOFU - AWARENESS',
      angle: 'Pain Point / Before-After',
      message: '"Pulang kerja capek? Biarkan kami yang membereskan sekeliling Anda."',
      visual: 'Video Before-After rumah super berantakan beralih ke rupa rapi kilat.'
    },
    {
      step: 'MOFU - ENGAGEMENT',
      angle: 'Relatable & Interaktif',
      message: '"Sebutkan bagian rumah mana yang paling melelahkan Anda rapikan: A/B/C/D"',
      visual: 'Kolase poling pilihan memicu diskusi banjir komentar hangat.'
    },
    {
      step: 'BOFU - LEAD GENERATION',
      angle: 'Benefit + Proof + Offer',
      message: '"Dapatkan diskon 25% order pertama Anda gratis garansi higienis menyeluruh."',
      visual: 'Testimonial rona bahagia customer menyertakan tombol hubungi WA.'
    }
  ] : [
    {
      step: 'TOFU - AWARENESS',
      angle: 'Pain Point & Family Health',
      message: '"Too tired after work to clean your house? Let our professional team handle it for you."',
      visual: 'Authentic before-and-after video comparing a messy, cluttered room to a shiny clean sanctuary.'
    },
    {
      step: 'MOFU - ENGAGEMENT',
      angle: 'Interactive & Community Polls',
      message: '"Which part of your house is the hardest to keep clean? A, B, or C?"',
      visual: 'Interactive poll graphics and quizzes driving immediate comments and warm page engagement.'
    },
    {
      step: 'BOFU - LEAD GENERATION',
      angle: 'Direct Testimonials & Discount Hook',
      message: '"Claim 10% off your first home cleanup, backed by our 100% satisfaction guarantee."',
      visual: 'Highly responsive customer testimonial quotes paired with simple direct WhatsApp link setups.'
    }
  ];

  const competitorBenchmarkData = isID ? [
    {
      name: 'KliknClean',
      value: 'Jasa instan, diskon promo berkala, jangkauan luas.',
      edge: 'RapiRapi menyajikan detail layanan personal & prapelatihan tim lebih konsisten.'
    },
    {
      name: 'Sejasa',
      value: 'Hanya direktori penghubung, variasi jasa terlampau berjejal.',
      edge: 'RapiRapi fokus terspesialisasi penuh di standarisasi kebersihan kelas satu.'
    },
    {
      name: 'Pinhome Home Service',
      value: 'Kemitraan ekosistem properti raksasa, paket variatif.',
      edge: 'RapiRapi unggul di kedekatan hubungan pelanggan & komit retensi jangka jangka panjang.'
    }
  ] : [
    {
      name: 'KliknClean',
      value: 'On-demand rapid response model, heavy periodic promo codes, wide coverage area.',
      edge: 'RapiRapi wins with personalized quality assurance, meticulous custom checklist setups, and certified staff.'
    },
    {
      name: 'Sejasa',
      value: 'Fragmented online list broker, generic contractor profiles, inconsistent execution.',
      edge: 'RapiRapi operates direct-employed, highly-vetted cleaning specialists following a strict luxury code.'
    },
    {
      name: 'Pinhome Home Service',
      value: 'Massive housing ecosystem aggregator, bulky generic catalog offerings.',
      edge: 'RapiRapi differentiates on deep relationship management, loyalty programs, and consistent care standards.'
    }
  ];

  const funnelKpis = isID ? [
    {
      funnelState: 'Corong 1 — Awareness',
      goal: 'Reach & Impressions luas',
      metric: 'Reach, CPM, Thruplays'
    },
    {
      funnelState: 'Corong 2 — Engagement',
      goal: 'Interaksi & Komentar subyek',
      metric: 'Engagement Rate, CPE'
    },
    {
      funnelState: 'Corong 3 — Lead Generation',
      goal: 'Prospek kontak terkonfirmasi',
      metric: 'CPL, Form Completion rate'
    }
  ] : [
    {
      funnelState: '1. Brand Awareness',
      goal: 'Broad reach, brand visibility & recall',
      metric: 'Reach, Impressions, CPM, video ThruPlay rates'
    },
    {
      funnelState: '2. Engagement',
      goal: 'Inducing positive comments, likes & interest',
      metric: 'Engagement Rate, Cost Per Engagement (CPE)'
    },
    {
      funnelState: '3. Lead Generation',
      goal: 'Collect qualified direct booking prospects',
      metric: 'Cost per Lead (CPL), Conversion Rate'
    }
  ];

  const executionWeeks = isID ? [
    { week: 'Minggu 1', title: 'Setup Campaign & Testing Audience', desc: 'Rancang set up kampanye broad vs interest serta penentuan visual landasan.' },
    { week: 'Minggu 2', title: 'Creative Testing & Angle Selection', desc: 'Evaluasi CTR video angles, pilih pemenang performa CPC terbaik.' },
    { week: 'Minggu 3', title: 'Scaling Budget Reallocation', desc: 'Suntikkan margin dana penambah ke performa ad set bermutu terbaik.' },
    { week: 'Minggu 4', title: 'Retargeting Intensif & Landing Optimal', desc: 'Kencangkan tali pixel corong hangat & minimalkan friksi formulir.' }
  ] : [
    { week: 'Week 1', title: 'Setup Campaign & Testing Audience', desc: 'Configure initial broad and interest campaign paths, creating design baseline versions.' },
    { week: 'Week 2', title: 'Creative Testing & Angle Selection', desc: 'Analyze CTR on video assets to select winning psychological angles.' },
    { week: 'Week 3', title: 'Scaling Budget Reallocation', desc: 'Inject incremental budget exclusively into top-performing, high-CTR adsets.' },
    { week: 'Week 4', title: 'Aggressive Retargeting', desc: 'Deploy customized retargeting pixels to warm visitors while simplifying the lead form checkout.' }
  ];

  const optChecklist = isID ? [
    'Hentikan adset dengan CPL melisut tinggi / CTR rendah.',
    'Refresh materi kreatif secara berkala (maks tiap 2 minggu).',
    'Alihkan alokasi dana kampanye penuh ke CPL termurah.',
    'Fokuskan restrukturasi Landing Page agar conversion rate naik.'
  ] : [
    'Pause high-CPL and low-converting ad groups with immediate effect.',
    'Regularly refresh creative deliverables (every 2 weeks max) to avoid ad fatigue.',
    'Funnel cumulative media budget specifically towards the lowest-CPL leads channels.',
    'Redesign and restructure landing pages to diminish checkout friction.'
  ];

  return (
    <section id="marketing-section" className="py-24 px-6 sm:px-12 lg:px-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background radial soft lights */}
      <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-pink-500/[0.02] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-indigo-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-mono text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-pink-400" />
              {isID ? 'Pertumbuhan Strategis & Analitik' : 'Strategic Growth & Analytics'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white leading-tight">
              {isID ? 'Portofolio Pemasaran Digital' : 'Digital Marketing Portfolio'}
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-sm md:text-right font-light leading-relaxed">
            {isID 
              ? 'Wawasan data, Facebook Ads dengan corong terintegrasi penuh, diagnostik SEO teknis, dan rancangan peta jalan konversi pelanggan.'
              : 'Data insights, full-funnel Facebook Ads, technical SEO diagnostics, and customer conversion roadmaps.'
            }
          </p>
        </div>

        {/* Dynamic Tab Selector */}
        <div className="flex flex-wrap gap-2.5 sm:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
               id={`mkt-tab-${tab.id}`}
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`cursor-pointer px-5 py-3.5 rounded-2xl text-xs font-mono tracking-wider transition-all duration-300 border flex flex-col items-start gap-1 text-left ${
                 activeTab === tab.id 
                   ? 'bg-white text-zinc-950 border-white font-medium shadow-md shadow-white/5' 
                   : 'bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 border-white/5'
               }`}
            >
              <div className="flex items-center gap-2">
                <tab.Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-zinc-950' : tab.color}`} />
                <span className="font-bold opacity-50 uppercase text-[9px] tracking-widest">{tab.category}</span>
              </div>
              <span className="text-sm font-sans font-medium mt-1">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Rendering */}
        <AnimatePresence mode="wait">
          {activeTab === 1 && (
            <motion.div
              key="tab1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left Side: Campaign Context & Split Test (7 columns) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Campaign Header Blue Card */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-900 to-slate-950 text-white relative overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-400/30 font-semibold">
                        {isID ? 'Facebook Ads Case Study' : 'Meta Ads Case Study'}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        {isID ? '11 - 14 OKTOBER 2022' : 'OCTOBER 11–14, 2022'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight">
                        {brandPerformanceCase.title}
                      </h3>
                      <p className="text-indigo-200/80 text-sm font-light mt-1 max-w-xl">
                        {brandPerformanceCase.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-indigo-300 block text-[9px] uppercase tracking-wider">{isID ? 'Total Ad Spend' : 'Total Budget'}</span>
                        <span className="font-bold text-white text-base block mt-0.5">{brandPerformanceCase.totalSpend}</span>
                      </div>
                      <div>
                        <span className="text-indigo-300 block text-[9px] uppercase tracking-wider">{isID ? 'Overall CPC' : 'Overall CPC'}</span>
                        <span className="font-bold text-white text-base block mt-0.5">{brandPerformanceCase.overallCPC}</span>
                      </div>
                      <div>
                        <span className="text-indigo-300 block text-[9px] uppercase tracking-wider">{isID ? 'Overall CTR' : 'Overall CTR'}</span>
                        <span className="font-bold text-emerald-400 text-base block mt-0.5">{brandPerformanceCase.overallCTR}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Challenges Block */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <BadgeAlert className="w-5 h-5 text-indigo-400" />
                    {isID ? '01. Business Challenges Identified' : '01. Business Challenges Identified'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {challenges.map((item, idx) => (
                      <div key={idx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl space-y-1">
                        <span className="text-xs font-mono text-zinc-400 font-bold block">// {item.title}</span>
                        <p className="text-xs text-zinc-400 font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Creative Split Test Section */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-400" />
                      {isID ? '04. Creative A/B Testing Results' : '04. Creative A/B Testing Results'}
                    </h4>
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-md uppercase font-mono">
                      {isID ? 'Split Test Winner' : 'Split Test Winner'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Creative A */}
                    <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="font-mono text-xs text-zinc-400 font-bold">{isID ? 'Angle A: Health/DBD' : 'Creative A — Health Angle'}</span>
                        <span className="text-[10px] text-zinc-500 font-mono">Control</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        <strong>Angle:</strong> {isID ? 'Menekankan ancaman kesehatan keluarga, ancaman gigitan nyamuk DBD, dan kondisi lingkungan kotor.' : 'Focuses on dengue fever (DBD) prevention, family health risks, and the negative impacts of an untidy home.'}
                      </p>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <span className="text-[10px] font-mono text-zinc-500 block">{isID ? 'PROMPTING MESSAGE EX:' : 'EXAMPLES:'}</span>
                        <p className="text-xs font-light text-zinc-300 italic mt-1">
                          {isID ? '"Ancaman DBD mengintai! Cegah perkembangbiakan sarang penyakit dengan rumah bersih murni."' : '"Dengue fever threat is lurking! Prevent the breeding of disease centers with a purely clean home environment."'}
                        </p>
                      </div>
                    </div>

                    {/* Creative B - Winner */}
                    <div className="bg-indigo-500/5 border border-indigo-500/20 p-5 rounded-2xl space-y-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-indigo-500 text-zinc-950 px-2 text-[8px] font-mono uppercase font-bold tracking-widest rounded-bl-lg">
                        {isID ? 'WINNER ANGLE' : 'WINNER ANGLE'}
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-indigo-500/10">
                        <span className="font-mono text-xs text-indigo-300 font-bold">{isID ? 'Angle B: Psychology' : 'Creative B — Psychology Angle'}</span>
                        <span className="text-[10px] text-indigo-400 font-bold font-mono">Best ROI</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-light">
                        <strong>Angle:</strong> {isID ? 'Menekankan kedamaian mental, rumah rapi mengembalikan mood, meredakan stres, dan waktu istirahat yang utuh.' : 'Emphasizes mental peace, reducing daily stress, a cleaner living space, and recovering comfort/relaxation.'}
                      </p>
                      <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/10">
                        <span className="text-[10px] font-mono text-indigo-400 block">{isID ? 'PROMPTING MESSAGE EX:' : 'EXAMPLES:'}</span>
                        <p className="text-xs font-light text-indigo-200 italic mt-1">
                          {isID ? '"Pulang kerja capek? Mood hancur lihat rumah berantakan? Biarkan profesional kami kembalikan senyum Anda."' : '"Too tired after work to clean your house? Let our professional team handle it for you."'}
                        </p>
                      </div>
                      <div className="flex gap-4 pt-1 font-mono text-[10px]">
                        <div>
                          <span className="text-zinc-500 block">WINNER CTR:</span>
                          <span className="text-indigo-300 font-bold text-sm">1.98%</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">WINNER CPC:</span>
                          <span className="text-emerald-400 font-bold text-sm">{isID ? 'Rp 679' : 'IDR 679'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Rerun Blueprint */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
                  <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-indigo-400" />
                    {isID ? '07. Rerun Recommendation Roadmap' : '07. Future Campaign Improvements'}
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono tracking-wider uppercase">
                    {isID ? '// JIKA KAMPANYE DIULANG KEMBALI BERDASARKAN EVALUASI BEHAVIOR 2026' : '// ADVERTISING ROADMAP BASED ON KEY PERFORMANCE ANALYSIS'}
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    {rerunRecommendations.map((rec, rIdx) => (
                      <div key={rIdx} className="flex gap-3 items-start bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                        <span className="text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 p-1 rounded border border-indigo-500/20 shrink-0">0{rIdx+1}</span>
                        <div>
                          <h5 className="text-xs font-bold text-white font-mono">{rec.step}</h5>
                          <p className="text-zinc-400 text-xs font-light mt-1 leading-relaxed">{rec.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Side: Key Metrics Table & Diagnostic Analysis (5 columns) */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Final Campaign Performance Numbers */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                      {isID ? '05. Realisasi Performa Data Akhir' : '05. Overall Campaign Performance'}
                    </h4>
                    <span className="text-[9px] font-mono bg-red-400/10 text-red-400 px-2 py-0.5 rounded-full border border-red-500/10">
                      {isID ? 'Evaluasi Kampanye' : 'Evaluations'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {campaignMetrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col justify-between space-y-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">{m.label}</span>
                        <span className={`text-xl font-display font-medium ${m.highlight ? 'text-red-400' : 'text-white'}`}>{m.value}</span>
                        <span className="text-[9px] text-zinc-500 font-light leading-snug">{m.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Placement CTR Rankings */}
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">{isID ? 'CTR Terbaik Berdasarkan Penempatan' : 'CTR Best Placements'}</span>
                    <div className="space-y-2">
                      {[
                        { name: 'Instagram Feed', val: '3.33%', progress: 'w-[100%]' },
                        { name: 'Facebook Stories', val: '2.86%', progress: 'w-[85%]' },
                        { name: 'Facebook Video Feed', val: '2.71%', progress: 'w-[80%]' }
                      ].map((item, id) => (
                        <div key={id} className="text-xs space-y-1 font-mono">
                          <div className="flex justify-between">
                            <span className="text-zinc-400">{item.name}</span>
                            <span className="text-indigo-400 font-bold">{item.val}</span>
                          </div>
                          <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                            <div className={`h-full bg-indigo-500 rounded-full ${item.progress}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* What Worked & What Didn't Analysis */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? '06. Wawasan Utama' : '06. Core Audience Diagnostics'}
                  </h4>

                  <div className="space-y-4">
                    {/* What Failed */}
                    <div className="space-y-2">
                      <span className="text-[10px] bg-red-400/10 border border-red-500/20 text-red-400 font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                        {isID ? 'APA YANG TIDAK BERHASIL?' : "WHAT DIDN'T WORK?"}
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-400 font-light leading-relaxed">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                          <span>
                            {isID 
                              ? 'Mendapatkan Prospek Form (0 Leads): Landing page terlalu rumit dan memiliki friksi input yang tinggi sehingga audiens meninggalkan halaman sebelum mendaftar.'
                              : 'No leads were generated: Landing page structures created too much entry friction, leading users to abandon before registering.'
                            }
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                          <span>
                            {isID 
                              ? 'Budget Singkat: Anggaran Rp 400.709 untuk 4 hari tidak cukup memberi algoritma peluang optimasi yang merata.'
                              : 'Insufficient duration: The brief 4-day run and limited budget did not allow the Meta pixel to crawl past its initial learning phase.'
                            }
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* What Worked */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                        {isID ? 'APA YANG BERHASIL?' : 'WHAT WORKED WELL?'}
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-400 font-light leading-relaxed">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>
                            {isID 
                              ? 'CTR Menjanjikan: Angka CTR 1.01% adalah sinyal bahwa daya tarik dari visual & penyesuaian copywriting sudah tepat di kelasnya.'
                              : 'Acceptable CTR performance: Achieving an overall 1.01% CTR for a brand-new service suggests solid copy hooks and creative interest.'
                            }
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>
                            {isID 
                              ? 'Relevansi Target: Audien kelompok Mommy & Daddy memberikan interaksi paling bergairah pada pesan bertema psikologi stres kebersihan.'
                              : 'Accurate targeting persona: The segmented Mummy & Daddy splits responded best, particularly to emotional peace and psychology-based copy.'
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Professional Action plan message */}
                <div className="p-6 rounded-3xl bg-indigo-950/20 border border-indigo-500/10 flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl shrink-0 text-indigo-400">
                    <Flag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">{isID ? 'ESENSI MARKETING DIGITAL' : 'KEY MARKETING LESSON'}</span>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mt-2.5">
                      {isID 
                        ? '"Iklan yang baik bukan sekadar menjangkau orang sebanyak mungkin secara acak, melainkan bagaimana kita membangun corong kepercayaan yang mulus dari tayangan visual hingga transaksi konversi."'
                        : '"The best advertisements do not simply attract attention—they build enough trust for customers to take action."'
                      }
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="tab2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left Side: Audit & Competitor Content Gap (7 columns) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Audit Core Header Card */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-900 to-slate-950 text-white relative overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30 font-semibold border-dashed">
                        {isID ? 'SERP SPECIALIST CASE' : 'SEO SPECIALIST / ANALYST CASE'}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        {isID ? 'AUDIT VERSI MEI 2024' : 'AUDIT VERSION — MAY 2024'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight">
                        {seoAuditDetails.title}
                      </h3>
                      <p className="text-emerald-200/80 text-sm font-light mt-1 max-w-xl">
                        {seoAuditDetails.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-emerald-300 block text-[9px] uppercase tracking-wider">{isID ? 'Thin Content pages' : 'Thin Content Pages'}</span>
                        <span className="font-bold text-white text-base block mt-0.5">{seoAuditDetails.topIssuePages}</span>
                      </div>
                      <div>
                        <span className="text-emerald-300 block text-[9px] uppercase tracking-wider">{isID ? 'Target Rank Goal' : 'Target Rank Goal'}</span>
                        <span className="font-bold text-white text-base block mt-0.5">{seoAuditDetails.targetRank}</span>
                      </div>
                      <div>
                        <span className="text-emerald-300 block text-[9px] uppercase tracking-wider">{isID ? 'Est. Organic Traffic' : 'Est. Organic Traffic'}</span>
                        <span className="font-bold text-emerald-400 text-base block mt-0.5">{seoAuditDetails.estOrganicTraffic}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Website vs Blog Diagnostic results */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                  <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Grid className="w-5 h-5 text-emerald-400" />
                    {isID ? 'Hasil Temuan Audit Teknis (Main Website vs Blog)' : 'Key Technical Findings (Main Website vs Blog)'}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Main Website */}
                    <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl space-y-4">
                      <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest block uppercase">
                        {isID ? '// MAIN WEBSITE FINDINGS' : '// MAIN WEBSITE FINDINGS'}
                      </span>
                      <div className="space-y-3.5 text-xs">
                        {seoMainFindings.map((item, idx) => (
                          <div key={idx} className="flex justify-between pb-1.5 border-b border-white/5">
                            <span className="text-zinc-400 font-light">{item.label}</span>
                            <span className="text-white font-mono font-medium">{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Blog */}
                    <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl space-y-4">
                      <span className="font-mono text-xs text-pink-400 font-bold tracking-widest block uppercase">
                        {isID ? '// BLOG PLATFORM FINDINGS' : '// BLOG SECTION FINDINGS'}
                      </span>
                      <div className="space-y-3.5 text-xs">
                        {seoBlogFindings.map((item, idx) => (
                          <div key={idx} className="flex justify-between pb-1.5 border-b border-white/5">
                            <span className="text-zinc-400 font-light">{item.label}</span>
                            <span className="text-white font-mono font-medium">{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Priority SEO Issues Board */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
                  <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Flag className="w-5 h-5 text-emerald-400" />
                    {isID ? 'Prioritas Temuan SEO Utama' : 'Priority SEO Issues Identified'}
                  </h4>
                  
                  <div className="space-y-4">
                    {prioritySeoIssues.map((issue, idx) => (
                      <div key={idx} className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl flex gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-sm shrink-0">
                          {issue.num}
                        </div>
                        <div className="space-y-1 w-full">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <h5 className="text-sm font-bold text-white font-mono">{issue.title}</h5>
                            <span className={`text-[10px] font-mono ${issue.color}`}>{issue.stars}</span>
                          </div>
                          <p className="text-xs text-zinc-400 font-light leading-relaxed">{issue.desc}</p>
                          <span className="text-[10px] font-mono text-zinc-500 block">{issue.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Gap Analysis Table */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                  <div>
                    <h4 className="text-lg font-display font-medium text-white">
                      {isID ? 'Analisis Kesenjangan Konten Pesaing' : 'Competitor Content Gap Analysis'}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 font-mono">
                      {isID ? 'INSIGHT: KOMPETITOR MENYEDIAKAN KONTEN LEBIH PARAMETRIK & MENDALAM' : 'COMPETITOR STRENGTHS: THOROUGH BUYING AND PRODUCT GUIDATION CLUSTERS'}
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-zinc-400">
                          <th className="pb-3 font-semibold uppercase tracking-wider w-1/2">{isID ? 'KONDISI OSHOP SAAT INI' : 'MISSING CONTENT ELEMENTS ON OSHOP'}</th>
                          <th className="pb-3 font-semibold uppercase tracking-wider w-1/2 text-emerald-400">{isID ? 'KEUNGGULAN UTAMA PESAING' : 'COMPETITOR STRENGTHS'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-zinc-300">
                        {competitorGapRows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td className="py-3 pr-4 font-light text-red-400/80">✗ {row.local}</td>
                            <td className="py-3 pl-4 font-light text-white">✓ {row.comp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* Right Side: Projections, Opportunities & Roadmap (5 columns) */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Traffic and Ranking Projections */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? 'Proyeksi Trafik Organik & Potensi Bisnis' : 'Organic Traffic & Conversion Projection'}
                  </h4>

                  <div className="space-y-4">
                    {/* Traffic metrics group */}
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">{isID ? 'Estimasi Peningkatan Organik Bulanan' : 'Potential Organic Traffic Growth'}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <TrendingUpIcon className="w-5 h-5 text-emerald-400" />
                          <span className="text-3xl font-display font-medium text-emerald-400">{isID ? '+814 / Bulan' : '+814 Visits / Mo'}</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 mt-1 font-light italic">
                          {isID 
                            ? 'Metrik estimasi jika ranking artikel komersial berhasil mengamankan Top 3 Google.'
                            : 'Lift metrics upon successfully winning Top 3 organic ranking positions for search terms.'
                          }
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-zinc-500 block uppercase">{businessImpactProj.conversionTitle}</span>
                          <span className="text-lg font-bold text-white font-mono block mt-0.5">2.3%</span>
                          <span className="text-[8px] text-zinc-500 font-light block mt-0.5">{businessImpactProj.conversionDesc}</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-zinc-500 block uppercase">{businessImpactProj.newConversionsTitle}</span>
                          <span className="text-lg font-bold font-mono text-white block mt-0.5">{businessImpactProj.newConversionsValue}</span>
                          <span className="text-[8px] text-zinc-500 font-light block mt-0.5">{businessImpactProj.newConversionsDesc}</span>
                        </div>
                      </div>
                    </div>

                    {/* Target Keyword Opportunity Details */}
                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl space-y-3 font-mono text-xs">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">{isID ? 'KATA KUNCI UTAMA TARGET:' : 'PRIMARY TARGET KEYWORD:'}</span>
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white">"Rice Cooker Low Carbo"</span>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full uppercase border border-emerald-500/15">Commercial Intent</span>
                      </div>
                      
                      <div className="space-y-2 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">{isID ? 'Volume Pencarian Kata Kunci:' : 'Keyword Search Volume:'}</span>
                          <span className="text-white font-bold">{isID ? '1.600 / Bulan' : '1,600 / Month'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">{isID ? 'Tingkat Kesulitan (KD%):' : 'Keyword Difficulty (KD%):'}</span>
                          <span className="text-emerald-400 font-bold">30% (Low Match)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">{isID ? 'Total Potensi Volume Pencarian:' : 'Total Potential Search Volume:'}</span>
                          <span className="text-white font-bold">{isID ? '4.760 / Bulan' : '4,760 / Month'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyword Battle Candidates */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? 'Pemetaan Kata Kunci Pendukung' : 'Supporting Keywords Analysis'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Rice Cooker Low Carbo Terbaik',
                      'Low Carb Rice Cooker',
                      'Rice Cooker Rendah Gula',
                      'Penanak Nasi Rendah Gula',
                      'Magic Com Low Carb'
                    ].map((key, kIdx) => (
                      <span key={kIdx} className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-zinc-300">
                        {key}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Audit Tools Utilized Badge list */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-5">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? 'Alat Analisis SEO Profesional' : 'Tools Used'}
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-300">
                    {[
                      'Screaming Frog',
                      'SEMrush',
                      'Google Trends',
                      'SEO Minion',
                      'PageSpeed Insights',
                      'Google Search Operators'
                    ].map((tool, idx) => (
                      <div key={idx} className="bg-white/[0.02] border border-white/5 p-2 rounded-lg flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Roadmap overview checklist */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? 'Peta Jalan Perbaikan Strategis' : 'Recommended Improvement Strategy'}
                  </h4>
                  
                  <div className="space-y-4 text-xs font-light">
                    {/* Technical Segment */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider">// {seoRoadmapData.techTitle}</span>
                      <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                        {seoRoadmapData.techBullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Content Segment */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <span className="text-[10px] font-mono text-pink-400 font-bold tracking-wider">// {seoRoadmapData.contentTitle}</span>
                      <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                        {seoRoadmapData.contentBullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === 3 && (
            <motion.div
              key="tab3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left Side: Growth Strategy Overview & Personas (7 columns) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Big Strategy Header Card */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-700 via-pink-900 to-slate-950 text-white relative overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-pink-500/20 px-3 py-1 rounded-full border border-pink-400/30 font-semibold border-dashed">
                        {isID ? 'growth strategy blueprint' : 'Growth Blueprint'}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        {isID ? 'Formasi Iklan 2026' : 'Meta Ads Strategy'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight">
                        {growthBlueprintDetails.title}
                      </h3>
                      <h5 className="text-xs font-mono text-pink-300 mt-1 uppercase tracking-wider">{growthBlueprintDetails.subtitle}</h5>
                      <p className="text-pink-200/80 text-sm font-light mt-3 max-w-xl">
                        {growthBlueprintDetails.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-zinc-300">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                        <span>{isID ? '3 Persona Utama' : '3 Core Personas'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                        <span>{isID ? 'Peta Jalan Berstruktur' : 'Structured Roadmap'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{isID ? 'Penilaian Tolok Ukur' : 'Competitor Benchmarks'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Overview Points */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                  <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Flag className="w-5 h-5 text-pink-400" />
                    {isID ? '1. Komponen Perbaikan Strategis Utama' : '1. Key Strategic Improvements'}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {strategicOverview.map((pt, pIdx) => (
                      <div key={pIdx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl space-y-1">
                        <span className="text-xs font-mono text-pink-400 font-bold block">// {pt.title}</span>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{pt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audience Segmentation Cards */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-lg font-display font-medium text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-pink-400" />
                      {isID ? '3. Rekomendasi Target Audiens Iklan' : '3. Persona Target Audiences'}
                    </h4>
                    <span className="text-[10px] font-mono bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded border border-pink-500/20">
                      Broad + Interest Strategy
                    </span>
                  </div>

                  <div className="space-y-4">
                    {targetPersonas.map((persona, idx) => (
                      <div key={idx} className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl space-y-2 hover:border-pink-500/10 transition-colors">
                        <span className="text-xs font-mono font-bold text-pink-400">{persona.title}</span>
                        <span className="text-[10px] text-zinc-500 font-mono block">{persona.demographics}</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-white/5 text-xs">
                          <div>
                            <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider block">{isID ? 'Kendala Utama (Pain Point):' : 'Pain Points:'}</span>
                            <p className="text-zinc-400 mt-0.5 font-light">{persona.pains}</p>
                          </div>
                          <div>
                            <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider block">{isID ? 'Minat Demografis Terkait:' : 'Intersection Interests:'}</span>
                            <p className="text-zinc-400 mt-0.5 font-light">{persona.interests}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Creative Strategy Mapping */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                  <h4 className="text-lg font-display font-medium text-white">
                    {isID ? '4. Cetak Biru Strategi Kreatif Iklan' : '4. Full-Funnel Creative Strategy Enhancement'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {creativeStrategyGrid.map((cre, cIdx) => (
                      <div key={cIdx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col justify-between h-full space-y-3">
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded border border-pink-500/20 font-bold tracking-widest uppercase block w-max">{cre.step}</span>
                          <span className="text-[11px] font-mono text-zinc-300 font-bold block pt-1">{cre.angle}</span>
                        </div>
                        <p className="text-xs text-zinc-400 italic font-light leading-normal">"{cre.message}"</p>
                        <div className="pt-2 border-t border-white/5 text-[10px] text-zinc-500 font-light">
                          <span className="font-mono text-[8px] block uppercase text-zinc-500">{isID ? 'Idea Visual & Aset:' : 'Creative Idea:'}</span>
                          <span className="mt-0.5 block">{cre.visual}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Side: Funnel, Competitors, Execution Roadmap (5 columns) */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Competitor Benchmark Comparison Card */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                      {isID ? '5. Pemetaan Tolok Ukur Kompetitor' : '5. Competitor Benchmarking'}
                    </h4>
                    <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                      RapiRapi Edge
                    </span>
                  </div>

                  <div className="space-y-4">
                    {competitorBenchmarkData.map((comp, copIdx) => (
                      <div key={copIdx} className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                        <span className="text-xs font-mono font-bold text-white block">{comp.name}</span>
                        <div className="text-[11px] space-y-1 font-light leading-relaxed text-zinc-400">
                          <p className="text-zinc-500 italic">"{isID ? 'Kondisi Pesaing' : 'Competitor Focus'}: {comp.value}"</p>
                          <p className="text-emerald-400 pt-1 font-mono font-normal">➔ {comp.edge}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Structured Funnel Strategy Metrics Table */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? '2. Pengukuran KPI Sesuai Alur Corong' : '2. Recommended Funnel KPIs'}
                  </h4>

                  <div className="space-y-3 font-mono text-xs">
                    {funnelKpis.map((fItem, fIdx) => (
                      <div key={fIdx} className="bg-white/[0.01] border border-white/5 p-3 rounded-lg space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-pink-400 text-[10px]">{fItem.funnelState}</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-sans font-light">{isID ? 'Tujuan' : 'Objective'}: {fItem.goal}</p>
                        <span className="text-[9px] text-zinc-500 block">KPI: {fItem.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Execution Roadmap timeline (4 Weeks) */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? '8. Rencana Peta Jalan Eksekusi' : '8. Execution Roadmap (4 Weeks Target)'}
                  </h4>

                  <div className="space-y-4 relative pl-3 border-l border-white/10 ml-2">
                    {executionWeeks.map((step, sIdx) => (
                      <div key={sIdx} className="relative space-y-1">
                        <div className="absolute top-1 -left-[19px] w-2.5 h-2.5 rounded-full bg-pink-500 border border-zinc-950" />
                        <span className="text-[10px] font-mono text-pink-400 font-bold block">{step.week}</span>
                        <h5 className="text-xs font-bold text-white font-mono">{step.title}</h5>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth Strategy KPI recommendations list */}
                <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    {isID ? '7. Langkah Optimasi Berkelanjutan' : '7. Data-Driven Optimization Recommendations'}
                  </h4>
                  <div className="space-y-2 text-xs font-light text-zinc-400">
                    {optChecklist.map((check, cId) => (
                      <div key={cId} className="flex gap-2 items-center text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                        <span>{check}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
