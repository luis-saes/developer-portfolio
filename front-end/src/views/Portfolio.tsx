import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import CustomTitle from "../components/Generics/CustomTitle";
import SVGImportsPortfolio, {
  CompaniesListInterface,
} from "../components/Portfolio/CompaniesList";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import GenericSectionsButton from "../components/Generics/GenericSectionsButton";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const [projectsExpanded, setProjectsExpanded] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("viewMore");

  const expandClickHandler = () => {
    if (!projectsExpanded) {
      setButtonText("viewLess");
    } else {
      setButtonText("viewMore");
    }
    setProjectsExpanded(!projectsExpanded);
  };

  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const otherProjects = SVGImportsPortfolio.slice(3).map(
    (el: CompaniesListInterface, index: number) => (
      <div className={styles.cards} key={el.link}>
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
        {SVGImportsPortfolio.slice(0, 3).map(
          (el: CompaniesListInterface, index: number) => (
            <div className={styles.cards} key={el.link}>
              <PortfolioCard
                title={t(`projectTitle${index}`)}
                Icon={el.icon}
                stack={t(`projectStack${index}`)}
                link={el.link}
              />
            </div>
          )
        )}
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

export default Portfolio;
