"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Voicemail = function Voicemail(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 28" }, props),
    _react2.default.createElement("path", {
      d: "M50 0c-7.7 0-14 6.3-14 14 0 3 .9 5.7 2.5 8h-13c1.6-2.3 2.5-5 2.5-8 0-7.7-6.3-14-14-14S0 6.3 0 14s6.3 14 14 14h36c7.7 0 14-6.3 14-14S57.7 0 50 0zM6 14c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm44 8c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z",
      fill: "#333"
    })
  );
};

exports.default = Voicemail;