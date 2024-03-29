import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTitle from "../components/Generics/CustomTitle";
import GenericSectionsButton from "../components/Generics/GenericSectionsButton";
import SkillProgress from "../components/Skills/SkillProgress";
import SkillsList, {
  SkillsListInterface,
} from "../components/Skills/SkillsList";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Skills.module.scss";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0);
  const categories = ["web", "tools", "other"];
  const sectionsButtons = ["Web", t("tools"), t("other")];

  const filterByCategory = (obj: SkillsListInterface) => {
    return obj.category === categories[currentActiveIndex];
  };

  const changeActiveHandler = (index: number) => {
    setCurrentActiveIndex(index);
  };

  return (
    <div className={`${styles[theme]} ${styles.main}`}>
      <CustomTitle title={t("mySkills")} />
      <div className={styles.buttonWrapper}>
        {sectionsButtons.map((el, index) => (
          <div className={styles.button} key={el}>
            <GenericSectionsButton
              skills={true}
              click={changeActiveHandler}
              text={el}
              index={index}
              active={currentActiveIndex === index}
            />
          </div>
        ))}
      </div>
      <ul className={styles.skillCardWrapper}>
        {SkillsList.filter(filterByCategory).map((el) => (
          <li className={styles.skillCard} key={el.text}>
            <SkillProgress
              key={el.text}
              icon={el.element}
              text={el.text}
              percentage={el.percentage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
