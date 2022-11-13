enum TagePosition {
  TOP_LEFT = "t-l",
  TOP_RIGHT = "t-r",
}

interface TagType {
  position: TagePosition;
}

export type { TagType };
export { TagePosition };
