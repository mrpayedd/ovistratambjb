
import React from 'react';
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  BarChart, 
  MapPin, 
  FileText, 
  PlusCircle,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';

// --- Reusable Components ---

const CTAButton: React.FC<{ text: string; onClick?: () => void; className?: string }> = ({ text, onClick, className }) => (
  <button 
    onClick={onClick}
    className={`bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-8 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 text-xl md:text-2xl uppercase tracking-wider flex items-center justify-center gap-3 ${className}`}
  >
    {text}
    <ArrowRight className="w-6 h-6" />
  </button>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; dark?: boolean }> = ({ title, subtitle, dark }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`text-xl ${dark ? 'text-blue-100' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

// --- Sections ---

const TopHeader = () => (
  <div className="bg-yellow-400 py-3 px-4 text-center border-b border-yellow-500 shadow-sm">
    <p className="text-slate-900 font-bold text-sm md:text-base">
      PERHATIAN: Untuk Pihak Berkuasa Tempatan, Pengurusan Strata & Komuniti Perumahan!
    </p>
  </div>
);

const Hero = () => (
  <section className="relative bg-gradient-primary text-white pt-20 pb-24 px-4 overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
      <div className="bg-blue-600/30 text-blue-200 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
        SOLUSI PENCEGAHAN AWAL DENGGI #1
      </div>
      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
        OVISTRATA <span className="text-yellow-400">MBJB</span>
      </h1>
      <p className="text-xl md:text-3xl font-medium text-blue-100 mb-10 max-w-4xl">
        Sistem Ovitrap Strata Praktikal Untuk Kawalan Pembiakan Nyamuk Aedes Sebelum Denggi Merebak
      </p>
      
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 mb-12 shadow-2xl">
        <img 
          src="https://picsum.photos/seed/ovitrap/1200/600" 
          alt="OVISTRATA Product Mockup" 
          className="rounded-xl w-full object-cover shadow-inner h-[300px] md:h-[450px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {[
          "Direka khas kawasan strata",
          "Fokus pencegahan awal denggi",
          "Kos sangat rendah & praktikal",
          "Mudah dipasang & dipantau",
          "Tidak ganggu persekitaran"
        ].map((feat, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 p-4 rounded-lg border border-white/10 text-left">
            <CheckCircle className="text-yellow-400 shrink-0" />
            <span className="font-semibold">{feat}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading 
        title="Macam Mana Benda Ni Berfungsi?" 
        subtitle="Hanya 3 langkah ringkas untuk lindungi komuniti anda." 
      />
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center group">
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg border-2 border-slate-100">
            <img src="https://picsum.photos/seed/step1/600/400" alt="Step 1" className="w-full hover:scale-110 transition duration-500" />
          </div>
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
          <h3 className="text-2xl font-bold mb-3">Tarik Nyamuk Aedes</h3>
          <p className="text-slate-600">OVISTRATA MBJB menyediakan persekitaran gelap dan lembap yang menarik nyamuk Aedes untuk masuk dan bertelur secara semula jadi tanpa bahan kimia.</p>
        </div>
        <div className="text-center group">
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg border-2 border-slate-100">
            <img src="https://picsum.photos/seed/step2/600/400" alt="Step 2" className="w-full hover:scale-110 transition duration-500" />
          </div>
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
          <h3 className="text-2xl font-bold mb-3">Perangkap & Rekod</h3>
          <p className="text-slate-600">Nyamuk bertelur pada egg strip khas dan pembiakan dapat dikesan serta direkod untuk tujuan pemantauan kawasan berisiko.</p>
        </div>
        <div className="text-center group">
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg border-2 border-slate-100">
            <img src="https://picsum.photos/seed/step3/600/400" alt="Step 3" className="w-full hover:scale-110 transition duration-500" />
          </div>
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
          <h3 className="text-2xl font-bold mb-3">Kawal Dengan Data</h3>
          <p className="text-slate-600">Maklumat daripada ovitrap membantu pasukan kawalan bertindak lebih fokus, cepat dan berkesan sebelum wabak berlaku.</p>
        </div>
      </div>
    </div>
  </section>
);

const ProofSection = () => (
  <section className="py-24 px-4 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Keputusan Yang Jelas" subtitle="Bandingkan sendiri sebelum dan selepas guna sistem ini." dark />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-white/10 p-8 rounded-2xl border-l-8 border-red-500">
            <h4 className="text-2xl font-bold mb-2 text-red-400 uppercase tracking-widest">SEBELUM</h4>
            <p className="text-lg text-slate-300 italic">"Kawasan strata sukar dipantau, pembiakan nyamuk tidak disedari. Kita selalu lambat bertindak bila dah ada kes."</p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl border-l-8 border-green-500">
            <h4 className="text-2xl font-bold mb-2 text-green-400 uppercase tracking-widest">SELEPAS</h4>
            <p className="text-lg text-slate-300 italic">"Kawalan awal, pemantauan konsisten dan tindakan lebih tersusun. Data membantu kita nampak kat mana punca masalah."</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
          <img src="https://picsum.photos/seed/result/800/600" alt="Result proof" className="w-full" />
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Kenapa Kita Masih Gagal Kawal Denggi?" />
      <div className="grid gap-8">
        {[
          { icon: <MapPin className="text-red-600 w-12 h-12" />, title: "Masalah #1 – Kawasan Strata Sukar Dikawal", desc: "Banyak sudut kecil bertakung air menjadikan pembiakan nyamuk mudah berlaku tanpa disedari." },
          { icon: <AlertTriangle className="text-red-600 w-12 h-12" />, title: "Masalah #2 – Fogging Bukan Solusi Kekal", desc: "Semburan hanya sementara, kos tinggi dan tidak menyelesaikan masalah telur nyamuk secara akar umbi." },
          { icon: <BarChart className="text-red-600 w-12 h-12" />, title: "Masalah #3 – Kurang Data Pemantauan", desc: "Tanpa sistem ovitrap, sukar mengenal pasti lokasi sebenar pembiakan nyamuk sebelum ianya meletup jadi wabak." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl shadow-md border border-slate-200">
            <div className="shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-lg text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SimpleSolution = () => (
  <section className="py-24 px-4 bg-blue-700 text-white">
    <div className="max-w-6xl mx-auto text-center">
      <SectionHeading title="Ini Je Step Dia → Terus Dapat Result!" subtitle="Tak payah pening kepala, tak payah setup susah-susah." dark />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { step: "No.1", title: "Pasang Unit", desc: "Diposisikan di lokasi strategik kawasan strata perumahan anda." },
          { step: "No.2", title: "Pantau Egg Strip", desc: "Pemeriksaan ringkas seminggu sekali memberi maklumat jelas tahap pembiakan." },
          { step: "No.3", title: "Ambil Tindakan", desc: "Kawalan dibuat secara 'surgical strike' sebelum denggi merebak." }
        ].map((item, i) => (
          <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
            <div className="text-yellow-400 font-black text-4xl mb-4">{item.step}</div>
            <h3 className="text-2xl font-extrabold mb-3">{item.title}</h3>
            <p className="text-blue-100">{item.desc}</p>
          </div>
        ))}
      </div>
      <CTAButton text="Dapatkan OVISTRATA Sekarang" className="mt-16 mx-auto" />
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Apa Kata Mereka Yang Dah Guna?" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Pengurusan Strata", text: "Sangat Sesuai Untuk Kawasan PPR. Reka bentuk mudah, tak ganggu penduduk dan sangat praktikal." },
          { name: "Pegawai Kesihatan", text: "Bantu Kawalan Denggi Lebih Awal. Kami boleh kesan kawasan berisiko sebelum kes meningkat." },
          { name: "Wakil Komuniti", text: "Kos Rendah Tapi Berkesan. Dengan bajet kecil, impaknya sangat membantu komuniti." }
        ].map((t, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-4 border-blue-100">
              <img src={`https://picsum.photos/seed/person${i}/200/200`} alt={t.name} />
            </div>
            <p className="text-lg italic text-slate-700 mb-6">"{t.text}"</p>
            <div className="font-bold text-blue-800">— {t.name}</div>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, j) => <ThumbsUp key={j} className="w-4 h-4 text-yellow-500 fill-current" />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const USPSection = () => (
  <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <SectionHeading title="Kenapa OVISTRATA Sangat Jimat?" dark />
      <div className="grid md:grid-cols-2 gap-6 text-left">
        {[
          "Tak perlu sistem elektrik",
          "Tak perlu kos penyelenggaraan tinggi",
          "Tak perlu fogging berulang",
          "Tak perlu tunggu wabak berlaku"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
            <XCircle className="text-red-500 w-8 h-8 shrink-0" />
            <span className="text-xl font-bold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductIntroduction = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-2">Memperkenalkan...</h4>
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">OVISTRATA MBJB</h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Sistem ovitrap strata yang direka khusus untuk kawalan pembiakan nyamuk Aedes secara pencegahan awal. Bukan sekadar perangkap, ianya sistem pengurusan kesihatan komuniti.
        </p>
        <ul className="space-y-4 mb-10">
          {["Sesuai kawasan bertingkat", "Mudah dipasang", "Selamat & bersih", "Kos rendah", "Mudah diperluas"].map((li, i) => (
            <li key={i} className="flex items-center gap-3 font-bold text-lg text-slate-800">
              <PlusCircle className="text-blue-600" /> {li}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
        <img src="https://picsum.photos/seed/productintro/800/1000" alt="Product" />
      </div>
    </div>
  </section>
);

const ValueStack = () => (
  <section className="py-24 px-4 bg-gray-50 border-y border-gray-200">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Apa Yang Anda Dapat?" subtitle="Pakej lengkap untuk permulaan pantas." />
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-8 md:p-12 space-y-6">
          {[
            { title: "Unit Ovitrap Strata", desc: "Perangkap khas nyamuk Aedes", value: "RM80" },
            { title: "Egg Strip Pemantauan", desc: "Media pengesanan telur berkualiti", value: "RM40" },
            { title: "Reka Bentuk Berlapis", desc: "Pisahkan ovitrap & pelupusan dengan selamat", value: "RM60" },
            { title: "Bekas Puntung Rokok Tahan Haba", desc: "Kebersihan terjamin di kawasan perokok", value: "RM30" },
            { title: "Manual Operasi Ringkas", desc: "Panduan penggunaan langkah demi langkah", value: "RM20" },
            { title: "Sistem Mudah Replikasi", desc: "Boleh diperluas ke lokasi lain dengan kos minima", value: "RM50" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div>
                <div className="font-bold text-xl text-slate-900">{item.title}</div>
                <div className="text-slate-500 text-sm">{item.desc}</div>
              </div>
              <div className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg shrink-0">Value: {item.value}</div>
            </div>
          ))}
        </div>
        <div className="bg-blue-600 p-8 text-center text-white">
          <div className="text-xl uppercase tracking-widest font-bold opacity-80">JUMLAH NILAI SEBENAR</div>
          <div className="text-5xl font-black mt-2">RM330.00+</div>
        </div>
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Dapatkan 3 Bonus Eksklusif Ini!" subtitle="Hanya jika anda mohon sekarang (Tawaran Projek Terhad)" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Panduan Lokasi Strategik", value: "RM30", desc: "Cara pilih lokasi paling efektif untuk pasang unit." },
          { title: "Template Rekod Pemantauan", value: "RM20", desc: "Mudah simpan dan rujuk data setiap minggu." },
          { title: "Panduan Tindakan Susulan", value: "RM20", desc: "Bertindak cepat berdasarkan dapatan pada ovitrap." }
        ].map((b, i) => (
          <div key={i} className="relative group">
            <div className="bg-yellow-400 absolute -top-4 -right-4 px-4 py-1 rounded-full font-bold text-xs shadow-lg transform rotate-12 z-10">BONUS #{i+1}</div>
            <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-lg transition hover:-translate-y-2">
              <img src={`https://picsum.photos/seed/bonus${i}/600/400`} alt={b.title} className="w-full" />
              <div className="p-6">
                <h3 className="font-extrabold text-xl mb-2">{b.title}</h3>
                <p className="text-slate-600 mb-4">{b.desc}</p>
                <div className="text-blue-700 font-bold">Value: {b.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OfferSection = () => (
  <section className="py-24 px-4 bg-red-50">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-block font-bold text-sm mb-6 animate-pulse">
        TAWARAN KHAS PROJEK KOMUNITI
      </div>
      <p className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
        Nilai sebenar sistem ini melebihi <span className="underline decoration-red-500">RM330</span> jika dibangunkan secara berasingan.
      </p>
      <p className="text-xl text-slate-700 mb-12">
        Namun, <span className="font-black">OVISTRATA MBJB</span> ditawarkan sebagai projek pencegahan komuniti, 
        bukan jualan komersial untuk keuntungan semata-mata.
      </p>
      
      <div className="bg-white p-12 rounded-[3rem] shadow-3xl border-4 border-red-500 relative">
        <div className="text-slate-600 font-bold line-through text-3xl mb-2">RM330+</div>
        <div className="text-red-600 text-8xl font-black mb-4">RM100</div>
        <div className="text-2xl font-bold text-slate-900 uppercase tracking-widest mb-8">Sahaja Per Unit</div>
        
        <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
          <div className="flex gap-3 items-center text-lg font-bold text-slate-700">
            <ShieldCheck className="text-green-500 shrink-0" />
            Terhad untuk kegunaan kawalan denggi
          </div>
          <div className="flex gap-3 items-center text-lg font-bold text-slate-700">
            <ShieldCheck className="text-green-500 shrink-0" />
            Fokus manfaat kesihatan awam
          </div>
        </div>

        <CTAButton text="Mohon OVISTRATA Sekarang" className="w-full py-6 text-3xl" />
      </div>
    </div>
  </section>
);

const ObjectionHandler = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="bg-blue-900 text-white p-12 rounded-3xl shadow-2xl relative">
        <MessageSquare className="absolute top-10 right-10 w-24 h-24 text-white/10" />
        <h3 className="text-3xl font-black mb-6">Kenapa Hanya RM100?</h3>
        <p className="text-xl leading-relaxed mb-10 text-blue-100">
          RM100 ini bukan kerana sistem ini murah atau ringkas, tetapi kerana objektif utama kami adalah <span className="text-yellow-400 font-bold italic">pencegahan awal</span> untuk selamatkan nyawa, bukan kaut keuntungan.
        </p>
        <div className="space-y-6">
          <p className="font-bold text-2xl border-b border-white/20 pb-4">Satu unit ini mampu membantu:</p>
          {[
            "Kurangkan pembiakan Aedes secara drastik",
            "Elak kos rawatan hospital & fogging berulang yang mahal",
            "Lindungi keselamatan komuniti anda lebih awal"
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <Zap className="text-yellow-400 shrink-0" />
              <span className="text-lg md:text-xl font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white text-center">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Ambil Tindakan Sebelum Denggi Menyerang!" />
      <div className="bg-white p-12 rounded-3xl shadow-xl border-2 border-blue-600 mb-12">
        <p className="text-3xl font-bold text-slate-800 mb-8 italic">
          “OVISTRATA MBJB sangat membantu kawalan denggi di kawasan bertingkat. Jangan tunggu kes naik baru nak buat sesuatu.”
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 rounded-2xl gap-4">
          <div className="text-left">
            <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">Total Value</div>
            <div className="text-4xl font-black text-slate-900">RM100 <span className="text-sm font-normal text-slate-400">(Nett)</span></div>
          </div>
          <CTAButton text="Dapatkan Unit RM100 Ini Sekarang" />
        </div>
      </div>
      
      <div className="mt-12 group">
        <div className="flex items-center justify-center gap-6 mb-8">
           <img src="https://picsum.photos/seed/final/400/300" alt="Final Trust" className="w-64 rounded-2xl shadow-lg border-2 border-white group-hover:rotate-3 transition duration-300" />
           <p className="text-left max-w-sm font-medium text-slate-600">
             “Dengan kos minimum, impaknya sangat besar untuk komuniti. Kita mampu cegah kalau ada sistem yang betul.”
           </p>
        </div>
        <CTAButton text="Dapatkan OVISTRATA MBJB Sekarang" className="mx-auto" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h3 className="text-white font-black text-2xl mb-2">OVISTRATA MBJB</h3>
        <p>© 2024 Kawalan Denggi Strata. Projek Pencegahan Komuniti.</p>
      </div>
      <div className="flex gap-8 font-bold">
        <a href="#" className="hover:text-white">Terma & Syarat</a>
        <a href="#" className="hover:text-white">Polisi Privasi</a>
        <a href="#" className="hover:text-white">Hubungi Kami</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-200 selection:text-blue-900">
      <TopHeader />
      <Hero />
      <Education />
      <ProofSection />
      <ProblemSection />
      <SimpleSolution />
      <Testimonials />
      <USPSection />
      <ProductIntroduction />
      <ValueStack />
      <Bonuses />
      <OfferSection />
      <ObjectionHandler />
      <FinalCTA />
      <Footer />
      
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 md:hidden z-50">
        <CTAButton text="Mohon Sekarang - RM100" className="w-full !text-lg !py-3" />
      </div>
    </div>
  );
}
