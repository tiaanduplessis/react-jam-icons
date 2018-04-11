"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Database = function Database(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M64 16V8c0-4.4-3.6-8-8-8H8C3.6 0 0 3.6 0 8v8c0 2.4 1.1 4.5 2.7 6C1.1 23.5 0 25.6 0 28v8c0 2.4 1.1 4.5 2.7 6C1.1 43.5 0 45.6 0 48v8c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-8c0-2.4-1.1-4.5-2.7-6 1.7-1.5 2.7-3.6 2.7-6v-8c0-2.4-1.1-4.5-2.7-6 1.6-1.5 2.7-3.6 2.7-6zm-4 32v8c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h48c2.2 0 4 1.8 4 4zm0-20v8c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h48c2.2 0 4 1.8 4 4zM8 20c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h48c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4H8z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 47, cy: 32, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 54, cy: 52, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 47, cy: 52, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 12, cy: 52, r: 4 }),
    _react2.default.createElement("circle", { className: "st0", cx: 40, cy: 52, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 54, cy: 32, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 47, cy: 12, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 54, cy: 12, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 40, cy: 12, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 12, cy: 12, r: 4 }),
    _react2.default.createElement("circle", { className: "st0", cx: 40, cy: 32, r: 2 }),
    _react2.default.createElement("circle", { className: "st0", cx: 12, cy: 32, r: 4 })
  );
};

exports.default = Database;