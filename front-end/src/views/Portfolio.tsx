import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../utils/WindowDimensions";
import { ThemeContext } from "../context/ThemeContext";
import CustomTitle from "../components/Generics/CustomTitle";
import SVGImportsPortfolio from "../components/Portfolio/SVGImportsPortfolio";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import GenericSectionsButton from "../components/Generics/GenericSectionsButton";
import styles from "./Portfolio.module.scss";

const Experience = () => {
  const [projectsExpanded, setProjectsExpanded] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<String>("viewMore");

  const expandClickHandler = () => {
    if (!projectsExpanded) {
      setButtonText("viewLess");
    } else {
      setButtonText("viewMore");
    }
    setProjectsExpanded(!projectsExpanded);
  };

  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);
  const otherProjects = SVGImportsPortfolio.slice(3).map(
    (el: any, index: number) => (
      <div className={styles.cards}>
        <PortfolioCard
          title={t(`projectTitle${index + 3}`)}
          Icon={el.icon}
          stack={t(`projectStack${index + 3}`)}
          link={el.link}
        />
      </div>
    )
  );

  return (
    <div className={`${styles[theme]} ${styles.main}`}>
      <div className={styles.title}>
        <CustomTitle title={t("portfolioTitle")} />
      </div>
      <div className={styles.cardsWrapper}>
        {SVGImportsPortfolio.slice(0, 3).map((el: any, index: number) => (
          <div className={styles.cards}>
            <PortfolioCard
              title={t(`projectTitle${index}`)}
              Icon={el.icon}
              stack={t(`projectStack${index}`)}
              link={el.link}
            />
          </div>
        ))}
      </div>
      <div className={styles.cardsWrapper}>
        {projectsExpanded ? otherProjects : null}
      </div>
      <div className={styles.button} onClick={expandClickHandler}>
        <GenericSectionsButton text={t(`${buttonText}`)} />
      </div>
    </div>
  );
};

export default Experience;
