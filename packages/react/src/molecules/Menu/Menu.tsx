import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemType, SubMenuPosition } from "../MenuItem/Type";
import { menuTestId } from "./MenuConstants";
import { MenuOrientation, MenuType } from "./Type";
import { useId } from "react";

const getMenuItemComponents = (menuItems: MenuItemType[]) => {
  const menuItemComponents = [];
  for (const menuItem of menuItems) {
    menuItemComponents.push(<MenuItem label={menuItem.label} />);
  }
  return menuItemComponents;
};
const Menu = ({ menuItems, orientation }: MenuType) => {
  const menuClassName = `mnu-${
    orientation ? orientation : MenuOrientation.HORIZONTAL
  }`;
  return (
    <div className={menuClassName} data-testid={menuTestId}>
      {menuItems.map((menuitem) => (
        <MenuItem
          leftIcon={menuitem.leftIcon}
          submenu={menuitem.submenu}
          label={menuitem.label}
          key={useId()}
        />
      ))}
    </div>
  );
};
export default Menu;