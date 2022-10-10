import React, { useId, useState } from "react";
import FieldConstants from "./FieldConstants";
import { TextFiedType } from "./Type";

const TextField = ({
  type = "text",
  placeholder,
  typeEventHandler,
}: TextFiedType) => {
  const inputClassName = "fld-lg b-rd b-rd-gray txt-xs-font";
  const labelClassName = "lbl";
  const groupClassName = "input-grp";
  const fieldId = useId();
  return (
    <div className={groupClassName}>
      <i className="icn-lf icn-lg-input-field fa-solid fa-magnifying-glass "></i>
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
      <i className="icn-rt icn-lg-input-field fa-solid fa-xmark"></i>
    </div>
  );
};

export default TextField;
