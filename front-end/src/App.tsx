import React, { useState } from "react";
import Temp from "./components/Temp";
import Navbar from "./components/Navbar/Navbar";
import "./sassStyles/_main.scss";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log("Changed");
  };

  return (
    <div className={theme}>
      <Navbar switchTheme={switchTheme} />
      <Temp />
    </div>
  );
}

export default App;
