import { MenuItemType } from "../MenuItem/Type";

enum MenuOrientation {
  VERTICAL = "v",
  HORIZONTAL = "h",
}

interface MenuType {
  menuItems: MenuItemType[];
  orientation?: MenuOrientation;
  style?: string;
}

export { MenuOrientation };

export type { MenuType };
