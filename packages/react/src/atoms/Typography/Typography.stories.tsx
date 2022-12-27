import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@fortawesome/fontawesome-free/css/all.css";
import Typography from "./Typography";
import {
  TypographySize,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from "./Type";

export default {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Typography>;
const Template: ComponentStory<typeof Typography> = (args: TypographyType) => (
  <Typography {...args} />
);

export const Display = Template.bind({});
Display.args = {
  text: "Display Typography",
  variant: TypographyVariant.DISPLAY,
  weight: TypographyWeight.BOLD,
  size: TypographySize.MEDIUM,
};

export const Button = Template.bind({});
Button.args = {
  text: "Button Typography",
  variant: TypographyVariant.BUTTON,
  weight: TypographyWeight.MDIUM,
  size: TypographySize.MEDIUM,
};
