import { ReactNode } from "react";

enum TwkFooterThemeColors {
  GRAY = " clr-bg-gray-500 ",
  BLUE = " clr-bg-blue-600 ",
  WHITE = "white-white",
}

enum TwkPadding {
  EXTRA_EXTRA_SMALL = " pdd-v-xxs pdd-h-xxs ",
  EXTRA_SMALL = " pdd-v-xs pdd-h-xs ",
  SMALL = " pdd-v-sm pdd-h-sm ",
  MID = " pdd-v-md pdd-h-md ",
  LARGE = " pdd-v-lg pdd-h-lg ",
  EXTRA_LARGE = " pdd-v-xl pdd-h-xl ",
}

enum TwkFooterStyleType {}

interface FooterType {
  theme?: TwkFooterThemeColors;
  styleType?: TwkFooterStyleType;
  padding?: TwkPadding;
}

export type { FooterType, TwkFooterStyleType };

export { TwkFooterThemeColors, TwkPadding };
