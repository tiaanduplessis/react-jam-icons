"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShieldCheck = function ShieldCheck(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement("path", {
      d: "M27 0L0 8v20c.3 16.5 27 36 27 36s26.7-19.5 27-36V8L27 0zm23 28c-.2 14.3-23 31-23 31S4.2 42.3 4 28V11l23-7 23 7v17zm-34.5 1.7c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4l9.9 9.9c.4.4 1 .4 1.4 0l1.3-1.3 17.6-17.6c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0L23.3 37.5l-7.8-7.8z",
      fill: "#333"
    })
  );
};

exports.default = ShieldCheck;