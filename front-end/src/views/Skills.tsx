import React, { useContext, useState, useEffect } from "react";
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
  const [currentActiveSkills, setCurrentActiveSkills] =
    useState<SkillsListInterface[]>(SkillsList);
  const sectionsButtons = ["Web", t("tools"), t("other")];

  useEffect(() => {
    const categories = ["web", "tools", "other"];

    const filterByCategory = (obj: SkillsListInterface) => {
      return obj.category === categories[currentActiveIndex];
    };

    setCurrentActiveSkills(SkillsList.filter(filterByCategory));
  }, [currentActiveIndex]);

  const changeActiveHandler = (index: number) => {
    setCurrentActiveIndex(index);
  };

  return (
    <div className={`${styles[theme]} ${styles.main}`}>
      <CustomTitle title={t("mySkills")} />
      <div className={styles.buttonWrapper}>
        {sectionsButtons.map((el, index) => (
          <div className={styles.button} key={index}>
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
      <div className={styles.skillCardWrapper}>
        {currentActiveSkills.map((el, i, arr) => {
          if (i % 2 === 1) {
            return null;
          }
          if (!arr[i + 1] && i % 2 === 0) {
            return (
              <div className={styles.skillCard} key={el.text}>
                <SkillProgress
                  key={el.text}
                  icon={el.element}
                  text={el.text}
                  percentage={el.percentage}
                />
              </div>
            );
          } else {
            return (
              <div className={styles.skillCard} key={el.text}>
                <SkillProgress
                  key={el.text}
                  icon={el.element}
                  text={el.text}
                  percentage={el.percentage}
                />
                <SkillProgress
                  key={arr[i + 1].text}
                  icon={arr[i + 1].element}
                  text={arr[i + 1].text}
                  percentage={arr[i + 1].percentage}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
