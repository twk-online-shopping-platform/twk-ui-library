import React from "react";
import { screen, render } from "@testing-library/react";
import Dropdown from "./Dropdown";
import { dropdownTestId } from "./DropdownConstants";

describe("Test Dropdown Component", () => {
  it("should display dropdown", async () => {
    render(<Dropdown />);
    const dropdownComponent = await screen.getByTestId(dropdownTestId);
    expect(dropdownComponent).toBeInTheDocument();
  });
});
