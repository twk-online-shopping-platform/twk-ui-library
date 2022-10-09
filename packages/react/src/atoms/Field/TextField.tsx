import React, { useId, useState } from "react";
import FieldConstants from "./FieldConstants";
import { TextFiedType } from "./Type";

const TextField = ({
  type = "text",
  placeholder,
  typeEventHandler,
}: TextFiedType) => {
  const inputClassName = "fld-sm b-rd-lt b-rd-gray txt-xs-font";
  const labelClassName = "lbl";
  const groupClassName = "input-grp";
  const fieldId = useId();
  return (
    <div className={groupClassName}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        id={fieldId}
        className={inputClassName}
        data-testid={FieldConstants.TextFieldTestId.toString()}
        type={type}
        placeholder={placeholder ? placeholder : "Input Text Here"}
        onChange={
          typeEventHandler
            ? (e) => typeEventHandler(e)
            : (e) => {
                console.log("user input " + e.target.value);
              }
        }
      />
      <label className={labelClassName} htmlFor={fieldId}>
        {placeholder}
      </label>
    </div>
  );
};

export default TextField;
