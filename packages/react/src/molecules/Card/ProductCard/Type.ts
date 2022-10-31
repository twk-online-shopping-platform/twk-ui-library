import { ButtonType } from "../../../atoms/Button/Type";
import { IconType } from "../../../atoms/Icon/Type";
import { ImageType } from "../../../atoms/Image/Type";
import { TagType } from "../../../atoms/Tag/Type";
import { TypographyType } from "../../../atoms/Typography/Type";

enum CurrencyType {
  USD,
  ETH,
}
enum CardElementOrder {
  FIRST_ROW,
  SECOND_ROW,
  THRID_ROW,
  FOUTH_ROW,
  FIFTH_ROW,
  SIXTH_ROW,
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
  value: number;
  order: CardElementOrder;
}
interface CardActionButton {
  value: ButtonType;
  order: CardElementOrder;
}

interface ProductType {
  productImage: ImageType;
  description: string;
  buttons: ButtonType[];
  icons: IconType[];
  tags: TagType[];
  title: CardText;
  subTitle: CardText;
  rating: CardRatting;
  price: CardPrice;
  currency: CurrencyType;
  actionButton: CardActionButton;
}

export { CurrencyType, CardElementOrder };
export type { ProductType, CardPrice, CardText, CardRatting, CardActionButton };
