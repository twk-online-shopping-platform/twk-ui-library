import React, { useRef } from "react";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Icon from "../../atoms/Icon/Icon";
import Typography from "../../atoms/Typography/Typography";
import { menuItemTestId, subMenuItemTestId } from "./MenuItemConstants";
import { MenuItemType, RightIconType } from "./Type";

const righIconComp = (
  input: RightIconType | boolean | undefined,
  isOpen: boolean
) => {
  if (typeof input === "boolean" && input) {
    return <Icon />;
  }
  if (!input) return null;
  if (isRightIcon(input)) {
    if (isOpen) {
      return <Icon cssValue={input.openValue} />;
    } else {
      return <Icon cssValue={input.closeValue} />;
    }
  } else {
    return null;
  }
};
const isRightIcon = (rightIconInput: any): rightIconInput is RightIconType => {
  return "closeValue" in rightIconInput;
};

const MenuItem = ({
  label,
  leftIcon,
  rightIcon,
  handler,
  submenu,
}: MenuItemType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const subMenuPosition = submenu
    ? submenu.position
      ? submenu.position
      : "left"
    : "left";

  const menuOnClickHandler = (e) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  return (
    <div className="mni-c">
      <div
        data-testid={menuItemTestId}
        onClick={menuOnClickHandler}
        className="mni"
      >
        {leftIcon ? (
          typeof leftIcon === "string" ? (
            <Icon cssValue={leftIcon} />
          ) : typeof leftIcon === "boolean" && leftIcon ? (
            <Icon />
          ) : null
        ) : null}
        <Typography text={label} />
        {rightIcon ? righIconComp(rightIcon, openMenu) : null}
      </div>
      <div
        className={`mni-p mni-p-${subMenuPosition} mni-p-${
          openMenu ? "on" : "off"
        } b-rd b-rd-blue b-rd-thick b-style-d`}
        data-testid={subMenuItemTestId}
      ></div>
    </div>
  );
};

export default MenuItem;
