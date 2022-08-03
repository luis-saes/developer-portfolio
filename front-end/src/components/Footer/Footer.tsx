import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../utils/WindowDimensions";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setExpanded(width > 1399);
  }, [height, width]);

  return <>{expanded ? <FooterDesktop /> : <FooterMobile />}</>;
};

export default Footer;
