"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tumblr = function Tumblr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 37 64" }, props),
    _react2.default.createElement("path", {
      d: "M33.6 50.9s-1.9 2.2-5.5 2.2-5.2-2.2-5.2-5.4V29.4h11.6V18.3H22.9V0h-8.8C12.7 8.2 7.3 15 0 18.4v11h8.6v21.1c0 2.9 2.7 13.6 16.8 13.6 8.2 0 11.7-5.3 11.7-5.3l-3.5-7.9z",
      fill: "#343434"
    })
  );
};

exports.default = Tumblr;