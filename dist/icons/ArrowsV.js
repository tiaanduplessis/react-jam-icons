"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowsV = function ArrowsV(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 63" }, props),
    _react2.default.createElement("path", {
      d: "M22.4 48.6c-1.2-1.2-3.1-1.2-4.3 0L15 51.7V10.8l3.1 3.1c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-8.5-8.5c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9L1.1 9.6c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0L9 10.2v42l-3.6-3.6c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l8.5 8.5c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l8.5-8.5c1.2-1.2 1.2-3.1 0-4.2z",
      fill: "#333"
    })
  );
};

exports.default = ArrowsV;