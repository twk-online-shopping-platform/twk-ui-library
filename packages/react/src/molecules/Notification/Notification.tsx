import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import { IconSize } from "../../atoms/Icon/Type";
import { TypographySize, TypographyVariant } from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import DropDownContextProvider, {
  useMenuContext,
  useMenuUpdateContext,
} from "../../common/Contexts/DropDownContextProvider";
import {
  notificationDropDownId,
  notificationDropDownTestId,
  notificationTestId,
} from "./NotificationConstants";
import {
  DropDownPosition,
  NotificationType,
  NotificationValueShape,
} from "./Type";
import {
  onKeyDownDropDown,
  useOutsideAlerter,
} from "../../common/Contexts/EventHandler";

const NotificationComponent = ({
  icon,
  value,
  iconSize,
  textSize,
  textVariant,
  valueShape,
  description = "Notification Icon",
  dropDown,
  dropDownPosition,
  dropDownContainerStyle,
}: NotificationType) => {
  const mainContext: boolean = useMenuContext();
  const setMainContext = useMenuUpdateContext();
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, setMainContext);

  return (
    <div className="mni-c" ref={menuRef}>
      <div
        className="mni"
        role="menu"
        aria-label={description}
        aria-expanded={mainContext ? true : undefined}
        aria-controls={notificationDropDownId}
        aria-haspopup={dropDown ? true : undefined}
        data-testid={notificationTestId}
        onClick={(e) => {
          e.preventDefault();
          setMainContext(!mainContext);
        }}
        onKeyDown={(e) => onKeyDownDropDown(e, setMainContext, mainContext)}
        tabIndex={dropDown ? 0 : -1}
      >
        <div className="ntf-c">
          <Icon
            cssValue={icon + " clr-txt-lnk"}
            size={iconSize ? iconSize : IconSize.SMALL}
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
      {dropDown ? (
        <div
          data-testid={notificationDropDownTestId}
          id={notificationDropDownId}
          className={`mni-p mni-p-${isOpenDropDown(
            mainContext
          )} clr-bg-white-white b-rd b-rd-blue b-rd-thick b-style-d mni-p-${
            dropDownPosition ? dropDownPosition : DropDownPosition.UNDER_RIGHT
          } ${dropDownContainerStyle}`}
        >
          {dropDown}
        </div>
      ) : null}
    </div>
  );
};

const Notitication = ({ ...props }: NotificationType) => {
  return (
    <DropDownContextProvider>
      <NotificationComponent {...props} />
    </DropDownContextProvider>
  );
};
export default Notitication;

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

const isOpenDropDown = (state: boolean): string => {
  return state ? "on" : "off";
};
