import { render, screen } from "@testing-library/react";
import React from "react";
import Icon from "../../../atoms/Icon/Icon";
import { IconTestId } from "../../../atoms/Icon/IconConstants";
import { imageTestId } from "../../../atoms/Image/ImageConstants";
import Container from "../../../template/Container/Container";
import { ContainerStyleType } from "../../../template/Container/Type";
import ProductCard from "./ProductCard";
import { productCardTestid } from "./ProductConstants";
import { CardElementOrder, CardSize, CurrencyType } from "./Type";

describe("Test Image Component", () => {
  it("should display image", async () => {
    const title: string = "Gaming Headphones";
    const subtitle: string = "Headphone";
    const rightImageComp = (
      // <Container type={ContainerStyleType.FLEX}>
      <Icon cssValue="fa-regular fa-heart" description="Heart Icon" />
      // </Container>
    );
    render(
      <ProductCard
        productImage={{
          imageUrl:
            "https://i.picsum.photos/id/1056/200/300.jpg?hmac=MBNGo7ZX2Cpxe1Kf-3yFedPHe48E9MRgIDoopaVSTqE",
          hashImagUrl: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
        }}
        description="test"
        imageRightComponent={rightImageComp}
        title={{
          order: CardElementOrder.FIRST_ROW,
          text: { text: title },
        }}
        subTitle={{
          order: CardElementOrder.SECOND_ROW,
          text: { text: subtitle },
        }}
        rating={{
          value: { value: 4, max: 5 },
          order: CardElementOrder.THRID_ROW,
        }}
        price={{
          amount: { text: " 32 " },
          discount: { text: " 22 " },
          order: CardElementOrder.FOUTH_ROW,
        }}
        currency={CurrencyType.USD}
        actionButton={{
          order: CardElementOrder.FIFTH_ROW,
          value: { label: " Add to Cart " },
        }}
        size={CardSize.EXTRA_SMALL}
        hashBorder={false}
      />
    );
    const cardComponent = await screen.getByTestId(productCardTestid);
    expect(cardComponent).toBeInTheDocument();
    const imageComponent = await screen.getByTestId(imageTestId);
    expect(imageComponent).toBeInTheDocument();
    const titleComp = await screen.getByText(title);
    expect(titleComp).toBeInTheDocument();
    const subtitleComp = await screen.getByText(subtitle);
    expect(subtitleComp).toBeInTheDocument();
    const iconComp: any[] = await screen.getAllByTestId(IconTestId);
    expect(iconComp.length).toBe(6);
  });
});
