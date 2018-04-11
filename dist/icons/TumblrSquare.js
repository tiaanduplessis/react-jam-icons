"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TumblrSquare = function TumblrSquare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M60 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM37 56c-10.4 0-12.5-8-13-10V30h-6v-8c5.5-2.7 9.6-7.8 11-14h6v14h9v8h-9v14c.3 2.2 1.5 3.8 4 4 2.6-.2 4-1.4 4.1-1.9L46 52s-2.6 4-9 4z",
      fill: "#343434"
    })
  );
};

exports.default = TumblrSquare;