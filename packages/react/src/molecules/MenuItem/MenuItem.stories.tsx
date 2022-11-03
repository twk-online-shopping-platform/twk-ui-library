import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import MenuItem from "./MenuItem";
import { MenuItemType, SubMenuPosition } from "./Type";
import { MenuOrientation } from "../Menu/Type";

export default {
  title: "Molecules/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args: MenuItemType) => (
  <MenuItem {...args} />
);
export const NoChildMenuItem = Template.bind({});
let menuItemList: MenuItemType[] = [
  { label: "Home", leftIcon: "fa-solid fa-house-user" },
  { label: "Catalog", leftIcon: "fa-solid fa-rectangle-list" },
  { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
  { label: "News", leftIcon: "fa-solid fa-radio" },
  { label: "Blog", leftIcon: "fa-solid fa-mug-hot" },
];
NoChildMenuItem.args = {
  label: "MenuItem1",
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
};
export const Expanded = Template.bind({});
Expanded.args = {
  label: "MenuItem1",
  rightIcon: {
    openValue: "fa-solid fa-minus",
    closeValue: "fa-sharp fa-solid fa-plus",
  },
  submenu: {
    position: SubMenuPosition.LEFT,
  },
};

export const AboutUs = Template.bind({});
AboutUs.args = {
  label: "About Us",
  leftIcon: "fa-solid fa-earth-africa",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: "Catalog",
  leftIcon: "fa-regular fa-rectangle-list",
  rightIcon: {
    openValue: "fa-solid fa-angle-down",
    closeValue: "fa-sharp fa-solid fa-angle-left",
  },
  submenu: {
    position: SubMenuPosition.UNDER,
  },
};
