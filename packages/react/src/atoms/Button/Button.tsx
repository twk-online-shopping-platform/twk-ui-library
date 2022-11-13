import React from "react";
import {
  TypographySize,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from "../Typography/Type";
import { ButtondRadius, ButtonVariant } from "./Type";
import Typography from "../Typography/Typography";
import { ButtonTestId } from "./ButtonConstants";
import { ButtonType, ButtonSize } from "./Type";
import Icon from "../Icon/Icon";
import { IconType } from "../Icon/Type";

const Button = ({
  label = "button",
  clickHandler,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.SMALL,
  radius = ButtondRadius.BOTH,
  leftIcon,
  rightIcon,
  style,
}: ButtonType) => {
  let leftIconClassName: string | undefined = `icn-lf icn-${size}-input-field `;
  let leftIconComponent = null;
  let rightIconClassName:
    | string
    | undefined = `icn-rt icn-${size}-input-field `;
  const buttonClass = `btn-${variant} btn-${size} b-${radius} b-rd-blue b-rd-thick ${style}`;
  if (typeof leftIcon === "string") {
    leftIconClassName = leftIconClassName.concat(leftIcon);
  } else if (typeof leftIcon == "boolean" && leftIcon) {
    leftIconClassName = leftIconClassName.concat(
      "fa-sharp fa-solid fa-angle-left"
    );
  } else if (leftIcon && isIcon(leftIcon)) {
    leftIconComponent = <Icon {...leftIcon} />;
  } else {
    leftIconClassName = undefined;
  }
  if (typeof rightIcon === "string") {
    rightIconClassName = rightIconClassName.concat(rightIcon);
  } else if (typeof rightIcon === "boolean" && rightIcon) {
    rightIconClassName = rightIconClassName.concat("fa-solid fa-angle-right");
  } else {
    rightIconClassName = undefined;
  }
  return (
    <button
      title="Button"
      className={buttonClass}
      onClick={() => {
        if (clickHandler) clickHandler();
      }}
      data-testid={ButtonTestId}
    >
      {leftIconClassName && !leftIconComponent ? (
        <Icon cssValue={leftIconClassName} />
      ) : leftIconComponent ? (
        leftIconComponent
      ) : null}
      {label ? (
        typeof label === "string" ? (
          <Typography
            text={label}
            variant={TypographyVariant.BUTTON}
            weight={TypographyWeight.SEMI_BOLD}
            size={
              size ? mapButtonSizeToTypographySize(size) : TypographySize.SMALL
            }
          />
        ) : null
      ) : null}
      {label ? (
        typeof label !== "string" && isType(label) ? (
          <Typography {...label} />
        ) : null
      ) : null}

      {rightIconClassName ? <Icon cssValue={rightIconClassName} /> : null}
    </button>
  );
};

export default Button;

const mapButtonSizeToTypographySize = (btnSize: ButtonSize) => {
  if (btnSize == ButtonSize.EXTRA_SMALL) {
    return TypographySize.EXTRA_SMALL;
  }
  if (btnSize == ButtonSize.SMALL) {
    return TypographySize.SMALL;
  }
  if (btnSize == ButtonSize.LARGE) {
    return TypographySize.LARGE;
  }
};

const instanceOfIcon = (object: any): object is IconType => {
  return "cssValue" in object;
};

const isIcon = (iconProps: any): boolean => {
  return instanceOfIcon(iconProps);
};

const instanceOfTypo = (object: any): object is TypographyType => {
  return "text" in object;
};

const isType = (iconProps: any): boolean => {
  return instanceOfTypo(iconProps);
};
