# storybook setup guid

- https://blog.harveydelaney.com/creating-your-own-react-component-library/
- yarn add --dev @storybook/addon-postcss
- yarn add --dev babel-preset-react-app
- yarn add --dev storybook-addon-material-ui
- yarn add --dev @material-ui/core
- /.storybook/main.js

  ```
  module.exports = {
  const path = require("path");

  module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [
      'storybook-addon-material-ui'
    ],
    webpackFinal: async (config) => {
      config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      });

      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      });
      config.resolve.extensions.push(".ts", ".tsx");

      return config;
    }
  };
  ```

- //.storybook/preview.js

  ```
  import { muiTheme } from 'storybook-addon-material-ui'

  export const decorators = [
    muiTheme()
  ];
  ```

  https://www.chromatic.com/

yarn add -D chromatic
yarn chromatic --project-token=fbd90305363f
