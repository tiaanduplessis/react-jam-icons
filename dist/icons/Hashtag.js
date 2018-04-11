"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hashtag = function Hashtag(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M61 41H46V23h15c1.7 0 3-1.3 3-3s-1.3-3-3-3H46V3c0-1.7-1.3-3-3-3s-3 1.3-3 3v14H22V3c0-1.7-1.3-3-3-3s-3 1.3-3 3v14H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h13v18H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h13v14c0 1.7 1.3 3 3 3s3-1.3 3-3V47h18v14c0 1.7 1.3 3 3 3s3-1.3 3-3V47h15c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-21 0H22V23h18v18z",
      fill: "#333"
    })
  );
};

exports.default = Hashtag;