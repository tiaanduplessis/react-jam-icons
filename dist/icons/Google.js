"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Google = function Google(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M34.1 28.5v9.8H52C49.4 46.8 41.4 53 32 53c-11.6 0-21-9.4-21-21s9.4-21 21-21c5.8 0 11.1 2.4 14.9 6.2L54 9.5c-5.7-5.6-13.5-9-22-9C14.6.5.5 14.6.5 32S14.6 63.5 32 63.5c15.2 0 28.6-10.8 31.5-25.2v-9.8H34.1z",
      fill: "#343434"
    })
  );
};

exports.default = Google;