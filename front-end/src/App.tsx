import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Temp from "./components/Temp";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-start">{t("hello")}</div>
      <Temp />
    </div>
  );
}

export default App;
