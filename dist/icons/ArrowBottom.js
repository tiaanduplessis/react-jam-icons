"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowBottom = function ArrowBottom(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 62 63" }, props),
    _react2.default.createElement("path", {
      d: "M60.7 30c-1.2-1.2-3.1-1.2-4.2 0L34 52.5V3.3c0-1.7-1.3-3-3-3s-3 1.3-3 3v49.2L5.5 30c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l27.6 27.6c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l27.6-27.6c1.2-1.1 1.2-3 0-4.2z",
      fill: "#333"
    })
  );
};

exports.default = ArrowBottom;