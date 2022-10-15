import { KeyboardEventHandler, MouseEventHandler } from "react";
import { MenuType } from "../Menu/Type";

enum MenuItemSize {
  SMALL = "sm",
  LARGE = "lg",
}
enum SubMenuPosition {
  LEFT = "left",
  RIGHT = "right",
  UNDER = "under",
}
interface SubMenuType {
  menu?: MenuType;
  position?: SubMenuPosition;
}
interface RightIconType {
  openValue: string;
  closeValue: string;
}
interface MenuItemType {
  label: string;
  leftIcon?: string | boolean;
  rightIcon?: RightIconType | boolean;
  submenu?: SubMenuType;
  handler?: {
    clickHanlder: MouseEventHandler;
    mouseHanlder: MouseEventHandler;
    keyboardHandler: KeyboardEventHandler;
  };
  size?: MenuItemSize;
}
export { MenuItemSize, SubMenuPosition };

export type { MenuItemType, RightIconType };
