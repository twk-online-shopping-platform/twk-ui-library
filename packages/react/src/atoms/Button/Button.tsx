import React from "react";
import { TypographyVariant, TypographyWeight } from "../Typography/Type";
import { ButtondRadius, ButtonVariant } from "./Type";
import Typography from "../Typography/Typography";
import { ButtonTestId } from "./ButtonConstants";
import { ButtonType, ButtonSize } from "./Type";
import Icon from "../Icon/Icon";

const Button = ({
  label = "button",
  clickHandler,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.SMALL,
  radius = ButtondRadius.BOTH,
  leftIcon,
  rightIcon,
}: ButtonType) => {
  let leftIconClassName: string | undefined = `icn-lf icn-${size}-input-field `;
  let rightIconClassName:
    | string
    | undefined = `icn-rt icn-${size}-input-field `;
  const buttonClass = `btn-${variant} btn-${size} b-rd-${radius} b-rd-blue b-rd-thick`;
  if (typeof leftIcon === "string") {
    leftIconClassName = leftIconClassName.concat(leftIcon);
  } else if (typeof leftIcon == "boolean" && leftIcon) {
    leftIconClassName = leftIconClassName.concat(
      "fa-sharp fa-solid fa-angle-left"
    );
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
      {leftIconClassName ? <Icon cssValue={leftIconClassName} /> : null}

      <Typography
        text={label}
        variant={TypographyVariant.BUTTON}
        weight={TypographyWeight.SEMI_BOLD}
      />
      {rightIconClassName ? <Icon cssValue={rightIconClassName} /> : null}
    </button>
  );
};

export default Button;
