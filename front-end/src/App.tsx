import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import "./sassStyles/_main.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <CustomNavbar />
    </div>
  );
}

export default App;
