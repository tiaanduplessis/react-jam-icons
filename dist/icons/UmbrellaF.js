"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UmbrellaF = function UmbrellaF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M44 54c-1.1 0-2 .9-2 2 0 2.2-1.8 4-4 4s-4-1.8-4-4V32h29.9C62.4 16.4 49.7 4 34 3.1V2c0-1.1-.9-2-2-2s-2 .9-2 2v1.1C14.3 4 1.6 16.4.1 32H30v24c0 4.4 3.6 8 8 8s8-3.6 8-8c0-1.1-.9-2-2-2z",
      fill: "#333"
    })
  );
};

exports.default = UmbrellaF;