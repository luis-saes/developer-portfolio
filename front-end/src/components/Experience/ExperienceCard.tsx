import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ExperienceCard.module.scss";

type PrivateProps = {
  title: string;
  company: string;
  startTime: string;
  endTime: string;
  topics: string[];
};

const ExperienceCard = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);
  const mTopics = props.topics;

  return (
    <div
      className={`py-3 px-5 ${styles[theme]} ${styles.experienceCardWrapper}`}
    >
      <div className={styles.roleAndCompany}>
        <div className={styles.role}>{`${props.title} - `}</div>
        <div className={styles.company}> {props.company}</div>
      </div>
      <div
        className={styles.timeInterval}
      >{`${props.startTime} - ${props.endTime}`}</div>
      <ul>
        {mTopics.map((val) => (
          <li className={styles.topics} key={val}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
