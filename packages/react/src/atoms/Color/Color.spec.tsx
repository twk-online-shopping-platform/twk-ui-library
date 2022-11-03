import React from "react";
import { screen, render } from "@testing-library/react";
import { colorTestId } from "./ColorContants";
import Color from "./Color";
import { ColorClassType, ColorWeight } from "./Type";

describe("Test Color Component", () => {
  it("should display Color Component", async () => {
    render(<Color color={ColorClassType.WHITE} weight={ColorWeight.ONE} />);
    const color = await screen.getByTestId(colorTestId);
    expect(color).toBeInTheDocument();
  });
});
