"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PieChart = function PieChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M32 0v32h32C64 14.3 49.7 0 32 0zm-4 36V.2C12.2 2.2 0 15.7 0 32c0 17.7 14.3 32 32 32 16.3 0 29.8-12.2 31.8-28H28z",
      fill: "#333"
    })
  );
};

exports.default = PieChart;