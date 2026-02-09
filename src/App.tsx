import React from "react";
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
  ThumbsUp,
} from "lucide-react";

/** =========================
 *  CONFIG
 *  ========================= */
const WHATSAPP_MAIN =
  "https://wa.me/60175643706?text=Hi%20Saya%20nak%20mohon%20OVISTRATA%20MBJB%20(RM100%20per%20unit).%20Boleh%20share%20cara%20tempahan%20dan%20cadangan%20kuantiti%20untuk%20kawasan%20saya?";
const WHATSAPP_SIMPLE =
  "https://wa.me/60175643706?text=Hi%20Saya%20nak%20mohon%20OVISTRATA%20MBJB%20(RM100%20per%20unit).";
const FORM_URL = ""; // Kalau ada Google Form, letak sini. Kalau tak, biarkan kosong.

/** =========================
 *  Reusable Components
 *  ========================= */

const CTAButton: React.FC<{
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}> = ({ text, href, onClick, className, variant = "primary" }) => {
  const base =
    "font-extrabold py-4 px-8 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 text-xl md:text-2xl uppercase tracking-wider flex items-center justify-center gap-3";
  const styles =
    variant === "primary"
      ? "bg-red-600 hover:bg-red-700 text-white"
      : "bg-white/10 hover:bg-white/20 text-white border border-white/30";

  // 👉 Kalau ada href (WhatsApp), guna <a>
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {text}
        <ArrowRight className="w-6 h-6" />
      </a>
    );
  }

  // 👉 Kalau tak ada href, fallback ke button biasa
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {text}
      <ArrowRight className="w-6 h-6" />
    </button>
  );
};


const SectionHeading: React.FC<{
  title: string;
  subtitle?: string;
  dark?: boolean;
}> = ({ title, subtitle, dark }) => (
  <div className="text-center mb-12">
    <h2
      className={`text-3xl md:text-5xl font-extrabold mb-4 ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`text-xl ${dark ? "text-blue-100" : "text-slate-600"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

/** =========================
 *  Sections
 *  ========================= */

const TopHeader = () => (
  <div className="bg-yellow-400 py-3 px-4 text-center border-b border-yellow-500 shadow-sm">
    <p className="text-slate-900 font-bold text-sm md:text-base">
      PERHATIAN: Untuk Pihak Berkuasa Tempatan, Pengurusan Strata & Komuniti
      Perumahan!
    </p>
  </div>
);

const Hero = () => (
  <section className="relative bg-gradient-primary text-white pt-20 pb-24 px-4 overflow-hidden">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
      <div className="bg-blue-600/30 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-300/30">
        ✅ Sistem Pencegahan Awal Denggi Untuk Kawasan Strata
      </div>

      <h1 className="text-4xl md:text-7xl font-extrabold mb-5 leading-tight">
        OVISTRATA <span className="text-yellow-400">MBJB</span>
      </h1>

      <p className="text-xl md:text-3xl font-medium text-blue-100 mb-8 max-w-4xl">
        Pantau pembiakan Aedes lebih awal — tindakan lebih cepat & lebih tepat
        sebelum kes denggi meningkat.
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mb-10">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl">
          <img
            src="/images/rumah-flat.jpg"
            alt="Kawasan Rumah Flat / Pangsapuri Strata"
            className="rounded-xl w-full object-cover shadow-inner h-[260px] md:h-[380px]"
          />
          <div className="mt-3 text-sm text-blue-100 font-semibold">
            Visual kawasan strata (contoh lokasi berisiko)
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl">
          <img
            src="/images/ovistrata-unit.png"
            alt="Unit OVISTRATA MBJB"
            className="rounded-xl w-full object-contain bg-white/85 h-[260px] md:h-[380px] p-6"
          />
          <div className="mt-3 text-sm text-blue-100 font-semibold">
            Unit OVISTRATA MBJB (produk sebenar)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mb-10">
        {[
          "Direka khas kawasan strata",
          "Fokus pencegahan awal denggi",
          "Kos sangat rendah & praktikal",
          "Mudah dipasang & dipantau",
          "Tidak ganggu persekitaran",
        ].map((feat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/5 p-4 rounded-lg border border-white/10 text-left"
          >
            <CheckCircle className="text-yellow-400 shrink-0" />
            <span className="font-semibold">{feat}</span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-3xl grid gap-4">
        <CTAButton text="Mohon / Tempah via WhatsApp" href={WHATSAPP_MAIN} />
        <CTAButton
          text="Lihat Pakej & Harga RM100"
          href="#pakej"
          variant="secondary"
          className="mx-auto !w-full"
        />
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="Macam Mana OVISTRATA Berfungsi?"
        subtitle="3 langkah ringkas — pasang, pantau, dan bertindak sebelum denggi merebak."
      />

      <div className="grid md:grid-cols-3 gap-12">
        {/* STEP 1 */}
        <div className="text-center group">
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg border-2 border-slate-100">
            <img
              src="/images/rumah-flat.jpg"
              alt="Kawasan strata perumahan"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            1
          </div>
          <h3 className="text-2xl font-bold mb-3">Letak Di Lokasi Strategik</h3>
          <p className="text-slate-600">
            Pasang di spot berisiko (koridor, tangga, belakang bangunan, kawasan
            lembap & terlindung) supaya pemantauan jadi konsisten.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="text-center group">
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg border-2 border-slate-100">
            <img
              src="/images/ovistrata-unit.png"
              alt="Unit OVISTRATA MBJB"
              className="w-full h-64 object-contain bg-gray-50 p-6"
            />
          </div>
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            2
          </div>
          <h3 className="text-2xl font-bold mb-3">Pantau Egg Strip</h3>
          <p className="text-slate-600">
            Semakan ringkas mingguan pada egg strip memberi “signal awal” jika
            kawasan sedang aktif pembiakan Aedes.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="text-center group">
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg border-2 border-slate-100">
            <img
              src="/images/rumah-flat.jpg"
              alt="Tindakan di kawasan strata"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            3
          </div>
          <h3 className="text-2xl font-bold mb-3">Tindakan Fokus (Surgical)</h3>
          <p className="text-slate-600">
            Bila data menunjukkan “hotspot”, tindakan boleh dibuat lebih tepat:
            cari punca takungan, bersihkan & kawal sebelum kes meningkat.
          </p>
        </div>
      </div>

      <div className="mt-14 flex justify-center max-w-xl mx-auto">
        <CTAButton text="Minta Cadangan Kuantiti" href={WHATSAPP_MAIN} />
      </div>
    </div>
  </section>
);

const ProofSection = () => (
  <section className="py-24 px-4 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="Keputusan Yang Jelas"
        subtitle="Bezakan kawalan biasa vs pemantauan awal guna OVISTRATA."
        dark
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { t: "Tindakan awal", d: "Nampak risiko sebelum kes naik" },
          { t: "Pemantauan konsisten", d: "Data mingguan egg strip" },
          { t: "Tindakan fokus", d: "Kerja di lokasi tepat" },
        ].map((x, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="text-xl font-extrabold text-yellow-300">{x.t}</div>
            <div className="text-slate-300 mt-2">{x.d}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="space-y-6">
          <div className="bg-white/10 p-8 rounded-2xl border-l-8 border-red-500">
            <h4 className="text-2xl font-black mb-2 text-red-300 uppercase tracking-widest">
              Sebelum
            </h4>
            <p className="text-lg text-slate-200 italic leading-relaxed">
              “Kawasan strata sukar dipantau. Pembiakan nyamuk berlaku tanpa
              disedari, dan tindakan selalunya lambat bila kes dah naik.”
            </p>
            <div className="mt-4 text-sm text-slate-300">
              ✅ Banyak spot tersembunyi • ❌ Tiada data tetap
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl border-l-8 border-green-500">
            <h4 className="text-2xl font-black mb-2 text-green-300 uppercase tracking-widest">
              Selepas
            </h4>
            <p className="text-lg text-slate-200 italic leading-relaxed">
              “Dengan ovitrap dan rekod pemantauan, kita nampak kawasan berisiko
              lebih awal. Tindakan jadi tersusun dan lebih berkesan.”
            </p>
            <div className="mt-4 text-sm text-slate-300">
              ✅ Ada data egg strip • ✅ Tindakan lebih fokus
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white/5">
          <div className="p-4">
            <div className="text-sm font-bold text-slate-200 mb-3">
              Visual kawasan & unit OVISTRATA
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/rumah-flat.jpg"
                  alt="Kawasan strata"
                  className="w-full h-[240px] object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/80">
                <img
                  src="/images/ovistrata-unit.png"
                  alt="Unit OVISTRATA MBJB"
                  className="w-full h-[240px] object-contain p-6"
                />
              </div>
            </div>

            <div className="mt-5">
              <CTAButton
                text="Mohon OVISTRATA Untuk Kawasan Anda"
                href={WHATSAPP_MAIN}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Kenapa Kawasan Strata Mudah Jadi Hotspot Denggi?" />
      <div className="grid gap-8">
        {[
          {
            icon: <MapPin className="text-red-600 w-12 h-12" />,
            title: "Masalah #1 – Banyak Sudut Tersembunyi",
            desc: "Banyak ruang kecil bertakung air (tak nampak dari luar) menyebabkan pembiakan nyamuk berlaku tanpa disedari.",
          },
          {
            icon: <AlertTriangle className="text-red-600 w-12 h-12" />,
            title: "Masalah #2 – Fogging Bukan Solusi Kekal",
            desc: "Semburan hanya sementara, kos tinggi dan tidak menyelesaikan punca telur & kitaran pembiakan secara konsisten.",
          },
          {
            icon: <BarChart className="text-red-600 w-12 h-12" />,
            title: "Masalah #3 – Tiada Data Pemantauan",
            desc: "Tanpa sistem ovitrap, sukar kenal pasti lokasi sebenar pembiakan sebelum keadaan bertukar jadi wabak.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl shadow-md border border-slate-200"
          >
            <div className="shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">
                {item.title}
              </h3>
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
      <SectionHeading
        title="Ini Je Step Dia → Terus Dapat Result!"
        subtitle="Tak payah pening kepala, tak payah setup susah-susah."
        dark
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            step: "No.1",
            title: "Pasang Unit",
            desc: "Letak di lokasi strategik kawasan strata perumahan anda.",
          },
          {
            step: "No.2",
            title: "Pantau Egg Strip",
            desc: "Semakan ringkas mingguan memberi gambaran jelas pembiakan.",
          },
          {
            step: "No.3",
            title: "Ambil Tindakan",
            desc: "Bertindak cepat di hotspot sebelum kes meningkat.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm"
          >
            <div className="text-yellow-400 font-black text-4xl mb-4">
              {item.step}
            </div>
            <h3 className="text-2xl font-extrabold mb-3">{item.title}</h3>
            <p className="text-blue-100">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="max-w-xl mx-auto mt-16">
        <CTAButton text="Mohon OVISTRATA Sekarang" href={WHATSAPP_MAIN} />
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Apa Kata Mereka Yang Perlukan Sistem Ini?" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Pengurusan Strata",
            text: "Sesuai untuk kawasan PPR/flat. Mudah pasang, tak ganggu penduduk dan pemantauan jadi lebih tersusun.",
          },
          {
            name: "Pegawai Kesihatan",
            text: "Dengan data ovitrap, tindakan lebih awal boleh dibuat. Tak perlu tunggu kes naik baru bertindak.",
          },
          {
            name: "Wakil Komuniti",
            text: "Kos rendah tetapi impak besar. Komuniti lebih faham dan lebih cepat bekerjasama bila ada sistem pemantauan.",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-4 border-blue-100 bg-white flex items-center justify-center">
              <ThumbsUp className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-lg italic text-slate-700 mb-6">“{t.text}”</p>
            <div className="font-bold text-blue-800">— {t.name}</div>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, j) => (
                <ThumbsUp
                  key={j}
                  className="w-4 h-4 text-yellow-500 fill-current"
                />
              ))}
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
          "Tak perlu tunggu wabak berlaku",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10"
          >
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
        <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-2">
          Memperkenalkan Sistem Rasmi
        </h4>
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">
          OVISTRATA MBJB
        </h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          OVISTRATA MBJB ialah sistem ovitrap strata yang direka khusus untuk
          kawalan pembiakan nyamuk Aedes secara pencegahan awal — praktikal,
          kos efektif dan mudah dilaksanakan di kawasan perumahan bertingkat.
        </p>

        <ul className="space-y-4 mb-10">
          {[
            "Direka khas untuk kawasan strata & perumahan bertingkat",
            "Pemasangan mudah tanpa elektrik atau bahan kimia",
            "Selamat, bersih dan tidak mengganggu penduduk",
            "Kos rendah untuk pelaksanaan berskala besar",
            "Mudah diperluas ke blok atau kawasan lain",
          ].map((li, i) => (
            <li
              key={i}
              className="flex items-center gap-3 font-bold text-lg text-slate-800"
            >
              <PlusCircle className="text-blue-600 shrink-0" /> {li}
            </li>
          ))}
        </ul>

        <div className="max-w-md">
          <CTAButton text="WhatsApp untuk Maklumat" href={WHATSAPP_MAIN} />
        </div>
      </div>

      <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl bg-gray-50 p-8">
        <img
          src="/images/ovistrata-unit.png"
          alt="Unit Ovistrata MBJB"
          className="w-full h-[520px] object-contain"
        />
      </div>
    </div>
  </section>
);

const ValueStack = () => (
  <section id="pakej" className="py-24 px-4 bg-gray-50 border-y border-gray-200">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title="Pakej OVISTRATA MBJB (Siap Sedia Untuk Digunakan)"
        subtitle="Semua yang diperlukan untuk mula pemantauan & tindakan awal — tanpa pening kepala."
      />

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-blue-700 font-extrabold uppercase tracking-widest text-xs">
                  Kandungan Pakej
                </div>
                <h3 className="text-3xl font-black text-slate-900 mt-2">
                  Apa Yang Anda Terima
                </h3>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                  Jumlah Nilai
                </div>
                <div className="text-3xl font-black text-slate-900">RM330+</div>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { title: "Unit Ovitrap Strata (Body Utama)", desc: "Reka bentuk sesuai kawasan bertingkat", value: "RM80" },
                { title: "Egg Strip Pemantauan", desc: "Media pengesanan telur (mudah diganti)", value: "RM40" },
                { title: "Reka Bentuk Berlapis & Selamat", desc: "Mengurangkan risiko tumpahan / gangguan", value: "RM60" },
                { title: "Bekas Puntung Rokok Tahan Haba", desc: "Kekal bersih untuk kawasan perokok", value: "RM30" },
                { title: "Manual Operasi Ringkas", desc: "SOP semakan & rekod pemantauan", value: "RM20" },
                { title: "Sistem Mudah Replikasi", desc: "Boleh diperluas ikut blok/kawasan", value: "RM50" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition"
                >
                  <div>
                    <div className="font-extrabold text-lg text-slate-900">
                      {item.title}
                    </div>
                    <div className="text-slate-500 text-sm mt-1">{item.desc}</div>
                  </div>

                  <div className="font-black text-blue-700 bg-blue-50 px-4 py-2 rounded-xl w-fit shrink-0">
                    Nilai: {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="uppercase tracking-widest text-xs font-bold text-slate-300">
                  Jumlah Nilai Sebenar (Jika Asing)
                </div>
                <div className="text-3xl font-black">RM330.00+</div>
              </div>
              <div className="text-slate-200 text-sm max-w-md">
                Direka untuk pelaksanaan komuniti: lebih cepat bermula, lebih
                mudah dipantau, dan senang diperluaskan ke kawasan lain.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border-2 border-red-200 overflow-hidden flex flex-col">
          <div className="p-8">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-extrabold text-xs uppercase tracking-widest">
              Tawaran Komuniti
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-6">
              Harga Pelaksanaan
            </h3>

            <div className="mt-5">
              <div className="text-slate-500 font-bold line-through text-2xl">
                RM330+
              </div>
              <div className="text-red-600 text-6xl font-black leading-none mt-1">
                RM100
              </div>
              <div className="text-slate-900 font-extrabold uppercase tracking-widest mt-2">
                Sahaja per unit
              </div>
            </div>

            <div className="mt-6 space-y-3 text-slate-700 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                Sesuai untuk PBT / JMB / Komuniti
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                Mudah pasang & semak (mingguan)
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                Boleh scale ikut blok & kawasan
              </div>
            </div>

            <CTAButton
              text="Mohon / Tempah Pakej Ini"
              href={WHATSAPP_MAIN}
              className="w-full mt-8"
            />

            <div className="text-xs text-slate-500 mt-4">
              *Cadangan: mulakan 10–30 unit untuk satu kawasan strata (bergantung
              blok & kepadatan).
            </div>
          </div>

          <div className="mt-auto bg-gray-50 border-t border-gray-200 p-6">
            <div className="text-slate-700 font-bold mb-2">Nak lebih “official”?</div>
            <div className="text-slate-600 text-sm">
              Boleh tambah: jadual pemantauan, template laporan, & pelan pemasangan ikut blok.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="Bonus Pelaksanaan (Jika Mohon Sekarang)"
        subtitle="Bantu pihak pengurusan jalankan pemantauan lebih teratur."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Panduan Lokasi Strategik",
            value: "RM30",
            desc: "Cara pilih lokasi paling efektif untuk pasang unit di strata.",
          },
          {
            title: "Template Rekod Pemantauan",
            value: "RM20",
            desc: "Template ringkas untuk rekod semakan mingguan (lebih mudah audit).",
          },
          {
            title: "Panduan Tindakan Susulan",
            value: "RM20",
            desc: "Checklist tindakan bila dapatan egg strip tinggi (hotspot).",
          },
        ].map((b, i) => (
          <div key={i} className="relative group">
            <div className="bg-yellow-400 absolute -top-4 -right-4 px-4 py-1 rounded-full font-bold text-xs shadow-lg transform rotate-12 z-10">
              BONUS #{i + 1}
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-lg transition hover:-translate-y-2">
              <div className="h-48 bg-slate-900 text-white flex items-center justify-center">
                <FileText className="w-14 h-14 opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="font-extrabold text-xl mb-2">{b.title}</h3>
                <p className="text-slate-600 mb-4">{b.desc}</p>
                <div className="text-blue-700 font-bold">Value: {b.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 max-w-xl mx-auto">
        <CTAButton text="Saya Nak Bonus Ini" href={WHATSAPP_MAIN} />
      </div>
    </div>
  </section>
);

const OfferSection = () => (
  <section className="py-24 px-4 bg-gradient-to-b from-red-50 to-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-extrabold text-xs uppercase tracking-widest animate-pulse">
          Tawaran Pelaksanaan Komuniti (Terhad)
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6">
          Mulakan Pencegahan Awal <span className="text-red-600">Sebelum</span>{" "}
          Kes Naik
        </h2>

        <p className="text-xl md:text-2xl text-slate-600 mt-4 max-w-3xl mx-auto">
          OVISTRATA MBJB bantu pantau pembiakan Aedes di kawasan strata secara
          konsisten, supaya tindakan boleh dibuat lebih cepat dan lebih tepat.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
          <h3 className="text-2xl font-black text-slate-900">Sesuai Untuk</h3>

          <div className="mt-6 space-y-4 text-slate-700 font-semibold">
            {[
              "PBT / Pihak Berkuasa Tempatan",
              "JMB / MC / Pengurusan Strata",
              "Komuniti PPR / Flat / Apartment",
              "Pasukan Kesihatan / Pemantauan Denggi",
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                {t}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-300">
              Apa anda dapat
            </div>
            <div className="text-lg font-bold mt-2">
              Unit + egg strip + manual operasi + sistem replikasi
            </div>
            <div className="text-slate-300 text-sm mt-2">
              Senang mula, senang semak, senang scale ikut blok.
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            *Cadangan permulaan: 10–30 unit untuk satu kawasan strata (ikut
            kepadatan & bilangan blok).
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border-2 border-red-200 overflow-hidden">
          <div className="p-10">
            <div className="text-slate-600 font-bold line-through text-3xl">
              RM330+
            </div>
            <div className="text-red-600 text-8xl font-black leading-none mt-1">
              RM100
            </div>
            <div className="text-slate-900 font-extrabold uppercase tracking-widest mt-3">
              Sahaja per unit
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <ShieldCheck className="text-green-600 w-6 h-6 shrink-0" />
                Fokus pencegahan awal & pemantauan berdata
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <Zap className="text-yellow-500 w-6 h-6 shrink-0" />
                Tindakan lebih cepat sebelum wabak merebak
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <BarChart className="text-blue-600 w-6 h-6 shrink-0" />
                Boleh jadi asas laporan pemantauan kawasan
              </div>
            </div>

            <div className="mt-10 grid gap-4">
              <CTAButton text="Mohon / Tempah via WhatsApp" href={WHATSAPP_MAIN} />
              {FORM_URL ? (
                <CTAButton
                  text="Isi Borang Permohonan"
                  href={FORM_URL}
                  variant="secondary"
                  className="!text-slate-900 !bg-white border border-slate-200 hover:!bg-slate-50"
                />
              ) : (
                <CTAButton
                  text="Isi Borang Permohonan (Coming Soon)"
                  href={WHATSAPP_MAIN}
                  variant="secondary"
                />
              )}
            </div>

            <div className="mt-6 text-xs text-slate-500">
              *Tawaran komuniti tertakluk kepada stok/kuota pelaksanaan.
            </div>
          </div>

          <div className="bg-red-50 border-t border-red-100 p-6">
            <div className="text-slate-800 font-extrabold">
              Nak kami cadangkan kuantiti ikut kawasan?
            </div>
            <div className="text-slate-600 text-sm mt-1">
              Hantar lokasi & anggaran blok/unit rumah — kami bantu cadang susun
              atur pemasangan.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ObjectionHandler = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="bg-blue-900 text-white p-12 rounded-3xl shadow-2xl relative">
        <MessageSquare className="absolute top-10 right-10 w-24 h-24 text-white/10" />
        <h3 className="text-3xl font-black mb-6">Kenapa Harga RM100?</h3>
        <p className="text-xl leading-relaxed mb-10 text-blue-100">
          RM100 ini bukan kerana sistem ini “murah”, tetapi kerana objektif utama
          adalah pencegahan awal untuk manfaat komuniti — supaya pelaksanaan boleh
          dibuat lebih meluas dengan kos terkawal.
        </p>

        <div className="space-y-6">
          <p className="font-bold text-2xl border-b border-white/20 pb-4">
            Satu unit ini mampu membantu:
          </p>

          {[
            "Kurangkan pembiakan Aedes secara konsisten",
            "Elak kos rawatan & fogging berulang yang mahal",
            "Bantu tindakan awal sebelum kes meningkat",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <Zap className="text-yellow-400 shrink-0" />
              <span className="text-lg md:text-xl font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-xl">
          <CTAButton text="Tanya & Mohon Sekarang" href={WHATSAPP_MAIN} />
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white text-center">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title="Jangan Tunggu Kes Naik Baru Bertindak"
        subtitle="Mulakan pemantauan awal — tindakan lebih tepat, kos lebih terkawal, komuniti lebih selamat."
      />

      <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-blue-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-black text-slate-900 leading-snug">
            Dengan OVISTRATA MBJB, anda boleh kenal pasti lokasi berisiko lebih awal,
            dan buat tindakan susulan sebelum keadaan jadi wabak.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 text-left">
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300">
                Harga Pelaksanaan
              </div>
              <div className="text-4xl font-black mt-2">RM100 / unit</div>
              <div className="text-slate-300 text-sm mt-2">
                Sesuai untuk strata • mudah dipasang • mudah dipantau
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 text-left">
              <div className="text-xs uppercase tracking-widest font-bold text-blue-700">
                Cadangan Pantas
              </div>
              <div className="text-lg font-bold text-slate-900 mt-2">
                Mulakan 10–30 unit untuk 1 kawasan (ikut blok & kepadatan).
              </div>
              <div className="text-slate-600 text-sm mt-2">
                WhatsApp kami untuk cadangan pemasangan ikut lokasi.
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 max-w-2xl mx-auto">
            <CTAButton
              text="WhatsApp untuk Tempahan"
              href={WHATSAPP_MAIN}
              className="!text-2xl md:!text-3xl !py-6"
            />

            {FORM_URL ? (
              <CTAButton
                text="Isi Borang Permohonan"
                href={FORM_URL}
                variant="secondary"
                className="!text-slate-900 !bg-white border border-slate-200 hover:!bg-slate-50"
              />
            ) : (
              <CTAButton
                text="Isi Borang (Coming Soon)"
                href={WHATSAPP_MAIN}
                variant="secondary"
              />
            )}
          </div>

          <div className="text-xs text-slate-500 mt-6">
            *Jika anda dari PBT/JMB/MC: boleh request template laporan & jadual
            pemantauan.
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h3 className="text-white font-black text-2xl mb-2">OVISTRATA MBJB</h3>
        <p>© 2024 Kawalan Denggi Strata. Pelaksanaan Komuniti.</p>
      </div>

      <div className="flex gap-8 font-bold">
        <a href="#" className="hover:text-white">
          Terma & Syarat
        </a>
        <a href="#" className="hover:text-white">
          Polisi Privasi
        </a>
        <a href={WHATSAPP_MAIN} className="hover:text-white" target="_blank" rel="noreferrer">
          Hubungi Kami
        </a>
      </div>
    </div>
  </footer>
);

/** =========================
 *  App
 *  ========================= */
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
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 md:hidden z-50">
        <CTAButton
          text="WhatsApp - Mohon RM100"
          href={WHATSAPP_SIMPLE}
          className="!text-lg !py-3"
        />
      </div>
    </div>
  );
}
