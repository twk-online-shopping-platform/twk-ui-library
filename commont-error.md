# Errors
    * import './button.css'; // Jest encountered an unexpected token
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