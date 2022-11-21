class KeyboardKey {
    public static DOWN_KEY = new KeyboardKey("ArrowDown", 40);
    public static UP_KEY = new KeyboardKey("ArrowUp", 38);
  public static ENTER = new KeyboardKey("Enter", 13);
  public static ESCAPE = new KeyboardKey("Escape", 27);

  constructor(key: string, keyCode: number) {
    this.key = key;
    this.keyCode = keyCode;
  }
  readonly key: string;
  readonly keyCode: number;
}

export { KeyboardKey };

//   ESCAPE_KEY = "27",
//   SHIFT_KEY = "16",
//   BACKSPACE_KEY = "8",
//   DELETE_KEY = "46",
//   SPACE_KEY = "32",
//   CTRL_KEY = "17",
//   ALT_KEY = "18",
//   TAG_KEY = "9";
//   LEFT_KEY = "37",
//   RIGHT_KEY = "39",
