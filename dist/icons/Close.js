"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function Close(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 62 62" }, props),
    _react2.default.createElement("path", {
      d: "M61.1 56.9L35.3 31.1 60.8 5.6c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L31.1 26.8 5.9 1.7C4.7.5 2.8.5 1.7 1.7.5 2.9.5 4.8 1.7 5.9L26.8 31 1.4 56.5c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l25.5-25.5L56.9 61c1.2 1.2 3.1 1.2 4.2 0 1.2-1.1 1.2-3 0-4.1z",
      fill: "#333"
    })
  );
};

exports.default = Close;