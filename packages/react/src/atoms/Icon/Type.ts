enum IconSize {
  SMALL = "sm",
  LARGE = "lg",
}

interface IconType {
  cssValue?: string;
  size?: IconSize;
}

export type { IconType };
export { IconSize };
