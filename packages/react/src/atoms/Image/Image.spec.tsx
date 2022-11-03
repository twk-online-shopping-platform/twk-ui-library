import { render, screen } from "@testing-library/react";
import React from "react";
import { imageTestId } from "./ImageConstants";
import Image from "./Image";

describe("Test Image Component", () => {
  it("should display image", async () => {
    render(
      <Image
        imageUrl={
          "https://i.picsum.photos/id/1056/200/300.jpg?hmac=MBNGo7ZX2Cpxe1Kf-3yFedPHe48E9MRgIDoopaVSTqE"
        }
        description={""}
        hashImagUrl="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
      />
    );
    const imageComponent = await screen.getByTestId(imageTestId);
    expect(imageComponent).toBeInTheDocument();
  });
});
