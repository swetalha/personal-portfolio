import { useState } from "react";

function Header({ current }) {
  return (
    <header className="w-full h-24 flex justify-center items-center">
      <ul className="flex gap-14">
        <li
          className={`header-links ${current === "about" ? "active-link" : ""}`}
          onClick={(event) => console.log(event)}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={`header-links ${current === "projects" ? "active-link" : ""}`}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={`header-links ${current === "skills" ? "active-link" : ""}`}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className={`header-links ${current === "resume" ? "active-link" : ""}`}
        >
          <a href="#resume">Resume</a>
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

function Projects() {}

function App() {
  const [current, setCurrent] = useState("about");

  return (
    <div className="w-full h-full">
      <Header current={current} />
      <main>
        <About />
        <div id="projects" className="box active-box">
          <h2 className="animate-float">Here's some stuff I built.</h2>
          <div className="box-projects"></div>
        </div>
        <div id="skills" className="box"></div>
        <div id="resume" className="box"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
