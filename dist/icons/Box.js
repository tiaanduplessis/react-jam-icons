"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function Box(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 48" }, props),
    _react2.default.createElement("path", {
      d: "M64 4c0-2.2-1.8-4-4-4H4C1.8 0 0 1.8 0 4v40c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4zM4 4h56v12H4V4zm36 16c-1.8 2.4-4.7 4-8 4s-6.2-1.6-8-4h16zm20 0v24H4V20h15.3c2.3 4.8 7.1 8 12.7 8s10.4-3.2 12.7-8H60z",
      fill: "#343434"
    })
  );
};

exports.default = Box;