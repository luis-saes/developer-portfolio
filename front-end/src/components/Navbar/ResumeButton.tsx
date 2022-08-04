import React, { useContext } from "react";
import i18next from "i18next";
import Cookies from "js-cookie";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ResumeButton.module.scss";

type PrivateProps = {
  text: string;
  expanded: boolean;
};

const ResumeButton = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const resumePtBR =
    "https://drive.google.com/file/d/1trCyrvKZ-DIh9ih3ySyFdSjoiUAcOueC/";
  const resumeEn =
    "https://drive.google.com/file/d/1STjTN0J82zx0PrPDYQKBOAq8v6e0E7pK/";

  return (
    <a
      href={currentLanguageCode === "en" ? resumeEn : resumePtBR}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button
        className={`${styles[theme]} ${styles.button} ${
          props.expanded ? "" : styles.collapsed
        }`}
      >
        {props.text}
      </button>
    </a>
  );
};

export default ResumeButton;
