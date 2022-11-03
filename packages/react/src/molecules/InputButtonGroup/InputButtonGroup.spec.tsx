import React from "react";
import { render, screen } from "@testing-library/react";
import { TextFieldTestId } from "../../atoms/Field/FieldConstants";
import { ButtonTestId } from "../../atoms/Button/ButtonConstants";
import { SearchFieldType } from "./Type";
import InputButtonGroup from "./InputButtonGroup";

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
    const searchFieldProps: SearchFieldType = {
      buttonText: "",
      searchFieldPlaceHolder: "",
      searchIcon: "",
    };
    render(<InputButtonGroup {...searchFieldProps} />);
    const searchField = await screen.getByTestId(ButtonTestId);
    expect(searchField).toBeInTheDocument();
  });
});
