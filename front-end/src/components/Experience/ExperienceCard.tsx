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

  console.log(props.topics, props.currentActive);

  const topics0 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu neque dignissim, mattis libero et, facilisis ipsum. In bibendum, magna ut facilisis iaculis, ipsum erat ullamcorper nibh, sed dapibus sem augue molestie neque.",
    "Aenean vitae est tristique, finibus nunc sed, semper libero. Cras eu feugiat tortor. Nam ac ipsum at turpis pretium tristique.",
    "Praesent pulvinar congue aliquam. Praesent non arcu tincidunt, feugiat risus vel, vehicula massa. Integer neque enim, tempor finibus erat quis, varius placerat neque. Integer sit amet ligula erat. Proin commodo non nisl nec ullamcorper.",
  ];

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
        {topics0.map((val, index) => (
          <li className={styles.topics} key={`${props.currentActive}${index}`}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
