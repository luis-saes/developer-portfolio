import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SVGsCompanies from "../../components/Experience/SvgImports";
import ExperienceCard from "./ExperienceCard";
import VerticalTabList from "./VerticalTabList";
import styles from "./ExperienceWrapper.module.scss";

const ExperienceWrapper = () => {
  const { t } = useTranslation();
  const [changeCompany, setChangeCompany] = useState<number>(0);
  let titles: string[] = [];
  let companies: string[] = [];
  let startTimes: string[] = [];
  let endTimes: string[] = [];
  let topicsMatrix: string[][] = [];

  SVGsCompanies.forEach((_, index: number) => {
    titles = [...titles, t(`role${index}`)];
    companies = [...companies, t(`company${index}`)];
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

  return (
    <div className={styles.wrapper}>
      <VerticalTabList
        companies={SVGsCompanies}
        changeCompany={companyChangeHandler}
      />
      <div style={{ marginLeft: "36px" }}>
        <ExperienceCard
          title={titles}
          company={companies}
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
