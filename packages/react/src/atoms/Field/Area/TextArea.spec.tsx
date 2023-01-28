import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from "./TextArea";
import { TextAreaTestId } from "../FieldConstants";

describe("Test TextField Component", () => {
  it("should render default TextArea", async () => {
    render(<TextArea />);
    const textAreaComp = await screen.findByTestId(TextAreaTestId);
    expect(textAreaComp).toBeValid();
  });
});
