"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const skills = {
  "Backend Development": {
    faIcon: "fa-solid fa-server",
    color: "from-cyan-500 to-blue-600",
    items: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST API", "Database Design"],
  },
  "Frontend Development": {
    faIcon: "fa-solid fa-display",
    color: "from-sky-400 to-cyan-500",
    items: ["JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Next.js"],
  },
  "Reporting & Business System": {
    faIcon: "fa-solid fa-chart-pie",
    color: "from-blue-500 to-indigo-600",
    items: ["FPDF", "Accounting Module", "Purchasing System", "Manufacturing System", "Inventory Flow"],
  },
  "Design & Tools": {
    faIcon: "fa-solid fa-pen-ruler",
    color: "from-indigo-400 to-blue-500",
    items: ["Git", "GitHub", "Linux", "UI Layout Design", "Poster Design", "Figma"],
  },
};

const schoolProjects = [
  {
    title: "Sistem Manajemen Ekstrakurikuler",
    desc: "Sistem berbasis Laravel dengan multi-role user (Admin, Pengurus, Pembina, dan Siswa) yang mendukung absensi, pendaftaran ekskul, LMS, validasi, dashboard, dan monitoring kegiatan ekstrakurikuler sekolah.",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "PHP"],
    gradient: "from-sky-400 via-cyan-500 to-blue-600",
    image: "/images/project_ekskul.png",
    badge: "School Project",
    badgeIcon: "fa-solid fa-school",
    github: "https://github.com/Nofrionrdh/Projek-XTRA",
  },
  {
    title: "Apotek Online",
    desc: "Sistem penjualan obat berbasis web yang mendukung pengelolaan produk, transaksi pembelian, penjualan, stok barang, dan laporan transaksi.",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "PHP"],
    gradient: "from-teal-400 via-cyan-500 to-sky-600",
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
    gradient: "from-blue-500 via-indigo-500 to-blue-700",
    image: "/images/aqiqah.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
  {
    title: "Accounting & Reporting System",
    desc: "Pengembangan modul akuntansi seperti jurnal umum, posting, closing, arus kas, laporan aktivitas, serta berbagai laporan PDF kompleks menggunakan FPDF.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    image: "/images/acc.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
  {
    title: "Manufacturing Module",
    desc: "Modul manufaktur untuk proses produksi seperti painting, work order, purchasing bahan, tracking proses produksi, serta integrasi antar divisi.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    gradient: "from-indigo-500 via-blue-500 to-cyan-600",
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
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "TOEIC - Listening and Reading",
    issuer: "Educational Testing Service (ETS)",
    date: "Valid: Aug 2025 - Aug 2027",
    score: "540 (Listening: 315 | Reading: 225)",
    certId: "ID: 0067088056",
    icon: "fa-solid fa-language",
    color: "from-orange-500 to-red-600",
    isScore: true,
  },
  {
    title: "Docker Fundamental",
    issuer: "Btech Academy",
    date: "Maret 2025 - Maret 2027",
    certId: "C01002-00000-36475",
    icon: "fa-brands fa-docker",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Automation with Ansible",
    issuer: "Btech Academy",
    date: "Oktober 2025 - Oktober 2027",
    certId: "C01003-00000-41750",
    icon: "fa-solid fa-gears",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Linux System Administration",
    issuer: "Btech Academy",
    date: "Mei 2024 - Mei 2026",
    certId: "C01001-00000-33415",
    icon: "fa-brands fa-linux",
    color: "from-amber-500 to-orange-600",
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
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-10 h-px bg-cyan-500/50" />
      <span className="text-cyan-400 text-[11px] font-bold tracking-[0.25em] uppercase">{text}</span>
      <span className="w-10 h-px bg-cyan-500/50" />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof schoolProjects)[0];
  index: number;
}) {
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    if (project.github) {
      window.open(project.github, "_blank");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-[#030e1c] border border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image area */}
      <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {!imageError && project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-4 rounded-xl border border-white/20 bg-black/30 flex items-center justify-center">
            <div className="text-center">
              <i className="fa-solid fa-image text-white/30 text-4xl mb-2 block" />
              <p className="text-white/40 text-xs">Screenshot belum tersedia</p>
            </div>
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <i className={`${project.badgeIcon} text-[9px]`} />
          {project.badge}
        </div>
      </div>

      {/* Hover glow line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/40 transition-all duration-500" />

      <div className="p-6">
        <h3 className="text-base font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.desc}</p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((t) => (
            <span
              key={t}
              className="bg-cyan-500/8 border border-cyan-500/15 text-cyan-400/80 px-2.5 py-0.5 rounded-md text-[11px] font-medium tracking-wide"
            >
              {t}
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
      className="group relative bg-[#030e1c] border border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 p-6"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background gradient */}
      <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${cert.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-300`}>
          <i className={`${cert.icon} text-white text-lg`} />
        </div>

        {/* Title */}
        <h3 className="text-base font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="text-cyan-400/70 text-sm font-medium mb-3">{cert.issuer}</p>

        {/* Details */}
        <div className="space-y-2 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-calendar text-cyan-500/50 text-xs w-4" />
            <span>{cert.date}</span>
          </div>
          {cert.hours && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-cyan-500/50 text-xs w-4" />
              <span>{cert.hours}</span>
            </div>
          )}
          {cert.score && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-trophy text-cyan-500/50 text-xs w-4" />
              <span>{cert.score}</span>
            </div>
          )}
          {/* <div className="flex items-center gap-2">
            <i className="fa-solid fa-certificate text-cyan-500/50 text-xs w-4" />
            <span className="font-mono text-[11px]">{cert.certId}</span>
          </div> */}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/40 transition-all duration-500" />
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const handleMouse = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "experience", "projects", "certifications", "design", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
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
      {/* Google Fonts — Plus Jakarta Sans */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        body, .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-rev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-float { animation: float-slow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 22s linear infinite; }
        .animate-spin-slow-rev { animation: spin-slow-rev 32s linear infinite; }
        .badge-float-1 { animation: float-slow 5s ease-in-out infinite; }
        .badge-float-2 { animation: float-slow 7s ease-in-out infinite 1s; }
        .badge-float-3 { animation: float-slow 6s ease-in-out infinite 2s; }

        .nav-pill::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: #22d3ee;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-pill.active::after { opacity: 1; }

        .skill-card:hover .skill-icon-wrap { transform: scale(1.1) rotate(-5deg); }

        .timeline-dot::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 2px solid #22d3ee;
          animation: pulse-ring 2s ease-out infinite;
        }

        .glass-card {
          background: rgba(3, 14, 28, 0.8);
          backdrop-filter: blur(12px);
        }
      `}</style>

      <main className="min-h-screen bg-[#010b17] text-white overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        {/* ── CURSOR GLOW ── */}
        <div
          className="pointer-events-none fixed z-0 w-[700px] h-[700px] rounded-full opacity-[0.10] blur-3xl"
          style={{
            background: "radial-gradient(circle, #22d3ee 0%, #3b82f6 40%, transparent 70%)",
            left: mouseX - 350,
            top: mouseY - 350,
            transition: "left 0.15s ease, top 0.15s ease",
          }}
        />

        {/* ── BACKGROUND ── */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute -top-72 -left-72 w-[800px] h-[800px] rounded-full bg-cyan-900/20 blur-[160px]" />
          <div className="absolute top-1/3 -right-80 w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-sky-900/10 blur-[120px]" />
        </div>

        {/* ── NAVBAR ── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-[#010b17]/85 backdrop-blur-2xl border-b border-cyan-500/8 shadow-2xl shadow-black/30"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
                <span className="font-display text-sm font-black text-[#010b17]">N</span>
              </div>
              <span className="font-display font-bold text-base tracking-tight">
                <span className="text-cyan-400">Nofrion</span>
                <span className="text-white"> Ridho</span>
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 text-sm list-none">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative nav-pill px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                      activeSection === item.id
                        ? "text-cyan-400 bg-cyan-400/8 active"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
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
              className="hidden md:flex items-center gap-2 relative overflow-hidden bg-cyan-400 text-[#010b17] px-5 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20 group"
            >
              <i className="fa-solid fa-paper-plane text-xs relative z-10" />
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`w-5 h-px bg-slate-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`w-5 h-px bg-slate-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-px bg-slate-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 border-b border-white/5" : "max-h-0"}`}>
            <div className="px-6 pb-4 space-y-1 bg-[#010b17]/95 backdrop-blur-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-cyan-400 bg-cyan-400/8" : "text-slate-400 hover:text-white"
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
                className={`mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm transition-all duration-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Available for work
              </div>

              {/* Name */}
              <h1
                className={`font-display text-5xl md:text-7xl lg:text-[82px] font-black tracking-tight mb-4 leading-[0.95] transition-all duration-700 delay-100 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-white block">Nofrion</span>
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent block">
                  Ridho
                </span>
              </h1>

              {/* Role */}
              <div
                className={`mb-6 transition-all duration-700 delay-200 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
                  <span className="w-6 h-px bg-sky-400/60" />
                  Backend &amp; Fullstack Developer
                  <span className="w-6 h-px bg-sky-400/60" />
                </span>
              </div>

              {/* Description */}
              <p
                className={`max-w-lg text-slate-400 text-[17px] leading-relaxed mb-10 transition-all duration-700 delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Saya adalah fresh graduate SMK jurusan Sistem Informasi Jaringan dan Aplikasi
                yang memiliki minat besar di bidang{" "}
                <span className="text-cyan-400 font-semibold">Pengembangan Website</span>.
                Saya terbiasa menggunakan{" "}
                <span className="text-cyan-400 font-semibold">Laravel</span>,{" "}
                <span className="text-cyan-400 font-semibold">CodeIgniter</span>, dan{" "}
                <span className="text-cyan-400 font-semibold">PHP</span>{" "}
                dalam pembuatan sistem berbasis web.
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-wrap gap-3 transition-all duration-700 delay-[400ms] ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="group relative overflow-hidden bg-cyan-400 text-[#010b17] px-7 py-3.5 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                >
                  <i className="fa-solid fa-folder-open text-xs relative z-10" />
                  <span className="relative z-10">Lihat Project</span>
                  <i className="fa-solid fa-arrow-right text-xs relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-cyan-500/30 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fa-solid fa-message text-xs" />
                  Contact Me
                </button>
                <a
                  href="/CV_ Nofrion_Ridho.pdf"
                  download="CV_Nofrion_Ridho.pdf"
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-slate-700/60 text-slate-400 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fa-solid fa-download text-xs" />
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
              {/* Decorative rings */}
              <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-500/10 animate-spin-slow" />
              <div className="absolute w-[430px] h-[430px] rounded-full border border-cyan-500/5 animate-spin-slow-rev" />

              {/* Glow */}
              <div className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Profile picture */}
              <div className="animate-float relative w-72 h-72 rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/15">
                <Image
                  src="/images/foto_diri3.jpeg"
                  alt="Foto Profil Nofrion Ridho"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010b17]/40 via-transparent to-transparent" />
              </div>

              {/* Floating skill badges */}
              <div className="badge-float-1 absolute -left-5 top-14 glass-card border border-cyan-500/20 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-cyan-400 shadow-xl flex items-center gap-2">
                <i className="fa-brands fa-laravel text-sm" />
                Laravel Dev
              </div>
              <div className="badge-float-2 absolute -right-5 top-24 glass-card border border-cyan-500/20 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-sky-400 shadow-xl flex items-center gap-2">
                <i className="fa-solid fa-database text-xs" />
                MySQL
              </div>
              <div className="badge-float-3 absolute -left-8 bottom-20 glass-card border border-cyan-500/20 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-blue-400 shadow-xl flex items-center gap-2">
                <i className="fa-solid fa-file-pdf text-xs" />
                PDF Reports
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
            <span className="tracking-[0.2em] uppercase text-[9px] font-medium">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-cyan-500/40 to-transparent animate-pulse" />
            <i className="fa-solid fa-chevron-down text-[10px] text-cyan-500/40 animate-bounce" />
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="relative z-10 border-y border-white/[0.04] bg-white/[0.015] py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
            {[
              { value: "5+", label: "Projects Selesai", icon: "fa-solid fa-code-branch" },
              { value: "10", label: "Bulan PKL", icon: "fa-solid fa-building" },
              { value: "5+", label: "Teknologi", icon: "fa-solid fa-layer-group" },
            ].map((s) => (
              <div key={s.label} className="group">
                <i className={`${s.icon} text-cyan-500/40 text-sm mb-3 block group-hover:text-cyan-400/60 transition-colors duration-300`} />
                <div className="font-display text-3xl font-black text-cyan-400 group-hover:scale-110 transition-transform duration-300">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            ABOUT ME
        ══════════════════════════════════════════════════════════ */}
        <section id="about" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* Left: Special Elements */}
            <div className="relative h-full flex items-center justify-center">
              {/* Background gradient circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
                <div className="absolute w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
              </div>

              {/* Main feature card */}
              <div className="relative z-10 max-w-sm w-full space-y-6">
                {/* Tech stack display */}
                <div className="glass-card border border-cyan-500/20 rounded-2xl p-8 text-center">
                  <div className="mb-6">
                    <i className="fa-solid fa-code text-4xl text-cyan-400 mb-4 block" />
                    <h3 className="font-semibold text-white mb-2">Full Stack Development</h3>
                    <p className="text-xs text-slate-500">Backend • Frontend • Database</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <i className="fa-brands fa-laravel text-cyan-400 text-lg mb-1 block" />
                      <span className="text-[10px] text-slate-400">Laravel</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <i className="fa-solid fa-database text-sky-400 text-lg mb-1 block" />
                      <span className="text-[10px] text-slate-400">MySQL</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <i className="fa-solid fa-file-pdf text-blue-400 text-lg mb-1 block" />
                      <span className="text-[10px] text-slate-400">PDF</span>
                    </div>
                  </div>
                </div>

                {/* Experience highlight */}
                <div className="glass-card border border-cyan-500/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-cyan-400 mb-2">10 Bulan</div>
                  <div className="text-sm text-slate-400 mb-1">Pengalaman PKL</div>
                  <div className="text-xs text-cyan-400/70 font-medium">PT. Inovasi Inti Digital</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <SectionLabel text="About Me" />
              <h2 className="font-display text-4xl font-black tracking-tight mb-6 leading-tight">
                Junior{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Developer
                </span>{" "}
                &amp; UI Design Enthusiast
              </h2>

              <div className="space-y-4 text-slate-400 leading-relaxed mb-8 text-[15px]">
                <p>
                  Baru saja menyelesaikan pendidikan di{" "}
                  <span className="text-white font-semibold">SMKN 1 Cibinong</span> dengan fokus pada pengembangan
                  aplikasi dan jaringan. Melalui pengalaman magang{" "}
                  <span className="text-cyan-400 font-semibold">10 bulan</span> di{" "}
                  <span className="text-white font-semibold">PT. Inovasi Inti Digital</span>, saya telah mengasah
                  kemampuan dalam mengelola database{" "}
                  <span className="text-cyan-400 font-semibold">MySQL</span>, logika backend dengan{" "}
                  <span className="text-cyan-400 font-semibold">Laravel</span>, serta penyusunan laporan{" "}
                  <span className="text-cyan-400 font-semibold">PDF yang kompleks</span>.
                </p>
                <p>
                  Selain teknis coding, saya juga antusias dalam eksplorasi{" "}
                  <span className="text-cyan-400 font-semibold">web interface</span> dan{" "}
                  <span className="text-cyan-400 font-semibold">desain grafis</span> untuk solusi digital.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "fa-solid fa-school", label: "SMKN 1 Cibinong" },
                  { icon: "fa-solid fa-server", label: "Backend Developer" },
                  { icon: "fa-solid fa-code", label: "Junior Web Developer" },
                  { icon: "fa-solid fa-pen-nib", label: "UI Designer" },
                  { icon: "fa-solid fa-file-pdf", label: "PDF Reporting" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <i className={`${tag.icon} text-xs opacity-60`} />
                    {tag.label}
                  </span>
                ))}
              </div>
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
              <h2 className="font-display text-5xl font-black tracking-tight">
                Tech{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Stack
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {Object.entries(skills).map(([category, { faIcon, color, items }]) => (
                <div
                  key={category}
                  className="skill-card group bg-[#030e1c] border border-white/[0.05] rounded-2xl p-6 hover:border-cyan-500/20 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className={`skill-icon-wrap w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300`}>
                    <i className={`${faIcon} text-white text-base`} />
                  </div>
                  <h3 className="font-semibold text-sm text-white mb-4 leading-snug">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/[0.04] text-slate-400 text-[11px] px-2.5 py-1 rounded-md border border-white/[0.05] group-hover:border-cyan-500/10 group-hover:text-slate-300 transition-all duration-200"
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
        <section id="experience" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Pengalaman" />
              <h2 className="font-display text-5xl font-black tracking-tight">
                My{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

              <div className="relative pl-16">
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-[18px] top-9 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#010b17] shadow-lg shadow-cyan-400/50" />

                <div className="bg-[#030e1c] border border-white/[0.05] rounded-2xl p-8 hover:border-cyan-500/15 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">Web Developer Intern</h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                        <i className="fa-solid fa-building text-xs" />
                        PT. Inovasi Inti Digital
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold px-4 py-2 rounded-full">
                      <i className="fa-regular fa-clock text-xs" />
                      10 Bulan PKL
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6 text-[15px]">
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
                      <div key={text} className="flex items-start gap-3 text-sm text-slate-400 group/item">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/8 border border-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <i className={`${icon} text-[10px] text-cyan-500/60`} />
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
            <div className="text-center mb-4">
              <SectionLabel text="Portofolio" />
              <h2 className="font-display text-5xl font-black tracking-tight">
                My{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>
            <p className="text-center text-slate-500 mb-16 max-w-xl mx-auto text-sm leading-relaxed">
              Berikut adalah proyek-proyek yang telah saya kerjakan, baik selama sekolah maupun saat PKL.
            </p>

            {/* School Projects */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-sky-500/8 border border-sky-500/20 text-sky-400 text-xs font-semibold px-4 py-2 rounded-full">
                  <i className="fa-solid fa-school text-[11px]" />
                  School Projects
                </div>
                <div className="flex-1 h-px bg-white/[0.04]" />
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
                <div className="flex items-center gap-2 bg-cyan-500/8 border border-cyan-500/20 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full">
                  <i className="fa-solid fa-briefcase text-[11px]" />
                  PKL Projects — PT. Inovasi Inti Digital
                </div>
                <div className="flex-1 h-px bg-white/[0.04]" />
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
            CERTIFICATIONS
        ══════════════════════════════════════════════════════════ */}
        <section id="certifications" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Pelatihan & Sertifikasi" />
              <h2 className="font-display text-5xl font-black tracking-tight">
                Professional{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
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
            DESIGN WORKS
        ══════════════════════════════════════════════════════════ */}
        <section id="design" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Design Works" />
              <h2 className="font-display text-5xl font-black tracking-tight">
                Design{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
                Selain backend development, saya juga mengerjakan desain web interface dan poster untuk kebutuhan internal perusahaan.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-palette text-sky-400 text-xs" />
                <h3 className="text-base font-semibold text-white">Poster and Web Design</h3>
              </div>
              <p className="text-slate-500 text-sm mb-6 pl-5">
                Poster kebutuhan internal perusahaan, visual promosi dan informasi operasional.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["hqc.png", "2.png", "10.png", "25.png"].map((image) => (
                  <div
                    key={image}
                    className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.07] hover:border-cyan-500/25 transition-all duration-300"
                  >
                    <Image
                      src={`/images/${image}`}
                      alt={image}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════════════════ */}
        <section id="contact" className="relative z-10 px-6 lg:px-8 py-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Hubungi Saya" />
              <h2 className="font-display text-5xl font-black tracking-tight">
                Let&apos;s Work{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>
              <p className="text-slate-400 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
                Saya terbuka untuk peluang kerja sama, project freelance, atau diskusi teknologi. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            {/* Contact grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 bg-[#030e1c] border border-white/[0.05] rounded-2xl p-5 hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/8 border border-cyan-500/15 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/30 transition-all duration-300">
                    <i className={`${c.faIcon} text-cyan-400 text-base`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-[0.15em] mb-0.5">{c.label}</div>
                    <div className="text-sm text-slate-300 font-medium group-hover:text-cyan-400 transition-colors duration-200 truncate">
                      {c.value}
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right ml-auto text-slate-600 text-xs group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Download CV */}
            <div className="text-center">
              <a
                href="/CV_ Nofrion_Ridho.pdf"
                download="CV_Nofrion_Ridho.pdf"
                className="group inline-flex items-center gap-3 relative overflow-hidden bg-gradient-to-r from-cyan-400 to-sky-400 text-[#010b17] px-10 py-4 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <i className="fa-solid fa-download relative z-10" />
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="relative z-10 border-t border-white/[0.04] px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="font-display text-[10px] font-black text-[#010b17]">N</span>
              </div>
              <span>
                © 2025{" "}
                <span className="text-cyan-400 font-semibold">Nofrion Ridho</span>.
                All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-brands fa-react text-xs text-slate-700" />
              <span>Built with Next.js &amp; Tailwind CSS</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}