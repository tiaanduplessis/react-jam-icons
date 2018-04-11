"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnvelopeOpenF = function EnvelopeOpenF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 65" }, props),
    _react2.default.createElement("path", {
      d: "M0 26.5v33.3l20.5-15.9zm61.8-4.6L34.4.8c-1.3-1-3.4-1-4.7 0L2.2 21.9 32 46.6l29.8-24.7zM32.8 53c-.4.3-1.1.4-1.5 0l-7.5-6.3L2 63.5c.6.3 1.3.5 2 .5h56c.7 0 1.4-.2 2-.5L40.2 46.7 32.8 53zm10.7-9.1L64 59.8V26.5z",
      fill: "#333"
    })
  );
};

exports.default = EnvelopeOpenF;