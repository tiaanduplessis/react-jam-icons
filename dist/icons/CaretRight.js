"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CaretRight = function CaretRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 40 64" }, props),
    _react2.default.createElement("path", {
      d: "M39.2 31.4L1.6 1.3C.7.6 0 .9 0 2v60c0 1.1.7 1.4 1.6.7l37.7-30.1c.4-.3.4-.9-.1-1.2z",
      fill: "#333"
    })
  );
};

exports.default = CaretRight;