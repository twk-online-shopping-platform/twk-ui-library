import React from "react";
import {
  TypographySize,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from "./Type";
import { TypoDefaultText, TypographyTestId } from "./TypographyContants";
import "@twk-ui-lib/scss/root/global.css";

const Typography = ({
  text,
  variant = TypographyVariant.TEXT,
  weight = TypographyWeight.NORMAL,
  size = TypographySize.SMALL,
  handler,
  nowrapText,
  color,
  cssClasses,
}: TypographyType) => {
  const defaultText: string = TypoDefaultText;
  const typoClassName = `ft-family ${variant}-${size}-font ${variant}-fw-${weight} ${
    nowrapText ? "non-wrap-font" : ""
  }  ${color ? "clr-txt-" + color.type + "-" + color.value : ""} ${
    cssClasses ? cssClasses : ""
  }`;
  const voidFunction = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <span
      tabIndex={handler ? 0 : -1}
      data-testid={TypographyTestId.toString()}
      className={typoClassName}
      onClick={
        handler
          ? handler.clickHandler
            ? handler.clickHandler
            : voidFunction
          : voidFunction
      }
    >
      {text ? text : defaultText}
    </span>
  );
};

export default Typography;
