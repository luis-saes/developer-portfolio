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
import WindowDimensions from "../../utils/WindowDimensions";
import { ReactComponent as LogoDark } from "../../assets/svg/navbar-dark.svg";
import { ReactComponent as LogoLight } from "../../assets/svg/navbar-light.svg";
import styles from "./CustomNavbar.module.scss";

type PrivateProps = {
  refs: any[];
};

const CustomNavbar = (props: PrivateProps) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState<any>(false);

  const { width } = WindowDimensions();

  const onClickLink = (index: number) => {
    setExpanded(false);
    window.scrollTo({
      top: props.refs[index].current?.offsetTop - 80,
      behavior: "smooth",
    });
  };

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
      expand="lg"
      fixed="top"
      className={`${styles[theme]} ${styles.main}`}
      expanded={expanded}
    >
      <Container className={styles.container}>
        <Navbar.Brand href="#home">
          {theme === "light" ? <LogoLight /> : <LogoDark />}
        </Navbar.Brand>
        <LanguageButton />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggle}
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className={styles.svg}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${width < 992 ? styles.navExpanded : styles.nav}`}
        >
          <Container>
            <Nav className={styles.nav}>
              {genericButtons.map(({ section, text }, index: number) => {
                return (
                  <Nav.Link
                    key={section}
                    onClick={() => onClickLink(index)}
                    className={styles.navLink}
                  >
                    <GenericButton text={text} />
                  </Nav.Link>
                );
              })}
              <Nav.Item onClick={() => setExpanded(false)}>
                <ResumeButton text={t("resume")} expanded={width > 991} />
              </Nav.Item>
              <Nav.Item
                className={`border-left pl-2 ml-auto ${
                  width > 991 ? null : styles.themeButtonCompressed
                }`}
              >
                <ThemeButton expanded={width > 991} />
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
