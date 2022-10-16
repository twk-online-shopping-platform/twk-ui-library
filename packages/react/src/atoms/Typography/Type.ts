import { KeyboardEventHandler, MouseEventHandler } from "react";

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
}
export { TypographyWeight, TypographyVariant, TypographySize };
export type { TypographyType, TypographyEventHandler };
