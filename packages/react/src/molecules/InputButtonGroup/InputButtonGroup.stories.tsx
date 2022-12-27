import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@fortawesome/fontawesome-free/css/all.css";
import InputButtonGroup from "./InputButtonGroup";
import { InputButtonGroupType } from "./Type";
import { ButtondRadius } from "../../atoms/Button/Type";
import { TextFieldRadius } from "../../atoms/Field/Type";

export default {
  title: "Molecules/InputButtonGroup",
  component: InputButtonGroup,
} as ComponentMeta<typeof InputButtonGroup>;

const Template: ComponentStory<typeof InputButtonGroup> = (
  args: InputButtonGroupType
) => <InputButtonGroup {...args} />;
export const WithRadus = Template.bind({});
WithRadus.args = {
  buttonText: "Search",
};

export const WithNoRadus = Template.bind({});
WithNoRadus.args = {
  buttonText: "Search",
  buttonRadius: ButtondRadius.NONE,
  fieldRaddius: TextFieldRadius.NONE,
};
export const WithCurveRadus = Template.bind({});
WithCurveRadus.args = {
  buttonText: "Search",
  buttonRadius: ButtondRadius.LEFT_CURVE,
  fieldRaddius: TextFieldRadius.RIGHT_CURVE,
};
