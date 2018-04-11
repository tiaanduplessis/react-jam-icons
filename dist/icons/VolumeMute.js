"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeMute = function VolumeMute(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 55 62" }, props),
    _react2.default.createElement("path", {
      d: "M27 1.1L10.3 19H2c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h8.4L27 60.7c1.1 1.2 2.1.9 2.1-.8v-58c0-1.6-.9-2-2.1-.8zm-3.9 46.6L13 37H6V25h6.9l10.2-10.9v33.6zm31.5-23.1l-4.2-4.2-6.4 6.4-6.4-6.4-4.2 4.2 6.4 6.4-6.4 6.4 4.2 4.2 6.4-6.4 6.4 6.4 4.2-4.2-6.4-6.4z",
      fill: "#333"
    })
  );
};

exports.default = VolumeMute;