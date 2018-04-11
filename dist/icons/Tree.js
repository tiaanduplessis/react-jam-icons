"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function Tree(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M47.4 52.1L36 35.3h6.6c.6 0 .8-.4.5-.8L32 17.7h4.1c.6 0 .7-.4.4-.8L24.6.9c-.3-.4-.9-.5-1.2 0l-11.9 16c-.3.4-.1.8.4.8H16L4.9 34.5c-.3.5-.1.8.5.8H12L.6 52.1c-.3.5-.1.9.4.9h19.7v10c0 .6.4 1 1 1h4.6c.5 0 1-.4 1-1V53H47c.6 0 .7-.4.4-.9zM8 49l11.3-17H11l12.3-18H19l5-7 5 7h-4.3L37 32h-8.3L40 49H8z",
      fill: "#333"
    })
  );
};

exports.default = Tree;