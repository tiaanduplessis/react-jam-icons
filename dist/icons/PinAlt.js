"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PinAlt = function PinAlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 30 64" }, props),
    _react2.default.createElement("path", {
      d: "M15 0C6.7 0 0 6.7 0 15c0 7.6 5.7 13.9 13 14.9V62c0 1.1.9 2 2 2s2-.9 2-2V29.9c7.3-1 13-7.3 13-14.9 0-8.3-6.7-15-15-15zm-.1 26c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z",
      fill: "#343434"
    })
  );
};

exports.default = PinAlt;