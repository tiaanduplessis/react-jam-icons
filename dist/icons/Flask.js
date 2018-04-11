"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flask = function Flask(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 55" }, props),
    _react2.default.createElement("path", {
      d: "M47 52L34 27c-.6-1.2-1.2-1.9-2-3V8c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H16c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2v16c-.8 1.1-1.4 1.8-2 3L1 52c-.5 1.8.3 3 2 3h42c1.7 0 2.5-1.2 2-3zM17 3h14v2H17V3zM6 51l11-23c.5-.3 2-2 2-2V8h10v18s1.5 1.7 2 2l11 23H6zm14-21l-9 18h26l-9-18z",
      fill: "#343434"
    })
  );
};

exports.default = Flask;