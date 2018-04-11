"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Star = function Star(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 61" }, props),
    _react2.default.createElement("path", {
      d: "M64.1 23l-21.9-3.2L32.4 0l-9.8 19.8L.7 23l15.8 15.4-3.7 21.8 19.6-10.3L52 60.2l-3.7-21.8L64.1 23zM32.4 45.4l-14.3 7.5L20.9 37 9.3 25.8l15.9-2.3L32.4 9l7.1 14.4 15.9 2.3L43.9 37l2.7 15.9-14.2-7.5z",
      fill: "#343434"
    })
  );
};

exports.default = Star;