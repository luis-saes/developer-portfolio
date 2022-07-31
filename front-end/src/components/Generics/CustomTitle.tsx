import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./CustomTitle.module.scss";

const CustomTitle = () => {
  const { theme } = useContext(ThemeContext);

  return <h1 className={`${styles[theme]} ${styles.title}`}>CustomTitle</h1>;
};

export default CustomTitle;
