enum ColorClassType {
  WHITE = "white",
  GRAY = "gray",
  BLUE = "blue",
  TURQUOISE = "turquoise",
  RED = "red",
  GREEN = "green",
  YELLOW = "yellow",
  ORANGE = "orange",
  VIOLET = "violet",
}

enum ColorWeight {
  ONE = "100",
  TWO = "200",
  THREE = "300",
  FOUR = "400",
  FIVE = "500",
  SIX = "600",
  SEVEN = "700",
  EIGHT = "800",
  NINE = "900",
}

interface ColorType {
  color?: ColorClassType;
  weight?: ColorWeight;
}

export { ColorClassType, ColorWeight };

export type { ColorType };
