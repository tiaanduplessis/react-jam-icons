"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hourglass = function Hourglass(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 38 64" }, props),
    _react2.default.createElement("path", {
      d: "M9.3 33.3zm20.9-3.9c3-2.9 4.8-7 4.8-11.4V6c1.6 0 3-1.3 3-3V0H0v3c0 1.7 1.3 3 3 3v12c0 4.5 1.8 8.5 4.8 11.4 1.8 1.7 1.5 1.3 1.5 1.3.6.5 1.3.9 1.9 1.3-.7.4-1.3.8-1.9 1.2-.2.2-.6.6-1.5 1.3-3 3-4.8 7-4.8 11.5v12c-1.6 0-3 1.3-3 3v3h38v-3c0-1.7-1.3-3-3-3V46c0-4.5-1.8-8.5-4.8-11.4-2.1-1.9-1.5-1.3-1.5-1.3-.6-.5-1.3-.9-1.9-1.3.7-.4 1.3-.8 1.9-1.3 0 0-.5.5 1.5-1.3zM31 46v12H7V46c0-4.4 2.4-8.4 6.2-10.5l5.8-3.2 5.8 3.2C28.6 37.6 31 41.6 31 46zm-6.2-17.5L19 31.7l-5.8-3.2C9.4 26.4 7 22.4 7 18V6h24v12c0 4.4-2.4 8.4-6.2 10.5z",
      fill: "#343434"
    })
  );
};

exports.default = Hourglass;