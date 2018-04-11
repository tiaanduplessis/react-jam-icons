"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Computer = function Computer(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 48" }, props),
    _react2.default.createElement("path", {
      d: "M5 40h54c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3H5C3.3 0 2 1.3 2 3v34c0 1.7 1.3 3 3 3zM6 4h52v32H6V4zm56 40H2c-1.1 0-2 .9-2 2s.9 2 2 2h60c1.1 0 2-.9 2-2s-.9-2-2-2z",
      fill: "#333"
    })
  );
};

exports.default = Computer;