import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";
import { menuItemTestId, subMenuItemTestId } from "./MenuItemConstants";
import { MenuItemSize, MenuItemType, SubMenuPosition } from "./Type";

describe("Test MenuItem Component", () => {
  it("should display MenuItem Component", async () => {
    render(<MenuItem label={""} />);
    const muenuItem = await screen.getByTestId(menuItemTestId);
    expect(muenuItem).toBeInTheDocument();
  });
  it("should display sub props", async () => {
    const testLabel: string = "Test-MenuItem";
    const menuItemProps: MenuItemType = {
      label: testLabel,
      size: MenuItemSize.SMALL,
    };
    render(<MenuItem {...menuItemProps} />);
    const muenuItem = await screen.getByText(testLabel);
    expect(muenuItem).toBeInTheDocument();
  });
  it("should accept click handler", async () => {
    const menuItemProps: MenuItemType = {
      label: "Test",
      submenu: {
        position: SubMenuPosition.LEFT,
        menu: {
          menuItems: [
            {
              label: "Social Media",
              leftIcon: "fa-solid fa-house-user",
              submenu: {
                position: SubMenuPosition.LEFT,
              },
            },
          ],
        },
      },
    };
    render(<MenuItem {...menuItemProps} />);
    const muenuItem = await screen.getByTestId(subMenuItemTestId);
    expect(muenuItem).toBeInTheDocument();
  });
});
