import { useState } from "react";

const arrProjects = [
  {
    name: "Banktist- A Banking App",
    src: "/banktist.png",
    link: "https://banktist-banking.vercel.app/",
    about:
      "Banktist is an online banking app which allows users to easily create accounts and use those accounts to send / recieve money. Of course this is all static and temporary. The only purpose was to master Vanilla JS.",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Eat-n-Split - Splitting Bills",
    src: "/eat-n-split.png",
    link: "https://eat-n-split-mu-smoky.vercel.app/",
    about:
      "Eat-n-Split is a website that works basically like a calculator. All it does is help you split your expenses with your friends and keep track of them all. The purpose of this was to practice fundamental React JS",
    techStack: ["React JS", "Tailwind CSS"],
  },
  {
    name: "Dice Roll Game",
    src: "/dice-roll-game.png",
    link: "https://dice-roll-game-sage.vercel.app/",
    about:
      "Dice Roll Game is basically self-explanatory. There's two players, each get their turn rolling the dice, the first to get to a hundred, wins. The purpose was to practice Vanilla JS",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

function Skill({ skill }) {
  return <li className="text-[18px] font-[500]">{skill}</li>;
}

function Project({ name, src, link, about, techStack, active }) {
  const [explore, setExplore] = useState(false);
  return (
    <div className={`box-project ${active ? `active-box` : `inactive-box`}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <h2>{name}</h2>
      </a>
      {explore ? (
        <div className="w-[600px] h-[350px] rounded-xl bg-black/20 p-4">
          <p className="text-[18px] font-[500] mb-4">{about}</p>
          <h3 className="text-[22px] mb-2">Tech Stack</h3>
          <ul>
            {techStack.map((skill) => (
              <Skill skill={skill} key={crypto.randomUUID()} />
            ))}
          </ul>
        </div>
      ) : (
        <img
          src={src}
          alt="img-project"
          className="w-[600px] h-[350px] rounded-xl"
        />
      )}
      <button
        className="active-link"
        onClick={() => setExplore((current) => !current)}
      >
        {explore ? "Close" : "Explore"}
      </button>
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
              about={project.about}
              techStack={project.techStack}
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
