import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FieldConstants from "./FieldConstants";
import { TextFiedType } from "./Type";
import TextField from "./TextField";

describe("Test TextField Component", () => {
  const textFieldrxj = <TextField type="text" />;
  it("should be displayed with empty props with defaul values", async () => {
    render(textFieldrxj);
    const renderedField = await screen.findByTestId(
      FieldConstants.TextFieldTestId.toString()
    );
    expect(renderedField).toBeInTheDocument();
  });

  it("should be accept user input", async () => {
    const testTxt = "Test Input";
    render(<TextField type={""} />);
    const renderedField = await screen.findByTestId(
      FieldConstants.TextFieldTestId.toString()
    );
    userEvent.type(renderedField, testTxt);
    expect(
      screen.getByTestId(FieldConstants.TextFieldTestId.toString())
    ).toHaveValue(testTxt);
  });

  it("should be accept user input event handler", async () => {
    const testTxt = "Test Input";
    const mockFun: jest.Mock = jest.fn();
    render(<TextField type={"text"} typeEventHandler={mockFun} />);
    const renderedField = await screen.findByTestId(
      FieldConstants.TextFieldTestId.toString()
    );
    userEvent.type(renderedField, testTxt);
    expect(mockFun.mock.calls.length).toBe(10);
  });
});
