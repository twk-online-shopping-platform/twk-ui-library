import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import Rate from "./Rate";
import { RateType } from "./Type";

export default {
  title: "Atoms/Graphics/Rate",
  component: Rate,
} as ComponentMeta<typeof Rate>;
const Template: ComponentStory<typeof Rate> = (args: RateType) => (
  <Rate {...args} />
);

export const Rate3OutOf5 = Template.bind({});
Rate3OutOf5.args = {
  value: 3,
  style: {
    open: "clr-txt-gray-600",
    solid: "clr-txt-yellow-500",
  },
};

export const Rate7OutOf10 = Template.bind({});
Rate7OutOf10.args = {
  value: 7,
  max: 10,
  style: {
    open: "clr-txt-gray-500",
    solid: "clr-txt-red-500",
  },
};
