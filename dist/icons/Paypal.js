"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paypal = function Paypal(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 53 64" }, props),
    _react2.default.createElement(
      "g",
      { id: "paypal" },
      _react2.default.createElement("path", {
        id: "Fill-4",
        className: "st0",
        d: "M48 18c-1.3 10.4-10.2 18.5-21 18.5h-6.3c-1.4 0-2.6.9-3 2.3L14 61c-.3 1.6.9 3 2.5 3h7.2c1.2 0 2.3-.9 2.5-2.1l2-12.1c.4-2.1 2.2-3.6 4.3-3.6h1.9c10.2 0 18.6-8.3 18.6-18.5 0-4.1-2-7.6-5-9.7z"
      }),
      _react2.default.createElement("path", {
        id: "Combined-Shape",
        className: "st0",
        d: "M45.9 14.9c-1.2 10.3-10.1 18.3-21 18.3h-6.3c-.8 0-1.5.3-2 .7l-.4 2.4c0 .1 0 .2-.1.3l-2.5 15.1c-.2 1.3-1.4 2.3-2.7 2.3h-8C1.2 54-.2 52.4.1 50.7l8-48.3C8.4 1 9.5 0 10.9 0h21.9C40.1 0 46 5.9 46 13.2c0 .6 0 1.1-.1 1.7z"
      })
    )
  );
};

exports.default = Paypal;