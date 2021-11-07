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
  
# setting up sass