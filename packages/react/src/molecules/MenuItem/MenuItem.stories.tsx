import React, { MouseEventHandler } from "react";
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
const mockFunction: MouseEventHandler = (e) => {
  console.log("target", e.target);
};
let menuItemList: MenuItemType[] = [
  {
    uniqueId: "1",
    parentsList: ["1"],
    label: "Electronics",
    leftIcon: "fa-solid fa-house-user",
    clickHanlder: mockFunction,
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
    clickHanlder: mockFunction,
  },
  {
    uniqueId: "8",
    parentsList: ["8"],
    label: "Automotive",
    leftIcon: "fa-solid fa-radio",
    clickHanlder: mockFunction,
  },
];
NoChildMenuItem.args = {
  label: "MenuItem1",
  uniqueId: "root",
  parentsList: ["root"],
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
    menu: {
      menuItems: menuItemList,
    },
    position: SubMenuPosition.UNDER,
  },
};
