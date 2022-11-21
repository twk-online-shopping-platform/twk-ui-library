import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { CardElementOrder, CardPosition, CardSize, ProductType } from "./Type";
import ProductCard from "./ProductCard";
import { ButtonSize, ButtonVariant } from "../../../atoms/Button/Type";
import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../../atoms/Typography/Type";
import { IconSize } from "../../../atoms/Icon/Type";
import Icon from "../../../atoms/Icon/Icon";
import Button from "../../../atoms/Button/Button";
import Container from "../../../template/Container/Container";
import {
  ContainerStyleType,
  FlexFlow,
  GapSize,
} from "../../../template/Container/Type";
import DiagonalTag from "../../../atoms/Graphics/Tag/DiagonalTag";
import { TagePosition } from "../../../atoms/Graphics/Tag/Type";
import BookMarkTag from "../../../atoms/Graphics/Tag/BookMarkTag";
import StarTag from "../../../atoms/Graphics/Tag/StarTag";

export default {
  title: "Molecules/Cards/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;
const Template: ComponentStory<typeof ProductCard> = (args: ProductType) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
const cardImageIcon = (
  <Icon cssValue="fa-regular fa-heart" description="Heart Icon" />
);
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
      leftIcon: {
        cssValue: "fa-solid fa-cart-shopping",
        size: IconSize.X_X_SMALL,
      },
      label: {
        text: "Add to Cart",
        size: TypographySize.EXTRA_SMALL,
        weight: TypographyWeight.BOLD,
      },
      variant: ButtonVariant.SECONDARY,
      size: ButtonSize.SMALL,
    },
  },
  description: "Gaming Headphone Image",
  imageRightComponent: cardImageIcon,
};

const rightIcons = (
  <Container
    type={ContainerStyleType.FLEX}
    flexFlow={FlexFlow.COLMN}
    flexGap={GapSize.EXTRA_EXTRA_SMALL}
    style="pdd-h-xxs pdd-v-xxs"
  >
    <div className="b-cr clr-bg-white-white pdd-v-xxs pdd-h-xxs">
      <Icon cssValue="fa-regular fa-heart" />
    </div>
    ,
    <div className="b-cr clr-bg-white-white pdd-v-xxs pdd-h-xxs">
      <Icon cssValue="fa-solid fa-magnifying-glass" />
    </div>
    ,
    <div className="b-cr clr-bg-white-white pdd-v-xxs pdd-h-xxs">
      <Icon cssValue="fa-solid fa-cart-shopping" />
    </div>
  </Container>
);
const leftTag = <DiagonalTag position={TagePosition.TOP_LEFT} />;
export const Small = Template.bind({});
Small.args = {
  productImage: {
    imageUrl:
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0a39ef41/images/large/637709281894939504-2263748.png?sw=2000&sh=2000&sm=fit&sfrm=png",
    hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
  },
  title: {
    text: {
      text: "Men Rolex",
      variant: TypographyVariant.HEADING,
      size: TypographySize.SMALL,
      weight: TypographyWeight.BOLD,
    },
    order: CardElementOrder.SECOND_ROW,
  },
  subTitle: {
    text: {
      text: "Watch",
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
  imageLeftComponent: leftTag,
  imageRightComponent: rightIcons,
};

const rightDiagonalTag = <DiagonalTag position={TagePosition.TOP_RIGHT} />;
export const NoSubTitle = Template.bind({});
NoSubTitle.args = {
  productImage: {
    imageUrl:
      "https://img.ltwebstatic.com/images3_pi/2020/08/27/159851121050fe1194fa7764f136203407f8a1e51c_thumbnail_900x.webp",
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
  imageRightComponent: rightDiagonalTag,
};

const saleTageBtn = (
  <Button
    label={"Sale"}
    variant={ButtonVariant.SECONDARY}
    style="clr-bg-no clr-txt-red-600 clr-b-red-600"
  />
);
export const Category = Template.bind({});
Category.args = {
  productImage: {
    imageUrl:
      "https://cdn.bitlanders.com/users/galleries/230043/canon_eos_7d_side_view_fa_rszd.jpg",
    hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
  },
  title: {
    text: {
      text: "Category",
      variant: TypographyVariant.HEADING,
      size: TypographySize.SMALL,
      weight: TypographyWeight.BOLD,
    },
    order: CardElementOrder.FIRST_ROW,
  },
  size: CardSize.SMALL,
  imageLeftComponent: saleTageBtn,
};

const bookmark = (
  <div className="pdd-h-xxs">
    <BookMarkTag position={TagePosition.TOP_LEFT} />
  </div>
);
export const CardWithBookmark = Template.bind({});
CardWithBookmark.args = {
  productImage: {
    imageUrl:
      "https://img.ltwebstatic.com/images3_pi/2020/08/27/159851121050fe1194fa7764f136203407f8a1e51c_thumbnail_900x.webp",
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
  imageLeftComponent: bookmark,
};

const bookmarkRight = (
  <div className="pdd-h-xs">
    <BookMarkTag position={TagePosition.TOP_RIGHT} />
  </div>
);
export const CardWithRightBookmark = Template.bind({});
CardWithRightBookmark.args = {
  productImage: {
    imageUrl:
      "https://img.ltwebstatic.com/images3_pi/2020/08/27/159851121050fe1194fa7764f136203407f8a1e51c_thumbnail_900x.webp",
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
  imageRightComponent: bookmarkRight,
};

const StarRight = (
  <div className="pdd-h-xs pdd-v-xs">
    <StarTag position={TagePosition.TOP_RIGHT} />
  </div>
);
export const CardWithRightStar = Template.bind({});
CardWithRightStar.args = {
  productImage: {
    imageUrl:
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0a39ef41/images/large/637709281894939504-2263748.png?sw=2000&sh=2000&sm=fit&sfrm=png",
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
  imageRightComponent: StarRight,
};

const StarLeft = (
  <div className="pdd-h-xs pdd-v-xxs">
    <StarTag position={TagePosition.TOP_LEFT} />
  </div>
);
export const CardWithLeftStar = Template.bind({});
CardWithLeftStar.args = {
  productImage: {
    imageUrl:
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0a39ef41/images/large/637709281894939504-2263748.png?sw=2000&sh=2000&sm=fit&sfrm=png",
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
  imageLeftComponent: StarLeft,
};
