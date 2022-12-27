import React, { useId, useRef } from "react";
import DropDownContextProvider, {
  useMenuUpdateContext,
} from "../../common/Contexts/DropDownContextProvider";
import { useOutsideAlerter } from "../../common/Contexts/EventHandler";
import MenuItem from "../MenuItem/MenuItem";
import { menuTestId } from "./MenuConstants";
import { MenuOrientation, MenuType } from "./Type";
import "@twk-ui-lib/scss/root/global.css";

const StandAloneMenuComponent = ({ menuItems, orientation }: MenuType) => {
  const setMainContext = useMenuUpdateContext();
  const mainRef = useRef(null);
  useOutsideAlerter(mainRef, setMainContext);

  const menuClassName = `mnu-${
    orientation ? orientation : MenuOrientation.HORIZONTAL
  } flx-wrap`;
  return (
    <div
      className={menuClassName}
      data-testid={menuTestId}
      role="menu"
      ref={mainRef}
    >
      {menuItems.map((menuitem) => (
        <MenuItem {...menuitem} key={useId()} />
      ))}
    </div>
  );
};

const StandAloneMenu = ({ ...props }: MenuType) => {
  return (
    <DropDownContextProvider>
      <StandAloneMenuComponent {...props} />
    </DropDownContextProvider>
  );
};

export default StandAloneMenu;
