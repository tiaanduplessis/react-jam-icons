"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaperPlaneF = function PaperPlaneF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 58 58" }, props),
    _react2.default.createElement("path", {
      d: "M27.1 33.3l9.5 22.6c1.1 2.5 2.6 2.5 3.5-.1L57.4 4.1c.2-.5.2-1 .3-1.4L27.1 33.3zM54.2.9L2.5 18.2c-2.6.9-2.7 2.5-.1 3.5L25 31.2 55.5.7c-.4 0-.8.1-1.3.2z",
      fill: "#333"
    })
  );
};

exports.default = PaperPlaneF;