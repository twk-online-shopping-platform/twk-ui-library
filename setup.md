# setting up storybook
## steps setting storybook with rollup
* yarn init
* yarn add --dev react react-dom @types/react typescript
* package.json
  ```
    "peerDependencies": {
        "react": "^16.8.0",
        "react-dom": "^16.8.0"
    },
  ```
* touch tsconfig.json
  ```
    {
        "compilerOptions": {
        "target": "es5",
        "outDir": "lib",
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],
        "declaration": true,
        "declarationDir": "lib",
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react"
        },
        "include": [
        "src"
        ],
        "exclude": [
            "node_modules",
            "lib"
        ]
    }
  ```
* npx sb init
* mkdir scr
* cd .storybook/main.js
  ```
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  ```
* yarn storybook
  

  
# setting up rollup
* cd src
  * touch index.ts
    ```
    import Button from "./components/Button";
    export { Button };
    ```
* yarn add --dev rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-postcss postcss
* package.json
  ```
    { 
    ...
    "main": "lib/index.js",
    "module": "lib/index.esm.js",
    "types": "lib/index.d.ts",
    ...
    }
  ```
* touch rollup.config.js
  ```
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
  ```
* package.json
    ```
    "scripts": {
        ...
        "build": "rollup -c"
    },
    ```
* .gitignore
    ```
    add lib
    ```
