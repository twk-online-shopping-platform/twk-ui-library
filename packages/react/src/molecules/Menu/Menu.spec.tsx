import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MenuOrientation, MenuType } from "./Type";
import { menuTestId } from "./MenuConstants";
import Menu from "./Menu";
import {
  menuItemTestId,
  subMenuItemTestId,
} from "../MenuItem/MenuItemConstants";
import { MenuItemType } from "../MenuItem/Type";

describe("Test Menu Component", () => {
  it("should display Menu Component", async () => {
    render(<Menu menuItems={[]} />);
    const menuComponent = await screen.getByTestId(menuTestId);
    expect(menuComponent).toBeInTheDocument();
  });
  it("should display MenuItems", async () => {
    const menuItemList = [
      {
        label: "menu-1",
        uniqueId: "1",
        parentsList: ["1"],
      },
      {
        label: "menu-2",
        uniqueId: "2",
        parentsList: ["2"],
      },
      {
        label: "menu-3",
        uniqueId: "3",
        parentsList: ["3"],
      },
    ];

    const menuProps: MenuType = {
      menuItems: menuItemList,
      orientation: MenuOrientation.HORIZONTAL,
    };

    render(<Menu {...menuProps} />);
    const menuComponent = await screen.getAllByTestId(menuItemTestId);
    expect(menuComponent.length).toBe(3);
  });
});
