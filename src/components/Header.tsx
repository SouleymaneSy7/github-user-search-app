import React from "react";
import Buttons from "./Buttons";
import { MoonIcon, SunIcon } from "../icons/Icons.component";
import { useThemeContext } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const { theme, handleThemeSwitcher } = useThemeContext();

  return (
    <header>
      <a href="#" className="header__logo">
        DevFinder
      </a>
      <Buttons
        type="button"
        className="header--btn"
        onClick={handleThemeSwitcher}
      >
        {theme === "dark" ? (
          <h2 className="header--theme-switcher">
            Light{" "}
            <span className="header--btn__icon">
              <SunIcon />
            </span>
          </h2>
        ) : (
          <h2 className="header--theme-switcher">
            Dark{" "}
            <span className="header--btn__icon">
              <MoonIcon />
            </span>
          </h2>
        )}
      </Buttons>
    </header>
  );
};

export default Header;
