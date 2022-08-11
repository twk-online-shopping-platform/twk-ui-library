# Errors
---
### Error
import './button.css'; // Jest encountered an unexpected token
### Solution
    * solution - mock css
    * mkdir config
    * touch config/CSSStub.js
        ```
        module.exports = {};
        ```
    * jest.config.json
        ```
        "moduleNameMapper": {
            "^.+\\.(css|less)$": "<rootDir>/config/CSSStub.js"
        },
        ```
----
### Error 
Error loading `tslib` helper library.
/Users/weiran/repo/dian/tsdx/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:25177
    throw e;
    ^

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './package.json' is not defined by "exports" in /Users/weiran/repo/dian/tsdx/node_modules/rollup-plugin-typescript2/node_modules/tslib/package.json

Node: 17.0.0
  OS: macOS 12.0
  yarn: 3.0.2

   rollup: ^2.57.0 => 2.58.0 
    rollup-plugin-typescript2: ^0.30.0 => 0.30.0 
    typescript: ^4.4.3 => 4.4.4
### solution 
Ensure that you have n installed
sudo npm install -g n // -g for global installation 
Upgrading to the latest stable version

sudo n stable
Changing to a specific version

sudo n 16.16.0
