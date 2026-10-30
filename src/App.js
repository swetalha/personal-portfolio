import { useState } from "react";

const arrProjects = [
  {
    name: "Banktist- A Banking App",
    src: "/banktist.png",
    link: "https://banktist-banking.vercel.app/",
  },
  {
    name: "Eat-n-Split - Splitting Bills",
    src: "/eat-n-split.png",
    link: "https://eat-n-split-mu-smoky.vercel.app/",
  },
];

function Header({ currentScreen, setCurrent }) {
  const handleClick = (event) => setCurrent(event.target.dataset.section);

  return (
    <header className="w-full h-24 flex justify-center items-center">
      <ul className="flex gap-14">
        <li>
          <a
            href="#about"
            className={`header-links ${currentScreen === "about" ? "active-link" : ""}`}
            onClick={handleClick}
            data-section="about"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`header-links ${currentScreen === "projects" ? "active-link" : ""}`}
            onClick={handleClick}
            data-section="projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`header-links ${currentScreen === "skills" ? "active-link" : ""}`}
            onClick={handleClick}
            data-section="skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={`header-links ${currentScreen === "resume" ? "active-link" : ""}`}
            onClick={handleClick}
            data-section="resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

function About({ currentScreen }) {
  return (
    <div
      id="about"
      className={`box ${currentScreen === "about" ? `active-box` : ``} `}
    >
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

function Project({ name, src, link, active }) {
  return (
    <div className={`box-project ${active ? `active-box` : `inactive-box`}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <h2>{name}</h2>
      </a>
      <img src={src} alt="img-project" className="w-[600px] rounded-xl" />
      <button className="active-link">Explore</button>
    </div>
  );
}

function Projects({ currentScreen }) {
  const [currentProject, setProject] = useState(0);

  const handleNext = () =>
    setProject((current) =>
      current >= arrProjects.length - 1 ? 0 : current + 1,
    );
  const handlePrevious = () =>
    setProject((current) =>
      current <= 0 ? arrProjects.length - 1 : current - 1,
    );

  return (
    <div
      id="projects"
      className={`box flex-col gap-8 ${currentScreen === "projects" ? `active-box` : ``}`}
    >
      <h1>Projects I've Built</h1>
      <div className="box-projects-slider">
        <button
          className="btn-slider btn-slider-left active-link"
          onClick={handlePrevious}
        >
          <img
            src="/arrow-left-solid-full.svg"
            alt="slider-icon"
            className="slider-icon"
          />
        </button>
        <div className="box-projects relative">
          {arrProjects.map((project, i) => (
            <Project
              name={project.name}
              src={project.src}
              link={project.link}
              active={currentProject === i ? true : false}
              key={project.link}
            />
          ))}
        </div>
        <button
          className="btn-slider btn-slider-right active-link"
          onClick={handleNext}
        >
          <img
            src="/arrow-right-solid-full.svg"
            alt="slider-icon"
            className="slider-icon"
          />
        </button>
      </div>
    </div>
  );
}

function App() {
  const [currentScreen, setCurrent] = useState("about");

  return (
    <div className="w-full h-full">
      <Header currentScreen={currentScreen} setCurrent={setCurrent} />
      <main className="w-full h-[700px] relative">
        <About currentScreen={currentScreen} />
        <Projects currentScreen={currentScreen} />
        <div id="skills" className="box"></div>
        <div id="resume" className="box"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
