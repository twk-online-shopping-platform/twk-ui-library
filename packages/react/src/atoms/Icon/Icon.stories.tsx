import React from "react";
import Icon from "./Icon";
import { Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as Meta;
const Template: Story = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
