"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M64 25.5C64 11.4 49.7 0 32 0S0 11.4 0 25.5 14.3 51 32 51c3.2 0 18.3 13.4 21.2 12.7 2.5-.6-3.3-17-2.4-17.6C58.8 41.5 64 34 64 25.5zM46.8 47.3c.1.6.2 1.2.4 2.1.1.6.3 1.4.6 2.4.1.2.5 2.1.7 2.7l.3 1.4c.1.5.2.9.3 1.3-1.1-.7-2.4-1.6-4.2-2.9-.1-.1-.1-.1-.2-.1C36 47.9 34.7 47 32 47 16.4 47 4 37.1 4 25.5S16.4 4 32 4s28 9.9 28 21.5c0 6.7-4.1 13.1-11.2 17.2-.9.5-1.5 1.3-1.8 2.1-.2.4-.2.8-.3 1.2 0 .5 0 .9.1 1.3z",
      fill: "#343434"
    })
  );
};

exports.default = Message;