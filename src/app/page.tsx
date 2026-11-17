import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Shield, Zap, Sparkles, Layout, Code, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 lux-nav">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/ting-ai-logo-compact-light.png" 
              alt="Tings AI Logo" 
              className="h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
            <Link href="#fitur" className="hover:text-white transition-colors">Fitur</Link>
            <Link href="#teknologi" className="hover:text-white transition-colors">Teknologi</Link>
            <Link href="#harga" className="hover:text-white transition-colors">Harga</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="https://app.tingsai.my.id" 
              className="hidden md:inline-flex items-center justify-center text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Masuk
            </Link>
            <Link 
              href="https://app.tingsai.my.id" 
              className="lux-btn-primary px-5 py-2 text-sm flex items-center gap-2"
            >
              Buka App
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-16">
        {/* Hero Section - Notion/Vercel Aesthetic */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center md:text-left flex flex-col md:flex-row items-center gap-16 relative">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}>
          </div>

          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-xs font-medium text-gray-300 mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Tings AI 2.0 Kini Tersedia
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 text-white">
              Navigasi Pasar <br className="hidden md:block"/>
              <span className="text-gray-400">Lebih Cerdas.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
              Asisten AI investasi personal Anda. Dirancang khusus untuk menganalisis ekonomi makro, memprediksi tren pasar, dan mengoptimalkan portofolio secara real-time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link 
                href="https://app.tingsai.my.id" 
                className="lux-btn-primary px-6 py-3 w-full sm:w-auto flex items-center justify-center gap-2 text-base"
              >
                Mulai Sekarang <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="https://app.tingsai.my.id" 
                className="lux-btn-secondary px-6 py-3 w-full sm:w-auto flex items-center justify-center gap-2 text-base"
              >
                Lihat Demo
              </Link>
            </div>
          </div>

          {/* Hero Visual - Clean, realistic UI representation */}
          <div className="flex-1 w-full max-w-2xl relative z-10 soft-glow">
            <div className="lux-card p-2 md:p-4 aspect-video flex flex-col bg-[#050505]">
              {/* Fake Window Header */}
              <div className="flex items-center gap-2 px-2 pb-3 border-b border-[rgba(255,255,255,0.05)]">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
              </div>
              {/* Fake App Content */}
              <div className="flex-1 flex gap-4 pt-4">
                <div className="w-48 hidden sm:flex flex-col gap-2 border-r border-[rgba(255,255,255,0.05)] pr-4">
                  <div className="h-6 w-24 bg-[rgba(255,255,255,0.05)] rounded"></div>
                  <div className="h-4 w-full bg-[rgba(255,255,255,0.03)] rounded mt-4"></div>
                  <div className="h-4 w-5/6 bg-[rgba(255,255,255,0.03)] rounded"></div>
                  <div className="h-4 w-4/6 bg-[rgba(255,255,255,0.03)] rounded"></div>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="h-8 w-1/3 bg-[rgba(255,255,255,0.08)] rounded mb-2"></div>
                  <div className="h-24 w-full bg-[rgba(255,255,255,0.03)] rounded-lg border border-[rgba(255,255,255,0.05)]"></div>
                  <div className="h-24 w-full bg-[rgba(255,255,255,0.03)] rounded-lg border border-[rgba(255,255,255,0.05)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Cloud - Social Proof */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-y border-[rgba(255,255,255,0.05)]">
          <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
            Dipercaya oleh inovator di seluruh dunia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {/* Using text as placeholders for logos, but styled elegantly */}
            <span className="text-xl font-bold font-serif tracking-tighter">Acme Corp</span>
            <span className="text-xl font-black uppercase tracking-widest">Quantum</span>
            <span className="text-xl font-semibold flex items-center gap-1"><Box className="w-5 h-5"/> Nexus</span>
            <span className="text-xl font-medium tracking-tight">Vortex AI</span>
          </div>
        </section>

        {/* Features Section - Clean Cards */}
        <section id="fitur" className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Investasi dengan Data Valid.</h2>
            <p className="text-lg text-gray-400 font-light">
              Tinggalkan spekulasi. Kami membangun algoritma cerdas yang membedah jutaan data finansial untuk memberikan Anda insight yang tajam dan akurat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="lux-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Analisis Pasar Real-time</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pantau pergerakan pasar saham, kripto, dan forex dalam hitungan milidetik. Algoritma kami mendeteksi anomali sebelum terjadi.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Pelajari indikator kami <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="lux-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Manajemen Risiko</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Amankan portofolio Anda dengan sistem peringatan dini. Tings AI otomatis menghitung rasio risiko dan potensi drawdown aset Anda.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Lihat simulasi risiko <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="lux-card p-8 group">
              <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Insight Makro-ekonomi</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pahami dampak kebijakan bank sentral, suku bunga, dan berita global terhadap nilai aset Anda dengan analisis AI mendalam.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Jelajahi fitur makro <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Teknologi Section */}
        <section id="teknologi" className="max-w-7xl mx-auto px-6 py-32 border-t border-[rgba(255,255,255,0.05)]">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-center">Mesin Penggerak Keuntungan</h2>
            <p className="text-lg text-gray-400 font-light text-center max-w-2xl mx-auto">
              Infrastruktur kami dirancang khusus untuk memproses data finansial kompleks, memanfaatkan teknologi AI prediktif untuk memberikan hasil analisis yang tajam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="lux-card p-10">
              <h3 className="text-2xl font-medium mb-4 text-white">Analisis Sentimen Berita & Sosial</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Model NLP kami memindai ribuan berita finansial, laporan pendapatan, dan tren media sosial setiap detiknya untuk mengukur sentimen pasar terhadap aset tertentu sebelum harga bergerak.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300">News-Scraping</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300">Sentiment Score</span>
              </div>
            </div>
            
            <div className="lux-card p-10">
              <h3 className="text-2xl font-medium mb-4 text-white">Pemodelan Kuantitatif Neural</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Memanfaatkan Deep Learning terkini untuk menemukan pola tersembunyi dalam data historis. Sistem kami memproyeksikan pergerakan harga probabilistik untuk membantu Anda menentukan titik masuk dan keluar terbaik.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300">Predictive Modeling</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300">Quant Analysis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Harga Section */}
        <section id="harga" className="max-w-7xl mx-auto px-6 py-32 border-t border-[rgba(255,255,255,0.05)]">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Harga Transparan</h2>
            <p className="text-lg text-gray-400 font-light max-w-xl mx-auto">
              Pilih paket langganan yang paling sesuai dengan gaya trading Anda. Akses data premium dan asisten AI pintar tanpa batasan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="lux-card p-8 flex flex-col">
              <h3 className="text-xl font-medium mb-2 text-white">Starter</h3>
              <p className="text-gray-400 text-sm mb-6">Untuk individu dan proyek kecil.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">Gratis</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Akses model dasar
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> 1,000 request per bulan
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Dukungan komunitas
                </li>
              </ul>
              <Link href="https://app.tingsai.my.id" className="lux-btn-secondary px-4 py-3 text-center text-sm block">Mulai Gratis</Link>
            </div>

            {/* Pro Plan */}
            <div className="lux-card p-8 flex flex-col relative border-gray-600 soft-glow transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-white"></div>
              <h3 className="text-xl font-medium mb-2 text-white">Pro</h3>
              <p className="text-gray-400 text-sm mb-6">Untuk profesional dan tim kecil.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">Rp 30rb</span>
                <span className="text-gray-500">/bln</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Akses model lanjutan
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div> 50,000 request per bulan
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Prioritas respons API
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Dukungan email 24/7
                </li>
              </ul>
              <Link href="https://app.tingsai.my.id" className="lux-btn-primary px-4 py-3 text-center text-sm block">Berlangganan Pro</Link>
            </div>

            {/* Enterprise Plan */}
            <div className="lux-card p-8 flex flex-col">
              <h3 className="text-xl font-medium mb-2 text-white">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-6">Kekuatan penuh untuk perusahaan.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">Kustom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Model khusus domain
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Request tak terbatas
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Deployment on-premise
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Manajer akun khusus
                </li>
              </ul>
              <Link href="mailto:contact@tingsai.my.id" className="lux-btn-secondary px-4 py-3 text-center text-sm block">Hubungi Penjualan</Link>
            </div>
          </div>
        </section>

        {/* Minimalist CTA */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="lux-card p-12 md:p-20 flex flex-col items-center border-[rgba(255,255,255,0.15)] bg-gradient-to-b from-[#0A0A0A] to-black">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">Ambil Kendali Portofolio Anda</h2>
            <p className="text-gray-400 mb-10 max-w-lg font-light">
              Bergabung dengan para investor modern yang telah meningkatkan rasio keuntungan mereka berkat analisis data dari Tings AI.
            </p>
            <Link 
              href="https://app.tingsai.my.id" 
              className="lux-btn-primary px-8 py-4 text-base w-full sm:w-auto"
            >
              Mulai Investasi Lebih Cerdas
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,255,255,0.05)] bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2">
              <img 
                src="/ting-ai-logo-compact-light.png" 
                alt="Tings AI Logo" 
                className="h-6 w-auto object-contain mb-6 opacity-80"
              />
              <p className="text-sm text-gray-500 max-w-xs">
                Membangun masa depan kecerdasan buatan dengan desain dan performa tanpa kompromi.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Produk</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Platform</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Perusahaan</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Karir</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.05)] text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Tings AI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gray-300 transition-colors">Privasi</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">Ketentuan</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


