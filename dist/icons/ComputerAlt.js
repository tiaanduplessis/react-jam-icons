"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComputerAlt = function ComputerAlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 50" }, props),
    _react2.default.createElement("path", {
      d: "M61 0H3C1.3 0 0 1.3 0 3v36c0 1.7 1.3 3 3 3h58c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-1 38H4V4h56v34zm-16 8H20c-1.1 0-2 .9-2 2s.9 2 2 2h24c1.1 0 2-.9 2-2s-.9-2-2-2z",
      fill: "#333"
    })
  );
};

exports.default = ComputerAlt;