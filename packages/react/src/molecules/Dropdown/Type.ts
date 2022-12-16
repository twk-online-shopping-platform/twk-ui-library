import { ReactNode } from "react";
import { IconSize } from "../../atoms/Icon/Type";
import { TypographyType } from "../../atoms/Typography/Type";
import { MenuItemType, SubMenuPosition } from "../MenuItem/Type";

interface DropdownType {
  popupItems?: ReactNode;
  popupPositon?: SubMenuPosition;
  icons?: {
    open: string;
    close: string;
    cssValue?: string;
    size?: IconSize;
  };
  lowerText?: TypographyType;
  uperText?: TypographyType;
}
export type { DropdownType };
