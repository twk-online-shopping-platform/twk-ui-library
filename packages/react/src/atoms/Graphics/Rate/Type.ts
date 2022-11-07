import { IconSize } from "../../Icon/Type";

interface RateType {
  value: number;
  max?: number;
  style?: {
    solid: string;
    open: string;
  };
  size?: IconSize;
}

export type { RateType };
