import React from "react";
import { render, screen } from "@testing-library/react";
import { TextFieldTestId } from "../../atoms/Field/FieldConstants";
import { ButtonTestId } from "../../atoms/Button/ButtonConstants";
import InputButtonGroup from "./InputButtonGroup";
import { InputButtonGroupType } from "./Type";

describe("Test SearchField component", () => {
  it("should display TextField component", async () => {
    render(<InputButtonGroup />);
    const searchField = await screen.getByTestId(TextFieldTestId);
    expect(searchField).toBeInTheDocument();
  });
  it("should display Button component", async () => {
    render(<InputButtonGroup />);
    const searchField = await screen.getByTestId(ButtonTestId);
    expect(searchField).toBeInTheDocument();
  });
  it("should accept SearchFieldType props component", async () => {
    const searchFieldProps: InputButtonGroupType = {
      buttonText: "",
      searchFieldPlaceHolder: "",
      searchIcon: "",
    };
    render(<InputButtonGroup {...searchFieldProps} />);
    const searchField = await screen.getByTestId(ButtonTestId);
    expect(searchField).toBeInTheDocument();
  });
});
