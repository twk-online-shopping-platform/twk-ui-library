import React from "react";
import { render, screen } from "@testing-library/react";
import { IconTestId } from "../Icon/IconConstants";
import { TypographyTestId } from "../Typography/TypographyContants";
import NotificationIcon from "./NotificationIcon";

describe("Test NotificationIcon Component", () => {
  it("should display Icon Component", async () => {
    render(<NotificationIcon icon="fa-solid fa-user" value={0} />);
    const iconComponent = screen.getAllByTestId(IconTestId);
    expect(iconComponent.length).toBeGreaterThan(2);
  });
  const notificationNum: number = 9;
  it("should display Icon Component", async () => {
    render(<NotificationIcon icon="" value={notificationNum} />);
    const iconComponent = screen.getByText(notificationNum.toString());
    expect(iconComponent).toBeInTheDocument();
  });
});
