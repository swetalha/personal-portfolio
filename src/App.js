import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [currentScreen, setCurrent] = useState("about");

  return (
    <div className="w-full h-full">
      <Header currentScreen={currentScreen} setCurrent={setCurrent} />
      <Main currentScreen={currentScreen} />
      <Footer />
    </div>
  );
}

export default App;
