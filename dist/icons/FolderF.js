"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FolderF = function FolderF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 50" }, props),
    _react2.default.createElement("path", {
      d: "M0 48c0 1.1.9 2 2 2h60c1.1 0 2-.9 2-2V20H0v28zM62 7H24V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v14h64V9c0-1.1-.9-2-2-2z",
      fill: "#333"
    })
  );
};

exports.default = FolderF;