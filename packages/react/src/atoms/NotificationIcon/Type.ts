import { IconSize } from "../Icon/Type";
import { TypographySize, TypographyVariant } from "../Typography/Type";
enum NotificationValueShape {
  CIRCLE = "cr",
  ROUND = "rd",
  NONE = "nr",
}

interface NotificationIconType {
  icon: string;
  value: number;
  textVariant?: TypographyVariant;
  iconSize?: IconSize;
  textSize?: TypographySize;
  valueShape?: NotificationValueShape;
}

export { NotificationValueShape };
export type { NotificationIconType };
