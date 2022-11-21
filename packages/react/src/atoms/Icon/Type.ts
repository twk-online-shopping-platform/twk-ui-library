import { MouseEventHandler } from "react";

enum IconSize {
  X_X_SMALL = "xxs",
  X_SMALL = "xs",
  SMALL = "sm",
  MDIUM = "md",
  LARGE = "lg",
  X_LARGE = "xl",
}

interface IconType {
  cssValue?: string;
  size?: IconSize;
  description?: string;
}

export type { IconType };
export { IconSize };
