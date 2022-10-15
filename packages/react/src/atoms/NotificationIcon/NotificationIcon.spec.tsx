import React from "react";
import { render, screen } from "@testing-library/react";
import { IconTestId } from "../Icon/IconConstants";
import { TypographyTestId } from "../Typography/TypographyContants";
import NotificationIcon from "./NotificationIcon";

describe("Test NotificationIcon Component", () => {
  it("should display Icon Component", async () => {
    render(<NotificationIcon icon="" value={0} />);
    const iconComponent = screen.getByTestId(IconTestId);
    expect(iconComponent).toBeInTheDocument();
  });
  it("should display Icon Component", async () => {
    render(<NotificationIcon icon="" value={0} />);
    const iconComponent = screen.getByTestId(TypographyTestId);
    expect(iconComponent).toBeInTheDocument();
  });
});
