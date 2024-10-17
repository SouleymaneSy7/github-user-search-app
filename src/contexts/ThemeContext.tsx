/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { FC, ReactNode, useState, useContext } from "react";

type ThemeTypes = "light" | "dark";

interface ThemeContextType {
  theme: ThemeTypes;
  handleThemeSwitcher: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeTypes>("light");

  const handleThemeSwitcher = React.useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("body")?.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    const isDarkTheme = window.matchMedia(
      "(prefers-color-sheme: dark)"
    ).matches;
    if (isDarkTheme) {
      setTheme(newTheme);
      document.querySelector("body")?.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    } else {
      setTheme(newTheme);
      document.querySelector("body")?.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
  }, [theme]);

  React.useEffect(() => {
    handleThemeSwitcher();
  }, []);

  const contextValue: ThemeContextType = { theme, handleThemeSwitcher };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
