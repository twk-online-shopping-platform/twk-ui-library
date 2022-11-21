import React from "react";
import { diagonalTagTestId } from "./TagConstants";
import { TagePosition, TagType } from "./Type";

const DiagonalTag = ({ position }: TagType) => {
  return (
    <div
      className={`clr-bg-green-500 diagonal-tag-${position} `}
      data-testid={diagonalTagTestId}
    >
      <div
        className={`clr-txt-white-white diagonal-tag-txt-${position}  txt-lg-font pdd-v-xs pdd-h-xs`}
      >
        Sale
      </div>
    </div>
  );
};
export default DiagonalTag;
