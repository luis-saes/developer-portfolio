import React, { useContext, createElement } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./VerticalTabList.module.scss";

type PrivateProps = {
  companies: any;
  changeCompany: (index: number) => void;
  setCurrentActiveIndex: (index: number) => void;
  currentActiveIndex: number;
};

const VerticalTabList = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);

  const changeIndexAndCallFather = (index: number) => {
    props.setCurrentActiveIndex(index);
    props.changeCompany(index);
  };

  return (
    <div className={`${styles[theme]} ${styles.verticalTabList}`}>
      {props.companies.map(
        (
          {
            text,
            element,
          }: {
            text: string;
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
              <div className={styles.bar} />
              <div className={styles.svg}>{createElement(element)}</div>
              <div className={styles.text}>{text}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default VerticalTabList;
