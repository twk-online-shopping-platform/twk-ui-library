import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { CardElementOrder, CardPosition, ProductType } from "./Type";
import ProductCard from "./ProductCard";
import { ButtonSize, ButtonVariant } from "../../../atoms/Button/Type";
import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../../atoms/Typography/Type";

export default {
  title: "Molecules/Cards/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;
const Template: ComponentStory<typeof ProductCard> = (args: ProductType) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  productImage: {
    imageUrl:
      "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
    hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
  },
  title: {
    text: {
      text: "Gaming Headphone",
      variant: TypographyVariant.HEADING,
      size: TypographySize.SMALL,
      weight: TypographyWeight.BOLD,
    },
    order: CardElementOrder.SECOND_ROW,
  },
  subTitle: {
    text: {
      text: "Headphone",
      variant: TypographyVariant.TEXT,
      size: TypographySize.EXTRA_SMALL,
    },
    order: CardElementOrder.FIRST_ROW,
  },
  rating: { order: CardElementOrder.THRID_ROW, value: { value: 3, max: 6 } },
  price: {
    amount: { text: "$23.99" },
    discount: { text: "$18.99" },
    order: CardElementOrder.FOUTH_ROW,
  },
  actionButton: {
    order: CardElementOrder.FIFTH_ROW,
    value: {
      leftIcon: "fa-solid fa-cart-shopping",
      label: "Add to Cart",
      variant: ButtonVariant.SECONDARY,
      size: ButtonSize.SMALL,
    },
  },
  iconList: {
    icons: [{ cssValue: "fa-regular fa-heart" }],
    position: CardPosition.RIGHT,
  },
};

export const Small = Template.bind({});
Small.args = {
  productImage: {
    imageUrl:
      "https://secure.img1-fg.wfcdn.com/im/50782487/resize-h755-w755%5Ecompr-r85/1840/184065343/Height+Adjustable+Standing+Desk.jpg",
    hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
  },
  title: {
    text: {
      text: "Gaming Headphone",
      variant: TypographyVariant.HEADING,
      size: TypographySize.SMALL,
      weight: TypographyWeight.BOLD,
    },
    order: CardElementOrder.SECOND_ROW,
  },
  subTitle: {
    text: {
      text: "Headphone",
      variant: TypographyVariant.TEXT,
      size: TypographySize.EXTRA_SMALL,
    },
    order: CardElementOrder.FIRST_ROW,
  },
  rating: { order: CardElementOrder.THRID_ROW, value: { value: 4, max: 5 } },
  price: {
    amount: { text: "$23.99" },
    discount: { text: "$18.99" },
    order: CardElementOrder.FOUTH_ROW,
  },
  actionButton: {
    order: CardElementOrder.FIFTH_ROW,
    value: {
      leftIcon: "fa-solid fa-cart-shopping",
      label: "Add to Cart",
      variant: ButtonVariant.SECONDARY,
      size: ButtonSize.SMALL,
    },
  },
  iconList: {
    icons: [
      { cssValue: "fa-regular fa-heart" },
      { cssValue: "fa-solid fa-magnifying-glass" },
      { cssValue: "fa-solid fa-cart-shopping" },
    ],
    position: CardPosition.RIGHT,
  },
};

export const NoSubTitle = Template.bind({});
NoSubTitle.args = {
  productImage: {
    imageUrl:
      "https://secure.img1-fg.wfcdn.com/im/50782487/resize-h755-w755%5Ecompr-r85/1840/184065343/Height+Adjustable+Standing+Desk.jpg",
    hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
  },
  title: {
    text: {
      text: "Gaming Headphone",
      variant: TypographyVariant.HEADING,
      size: TypographySize.SMALL,
      weight: TypographyWeight.BOLD,
    },
    order: CardElementOrder.FIRST_ROW,
  },
  rating: { order: CardElementOrder.THRID_ROW, value: { value: 4, max: 5 } },
  price: {
    amount: { text: "$23.99" },
    discount: { text: "$18.99" },
    order: CardElementOrder.SECOND_ROW,
  },
};

export const Category = Template.bind({});
Category.args = {
  productImage: {
    imageUrl:
      "https://secure.img1-fg.wfcdn.com/im/50782487/resize-h755-w755%5Ecompr-r85/1840/184065343/Height+Adjustable+Standing+Desk.jpg",
    hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
  },
  title: {
    text: {
      text: "Gaming Headphone",
      variant: TypographyVariant.HEADING,
      size: TypographySize.SMALL,
      weight: TypographyWeight.BOLD,
    },
    order: CardElementOrder.FIRST_ROW,
  },
};
