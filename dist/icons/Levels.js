"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Levels = function Levels(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 58 64" }, props),
    _react2.default.createElement("path", {
      d: "M8 6V3c0-1.7-1.3-3-3-3S2 1.3 2 3v3C.9 6 0 6.9 0 8v8c0 1.1.9 2 2 2v43c0 1.7 1.3 3 3 3s3-1.3 3-3V18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm16 42V3c0-1.7-1.3-3-3-3s-3 1.3-3 3v45c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-1c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm16-26V3c0-1.7-1.3-3-3-3s-3 1.3-3 3v19c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2v27c0 1.7 1.3 3 3 3s3-1.3 3-3V34c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm16 14V3c0-1.7-1.3-3-3-3s-3 1.3-3 3v33c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2v13c0 1.7 1.3 3 3 3s3-1.3 3-3V48c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z",
      fill: "#343434"
    })
  );
};

exports.default = Levels;