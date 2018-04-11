"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GhostF = function GhostF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M24 0C10.7 0 0 10.7 0 24v40l8.1-8 8 8 5.1-5.2L24 56l2.8 2.8L32 64l5.2-5.2L40 56l2.8 2.8L48 64V24C48 10.7 37.3 0 24 0zM14 28c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm20 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z",
      fill: "#343434"
    })
  );
};

exports.default = GhostF;