"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlassEmpty = function GlassEmpty(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 64" }, props),
    _react2.default.createElement("path", {
      d: "M30 0H2C.9 0 0 .9 0 2v16c0 8.2 6.1 14.9 14 15.9V60H9c-1.1 0-2 .9-2 2v2h18v-2c0-1.1-.9-2-2-2h-5V33.9c7.9-1 14-7.7 14-15.9V2c0-1.1-.9-2-2-2zm-2 18c0 6.6-5.4 12-12 12S4 24.6 4 18V4h24v14z",
      fill: "#333"
    })
  );
};

exports.default = GlassEmpty;