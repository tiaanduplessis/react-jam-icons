"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 48" }, props),
    _react2.default.createElement("path", {
      d: "M20.5 10.5l-2.8-2.8c-.4-.4-1-.4-1.4 0L.7 23.3c-.2.2-.3.5-.3.7s.1.5.3.7l15.6 15.6c.4.4 1 .4 1.4 0l2.8-2.8c.4-.4.4-1 0-1.4l-12-12 12-12c.4-.5.4-1.2 0-1.6zm42.7 12.8L47.7 7.7c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l12 12-12 12c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l15.6-15.6c.2-.2.3-.5.3-.7-.1-.1-.2-.3-.4-.5zm-23.7-22c-1.6-.5-3.3.4-3.8 1.9l-13 39.9c-.5 1.6.4 3.3 1.9 3.8s3.3-.4 3.8-1.9l13-40c.5-1.5-.3-3.2-1.9-3.7z",
      fill: "#333"
    })
  );
};

exports.default = Code;