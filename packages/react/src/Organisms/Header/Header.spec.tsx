import React from "react";
import { render, screen } from "@testing-library/react";
import { HeaderType } from "./Type";
import Header from "./Header";
import { headerTestId } from "./HeaderConstants";
import { MenuItemType } from "../../molecules/MenuItem/Type";

describe("Test Header Component", () => {
  it("should display header with searchfield and menu", async () => {
    const menuBarText = "Home";
    const topText = "My account";
    const searchFieldText = "Search";
    const accountText = "Account";
    const menuItemList: MenuItemType[] = [
      {
        uniqueId: "1",
        parentsList: ["1"],
        label: menuBarText,
        leftIcon: "fa-solid fa-house-user",
      },
    ];
    const headerProps: HeaderType = { headerMenu: { menuItems: menuItemList } };
    render(<Header {...headerProps} />);
    const headerComponent = await screen.getByTestId(headerTestId);
    expect(headerComponent).toHaveTextContent(menuBarText);
    expect(headerComponent).toHaveTextContent(topText);
    expect(headerComponent).toHaveTextContent(searchFieldText);
    expect(headerComponent).toHaveTextContent(accountText);
  });
});
