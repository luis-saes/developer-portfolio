import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../utils/WindowDimensions";
import { ThemeContext } from "../context/ThemeContext";
import CustomTitle from "../components/Generics/CustomTitle";
import SVGsCompanies from "../components/Experience/SvgImports";
import HorizontalTabList from "../components/Experience/HorizontalTabList";
import VerticalTabList from "../components/Experience/VerticalTabList";
import ExperienceCard from "../components/Experience/ExperienceCard";
import styles from "./Experience.module.scss";

const Experience = () => {
  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();

  const [changeCompany, setChangeCompany] = useState<number>(0);
  const [currentActive, setCurrentActive] = useState<number>(0);

  let titles: string[] = [];
  let companies: string[] = [];
  let links: string[] = [];
  let startTimes: string[] = [];
  let endTimes: string[] = [];
  let topicsMatrix: string[][] = [];

  SVGsCompanies.forEach((el, index: number) => {
    titles = [...titles, t(`role${index}`)];
    companies = [...companies, t(`company${index}`)];
    links = [...links, el.link];
    startTimes = [...startTimes, t(`startTime${index}`)];
    endTimes = [...endTimes, t(`endTime${index}`)];
    topicsMatrix = [
      ...topicsMatrix,
      t(`topics${index}`, { returnObjects: true }),
    ];
  });

  const companyChangeHandler = (index: number) => {
    setChangeCompany(index);
  };

  const currentActiveChange = (index: number) => {
    setCurrentActive(index);
  };

  return (
    <div className={styles.main}>
      <CustomTitle title={t("experience")} />
      <div className={styles.wrapper}>
        {width > 950 ? (
          <VerticalTabList
            companies={SVGsCompanies}
            changeCompany={companyChangeHandler}
            setCurrentActiveIndex={currentActiveChange}
            currentActiveIndex={currentActive}
          />
        ) : (
          <HorizontalTabList
            companies={SVGsCompanies}
            changeCompany={companyChangeHandler}
            setCurrentActiveIndex={currentActiveChange}
            currentActiveIndex={currentActive}
          />
        )}
        <div className={styles.cardWrapper}>
          <ExperienceCard
            key={titles[currentActive]}
            title={titles}
            company={companies}
            links={links}
            startTime={startTimes}
            endTime={endTimes}
            topics={topicsMatrix}
            currentActive={changeCompany}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
