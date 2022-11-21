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
  CURVE = "cv",
  LEFT_CURVE = "cv-lt",
  RIGHT_CURVE = "cv-rt",
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
  style?: string;
}
export type { ButtonType };

export { ButtonVariant, ButtonSize, ButtondRadius };
