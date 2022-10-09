import React from "react";
import TextField from "./TextField";
import { Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as Meta;
const Template: Story = (args) => <TextField type="text" placeholder="Name" />;

export const Primary = Template.bind({});
