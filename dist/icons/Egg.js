"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Egg = function Egg(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M23.6.3C10.6.3 0 26.4 0 39.5s10.6 23.7 23.6 23.7 23.6-10.6 23.6-23.7S36.6.3 23.6.3zm0 57c-9.7 0-17.6-8-17.6-17.8C6 26.3 16.5 6.3 23.6 6.3s17.6 20.1 17.6 33.3c0 9.7-7.9 17.7-17.6 17.7z",
      fill: "#343434"
    })
  );
};

exports.default = Egg;