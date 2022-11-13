import React from "react";
import { TagePosition, TagType } from "./Type";

const DiagonalTag = ({ position }: TagType) => {
  return (
    <div className={`clr-bg-green-500 diagonal-tag-${position} `}>
      <div
        className={`clr-txt-white-white diagonal-tag-txt-${position}  txt-lg-font pdd-v-xs pdd-h-xs`}
      >
        Sale
      </div>
    </div>
  );
};
export default DiagonalTag;
