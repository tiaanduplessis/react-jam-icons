"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gift = function Gift(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 57" }, props),
    _react2.default.createElement("path", {
      d: "M61 13h-5.5c.5-2.9-.3-6-2.3-8.4-3.7-4.4-10.4-5-14.8-1.3L32 8.7l-6.4-5.4C21.2-.4 14.5.1 10.8 4.6 8.7 7 8 10.1 8.4 13H3c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h1v25c0 1.7 1.3 3 3 3h50c1.6 0 3-1.3 3-3V29h1c1.7 0 3-1.3 3-3V16c0-1.7-1.3-3-3-3zM41 6.4c2.8-2.3 6.9-2 9.2.8C51.5 8.8 52 11 51.4 13H33.1L41 6.4zm-27.2.8c2.3-2.7 6.4-3.1 9.2-.8l7.9 6.6H12.5c-.5-2-.1-4.2 1.3-5.8zM4 17h25v8H4v-8zm4 12h21v24H8V29zm48 24H35V29h21v24zm4-28H35v-8h25v8z",
      fill: "#343434"
    })
  );
};

exports.default = Gift;