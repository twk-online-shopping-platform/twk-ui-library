import React from "react";
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

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownType) => (
  <Dropdown {...args} />
);
let menuItemList: MenuItemType[] = [
  { label: "Home", leftIcon: "fa-solid fa-house-user" },
  { label: "Catalog", leftIcon: "fa-solid fa-rectangle-list" },
  { label: "About us", leftIcon: "fa-solid fa-earth-americas" },
  { label: "News", leftIcon: "fa-solid fa-radio" },
  { label: "Blog", leftIcon: "fa-solid fa-mug-hot" },
];
export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  popupItems: menuItemList,
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
