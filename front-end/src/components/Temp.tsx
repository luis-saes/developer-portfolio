import React from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import i18next from "i18next";
import Cookies from "js-cookie";

const Temp = () => {
  const { t } = useTranslation();

  const languages = [
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

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {t("language")}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map(({ code, name }) => (
          <DropdownItem
            key={code}
            href={`#/action-${code}`}
            onClick={() => i18next.changeLanguage(code)}
            disabled={code === currentLanguageCode}
          >
            {name}
          </DropdownItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Temp;
