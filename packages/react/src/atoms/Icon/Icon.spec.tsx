import React from "react";
import { render, screen } from "@testing-library/react";
import { IconTestId } from "./IconConstants";
import Icon from "./Icon";

describe("Test Icon Component", () => {
  it("should display Icon Component", async () => {
    render(<Icon />);
    const iconComponent = screen.getByTestId(IconTestId);
    expect(iconComponent).toBeInTheDocument();
  });
});
