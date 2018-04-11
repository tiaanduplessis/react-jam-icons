"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StopSign = function StopSign(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 6c6.1 0 11.7 2.1 16.1 5.6L11.6 48.1C8.1 43.7 6 38.1 6 32 6 17.6 17.6 6 32 6zm0 52c-6.1 0-11.7-2.1-16.1-5.6l36.5-36.5c3.5 4.4 5.6 10 5.6 16.1 0 14.4-11.6 26-26 26z",
      fill: "#333"
    })
  );
};

exports.default = StopSign;