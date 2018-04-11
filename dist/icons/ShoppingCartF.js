"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShoppingCartF = function ShoppingCartF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 60 60" }, props),
    _react2.default.createElement("path", {
      d: "M56 8H8V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2s.9 2 2 2h2v42c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2s-.9-2-2-2H8v-4h43.6c2.2 0 4.2-1.8 4.6-4l3.3-24c.3-2.2-1.3-4-3.5-4zM8 54c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6zm6-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm26 2c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6zm6-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z",
      fill: "#343434"
    })
  );
};

exports.default = ShoppingCartF;