"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookSquare = function FacebookSquare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M0 4c0-2.2 1.8-4 4-4h56c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4zm25.8 13.3v6.6H21V32h4.8v24h9.8V32h6.6s.6-3.9.9-8.1h-7.4v-5.5c0-.8 1.1-1.9 2.1-1.9H43V8h-7.2c-10.3 0-10 8.1-10 9.3z",
      fill: "#343434"
    })
  );
};

exports.default = FacebookSquare;