import peerDepsExternal from "rollup-plugin-peer-deps-external"; // This plugin avoids us from bundling react and react-dom 
import resolve from "@rollup/plugin-node-resolve"; //This plugin includes the third-party external dependencies into our final bundle 
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2"; //This plugin compiles the TypeScript code to JavaScript for our final bundle and generates the type declarations for the types key in package.json
import postcss from "rollup-plugin-postcss"; //This plugin helps include the CSS that we created as separate files in our final bundle

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss({
            extensions: ['.css']
        })
    ]
};