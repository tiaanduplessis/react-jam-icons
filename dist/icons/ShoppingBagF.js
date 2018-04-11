"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShoppingBagF = function ShoppingBagF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M38 16v-6c0-5.5-4.5-10-10-10h-8c-5.5 0-10 4.5-10 10v6H0v34c0 7.7 6.3 14 14 14h20c7.7 0 14-6.3 14-14V16H38zm-24-6c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6v6H14v-6z",
      fill: "#343434"
    })
  );
};

exports.default = ShoppingBagF;