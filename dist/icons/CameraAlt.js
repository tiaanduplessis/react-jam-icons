"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CameraAlt = function CameraAlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M51 0H13C5.8 0 0 5.8 0 13v38c0 7.2 5.8 13 13 13h38c7.2 0 13-5.8 13-13V13c0-7.2-5.8-13-13-13zM4 13c0-5 4-9 9-9h38c5 0 9 4 9 9v31H4V13zm47 47H13c-5 0-9-4-9-9v-3h56v3c0 5-4 9-9 9zm3-52h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM14 32h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm37 20H13c-1.1 0-2 .9-2 2s.9 2 2 2h38c1.1 0 2-.9 2-2s-.9-2-2-2zM32 11c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 22c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z",
      fill: "#343434"
    })
  );
};

exports.default = CameraAlt;