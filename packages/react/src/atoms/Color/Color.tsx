import { render } from "@testing-library/react";
import React from "react";
import { colorTestId } from "./ColorContants";
import { ColorType } from "./Type";

const Color = ({ color, weight }: ColorType) => {
  return (
    <div
      className={`sqr-lg clr-bg-${color}-${weight}`}
      data-testid={colorTestId}
    ></div>
  );
};
export default Color;
