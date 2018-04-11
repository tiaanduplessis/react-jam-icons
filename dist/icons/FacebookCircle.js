"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookCircle = function FacebookCircle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm11 16.4h-5.3c-1.1 0-2.1 1.1-2.1 1.9v5.5H43c-.3 4.2-.9 8.1-.9 8.1h-6.6v24h-9.8V32H21v-8.1h4.8v-6.6c0-1.2-.2-9.3 10-9.3H43v8.4z",
      fill: "#343434"
    })
  );
};

exports.default = FacebookCircle;