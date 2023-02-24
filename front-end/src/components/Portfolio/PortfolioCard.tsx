import React, { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext";
import GenericSectionsButton from "../Generics/GenericSectionsButton";
import styles from "./PortfolioCard.module.scss";

type PrivateProps = {
  title: string;
  Icon: FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  stack: string;
  link: string;
};

const PortfolioCard = (props: PrivateProps) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles[theme]} ${styles.wrapper}`}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.bar}></div>
      </div>
      <div className={styles.iconWrapper}>
        <props.Icon />
      </div>
      <div className={styles.stack}>{props.stack}</div>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <GenericSectionsButton text={t("viewProject")} />
      </a>
    </div>
  );
};

export default PortfolioCard;
