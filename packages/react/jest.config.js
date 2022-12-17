module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "((\\.|/*.)(spec))\\.tsx?$",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "node_modules/variables/.+\\.(j|t)sx?$": "babel-jest",
    "^.+\\.js$": "babel-jest",
    "\\.(css|less|sass|scss)$": "jest-css-modules-transform",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/blurhash/"],
};
