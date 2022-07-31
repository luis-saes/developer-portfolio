import React from "react";
import styles from "./SkillProgress.module.scss";

type PrivateProps = {
  Icon?: JSX.Element;
};

const SkillProgress = () => {
  return (
    <div className={styles.skillProgressWrapper}>
      <div className={styles.textWrapper}></div>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default SkillProgress;
