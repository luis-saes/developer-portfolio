import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ExperienceCard.module.scss";

type PrivateProps = {
  title: string[];
  company: string[];
  startTime: string[];
  endTime: string[];
  topics: string[][];
  currentActive: number;
};

const ExperienceCard = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`py-3 px-5 ${styles[theme]} ${styles.experienceCardWrapper}`}
    >
      <div className={styles.roleAndCompany}>
        <div className={styles.role}>{`${
          props.title[props.currentActive]
        } - `}</div>
        <div className={styles.company}>
          {props.company[props.currentActive]}
        </div>
      </div>
      <div className={styles.timeInterval}>{`${
        props.startTime[props.currentActive]
      } - ${props.endTime[props.currentActive]}`}</div>
      <ul>
        {props.topics[props.currentActive].map((val, index) => (
          <li className={styles.topics} key={`${props.currentActive}${index}`}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
