import { render, screen } from "@testing-library/react";
import React from "react";
import { imageTestId } from "../../../atoms/Image/ImageConstants";
import ProductCard from "./ProductCard";
import { productCardTestid } from "./ProductConstants";
import { CardElementOrder, CurrencyType } from "./Type";

describe("Test Image Component", () => {
  it("should display image", async () => {
    render(
      <ProductCard
        productImage={{
          imageUrl:
            "https://i.picsum.photos/id/1056/200/300.jpg?hmac=MBNGo7ZX2Cpxe1Kf-3yFedPHe48E9MRgIDoopaVSTqE",
          hashImagUrl: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
        }}
        description=""
        buttons={[]}
        tags={[]}
        icons={[]}
        title={{
          order: CardElementOrder.FIRST_ROW,
          text: { text: "Gaming Headphones" },
        }}
        subTitle={{
          order: CardElementOrder.SECOND_ROW,
          text: { text: "Headphone" },
        }}
        rating={{ value: 5, order: CardElementOrder.THRID_ROW }}
        price={{
          amount: { text: "32" },
          discount: { text: "22" },
          order: CardElementOrder.FOUTH_ROW,
        }}
        currency={CurrencyType.USD}
        actionButton={{
          order: CardElementOrder.FIFTH_ROW,
          value: { label: "Add to Cart" },
        }}
      />
    );
    const cardComponent = await screen.getByTestId(productCardTestid);
    expect(cardComponent).toBeInTheDocument();
    const imageComponent = await screen.getByTestId(imageTestId);
    expect(imageComponent).toBeInTheDocument();
  });
});
