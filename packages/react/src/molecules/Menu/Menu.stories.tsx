import React, { MouseEventHandler } from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Menu from "./Menu";
import { MenuOrientation, MenuType } from "./Type";
import { MenuItemType, SubMenuPosition } from "../MenuItem/Type";
import StandAloneMenu from "./StandAloneMenu";

export default {
  title: "Molecules/Menu",
  component: StandAloneMenu,
} as ComponentMeta<typeof StandAloneMenu>;

const Template: ComponentStory<typeof Menu> = (args: MenuType) => (
  <StandAloneMenu {...args} />
);
const mockFunction: MouseEventHandler = (e) => {
  console.log("target", e.target);
};
export const HorizontalMenu = Template.bind({});
let menuItemList: MenuItemType[] = [
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
      position: SubMenuPosition.UNDER,
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
      position: SubMenuPosition.UNDER,
    },
  },
  {
    uniqueId: "8",
    parentsList: ["8"],
    label: "Automotive",
    leftIcon: "fa-solid fa-radio",
    clickHanlder: mockFunction,
  },
];

HorizontalMenu.args = {
  menuItems: menuItemList,
  orientation: MenuOrientation.HORIZONTAL,
};

export const VerticalMenu = Template.bind({});
let menuItemList2: MenuItemType[] = [
  {
    label: "Home",
    leftIcon: "fa-solid fa-house-user",
  },
  { label: "Catalog", leftIcon: "fa-solid fa-rectangle-list" },
  { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
  { label: "News", leftIcon: "fa-solid fa-radio" },
  { label: "Blog", leftIcon: "fa-solid fa-mug-hot" },
];

VerticalMenu.args = {
  menuItems: menuItemList2,
  orientation: MenuOrientation.VERTICAL,
};
