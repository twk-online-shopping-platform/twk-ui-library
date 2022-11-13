import React from "react";
import { IconTestId } from "./IconConstants";
import { IconSize, IconType } from "./Type";

const Icon = ({
  cssValue = "fa-solid fa-magnifying-glass",
  size = IconSize.SMALL,
  clickHandler,
  description,
}: IconType) => {
  const iconClassName = `${cssValue} icn-${size} clr-txt-lnk`;
  return (
    <i
      data-testid={IconTestId}
      className={iconClassName}
      role="button"
      aria-label={description ? description : "Icon"}
      onClick={
        clickHandler
          ? clickHandler
          : (e) => {
              e.preventDefault();
            }
      }
    ></i>
  );
};

export default Icon;
