import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../utils/WindowDimensions";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setExpanded(width > 1399);
  }, [height, width]);

  return (
    <>
      <FooterMobile />
    </>
  );
};

export default Footer;
