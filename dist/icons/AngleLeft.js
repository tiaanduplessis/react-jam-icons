"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AngleLeft = function AngleLeft(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 34 62" }, props),
    _react2.default.createElement("path", {
      d: "M7.5 31L32.9 5.5c1.2-1.2 1.2-3.1 0-4.2s-3.1-1.2-4.2 0L1.1 28.9c-1.2 1.2-1.2 3.1 0 4.2l27.6 27.6c1.2 1.2 3.1 1.2 4.2 0s1.2-3.1 0-4.2L7.5 31z",
      fill: "#333"
    })
  );
};

exports.default = AngleLeft;