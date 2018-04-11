"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Phone = function Phone(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 38 64" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M34 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 4v4H4V4h30zm0 8v36H4V12h30zM4 60v-8h30v8H4z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 19, cy: 56, r: 3 })
  );
};

exports.default = Phone;