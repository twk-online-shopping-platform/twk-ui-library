import Ts from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts", "src/atoms/index.ts", "src/atoms/Button/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts()],
  external: ["react"],
};
