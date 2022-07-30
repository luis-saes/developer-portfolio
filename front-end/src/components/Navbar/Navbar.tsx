import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext";
import GenericButton from "./GenericButton";
import LanguageButton from "./LanguageButton";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log("Changed");
  };

  const { t } = useTranslation();

  return (
    <div>
      <Button onClick={switchTheme}>Switch Theme!</Button>
      <GenericButton text={t("about")} />
      <LanguageButton />
    </div>
  );
};

export default Navbar;
