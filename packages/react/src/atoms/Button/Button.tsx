import React from "react";
import { TypographyVariant, TypographyWeight } from "../Typography/Type";
import { ButtondRadius, ButtonVariant } from "./Type";
import Typography from "../Typography/Typography";
import ButtonConstants from "./ButtonConstants";
import { ButtonType, ButtonSize } from "./Type";
import Icon from "../Icon/Icon";

const Button: React.FC<ButtonType> = ({
  label = "button",
  clickHandler,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.SMALL,
  radius = ButtondRadius.BOTH,
}) => {
  const leftIconClassName: string = `icn-lf icn-${size}-input-field `;
  const rightIconClassName: string = `icn-rt icn-${size}-input-field `;
  const buttonClass = `btn-${variant} btn-${size} b-rd-${radius} b-rd-blue b-rd-thick`;
  return (
    <button
      title="Button"
      className={buttonClass}
      onClick={() => {
        if (clickHandler) clickHandler();
      }}
      data-testid={ButtonConstants.ButtonTestId.toString()}
    >
      <Icon
        cssValue={leftIconClassName.concat("fa-sharp fa-solid fa-angle-left")}
      />
      <Typography
        text={label}
        variant={TypographyVariant.BUTTON}
        weight={TypographyWeight.SEMI_BOLD}
      />
      <Icon cssValue={rightIconClassName.concat("fa-solid fa-angle-right")} />
    </button>
  );
};

export default Button;
