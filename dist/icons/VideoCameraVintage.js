"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoCameraVintage = function VideoCameraVintage(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 60 58" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M8 50h19V34H8v16zm4-12h11v8H12v-8zm8-20c2 4.7 6.6 8 12 8 7.2 0 13-5.8 13-13S39.2 0 32 0 19 5.8 19 13c0 .4 0 .8.1 1.2-1.3-2.5-4-4.2-7.1-4.2-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8zM32 4c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zM12 22c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm48 4l-12 6v-4c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2v-4l12 6V26zM44 54H4V30h40v24zm12-2.5l-8-4v-11l8-4v19z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 36, cy: 42, r: 4 }),
    _react2.default.createElement("circle", { className: "st0", cx: 32, cy: 13, r: 4 })
  );
};

exports.default = VideoCameraVintage;