import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import BackgroundTop from "../components/About/BackgroundTop";
import BackgroundBottom from "../components/About/BackgroundBottom";
import CustomTitle from "../components/Generics/CustomTitle";
import PersonalImage from "../components/About/PersonalImage";
import styles from "./About.module.scss";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles[theme]} ${styles.main}`}>
      <BackgroundTop />
      <div className={styles.wrapper}>
        <CustomTitle title={t("whoIAm")} />
        <div className={styles.textAndImageWrapper}>
          <div className={styles.text}>{t("whoIAmText")}</div>
          <PersonalImage />
        </div>
      </div>
      <BackgroundBottom />
    </div>
  );
};

export default About;
