import React, { useId } from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@fortawesome/fontawesome-free/css/all.css";

import {
  CurrencyType,
  CardSize,
  CardElementOrder,
} from "../../molecules/Card/ProductCard/Type";
import Container from "./Container";
import {
  TypographyVariant,
  TypographySize,
  TypographyWeight,
  TypographyColor,
} from "../../atoms/Typography/Type";
import ProductCard from "../../molecules/Card/ProductCard/ProductCard";
import { ContainerStyleType, ContainerType, FlexFlow, GapSize } from "./Type";
import {
  ButtondRadius,
  ButtonSize,
  ButtonVariant,
} from "../../atoms/Button/Type";
import { IconSize } from "../../atoms/Icon/Type";
import Typography from "../../atoms/Typography/Typography";
import { VerticalMenu } from "../../molecules/Menu/Menu.stories";
import { MenuOrientation } from "../../molecules/Menu/Type";
import { MenuItemType } from "../../molecules/MenuItem/Type";
import Menu from "../../molecules/Menu/Menu";
import { ColorClassType } from "../../atoms/Color/Type";
import Icon from "../../atoms/Icon/Icon";

// const prd1Id = useId();
// const prd2Id = useId();
// const prd3Id = useId();
// const prd4Id = useId();
// const prd5Id = useId();
// const prd6Id = useId();
// const prdId = useId();

const productCard = (
  <ProductCard
    productImage={{
      imageUrl:
        "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
      hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
    }}
    description={""}
    title={{
      text: {
        text: "Gaming Headphone",
        variant: TypographyVariant.HEADING,
        size: TypographySize.SMALL,
        weight: TypographyWeight.BOLD,
      },
      order: CardElementOrder.SECOND_ROW,
    }}
    subTitle={{
      text: {
        text: "Headphone",
        variant: TypographyVariant.TEXT,
        size: TypographySize.SMALL,
      },
      order: CardElementOrder.FIRST_ROW,
    }}
    rating={{
      order: CardElementOrder.THRID_ROW,
      value: { value: 3, max: 5, size: IconSize.X_X_SMALL },
    }}
    price={{
      amount: { text: "23.99" },
      discount: { text: "18.99" },
      order: CardElementOrder.FOUTH_ROW,
    }}
    actionButton={{
      order: CardElementOrder.FIFTH_ROW,
      value: {
        label: {
          text: "Add to Cart",
          size: TypographySize.EXTRA_EXTRA_SMALL,
        },
        variant: ButtonVariant.SECONDARY,
        radius: ButtondRadius.CURVE,
        leftIcon: {
          cssValue: "fa-solid fa-cart-shopping",
          size: IconSize.X_X_SMALL,
        },
        size: ButtonSize.SMALL,
      },
    }}
    currency={CurrencyType.USD}
    size={CardSize.EXTRA_SMALL}
    hashBorder={false}
  />
);

const prodCard2 = (
  <ProductCard
    {...productCard.props}
    {...{
      productImage: {
        hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",

        imageUrl:
          "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-3520/media-gallery/peripherals_latop_latitude_3520_gallery_3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3339&hei=2291&qlt=100,1&resMode=sharp2&size=3339,2291&chrss=full&imwidth=5000",
      },
    }}
  />
);

const prodCard3 = (
  <ProductCard
    {...productCard.props}
    {...{
      productImage: {
        hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        imageUrl:
          "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0a39ef41/images/large/637709281894939504-2263748.png?sw=2000&sh=2000&sm=fit&sfrm=png",
      },
    }}
  />
);
const prodCard4 = (
  <ProductCard
    {...productCard.props}
    {...{
      productImage: {
        hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        imageUrl:
          "https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950/products/2018/36/280/g280R24105-F.jpg",
      },
    }}
  />
);
const prodCard5 = (
  <ProductCard
    {...productCard.props}
    {...{
      productImage: {
        hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        imageUrl:
          "https://michaelkors.scene7.com/is/image/MichaelKors/30F8GV6T2B-0200_1?wid=1300",
      },
    }}
  />
);
const prodCard6 = (
  <ProductCard
    {...productCard.props}
    {...{
      productImage: {
        hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        imageUrl:
          "https://images.ray-ban.com/is/image/RayBan/8056597489478__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2",
      },
    }}
  />
);
const prodCard7 = (
  <ProductCard
    {...productCard.props}
    {...{
      productImage: {
        hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        imageUrl:
          "https://static.fully.com/image/upload/c_limit,dpr_2.0,f_auto,h_700,q_auto,w_700/v1/media/catalog/product/f/u/fully-jarvis-standing-desk-white-whiteboard-c-v1.jpg",
      },
    }}
  />
);

export default {
  title: "Template/Container",
  component: Container,
} as ComponentMeta<typeof Container>;
const Template: ComponentStory<typeof Container> = (args: ContainerType) => (
  <Container {...args}></Container>
);

export const FlexRow = Template.bind({});
FlexRow.args = {
  children: [
    productCard,
    prodCard3,
    prodCard2,
    prodCard5,
    prodCard6,
    prodCard4,
  ],
  type: ContainerStyleType.FLEX,
};
export const FlexRowWrap = Template.bind({});
FlexRowWrap.args = {
  children: [
    productCard,
    prodCard3,
    prodCard2,
    prodCard5,
    prodCard6,
    prodCard4,
    prodCard7,
  ],
  type: ContainerStyleType.FLEX,
  flexWrap: true,
};
export const FlexColmn = Template.bind({});
FlexColmn.args = {
  children: [
    productCard,
    prodCard3,
    prodCard2,
    prodCard5,
    prodCard6,
    prodCard4,
  ],
  type: ContainerStyleType.FLEX,
  flexFlow: FlexFlow.COLMN,
};

export const GridContainer = Template.bind({});
GridContainer.args = {
  children: [
    productCard,
    prodCard3,
    prodCard2,
    prodCard5,
    prodCard6,
    prodCard4,
    prodCard7,
  ],
  type: ContainerStyleType.GRID,
};
export const ContainerWithSubContainer = Template.bind({});
const subContainer = (
  <Container
    type={ContainerStyleType.FLEX}
    children={[
      productCard,
      prodCard3,
      prodCard2,
      prodCard5,
      prodCard6,
      prodCard4,
      prodCard7,
    ]}
    flexWrap={true}
  />
);
const title = (
  <Typography text="Our Top Collection" variant={TypographyVariant.DISPLAY} />
);
const subtitle = (
  <Typography
    text="Browse the collection products"
    variant={TypographyVariant.TEXT}
    color={{ type: ColorClassType.GRAY, value: "700" }}
  />
);
let menuItemList2: MenuItemType[] = [
  { uniqueId: "5", parentsList: ["5"], label: "Home" },
  { uniqueId: "5", parentsList: ["5"], label: "Catalog" },
  { uniqueId: "5", parentsList: ["5"], label: "About us" },
  { uniqueId: "5", parentsList: ["5"], label: "News" },
  { uniqueId: "5", parentsList: ["5"], label: "Blog" },
];

const galleryMenu = (
  <Menu menuItems={menuItemList2} orientation={MenuOrientation.HORIZONTAL} />
);

ContainerWithSubContainer.args = {
  children: [title, subtitle, galleryMenu, subContainer],
  type: ContainerStyleType.FLEX,
  flexFlow: FlexFlow.COLMN,
  flexGap: GapSize.SMALL,
};
