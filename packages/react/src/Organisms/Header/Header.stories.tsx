import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { HeaderType } from "./Type";
import Header from "./Header";
import { MenuItemType } from "../../molecules/MenuItem/Type";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderType) => (
  <Header {...args} />
);
export const HeaderDefault = Template.bind({});
const menuItemList: MenuItemType[] = [
  {
    label: "Home",
    leftIcon: "fa-solid fa-house-user",
  },
  {
    label: "Catalog",
    leftIcon: "fa-solid fa-rectangle-list",
  },
  { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
  { label: "News", leftIcon: "fa-solid fa-radio" },
];
HeaderDefault.args = {
  headerMenu: { menuItems: menuItemList },
};
