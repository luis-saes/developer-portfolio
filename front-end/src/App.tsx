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
      {/* <CustomTitle />
      <GenericSectionsButton text="teste" />
      {SVGs.map(({ element, text, percentage }) => (
        <SkillProgress icon={element} text={text} percentage={percentage} />
      ))}
      <ExperienceWrapper />
      <PortfolioCard
        title={t("projectTitle0")}
        Icon={SVGImportsPortfolio[0]}
        stack={t("projectStack0")}
        link="http://www.google.com"
      />
      <IndicatorScroll />*/}
      <Footer />
    </div>
  );
}

export default App;
