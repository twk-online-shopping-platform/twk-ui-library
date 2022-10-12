import React from "react";
import { IconTestId } from "./IconConstants";
import { IconSize, IconType } from "./Type";

const Icon = ({
  cssValue = "fa-solid fa-magnifying-glass",
  size = IconSize.SMALL,
}: IconType) => {
  const iconClassName = `${cssValue}`;
  return <i data-testid={IconTestId} className={iconClassName}></i>;
};

export default Icon;
