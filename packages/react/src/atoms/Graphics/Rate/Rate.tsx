import React, { ReactNode, useId } from "react";
import Icon from "../../Icon/Icon";
import { RateType } from "./Type";
import PropTypes from "prop-types";
import { IconSize } from "../../Icon/Type";

const Rate = ({ value, max = 5, style, size }: RateType) => {
  return (
    <div className={`flx-h`}>
      {getSoldStar(value, max, size, style ? style.solid : "")}
      {getOpenStar(value, max, size, style ? style.open : "")}
    </div>
  );
};

const getSoldStar = (
  value: number,
  max: number,
  size: IconSize | undefined,
  style: string
) => {
  let starComp = null;
  if (value > max) value = max;
  const arrElement = Array.from({ length: value }, (_, index) => index + 1);
  starComp = arrElement.map((element) => {
    const iconKey = useId();
    return (
      <Icon
        cssValue={`fa-solid fa-star ` + style}
        size={size ? size : IconSize.SMALL}
        key={iconKey}
      />
    );
  });
  return starComp;
};
const getOpenStar = (
  value: number,
  max: number,
  size: IconSize | undefined,
  style: string
) => {
  let starOpenComp = null;
  const arrElement = Array.from(
    { length: max - value },
    (_, index) => index + 1
  );
  starOpenComp = arrElement.map((element) => {
    const iconKey = useId();
    return (
      <Icon
        cssValue={
          `fa-regular fa-star icn-${size ? size : IconSize.SMALL} ` + style
        }
        key={iconKey}
      />
    );
  });
  return starOpenComp;
};

export default Rate;
