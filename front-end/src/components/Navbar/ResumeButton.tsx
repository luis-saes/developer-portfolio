import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ResumeButton.module.scss";

type PrivateProps = {
  text: string;
  expanded: boolean;
};

const ResumeButton = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`${styles[theme]} ${styles.button} ${
        props.expanded ? "" : styles.collapsed
      }`}
    >
      {props.text}
    </button>
  );
};

export default ResumeButton;
