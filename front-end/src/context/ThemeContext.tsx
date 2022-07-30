import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>({ theme: "light", undefined });

export const ThemeProvider: React.FC<{ children: any }> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
