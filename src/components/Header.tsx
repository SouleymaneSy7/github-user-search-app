import React from "react";
import Buttons from "./Buttons";
import { MoonIcon, SunIcon } from "../icons/Icons.component";

const Header = () => {
  const [themeState, setThemeState] = React.useState(false);

  const handleThemeSwitcher = () => {
    setThemeState(!themeState);
  };

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
        {themeState === true ? (
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
