import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import NotificationIcon from "./NotificationIcon";
import {
  TypographyType,
  TypographyVariant,
  TypographyWeight,
  TypographySize,
} from "../Typography/Type";
import Typography from "../Typography/Typography";
import { NotificationIconType } from "./Type";

export default {
  title: "Atoms/NotificationIcon",
  component: NotificationIcon,
} as ComponentMeta<typeof NotificationIcon>;
const Template: ComponentStory<typeof NotificationIcon> = (
  args: NotificationIconType
) => <NotificationIcon {...args} />;

export const Liked = Template.bind({});
Liked.args = {
  icon: "fa-solid fa-heart",
};
