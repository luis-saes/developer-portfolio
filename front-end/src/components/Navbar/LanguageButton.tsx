import React, { ChangeEvent, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";
import styles from "./LanguageButton.module.scss";

interface Languages {
  code: string;
  name: string;
}

const LanguageButton = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const languages: Languages[] = [
    {
      code: "en",
      name: t("english"),
    },
    {
      code: "pt-BR",
      name: t("portuguese"),
    },
  ];

  const currentLanguageCode = Cookies.get("i18next") || "en";

  const filterLanguages = (el: Languages) => {
    return el.code === currentLanguageCode;
  };

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(event.target.value);
  };

  const mDefaultValue = languages.filter(filterLanguages);

  return (
    <select
      name="languages"
      id="languages"
      className={`${styles[theme]} ${styles.select}`}
      defaultValue={mDefaultValue[0].code}
      onChange={changeLanguage}
    >
      {languages.map(({ code, name }) => {
        return (
          <option
            key={code}
            disabled={code === currentLanguageCode}
            value={code}
          >
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageButton;
