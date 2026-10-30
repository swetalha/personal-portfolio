export default function Resume({ currentScreen }) {
  return (
    <div
      id="resume"
      className={`box gap-6 ${currentScreen === "resume" ? `active-box` : ``}`}
    >
      <h1>My Resume</h1>
      <img
        src="/Resume Image.png"
        alt="img-resume"
        className="w-[350px] rounded-xl"
      />
      <a
        href="/Talha's Resume.pdf"
        download="Talha's Resume.pdf"
        className="active-link font-[500]"
      >
        Download Resume
      </a>
    </div>
  );
}
