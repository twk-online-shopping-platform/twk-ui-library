import React from "react";
import {
  TypographySize,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from "./Type";
import { TypoDefaultText, TypographyTestId } from "./TypographyContants";

const Typography = ({
  text,
  variant = TypographyVariant.TEXT,
  weight = TypographyWeight.NORMAL,
  size = TypographySize.SMALL,
}: TypographyType) => {
  const defaultText: string = TypoDefaultText;
  const typoClassName = `ft-family ${variant}-${size}-font ${variant}-fw-${weight}`;
  return (
    <span data-testid={TypographyTestId.toString()} className={typoClassName}>
      {text ? text : defaultText}
    </span>
  );
};

export default Typography;
