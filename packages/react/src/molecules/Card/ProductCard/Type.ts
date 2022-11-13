import { ButtonType } from "../../../atoms/Button/Type";
import { IconType } from "../../../atoms/Icon/Type";
import { ImageType } from "../../../atoms/Image/Type";
import { TagType } from "../../../atoms/Graphics/Tag/Type";
import { TypographyType } from "../../../atoms/Typography/Type";
import { RateType } from "../../../atoms/Graphics/Rate/Type";
import { ReactNode } from "react";

enum CurrencyType {
  USD,
  ETH,
}
enum CardElementOrder {
  FIRST_ROW = 1,
  SECOND_ROW = 2,
  THRID_ROW = 3,
  FOUTH_ROW = 4,
  FIFTH_ROW = 5,
  SIXTH_ROW = 6,
}

interface CardText {
  text: TypographyType;
  order: CardElementOrder;
}
interface CardPrice {
  amount: TypographyType;
  discount: TypographyType;
  order: CardElementOrder;
}
interface CardRatting {
  value: RateType;
  order: CardElementOrder;
}
interface CardActionButton {
  value: ButtonType;
  order: CardElementOrder;
}

enum CardPosition {
  LEFT = 1,
  RIGHT = 2,
}
enum CardSize {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  MIDIUM = "md",
  LARGE = "lg",
  EXTRA_LARGE = "xl",
}

interface CardTagType {
  tags: TagType[];
  position: CardPosition;
}
interface CardIconype {
  icons: IconType[];
  position: CardPosition;
}

interface ProductType {
  productImage: ImageType;
  description: string;
  imageLeftComponent?: ReactNode;
  imageRightComponent?: ReactNode;
  title: CardText;
  subTitle: CardText;
  rating?: CardRatting;
  price: CardPrice;
  currency: CurrencyType;
  actionButton?: CardActionButton;
  size: CardSize;
  hashBorder: boolean;
}

export { CurrencyType, CardElementOrder, CardPosition, CardSize };
export type {
  ProductType,
  CardPrice,
  CardText,
  CardRatting,
  CardActionButton,
  CardIconype,
  CardTagType,
};
