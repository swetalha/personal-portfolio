import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";

export default function Main({ currentScreen }) {
  return (
    <main className="w-full h-[700px] relative">
      <About currentScreen={currentScreen} />
      <Projects currentScreen={currentScreen} />
      <Skills currentScreen={currentScreen} />
      <Resume currentScreen={currentScreen} />
    </main>
  );
}
