import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import CustomTitle from "./components/Generics/CustomTitle";
import GenericSectionsButton from "./components/Generics/GenericSectionsButton";
import SkillProgress from "./components/Skills/SkillProgress";
import PortfolioCard from "./components/Portfolio/PortfolioCard";
import ExperienceWrapper from "./components/Experience/ExperienceWrapper";
import SVGImportsPortfolio from "./components/Portfolio/SVGImportsPortfolio";
import IndicatorScroll from "./components/Home/IndicatorScroll";
import "./sassStyles/_main.scss";

function App() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={theme}>
      <CustomNavbar />
      <CustomTitle />
      <GenericSectionsButton text="teste" />
      {/* {SVGs.map(({ element, text, percentage }) => (
        <SkillProgress icon={element} text={text} percentage={percentage} />
      ))} */}
      <ExperienceWrapper />
      <PortfolioCard
        title={t("projectTitle0")}
        Icon={SVGImportsPortfolio[0]}
        stack={t("projectStack0")}
        link="http://www.google.com"
      />
      <IndicatorScroll />
    </div>
  );
}

export default App;
