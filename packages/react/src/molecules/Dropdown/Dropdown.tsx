import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import { IconSize } from "../../atoms/Icon/Type";
import { TypographyVariant } from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import Menu from "../Menu/Menu";
import { MenuOrientation } from "../Menu/Type";
import MenuItem from "../MenuItem/MenuItem";
import { dropdownTestId } from "./DropdownConstants";
import { DropdownType } from "./Type";
const Dropdown = ({
  popupItems,
  icons,
  lowerText,
  uperText,
  popupPositon,
}: DropdownType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, setOpenMenu);

  return (
    <div className="mni-c" ref={menuRef}>
      <div
        className={`mni flx-h  flx-spc-ctr flx-gap-sm`}
        data-testid={dropdownTestId}
        onClick={(e) => dropdownClickHandler(e, setOpenMenu)}
      >
        {icons ? (
          <Icon
            cssValue={`${openMenu ? icons.open : icons.close} ${
              icons ? (icons.cssValue ? icons.cssValue : "") : ""
            }`}
            // clickHandler={(e) => dropdownClickHandler(e, setOpenMenu)}
            size={icons.size ? icons.size : IconSize.SMALL}
          />
        ) : null}

        <div className="flx-v flx-v-lft clr-txt-lnk">
          {uperText ? <Typography {...uperText} /> : null}
          {lowerText ? <Typography {...lowerText} /> : null}
        </div>
      </div>
      <div
        className={`mni-p mni-p-${
          popupPositon ? popupPositon : "under"
        } mni-p-${
          openMenu ? "on" : "off"
        }  b-rd-blue b-rd-thick b-style-d clr-bg-white-white`}
      >
        {popupItems ? (
          <Menu menuItems={popupItems} orientation={MenuOrientation.VERTICAL} />
        ) : null}
      </div>
    </div>
  );
};

const useOutsideAlerter = (ref: any, state: Function) => {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        state(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
const dropdownClickHandler = (e: any, setState: Function) => {
  e.preventDefault();
  setState(true);
};
export default Dropdown;
