import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import { IconSize } from "../../atoms/Icon/Type";
import { TypographySize, TypographyVariant } from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import NotificationContextProvider, {
  useMenuContext,
  useMenuItemListRefContext,
  useMenuUpdateContext,
} from "./NotificationContextProvider";
import { notificationDropDownId } from "./NotificationConstants";
import {
  DropDownPosition,
  NotificationType,
  NotificationValueShape,
} from "./Type";
import {
  notificationClickHandler,
  notificationNum,
  onKeyDownNotification,
  useOutsideAlerter,
} from "./eventHandler";

const Notification = ({
  icon,
  value,
  iconSize,
  textSize,
  textVariant,
  valueShape,
  description = "Notification Icon",
  dropDown,
  dropDownPosition,
}: NotificationType) => {
  const openMenu = useMenuContext();
  const setOpenMenu = useMenuUpdateContext();
  const focusableSubItemRef = useMenuItemListRefContext();
  const menuRef = useRef(null);
  const popupRef = useRef(null);
  const [currentFocus, setCurrentFocus] =
    useState<React.MutableRefObject<any> | null>(null);

  useOutsideAlerter(menuRef, setOpenMenu, setCurrentFocus);

  useEffect(() => {
    if (currentFocus && currentFocus.current) {
      currentFocus.current.focus();
    }
    console.log("Curr Foc: ", currentFocus?.current);
  }, [currentFocus]);

  return (
    <div className="mni-c" ref={menuRef}>
      <div
        className="mni"
        role="menu"
        aria-label={description}
        aria-expanded={openMenu ? true : undefined}
        aria-controls={notificationDropDownId}
        aria-haspopup={dropDown ? true : undefined}
        onClick={(e) => notificationClickHandler(e, setOpenMenu, openMenu)}
        onKeyDown={(e) =>
          onKeyDownNotification(
            e,
            setOpenMenu,
            openMenu,
            focusableSubItemRef,
            setCurrentFocus
          )
        }
        tabIndex={0}
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
          id={notificationDropDownId}
          className={`mni-p mni-p-${
            openMenu ? "on" : "off"
          } clr-bg-white-white b-rd b-rd-blue b-rd-thick b-style-d mni-p-${
            dropDownPosition ? dropDownPosition : DropDownPosition.UNDER_RIGHT
          }`}
          tabIndex={0}
          ref={popupRef}
        >
          {dropDown}
        </div>
      ) : null}
    </div>
  );
};

const NotiticationWithContext = ({ ...props }: NotificationType) => {
  return (
    <NotificationContextProvider>
      <Notification {...props} />
    </NotificationContextProvider>
  );
};
export default NotiticationWithContext;
