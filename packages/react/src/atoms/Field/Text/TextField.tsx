import React, { useId, useState } from "react";
import Icon from "../../Icon/Icon";
import { IconSize } from "../../Icon/Type";
import { TextFieldTestId } from "../FieldConstants";
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
  const inputClassName = `fld-${size} b-${radius} b-rd-gray txt-xs-font`;
  const labelClassName = "lbl";
  const groupClassName: string = "input-grp";
  const leftIconClassName: string = `icn-lf icn-${size}-input-field `;
  const rightIconClassName: string = `icn-rt icn-${size}-input-field `;
  const fieldId = useId();

  return (
    <div className={groupClassName}>
      {leftIcon ? (
        leftIcon.iconCssValue ? (
          <Icon
            cssValue={leftIconClassName.concat(leftIcon.iconCssValue)}
            size={leftIcon.iconSize ? leftIcon.iconSize : IconSize.X_SMALL}
          />
        ) : (
          <Icon
            cssValue={leftIconClassName.concat("fa-solid fa-magnifying-glass")}
            size={IconSize.X_SMALL}
          />
        )
      ) : null}
      <input
        id={fieldId}
        className={inputClassName}
        data-testid={TextFieldTestId}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={typeEventHandler ? (e) => typeEventHandler(e) : () => {}}
      />
      <label className={labelClassName} htmlFor={fieldId}>
        {placeholder}
      </label>
      {rightIcon ? (
        rightIcon.iconCssValue ? (
          <Icon
            cssValue={rightIconClassName.concat(rightIcon.iconCssValue)}
            size={rightIcon.iconSize ? rightIcon.iconSize : IconSize.X_SMALL}
          />
        ) : (
          <Icon
            cssValue={rightIconClassName.concat("fa-solid fa-xmark")}
            size={IconSize.X_SMALL}
          />
        )
      ) : null}
    </div>
  );
};

export default TextField;
