import React, { MouseEventHandler } from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Notification from "./Notification";
import Typography from "../../atoms/Typography/Typography";
import { DropDownPosition, NotificationType } from "./Type";
import { MenuOrientation, MenuType } from "../Menu/Type";
import Menu from "../Menu/Menu";
import ProductCard from "../Card/ProductCard/ProductCard";
import {
  CardElementOrder,
  CurrencyType,
  CardSize,
  CardPosition,
} from "../Card/ProductCard/Type";
import Container from "../../template/Container/Container";
import {
  ContainerStyleType,
  FlexFlow,
  GapSize,
} from "../../template/Container/Type";
import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import { IconSize } from "../../atoms/Icon/Type";

export default {
  title: "Molecules/Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;
const Template: ComponentStory<typeof Notification> = (
  args: NotificationType
) => <Notification {...args} />;

const mockFunction: MouseEventHandler = (e) => {
  console.log("mock story: ", e.target);
};

const subMenus = (
  <Menu
    menuItems={[
      {
        uniqueId: "1",
        parentsList: ["1"],
        label: "Electronics",
        leftIcon: "fa-solid fa-house-user",
        submenu: {
          menu: {
            menuItems: [
              {
                uniqueId: "2",
                parentsList: ["1", "2"],
                label: "Hair Product",
                leftIcon: "fa-solid fa-earth-americas",
                submenu: {
                  menu: {
                    menuItems: [
                      {
                        uniqueId: "3",
                        parentsList: ["1", "2", "3"],
                        label: "Shampo",
                        leftIcon: "fa-solid fa-earth-americas",
                        clickHanlder: mockFunction,
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        uniqueId: "4",
        parentsList: ["4"],
        label: "Art",
        leftIcon: "fa-solid fa-rectangle-list",
        clickHanlder: mockFunction,
      },
      {
        uniqueId: "5",
        parentsList: ["5"],
        label: "Furniture",
        leftIcon: "fa-solid fa-earth-americas",
        submenu: {
          menu: {
            menuItems: [
              {
                uniqueId: "6",
                parentsList: ["5", "6"],
                label: "Shoes",
                leftIcon: "fa-solid fa-earth-americas",
                submenu: {
                  menu: {
                    menuItems: [
                      {
                        uniqueId: "7",
                        parentsList: ["5", "6", "7"],
                        label: "Nike",
                        leftIcon: "fa-solid fa-earth-americas",
                        clickHanlder: mockFunction,
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        uniqueId: "8",
        parentsList: ["8"],
        label: "Automotive",
        leftIcon: "fa-solid fa-radio",
        clickHanlder: mockFunction,
      },
    ]}
    orientation={MenuOrientation.VERTICAL}
  />
);
export const Liked = Template.bind({});
Liked.args = {
  icon: "fa-solid fa-heart",
};

export const LikedWithDropDown = Template.bind({});
LikedWithDropDown.args = {
  icon: "fa-solid fa-heart",
  dropDownPosition: DropDownPosition.LEFT,
  dropDown: subMenus,
  description: "Wish List Dropdown",
};

const card = (
  <Container
    type={ContainerStyleType.FLEX}
    flexFlow={FlexFlow.ROW}
    flexGap={GapSize.EXTRA_SMALL}
  >
    <Typography
      text="Add to cart"
      nowrapText
      cssClasses="clr-txt-lnk"
      variant={TypographyVariant.TEXT}
      size={TypographySize.MEDIUM}
      weight={TypographyWeight.BOLD}
      handler={{
        clickHandler: (e) => {
          console.log(e);
        },
      }}
    />
    <Notification
      icon="fa-solid fa-heart"
      iconSize={IconSize.X_SMALL}
      value={5}
    />
  </Container>
);

const cardContainer = (
  <React.Fragment>
    {card}
    {card}
  </React.Fragment>
);
export const LikedWithDropDownOfCard = Template.bind({});
LikedWithDropDownOfCard.args = {
  icon: "fa-solid fa-heart",
  dropDownPosition: DropDownPosition.LEFT,
  dropDown: cardContainer,
  description: "Wish List Dropdown",
  iconSize: IconSize.MDIUM,
};
