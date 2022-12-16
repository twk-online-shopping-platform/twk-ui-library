import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IconTestId } from "../../atoms/Icon/IconConstants";
import { TypographyTestId } from "../../atoms/Typography/TypographyContants";
import Notification from "./Notification";
import Menu from "../Menu/Menu";
import { MenuOrientation } from "../Menu/Type";
import {
  notificationDropDownId,
  notificationDropDownTestId,
  notificationTestId,
} from "./NotificationConstants";
import { menuItemTestId } from "../MenuItem/MenuItemConstants";
import { menuTestId } from "../Menu/MenuConstants";
import "@twk-ui-lib/scss/root/global.css";

describe("Test NotificationIcon Component", () => {
  const subMenuItemName = "sub-menu-item-test-name";
  const mockFunction = jest.fn();
  const subMenus = (
    <Menu
      menuItems={[
        {
          uniqueId: "1",
          parentsList: ["1"],
          label: "Electronics",
          leftIcon: "fa-solid fa-house-user",
          submenu: {
            menu: {
              menuItems: [
                {
                  uniqueId: "2",
                  parentsList: ["1", "2"],
                  label: "Hair Product",
                  leftIcon: "fa-solid fa-earth-americas",
                  submenu: {
                    menu: {
                      menuItems: [
                        {
                          uniqueId: "3",
                          parentsList: ["1", "2", "3"],
                          label: subMenuItemName,
                          leftIcon: "fa-solid fa-earth-americas",
                          clickHanlder: mockFunction,
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        {
          uniqueId: "4",
          parentsList: ["4"],
          label: "Art",
          leftIcon: "fa-solid fa-rectangle-list",
          clickHanlder: mockFunction,
        },
        {
          uniqueId: "5",
          parentsList: ["5"],
          label: "Furniture",
          leftIcon: "fa-solid fa-earth-americas",
          submenu: {
            menu: {
              menuItems: [
                {
                  uniqueId: "6",
                  parentsList: ["5", "6"],
                  label: "Shoes",
                  leftIcon: "fa-solid fa-earth-americas",
                  submenu: {
                    menu: {
                      menuItems: [
                        {
                          uniqueId: "7",
                          parentsList: ["5", "6", "7"],
                          label: "Nike",
                          leftIcon: "fa-solid fa-earth-americas",
                          clickHanlder: mockFunction,
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        {
          uniqueId: "8",
          parentsList: ["8"],
          label: "Automotive",
          leftIcon: "fa-solid fa-radio",
          clickHanlder: mockFunction,
        },
      ]}
      orientation={MenuOrientation.VERTICAL}
    />
  );
  it("should display Icon Component", async () => {
    render(
      <Notification icon="fa-solid fa-user" value={0} dropDown={subMenus} />
    );
    const iconComponent = screen.getAllByTestId(IconTestId);
    expect(iconComponent.length).toBe(13);
  });
  const notificationNum: number = 9;
  it("should display Icon Component", async () => {
    render(<Notification icon="" value={notificationNum} />);
    const iconComponent = screen.getByText(notificationNum.toString());
    expect(iconComponent).toBeInTheDocument();
  });

  it("should dropdown item when component clicked", async () => {
    render(
      <Notification
        icon="fa-solid fa-user"
        value={notificationNum}
        dropDown={subMenus}
      />
    );
    const notificationComp = await screen.findByTestId(notificationTestId);
    expect(notificationComp).toBeVisible();
    const dropDownComp = await screen.findByTestId(notificationDropDownTestId);
    expect(dropDownComp.className).toContain("mni-p-off");
    await fireEvent.click(notificationComp);
    expect(dropDownComp.className).toContain("mni-p-on");
  });
  it("should dropdown item when sub menu item clicked don't show dropdowns", async () => {
    render(
      <Notification
        icon="fa-solid fa-user"
        value={notificationNum}
        dropDown={subMenus}
      />
    );
    const notificationComp = await screen.findByTestId(notificationTestId);
    await fireEvent.click(notificationComp);
    const dropDownComp = await screen.findByTestId(notificationDropDownTestId);
    expect(dropDownComp.className).toContain("mni-p-on");
    const subMenuItem = await screen.findByText(subMenuItemName);
    expect(subMenuItem).toBeVisible();
    await fireEvent.click(subMenuItem);
    expect(dropDownComp.className).toContain("mni-p-off");
  });
});
