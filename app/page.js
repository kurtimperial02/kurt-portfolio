import Image from "next/image";

export default function Home() {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend: ["PHP", "Python", "Java", "C#", "REST APIs", "CRUD Operations"],
    databases: ["MySQL", "PostgreSQL", "Firebase"],
    testing: [
      "Cypress",
      "Playwright",
      "CodeceptJS",
      "Functional Testing",
      "Regression Testing",
      "UAT",
    ],
    microsoft: [
      "Power Apps",
      "Power Automate",
      "SharePoint Online",
      "SPFx",
      "RBAC",
    ],
    tools: ["Git", "GitHub", "Node.js", "Apache", "Figma", "Power BI"],
  };

  const experiences = [
    {
      title: "Technical Specialist I",
      company: "Alliance Software, Inc.",
      period: "June 2025 – March 2026",
      points: [
        "Provided L1 and L2 application support for international users across multiple countries.",
        "Performed debugging, root cause analysis, and issue resolution in production and staging environments.",
        "Conducted functional, regression, and UAT testing for new releases and patches.",
        "Built a tenant-wide SharePoint-integrated application using Power Apps, Power Automate, and SPFx.",
        "Collaborated with developers, QA teams, and service owners to improve stability and user experience.",
      ],
    },
    {
      title: "AI Research Intern",
      company: "Alliance Software, Inc.",
      period: "February 2025 – June 2025",
      points: [
        "Researched and evaluated AI tools for developer productivity and internal adoption.",
        "Built proof-of-concept projects using React, Transformers.js, and Vite.",
        "Designed and executed test scenarios using Cypress, Playwright, and CodeceptJS.",
        "Documented findings, test results, and technical recommendations for stakeholders.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Cebu City",
      period: "January 2024 – December 2024",
      points: [
        "Designed, developed, and deployed custom web systems for business and academic workflows.",
        "Built responsive user interfaces and backend logic for application workflows.",
        "Handled maintenance, bug fixes, optimization, and post-deployment support.",
      ],
    },
  ];

  const projects = [
    {
      title: "TSUGA & GA: Predictive Class & Faculty Scheduling System",
      description:
        "A full-stack web-based scheduling system designed to automate faculty and class scheduling using predictive logic and rule-based constraints.",
      stack: [
        "Full-Stack Web Development",
        "Scheduling Logic",
        "Database Design",
      ],
      live: "[swushsfaculty.swucite.tech](https://swushsfaculty.swucite.tech/)",
      paper:
        "[kms-fict.horizon.ac.id](https://kms-fict.horizon.ac.id/ojs/index.php/innovex/article/view/8)",
    },
    {
      title: "Tenant-Wide SharePoint Navigation App",
      description:
        "A SharePoint-integrated application built with Power Apps, Power Automate, and SPFx to provide a floating navigation experience across tenant sites.",
      stack: ["Power Apps", "Power Automate", "SPFx", "SharePoint Online"],
      live: "#",
      paper: "#",
    },
    {
      title: "AI Tool Evaluation and Testing Sandbox",
      description:
        "A proof-of-concept environment for researching and testing AI tools for software development workflows using modern frontend and automation testing tools.",
      stack: ["React", "Transformers.js", "Vite", "Cypress", "Playwright"],
      live: "#",
      paper: "#",
    },
  ];

  const certificates = [
    "Responsive Web Design — freeCodeCamp",
    "Legacy JavaScript Algorithms and Data Structures — freeCodeCamp",
    "Setting a Foundation for Successful Test Automation — TestAutomationU",
    "Java Programming — TestAutomationU",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.4fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">
              Software Engineer
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Kurt Hydein P. Imperial
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Full-stack developer with experience in web development,
              automation, quality assurance, and production support. I build
              practical systems that are reliable, scalable, and user-focused.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-200 hover:bg-cyan-300"
              >
                View Projects
              </a>

              <a
                href="/Kurt-Imperial-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/profile.png"
                  alt="Kurt Imperial"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">
                  Kurt Imperial
                </h2>
                <p className="text-sm text-slate-400">
                  Full-Stack Developer · QA · Automation
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Location:</span>{" "}
                Lapu-Lapu City, Cebu, PH
              </p>

              <p>
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a
                  href="[linkedin.com](https://www.linkedin.com/in/kurtimperial02)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  linkedin.com/in/kurtimperial02
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">GitHub:</span>{" "}
                <a
                  href="[github.com](https://github.com/kurtimperial02)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  github.com/kurtimperial02
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Focus:</span>{" "}
                Full-stack development, QA, automation, and production support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" id="about">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-6 leading-8 text-slate-300">
            I’m a software engineer based in Cebu, Philippines, with hands-on
            experience in full-stack web development, systems analysis,
            automation, quality assurance, and production support. I’ve worked
            on scalable systems for local and international users, translating
            business needs into technical solutions that are maintainable and
            effective.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            My work includes building custom web applications, debugging live
            issues, performing root-cause analysis, supporting releases, and
            improving workflows through automation. I enjoy creating systems
            that solve real problems and deliver a smooth user experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" id="skills">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-4 text-xl font-semibold capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" id="experience">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-10 space-y-6">
          {experiences.map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-slate-300">{job.company}</p>
                </div>
                <p className="text-sm text-cyan-400">{job.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" id="projects">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-cyan-400 hover:underline"
                  >
                    Live
                  </a>
                )}
                {project.paper !== "#" && (
                  <a
                    href={project.paper}
                    target="_blank"
                    className="text-cyan-400 hover:underline"
                  >
                    Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" id="certificates">
        <h2 className="text-3xl font-bold">Certificates</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" id="contact">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="leading-8 text-slate-300">
            I’m open to software engineering, web development, QA, automation,
            and support-related opportunities. You can reach me through LinkedIn
            or GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="[linkedin.com](https://www.linkedin.com/in/kurtimperial02)"
              target="_blank"
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              LinkedIn
            </a>
            <a
              href="[github.com](https://github.com/kurtimperial02)"
              target="_blank"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
