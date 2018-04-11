"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoxF = function BoxF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 48" }, props),
    _react2.default.createElement("path", {
      d: "M32 28c-5.2 0-9.7-3.3-11.3-8H0v26c0 1.1.9 2 2 2h60c1.1 0 2-.9 2-2V20H43.3c-1.6 4.7-6.1 8-11.3 8zM61 0H3C1.3 0 0 1.3 0 3v13h64V3c0-1.7-1.3-3-3-3z",
      fill: "#333"
    })
  );
};

exports.default = BoxF;