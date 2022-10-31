import React from "react";
import { productCardTestid } from "./ProductConstants";
import {
  CardActionButton,
  CardElementOrder,
  CardPrice,
  CardRatting,
  CardText,
  ProductType,
} from "./Type";
import Image from "../../../atoms/Image/Image";
import Typography from "../../../atoms/Typography/Typography";
import { TypographyType } from "../../../atoms/Typography/Type";
import { IconType } from "../../../atoms/Icon/Type";
import { TagType } from "../../../atoms/Tag/Type";
import { ButtonType } from "../../../atoms/Button/Type";
import Button from "../../../atoms/Button/Button";

const ProductCard = ({
  productImage,
  title,
  subTitle,
  price,
  rating,
  actionButton,
}: ProductType) => {
  return (
    <div data-testid={productCardTestid}>
      <div>
        <Image
          imageUrl={productImage.imageUrl}
          hashImagUrl={productImage.hashImagUrl ? productImage.hashImagUrl : ""}
        />
        <div>left</div>
        <div>right</div>
      </div>
      {getRowElement(
        CardElementOrder.FIRST_ROW,
        title,
        subTitle,
        price,
        rating,
        actionButton
      )}
      {getRowElement(
        CardElementOrder.SECOND_ROW,
        title,
        subTitle,
        price,
        rating,
        actionButton
      )}
      {getRowElement(
        CardElementOrder.THRID_ROW,
        title,
        subTitle,
        price,
        rating,
        actionButton
      )}
      {getRowElement(
        CardElementOrder.FOUTH_ROW,
        title,
        subTitle,
        price,
        rating,
        actionButton
      )}
      {getRowElement(
        CardElementOrder.FIFTH_ROW,
        title,
        subTitle,
        price,
        rating,
        actionButton
      )}
    </div>
  );
};

export default ProductCard;

function getRowElement(
  order: CardElementOrder,
  title: CardText | undefined,
  subTitle: CardText | undefined,
  price: CardPrice | undefined,
  rating: CardRatting | undefined,
  actionBtn: CardActionButton | undefined
): React.ReactNode {
  if (title && title.order && title.order === order)
    return <Typography {...title.text} />;
  if (subTitle && subTitle.order && subTitle.order === order)
    return <Typography {...subTitle.text} />;
  if (price && price.order && price.order === order)
    return (
      <div>
        <Typography {...price.amount} />
        {price.discount ? <Typography {...price.discount} /> : null}
      </div>
    );
  if (rating && rating.order && rating.order === order) return <></>;
  if (actionBtn && actionBtn.order && actionBtn.order === order)
    return <Button {...actionBtn?.value} />;
  return <></>;
}
