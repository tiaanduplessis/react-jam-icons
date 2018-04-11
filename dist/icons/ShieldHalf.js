"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShieldHalf = function ShieldHalf(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement("path", {
      d: "M27 0L0 8v20c.3 16.5 27 36 27 36s26.7-19.5 27-36V8L27 0zm23 28c-.2 14.3-23 31-23 31V4l23 7v17z",
      fill: "#333"
    })
  );
};

exports.default = ShieldHalf;