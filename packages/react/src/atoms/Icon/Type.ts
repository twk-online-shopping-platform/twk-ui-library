import { MouseEventHandler } from "react";

enum IconSize {
  X_SMALL = "xs",
  SMALL = "sm",
  MDIUM = "md",
  LARGE = "lg",
  X_LARGE = "xl",
}

interface IconType {
  cssValue?: string;
  size?: IconSize;
  clickHandler?: MouseEventHandler;
}

export type { IconType };
export { IconSize };
