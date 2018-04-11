"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowsCorners = function ArrowsCorners(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M61 40c-1.7 0-3 1.3-3 3v10.8L10.2 6H21c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3s3-1.3 3-3V10.2L53.8 58H43c-1.7 0-3 1.3-3 3s1.3 3 3 3h18c1.7 0 3-1.3 3-3V43c0-1.7-1.3-3-3-3z",
      fill: "#333"
    })
  );
};

exports.default = ArrowsCorners;