export default function About({ currentScreen }) {
  return (
    <div
      id="about"
      className={`box flex-row ${currentScreen === "about" ? `active-box` : ``} `}
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
