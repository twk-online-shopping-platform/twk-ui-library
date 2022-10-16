import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchField from "./SearchField";
import { SearchFieldType } from "./Type";

export default {
  title: "Molecules/SearchField",
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (
  args: SearchFieldType
) => <SearchField {...args} />;
export const NoChildMenuItem = Template.bind({});
NoChildMenuItem.args = {
  buttonText: "hello",
};
