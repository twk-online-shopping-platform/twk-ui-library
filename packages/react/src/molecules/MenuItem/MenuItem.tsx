import React, { MouseEventHandler, useEffect, useRef } from "react";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Icon from "../../atoms/Icon/Icon";
import Typography from "../../atoms/Typography/Typography";
import { menuItemTestId, subMenuItemTestId } from "./MenuItemConstants";
import {
  MenuItemType,
  RightIconType,
  SubMenuPosition,
  SubMenuType,
} from "./Type";
import { TypographySize, TypographyVariant } from "../../atoms/Typography/Type";
import { IconSize } from "../../atoms/Icon/Type";

const MenuItem = ({
  label,
  leftIcon,
  rightIcon,
  handler,
  textSize,
  textVariant,
  submenu,
}: MenuItemType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, setOpenMenu);
  const subMenuPosition = submenu
    ? submenu.position
      ? submenu.position
      : "left"
    : "left";
  const hasSubMenu: boolean = submenu ? true : false;

  return (
    <div className="mni-c" ref={menuRef}>
      <div
        data-testid={menuItemTestId}
        onClick={(e: any) => menuOnClickHandler(e, setOpenMenu)}
        className="mni clr-txt-lnk"
        role="select"
        aria-expanded={openMenu && hasSubMenu ? true : undefined}
        aria-haspopup={hasSubMenu}
        aria-controls="twk-menu-list"
      >
        {leftIcon ? (
          typeof leftIcon === "string" ? (
            <Icon
              cssValue={leftIcon}
              size={IconSize.X_SMALL}
              description={label + " icon"}
            />
          ) : typeof leftIcon === "boolean" && leftIcon ? (
            <Icon size={IconSize.X_SMALL} description={label + " icon"} />
          ) : null
        ) : null}
        <Typography
          text={label}
          variant={textVariant ? textVariant : TypographyVariant.TEXT}
          size={textSize ? textSize : TypographySize.SMALL}
          nowrapText={true}
        />
        {righIconComp(rightIcon, openMenu, submenu)}
      </div>
      {submenu ? (
        submenu.menu ? (
          <div
            className={`mni-p mni-p-${subMenuPosition} mni-p-${
              openMenu ? "on" : "off"
            } b-rd b-rd-blue b-rd-thick b-style-d clr-bg-white-white`}
            data-testid={subMenuItemTestId}
            id="twk-menu-list"
            role={"menu"}
          >
            {submenu ? (
              submenu.menu ? (
                <Menu
                  menuItems={submenu.menu.menuItems}
                  orientation={submenu.menu.orientation}
                />
              ) : null
            ) : null}
          </div>
        ) : null
      ) : null}
    </div>
  );
};

const righIconComp = (
  input: RightIconType | boolean | undefined,
  isOpen: boolean,
  subMenu: SubMenuType | undefined
) => {
  if (typeof input === "boolean" && input) {
    return <Icon />;
  }
  if (!input) {
    if (subMenu && subMenu.menu) {
      if (subMenu.position) {
        if (subMenu.position === SubMenuPosition.UNDER) {
          if (isOpen) {
            return (
              <Icon cssValue="fa-solid fa-angle-down" size={IconSize.X_SMALL} />
            );
          } else {
            return (
              <Icon cssValue="fa-solid fa-angle-left" size={IconSize.X_SMALL} />
            );
          }
        }
        if (subMenu.position === SubMenuPosition.UNDER_RIGHT) {
          if (isOpen) {
            return null;
          } else {
            return (
              <Icon
                cssValue="fa-solid fa-chevron-down"
                size={IconSize.X_SMALL}
              />
            );
          }
        }
      }
      if (isOpen) {
        return <Icon cssValue="fa-solid fa-minus" size={IconSize.X_SMALL} />;
      } else {
        return <Icon cssValue="fa-solid fa-plus" size={IconSize.X_SMALL} />;
      }
    } else {
      return null;
    }
  }
  if (isRightIcon(input)) {
    if (isOpen) {
      return <Icon cssValue={input.openValue} size={IconSize.X_SMALL} />;
    } else {
      return <Icon cssValue={input.closeValue} size={IconSize.X_SMALL} />;
    }
  } else {
    return null;
  }
};
const isRightIcon = (rightIconInput: any): rightIconInput is RightIconType => {
  return "closeValue" in rightIconInput;
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
const menuOnClickHandler = (e: any, setState: Function) => {
  e.preventDefault();
  setState(true);
};
export default MenuItem;
