import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import useWindowDimensions from "../utils/WindowDimensions";
import BackgroundTop from "../components/About/BackgroundTop";
import BackgroundBottom from "../components/About/BackgroundBottom";
import CustomTitle from "../components/Generics/CustomTitle";
import PersonalImage from "../components/About/PersonalImage";
import styles from "./About.module.scss";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState<boolean>(false);
  const [navbarHeight, setNavbarHeight] = useState<number>(86);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setExpanded(width > 1399);
    setNavbarHeight(width > 1399 ? 86 : 70);
  }, [height, width]);

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
