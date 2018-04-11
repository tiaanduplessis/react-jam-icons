"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Glue = function Glue(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 30 64" }, props),
    _react2.default.createElement("path", {
      d: "M19 23h-8c-1.1 0-2 .9-2 2v2h12v-2c0-1.1-.9-2-2-2zM5 42h20v8H5zm-1-8v4h22v-4c0-1.7-1.3-3-3-3H7c-1.7 0-3 1.3-3 3zm0 23c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-3H4v3z",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d: "M25 27.3V25c0-2.5-1.6-4.7-3.8-5.6L16.8 0h-3.6L8.8 19.4C6.6 20.3 5 22.5 5 25v2.3c-2.9.9-5 3.5-5 6.7v23c0 3.9 3.1 7 7 7h16c3.9 0 7-3.1 7-7V34c0-3.2-2.1-5.8-5-6.7zM21 25v2H9v-2c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zm-6-15l2 9h-4l2-9zm11 47c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3v-3h22v3zM5 50v-8h20v8H5zm21-12H4v-4c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v4z",
      fill: "#343434"
    })
  );
};

exports.default = Glue;