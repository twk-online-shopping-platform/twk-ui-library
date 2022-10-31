enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

enum ButtonSize {
  SMALL = "sm",
  LARGE = "lg",
}

enum ButtondRadius {
  LEFT = "rd-lt",
  RIGHT = "rd-rt",
  BOTH = "rd",
  NONE = "nr",
}

interface ButtonType {
  label?: string;
  clickHandler?: Function;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtondRadius;
  leftIcon?: string | boolean;
  rightIcon?: string | boolean;
}
export type { ButtonType };

export { ButtonVariant, ButtonSize, ButtondRadius };
