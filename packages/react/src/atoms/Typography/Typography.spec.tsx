import React from "react";
import { render, screen } from "@testing-library/react";
import { TypographyType, TypographyVariant, TypographyWeight } from "./Type";
import Typography from "./Typography";
import { TypoDefaultText, TypographyTestId } from "./TypographyContants";

describe("Test Typography Component", () => {
  it("should display Typography", async () => {
    render(<Typography />);
    const typeComponent = await screen.getByTestId(TypographyTestId);
    expect(typeComponent).toBeInTheDocument();
    expect(typeComponent).toHaveTextContent(TypoDefaultText);
  });
  it(" Typography should accept TypographyType as a props", async () => {
    const typoTestText = "Test Text";
    const typographyProps: TypographyType = {
      text: typoTestText,
      variant: TypographyVariant.DISPLAY,
      weight: TypographyWeight.NORMAL,
    };
    render(<Typography {...typographyProps} />);
    const typeComponent = await screen.getByTestId(TypographyTestId);
    expect(typeComponent).toBeInTheDocument();
    expect(typeComponent).toHaveTextContent(typoTestText);
  });
});
