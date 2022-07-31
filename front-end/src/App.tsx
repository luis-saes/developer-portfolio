import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import CustomTitle from "./components/Generics/CustomTitle";
import GenericSectionsButton from "./components/Generics/GenericSectionsButton";
import SkillProgress from "./components/Skills/SkillProgress";
import SVGs from "./components/Skills/SvgImports";
import ExperienceCard from "./components/Experience/ExperienceCard";
import "./sassStyles/_main.scss";

function App() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={theme}>
      <CustomNavbar />
      <CustomTitle />
      <GenericSectionsButton />
      {/* {SVGs.map(({ element, text, percentage }) => (
        <SkillProgress icon={element} text={text} percentage={percentage} />
      ))} */}
      <ExperienceCard
        title={t("role0")}
        company={t("company0")}
        startTime={t("startTime0")}
        endTime={t("endTime0")}
        topics={t("topics0", { returnObjects: true })}
      />
    </div>
  );
}

export default App;
