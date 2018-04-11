"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StarF = function StarF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 62 60" }, props),
    _react2.default.createElement("path", {
      d: "M62 23l-21-3L31 0 21 20 0 23l15 15-3 22 19-10 19 10-3-22z",
      fill: "#333"
    })
  );
};

exports.default = StarF;