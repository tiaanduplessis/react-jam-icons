"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pen = function Pen(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M62.9 7.2l-5.7-5.7c-.9-.9-2.2-1-2.8 0L23.3 29.8l-2.8 2.8-4.8 9.7-8.6 5.2L.7 63.8 17 57.4l5.2-8.6 9.7-4.8 2.8-2.8L62.9 10c1-.6 1-1.9 0-2.8zm-48 48.1l-8 3.8 5.9-5.9.7-.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-.7.7-5.9 5.9 3.8-8 7.3-4 2.4 2.4-4.1 7.2zm6.4-10.6l-1.6-1.6 1.9-3.8 3.5 3.5-3.8 1.9zm7.7-3.6l-5.7-5.7 2.8-2.8 5.7 5.7-2.8 2.8zm5.7-5.6L29 29.8l26.9-24 2.8 2.8-24 26.9z",
      fill: "#333"
    })
  );
};

exports.default = Pen;