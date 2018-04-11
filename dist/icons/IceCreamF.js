"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IceCreamF = function IceCreamF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 64" }, props),
    _react2.default.createElement("path", {
      d: "M16 0C7.2 0 0 7.2 0 16v32h13v13c0 1.6 1.3 3 3 3s3-1.3 3-3V48h13V16c0-8.8-7.2-16-16-16z",
      fill: "#343434"
    })
  );
};

exports.default = IceCreamF;