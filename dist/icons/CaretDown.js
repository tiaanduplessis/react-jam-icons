"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CaretDown = function CaretDown(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 40" }, props),
    _react2.default.createElement("path", {
      d: "M62 0H2C.9 0 .6.7 1.3 1.6l30.1 37.7c.3.4.9.4 1.2 0L62.7 1.6c.7-.9.4-1.6-.7-1.6z",
      fill: "#333"
    })
  );
};

exports.default = CaretDown;