import React from "react";
import { Meta, Story } from "@storybook/react";
import "@fortawesome/fontawesome-free/css/all.css";
import Color from "./Color";
import { ColorClassType, ColorWeight } from "./Type";

export default {
  title: "Atoms/Color",
  component: Color,
} as Meta;
const Template: Story = (args) => <Color {...args} />;

export const Gray = Template.bind({});
Gray.args = { color: ColorClassType.GRAY, weight: ColorWeight.NINE };

export const Red = Template.bind({});
Red.args = { color: ColorClassType.RED, weight: ColorWeight.FIVE };

export const Green = Template.bind({});
Green.args = { color: ColorClassType.GREEN, weight: ColorWeight.FOUR };
