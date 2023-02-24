import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
  useMemo,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState = localStorage.getItem("theme");

  let rightTheme;
  if (initialState) {
    rightTheme = initialState;
  } else {
    rightTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  localStorage.setItem("theme", rightTheme);

  const [theme, setTheme] = useState(rightTheme);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
