import React from "react";
import Button from "./Button";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import { ButtonType, ButtonVariant } from "./Type";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args: ButtonType) => (
  <Button {...args} />
);

const buttonClickHandler = (e: Event) => {
  console.log(e);
};
export const Primary = Template.bind({});
Primary.args = {
  clickHandler: buttonClickHandler,
};

export const Secondary = Template.bind({});
Secondary.args = {
  clickHandler: buttonClickHandler,
  variant: ButtonVariant.SECONDARY,
};
