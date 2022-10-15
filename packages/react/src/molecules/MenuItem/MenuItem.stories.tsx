import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import MenuItem from "./MenuItem";
import { MenuItemType, SubMenuPosition } from "./Type";

export default {
  title: "Molecules/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args: MenuItemType) => (
  <MenuItem {...args} />
);
export const NoChildMenuItem = Template.bind({});
NoChildMenuItem.args = {
  label: "MenuItem1",
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
