import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./GenericSectionsButton.module.scss";

type PrivateProps = {
  text: String;
  index?: number;
  active?: boolean;
  click?: (index: number) => void;
  skills?: boolean;
};

const GenericSectionsButton = (props: PrivateProps) => {
  const { theme } = useContext(ThemeContext);
  let mIndex = props.index || 0;

  return (
    <button
      className={`${styles.button} ${styles[theme]} ${
        props.active ? styles.active : ""
      } ${props.skills ? styles.skills : null}`}
      onClick={() => props.click?.(mIndex)}
    >
      {props.text}
    </button>
  );
};

export default GenericSectionsButton;
