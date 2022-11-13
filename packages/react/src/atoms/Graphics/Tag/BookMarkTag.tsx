import React from "react";
import { TagType } from "./Type";

const BookMarkTag = ({ position }: TagType) => {
  return (
    <div className={`clr-bg-blue-500 bookmark-tag-${position} pdd-v-xxs`}>
      <div
        className={`clr-txt-white-white bookmark-tag-txt-${position}  txt-lg-font pdd-v-sm `}
      >
        Sale
      </div>
    </div>
  );
};
export default BookMarkTag;
