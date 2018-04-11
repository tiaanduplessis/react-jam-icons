"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BellF = function BellF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 50 64" }, props),
    _react2.default.createElement("path", {
      d: "M24.8 63.1c4.4 0 8.3-2 10.9-5.1H13.9c2.6 3.1 6.6 5.1 10.9 5.1zm18.4-22.2V22.7c0-9.3-6.9-16.9-15.9-18V2.3C27.3 1 26.3 0 25 0c-1.3 0-2.3 1-2.3 2.3v2.4c-9 1.1-15.9 8.8-15.9 18v18.2c0 4.2-2.9 7.8-6.8 8.8v6h50v-6c-3.9-1-6.8-4.6-6.8-8.8z",
      fill: "#333"
    })
  );
};

exports.default = BellF;