import { IconType } from "../Icon/Type";
import { TypographyType } from "../Typography/Type";

enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

enum ButtonSize {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  LARGE = "lg",
}

enum ButtondRadius {
  LEFT = "rd-lt",
  RIGHT = "rd-rt",
  BOTH = "rd",
  OVAL = "cv",
  CIRCLE = "cr",
  NONE = "nr",
}

interface ButtonType {
  label?: string | TypographyType;
  clickHandler?: Function;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtondRadius;
  leftIcon?: string | boolean | IconType;
  rightIcon?: string | boolean | IconType;
}
export type { ButtonType };

export { ButtonVariant, ButtonSize, ButtondRadius };
