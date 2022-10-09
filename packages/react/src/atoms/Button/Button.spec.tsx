import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ButtonConstants from "./ButtonConstants";
import ButtonType from "./Type";
import Button from "./Button";

describe("Test Button Component", () => {
  it("should be displayed with empty props with defaul values", async () => {
    render(<Button />);
    const renderedButton = await screen.findByTestId(
      ButtonConstants.ButtonTestId.toString()
    );
    expect(renderedButton).toBeInTheDocument();
  });

  it("should display based on given props", async () => {
    const testLabel = "test-button";
    const buttonProps: ButtonType = {
      label: testLabel,
      color: "red",
    };
    render(<Button {...buttonProps} />);

    const renderedButton: HTMLElement = await screen.findByText(testLabel);
    expect(renderedButton).toBeInTheDocument();
  });

  it("should excute given onclick handler when button clicked", async () => {
    const clickMock = jest.fn();
    render(<Button clickHandler={clickMock} />);
    const renderedButton: HTMLElement = await screen.findByTestId(
      ButtonConstants.ButtonTestId.toString()
    );
    fireEvent.click(renderedButton);
    expect(clickMock.mock.calls.length).toBe(1);
  });
});
