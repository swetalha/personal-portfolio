const arrLanguages = ["HTML", "CSS", "JavaScript"];

const arrFrameworkLibraries = ["React JS", "Tailwind CSS"];

const arrOtherSkills = ["Claude Code", "Git and GitHub", "Vercel"];

function Skill({ skill }) {
  return (
    <li className="active-link rounded-lg px-4 py-2 text-[18px] font-[500] my-2">
      {skill}
    </li>
  );
}

export default function Skills({ currentScreen }) {
  return (
    <div
      id="skills"
      className={`box gap-6 ${currentScreen === "skills" ? `active-box` : ``}`}
    >
      <h1>Current Skills</h1>
      <div className="box-skills flex gap-4">
        <ul className="box-languages">
          {arrLanguages.map((language) => (
            <Skill skill={language} />
          ))}
        </ul>
        <ul className="box-frameworks">
          {arrFrameworkLibraries.map((skill) => (
            <Skill skill={skill} />
          ))}
        </ul>
        <ul>
          {arrOtherSkills.map((skill) => (
            <Skill skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}
