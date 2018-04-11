"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PadlockF = function PadlockF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M44 32h-2V18c0-9.9-8.1-18-18-18S6 8.1 6 18v14H4c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V36c0-2.2-1.8-4-4-4zM24 53c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm13-21H11V18c0-7.2 5.8-13 13-13s13 5.8 13 13v14z",
      fill: "#333"
    })
  );
};

exports.default = PadlockF;