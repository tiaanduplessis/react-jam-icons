"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keyboard = function Keyboard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 32" }, props),
    _react2.default.createElement("path", {
      d: "M59 0H5C2.2 0 0 2.2 0 5v22c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm1 27c0 .6-.4 1-1 1H5c-.5 0-1-.4-1-1V5c0-.6.4-1 1-1h54c.5 0 1 .4 1 1v22zM17 11h2c.6 0 1-.5 1-1V8c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1zm7 0h2c.6 0 1-.5 1-1V8c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1zm-14 0h2c.6 0 1-.5 1-1V8c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1zm17 6c0 .6.5 1 1 1h2c.6 0 1-.5 1-1v-2c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2zm4-6h2c.6 0 1-.5 1-1V8c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1zm23-4h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1V8c0-.6-.5-1-1-1zm-16 4h2c.6 0 1-.5 1-1V8c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1zM12 21h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1v-2c0-.6-.5-1-1-1zm22-4c0 .6.5 1 1 1h2c.6 0 1-.5 1-1v-2c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2zm11-6h2c.6 0 1-.5 1-1V8c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1zm-28 6v-2c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1zm30 4h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1v-2c0-.6-.5-1-1-1zm5-4v-2c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1zm2 4h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1v-2c0-.6-.5-1-1-1zm-9-4v-2c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1zm-26 4h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1v-2c0-.6-.5-1-1-1zm5-4v-2c0-.6-.5-1-1-1h-2c-.6 0-1 .5-1 1v2c0 .6.5 1 1 1h2c.6 0 1-.5 1-1zm16 4H24c-.5 0-1 .5-1 1v2c0 .6.4 1 1 1h16c.5 0 1-.5 1-1v-2c0-.6-.4-1-1-1z",
      fill: "#333"
    })
  );
};

exports.default = Keyboard;