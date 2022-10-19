import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import { TypographyVariant } from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import Menu from "../Menu/Menu";
import { MenuOrientation } from "../Menu/Type";
import MenuItem from "../MenuItem/MenuItem";
import { dropdownTestId } from "./DropdownConstants";
import { DropdownType } from "./Type";
const Dropdown = ({}: DropdownType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, setOpenMenu);

  return (
    <div className="mni-c" ref={menuRef}>
      <div
        className="mni flx-h clr-txt-gray-400 flx-spc-ctr flx-gap-sm"
        data-testid={dropdownTestId}
      >
        <Icon
          cssValue="fa-solid fa-bars clr-txt-lnk clr-txt-lnk-white-white  "
          clickHandler={(e) => dropdownClickHandler(e, setOpenMenu)}
        />
        <div className="flx-v flx-v-lft">
          <Typography
            text="All department for you"
            variant={TypographyVariant.TEXT}
          />
          <Typography
            text="total 66 products"
            variant={TypographyVariant.SMALL}
          />
        </div>
      </div>
      <div
        className={`mni-p mni-under mni-p-${
          openMenu ? "on" : "off"
        }  b-rd-blue b-rd-thick b-style-d clr-bg-white-white`}
      >
        <Menu
          menuItems={[
            { label: "Electronics", leftIcon: "fa-solid fa-house-user" },
            { label: "Hair Products", leftIcon: "fa-solid fa-rectangle-list" },
            { label: "Furniture", leftIcon: "fa-solid fa-earth-americas" },
            { label: "Automotive", leftIcon: "fa-solid fa-radio" },
          ]}
          orientation={MenuOrientation.VERTICAL}
        />
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
