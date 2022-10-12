import React, { useId, useState } from "react";
import Icon from "../Icon/Icon";
import FieldConstants from "./FieldConstants";
import { TextFiedType, TextFieldRadius, TextFieldSize } from "./Type";

const TextField = ({
  type = "text",
  placeholder = "Input Text Here",
  typeEventHandler,
  size = TextFieldSize.SMALL,
  leftIcon,
  rightIcon,
  radius = TextFieldRadius.BOTH,
}: TextFiedType) => {
  const inputClassName = `fld-${size} b-rd-${radius} b-rd-gray txt-xs-font`;
  const labelClassName = "lbl";
  const groupClassName: string = "input-grp";
  const leftIconClassName: string = `icn-lf icn-${size}-input-field `;
  const rightIconClassName: string = `icn-rt icn-${size}-input-field `;
  const fieldId = useId();

  return (
    <div className={groupClassName}>
      {leftIcon ? (
        leftIcon.iconCssValue ? (
          <Icon cssValue={leftIconClassName.concat(leftIcon.iconCssValue)} />
        ) : (
          <Icon
            cssValue={leftIconClassName.concat("fa-solid fa-magnifying-glass")}
          />
        )
      ) : null}
      <input
        id={fieldId}
        className={inputClassName}
        data-testid={FieldConstants.TextFieldTestId.toString()}
        type={type ? type : "text"}
        placeholder={placeholder}
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
          <Icon cssValue={rightIconClassName.concat(rightIcon.iconCssValue)} />
        ) : (
          <Icon cssValue={rightIconClassName.concat("fa-solid fa-xmark")} />
        )
      ) : null}
    </div>
  );
};

export default TextField;
