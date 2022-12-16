module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "((\\.|/*.)(spec))\\.tsx?$",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "node_modules/variables/.+\\.(j|t)sx?$": "babel-jest",
    "\\.(css|less|sass|scss)$": "jest-css-modules-transform",
  },
  // moduleNameMapper: {
  //   "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  // },
  transformIgnorePatterns: ["<rootDir>/node_modules/blurhash/"],
};
