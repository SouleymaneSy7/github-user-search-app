import React, { FC } from "react";

import Inputs from "./Inputs";
import Buttons from "./Buttons";
import VisuallyHidden from "./VisuallyHidden";
import { SearchIcon } from "../icons/Icons.component";
import { useUserContext } from "../contexts/UserContext";

const Forms: FC = () => {
  const id: string = React.useId();
  const inputID: string = `input-${id}`;

  const { searchTerm, handleSearch, handleGetUser } = useUserContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleGetUser();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor={inputID} className="form__label">
        <SearchIcon />
        <VisuallyHidden>Search Icons</VisuallyHidden>
      </label>
      <Inputs
        id={inputID}
        type="search"
        className="form--input"
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          handleSearch(event);
        }}
      />
      <Buttons type="submit" className="form--btn">
        Search
      </Buttons>
    </form>
  );
};

export default Forms;
