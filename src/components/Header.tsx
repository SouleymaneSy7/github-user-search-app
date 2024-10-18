import React from "react";
import Buttons from "./Buttons";
import { MoonIcon, SunIcon } from "../icons/Icons.component";
import { useThemeContext } from "../contexts/ThemeContext";
import VisuallyHidden from "./VisuallyHidden";

const Header: React.FC = () => {
  const { theme, handleThemeSwitcher } = useThemeContext();

  return (
    <header className="header | container">
      <a href="#" className="header__logo">
        Developper's <span>Finder</span>
      </a>
      <Buttons
        type="button"
        className="header--btn"
        onClick={handleThemeSwitcher}
      >
        {theme === "dark" ? (
          <React.Fragment>
            Light
            <span className="header--btn__icon">
              <SunIcon />
            </span>
            <VisuallyHidden>Toggle the theme to dark.</VisuallyHidden>
          </React.Fragment>
        ) : (
          <React.Fragment>
            Dark
            <span className="header--btn__icon">
              <MoonIcon />
            </span>
            <VisuallyHidden>Toggle the theme to light.</VisuallyHidden>
          </React.Fragment>
        )}
      </Buttons>
    </header>
  );
};

export default Header;
