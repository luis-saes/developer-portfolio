import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SVGsCompanies from "../../components/Experience/SvgImports";
import HorizontalTabList from "./HorizontalTabList";
import ExperienceCard from "./ExperienceCard";
import VerticalTabList from "./VerticalTabList";
import styles from "./ExperienceWrapper.module.scss";

const ExperienceWrapper = () => {
  const { t } = useTranslation();
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
    <div className={styles.wrapper}>
      <HorizontalTabList
        companies={SVGsCompanies}
        changeCompany={companyChangeHandler}
        setCurrentActiveIndex={currentActiveChange}
        currentActiveIndex={currentActive}
      />
      <VerticalTabList
        companies={SVGsCompanies}
        changeCompany={companyChangeHandler}
        setCurrentActiveIndex={currentActiveChange}
        currentActiveIndex={currentActive}
      />
      <div style={{ marginLeft: "36px" }}>
        <ExperienceCard
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
  );
};

export default ExperienceWrapper;
