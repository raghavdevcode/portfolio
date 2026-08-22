import { useEffect, useState } from "react";

function Portfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.title = "Portfolio · Raghav Bhanot";
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ShopZen",
      tag: "E-commerce platform",
      description:
        "A full-stack MERN e-commerce platform with secure authentication, product and category management, shopping cart, wishlist, order management, and an admin dashboard.",
      stack: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
      link: "https://shopzen-frontend.vercel.app/",
    },
    {
      title: "StudyCourse",
      tag: "E-learning platform",
      description:
        "A premium e-learning platform offering affordable courses in web development, programming, and databases — with video lessons, free previews, and an enrollment system.",
      stack: ["React", "Express", "Node.js", "MongoDB"],
      link: "https://studycoursewebsite.netlify.app/"
    },
  ];

  const skillGroups = [
    { label: "Frontend", items: ["React JS", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { label: "Backend", items: ["Node JS", "Express JS"] },
    { label: "Database", items: ["MongoDB"] },
    { label: "Tooling", items: ["Git & GitHub", "Responsive Design"] },
  ];

  const navItems = ["home", "about", "skills", "projects", "contact"];

  const IconGithub = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
  const IconMail = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 8.5 7 8.5-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const IconArrow = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#040810] text-slate-200 font-sans selection:bg-cyan-400/30 selection:text-white">
      {/* ambient glow field */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full">
        <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl">
          <a href="#home" className="font-mono text-sm tracking-wide text-cyan-300">
            raghav<span className="text-slate-500">dev</span>code
          </a>
          <ul className="hidden gap-1 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`rounded-lg px-3 py-1.5 capitalize transition ${active === item
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-400 hover:text-slate-100"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raghavbhanotr.b05@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-cyan-400/30 px-4 py-1.5 text-sm text-cyan-300 transition hover:bg-cyan-400/10 sm:block"
          >
            Let's talk
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            available for MERN stack roles
          </p>

          <h2 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            Raghav Bhanot
          </h2>
          <p className="mt-3 font-mono text-lg text-cyan-300">MERN Stack Developer</p>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-400">
            I build full-stack web applications end to end — from React
            interfaces down to the MongoDB documents underneath — with an
            emphasis on clean architecture and interfaces people actually
            enjoy using.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              View projects
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/raghavdevcode"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:border-white/30"
            >
              <IconGithub className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* signature: MERN stack rendered as physical glass layers */}
        <div className="relative mx-auto h-80 w-full max-w-sm">
          {[
            { label: "MongoDB", sub: "database", offset: 0 },
            { label: "Express", sub: "server", offset: 1 },
            { label: "React", sub: "interface", offset: 2 },
            { label: "Node.js", sub: "runtime", offset: 3 },
          ].map((layer, i) => (
            <div
              key={layer.label}
              className="absolute left-1/2 flex w-72 -translate-x-1/2 items-center justify-between rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1"
              style={{
                top: `${i * 62}px`,
                transform: `translateX(-50%)`,
                zIndex: 10 - i,
              }}
            >
              <div>
                <p className="text-sm font-semibold text-white">{layer.label}</p>
                <p className="font-mono text-[11px] text-cyan-300/70">{layer.sub}</p>
              </div>
              <span className="font-mono text-xs text-slate-500">0{layer.offset + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl border-t border-white/5 px-6 py-24">
        <p className="mb-3 font-mono text-xs text-cyan-400"> about</p>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="font-display text-3xl font-semibold text-white">
              Turning ideas into working products
            </h3>
            <p className="mt-5 leading-8 text-slate-400">
              I'm a dedicated web developer building modern, responsive
              applications with the MERN stack. I care about the details —
              clean component structure, sensible state management, and
              interfaces that feel effortless to use.
            </p>
            <p className="mt-4 leading-8 text-slate-500">
              Completed my +2 education while shipping multiple full-stack
              projects using HTML, CSS, JavaScript, and React.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2+", label: "Projects shipped" },
              { value: "MERN", label: "Core stack" },
              { value: "100%", label: "Responsive builds" },
              { value: "React", label: "Primary frontend" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-cyan-400/30"
              >
                <p className="font-display text-3xl font-semibold text-cyan-300">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl border-t border-white/5 px-6 py-24">
        <p className="mb-3 font-mono text-xs text-cyan-400">skills</p>
        <h3 className="mb-12 font-display text-3xl font-semibold text-white">
          Technical toolkit
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-cyan-400/80">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl border-t border-white/5 px-6 py-24">
        <p className="mb-3 font-mono text-xs text-cyan-400">projects</p>
        <h3 className="mb-12 font-display text-3xl font-semibold text-white">
          Selected work
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-cyan-400/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
              <p className="font-mono text-xs text-cyan-400/80">{project.tag}</p>
              <h4 className="mt-2 font-display text-2xl font-semibold text-white">
                {project.title}
              </h4>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                Live preview
                <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl border-t border-white/5 px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-12 text-center backdrop-blur-xl">
          <p className="mb-3 font-mono text-xs text-cyan-400">contact</p>
          <h3 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Let's build something together
          </h3>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Looking for a MERN stack developer? I'm open to freelance work
            and full-time roles — reach out and let's talk.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=raghavbhanotr.b05@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              <IconMail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://github.com/raghavdevcode"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:border-white/30"
            >
              <IconGithub className="h-4 w-4" />
              GitHub profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center font-mono text-xs text-slate-600">
        © {new Date().getFullYear()} Raghav Bhanot — built with React & Tailwind
      </footer>
    </div>
  );
}

export default Portfolio;