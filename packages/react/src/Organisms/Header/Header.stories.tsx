import React from "react";
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
export const Header1 = Template.bind({});
const menuItemList: MenuItemType[] = [
  {
    label: "Home",
    leftIcon: "fa-solid fa-house-user",
    submenu: {
      menu: {
        menuItems: [
          {
            label: "Home",
            leftIcon: "fa-solid fa-house-user",
            submenu: {
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
              position: SubMenuPosition.LEFT,
            },
          },
          {
            label: "Catalog",
            leftIcon: "fa-solid fa-rectangle-list",
            submenu: { position: SubMenuPosition.LEFT },
          },
          { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
          { label: "News", leftIcon: "fa-solid fa-radio" },
          {
            label: "Blog",
            leftIcon: "fa-solid fa-mug-hot",
            submenu: { position: SubMenuPosition.LEFT },
          },
        ],
        orientation: MenuOrientation.VERTICAL,
      },
      position: SubMenuPosition.UNDER,
    },
  },
  {
    label: "Catalog",
    leftIcon: "fa-solid fa-book-bookmark",
    submenu: {
      menu: {
        menuItems: [
          {
            label: "Home",
            leftIcon: "fa-solid fa-house-user",
            submenu: {
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
              position: SubMenuPosition.LEFT,
            },
          },
          {
            label: "Catalog",
            leftIcon: "fa-solid fa-rectangle-list",
            submenu: { position: SubMenuPosition.LEFT },
          },
          { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
          { label: "News", leftIcon: "fa-solid fa-radio" },
          {
            label: "Blog",
            leftIcon: "fa-solid fa-mug-hot",
            submenu: { position: SubMenuPosition.LEFT },
          },
        ],
        orientation: MenuOrientation.VERTICAL,
      },
      position: SubMenuPosition.UNDER,
    },
  },
  { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
  { label: "News", leftIcon: "fa-solid fa-radio" },
];
Header1.args = {
  headerMenu: { menuItems: menuItemList },
  navNotification: {
    like: { icon: "fa-regular fa-heart", value: 2 },
    cart: { icon: "fa-solid fa-cart-shopping", value: 5 },
  },
};
