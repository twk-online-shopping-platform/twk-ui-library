import { render, screen } from "@testing-library/react";
import React from "react";
import { IconTestId } from "../../Icon/IconConstants";
import Rate from "./Rate";
import { solidStarTestId } from "./RateConstants";

describe("Test Rate Component", () => {
  it("should display rate based on given value", async () => {
    const rateValue = 3;
    render(<Rate value={rateValue} />);
    const rateComp: HTMLElement[] = await screen.findAllByTestId(IconTestId);
    expect(rateComp.length).toBe(5);
    let countSolid = 0;
    rateComp.forEach((rate) => {
      console.log(rate.className + " " + countSolid);
      if (rate.className.startsWith("fa-solid")) {
        countSolid += 1;
      }
    });
    expect(countSolid).toBe(rateValue);
  });
});
