import { IconSize } from "../../atoms/Icon/Type";
import { TypographyType } from "../../atoms/Typography/Type";
import { MenuItemType, SubMenuPosition } from "../MenuItem/Type";

interface DropdownType {
  popupItems?: MenuItemType[];
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
