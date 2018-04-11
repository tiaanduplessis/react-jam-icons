"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Thunder = function Thunder(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 34 64" }, props),
    _react2.default.createElement("path", {
      d: "M34 25.6H18V0L0 38.4h16V64l18-38.4zM6.3 34.4L14 18v11.6h13.7L20 46V34.4H6.3z",
      fill: "#343434"
    })
  );
};

exports.default = Thunder;