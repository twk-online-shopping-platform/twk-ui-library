import React, { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemType, SubMenuPosition } from "../MenuItem/Type";
import { menuTestId } from "./MenuConstants";
import { MenuOrientation, MenuType } from "./Type";
import { useId } from "react";
import DropDownContextProvider, {
  useDropDownLevelContext,
  useDropDownLevelUpdateContext,
} from "../../common/Contexts/DropDownContextProvider";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";

const getMenuItemComponents = (menuItems: MenuItemType[]) => {
  const menuItemComponents = [];
  for (const menuItem of menuItems) {
    menuItemComponents.push(<MenuItem {...menuItem} />);
  }
  return menuItemComponents;
};
const Menu = ({ menuItems, orientation, style }: MenuType) => {
  const menuClassName = `mnu-${
    orientation ? orientation : MenuOrientation.HORIZONTAL
  }${style ? style : " "} 
  flx-wrap`;
  return (
    <div className={menuClassName} data-testid={menuTestId} role="menu">
      {menuItems.map((menuitem) => (
        <MenuItem {...menuitem} key={useId()} />
      ))}
    </div>
  );
};
export default Menu;
