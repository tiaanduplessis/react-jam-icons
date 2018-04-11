"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeDown = function VolumeDown(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 45 62" }, props),
    _react2.default.createElement("path", {
      d: "M26.9 1.2L10.2 19H2c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h8.4l16.5 17.6c1.1 1.2 2.1.8 2.1-.8V2c0-1.7-.9-2-2.1-.8zM23 47.6L13 37H6V25h6.8L23 14.1v33.5zM34 20v6c2.8 0 5 2.2 5 5s-2.2 5-5 5v6c6.1 0 11-4.9 11-11s-4.9-11-11-11z",
      fill: "#333"
    })
  );
};

exports.default = VolumeDown;