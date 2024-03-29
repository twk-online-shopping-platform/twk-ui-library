import React from "react";
import TextField from "../../atoms/Field/Text/TextField";
import Button from "../../atoms/Button/Button";
import { InputButtonGroupType } from "./Type";
import { ButtondRadius } from "../../atoms/Button/Type";
import { TextFieldRadius } from "../../atoms/Field/Text/Type";
import { IconSize } from "../../atoms/Icon/Type";
import "@twk-ui-lib/scss/root/global.css";

const InputButtonGroup = ({
  buttonText,
  searchFieldPlaceHolder,
  buttonRadius,
  fieldRaddius,
}: InputButtonGroupType) => {
  const searchClassName = `srch`;
  return (
    <div className={searchClassName}>
      <TextField
        placeholder={searchFieldPlaceHolder ? searchFieldPlaceHolder : "Search"}
        radius={fieldRaddius ? fieldRaddius : TextFieldRadius.LEFT}
        leftIcon={{
          eventHanlder: () => {},
          iconCssValue: "fa-solid fa-magnifying-glass",
          iconSize: IconSize.X_SMALL,
        }}
      />
      <Button
        radius={buttonRadius ? buttonRadius : ButtondRadius.RIGHT}
        label={buttonText ? buttonText : "Search"}
      />
    </div>
  );
};

export default InputButtonGroup;
