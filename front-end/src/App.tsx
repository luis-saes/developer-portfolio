import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import CustomTitle from "./components/Generics/CustomTitle";
import GenericSectionsButton from "./components/Generics/GenericSectionsButton";
import SkillProgress from "./components/Skills/SkillProgress";
import ExperienceWrapper from "./components/Experience/ExperienceWrapper";
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
      <ExperienceWrapper />
    </div>
  );
}

export default App;
