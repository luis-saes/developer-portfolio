import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import "./index.css";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next",
      },
    },
    ptbr: {
      translation: {
        "Welcome to React": "Seja bem-vindo ao React e react-i18next",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
