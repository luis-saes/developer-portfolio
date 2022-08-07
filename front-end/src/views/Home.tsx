import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import WindowDimensions from "../utils/WindowDimensions";
import IndicatorScroll from "../components/Home/IndicatorScroll";
import Character from "../assets/images/3d-cropped.png";
import styles from "./Home.module.scss";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState<boolean>(false);

  const { height, width } = WindowDimensions();

  useEffect(() => {
    setExpanded(width > 1399);
  }, [height, width]);

  return (
    <div className={`${styles[theme]} ${styles.home}`}>
      <div className={styles.textAndImageWrapper}>
        <div className={styles.presentationWrapper}>
          <div className={styles.hello}>{t("hello")}</div>
          <div className={styles.name}>Luis Saes</div>
          <div className={styles.role}>{t("role")}</div>
        </div>
        {expanded ? (
          <img
            src={Character}
            alt="Luis Henrique 3D character"
            className={styles.image}
          />
        ) : null}
      </div>
      <div className={styles.indicatorWrapper}>
        <IndicatorScroll />
      </div>
    </div>
  );
};

export default Home;
