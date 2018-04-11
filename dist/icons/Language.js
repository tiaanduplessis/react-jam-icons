"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Language = function Language(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 61 56" }, props),
    _react2.default.createElement("path", {
      d: "M30.4 9.2H0v4.5h27c-1.7 4.2-4.1 7.7-7.2 10.2-3.3 2.7-7.8 4.8-13.6 6.2l2.5 4.3c7-1.8 12.4-4.6 16.3-8.5 3.3-3.4 6-8.4 8-14.7l-2.6-2zM3.7 0h24.8v4.5H3.7zm43.2 21h-6.5L27 56h6.1l3.2-8.8H51l3.2 8.8h6.1L46.9 21zM38 42.5l5.5-15.3h.2l5.5 15.3H38z",
      fill: "#343434"
    })
  );
};

exports.default = Language;