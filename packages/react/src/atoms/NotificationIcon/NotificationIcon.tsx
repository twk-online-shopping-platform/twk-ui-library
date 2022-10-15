import React from "react";
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
  return (
    <div className="ntf-c">
      <Icon cssValue={icon} size={iconSize ? iconSize : IconSize.SMALL} />
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

export default NotificationIcon;
