"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CogF = function CogF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M57 32c0-3.7 2.6-6.9 6.1-7.8-.8-3.1-2-6-3.6-8.7-3.1 1.8-7.1 1.4-9.8-1.2s-3.1-6.7-1.2-9.8c-2.7-1.6-5.6-2.8-8.7-3.6C38.9 4.4 35.7 7 32 7S25.1 4.4 24.2.9c-3.1.8-6 2-8.7 3.6 1.8 3.1 1.4 7.1-1.2 9.8s-6.7 3.1-9.8 1.2c-1.6 2.7-2.8 5.6-3.6 8.7C4.4 25.1 7 28.3 7 32S4.4 38.9.9 39.8c.8 3.1 2 6 3.6 8.7 3.1-1.8 7.1-1.4 9.8 1.2s3.1 6.7 1.2 9.8c2.7 1.6 5.6 2.8 8.7 3.6.9-3.5 4-6.1 7.8-6.1s6.9 2.6 7.8 6.1c3.1-.8 6-2 8.7-3.6-1.8-3.1-1.4-7.1 1.2-9.8s6.7-3.1 9.8-1.2c1.6-2.7 2.8-5.6 3.6-8.7-3.5-.9-6.1-4.1-6.1-7.8zM32 44c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z",
      fill: "#333"
    })
  );
};

exports.default = CogF;