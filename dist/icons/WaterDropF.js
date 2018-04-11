"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaterDropF = function WaterDropF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 42 64" }, props),
    _react2.default.createElement("path", {
      d: "M21 0S0 31.4 0 43c0 11.6 9.4 21 21 21s21-9.4 21-21S21 0 21 0z",
      fill: "#333"
    })
  );
};

exports.default = WaterDropF;