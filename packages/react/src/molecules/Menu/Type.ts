import { MenuItemType } from "../MenuItem/Type";

enum MenuOrientation {
  VERTICAL = "v",
  HORIZONTAL = "h",
}

interface MenuType {
  menuItems: MenuItemType[];
  orientation: MenuOrientation;
}

export type { MenuType };
