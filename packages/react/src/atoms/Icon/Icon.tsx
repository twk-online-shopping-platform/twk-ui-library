import React from "react";
import { IconTestId } from "./IconConstants";
import { IconSize, IconType } from "./Type";

const Icon = ({
  cssValue = "fa-solid fa-magnifying-glass",
  size = IconSize.SMALL,
  clickHandler,
}: IconType) => {
  const iconClassName = `${cssValue} icn-${size}`;
  return (
    <i
      data-testid={IconTestId}
      className={iconClassName}
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
