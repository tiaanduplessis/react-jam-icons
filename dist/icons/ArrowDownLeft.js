"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowDownLeft = function ArrowDownLeft(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 63 63" }, props),
    _react2.default.createElement("path", {
      d: "M61.9.9c-1.2-1.2-3.1-1.2-4.2 0L6 52.5V18c0-1.7-1.3-3-3-3s-3 1.3-3 3v42c0 1.7 1.3 3 3 3h42c1.7 0 3-1.3 3-3s-1.3-3-3-3H10L61.9 5.1c1.2-1.1 1.2-3 0-4.2z",
      fill: "#333"
    })
  );
};

exports.default = ArrowDownLeft;