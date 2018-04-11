"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayF = function PlayF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 47 62" }, props),
    _react2.default.createElement("path", {
      d: "M45.5 29.1L2.5.4C1.1-.5 0 .1 0 1.8v58c0 1.7 1.1 2.3 2.5 1.3l43-28.7c1.4-.9 1.4-2.4 0-3.3z",
      fill: "#333"
    })
  );
};

exports.default = PlayF;