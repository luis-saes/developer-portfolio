import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log("Changed");
  };

  return (
    <div>
      <Button onClick={switchTheme}>Switch Theme!</Button>
    </div>
  );
};

export default Navbar;
