import React from "react";
import { TagType } from "./Type";

const StarTag = ({ position }: TagType) => {
  return (
    <div className={`clr-bg-yellow-500 star-tag-${position} pdd-v-xxs`}>
      <div
        className={`clr-txt-white-white star-tag-txt-${position}  txt-md-font pdd-h-xxs pdd-v-xxs `}
      >
        Sale
      </div>
    </div>
  );
};
export default StarTag;
