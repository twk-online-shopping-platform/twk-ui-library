import React from "react";
import { TextAreaTestId } from "../FieldConstants";

const TextArea = () => {
  return <textarea placeholder="Comments..." data-testid={TextAreaTestId} />;
};

export default TextArea;
