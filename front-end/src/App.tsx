import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Temp from "./components/Temp";
import Navbar from "./components/Navbar/Navbar";
import "./sassStyles/_main.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      <Temp />
    </div>
  );
}

export default App;
