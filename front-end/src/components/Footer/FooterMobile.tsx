import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as Linkedin } from "../../assets/svg/socialMedia/linkedin.svg";
import { ReactComponent as Github } from "../../assets/svg/socialMedia/github.svg";
import { ReactComponent as Medium } from "../../assets/svg/socialMedia/medium.svg";
import styles from "./FooterMobile.module.scss";

const FooterMobile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles[theme]} ${styles.wrapper}`}>
      <div className={styles.iconsWrapper}>
        <a
          href="https://www.linkedin.com/in/luis-saes/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className={styles.icon} />
        </a>
        <a href="https://github.com/luis-saes" target="_blank" rel="noreferrer">
          <Github className={styles.icon} style={{ marginLeft: "10px" }} />
        </a>
        <a href="https://medium.com/@luisaes" target="_blank" rel="noreferrer">
          <Medium className={styles.icon} style={{ marginLeft: "7px" }} />
        </a>
      </div>
      <div className={styles.text}>© 2022 Luis Henrique Saes Scandelai</div>
    </div>
  );
};

export default FooterMobile;
