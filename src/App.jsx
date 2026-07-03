
import profile from "./assets/profile.jpg";
export default function Portfolio() {
  const projects = [
    {
      title: "Weather App",
      desc: "Responsive weather app using React, API integration, and Tailwind CSS.",
      tech: ["React", "Tailwind", "OpenWeather API"],
    },
    {
      title: "Connect 4 Game",
      desc: "Interactive Connect 4 game with clean UI and game logic.",
      tech: ["JavaScript", "React", "CSS"],
    },
    {
      title: "Java Placement Notes",
      desc: "A structured platform for DSA, Java, and interview preparation notes.",
      tech: ["React", "Java", "DSA"],
    },
  ];

  const skills = [
    "Java",
    "DSA",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Spring Boot",
    "Git & GitHub",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            Shubham.
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-lg mb-3">Hello, I'm</p>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              Shubham <br />
              Prajapati
            </h2>

            <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
              MERN Stack Developer • Java & DSA 
            </h3>

            <p className="text-gray-400 max-w-xl text-lg leading-8 mb-8">
              I am a B.Tech CSE student focused on Java, DSA, React and MERN Stack.
              I build modern web apps and prepare for placements with strong problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
               <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden">
                 <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                 />
             </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            I am a B.Tech Computer Science student passionate about Full Stack Web Development. I specialize in React, Node.js, Express.js, MongoDB, Java, and Data Structures & Algorithms. I enjoy building responsive web applications and continuously improving my problem-solving skills.
          </p>
        </div>
      </section>

      <section id="skills" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-2xl py-5 text-center text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition"
              >
                <div className="h-44 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6 flex items-center justify-center text-4xl font-bold text-cyan-400">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-400 mb-5 leading-7">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

          <p className="text-gray-400 text-lg mb-10">
            If you want to collaborate, discuss projects, or have an opportunity, feel free to contact me.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:ishubham5999@gmail.com"
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Shubham-code05"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-prajapati-a986b3251/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}