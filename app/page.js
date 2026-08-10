"use client";

import { useState } from "react";
import AiChat from "./components/AiChat";
import Image from "next/image";
import ProjectCarousel from "./components/ProjectCarousel";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const experiences = [
    {
      title: "Technical Specialist I",
      company: "Alliance Software, Inc.",
      period: "Jun 2025 – Mar 2026",
      points: [
        "Debugged and resolved live production issues for international enterprise users.",
        "Built a tenant-wide SharePoint application using Power Apps and SPFx.",
        "Ran functional, regression, and UAT testing to keep releases stable.",
      ],
    },
    {
      title: "AI Research Intern",
      company: "Alliance Software, Inc.",
      period: "Feb 2025 – Jun 2025",
      points: [
        "Researched and evaluated AI tools for developer productivity.",
        "Built proof-of-concept projects using React, Transformers.js, and Vite.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Cebu City",
      period: "Jan 2024 – Dec 2024",
      points: [
        "Designed and deployed custom web systems for business workflows.",
        "Handled end-to-end frontend and backend development.",
      ],
    },
  ];

  const projects = [
    {
      title: "SWU Class & Faculty Scheduling",
      description:
        "Automated faculty and class scheduling using predictive logic and rule-based constraints for Southwestern University.",
      stack: ["Full‑Stack", "Scheduling Logic", "Database Design"],
      live: "https://swushsfaculty.swucite.tech/",
      images: ["/project-folder/CFSS/cfss1.png"],
    },
    {
      title: "OESL Global Support",
      description:
        "L1/L2 application support handling debugging, root cause analysis, and UAT testing across production environments.",
      stack: ["Power Apps", "SPFx", "QA & UAT Testing"],
      live: "#",
      images: ["/project-folder/OESL/oesl.png"],
    },
    {
      title: "Connected Consumer Platform",
      description:
        "An internal digital platform built for Unilab to modernize brand engagement and streamline campaign operations.",
      stack: ["CMS", "System Analysis", "Microsoft SQL Server"],
      live: "#",
      images: ["/project-folder/CBG/unilab.png"],
    },
  ];

  // Global Theme Object
  const theme = {
    bg: isDark ? "bg-slate-950" : "bg-slate-50",
    altBg: isDark ? "bg-slate-900" : "bg-slate-100",
    text: isDark ? "text-slate-200" : "text-slate-800",
    textMuted: isDark ? "text-slate-400" : "text-slate-500",
    heading: isDark ? "text-white" : "text-slate-950",
    cardBg: isDark ? "bg-slate-950" : "bg-white",
    cardBorder: isDark ? "border-slate-700" : "border-slate-900",
    pillBg: isDark ? "bg-slate-800" : "bg-slate-200",
    accentBg: isDark ? "bg-slate-200" : "bg-slate-900",
    accentText: isDark ? "text-slate-900" : "text-white",
    shadow: isDark
      ? "shadow-[4px_4px_0px_rgba(51,65,85,1)]"
      : "shadow-[4px_4px_0px_rgba(15,23,42,1)]",
  };

  return (
    <main
      className={`relative min-h-screen transition-colors duration-500 ${theme.bg} ${theme.text}`}
    >
      {/* INLINE NAVBAR */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl px-6 py-4 flex items-center justify-between rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} backdrop-blur-xl ${theme.shadow} transition-colors duration-500`}
      >
        <a
          href="#"
          className={`font-black text-xl tracking-tighter ${theme.heading}`}
        >
          KURT IMPERIAL
        </a>

        <div className="hidden md:flex gap-8">
          <a
            href="#projects"
            className={`font-bold text-sm hover:underline underline-offset-4 ${theme.text}`}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`font-bold text-sm hover:underline underline-offset-4 ${theme.text}`}
          >
            Experience
          </a>
          <a
            href="#freelance"
            className={`font-bold text-sm hover:underline underline-offset-4 ${theme.text}`}
          >
            Clients
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 border-2 ${theme.cardBorder} rounded-lg font-black text-xs transition-transform active:translate-y-1 ${theme.pillBg} ${theme.heading}`}
          >
            {isDark ? "☀️ LIGHT" : "🌙 DARK"}
          </button>

          <button
            className="md:hidden font-black text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[95%] rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} ${theme.shadow} p-4 flex flex-col gap-4 md:hidden`}
        >
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-bold ${theme.heading}`}
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-bold ${theme.heading}`}
          >
            Experience
          </a>
          <a
            href="#freelance"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-bold ${theme.heading}`}
          >
            Clients
          </a>
        </div>
      )}

      {/* SECTION 1: HERO (Grid Background) */}
      <section
        className={`w-full relative pt-40 pb-32 border-b-2 ${theme.cardBorder} overflow-hidden`}
      >
        {/* Background Graphic: Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

        {/* Floating Graphic 1: Data Analytics / Spreadsheet */}
        <div
          className={`absolute top-[20%] left-[2%] md:left-[8%] px-4 py-3 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} font-mono text-xs ${theme.shadow} rotate-[-3deg] opacity-70 pointer-events-none hidden sm:block`}
        >
          <span className="font-bold text-slate-500 mr-2">ƒx</span>
          =SUM(overall_totals, outstanding_balances)
        </div>

        {/* Floating Graphic 2: System Status */}
        <div
          className={`absolute bottom-[15%] right-[2%] md:right-[10%] px-4 py-3 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} font-mono text-xs ${theme.shadow} rotate-[4deg] opacity-70 flex items-center gap-2 pointer-events-none`}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          SYS_ACTIVE
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-12 items-center md:items-start justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <div
              className={`inline-block mb-6 px-4 py-1.5 rounded-xl text-sm font-bold border-2 ${theme.cardBorder} ${theme.cardBg}`}
            >
              Systems Analyst & Full-Stack Dev
            </div>
            <h1
              className={`text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 ${theme.heading}`}
            >
              I build reliable systems and automate workflows.
            </h1>
            <p
              className={`text-lg md:text-xl leading-relaxed mb-10 font-medium ${theme.textMuted}`}
            >
              Based in Cebu, Philippines. I specialize in turning complex
              business requirements into clean, scalable architecture, QA
              automation, and enterprise support.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className={`px-8 py-4 rounded-xl border-2 border-transparent font-bold transition-transform hover:-translate-y-1 ${theme.accentBg} ${theme.accentText} ${theme.shadow}`}
              >
                See My Work
              </a>
              <a
                href="/Kurt-Imperial-CV.pdf"
                target="_blank"
                className={`px-8 py-4 rounded-xl font-bold border-2 transition-all hover:-translate-y-1 ${theme.cardBorder} ${theme.cardBg} ${theme.heading} ${theme.shadow}`}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 hover:rotate-2 transition-transform duration-300">
            <div
              className={`absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 ${theme.cardBorder} ${theme.accentBg}`}
            ></div>
            <div
              className={`relative h-full w-full overflow-hidden rounded-2xl border-2 ${theme.cardBorder} bg-slate-200`}
            >
              <Image
                src="/profile.png"
                alt="Kurt Imperial"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROJECTS (Pronounced Dot Matrix Background) */}
      <section
        id="projects"
        className={`w-full relative py-32 border-b-2 ${theme.cardBorder} overflow-hidden`}
      >
        {/* Background Graphic: Bolder Dots */}
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,${isDark ? "rgba(148,163,184,0.15)" : "rgba(148,163,184,0.4)"}_3px,transparent_0)] bg-[size:32px_32px] pointer-events-none`}
        ></div>

        {/* Floating Graphic 1: JSON Payload */}
        <div
          className={`absolute top-[10%] right-[2%] md:right-[8%] px-4 py-3 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} font-mono text-xs ${theme.shadow} rotate-[3deg] opacity-80 pointer-events-none hidden sm:block`}
        >
          <span className="text-slate-500 mr-2">{"{"}</span>
          "status": "DEPLOYED", "QA_pass": true
          <span className="text-slate-500 ml-2">{"}"}</span>
        </div>

        {/* Floating Graphic 2: Creative Aspect Ratio Config */}
        <div
          className={`absolute top-[45%] left-[2%] md:left-[4%] px-3 py-2 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} font-mono text-[10px] ${theme.shadow} rotate-[-5deg] opacity-70 pointer-events-none hidden md:block`}
        >
          --ar 9:16
        </div>

        {/* Floating Graphic 3: API Route */}
        <div
          className={`absolute bottom-[10%] left-[10%] md:left-[20%] px-4 py-3 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} font-mono text-[10px] ${theme.shadow} rotate-[6deg] opacity-70 pointer-events-none hidden lg:block`}
        >
          <span className="text-emerald-500 font-bold mr-2">POST</span>{" "}
          /api/schedule/validate
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2
            className={`text-4xl font-black mb-12 tracking-tight ${theme.heading}`}
          >
            Featured Builds.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group flex flex-col p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}
              >
                <div
                  className={`mb-6 rounded-xl overflow-hidden border-2 ${theme.cardBorder}`}
                >
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${theme.heading}`}>
                  {project.title}
                </h3>
                <p className={`mb-6 font-medium flex-grow ${theme.textMuted}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-lg border-2 ${theme.cardBorder} text-xs font-bold ${theme.pillBg} ${theme.text}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-black hover:underline underline-offset-4 ${theme.heading}`}
                  >
                    View Live Site <span>↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE (Solid Offset Background) */}
      <section
        id="experience"
        className={`w-full relative py-32 border-b-2 ${theme.cardBorder} ${theme.altBg} overflow-hidden`}
      >
        {/* Floating Graphic 1: L2 Support Ticket */}
        <div
          className={`absolute top-[15%] left-[2%] md:left-[5%] px-4 py-3 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} font-mono text-[10px] ${theme.shadow} rotate-[3deg] opacity-80 pointer-events-none hidden sm:block`}
        >
          <span className="text-amber-500 font-bold mr-2">L2_TICKET:</span>{" "}
          RESOLVED
        </div>

        {/* Floating Graphic 2: Gantt Chart */}
        <div
          className={`absolute top-[40%] right-[-2%] md:right-[5%] p-4 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} ${theme.shadow} rotate-[-2deg] opacity-80 flex flex-col gap-3 w-48 pointer-events-none hidden lg:flex`}
        >
          <div className="text-[10px] font-black tracking-widest uppercase text-slate-500">
            Milestones
          </div>
          <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-sm overflow-hidden border border-slate-300 dark:border-slate-600">
            <div className="w-[85%] h-full bg-slate-500 dark:bg-slate-400"></div>
          </div>
          <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-sm overflow-hidden border border-slate-300 dark:border-slate-600">
            <div className="w-[60%] h-full bg-slate-400 dark:bg-slate-300 translate-x-[20%]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2
            className={`text-4xl font-black mb-12 tracking-tight ${theme.heading}`}
          >
            Experience.
          </h2>
          <div className="space-y-6">
            {experiences.map((job) => (
              <div
                key={job.title}
                className={`p-6 md:p-8 rounded-2xl border-2 transition-transform hover:-translate-y-1 ${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                  <div>
                    <h3 className={`text-xl font-black ${theme.heading}`}>
                      {job.title}
                    </h3>
                    <p className={`font-bold mt-1 ${theme.textMuted}`}>
                      {job.company}
                    </p>
                  </div>
                  <div
                    className={`px-4 py-2 border-2 ${theme.cardBorder} rounded-xl text-sm font-bold ${theme.pillBg} ${theme.heading}`}
                  >
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className={`font-black mt-0.5 ${theme.heading}`}>
                        →
                      </span>
                      <span className={`font-medium ${theme.text}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FREELANCING & CLIENTS (Hazard Stripes Background) */}
      <section
        id="freelance"
        className={`w-full relative py-32 border-b-2 ${theme.cardBorder} overflow-hidden`}
      >
        {/* Background Graphic: Diagonal Stripes */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_15px,rgba(148,163,184,0.1)_15px,rgba(148,163,184,0.1)_30px)] pointer-events-none"></div>

        {/* Floating Graphic 1: Document */}
        <div
          className={`absolute bottom-[20%] left-[5%] md:left-[15%] px-4 py-3 rounded-xl border-2 ${theme.cardBorder} ${theme.cardBg} font-mono text-[10px] ${theme.shadow} rotate-[-5deg] opacity-90 pointer-events-none hidden sm:block`}
        >
          📄 scope_of_work.md
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <h2
            className={`text-4xl font-black mb-8 tracking-tight ${theme.heading}`}
          >
            Freelancing & Clients.
          </h2>
          <div
            className={`inline-block px-8 py-6 border-2 ${theme.cardBorder} rounded-xl font-black text-2xl md:text-3xl rotate-[-2deg] ${theme.cardBg} ${theme.heading} ${theme.shadow}`}
          >
            🚧 CURRENTLY BUILDING 🚧
          </div>
          <p className={`mt-8 max-w-md mx-auto font-medium ${theme.textMuted}`}>
            I am currently compiling case studies, scopes of work, and
            architecture diagrams for my independent clients. Check back soon.
          </p>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className={`w-full py-20 ${theme.bg}`}>
        <div
          className={`max-w-3xl mx-auto p-10 text-center rounded-2xl border-2 ${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}
        >
          <h2 className={`text-3xl font-black mb-4 ${theme.heading}`}>
            Let's build something.
          </h2>
          <p className={`mb-8 font-medium ${theme.textMuted}`}>
            Open for software engineering and support roles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/kurtimperial02"
              className={`px-6 py-3 border-2 ${theme.cardBorder} rounded-xl font-bold transition-transform hover:-translate-y-1 ${theme.cardBg} ${theme.heading}`}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kurtimperial02"
              className={`px-6 py-3 border-2 ${theme.cardBorder} rounded-xl font-bold transition-transform hover:-translate-y-1 ${theme.cardBg} ${theme.heading}`}
            >
              LinkedIn
            </a>
            <a
              href="mailto:kurtimperial02@gmail.com"
              className={`px-6 py-3 border-2 border-transparent rounded-xl font-bold transition-transform hover:-translate-y-1 ${theme.accentBg} ${theme.accentText}`}
            >
              Email Me
            </a>
          </div>
        </div>
      </footer>

      <AiChat isDark={isDark} />
    </main>
  );
}
