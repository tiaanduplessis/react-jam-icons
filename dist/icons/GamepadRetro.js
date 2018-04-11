"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GamepadRetro = function GamepadRetro(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 36" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M46 0H18C8.1 0 0 8.1 0 18s8.1 18 18 18c3 0 5.8-.7 8.3-2h11.5c2.5 1.3 5.3 2 8.3 2 9.9 0 18-8.1 18-18C64 8.1 55.9 0 46 0zm0 32c-2.3 0-4.5-.5-6.4-1.6l-.9-.4H25.3l-.9.4c-2 1-4.1 1.6-6.4 1.6-7.7 0-14-6.3-14-14S10.3 4 18 4h28c7.7 0 14 6.3 14 14s-6.3 14-14 14z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 47, cy: 13, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 47, cy: 23, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 42, cy: 18, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 52, cy: 18, r: 2 }),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M23 16h-4v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4v4c0 1.1.9 2 2 2s2-.9 2-2v-4h4c1.1 0 2-.9 2-2s-.9-2-2-2z"
    })
  );
};

exports.default = GamepadRetro;