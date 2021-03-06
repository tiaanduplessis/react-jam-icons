"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GpsF = function GpsF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 58 58" }, props),
    _react2.default.createElement("path", {
      d: "M54.6.8L2.4 24.9c-2.5 1.2-2.4 2.7.3 3.5l20.8 6 6 20.8c.8 2.7 2.3 2.8 3.5.3L57 3.2c1.2-2.5.1-3.6-2.4-2.4z",
      fill: "#343434"
    })
  );
};

exports.default = GpsF;