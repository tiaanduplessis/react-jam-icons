"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Instagram = function Instagram(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M44.9 0H19.1C8.7 0 .3 8.2 0 18.5v27C.3 55.8 8.7 64 19.1 64H45c10.4 0 19-8.6 19-19.1V19.1C64 8.6 55.4 0 44.9 0zm12.7 44.9c0 7-5.7 12.6-12.6 12.6H19.1c-7 0-12.6-5.7-12.6-12.6V19.1c0-7 5.7-12.6 12.6-12.6H45c7 0 12.6 5.7 12.6 12.6v25.8zM32.5 16C23.4 16 16 23.4 16 32.5S23.4 49 32.5 49 49 41.6 49 32.5 41.6 16 32.5 16zm0 26.6c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1-4.5 10.1-10.1 10.1z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 47.5, cy: 14.5, r: 3.5 })
  );
};

exports.default = Instagram;