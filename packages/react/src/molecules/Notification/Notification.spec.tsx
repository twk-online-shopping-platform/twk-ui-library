import React from "react";
import { render, screen } from "@testing-library/react";
import { IconTestId } from "../../atoms/Icon/IconConstants";
import { TypographyTestId } from "../../atoms/Typography/TypographyContants";
import Notification from "./Notification";
import Menu from "../Menu/Menu";
import { MenuOrientation } from "../Menu/Type";

describe("Test NotificationIcon Component", () => {
  it("should display Icon Component", async () => {
    const subMenus = (
      <Menu
        menuItems={[
          { label: "Electronics", leftIcon: "fa-solid fa-house-user" },
          { label: "Hair Products", leftIcon: "fa-solid fa-rectangle-list" },
          { label: "Furniture", leftIcon: "fa-solid fa-earth-americas" },
          { label: "Automotive", leftIcon: "fa-solid fa-radio" },
        ]}
        orientation={MenuOrientation.VERTICAL}
      />
    );
    render(
      <Notification icon="fa-solid fa-user" value={0} dropDown={subMenus} />
    );
    const iconComponent = screen.getAllByTestId(IconTestId);
    expect(iconComponent.length).toBe(5);
  });
  const notificationNum: number = 9;
  it("should display Icon Component", async () => {
    render(<Notification icon="" value={notificationNum} />);
    const iconComponent = screen.getByText(notificationNum.toString());
    expect(iconComponent).toBeInTheDocument();
  });
});
