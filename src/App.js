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

function App() {
  return (
    <div className="w-full h-full">
      <Header current="resume" />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
