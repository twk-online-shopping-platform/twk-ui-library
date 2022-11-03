import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

  it(" Typography should accept Event Handler", async () => {
    const typoTestText = "Test Text";
    const mockFun = jest.fn();
    const typographyProps: TypographyType = {
      text: typoTestText,
      variant: TypographyVariant.DISPLAY,
      weight: TypographyWeight.NORMAL,
      handler: {
        clickHandler: () => mockFun(),
      },
    };
    render(<Typography {...typographyProps} />);
    const typeComponent = await screen.getByTestId(TypographyTestId);
    await fireEvent.click(typeComponent);
    expect(mockFun.mock.calls.length).toBe(1);
  });
});
