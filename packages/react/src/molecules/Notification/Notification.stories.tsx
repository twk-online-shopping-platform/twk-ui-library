import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Notification from "./Notification";
import Typography from "../../atoms/Typography/Typography";
import { DropDownPosition, NotificationIconType } from "./Type";
import { MenuOrientation, MenuType } from "../Menu/Type";
import Menu from "../Menu/Menu";

export default {
  title: "Molecules/Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;
const Template: ComponentStory<typeof Notification> = (
  args: NotificationIconType
) => <Notification {...args} />;

const subMenus = (
  <Menu
    menuItems={[
      {
        parentKey: "Like",
        label: "Electronics",
        leftIcon: "fa-solid fa-house-user",
        submenu: {
          menu: {
            menuItems: [
              {
                parentKey: "Electronics",
                label: "Furniture",
                leftIcon: "fa-solid fa-earth-americas",
              },
            ],
          },
        },
      },
      {
        label: "Hair Products",
        leftIcon: "fa-solid fa-rectangle-list",
        parentKey: "Like",
      },
      {
        label: "Furniture",
        leftIcon: "fa-solid fa-earth-americas",
        parentKey: "Like",
      },
      { label: "Automotive", leftIcon: "fa-solid fa-radio", parentKey: "Like" },
    ]}
    orientation={MenuOrientation.VERTICAL}
  />
);
export const Liked = Template.bind({});
Liked.args = {
  icon: "fa-solid fa-heart",
};

export const LikedWithDropDown = Template.bind({});
LikedWithDropDown.args = {
  icon: "fa-solid fa-heart",
  dropDownPosition: DropDownPosition.LEFT,
  dropDown: subMenus,
  description: "Wish List Dropdown",
};
