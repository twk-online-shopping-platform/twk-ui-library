import React, { MouseEventHandler, useEffect, useRef } from "react";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Icon from "../../atoms/Icon/Icon";
import Typography from "../../atoms/Typography/Typography";
import {
  menuItemTestId,
  menuPopupId,
  subMenuItemTestId,
} from "./MenuItemConstants";
import {
  MenuItemType,
  RightIconType,
  SubMenuPosition,
  SubMenuType,
} from "./Type";
import { TypographySize, TypographyVariant } from "../../atoms/Typography/Type";
import { IconSize } from "../../atoms/Icon/Type";
import { KeyboardKey } from "../../accessibility/KeyboardEvents";
import {
  useDropDownLevelContext,
  useDropDownLevelUpdateContext,
  useMenuContext,
  useMenuUpdateContext,
} from "../../common/Contexts/DropDownContextProvider";
import {
  createDropDownStateListener,
  dropDownClickHandler,
} from "../../common/Contexts/EventHandler";

const MenuItem = ({
  label,
  leftIcon,
  rightIcon,
  clickHanlder,
  textSize,
  textVariant,
  submenu,
  uniqueId,
  parentsList,
}: MenuItemType) => {
  const [dropDownState, setDropDownState] = useState(false);
  const mainContext: boolean = useMenuContext();
  const setMainContext = useMenuUpdateContext();
  const dropdownLevelContext: Array<string> = useDropDownLevelContext();
  const setDropdownLevelContext = useDropDownLevelUpdateContext();
  const menuRef = useRef(null);
  createDropDownStateListener(
    setDropDownState,
    mainContext,
    dropdownLevelContext,
    uniqueId
  );

  const subMenuPosition = submenu
    ? submenu.position
      ? submenu.position
      : "left"
    : "left";
  const hasSubMenu: boolean = submenu ? true : false;

  return (
    <div className="mni-c">
      <div
        ref={menuRef}
        tabIndex={0}
        data-testid={menuItemTestId}
        onClick={(e) => {
          dropDownClickHandler(
            e,
            dropDownState,
            setDropDownState,
            setMainContext,
            dropdownLevelContext,
            setDropdownLevelContext,
            uniqueId,
            parentsList,
            submenu?.menu?.menuItems,
            clickHanlder
          );
        }}
        onKeyDown={(e) => {
          if (e.key === KeyboardKey.ENTER.key) {
            dropDownClickHandler(
              e,
              dropDownState,
              setDropDownState,
              setMainContext,
              dropdownLevelContext,
              setDropdownLevelContext,
              uniqueId,
              parentsList,
              submenu?.menu?.menuItems,
              clickHanlder
            );
          }
        }}
        className="mni clr-txt-lnk"
        role="menuitem"
        aria-expanded={dropDownState && hasSubMenu ? true : undefined}
        aria-haspopup={hasSubMenu}
        aria-controls={menuPopupId}
      >
        {leftIcon ? (
          typeof leftIcon === "string" ? (
            <Icon cssValue={leftIcon} size={IconSize.X_SMALL} />
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
        {righIconComp(rightIcon, dropDownState, submenu)}
      </div>
      {submenu ? (
        submenu.menu ? (
          <div
            className={`mni-p mni-p-${subMenuPosition} mni-p-${showDropDown(
              dropDownState
            )} b-rd b-rd-blue b-rd-thick b-style-d clr-bg-white-white`}
            data-testid={subMenuItemTestId}
            id={menuPopupId}
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

const showDropDown = (currentState: boolean): string => {
  return currentState ? "on" : "off";
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

export default MenuItem;
