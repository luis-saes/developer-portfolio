import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className={`${theme} ${styles.app}`}>
      <CustomNavbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
