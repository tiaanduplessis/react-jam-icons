"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrightnessUp = function BrightnessUp(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M18.6 21.5c.8-1 1.8-2 2.8-2.8l-9.3-9.3c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l9.3 9.3zm0 21l-9.3 9.3c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l9.3-9.3c-1-.8-1.9-1.7-2.8-2.8zM34 15.1V2c0-1.1-.9-2-2-2s-2 .9-2 2v13.1c.7-.1 1.3-.1 2-.1s1.3 0 2 .1zm11.4 6.4l9.3-9.3c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-9.3 9.3c1 .8 1.9 1.7 2.8 2.8zM15 32c0-.7 0-1.3.1-2H2c-1.1 0-2 .9-2 2s.9 2 2 2h13.1c-.1-.7-.1-1.3-.1-2zm47-2H48.9c.1.7.1 1.3.1 2s0 1.3-.1 2H62c1.1 0 2-.9 2-2s-.9-2-2-2zM30 48.9V62c0 1.1.9 2 2 2s2-.9 2-2V48.9c-.7.1-1.3.1-2 .1s-1.3 0-2-.1zm15.4-6.4c-.8 1-1.8 2-2.8 2.8l9.3 9.3c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8l-9.3-9.3z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 32, cy: 32, r: 14 })
  );
};

exports.default = BrightnessUp;