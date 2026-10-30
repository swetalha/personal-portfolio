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
  {
    name: "Dice Roll Game",
    src: "/dice-roll-game.png",
    link: "https://dice-roll-game-sage.vercel.app/",
  },
];

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

export default function Projects({ currentScreen }) {
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
      className={`box gap-8 ${currentScreen === "projects" ? `active-box` : ``}`}
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
