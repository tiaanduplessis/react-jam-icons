"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AngleDown = function AngleDown(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 62 35" }, props),
    _react2.default.createElement("path", {
      d: "M60.7 1.6c-1.2-1.2-3.1-1.2-4.2 0L31 27 5.5 1.6C4.3.4 2.4.4 1.3 1.6.1 2.8.1 4.7 1.3 5.8l27.6 27.6c1.2 1.2 3.1 1.2 4.2 0L60.7 5.8c1.2-1.1 1.2-3 0-4.2z",
      fill: "#333"
    })
  );
};

exports.default = AngleDown;