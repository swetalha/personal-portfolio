import { useState } from "react";

const arrProjects = [
  {
    name: "Banktist- A Banking App",
    src: "/banktist.png",
    link: "https://banktist-banking.vercel.app/",
  },
];

function Header({ current }) {
  return (
    <header className="w-full h-24 flex justify-center items-center">
      <ul className="flex gap-14">
        <li onClick={(event) => console.log(event)}>
          <a
            href="#about"
            className={`header-links ${current === "about" ? "active-link" : ""}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`header-links ${current === "projects" ? "active-link" : ""}`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`header-links ${current === "skills" ? "active-link" : ""}`}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={`header-links ${current === "resume" ? "active-link" : ""}`}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

function About({ current }) {
  return (
    <div id="about" className="box">
      <div className="max-w-[600px]">
        <h1 className="animate-float">
          Hey! I'm Talha, and
          <br />
          I'm a Full Stack Developer.
        </h1>
        <p className="text-[18px] mt-6">
          I'm an enthusiastic, self-taught developer who loves building
          beautiful and functional web apps.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full h-24 flex justify-center items-start absolute bottom-0">
      <ul className="flex gap-14">
        <li className="footer-links">
          <img
            src="/square-x-twitter-brands-solid-full.svg"
            alt="social-link-linkedin"
            className="img-socials"
          />
          <a href="https://x.com/swetalha" target="_blank" rel="noreferrer">
            X
          </a>
        </li>
        <li className="footer-links">
          <img
            src="/linkedin-brands-solid-full.svg"
            alt="social-link-linkedin"
            className="img-socials"
          />
          <a
            href="https://www.linkedin.com/in/swetalha/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="footer-links">
          <img
            src="/square-github-brands-solid-full.svg"
            alt="social-link-linkedin"
            className="img-socials"
          />
          <a
            href="https://github.com/swetalha"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

function Project({ name, src, link }) {
  return (
    <div className="project-banktist box-project">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="py-0 px-0 rounded-none underline"
      >
        <h2>{name}</h2>
      </a>
      <img src={src} alt="project-image" className="img-project" />
      <button className="active-link">Explore</button>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects" className="box active-box">
      <div className="max-w-[600px] h-[600px]">
        <h1>Some Projects I've built</h1>
        <div className="box-projects my-8">
          {arrProjects.map((project) => (
            <Project
              name={project.name}
              src={project.src}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [current, setCurrent] = useState("projects");

  return (
    <div className="w-full h-full">
      <Header current={current} />
      <main className="relative">
        <About />
        <Projects />
        <div id="skills" className="box"></div>
        <div id="resume" className="box"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
