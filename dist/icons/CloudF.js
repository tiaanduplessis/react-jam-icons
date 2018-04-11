"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloudF = function CloudF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 38" }, props),
    _react2.default.createElement("path", {
      d: "M50 10c-1 0-2.1.1-3 .3C44.7 4.3 38.8 0 32 0c-8.4 0-15.3 6.5-15.9 14.7-1.3-.5-2.7-.7-4.1-.7-6.6 0-12 5.4-12 12s5.4 12 12 12h38c7.7 0 14-6.3 14-14s-6.3-14-14-14z",
      fill: "#333"
    })
  );
};

exports.default = CloudF;