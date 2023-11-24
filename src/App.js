import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Menu from "./Components/Menu";

import "./App.css";

function App() {
  return (
    <>
      <Menu />
      <About />
      <Skills />
      <Projects />
      {/*   <Contact /> */}
    </>
  );
}

export default App;
