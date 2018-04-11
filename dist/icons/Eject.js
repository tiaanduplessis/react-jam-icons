"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Eject = function Eject(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 55" }, props),
    _react2.default.createElement("path", {
      d: "M60 47H4c-2.2 0-4 1.8-4 4s1.8 4 4 4h56c2.2 0 4-1.8 4-4s-1.8-4-4-4zM1 39h62c.6 0 .7-.3.4-.8L33.9 1.3c-1-1.3-2.7-1.3-3.7 0L.6 38.2c-.3.5-.1.8.4.8zM32 8.6L51.5 33h-39L32 8.6z",
      fill: "#343434"
    })
  );
};

exports.default = Eject;