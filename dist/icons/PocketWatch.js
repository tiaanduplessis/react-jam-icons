"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PocketWatch = function PocketWatch(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M31.1 17.1c1.8-1.8 2.9-4.3 2.9-7.1 0-5.5-4.5-10-10-10S14 4.5 14 10c0 2.8 1.1 5.3 2.9 7.1C7.1 20.1 0 29.2 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24c0-10.8-7.1-19.9-16.9-22.9zM17 10c0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.7-1.5 5.1-3.8 6.2l-1.5-.2c.2-.3.3-.7.3-1.1 0-1.1-.9-2-2-2s-2 .9-2 2c0 .4.1.8.3 1.1-.5 0-1 .1-1.5.2-2.3-1.1-3.8-3.5-3.8-6.2zm7 50C13 60 4 51 4 40s9-20 20-20 20 9 20 20-9 20-20 20zm11-20H25V23c0-.6-.4-1-1-1h-1c-.6 0-1 .4-1 1v19c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1z",
      fill: "#333"
    })
  );
};

exports.default = PocketWatch;