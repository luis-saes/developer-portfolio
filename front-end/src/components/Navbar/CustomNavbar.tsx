import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GenericButton from "./GenericButton";
import LanguageButton from "./LanguageButton";
import ResumeButton from "./ResumeButton";
import ThemeButton from "./ThemeButton";
import useWindowDimensions from "../../utils/WindowDimensions";
import { ReactComponent as LogoDark } from "../../assets/svg/logo-dark.svg";
import styles from "./CustomNavbar.module.scss";

const CustomNavbar = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  const { height, width } = useWindowDimensions();

  const genericButtons = [
    {
      section: "home",
      text: t("home"),
    },
    {
      section: "about",
      text: t("about"),
    },
    {
      section: "skills",
      text: t("skills"),
    },
    {
      section: "work",
      text: t("work"),
    },
    {
      section: "portfolio",
      text: t("portfolio"),
    },
    {
      section: "contact",
      text: t("contact"),
    },
  ];

  return (
    <Navbar
      expand="xxl"
      fixed="top"
      onToggle={(boolean) => setExpanded(boolean)}
      className={`${styles[theme]} ${styles.main}`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <LogoDark />
        </Navbar.Brand>
        <LanguageButton />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className={styles.svg}
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${width < 1400 ? styles.navExpanded : styles.nav}`}
        >
          <Nav className={styles.nav}>
            {genericButtons.map(({ section, text }) => {
              return (
                <Nav.Link key={section}>
                  <GenericButton text={text} />
                </Nav.Link>
              );
            })}
            <Nav.Item>
              <ResumeButton text={t("resume")} expanded={width > 1399} />
            </Nav.Item>
            <Nav.Item className="border-left pl-2 ml-auto">
              <ThemeButton expanded={width > 1399} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
