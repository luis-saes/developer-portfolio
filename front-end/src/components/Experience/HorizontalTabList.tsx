import React, {
  useContext,
  createElement,
  FunctionComponent,
  SVGProps,
} from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CompaniesListInterface } from "./CompaniesList";
import styles from "./HorizontalTabList.module.scss";

type PrivateProps = {
  companies: CompaniesListInterface[];
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
            element: FunctionComponent<
              SVGProps<SVGSVGElement> & {
                title?: string | undefined;
              }
            >;
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
