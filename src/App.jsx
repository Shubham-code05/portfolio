
import profile from "./assets/profile.jpg";
import "./App.css";

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

  const stats = [
    { value: "2+", label: "Years learning" },
    { value: "5+", label: "Projects built" },
    { value: "100+", label: "DSA problems" },
  ];

  return (
    <div className="portfolio-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <nav className="topbar">
        <div className="nav-inner">
          <h1 className="brand-name">Shubham.</h1>

          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="hero-section">
          <div className="hero-copy fade-up">
            <p className="section-kicker">Hello, I&apos;m</p>

            <h2 className="hero-title">
              Shubham
              <span className="hero-title-accent"> Prajapati</span>
            </h2>

            <h3 className="hero-subtitle">MERN Stack Developer • Java &amp; DSA</h3>

            <p className="hero-description">
              I am a B.Tech CSE student focused on Java, DSA, React, and MERN Stack.
              I build modern web apps and sharpen my problem-solving skills for future opportunities.
            </p>

            <div className="cta-row">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual fade-up delay-2">
            <div className="profile-shell">
              <div className="profile-glow" />
              <img src={profile} alt="Shubham Prajapati" className="profile-image" />
            </div>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <div className="section-heading">
            <span className="section-tag">About Me</span>
            <h2>Building clean interfaces and strong logic.</h2>
          </div>

          <p className="about-copy">
            I am a B.Tech Computer Science student passionate about Full Stack Web Development.
            I specialize in React, Node.js, Express.js, MongoDB, Java, and Data Structures &amp; Algorithms.
            I enjoy building responsive web applications and continuously improving my problem-solving skills.
          </p>
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading center">
            <span className="section-tag">Skills</span>
            <h2>Tools I work with.</h2>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-pill" style={{ animationDelay: `${index * 80}ms` }}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section projects-section">
          <div className="section-heading center">
            <span className="section-tag">Projects</span>
            <h2>Recently built experiences.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-visual">0{index + 1}</div>

                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tech-list">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <a href="#contact" className="project-link">
                  View Project <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="contact-box">
            <span className="section-tag">Let&apos;s Connect</span>
            <h2>Open for projects and collaboration.</h2>

            <p>
              If you want to collaborate, discuss projects, or have an opportunity,
              feel free to reach out.
            </p>

            <div className="contact-actions">
              <a href="mailto:ishubham5999@gmail.com" className="primary-btn">
                Email Me
              </a>

              <a
                href="https://github.com/Shubham-code05"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-prajapati-a986b3251/"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}