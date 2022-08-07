import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ExperienceCard.module.scss";

type PrivateProps = {
  title: string[];
  company: string[];
  links: string[];
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
        <div className={styles.role}>
          {props.title[props.currentActive]} -
          <a
            className={styles.company}
            href={props.links[props.currentActive]}
            target="_blank"
            rel="noreferrer"
          >
            {props.company[props.currentActive]}
          </a>
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
