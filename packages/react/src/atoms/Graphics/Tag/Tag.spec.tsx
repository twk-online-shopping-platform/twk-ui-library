import React from "react";
import { screen, render } from "@testing-library/react";
import DiagonalTag from "./BookMarkTag";
import { diagonalTagTestId } from "./TagConstants";
import { TagePosition } from "./Type";

describe("Test Tag Components", () => {
  it("should display round button tag", async () => {
    render(<DiagonalTag position={TagePosition.TOP_LEFT} />);
    const diagonalTagComp = await screen.getByTestId(diagonalTagTestId);
    expect(diagonalTagComp).toBeInTheDocument();
  });
  it("should display bookmark tag", async () => {});
  it("should display top right diagonal tag", async () => {});
  it("should display star tag", async () => {});
});
