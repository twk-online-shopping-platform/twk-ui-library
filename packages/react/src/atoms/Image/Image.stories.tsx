import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Image from "./Image";
import { ImageType } from "./Type";
export default {
  title: "Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;
const Template: ComponentStory<typeof Image> = (args: ImageType) => (
  <Image {...args} />
);

export const FullSizeImage = Template.bind({});
FullSizeImage.args = {
  imageUrl:
    "https://i.picsum.photos/id/1056/200/300.jpg?hmac=MBNGo7ZX2Cpxe1Kf-3yFedPHe48E9MRgIDoopaVSTqE",
  hashImagUrl: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
};
export const ExtraLargeImage = Template.bind({});
ExtraLargeImage.args = {
  imageUrl:
    "https://media.cnn.com/api/v1/images/stellar/prod/220715121407-macbook-air-m2-review-1.jpg?c=16x9&q=h_720,w_1280,c_fill",
  hashImagUrl: "LSFr0VxnEtrG~Dt4bVrrX1sqRXW+",
  style: "box-xl",
};
export const LargeImage = Template.bind({});
LargeImage.args = {
  imageUrl:
    "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
  hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
  style: "box-lg",
};
export const MidImage = Template.bind({});
MidImage.args = {
  imageUrl:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662129048006",
  hashImagUrl: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  style: "box-md",
};
export const SmallImage = Template.bind({});
SmallImage.args = {
  imageUrl:
    "https://i.picsum.photos/id/1056/200/300.jpg?hmac=MBNGo7ZX2Cpxe1Kf-3yFedPHe48E9MRgIDoopaVSTqE",
  hashImagUrl: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  style: "box-sm",
};
