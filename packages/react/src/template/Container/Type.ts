import { ReactNode } from "react";

enum FlexFlow {
  ROW = "h",
  COLMN = "v",
}
enum FlexContainAlign {
  LEFT = "flx-spc-lft",
  CENTER = "flx-spc-ctr",
  LEFT_RIGHT = "flx-spc-btn",
}
enum GapSize {
  EXTRA_EXTRA_SMALL = "xxs",
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  MID = "md",
  LARGE = "lg",
  EXTRA_LARGE = "xl",
}
enum ContainerStyleType {
  FLEX = "flx",
  GRID = "grd",
}
enum GridColumn {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  ELEVEN = "11",
  TWELVE = "12",
}
interface GridGap {
  column: GapSize;
  row: GapSize;
}
interface ContainerType {
  type: ContainerStyleType;
  flexFlow?: FlexFlow;
  children: ReactNode;
  flexWrap?: boolean;
  flexGap?: GapSize;
  flexContentAlign?: FlexContainAlign;
  gridColumn?: GridColumn;
  gridGap?: GridGap;
  style?: string;
}

export { ContainerStyleType, FlexFlow, GapSize, FlexContainAlign, GridColumn };

export type { ContainerType, GridGap };
