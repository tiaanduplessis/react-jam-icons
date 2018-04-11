"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flag = function Flag(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 47 64" }, props),
    _react2.default.createElement("path", {
      d: "M36.8 20l8.9-12.7C47 5.5 46.2 4 44 4H4V2c0-1.1-.9-2-2-2S0 .9 0 2v60c0 1.1.9 2 2 2s2-.9 2-2V36h40c2.2 0 3-1.5 1.7-3.3L36.8 20zM4 32V8h36.3l-8.4 12 8.4 12H4z",
      fill: "#343434"
    })
  );
};

exports.default = Flag;