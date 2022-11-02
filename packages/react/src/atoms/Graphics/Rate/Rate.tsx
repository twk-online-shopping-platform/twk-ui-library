import React, { ReactNode, useId } from "react";
import Icon from "../../Icon/Icon";
import { RateType } from "./Type";
import PropTypes from "prop-types";

const Rate = ({ value, max = 5, style }: RateType) => {
  return (
    <div className="flx-h">
      {getSoldStar(value, max, style ? style.solid : "")}
      {getOpenStar(value, max, style ? style.open : "")}
    </div>
  );
};

const getSoldStar = (value: number, max: number, style: string) => {
  let starComp = null;
  if (value > max) value = max;
  const arrElement = Array.from({ length: value }, (_, index) => index + 1);
  starComp = arrElement.map((element) => {
    const iconKey = useId();
    return <Icon cssValue={"fa-solid fa-star " + style} key={iconKey} />;
  });
  return starComp;
};
const getOpenStar = (value: number, max: number, style: string) => {
  let starOpenComp = null;
  const arrElement = Array.from(
    { length: max - value },
    (_, index) => index + 1
  );
  starOpenComp = arrElement.map((element) => {
    const iconKey = useId();
    return <Icon cssValue={"fa-regular fa-star " + style} key={iconKey} />;
  });
  return starOpenComp;
};

export default Rate;
