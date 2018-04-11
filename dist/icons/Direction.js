"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Direction = function Direction(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 56 64" }, props),
    _react2.default.createElement("path", {
      d: "M48 8H26V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H2c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20v35c0 1.1.9 2 2 2s2-.9 2-2V27h22l8-9-8-10zm-1.8 15H4V12h42.1l4.7 5.9-4.6 5.1z",
      fill: "#343434"
    })
  );
};

exports.default = Direction;