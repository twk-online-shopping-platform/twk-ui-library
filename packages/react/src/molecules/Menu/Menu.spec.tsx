import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MenuOrientation, MenuType } from "./Type";
import { menuTestId } from "./MenuConstants";
import Menu from "./Menu";
import { subMenuItemTestId } from "../MenuItem/MenuItemConstants";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemType } from "../MenuItem/Type";

describe("Test Menu Component", () => {
  it("should display Menu Component", async () => {
    render(<Menu menuItems={[]} />);
    const menuComponent = await screen.getByTestId(menuTestId);
    expect(menuComponent).toBeInTheDocument();
  });
  it("should display MenuItems", async () => {
    let menuItemList: MenuItemType[] = [];
    const nums = [1, 2, 3];
    for (let n of nums) {
      menuItemList.push({ label: "menu-" + n });
    }
    const menuProps: MenuType = {
      menuItems: menuItemList,
      orientation: MenuOrientation.HORIZONTAL,
    };

    render(<Menu {...menuProps} />);
    const menuComponent = await screen.getByTestId(menuTestId);
    fireEvent.click(menuComponent);
    expect(menuComponent.length).toBe(3);
  });
});
