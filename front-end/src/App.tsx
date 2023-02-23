import React, { useContext, useRef } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";

import Footer from "./components/Footer/Footer";
import "./sassStyles/_main.scss";
import styles from "./App.module.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const portfolio = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  return (
    <div className={`${theme} ${styles.app}`}>
      <CustomNavbar
        refs={[home, about, skills, experience, portfolio, contact]}
      />
      <div ref={home}>
        <Home />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={portfolio}>
        <Portfolio />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
