import React, { MouseEventHandler } from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@twk-ui-lib/scss/root/third-party-icons/line-awesome/css/line-awesome.css";
import { HeaderType } from "./Type";
import Header from "./Header";
import { MenuItemType, SubMenuPosition } from "../../molecules/MenuItem/Type";
import { MenuOrientation } from "../../molecules/Menu/Type";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderType) => (
  <Header {...args} />
);
const mockFunction: MouseEventHandler = (e) => {
  console.log("target", e.target);
};
export const Header1 = Template.bind({});
const menuItemList: MenuItemType[] = [
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
          {
            label: "Hair Products",
            leftIcon: "fa-solid fa-rectangle-list",
            uniqueId: "3",
            parentsList: ["3"],
          },
          {
            label: "Furniture",
            leftIcon: "fa-solid fa-earth-americas",
            uniqueId: "4",
            parentsList: ["4"],
          },
          {
            label: "Automotive",
            leftIcon: "fa-solid fa-radio",
            uniqueId: "5",
            parentsList: ["5"],
          },
        ],
        orientation: MenuOrientation.VERTICAL,
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
Header1.args = {
  headerMenu: {
    menuItems: menuItemList,
    orientation: MenuOrientation.HORIZONTAL,
  },
  navNotification: {
    like: { icon: "fa-regular fa-heart", value: 2 },
    cart: { icon: "fa-solid fa-cart-shopping", value: 5 },
  },
};
