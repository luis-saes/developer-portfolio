import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Picture from "../../assets/images/profile-picture.jpg";
import styles from "./PersonalImage.module.scss";

const PersonalImage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles[theme]} ${styles.wrapper}`}>
      <img className={styles.image} src={Picture} alt="Luis Henrique" />
      <div className={styles.frame} />
    </div>
  );
};

export default PersonalImage;
