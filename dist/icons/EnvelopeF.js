"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnvelopeF = function EnvelopeF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 42" }, props),
    _react2.default.createElement("path", {
      d: "M0 4.5v33.4L20.7 22zM61.5.3C61 .1 60.5 0 60 0H4c-.5 0-1 .1-1.5.3L32 24.6 61.5.3zM32.8 30.8c-.4.4-1.1.4-1.5 0L24 24.7 2.1 41.5c.6.3 1.2.5 1.9.5h56c.7 0 1.3-.2 1.9-.5L40.1 24.7l-7.3 6.1zM43.3 22L64 37.9V4.5z",
      fill: "#333"
    })
  );
};

exports.default = EnvelopeF;