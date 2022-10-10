import React, { useId, useState } from "react";
import FieldConstants from "./FieldConstants";
import { TextFiedType, TextFieldRadius, TextFieldSize } from "./Type";

const TextField = ({
  type = "text",
  placeholder,
  typeEventHandler,
  size = TextFieldSize.SMALL,
  leftIcon,
  rightIcon,
  radius = TextFieldRadius.BOTH,
}: TextFiedType) => {
  const inputClassName = `fld-${size} b-rd-${radius} b-rd-gray txt-xs-font`;
  const labelClassName = "lbl";
  const groupClassName = "input-grp";
  const leftIconClassName = `icn-lf icn-${size}-input-field `;
  const rightIconClassName = `icn-rt icn-${size}-input-field `;
  const fieldId = useId();
  return (
    <div className={groupClassName}>
      {leftIcon ? (
        leftIcon.iconCssValue ? (
          <i className={leftIconClassName + leftIcon.iconCssValue} />
        ) : (
          <i className={leftIconClassName + "fa-solid fa-magnifying-glass"} />
        )
      ) : null}
      <input
        id={fieldId}
        className={inputClassName}
        data-testid={FieldConstants.TextFieldTestId.toString()}
        type={type ? type : "text"}
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
      {rightIcon ? (
        rightIcon.iconCssValue ? (
          <i className={rightIconClassName + rightIcon.iconCssValue} />
        ) : (
          <i className={rightIconClassName + "fa-solid fa-xmark"} />
        )
      ) : null}
    </div>
  );
};

export default TextField;
