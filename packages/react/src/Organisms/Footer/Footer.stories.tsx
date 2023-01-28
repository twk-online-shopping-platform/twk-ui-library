import Footer from "./Footer";
import { FooterType } from "./Type";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import { Icon, Rate, StarTag, Typography } from "../../atoms";
import React from "react";
import Container from "../../template/Container/Container";
import {
  ContainerStyleType,
  FlexFlow,
  GapSize,
  GridColumn,
} from "../../template/Container/Type";
import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import { ColorClassType } from "../../atoms/Color/Type";
import { TagePosition } from "../../atoms/Graphics/Tag/Type";
import Menu from "../../molecules/Menu/Menu";
import { MenuOrientation } from "../../molecules/Menu/Type";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;
const Template: ComponentStory<typeof Footer> = (args: FooterType) => (
  <Footer {...args} />
);
export const FooterWithMainTitle = Template.bind({});
FooterWithMainTitle.args = {};
