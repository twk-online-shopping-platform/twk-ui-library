enum TypographyVariant {
  DISPLAY = "dis",
  TEXT = "txt",
  HEADING = "hd",
  BUTTON = "btn",
  LINK = "lnk",
  SMALL = "sml",
}
enum TypographyWeight {
  NORMAL = "n",
  MDIUM = "m",
  SEMI_BOLD = "s",
  BOLD = "b",
}
enum TypographySize {
  EXTRA_EXTRA_SMALL = "xxs",
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

interface TypographyType {
  text?: string;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  size?: TypographySize;
}
export { TypographyWeight, TypographyVariant, TypographySize };
export type { TypographyType };
