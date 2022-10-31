module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "((\\.|/*.)(spec))\\.tsx?$",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/blurhash/"],
};
