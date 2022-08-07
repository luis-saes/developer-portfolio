import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "./SkillProgress.module.scss";

type PrivateProps = {
  icon: any;
  text: string;
  percentage: number;
};

const SkillProgress = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);
  const Icon = props.icon;

  return (
    <div className={`${styles[theme]} ${styles.skillProgressWrapper}`}>
      <div className={styles.textWrapper}>
        <Icon className={styles.svg} />
        <h2 className={styles.technology}>{props.text}</h2>
      </div>
      <div className={styles.progressBar}>
        <ProgressBar
          striped
          className={styles.bar}
          now={props.percentage}
          label={`${props.percentage}%`}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
