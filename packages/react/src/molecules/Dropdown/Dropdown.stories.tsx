import React, { MouseEventHandler } from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { DropdownType } from "./Type";
import Dropdown from "./Dropdown";
import { MenuItemType } from "../MenuItem/Type";
import { IconSize } from "../../atoms/Icon/Type";
import {
  TypographyVariant,
  TypographySize,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import { MenuOrientation } from "../Menu/Type";
import Menu from "../Menu/Menu";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownType) => (
  <Dropdown {...args} />
);
const mockFunction: MouseEventHandler = (e) => {
  console.log("target: ", e.target);
};
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
                        label: "Shampo",
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
export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  popupItems: subMenus,
  icons: {
    open: "fa-regular fa-user",
    close: "fa-regular fa-user",
    cssValue: "clr-txt-lnk",
    size: IconSize.X_SMALL,
  },
  uperText: {
    text: "Sign In",
    variant: TypographyVariant.SMALL,
    size: TypographySize.SMALL,
  },
  lowerText: {
    text: "Account",
    variant: TypographyVariant.TEXT,
    size: TypographySize.SMALL,
    weight: TypographyWeight.MDIUM,
  },
};
export const NoUpperTextDropdown = Template.bind({});
NoUpperTextDropdown.args = {
  popupItems: subMenus,
  icons: {
    open: "fa-regular fa-user",
    close: "fa-regular fa-user",
    cssValue: "clr-txt-lnk",
    size: IconSize.X_SMALL,
  },
  lowerText: {
    text: "Account",
    variant: TypographyVariant.TEXT,
    size: TypographySize.SMALL,
    weight: TypographyWeight.MDIUM,
  },
};
