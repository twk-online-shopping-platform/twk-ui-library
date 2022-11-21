import React from "react";
import { TagType } from "./Type";

const BookMarkTag = ({ position }: TagType) => {
  return (
    <div className={`clr-bg-blue-500 bookmark-tag-${position} pdd-v-sm`}>
      <div
        className={`clr-txt-white-white bookmark-tag-txt-${position} txt-sm-font`}
      >
        Popular
      </div>
    </div>
  );
};
export default BookMarkTag;
