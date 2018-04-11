"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BatteryCharging = function BatteryCharging(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 32" }, props),
    _react2.default.createElement("path", {
      d: "M26 17.6h5v8.9c.2 0 .3-.1.4-.4l5.1-10.8c.2-.5 0-.9-.6-.9h-5V5.5c-.2 0-.3.1-.4.4l-5.1 10.8c-.2.5 0 .9.6.9zM63 10h-2V3c0-1.7-1.3-3-3-3H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h55c1.7 0 3-1.3 3-3v-7h2c.6 0 1-.4 1-1V11c0-.5-.5-1-1-1zm-6 18H4V4h53v24z",
      fill: "#333"
    })
  );
};

exports.default = BatteryCharging;