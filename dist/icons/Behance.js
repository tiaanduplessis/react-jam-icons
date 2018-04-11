"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Behance = function Behance(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 40" }, props),
    _react2.default.createElement("path", {
      d: "M26.4 18.3s6.2-.5 6.2-7.6C32.6 3.5 27.5 0 21.1 0H0v40h21.1S34 40.4 34 28.2c0 0 .6-9.9-7.6-9.9zM9.3 7.1h11.8s2.9 0 2.9 4.2-1.7 4.8-3.6 4.8H9.3v-9zm11.3 25.8H9.3V22.2h11.8s4.3-.1 4.3 5.5c0 4.6-3.1 5.1-4.8 5.2zM42 2h16v5H42zm8.2 8C35 10 35 25 35 25s-1 15 15.2 15c0 0 13.5.8 13.5-10.4h-6.9s.2 4.2-6.3 4.2c0 0-6.9.5-6.9-6.8H64c-.1 0 2.1-17-13.8-17zm-6.8 11.8s.8-6 6.9-6c6.1 0 6 6 6 6H43.4z",
      fill: "#343434"
    })
  );
};

exports.default = Behance;