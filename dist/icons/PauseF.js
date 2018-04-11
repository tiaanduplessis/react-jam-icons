"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PauseF = function PauseF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M8 0C3.6 0 0 3.6 0 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8zm32 0c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8z",
      fill: "#333"
    })
  );
};

exports.default = PauseF;