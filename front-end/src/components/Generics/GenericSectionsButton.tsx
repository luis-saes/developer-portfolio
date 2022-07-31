import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./GenericSectionsButton.module.scss";

type PrivateProps = {
  text?: String;
};

const GenericSectionsButton = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`${styles.button} ${styles[theme]}`}>Testando</button>
  );
};

export default GenericSectionsButton;
