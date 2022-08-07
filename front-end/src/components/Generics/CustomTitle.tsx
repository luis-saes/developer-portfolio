import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./CustomTitle.module.scss";

type PrivateProps = {
  title: string;
};

const CustomTitle = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h1 className={`${styles[theme]} ${styles.title} mt-3`}>{props.title}</h1>
  );
};

export default CustomTitle;
