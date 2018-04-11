"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Facebook = function Facebook(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 30 64" }, props),
    _react2.default.createElement("path", {
      d: "M22.7 11.2H30V0h-9.9C6.2 0 6.5 10.8 6.5 12.4v8.8H0V32h6.5v32h13.3V32h8.9s.8-5.2 1.2-10.8h-10v-7.4c0-1.1 1.4-2.6 2.8-2.6z",
      fill: "#343434"
    })
  );
};

exports.default = Facebook;