"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Redo = function Redo(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 63 64" }, props),
    _react2.default.createElement("path", {
      d: "M61.9 1.2c0-1.1-.7-1.4-1.5-.6l-7.3 7.3C47.4 3 40.1 0 32 0 14.3 0 0 14.3 0 32s14.3 32 32 32c10.1 0 19-4.6 24.9-11.9L52.5 48C47.8 54.1 40.3 58 32 58 17.6 58 6 46.4 6 32S17.6 6 32 6c6.4 0 12.3 2.3 16.8 6.2L42 19c-.8.8-.5 1.4.6 1.5l18.9.6c.6 0 1-.4 1-1l-.6-18.9z",
      fill: "#333"
    })
  );
};

exports.default = Redo;