import React, { useId } from "react";
import { productCardTestid } from "./ProductConstants";
import {
  CardActionButton,
  CardElementOrder,
  CardIconype,
  CardPosition,
  CardPrice,
  CardRatting,
  CardTagType,
  CardText,
  ProductType,
} from "./Type";
import Image from "../../../atoms/Image/Image";
import Typography from "../../../atoms/Typography/Typography";
import Button from "../../../atoms/Button/Button";
import Icon from "../../../atoms/Icon/Icon";
import Rate from "../../../atoms/Graphics/Rate/Rate";
const ProductCard = ({
  productImage,
  title,
  subTitle,
  price,
  rating,
  actionButton,
  imageLeftComponent,
  imageRightComponent,
  size,
  hashBorder,
  description,
}: ProductType) => {
  const row1Id = useId();
  const row2Id = useId();
  const row3Id = useId();
  const row4Id = useId();
  const row5Id = useId();
  const cardId = useId();
  return (
    <div
      key={cardId}
      data-testid={productCardTestid}
      className={`flx-v flx-v-lft pdd-h-sm pdd-v-sm ${
        hashBorder ? "b-rd b-rd-gray b-style-s" : ""
      } clr-bg-white-white  crd-${size ? size : "sm"}`}
    >
      <div className="rel  pdd-v-b-sm ">
        <Image
          {...productImage}
          description={
            productImage.description ? productImage.description : description
          }
        />
        {imageLeftComponent ? (
          <div className="abs-t-lft">{imageLeftComponent}</div>
        ) : null}
        {imageRightComponent ? (
          <div className="abs-t-rgt">{imageRightComponent}</div>
        ) : null}
      </div>
      <div className="flx-v flx-gap-sm dvc-full ">
        {getRowElement(
          CardElementOrder.FIRST_ROW,
          title,
          subTitle,
          price,
          rating,
          actionButton,
          row1Id.toString()
        )}
        {getRowElement(
          CardElementOrder.SECOND_ROW,
          title,
          subTitle,
          price,
          rating,
          actionButton,
          row2Id
        )}
        {getRowElement(
          CardElementOrder.THRID_ROW,
          title,
          subTitle,
          price,
          rating,
          actionButton,
          row3Id
        )}
        {getRowElement(
          CardElementOrder.FOUTH_ROW,
          title,
          subTitle,
          price,
          rating,
          actionButton,
          row4Id
        )}
        {getRowElement(
          CardElementOrder.FIFTH_ROW,
          title,
          subTitle,
          price,
          rating,
          actionButton,
          row5Id
        )}
      </div>
    </div>
  );
};

const getRowElement = (
  order: CardElementOrder,
  title: CardText | undefined,
  subTitle: CardText | undefined,
  price: CardPrice | undefined,
  rating: CardRatting | undefined,
  actionBtn: CardActionButton | undefined,
  key: string
): React.ReactNode => {
  if (title && title.order && title.order === order) {
    return <Typography {...title.text} key={key} />;
  } else if (subTitle && subTitle.order && subTitle.order === order) {
    return (
      <Typography {...subTitle.text} key={key} cssClasses="clr-txt-gray-700" />
    );
  } else if (price && price.order && price.order === order) {
    return (
      <div className="flx-h flx-gap-xl">
        {price.discount ? (
          <Typography
            {...price.discount}
            key={key}
            cssClasses="typo-strick clr-txt-gray-600"
          />
        ) : null}
        <Typography {...price.amount} />
      </div>
    );
  } else if (rating && rating.order && rating.order === order) {
    return (
      <Rate
        {...rating.value}
        style={{ open: "clr-txt-gray-500", solid: "clr-txt-yellow-600" }}
      />
    );
  } else if (actionBtn && actionBtn.order && actionBtn.order === order)
    return (
      <div className="pdd-v-sm">
        <Button {...actionBtn?.value} key={key} />
      </div>
    );
  return <></>;
};

const getLeftComponents = (
  iconList: CardIconype | undefined,
  tagList: CardTagType | undefined
) => {
  let rightComp = null;
  if (iconList && iconList.icons && iconList.position === CardPosition.LEFT) {
    rightComp = iconList.icons.map((icon) => {
      const iconKey = useId();
      return (
        <div className="b-cr clr-bg-white-white">
          <Icon {...icon} key={iconKey} />
        </div>
      );
    });
  }
  if (tagList && tagList.tags && tagList.position === CardPosition.LEFT) {
    rightComp?.concat(
      tagList.tags.map((tag) => {
        const tagKey = useId();
        return <Icon {...tag} key={tagKey} />;
      })
    );
  }
  return rightComp ? <div className="abs-t-lft">{rightComp}</div> : null;
};

export default ProductCard;
