import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./IndicatorScroll.module.scss";

const IndicatorScroll = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles[theme]} ${styles.wrapper}`}>
      <div className={styles.text}>SCROLL</div>
      <div className={styles.line} />
    </div>
  );
};

export default IndicatorScroll;
