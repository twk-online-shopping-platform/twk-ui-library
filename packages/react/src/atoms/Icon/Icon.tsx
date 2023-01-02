import React from "react";
import { KeyboardKey } from "../../accessibility/KeyboardEvents";
import { IconTestId } from "./IconConstants";
import { IconSize, IconType } from "./Type";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Icon = ({
  cssValue = "fa-solid fa-magnifying-glass",
  size = IconSize.SMALL,
  description,
}: IconType) => {
  const iconClassName = `${cssValue} icn-${size} clr-txt-lnk`;
  return (
    <i
      data-testid={IconTestId}
      className={iconClassName}
      role="button"
      aria-label={description ? description : undefined}
    ></i>
  );
};

export default Icon;
