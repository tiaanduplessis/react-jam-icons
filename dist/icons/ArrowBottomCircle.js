"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowBottomCircle = function ArrowBottomCircle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 58C17.6 58 6 46.4 6 32S17.6 6 32 6s26 11.6 26 26-11.6 26-26 26zm10.6-33.1L32 35.5 21.4 24.9c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l12.7 12.7c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l12.7-12.7c1.2-1.2 1.2-3.1 0-4.2-1.1-1.2-3-1.2-4.2 0z",
      fill: "#333"
    })
  );
};

exports.default = ArrowBottomCircle;