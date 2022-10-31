import { KeyboardEventHandler, MouseEventHandler } from "react";
import { ColorClassType } from "../Color/Type";

enum TypographyVariant {
  DISPLAY = "dis",
  TEXT = "txt",
  HEADING = "hd",
  BUTTON = "btn",
  LINK = "lnk",
  SMALL = "sml",
}
enum TypographyWeight {
  NORMAL = "n",
  MDIUM = "m",
  SEMI_BOLD = "s",
  BOLD = "b",
}
enum TypographySize {
  EXTRA_EXTRA_SMALL = "xxs",
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

interface TypographyColor {
  value?: string;
  type: ColorClassType;
}
interface TypographyEventHandler {
  clickHandler?: MouseEventHandler;
  mouseHandler?: MouseEventHandler;
  keyboardHandler?: KeyboardEventHandler;
}

interface TypographyType {
  text?: string;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  size?: TypographySize;
  handler?: TypographyEventHandler | undefined;
  nowrapText?: boolean;
  color?: TypographyColor;
  cssClasses?: string;
}
export { TypographyWeight, TypographyVariant, TypographySize };
export type { TypographyType, TypographyEventHandler, TypographyColor };
