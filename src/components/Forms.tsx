import React from "react";

import Inputs from "./Inputs";
import Buttons from "./Buttons";
import VisuallyHidden from "./VisuallyHidden";
import { SearchIcon } from "../icons/Icons.component";

const Forms = () => {
  const id = React.useId();
  const inputID = `input-${id}`;

  return (
    <form className="form">
      <label htmlFor={inputID} className="form__label">
        <SearchIcon />
        <VisuallyHidden>Search Icons</VisuallyHidden>
      </label>
      <Inputs id={inputID} type="search" className="form--input" />
      <Buttons type="submit" className="form--btn">
        Search
      </Buttons>
    </form>
  );
};

export default Forms;
