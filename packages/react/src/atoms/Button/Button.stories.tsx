import React from "react";
import Button from "./Button";
import { Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;
const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
