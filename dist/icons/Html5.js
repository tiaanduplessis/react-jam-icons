"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html5 = function Html5(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 56 64" }, props),
    _react2.default.createElement("path", {
      d: "M55 0H1C.4 0 0 .5 0 1.1l4.9 55.6c.1.6.6 1.2 1.1 1.3l20.9 5.8c.6.2 1.5.2 2 0l21-5.9c.6-.2 1.1-.8 1.1-1.4l5-55.4c0-.6-.4-1.1-1-1.1zm-9.7 14.8l-.1 1.5c-.1.6-.1 1.4-.2 1.9 0 .4-.1.8-.1.8H19.1c-.6 0-1 .5-1 1.1l.5 5.1c.1.6.6 1.1 1.2 1.1h23.6c.5 0 .9.4.9 1 0 .5-.1 1.4-.2 2l-1.5 16.5c-.1.6-.1 1.3-.1 1.7 0 .3-.5.7-1.1.9L29 51.6c-.6.2-1 .3-1 .3s-.5-.1-1-.3l-12.4-3.5c-.6-.2-1.1-.8-1.1-1.4l-.8-9c-.1-.6.4-1.1 1-1.1h4.9c.6 0 1.1.5 1.2 1.1l.3 3.5c.1.6.6 1.2 1.1 1.3l5.8 1.6c.6.2 1 .3 1 .3s.5-.1 1-.3l5.8-1.6c.6-.2 1.1-.8 1.1-1.3l.6-7.1c.1-.6-.4-1.1-1-1.1H13.3c-.6 0-1.1-.5-1.2-1.1l-1.5-17.4c-.1-.6-.1-1.5-.2-2 0-.5.4-1 1-1h33.2c.6 0 1 .4 1 1-.1.8-.2 1.7-.3 2.3z",
      fill: "#343434"
    })
  );
};

exports.default = Html5;