export default function Header({ currentScreen, setCurrent }) {
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
