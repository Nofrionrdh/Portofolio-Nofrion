"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const skills = {
  "Backend Development": {
    faIcon: "fa-solid fa-server",
    color: "slate",
    items: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST API", "Database Design"],
  },
  "Frontend Development": {
    faIcon: "fa-solid fa-display",
    color: "slate",
    items: ["JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Next.js"],
  },
  "Reporting & Business System": {
    faIcon: "fa-solid fa-chart-pie",
    color: "slate",
    items: ["FPDF", "Accounting Module", "Purchasing System", "Manufacturing System", "Inventory Flow"],
  },
  "Design & Tools": {
    faIcon: "fa-solid fa-pen-ruler",
    color: "slate",
    items: ["Git", "GitHub", "Linux", "UI Layout Design", "Poster Design", "Figma"],
  },
};

const schoolProjects = [
  {
    title: "Sistem Manajemen Ekstrakurikuler",
    desc: "Sistem berbasis Laravel dengan multi-role user (Admin, Pengurus, Pembina, dan Siswa) yang mendukung absensi, pendaftaran ekskul, LMS, validasi, dashboard, dan monitoring kegiatan ekstrakurikuler sekolah.",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "PHP"],
    image: "/images/project_ekskul.png",
    badge: "School Project",
    badgeIcon: "fa-solid fa-school",
    github: "https://github.com/Nofrionrdh/Projek-XTRA",
  },
  {
    title: "Apotek Online",
    desc: "Sistem penjualan obat berbasis web yang mendukung pengelolaan produk, transaksi pembelian, penjualan, stok barang, dan laporan transaksi.",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "PHP"],
    image: "/images/project_apotek.png",
    badge: "School Project",
    badgeIcon: "fa-solid fa-school",
    github: "https://github.com/Nofrionrdh/Apotek-LSP",
  },
];

const internProjects = [
  {
    title: "Sistem Aqiqah",
    desc: "Aplikasi berbasis CodeIgniter untuk pengelolaan penjualan aqiqah, produksi, pembelian, stok kambing, pengiriman pesanan, serta laporan PDF operasional harian.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    image: "/images/aqiqah.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
  {
    title: "Accounting & Reporting System",
    desc: "Pengembangan modul akuntansi seperti jurnal umum, posting, closing, arus kas, laporan aktivitas, serta berbagai laporan PDF kompleks menggunakan FPDF.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    image: "/images/acc.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
  {
    title: "Manufacturing Module",
    desc: "Modul manufaktur untuk proses produksi seperti painting, work order, purchasing bahan, tracking proses produksi, serta integrasi antar divisi.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    image: "/images/manufaktur.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
];

const certifications = [
  {
    title: "Data Analytics untuk Siswa SMA/Sederajat",
    issuer: "Thematic Academy - Digital Talent Scholarship 2024",
    date: "21-22 Oktober 2024",
    hours: "18 Jam Pelatihan",
    certId: "1949615850-82/TA/BLSDM.Kominfo/2024",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "TOEIC - Listening and Reading",
    issuer: "Educational Testing Service (ETS)",
    date: "Valid: Aug 2025 - Aug 2027",
    score: "540 (Listening: 315 | Reading: 225)",
    certId: "ID: 0067088056",
    icon: "fa-solid fa-language",
    isScore: true,
  },
  {
    title: "Docker Fundamental",
    issuer: "Btech Academy",
    date: "Maret 2025 - Maret 2027",
    certId: "C01002-00000-36475",
    icon: "fa-brands fa-docker",
  },
  {
    title: "Automation with Ansible",
    issuer: "Btech Academy",
    date: "Oktober 2025 - Oktober 2027",
    certId: "C01003-00000-41750",
    icon: "fa-solid fa-gears",
  },
  {
    title: "Linux System Administration",
    issuer: "Btech Academy",
    date: "Mei 2024 - Mei 2026",
    certId: "C01001-00000-33415",
    icon: "fa-brands fa-linux",
  },
];

const education = [
  {
    school: "SMK Negeri 1 Cibinong",
    major: "Sistem Informasi Jaringan dan Aplikasi (SIJA)",
    description: "Selama masa pendidikan kejuruan, saya mengembangkan keahlian yang komprehensif di bidang pengembangan perangkat lunak dan infrastruktur IT. Saya mendapatkan pengalaman praktis dalam membangun aplikasi web menggunakan PHP, Laravel, JavaScript, CSS, dan Bootstrap. Selain pemrograman, saya mendalami DevOps dan operasi sistem dengan meraih sertifikasi dalam Administrasi Sistem Linux dan Docker, serta mempelajari otomatisasi server menggunakan Ansible. Di samping itu, saya juga mempelajari jaringan komputer dengan fokus pada konfigurasi dan manajemen infrastruktur menggunakan perangkat MikroTik dan Cisco.",
    icon: "fa-solid fa-school",
    years: "2022 - 2026",
    skills: ["PHP", "Laravel", "CodeIgniter", "JavaScript", "Bootstrap", "MySQL", "Linux", "Docker", "Ansible", "MikroTik", "Cisco"],
  },
];

const contacts = [
  { label: "Email", faIcon: "fa-solid fa-envelope", value: "nofrionridho2006@email.com", href: "mailto:nofrionridho2006@email.com" },
  { label: "GitHub", faIcon: "fa-brands fa-github", value: "github.com/Nofrionrdh", href: "https://github.com/Nofrionrdh" },
  { label: "LinkedIn", faIcon: "fa-brands fa-linkedin-in", value: "linkedin.com/in/nofrionridho", href: "https://linkedin.com/in/nofrionridho" },
  { label: "WhatsApp", faIcon: "fa-brands fa-whatsapp", value: "+62 858 9223 8838", href: "https://wa.me/6285892238838" },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="text-center mb-6">
      <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">{text}</span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof schoolProjects)[0] | (typeof internProjects)[0];
  index: number;
}) {
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    if ("github" in project && project.github) {
      window.open(project.github, "_blank");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-black/50 hover:border-gray-600 transition-all duration-300 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image area */}
      <div className="relative h-48 bg-gray-700/50 overflow-hidden">
        {!imageError && project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-4 rounded-lg border border-gray-600 bg-gray-800/80 flex items-center justify-center">
            <div className="text-center">
              <i className="fa-solid fa-image text-gray-600 text-3xl mb-2 block" />
              <p className="text-gray-500 text-xs">Screenshot belum tersedia</p>
            </div>
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-gray-900/80 border border-gray-700 text-gray-300 text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <i className={`${project.badgeIcon} text-[9px]`} />
          {project.badge}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold mb-2 group-hover:text-white text-white transition-colors duration-300 leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.desc}</p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((t) => (
            <span
              key={t}
              className="bg-gray-700/50 border border-gray-600 text-gray-300 px-2.5 py-0.5 rounded text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationCard({
  edu,
  index,
}: {
  edu: (typeof education)[0];
  index: number;
}) {
  return (
    <div
      className={`group bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-600/50 rounded-lg p-8 hover:shadow-lg hover:shadow-amber-500/20 hover:border-amber-500 transition-all duration-300 ${
        index % 2 === 0 ? "md:col-span-1" : "md:col-span-1"
      }`}
    >
      {/* School & Major */}
      <div className="flex items-start justify-between mb-6 gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
          <p className="text-amber-400 font-semibold text-sm">{edu.major}</p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-all duration-300">
          <i className={`${edu.icon} text-amber-400 text-base`} />
        </div>
      </div>

      {/* Years */}
      <div className="flex items-center gap-2 text-gray-300 text-sm font-semibold mb-6 pb-6 border-b border-gray-700/50">
        <i className="fa-regular fa-calendar text-amber-400 text-xs" />
        {edu.years}
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed text-base mb-6">
        {edu.description}
      </p>

      {/* Skills */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Keahlian yang dikuasai</p>
        <div className="flex flex-wrap gap-2">
          {edu.skills.map((skill) => (
            <span
              key={skill}
              className="bg-amber-500/15 text-amber-300 text-xs px-3 py-1.5 rounded-full border border-amber-600/40 group-hover:border-amber-500/60 group-hover:bg-amber-500/25 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  return (
    <div
      className="group relative bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:shadow-md hover:shadow-black/50 hover:border-gray-600 transition-all duration-300 p-6"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors duration-300">
          <i className={`${cert.icon} text-amber-400 text-base`} />
        </div>

        {/* Title */}
        <h3 className="text-base font-bold mb-1 group-hover:text-white transition-colors duration-300 leading-snug text-white">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="text-gray-400 text-sm font-medium mb-3">{cert.issuer}</p>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-calendar text-gray-500 text-xs w-4" />
            <span>{cert.date}</span>
          </div>
          {cert.hours && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-gray-500 text-xs w-4" />
              <span>{cert.hours}</span>
            </div>
          )}
          {cert.score && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-trophy text-gray-500 text-xs w-4" />
              <span>{cert.score}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "education", "certifications", "skills", "experience", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
      />
      {/* Google Fonts — Inter */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        body, html { font-family: 'Inter', sans-serif; }

        .nav-pill::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #1f2937;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-pill.active::after { opacity: 1; }
      `}</style>

      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── NAVBAR ── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-700 shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
              <span className="font-bold text-xl">
                <span className="text-amber-700">Nofrion</span>
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 text-sm list-none">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative nav-pill px-4 py-2 rounded transition-colors duration-200 font-medium text-sm ${
                      activeSection === item.id
                        ? "text-amber-400 active"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center gap-2 relative overflow-hidden bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-amber-500 transition-all duration-300"
            >
              <i className="fa-solid fa-paper-plane text-xs" />
              <span>Hire Me</span>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`w-5 h-px bg-gray-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`w-5 h-px bg-gray-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-px bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 border-b border-gray-700" : "max-h-0"}`}>
            <div className="px-6 pb-4 space-y-1 bg-gray-800/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-amber-400 bg-amber-900/20" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ══════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════ */}
        <section id="home" className="relative z-10 min-h-screen flex items-center px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

            {/* Left content */}
            <div>
              {/* Status badge */}
              <div
                className={`mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-400 text-sm transition-all duration-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                Available for work
              </div>

              {/* Name */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight transition-all duration-700 delay-100 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-white block">Nofrion</span>
                <span className="text-white block">Ridho</span>
              </h1>

              {/* Role */}
              <div
                className={`mb-6 transition-all duration-700 delay-200 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-400 uppercase">
                  Backend &amp; Fullstack Developer
                </span>
              </div>

              {/* Description */}
              <p
                className={`max-w-lg text-gray-300 text-base leading-relaxed mb-10 transition-all duration-700 delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Fresh graduate dari SMK Jurusan Sistem Informasi Jaringan & Aplikasi dengan passion
                pada pengembangan web. Berpengalaman dengan{" "}
                <span className="text-amber-400 font-semibold">Laravel</span>, <span className="text-amber-400 font-semibold">CodeIgniter</span>, dan <span className="text-amber-400 font-semibold">PHP</span>.
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-wrap gap-3 transition-all duration-700 delay-[400ms] ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="group relative overflow-hidden bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-500 transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fa-solid fa-folder-open text-sm" />
                  <span>Lihat Project</span>
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-6 py-3 rounded-lg font-semibold text-sm border border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fa-solid fa-message text-sm" />
                  Contact Me
                </button>
                <a
                  href="/CV_ Nofrion_Ridho.pdf"
                  download="CV_Nofrion_Ridho.pdf"
                  className="px-6 py-3 rounded-lg font-semibold text-sm border border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fa-solid fa-download text-sm" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Right: Profile image */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Profile picture */}
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-gray-700 shadow-lg shadow-black/50">
                <Image
                  src="/images/foto_diri3.jpeg"
                  alt="Foto Profil Nofrion Ridho"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="relative z-10 border-y border-gray-700 bg-gray-800/50 py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
            {[
              { value: "5+", label: "Projects Selesai", icon: "fa-solid fa-code-branch" },
              { value: "10", label: "Bulan PKL", icon: "fa-solid fa-building" },
              { value: "5+", label: "Teknologi", icon: "fa-solid fa-layer-group" },
            ].map((s) => (
              <div key={s.label} className="group">
                <i className={`${s.icon} text-amber-400 text-sm mb-3 block`} />
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1.5 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            EDUCATION
        ══════════════════════════════════════════════════════════ */}
        <section id="education" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-gray-800/50 to-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Pendidikan" />
              <h2 className="text-5xl font-bold tracking-tight text-white">My Education</h2>
            </div>

            {/* Education Cards */}
            <div className="grid md:grid-cols-1 gap-6">
              {education.map((edu, i) => (
                <EducationCard key={edu.school} edu={edu} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CERTIFICATIONS
        ══════════════════════════════════════════════════════════ */}
        <section id="certifications" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-gray-800/50 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Pelatihan & Sertifikasi" />
              <h2 className="text-5xl font-bold tracking-tight text-white">Professional Certifications</h2>
              <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base">
                Sertifikasi dan pelatihan profesional dari berbagai institusi terpercaya.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {certifications.slice(0, 3).map((cert, i) => (
                <CertificationCard key={cert.title} cert={cert} index={i} />
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-6">
              {certifications.slice(3).map((cert, i) => (
                <CertificationCard key={cert.title} cert={cert} index={i + 3} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SKILLS
        ══════════════════════════════════════════════════════════ */}
        <section id="skills" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Keahlian" />
              <h2 className="text-5xl font-bold tracking-tight text-white">Tech Stack</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {Object.entries(skills).map(([category, { faIcon, items }]) => (
                <div
                  key={category}
                  className="skill-card group bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:shadow-md hover:shadow-black/30 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="skill-icon-wrap w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/30 transition-all duration-300">
                    <i className={`${faIcon} text-amber-400 text-base`} />
                  </div>
                  <h3 className="font-semibold text-sm text-white mb-4 leading-snug">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-700/50 text-gray-300 text-xs px-2.5 py-1 rounded border border-gray-600 group-hover:border-gray-500 group-hover:bg-gray-700 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            EXPERIENCE
        ══════════════════════════════════════════════════════════ */}
        <section id="experience" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-transparent to-gray-800/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Pengalaman" />
              <h2 className="text-5xl font-bold tracking-tight text-white">My Experience</h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700" />

              <div className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-9 w-4 h-4 rounded-full bg-amber-500 border-4 border-gray-900 shadow-lg shadow-amber-500/50" />

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:shadow-md hover:shadow-black/50 hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Web Developer Intern</h3>
                      <div className="flex items-center gap-2 text-stone-300 font-semibold text-sm">
                        <i className="fa-solid fa-building text-xs" />
                        PT. Inovasi Inti Digital
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-700/50 border border-gray-600 text-gray-300 text-sm font-semibold px-4 py-2 rounded-full">
                      <i className="fa-regular fa-clock text-xs" />
                      10 Bulan PKL
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-base">
                    Mengembangkan berbagai sistem bisnis berbasis CodeIgniter seperti modul accounting,
                    purchasing, manufaktur, pengiriman, dan reporting PDF operasional perusahaan. Selain
                    pengembangan backend, juga terlibat dalam pembuatan desain tampilan website dan desain
                    poster untuk kebutuhan internal perusahaan.
                  </p>

                  <div className="grid md:grid-cols-2 gap-3.5">
                    {[
                      { icon: "fa-solid fa-cart-shopping", text: "Sistem Aqiqah (penjualan, produksi, pengiriman)" },
                      { icon: "fa-solid fa-chart-line", text: "Accounting & Reporting Module" },
                      { icon: "fa-solid fa-industry", text: "Manufacturing & Work Order System" },
                      { icon: "fa-solid fa-file-pdf", text: "Laporan PDF kompleks menggunakan FPDF" },
                      { icon: "fa-solid fa-desktop", text: "Web interface & dashboard design" },
                      { icon: "fa-solid fa-swatchbook", text: "Desain poster untuk kebutuhan internal" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-start gap-3 text-sm text-stone-400 group/item">
                        <div className="w-7 h-7 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                          <i className={`${icon} text-xs text-stone-600`} />
                        </div>
                        <span className="leading-relaxed pt-1">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════════════════════════ */}
        <section id="projects" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Portofolio" />
              <h2 className="text-5xl font-bold tracking-tight text-white">My Projects</h2>
              <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                Berikut adalah proyek-proyek yang telah saya kerjakan, baik selama sekolah maupun saat PKL.
              </p>
            </div>

            {/* School Projects */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-600 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full">
                  <i className="fa-solid fa-school text-sm" />
                  School Projects
                </div>
                <div className="flex-1 h-px bg-gray-700" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {schoolProjects.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} />
                ))}
              </div>
            </div>

            {/* Internship Projects */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-600 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full">
                  <i className="fa-solid fa-briefcase text-sm" />
                  PKL Projects — PT. Inovasi Inti Digital
                </div>
                <div className="flex-1 h-px bg-gray-700" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {internProjects.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            DESIGN WORKS
        ══════════════════════════════════════════════════════════ */}
        <section id="design" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Design Works" />
              <h2 className="text-5xl font-bold tracking-tight text-stone-200">Design Gallery</h2>
              <p className="text-stone-300 mt-4 max-w-xl mx-auto text-base">
                Selain backend development, saya juga mengerjakan desain web interface dan poster untuk kebutuhan internal perusahaan.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-palette text-amber-400 text-sm" />
                <h3 className="text-base font-semibold text-white">Poster and Web Design</h3>
              </div>
              <p className="text-gray-300 text-sm mb-6 pl-5">
                Poster kebutuhan internal perusahaan, visual promosi dan informasi operasional.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["hqc.png", "2.png", "10.png", "25.png"].map((image) => (
                  <div
                    key={image}
                    className="group relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg hover:shadow-black/50 transition-all duration-300"
                  >
                    <Image
                      src={`/images/${image}`}
                      alt={image}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════════════════ */}
        <section id="contact" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-transparent to-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Hubungi Saya" />
              <h2 className="text-5xl font-bold tracking-tight text-white">Let&apos;s Work Together</h2>
              <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                Saya terbuka untuk peluang kerja sama, project freelance, atau diskusi teknologi. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            {/* Contact grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-5 hover:shadow-md hover:shadow-black/50 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-all duration-300">
                    <i className={`${c.faIcon} text-amber-400 text-base`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">{c.label}</div>
                    <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-200 truncate">
                      {c.value}
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right ml-auto text-gray-600 text-xs group-hover:text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Download CV */}
            <div className="text-center">
              <a
                href="/CV_ Nofrion_Ridho.pdf"
                download="CV_Nofrion_Ridho.pdf"
                className="group inline-flex items-center gap-3 relative overflow-hidden bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-amber-500 transition-all duration-300"
              >
                <i className="fa-solid fa-download relative z-10" />
                <span className="relative z-10">Download CV</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="relative z-10 border-t border-gray-700 px-6 lg:px-8 py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2.5">
              <span>
                © 2025 <span className="text-white font-semibold">Nofrion Ridho</span>. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-brands fa-react text-xs text-gray-500" />
              <span>Built with Next.js &amp; Tailwind CSS</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}