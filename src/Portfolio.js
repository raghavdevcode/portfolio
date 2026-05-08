import { useEffect } from "react";

 function Portfolio() {
   useEffect(() => {
        document.title = "Portfolio";
    }, []);

  const projects = [
    {
      title: "Digital Marketing Website",
      description:
        "Responsive digital marketing website with modern UI, service sections, and clean layouts.",
      link: "https://codewithrb324.github.io/DIGITMARKETING-WEBSITE/",
    },
    {
      title: "Interiority Website",
      description:
        "Modern interior design business website with responsive layouts and attractive design.",
      link: "https://codewithrb324.github.io/INTERIORITY-WEBSITE/",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Bootstrap",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            Raghav Bhanot
          </h1>

          <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-cyan-400 text-lg mb-4">MERN Stack Developer</p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-cyan-400">Raghav Bhanot</span>
          </h2>

          <p className="text-slate-300 text-lg leading-8 max-w-2xl">
            Passionate MERN Stack Developer skilled in building responsive,
            user-friendly, and modern web applications using React, Node.js,
            Express.js, and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-2xl transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/codewithrb324"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-6 py-3 rounded-2xl transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/30">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-7xl font-bold text-cyan-400">
              RB
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h3>

            <p className="text-slate-300 leading-8 text-lg">
              I am a dedicated and enthusiastic web developer with knowledge of
              MERN Stack technologies. I enjoy creating modern websites with
              responsive layouts and smooth user experiences.
            </p>

            <p className="text-slate-400 leading-8 mt-4">
              I have completed my +2 education and developed multiple frontend
              projects using HTML, CSS, JavaScript, and React JS.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
              <h4 className="text-4xl font-bold text-cyan-400">2+</h4>
              <p className="text-slate-300 mt-2">Projects Completed</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
              <h4 className="text-4xl font-bold text-cyan-400">MERN</h4>
              <p className="text-slate-300 mt-2">Stack Developer</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
              <h4 className="text-4xl font-bold text-cyan-400">100%</h4>
              <p className="text-slate-300 mt-2">Responsive Design</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
              <h4 className="text-4xl font-bold text-cyan-400">React</h4>
              <p className="text-slate-300 mt-2">Frontend Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800"
      >
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Technical Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <p className="font-semibold text-slate-200">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800"
      >
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          My Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300"
            >
              <div className="h-56 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-5xl font-bold">
                Project {index + 1}
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h4>

                <p className="text-slate-300 leading-7 mb-6">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800"
      >
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-bold text-cyan-400 mb-6">
            Contact Me
          </h3>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-8">
            Looking for a MERN Stack Developer? Let's connect and build amazing
            web applications together.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rbraghav0516@gmail.com" target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/codewithrb324"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-2xl font-semibold transition"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400 text-sm">
        © 2026 Raghav Bhanot. All Rights Reserved.
      </footer>
    </div>
  );
}
export default Portfolio;