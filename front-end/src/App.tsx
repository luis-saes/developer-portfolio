import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import CustomTitle from "./components/Generics/CustomTitle";
import GenericSectionsButton from "./components/Generics/GenericSectionsButton";
import "./sassStyles/_main.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <CustomNavbar />
      <CustomTitle />
      <GenericSectionsButton />
    </div>
  );
}

export default App;
