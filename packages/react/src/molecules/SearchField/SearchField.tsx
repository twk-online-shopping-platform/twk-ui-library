import React from "react";
import TextField from "../../atoms/Field/TextField";
import Button from "../../atoms/Button/Button";
import { SearchFieldType } from "./Type";
import { ButtondRadius } from "../../atoms/Button/Type";
import { TextFieldRadius } from "../../atoms/Field/Type";
import { IconSize } from "../../atoms/Icon/Type";

const SearchField = ({
  buttonText,
  searchFieldPlaceHolder,
}: SearchFieldType) => {
  const searchClassName = `srch`;
  return (
    <div className={searchClassName}>
      <TextField
        placeholder={searchFieldPlaceHolder ? searchFieldPlaceHolder : "Search"}
        radius={TextFieldRadius.LEFT}
        leftIcon={{
          eventHanlder: () => {},
          iconCssValue: "fa-solid fa-magnifying-glass",
          iconSize: IconSize.X_SMALL,
        }}
      />
      <Button
        radius={ButtondRadius.RIGHT}
        label={buttonText ? buttonText : "Search"}
      />
    </div>
  );
};

export default SearchField;
