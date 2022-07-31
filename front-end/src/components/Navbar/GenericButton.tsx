import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./GenericButton.module.scss";

type PrivateProps = {
  text: string;
  active?: boolean;
};

const GenericButton = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`mx-2 ${styles.button} ${styles[theme]}`}>
      {props.text}
    </button>
  );
};

export default GenericButton;
