"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Move = function Move(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 63 63" }, props),
    _react2.default.createElement("path", {
      d: "M61.3 28.6l-8.5-8.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l3.6 3.6H34V10.8l3.1 3.1c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-8.5-8.5c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9l-8.5 8.5c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l3.6-3.6V28H10.2l3.6-3.6c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0l-8.5 8.5c-.6.6-.9 1.3-.9 2.1s.3 1.5.9 2.1l8.5 8.5c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-3-3.2H28v18.2l-3.6-3.6c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l8.5 8.5c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l8.5-8.5c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L34 51.7V34h17.7l-3.1 3.1c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l8.5-8.5c.6-.6.9-1.3.9-2.1 0-.7-.3-1.5-.9-2.1z",
      fill: "#333"
    })
  );
};

exports.default = Move;