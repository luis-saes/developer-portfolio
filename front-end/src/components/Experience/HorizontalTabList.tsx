import React, { useContext, createElement } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./HorizontalTabList.module.scss";

type PrivateProps = {
  companies: any;
  changeCompany: (index: number) => void;
  setCurrentActiveIndex: (index: number) => void;
  currentActiveIndex: number;
};

const HorizontalTabList = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);

  const changeIndexAndCallFather = (index: number) => {
    props.setCurrentActiveIndex(index);
    props.changeCompany(index);
  };

  return (
    <div className={`${styles[theme]} ${styles.horizontalTabList}`}>
      {props.companies.map(
        (
          {
            element,
          }: {
            element: any;
          },
          index: number
        ) => {
          return (
            <div
              key={index}
              className={`${styles.wrapper} ${
                props.currentActiveIndex === index
                  ? styles.active
                  : styles.inactive
              }`}
              onClick={() => changeIndexAndCallFather(index)}
            >
              <div className={styles.svg}>{createElement(element)}</div>
              <div className={styles.bar} />
            </div>
          );
        }
      )}
    </div>
  );
};

export default HorizontalTabList;
