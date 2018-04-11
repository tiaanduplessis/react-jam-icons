"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreAltF = function MoreAltF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 16 64" }, props),
    _react2.default.createElement("circle", { className: "st0", cx: 8, cy: 56, r: 8 }),
    _react2.default.createElement("circle", { className: "st0", cx: 8, cy: 8, r: 8 }),
    _react2.default.createElement("circle", { className: "st0", cx: 8, cy: 32, r: 8 })
  );
};

exports.default = MoreAltF;