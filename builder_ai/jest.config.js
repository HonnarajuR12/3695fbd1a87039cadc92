const preset = require("jest-expo/jest-preset");

module.exports = {
    ...preset,
    transform: {
        "\\.[jt]sx?$": "babel-jest"
    }
}