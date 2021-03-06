"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cactus = function Cactus(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 51 64" }, props),
    _react2.default.createElement("path", {
      d: "M44.5 21c-3.6 0-6.5 2.9-6.5 6.5V32h-2V10c0-5.5-4.5-10-10-10S16 4.5 16 10v10h-3v-7.5C13 8.9 10.1 6 6.5 6S0 8.9 0 12.5V27c0 3.9 3.1 7 7 7h9v26H7c-1.1 0-2 .9-2 2v2h42v-2c0-1.1-.9-2-2-2h-9V46h8c3.9 0 7-3.1 7-7V27.5c0-3.6-2.9-6.5-6.5-6.5zM47 39.5c0 1.4-1.1 2.5-2.5 2.5H32v18H20V30H6.5C5.1 30 4 28.9 4 27.5v-15C4 11.1 5.1 10 6.5 10S9 11.1 9 12.5V24h11V10c0-3.3 2.7-6 6-6s6 2.7 6 6v26h10v-8.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v12zM25.5 31c-.8 0-1.5.7-1.5 1.5v22c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-22c0-.8-.7-1.5-1.5-1.5zm0-9c-.8 0-1.5.7-1.5 1.5v4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4c0-.8-.7-1.5-1.5-1.5z",
      fill: "#343434"
    })
  );
};

exports.default = Cactus;