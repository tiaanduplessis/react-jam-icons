"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = function BarChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M61 58H6V3c0-1.7-1.3-3-3-3S0 1.3 0 3v58c0 1.7 1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-46-4c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4s-4 1.8-4 4v32c0 2.2 1.8 4 4 4zm14 0c2.2 0 4-1.8 4-4V34c0-2.2-1.8-4-4-4s-4 1.8-4 4v16c0 2.2 1.8 4 4 4zm14 0c2.2 0 4-1.8 4-4V26c0-2.2-1.8-4-4-4s-4 1.8-4 4v24c0 2.2 1.8 4 4 4zm14 0c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4s-4 1.8-4 4v8c0 2.2 1.8 4 4 4z",
      fill: "#333"
    })
  );
};

exports.default = BarChart;