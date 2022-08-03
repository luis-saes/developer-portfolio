import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./BackgroundBottom.module.scss";

const BackgroundBottom = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`${styles[theme]} ${styles.bg}`}></div>;
};

export default BackgroundBottom;
