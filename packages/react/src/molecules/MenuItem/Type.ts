import { KeyboardEventHandler, MouseEventHandler } from "react";
import { TypographySize, TypographyVariant } from "../../atoms/Typography/Type";
import { MenuType } from "../Menu/Type";

enum MenuItemSize {
  SMALL = "sm",
  LARGE = "lg",
}
enum SubMenuPosition {
  LEFT = "left",
  RIGHT = "right",
  UNDER = "under",
  UNDER_RIGHT = "under-right",
  LEFT_BOTTOM = "left-bottom",
  RIGHT_BOTTOM = "right-bottom",
}
interface SubMenuType {
  menu?: MenuType;
  position?: SubMenuPosition;
}
interface RightIconType {
  openValue: string;
  closeValue: string;
}
interface MenuItemEventHandler {
  clickHanlder: MouseEventHandler;
  mouseHanlder: MouseEventHandler;
  keyboardHandler: KeyboardEventHandler;
}
interface MenuItemType {
  parentKey: string;
  label: string;
  leftIcon?: string | boolean;
  rightIcon?: RightIconType | boolean;
  textVariant?: TypographyVariant;
  textSize?: TypographySize;
  submenu?: SubMenuType;
  handler?: MenuItemEventHandler;
  size?: MenuItemSize;
}

export { MenuItemSize, SubMenuPosition };
export type { MenuItemType, RightIconType, SubMenuType, MenuItemEventHandler };
