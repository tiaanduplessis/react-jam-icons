"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Female = function Female(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24c0 12.2 9.2 22.3 21 23.8V52h-4c-1.7 0-3 1.3-3 3s1.3 3 3 3h4v3c0 1.7 1.3 3 3 3s3-1.3 3-3v-3h4c1.7 0 3-1.3 3-3s-1.3-3-3-3h-4v-4.2C38.8 46.3 48 36.2 48 24zM6 24c0-9.9 8.1-18 18-18s18 8.1 18 18-8.1 18-18 18S6 33.9 6 24z",
      fill: "#343434"
    })
  );
};

exports.default = Female;