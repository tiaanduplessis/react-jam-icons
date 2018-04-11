"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RssFeed = function RssFeed(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", { className: "st0", d: "M0 0v6c32 0 58 26 58 58h6C64 28.7 35.3 0 0 0z" }),
    _react2.default.createElement("circle", { className: "st0", cx: 8, cy: 56, r: 8 }),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M0 22v6c19.9 0 36 16.1 36 36h6c0-23.2-18.8-42-42-42z"
    })
  );
};

exports.default = RssFeed;