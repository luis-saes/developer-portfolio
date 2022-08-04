import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import CustomTitle from "../components/Generics/CustomTitle";
import GenericSectionsButton from "../components/Generics/GenericSectionsButton";
import styles from "./Contact.module.scss";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`${styles[theme]} ${styles.main}`}>
      <CustomTitle title={t("sendMessageTitle")} />
      <div className={styles.contactMessage}>{t("sendMessageText")}</div>
      <a href="mailto:saeslhs@gmail.com" style={{ textDecoration: "none" }}>
        <GenericSectionsButton text={t("getInTouch")} />
      </a>
    </div>
  );
};

export default Contact;
