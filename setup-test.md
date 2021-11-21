## add  Puppeteer + jest + enzyme to react project
* yarn add --dev jest ts-jest  @types/jest //install jest
* yarn add --dev @types/react-test-renderer @testing-library/react
* yarn add --dev @testing-library/jest-dom // to get toHaveTextContent and other jest matchers
  * add import '@testing-library/jest-dom/extend-expect'; to every test component
* package.json
    ```
    "scripts": {
        "test": "jest"
    }
    ```
* touch babel.config.js
  ```
    module.exports = {
        presets: ['@babel/preset-env', '@babel/preset-react'],
    };
  ```
* touch jest.setup.js // to make jest and enzyme work together 
  ```
    import Enzyme from 'enzyme';
    import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
    Enzyme.configure({ adapter: new Adapter() });
  ```
  * other option is in package.json add 
    ```
    "jest": {
        "setupFilesAfterEnv": [
        "<rootDir>/setupTests.js"
        ]
    }
    ```
* touch jest.config.json
  ```
    {
        "testRegex": "((\\.|/*.)(spec))\\.tsx?$",
        "setupFilesAfterEnv": [
            "<rootDir>/jest.setup.js"
        ]
    }
  ```
