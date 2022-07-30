import React from "react";
import { useTranslation } from "react-i18next";
import GenericButton from "./GenericButton";
import LanguageButton from "./LanguageButton";
import ResumeButton from "./ResumeButton";
import ThemeButton from "./ThemeButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <GenericButton text={t("about")} />
      <LanguageButton />
      <ResumeButton text={t("resume")} />
      <ThemeButton />
    </div>
  );
};

export default Navbar;
