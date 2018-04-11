"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var News = function News(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 50 64" }, props),
    _react2.default.createElement("path", {
      d: "M47 0H3C1.3 0 0 1.3 0 3v58c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-1 60H4V4h42v56zM11 23h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H11c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2zm18-10h10c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2H29c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2zm-.5 5h11c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zm0 5h11c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zM11 32h28c1.1 0 2-.9 2-2s-.9-2-2-2H11c-1.1 0-2 .9-2 2s.9 2 2 2zm0 8h28c1.1 0 2-.9 2-2s-.9-2-2-2H11c-1.1 0-2 .9-2 2s.9 2 2 2zm0 8h28c1.1 0 2-.9 2-2s-.9-2-2-2H11c-1.1 0-2 .9-2 2s.9 2 2 2zm0 8h28c1.1 0 2-.9 2-2s-.9-2-2-2H11c-1.1 0-2 .9-2 2s.9 2 2 2z",
      fill: "#333"
    })
  );
};

exports.default = News;