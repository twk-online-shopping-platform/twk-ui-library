

https://blog.harveydelaney.com/creating-your-own-react-component-library/    

yarn add --dev @storybook/addon-postcss

yarn add --dev babel-preset-react-app

yarn add --dev storybook-addon-material-ui

yarn add --dev @material-ui/core

/.storybook/main.js
module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    'storybook-addon-material-ui'
  ],
};

//.storybook/preview.js
import { muiTheme } from 'storybook-addon-material-ui'

export const decorators = [
	muiTheme()
];