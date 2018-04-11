"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HairDryer = function HairDryer(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 60 64" }, props),
    _react2.default.createElement("path", {
      d: "M60 17c0-9.4-7.6-17-17-17-5.2 0-19 2.1-30.3 5.5C11.4 4.6 9.8 4 8 4H0v26h8c2.1 0 4.1-.9 5.5-2.2 6.7 2.3 14.2 4.1 20.2 5.1-1.1 2.3-1.8 5.2-1.8 8.3v.7c0 .3 0 .6.1.8.3 4.2 1.8 7.9 3.9 9.9v3.5c0 4.2 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5V33.2c0-.4 0-.8-.1-1.1C56.3 29.2 60 23.5 60 17zM8 26H4V8h4c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4zm28 16.4v-.6c.1-1 .9-1.8 2-1.8s2 .9 2 2-.9 2-2 2c-1 0-1.8-.7-2-1.6zm11 13.9c0 1.9-1.6 3.5-3.5 3.5S40 58.2 40 56.3v-5.2l-1.2-1.2c-.5-.5-.9-1.1-1.3-1.9h.6c3.3 0 6-2.7 6-6s-2.7-6-6-6c-.4 0-.8 0-1.2.1.3-.9.7-1.8 1.1-2.4 2 .3 3.8.4 5.1.4 1.4 0 2.7-.1 4-.4v22.6zM43 30c-5 0-17.3-2.5-27-5.6V8.7C25.6 6 37.7 4 43 4c7.2 0 13 5.8 13 13s-5.8 13-13 13zm4.3-19.6c-.3-.8-1.1-1.2-1.9-.9-.8.3-1.2 1.1-.9 1.9l4.1 11.3c.3.8 1.1 1.2 1.9.9.8-.3 1.2-1.1.9-1.9l-4.1-11.3zm-5 0c-.3-.8-1.1-1.2-1.9-.9-.8.3-1.2 1.1-.9 1.9l4.1 11.3c.3.8 1.1 1.2 1.9.9.8-.3 1.2-1.1.9-1.9l-4.1-11.3zm-5 0c-.3-.8-1.1-1.2-1.9-.9-.8.3-1.2 1.1-.9 1.9l4.1 11.3c.3.8 1.1 1.2 1.9.9.8-.3 1.2-1.1.9-1.9l-4.1-11.3z",
      fill: "#333"
    })
  );
};

exports.default = HairDryer;