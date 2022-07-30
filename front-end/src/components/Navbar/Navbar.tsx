import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext";
import GenericButton from "./GenericButton";

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
      <GenericButton text={t("home")} />
    </div>
  );
};

export default Navbar;
