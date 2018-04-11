"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CaretLeft = function CaretLeft(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 40 64" }, props),
    _react2.default.createElement("path", {
      d: "M38.4 1.3L.8 31.4c-.4.3-.4.9 0 1.2l37.7 30.1c.9.7 1.6.4 1.6-.7V2c-.1-1.1-.8-1.4-1.7-.7z",
      fill: "#333"
    })
  );
};

exports.default = CaretLeft;