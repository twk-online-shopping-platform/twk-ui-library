import React from "react";
import { screen, render } from "@testing-library/react";
import { footerTestId } from "./FooterConstants";
import Footer from "./Footer";
import { Typography } from "../../atoms";
import { ContainerComponentTestId } from "../../template/Container/ContainerConstants";

describe("Test Footer Ui Component", () => {
  it("should display container", async () => {
    const footerJsx = <Footer />;
    render(footerJsx);
    const footerComp: any[] = await screen.findAllByTestId(
      ContainerComponentTestId
    );
    expect(footerComp.length).toBeGreaterThan(1);
  });
});
