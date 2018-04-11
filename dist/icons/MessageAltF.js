"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageAltF = function MessageAltF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 63" }, props),
    _react2.default.createElement("path", {
      d: "M53 0H11C4.9 0 0 4.9 0 11v26c0 6.1 4.9 11 11 11h21.3l19.3 14.3c1.3 1 2.2.4 2-1.2L52 48h1c6.1 0 11-4.9 11-11V11c0-6.1-4.9-11-11-11z",
      fill: "#333"
    })
  );
};

exports.default = MessageAltF;