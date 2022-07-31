import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import CustomTitle from "./components/Generics/CustomTitle";
import GenericSectionsButton from "./components/Generics/GenericSectionsButton";
import SkillProgress from "./components/Skills/SkillProgress";
import SVGs from "./components/Skills/SvgImports";
import "./sassStyles/_main.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <CustomNavbar />
      <CustomTitle />
      <GenericSectionsButton />
      {SVGs.map(({ element, text, percentage }) => (
        <SkillProgress icon={element} text={text} percentage={percentage} />
      ))}
    </div>
  );
}

export default App;
