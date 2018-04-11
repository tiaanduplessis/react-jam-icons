"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoonF = function MoonF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 65 61" }, props),
    _react2.default.createElement("path", {
      d: "M48 40C29.6 40 15 25.4 15 8c0-2.5.3-4.9.8-7.3C6.3 6.5 0 16.9 0 29c0 17.4 14.6 32 33 32 15.3 0 28.3-11.1 31.3-25.6C59.5 38.3 53.9 40 48 40z",
      fill: "#333"
    })
  );
};

exports.default = MoonF;