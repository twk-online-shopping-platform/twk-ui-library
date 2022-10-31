import React, { useEffect, useRef, useState } from "react";
import Menu from "../../molecules/Menu/Menu";
import { MenuOrientation } from "../../molecules/Menu/Type";
import { SubMenuPosition } from "../../molecules/MenuItem/Type";
import Icon from "../Icon/Icon";
import { IconSize } from "../Icon/Type";
import { TypographySize, TypographyVariant } from "../Typography/Type";
import Typography from "../Typography/Typography";
import { NotificationIconType, NotificationValueShape } from "./Type";

const NotificationIcon = ({
  icon,
  value,
  iconSize,
  textSize,
  textVariant,
  valueShape,
}: NotificationIconType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, setOpenMenu);

  return (
    <div className="mni-c" ref={menuRef}>
      <div className="mni">
        <div className="ntf-c">
          <Icon
            cssValue={icon + " clr-txt-lnk"}
            size={iconSize ? iconSize : IconSize.SMALL}
            clickHandler={(e) => notificationClickHandler(e, setOpenMenu)}
          />
          <div
            className={`ntf-nm b-${
              valueShape ? valueShape : NotificationValueShape.CIRCLE
            } 
        b-${
          valueShape ? valueShape : NotificationValueShape.CIRCLE
        }-${textSize}`}
          >
            <Typography
              text={notificationNum(value)}
              variant={textVariant ? textVariant : TypographyVariant.SMALL}
              size={textSize ? textSize : TypographySize.SMALL}
            />
          </div>
        </div>
      </div>

      <div
        className={`mni-p mni-p-${
          openMenu ? "on" : "off"
        } clr-bg-white-white b-rd b-rd-blue b-rd-thick b-style-d mni-p-${
          SubMenuPosition.UNDER_RIGHT
        }`}
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

const notificationNum = (val: number): string => {
  let displayValue: string = "0";
  if (val == null) {
    return displayValue;
  } else if (val > 9) {
    displayValue = "9+";
  } else if (val < 0) {
    displayValue = "0";
  } else {
    displayValue = val.toString();
  }
  return displayValue;
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
const notificationClickHandler = (e: any, setState: Function) => {
  e.preventDefault();
  setState(true);
};

export default NotificationIcon;
