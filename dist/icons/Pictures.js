"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pictures = function Pictures(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M60 0H20c-2.2 0-4 1.8-4 4v12H4c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V48h12c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM44 60H9.6L18 48.4l8.5 10.2 2.3-1.9-5.2-6.2 8-10.4L44 50.5V60zm0-13.4L31.2 35.8l-9.5 12.4-3.9-4.6L5.9 60H4V20h40v26.6zm16-2.5H48V29.5l2.4-2.3L60 37v7.1zm0-11.5l-9.6-9.7-2.4 2.4V20c0-2.2-1.8-4-4-4H20V4h40v28.6zM14 40c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0-13c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z",
      fill: "#343434"
    })
  );
};

exports.default = Pictures;