import { ReactNode } from "react";
import { IconSize } from "../../atoms/Icon/Type";
import { TypographySize, TypographyVariant } from "../../atoms/Typography/Type";
import { MenuType } from "../Menu/Type";
enum NotificationValueShape {
  CIRCLE = "cr",
  ROUND = "rd",
  NONE = "nr",
}

enum DropDownPosition {
  LEFT = "left",
  RIGHT = "right",
  UNDER = "under",
  UNDER_RIGHT = "under-right",
  LEFT_BOTTOM = "left-bottom",
  RIGHT_BOTTOM = "right-bottom",
}

interface NotificationType {
  icon: string;
  value: number;
  textVariant?: TypographyVariant;
  iconSize?: IconSize;
  textSize?: TypographySize;
  valueShape?: NotificationValueShape;
  description?: string;
  dropDown?: ReactNode;
  dropDownPosition?: DropDownPosition;
  compontentKey?: string;
  dropDownContainerStyle?: string;
}

export { NotificationValueShape, DropDownPosition };
export type { NotificationType };
