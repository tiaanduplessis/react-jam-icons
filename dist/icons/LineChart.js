"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineChart = function LineChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M6 58V0H0v64h64v-6zm19.4-16.4l11.1 9.5 26.7-33.7-3.1-2.5-24.2 30.5-10.7-9.3-14.1 14.3 2.8 2.8z",
      fill: "#343434"
    })
  );
};

exports.default = LineChart;