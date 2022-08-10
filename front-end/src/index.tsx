import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import "./fonts/questrial-regular.ttf";
import "./sassStyles/_global.scss";
import "./sassStyles/_main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "pt-BR"],
    detection: {
      order: [
        "cookie",
        "navigator",
        "htmlTag",
        "localStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    fallbackLng: "en",
    backend: {
      // loadPath:
      //   process.env.PUBLIC_URL + "/assets/locales/{{lng}}/translation.json", // used for localhost purposes
      loadPath: "./assets/locales/{{lng}}/translation.json", //used for deploy purposes
    },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading Website...</h2>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Suspense>
);
