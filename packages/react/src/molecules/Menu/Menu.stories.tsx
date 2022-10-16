import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Menu from "./Menu";
import { MenuOrientation, MenuType } from "./Type";
import { MenuItemType } from "../MenuItem/Type";

export default {
  title: "Molecules/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: MenuType) => (
  <Menu {...args} />
);
export const HorizontalMenu = Template.bind({});
let menuItemList: MenuItemType[] = [
  { label: "Home", leftIcon: "fa-solid fa-house-user" },
  { label: "Catalog", leftIcon: "fa-solid fa-rectangle-list" },
  { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
  { label: "News", leftIcon: "fa-solid fa-radio" },
  { label: "Blog", leftIcon: "fa-solid fa-mug-hot" },
];

HorizontalMenu.args = {
  menuItems: menuItemList,
  orientation: MenuOrientation.HORIZONTAL,
};

export const VerticalMenu = Template.bind({});
let menuItemList2: MenuItemType[] = [
  { label: "Home", leftIcon: "fa-solid fa-house-user" },
  { label: "Catalog", leftIcon: "fa-solid fa-rectangle-list" },
  { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
  { label: "News", leftIcon: "fa-solid fa-radio" },
  { label: "Blog", leftIcon: "fa-solid fa-mug-hot" },
];

VerticalMenu.args = {
  menuItems: menuItemList2,
  orientation: MenuOrientation.VERTICAL,
};
