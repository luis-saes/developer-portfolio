import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./BackgroundTop.module.scss";

const BackgroundTop = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`${styles[theme]} ${styles.bg}`}></div>;
};

export default BackgroundTop;
