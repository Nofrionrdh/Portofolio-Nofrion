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
    description: "Selama masa pendidikan, saya mengembangkan keahlian yang komprehensif di bidang pengembangan perangkat lunak dan infrastruktur IT. Saya mendapatkan pengalaman praktis dalam membangun aplikasi web menggunakan PHP, Laravel, JavaScript, CSS, dan Bootstrap. Selain pemrograman, saya mendalami DevOps dan operasi sistem dengan meraih sertifikasi dalam Administrasi Sistem Linux dan Docker, serta mempelajari otomatisasi server menggunakan Ansible. Di samping itu, saya juga mempelajari jaringan komputer dengan fokus pada konfigurasi dan manajemen infrastruktur menggunakan perangkat MikroTik dan Cisco.",
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
      <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">{text}</span>
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
      className="group relative bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-900/30 hover:border-blue-800/60 transition-all duration-300 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
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
              className="bg-blue-950/60 border border-blue-800/50 text-blue-300 px-2.5 py-0.5 rounded text-[11px] font-medium"
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
      className={`group bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-800/40 rounded-lg p-8 hover:shadow-lg hover:shadow-blue-900/30 hover:border-blue-700/60 transition-all duration-300 ${
        index % 2 === 0 ? "md:col-span-1" : "md:col-span-1"
      }`}
    >
      <div className="flex items-start justify-between mb-6 gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
          <p className="text-blue-400 font-semibold text-sm">{edu.major}</p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-700/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600/30 transition-all duration-300">
          <i className={`${edu.icon} text-blue-400 text-base`} />
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-300 text-sm font-semibold mb-6 pb-6 border-b border-gray-700/50">
        <i className="fa-regular fa-calendar text-blue-400 text-xs" />
        {edu.years}
      </div>

      <p className="text-gray-300 leading-relaxed text-base mb-6">{edu.description}</p>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Keahlian yang dikuasai</p>
        <div className="flex flex-wrap gap-2">
          {edu.skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-600/15 text-blue-300 text-xs px-3 py-1.5 rounded-full border border-blue-700/40 group-hover:border-blue-600/60 group-hover:bg-blue-600/25 transition-all duration-200"
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
      className="group relative bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:shadow-md hover:shadow-blue-900/30 hover:border-blue-800/50 transition-all duration-300 p-6"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-700/50 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
          <i className={`${cert.icon} text-blue-400 text-base`} />
        </div>

        <h3 className="text-base font-bold mb-1 group-hover:text-white transition-colors duration-300 leading-snug text-white">
          {cert.title}
        </h3>

        <p className="text-gray-400 text-sm font-medium mb-3">{cert.issuer}</p>

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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        body, html { font-family: 'Inter', sans-serif; }

        /* Subtle dot-grid background for hero */
        .hero-grid-bg {
          background-image: radial-gradient(circle, rgba(59,130,246,0.10) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Glow ring on profile photo */
        .photo-glow {
          box-shadow: 0 0 0 1px rgba(59,130,246,0.25), 0 0 40px rgba(37,99,235,0.18);
        }

        /* Animated shimmer on "Available" badge */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .badge-shimmer {
          background: linear-gradient(90deg, rgba(59,130,246,0.15) 25%, rgba(96,165,250,0.28) 50%, rgba(59,130,246,0.15) 75%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .nav-pill.active {
          color: #60a5fa;
        }
        .nav-pill.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #3b82f6;
        }
      `}</style>

      <main
        className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-blue-950/30 text-white overflow-x-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >

        {/* ── NAVBAR ── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-gray-950/85 backdrop-blur-md border-b border-blue-900/40 shadow-lg shadow-blue-950/20"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
              <span className="font-bold text-xl">
                <span className="text-blue-400">Nofrion</span>
              </span>
            </button>

            <ul className="hidden md:flex items-center gap-1 text-sm list-none">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative nav-pill px-4 py-2 rounded transition-colors duration-200 font-medium text-sm ${
                      activeSection === item.id
                        ? "text-blue-400 active"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-all duration-300"
            >
              <i className="fa-solid fa-paper-plane text-xs" />
              <span>Hire Me</span>
            </button>

            <button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`w-5 h-px bg-gray-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`w-5 h-px bg-gray-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-px bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </button>
          </div>

          <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 border-b border-blue-900/40" : "max-h-0"}`}>
            <div className="px-6 pb-4 space-y-1 bg-gray-900/70">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-blue-400 bg-blue-950/40" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ══════════════════════════════════════════════════════════
            HERO — redesigned
        ══════════════════════════════════════════════════════════ */}
        <section
          id="home"
          className="relative z-10 min-h-screen flex items-center px-6 lg:px-8 pt-28 pb-20 hero-grid-bg overflow-hidden"
        >
          {/* Ambient background glow blobs */}
          <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-3xl" />

          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

            {/* ── Left content ── */}
            <div>
              {/* Available badge */}
              <div
                className={`mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/40 badge-shimmer text-blue-300 text-sm transition-all duration-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                Available for work
              </div>

              {/* Name — large display */}
              <h1
                className={`text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-5 transition-all duration-700 delay-100 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-white block">Nofrion</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ridho
                </span>
              </h1>

              {/* Role badge row */}
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="flex items-center gap-2 bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                  <i className="fa-solid fa-code text-blue-400" />
                  Backend Developer
                </span>
                <span className="text-gray-600 text-xs">+</span>
                <span className="flex items-center gap-2 bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                  <i className="fa-solid fa-layer-group text-blue-400" />
                  Fullstack
                </span>
              </div>

              {/* Description */}
              <p
                className={`max-w-lg text-gray-400 text-base leading-relaxed mb-4 transition-all duration-700 delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Fresh graduate dari SMK Jurusan Sistem Informasi Jaringan & Aplikasi dengan passion
                pada pengembangan web. Berpengalaman dengan{" "}
                <span className="text-blue-300 font-semibold">Laravel</span>,{" "}
                <span className="text-blue-300 font-semibold">CodeIgniter</span>, dan{" "}
                <span className="text-blue-300 font-semibold">PHP</span>.
              </p>

              {/* Mini tech stack indicator */}
              <div
                className={`flex items-center gap-2 mb-10 transition-all duration-700 delay-[350ms] ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-gray-500 text-xs">Tech Stack:</span>
                {["Laravel", "CodeIgniter", "MySQL", "Next.js", "Linux"].map((tech) => (
                  <span key={tech} className="text-gray-400 text-xs bg-gray-800/70 border border-gray-700 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className={`flex flex-wrap gap-3 transition-all duration-700 delay-[400ms] ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="group relative overflow-hidden bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-900/40"
                >
                  <i className="fa-solid fa-folder-open text-sm" />
                  <span>Lihat Project</span>
                  <i className="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-6 py-3 rounded-lg font-semibold text-sm border border-blue-800/60 text-blue-300 hover:border-blue-600 hover:bg-blue-950/50 transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fa-solid fa-message text-sm" />
                  Contact Me
                </button>
                <a
                  href="/CV_ Nofrion_Ridho.pdf"
                  download="CV_Nofrion_Ridho.pdf"
                  className="px-6 py-3 rounded-lg font-semibold text-sm border border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/60 transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fa-solid fa-download text-sm" />
                  Download CV
                </a>
              </div>
            </div>

            {/* ── Right: Profile image + floating stats ── */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Decorative ring behind photo */}
              <div className="absolute w-72 h-72 rounded-2xl border border-blue-700/20 rotate-3 scale-105" />
              <div className="absolute w-72 h-72 rounded-2xl border border-blue-600/10 -rotate-2 scale-110" />

              {/* Profile picture */}
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden photo-glow z-10">
                <Image
                  src="/images/foto_diri3.jpeg"
                  alt="Foto Profil Nofrion Ridho"
                  fill
                  className="object-cover"
                />
                {/* Subtle blue tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
              </div>

              {/* Floating stat card — top right */}
              <div className="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur-sm border border-blue-800/50 rounded-xl px-4 py-3 z-20 shadow-lg shadow-blue-950/40">
                <div className="text-xs text-gray-400 mb-0.5">Projects Selesai</div>
                <div className="text-xl font-bold text-white flex items-end gap-1">
                  5+
                  <i className="fa-solid fa-code-branch text-blue-400 text-sm mb-0.5" />
                </div>
              </div>

              {/* Floating stat card — bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-sm border border-blue-800/50 rounded-xl px-4 py-3 z-20 shadow-lg shadow-blue-950/40">
                <div className="text-xs text-gray-400 mb-0.5">PKL di</div>
                <div className="text-sm font-bold text-white leading-snug">
                  PT. Inovasi Inti
                  <br />
                  <span className="text-blue-400">10 Bulan</span>
                </div>
              </div>

              {/* Floating cert badge — bottom right */}
              <div className="absolute -bottom-2 -right-2 bg-blue-600/90 backdrop-blur-sm border border-blue-500/60 rounded-xl px-3 py-2.5 z-20 shadow-lg shadow-blue-800/40">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-certificate text-white text-sm" />
                  <div>
                    <div className="text-[10px] text-blue-100 font-medium leading-none mb-0.5">Bersertifikat</div>
                    <div className="text-xs text-white font-bold">5 Sertifikasi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="relative z-10 border-y border-blue-900/30 bg-blue-950/20 py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
            {[
              { value: "5+", label: "Projects Selesai", icon: "fa-solid fa-code-branch" },
              { value: "10", label: "Bulan PKL", icon: "fa-solid fa-building" },
              { value: "5+", label: "Teknologi", icon: "fa-solid fa-layer-group" },
            ].map((s) => (
              <div key={s.label} className="group">
                <i className={`${s.icon} text-blue-400 text-sm mb-3 block`} />
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1.5 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            EDUCATION
        ══════════════════════════════════════════════════════════ */}
        <section id="education" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-blue-950/10 to-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Pendidikan" />
              <h2 className="text-5xl font-bold tracking-tight text-white">My Education</h2>
            </div>
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
        <section id="certifications" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-blue-950/10 to-transparent">
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
                  className="group bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:shadow-md hover:shadow-blue-900/20 hover:border-blue-800/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-700/50 flex items-center justify-center mb-5 group-hover:bg-blue-600/30 transition-all duration-300">
                    <i className={`${faIcon} text-blue-400 text-base`} />
                  </div>
                  <h3 className="font-semibold text-sm text-white mb-4 leading-snug">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-700/50 text-gray-300 text-xs px-2.5 py-1 rounded border border-gray-600 group-hover:border-blue-800/60 group-hover:bg-blue-950/30 transition-all duration-200"
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
        <section id="experience" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-transparent to-blue-950/15">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Pengalaman" />
              <h2 className="text-5xl font-bold tracking-tight text-white">My Experience</h2>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-900/50" />

              <div className="relative pl-16">
                <div className="absolute left-[18px] top-9 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 shadow-lg shadow-blue-500/50" />

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:shadow-md hover:shadow-blue-900/20 hover:border-blue-800/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Web Developer Intern</h3>
                      <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm">
                        <i className="fa-solid fa-building text-xs" />
                        PT. Inovasi Inti Digital
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-800/50 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full">
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
                      <div key={text} className="flex items-start gap-3 text-sm text-gray-400 group/item">
                        <div className="w-7 h-7 rounded-lg bg-blue-950/50 border border-blue-800/40 flex items-center justify-center shrink-0 mt-0.5">
                          <i className={`${icon} text-xs text-blue-400`} />
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

            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-800/60 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full">
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

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-800/60 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full">
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
              <h2 className="text-5xl font-bold tracking-tight text-white">Design Gallery</h2>
              <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base">
                Selain backend development, saya juga mengerjakan desain web interface dan poster untuk kebutuhan internal perusahaan.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-palette text-blue-400 text-sm" />
                <h3 className="text-base font-semibold text-white">Poster and Web Design</h3>
              </div>
              <p className="text-gray-300 text-sm mb-6 pl-5">
                Poster kebutuhan internal perusahaan, visual promosi dan informasi operasional.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["hqc.png", "2.png", "10.png", "25.png"].map((image) => (
                  <div
                    key={image}
                    className="group relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
                  >
                    <Image
                      src={`/images/${image}`}
                      alt={image}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════════════════ */}
        <section id="contact" className="relative z-10 px-6 lg:px-8 py-32 bg-gradient-to-b from-transparent to-blue-950/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Hubungi Saya" />
              <h2 className="text-5xl font-bold tracking-tight text-white">Let&apos;s Work Together</h2>
              <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                Saya terbuka untuk peluang kerja sama, project freelance, atau diskusi teknologi. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-5 hover:shadow-md hover:shadow-blue-900/20 hover:border-blue-800/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-700/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600/30 transition-all duration-300">
                    <i className={`${c.faIcon} text-blue-400 text-base`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">{c.label}</div>
                    <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-200 truncate">
                      {c.value}
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right ml-auto text-gray-600 text-xs group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/CV_ Nofrion_Ridho.pdf"
                download="CV_Nofrion_Ridho.pdf"
                className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/40"
              >
                <i className="fa-solid fa-download" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="relative z-10 border-t border-blue-900/30 px-6 lg:px-8 py-8 bg-gray-950/50">
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