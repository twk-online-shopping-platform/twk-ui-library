import React from "react";
import { screen, render } from "@testing-library/react";
import { ContainerStyleType, FlexFlow } from "./Type";
import ProductCard from "../../molecules/Card/ProductCard/ProductCard";
import Container from "./Container";
import {
  CardElementOrder,
  CardSize,
  CurrencyType,
} from "../../molecules/Card/ProductCard/Type";
import {
  TypographyVariant,
  TypographySize,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import { productCardTestid } from "../../molecules/Card/ProductCard/ProductConstants";

describe("Test Container Component", () => {
  it("should display container in a row", async () => {
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
        price={{
          amount: { text: "23.99" },
          discount: { text: "18.99" },
          order: CardElementOrder.FOUTH_ROW,
        }}
        currency={CurrencyType.USD}
        size={CardSize.SMALL}
      />
    );
    render(
      <Container type={ContainerStyleType.FLEX} flexFlow={FlexFlow.ROW}>
        {productCard} {productCard} {productCard}
      </Container>
    );
    const containerComps: any[] = await screen.getAllByTestId(
      productCardTestid
    );
    expect(containerComps.length).toBe(3);
  });
});
